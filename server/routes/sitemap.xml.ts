import { articles } from "../../app/data/articles";

// Runtime sitemap: deliberately NOT in Nitro prerender routes.
// Publishing a new entry in app/data/articles.ts updates blog navigation and this XML
// after the next Worker deployment. No manual XML edits are needed.
export default defineEventHandler((event) => {
  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");
  setHeader(event, "X-Content-Type-Options", "nosniff");

  const config = useRuntimeConfig(event);
  const base = String(
    config.public.siteUrl || "https://thembamentor.in",
  ).replace(/\/$/, "");
  const staticPaths = [
    "/",
    "/about",
    "/admission-guidance",
    "/blog",
    "/contact",
    "/privacy",
  ];
  const pages = [
    ...staticPaths.map((path) => ({
      path,
      lastmod: undefined as string | undefined,
    })),
    ...articles.map((article) => ({
      path: `/blog/${article.slug}`,
      lastmod: article.date,
    })),
  ];
  const escapeXml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  const nodes = pages
    .map(
      ({ path, lastmod }) =>
        `  <url><loc>${escapeXml(base + path)}</loc>${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ""}</url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nodes}\n</urlset>`;
});
