# The MBA Mentor — Final Nuxt 4 SSR / Cloudflare Workers

This is the **Cloudflare Workers SSR deployment package**, adapted from the user's original **The MBA Mentor complete rebuild**. All original public page components, content, styles, images, and branding have been retained. It uses **Nuxt 4 + Vue + Sass**, not a static-only Cloudflare Pages deployment.

**Website:** https://thembamentor.in  
**Email:** info.thembamentor@gmail.com  
**Cloudflare Worker name:** `thembamentor`

## Quick start

Use Node.js **22.22.3+** (or another currently supported compatible version). In the project directory:

```bash
npm install
npm run dev
```

The first `npm install` generates a lockfile. **Commit `package-lock.json`** so Cloudflare can install dependencies reproducibly. Use `npm ci` for later installations when the lockfile is committed.

## Cloudflare Workers deployment

Cloudflare Workers Git connection: choose **codewptech/thembamentor** and the folder containing this project's `package.json` as the repository root.

| Cloudflare UI field | Value |
|---|---|
| Project name | `thembamentor` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` (Cloudflare UI default; for reliable local preview use `npm run preview`) |
| Framework / output | **Workers**, NOT Cloudflare Pages static assets |

The explicit configuration in `wrangler.jsonc` defines:

- Nitro preset `cloudflare_module`, producing `.output/server/index.mjs`
- Client assets `.output/public`, served through Cloudflare Workers Assets
- Node compatibility, current compatibility date, production and Previews Base logs/traces/issues at 100% sampling
- A **dynamic** Nitro server route `server/routes/sitemap.xml.ts` at `/sitemap.xml`
- `robots.txt` pointing crawlers to `https://thembamentor.in/sitemap.xml`

The build and deploy commands in the Cloudflare setup screen are correct **after uploading this project to GitHub** and ensuring the build root is right.

### Local SSR / Worker test

```bash
npm install
npm run build
npm run check:worker
npx wrangler dev
```

Visit the local URL printed by Wrangler and check:

1. `/` and `/about` render complete HTML.
2. `/admission-guidance`, `/blog`, `/contact`, and `/privacy` respond.
3. Each blog article URL returns an HTML page.
4. `/sitemap.xml` responds with `Content-Type: application/xml` and lists the six standard pages and three blog URLs.
5. `/robots.txt` points at the production sitemap.
6. Unknown paths and blog slugs return proper 404 responses.

For deployment directly from your own terminal:

```bash
npm run deploy
```

Cloudflare dashboard Git builds use the separate `npm run build` and `npx wrangler deploy` steps listed above; do not run the combined deploy script as the dashboard *deploy command* (it would rebuild unnecessarily).

**Note:** `npm run generate` is deliberately NOT provided: this is an SSR Workers build, not a fully static website.

## Sitemap — modular and runtime-served

`server/routes/sitemap.xml.ts` is executed inside the Worker when `/sitemap.xml` is requested. It imports the same `articles` array as the blog listing and detail pages, so **new article slugs appear in the sitemap after the next build/deploy**. It sends a one-hour public cache header; changes may not appear immediately in every cache after deployment. The sitemap is **not pre-rendered** into a static XML file.

`app/data/articles.ts` is the single source of truth for blog content. New articles currently require code edits and deployments—there is no CMS or database yet.

## Routes

- `/` — Home
- `/about` — About
- `/admission-guidance` — MBA / PGDM guidance
- `/blog` — Blog listing
- `/blog/mba-vs-pgdm-how-to-compare` — Article 1
- `/blog/questions-before-shortlisting-mba-colleges` — Article 2
- `/blog/prepare-for-mba-pgdm-applications` — Article 3
- `/contact` — Contact
- `/privacy` — Privacy notice
- `/sitemap.xml` — **server-rendered XML sitemap**
- `/robots.txt` — public static crawler instructions

## Existing content and design

This package preserves the earlier complete-rebuild source (Vue page layout, 3 detailed articles, forest-green / ivory design, Sass, OG image, mobile UI, email contact). It does **not** introduce fees, commissions, paid counselling claims, admission guarantees, or unverified partner affiliations in the website's public copy.

The contact form uses a browser-side `mailto:` link: visitors must confirm sending in their email program. It does **not** store enquiries, send automatic emails, or connect to a database. Later, a protected Worker API can be added with deliberate spam, consent, security, and privacy controls.

## Environment and preview notes

The public domain and email are configured by default in `nuxt.config.ts` and can be overridden with `NUXT_PUBLIC_SITE_URL` and `NUXT_PUBLIC_CONTACT_EMAIL` if needed. Do not commit credentials. The explicit `previews.observability` block configures **Previews Base** with the same 100% logging/tracing and Issues settings as production. Preview builds require Wrangler **4.135.0+**, included in `devDependencies`. Change sampling separately under `observability` and `previews.observability` as traffic grows.

There is **no Google Analytics, paid CMS, database, admin panel, or third-party image service** in this version.

## Validation status

The supplied ZIP has been checked for structural integrity and its configuration/TypeScript/Vue source statically inspected. This environment cannot reach the npm registry, so dependencies could not be installed and **a full Nuxt build or live Cloudflare Worker runtime test has not been completed here**. Run the commands above in your normal connected development/Cloudflare environment before publishing on `thembamentor.in`.

Official reference: https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/nuxt/
