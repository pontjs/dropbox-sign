import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

test("the built SDK completes an isolated authenticated round trip", async (context) => {
  const requests = [];
  const payload = { account: { account_id: "abc123" } };
  const server = createServer((request, response) => {
    requests.push({ method: request.method, url: request.url, headers: request.headers });
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(payload));
  });
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const address = server.address();
  assert(address && typeof address === "object");
  const esm = await import(
    `${pathToFileURL(resolve(repositoryRoot, "dist/index.mjs")).href}?e2e=${Date.now()}`
  );
  const client = esm.createDropboxSignClient({
    apiKey: "fixture-key",
    baseUrl: `http://127.0.0.1:${address.port}`,
  });
  const result = await client.account.accountGet({ email_address: "signer@example.com" });
  assert.deepEqual(result, payload);
  assert.equal(requests.length, 1);
  assert.equal(requests[0].method, "GET");
  assert.equal(requests[0].url, "/account?email_address=signer%40example.com");
  assert.equal(requests[0].headers.authorization, `Basic ${Buffer.from("fixture-key:").toString("base64")}`);

  const require = createRequire(import.meta.url);
  const cjs = require(resolve(repositoryRoot, "dist/index.js"));
  assert.equal(typeof cjs.createDropboxSignClient, "function");
  assert.equal(cjs.default, cjs.createDropboxSignClient);
});

test("the CLI and npm package surface are publishable", async () => {
  const { stdout: help } = await execFileAsync(
    process.execPath,
    [resolve(repositoryRoot, "dist/bin/cli.cjs"), "--help"],
    { cwd: repositoryRoot },
  );
  assert.match(help, /pontx-dropbox-sign/);

  const { stdout } = await execFileAsync("npm", ["pack", "--dry-run", "--json"], {
    cwd: repositoryRoot,
  });
  const [packed] = JSON.parse(stdout);
  const files = new Set(packed.files.map((file) => file.path));
  for (const expected of [
    "LICENSE",
    "LICENSES/Apache-2.0-upstream.txt",
    "README.md",
    "THIRD_PARTY_NOTICES.md",
    "dist/index.d.ts",
    "dist/index.js",
    "dist/index.mjs",
    "dist/bin/api-lock.json",
    "dist/bin/cli.cjs",
  ]) {
    assert(files.has(expected), `missing npm artifact: ${expected}`);
  }
});

test("the CLI blocks mutations until an exact redacted dry-run is confirmed", async (context) => {
  const requests = [];
  const server = createServer((request, response) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => { body += chunk; });
    request.on("end", () => {
      requests.push({ method: request.method, url: request.url, headers: request.headers, body });
      response.writeHead(201, { "content-type": "application/json" });
      response.end(JSON.stringify({ api_app: { client_id: "fixture" } }));
    });
  });
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const address = server.address();
  assert(address && typeof address === "object");
  const cli = resolve(repositoryRoot, "dist/bin/cli.cjs");
  const args = [
    cli,
    "call",
    "apiApp",
    "apiAppCreate",
    "--body",
    JSON.stringify({ name: "Fixture App", domains: ["example.com"] }),
    "--env",
    `http://127.0.0.1:${address.port}`,
  ];
  const env = { ...process.env, DROPBOX_SIGN_API_KEY: "fixture-key-never-log" };

  const preview = await execFileAsync(process.execPath, [...args, "--dry-run", "--curl"], {
    cwd: repositoryRoot,
    env,
  });
  assert.equal(requests.length, 0);
  assert.match(preview.stderr, /authorization: <redacted>/i);
  assert.doesNotMatch(preview.stderr, /fixture-key-never-log/);
  const token = preview.stderr.match(/ptx1\.\d+\.[a-f0-9]{64}/)?.[0];
  assert(token, "dry-run did not return a mutation confirmation token");

  await assert.rejects(
    execFileAsync(process.execPath, args, { cwd: repositoryRoot, env }),
    (error) => /Mutation blocked/.test(error.stderr),
  );
  assert.equal(requests.length, 0);

  const changedArgs = args.map((argument) =>
    argument.includes('"Fixture App"')
      ? argument.replace("Fixture App", "Changed Fixture App")
      : argument,
  );
  await assert.rejects(
    execFileAsync(process.execPath, [...changedArgs, "--confirm", token], {
      cwd: repositoryRoot,
      env,
    }),
    (error) => /Mutation blocked/.test(error.stderr),
  );
  assert.equal(requests.length, 0);

  const executed = await execFileAsync(
    process.execPath,
    [...args, "--confirm", token],
    { cwd: repositoryRoot, env },
  );
  assert.match(executed.stdout, /"client_id": "fixture"/);
  assert.equal(requests.length, 1);
  assert.equal(requests[0].method, "POST");
  assert.equal(requests[0].url, "/api_app");
  assert.equal(requests[0].headers.authorization, `Basic ${Buffer.from("fixture-key-never-log:").toString("base64")}`);
  assert.deepEqual(JSON.parse(requests[0].body), { name: "Fixture App", domains: ["example.com"] });
});

test("the CLI writes binary downloads byte-for-byte only to an output file", async (context) => {
  const bytes = Buffer.from([0x50, 0x4b, 0x03, 0x04, 0x00, 0xff]);
  const requests = [];
  const server = createServer((request, response) => {
    requests.push({ method: request.method, url: request.url, headers: request.headers });
    response.writeHead(200, { "content-type": "application/zip" });
    response.end(bytes);
  });
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));

  const temporaryDirectory = await mkdtemp(join(tmpdir(), "pontx-dropbox-sign-"));
  context.after(() => rm(temporaryDirectory, { recursive: true, force: true }));
  const outputPath = join(temporaryDirectory, "documents.zip");
  const address = server.address();
  assert(address && typeof address === "object");

  const result = await execFileAsync(
    process.execPath,
    [
      resolve(repositoryRoot, "dist/bin/cli.cjs"),
      "call",
      "signatureRequest",
      "signatureRequestFiles",
      "--signature_request_id",
      "fixture-request",
      "--env",
      `http://127.0.0.1:${address.port}`,
      "--output",
      outputPath,
    ],
    {
      cwd: repositoryRoot,
      env: { ...process.env, DROPBOX_SIGN_API_KEY: "fixture-key-never-log" },
    },
  );

  assert.equal(result.stdout, "");
  assert.match(result.stderr, /Response saved to:/);
  assert.deepEqual(await readFile(outputPath), bytes);
  assert.equal(requests.length, 1);
  assert.equal(requests[0].method, "GET");
  assert.equal(requests[0].url, "/signature_request/files/fixture-request");
  assert.equal(
    requests[0].headers.authorization,
    `Basic ${Buffer.from("fixture-key-never-log:").toString("base64")}`,
  );
});
