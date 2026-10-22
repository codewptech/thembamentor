// Verify the artifacts expected by wrangler.jsonc after `npm run build`.
// Usage: npm run check:worker
import { existsSync, readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const configRaw = readFileSync(
  path.join(root, "wrangler.jsonc"),
  "utf8",
).replace(/^\s*\/\/.*$/gm, "");
const config = JSON.parse(configRaw);
const entry = path.join(root, config.main);
const assets = path.join(root, config.assets.directory);

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
assert(
  existsSync(entry),
  `Cloudflare SSR Worker entry point missing: ${entry}`,
);
assert(
  existsSync(assets) && statSync(assets).isDirectory(),
  `Static assets directory missing: ${assets}`,
);
assert(
  config.compatibility_flags.includes("nodejs_compat"),
  "Cloudflare nodejs_compat flag is missing",
);
assert(
  readdirSync(assets).length > 0,
  "No static assets found; check the Nuxt build output",
);
assert(
  !existsSync(path.join(assets, "sitemap.xml")),
  "sitemap.xml was generated statically; it must remain a runtime route",
);
console.log(
  "PASS: Cloudflare Worker entry point and static assets are present.",
);
console.log("PASS: /sitemap.xml is not being pre-rendered.");
console.log(
  "NEXT: run `npx wrangler dev` and test /, /blog, and /sitemap.xml over HTTP.",
);
