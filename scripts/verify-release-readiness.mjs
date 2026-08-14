import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const packageJson = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));
const workspace = await readFile(resolve(root, "pnpm-workspace.yaml"), "utf8");

let lockfile;
try {
  lockfile = await readFile(resolve(root, "pnpm-lock.yaml"), "utf8");
} catch (error) {
  if (error?.code === "ENOENT") {
    throw new Error(
      "Release blocked: pnpm-lock.yaml is absent. Generate and commit it only after the exact Pontx dependencies are published.",
    );
  }
  throw error;
}

const serializedConfiguration = `${workspace}\n${lockfile}`;
assert(
  !/(?:link|file|workspace):|overrides\s*:/i.test(serializedConfiguration),
  "Release blocked: local dependency links or workspace overrides remain.",
);

for (const [name, version] of Object.entries(packageJson.dependencies ?? {})) {
  assert.match(
    version,
    /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/,
    `Release blocked: ${name} must use an exact registry version.`,
  );
  let published;
  try {
    published = execFileSync(
      "npm",
      ["view", `${name}@${version}`, "version", "--json"],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    ).trim();
  } catch {
    throw new Error(`Release blocked: ${name}@${version} is not available in the npm registry.`);
  }
  assert.equal(
    JSON.parse(published),
    version,
    `Release blocked: npm resolved an unexpected version for ${name}.`,
  );
}

console.log("Release prerequisites verified: frozen registry graph, no local links.");
