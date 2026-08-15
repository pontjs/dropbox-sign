import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const contractBytes = await readFile(resolve(root, "openapi.json"));
const contract = JSON.parse(contractBytes);
const provenance = JSON.parse(
  await readFile(resolve(root, "openapi.provenance.json"), "utf8"),
);

const httpMethods = new Set([
  "get", "put", "post", "delete", "options", "head", "patch", "trace",
]);
const safeMethods = new Set(["get", "head", "options"]);
const operations = [];

for (const [path, pathItem] of Object.entries(contract.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method.toLowerCase())) continue;
    operations.push({ path, method: method.toLowerCase(), operation });
  }
}

const visit = (value, callback, path = "$") => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => visit(item, callback, `${path}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}.${key}`;
    callback(key, child, childPath);
    visit(child, callback, childPath);
  }
};

const externalReferences = [];
visit(contract, (key, value, path) => {
  if (key === "$ref" && (typeof value !== "string" || !value.startsWith("#/"))) {
    externalReferences.push({ path, value });
  }
});

assert.equal(contract.openapi, "3.0.3", "unexpected OpenAPI version");
assert.equal(Object.keys(contract.paths ?? {}).length, 67, "path count drifted");
assert.equal(operations.length, 73, "Endpoint count drifted");
assert.equal(
  Object.keys(contract.components?.schemas ?? {}).length,
  217,
  "Schema count drifted",
);
assert.equal(
  Object.keys(contract.components?.schemas ?? {}).filter((name) =>
    name.startsWith("EventCallback"),
  ).length,
  27,
  "callback event Schema count drifted",
);
assert.equal(externalReferences.length, 0, "contract contains external references");

const operationIds = operations.map(({ operation }) => operation.operationId);
assert(operationIds.every((value) => typeof value === "string" && value.length > 0));
assert.equal(new Set(operationIds).size, 73, "operationId values must be unique");
assert(
  (contract.servers ?? []).length > 0 &&
    contract.servers.every(({ url }) => new URL(url).protocol === "https:"),
  "all provider servers must use HTTPS",
);

const dualRequestMedia = operations.filter(({ operation }) => {
  const media = operation.requestBody?.content ?? {};
  return media["application/json"] && media["multipart/form-data"];
});
assert.equal(dualRequestMedia.length, 19, "JSON + multipart coverage drifted");

const binaryOperations = operations.filter(({ operation }) =>
  Object.values(operation.responses ?? {}).some(({ content } = {}) =>
    content?.["application/pdf"] || content?.["application/zip"],
  ),
);
assert.equal(binaryOperations.length, 3, "PDF/ZIP Endpoint coverage drifted");

const mutationOperations = operations.filter(({ method }) => !safeMethods.has(method));
assert.equal(mutationOperations.length, 46, "mutation Endpoint count drifted");

const credentialKey = /authorization|api[-_]?key|access[-_]?token|client[-_]?secret|password|oauth/i;
const credentialValue = /\b(?:bearer|basic)\s+[A-Za-z0-9+/=._-]+|(?:api[-_]?key|access[-_]?token|client[-_]?secret)\s*[:=]/i;

for (const { path, method, operation } of operations) {
  const label = `${method.toUpperCase()} ${path}`;
  assert.equal(
    Object.hasOwn(operation, "x-pontx-proxy-enabled"),
    false,
    `${label} must not carry a policy-based execution disablement`,
  );
  assert.equal(
    Object.hasOwn(operation, "x-pontx-proxy-disabled-reason"),
    false,
    `${label} must not carry a policy-based execution disablement reason`,
  );
  assert.equal(
    operation["x-pontx-documentation-status"],
    "official",
    `${label} must retain official evidence status`,
  );
  assert(
    Array.isArray(operation["x-pontx-evidence"]) &&
      operation["x-pontx-evidence"].some((url) =>
        typeof url === "string" && url.includes(provenance.source.revision),
      ),
    `${label} needs immutable official evidence`,
  );

  const examples = operation["x-pontx-request-examples"];
  assert(examples && typeof examples === "object", `${label} needs a safe request example`);
  for (const [exampleName, example] of Object.entries(examples)) {
    const request = example?.request;
    assert(request && typeof request === "object", `${label}/${exampleName} request is missing`);
    visit(request, (key, value, requestPath) => {
      assert(!credentialKey.test(key), `${label}/${exampleName} exposes ${requestPath}`);
      if (typeof value === "string") {
        assert(
          !credentialValue.test(value),
          `${label}/${exampleName} contains a credential-like value at ${requestPath}`,
        );
      }
    });
  }
}

assert.deepEqual(
  contract.security,
  [
    { api_key: [] },
    {
      oauth2: [
        "account_access",
        "signature_request_access",
        "template_access",
        "team_access",
        "api_app_access",
        "basic_account_info",
        "request_signature",
      ],
    },
  ],
  "root security must retain Dropbox Sign Basic and OAuth authentication",
);
assert.equal(contract.components?.securitySchemes?.api_key?.type, "http");
assert.equal(contract.components?.securitySchemes?.api_key?.scheme, "basic");
assert.equal(contract.components?.securitySchemes?.oauth2?.type, "http");
assert.equal(contract.components?.securitySchemes?.oauth2?.scheme, "bearer");

const contractSha256 = createHash("sha256").update(contractBytes).digest("hex");
assert.equal(
  contractSha256,
  provenance.output.sha256,
  "openapi.json does not match its provenance hash",
);
assert.equal(provenance.output.paths, 67);
assert.equal(provenance.output.operations, 73);
assert.equal(provenance.output.schemas, 217);
assert.equal(provenance.output.eventCallbackSchemas, 27);
assert.equal(provenance.output.dualRequestMediaOperations, 19);
assert.equal(provenance.output.mutationOperations, 46);
assert.equal(provenance.output.binaryOperations, 3);
assert.equal(provenance.riskReview.executionEligibleOperations, 73);

console.log(
  `Verified Dropbox Sign contract ${contractSha256}: ` +
    "67 paths, 73 Endpoints, 217 Schemas, 19 JSON/multipart, 3 binary, 46 mutations.",
);
