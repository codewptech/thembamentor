import { existsSync, readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const configPath = path.join(root, "wrangler.jsonc");
const entry = path.join(root, ".output/server/index.mjs");
const assets = path.join(root, ".output/public");

assert(existsSync(configPath), "wrangler.jsonc is missing");

const config = readFileSync(configPath, "utf8");

// Verify expected Wrangler configuration
assert(
  /"main"\s*:\s*"\.output\/server\/index\.mjs"/.test(config),
  "Incorrect Worker entry point in wrangler.jsonc",
);

assert(
  /"directory"\s*:\s*"\.output\/public"/.test(config),
  "Incorrect assets directory in wrangler.jsonc",
);

assert(
  /"nodejs_compat"/.test(config),
  "Cloudflare nodejs_compat flag is missing",
);

// Verify build output
assert(existsSync(entry), `Worker entry point missing: ${entry}`);

assert(
  existsSync(assets) && statSync(assets).isDirectory(),
  `Static assets directory missing: ${assets}`,
);

assert(readdirSync(assets).length > 0, "No static assets found");

// Sitemap must remain server-generated
assert(
  !existsSync(path.join(assets, "sitemap.xml")),
  "Sitemap was generated statically",
);

console.log("PASS: Cloudflare Worker entry point exists.");
console.log("PASS: Static assets directory exists.");
console.log("PASS: Wrangler configuration references expected outputs.");
console.log("PASS: Dynamic sitemap is not pre-rendered.");
console.log("SUCCESS: Worker build verification completed.");
