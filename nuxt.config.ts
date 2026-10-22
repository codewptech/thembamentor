export default defineNuxtConfig({
  compatibilityDate: "2026-10-01",
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      htmlAttrs: { lang: "en-IN" },
      meta: [
        { name: "theme-color", content: "#15382f" },
        { name: "color-scheme", content: "light" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://thembamentor.in",
      contactEmail: "info.thembamentor@gmail.com",
    },
  },
  nitro: {
    // Build a Cloudflare Worker, not a standalone Node.js server.
    // Pages and the sitemap are rendered at request time by the Worker.
    // In particular, never prerender /sitemap.xml: it is a live Nitro route.
    preset: "cloudflare_module",
  },
});
