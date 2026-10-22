export function usePageSeo(title: string, description: string, path: string) {
  const config = useRuntimeConfig();
  const base = String(config.public.siteUrl).replace(/\/$/, "");
  const canonical = `${base}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
  const image = `${base}/og-image.png`;

  useSeoMeta({
    title: `${title} | The MBA Mentor`,
    description,
    ogTitle: `${title} | The MBA Mentor`,
    ogDescription: description,
    ogUrl: canonical,
    ogImage: image,
    ogImageAlt: "The MBA Mentor — thoughtful MBA and PGDM admission guidance",
    ogSiteName: "The MBA Mentor",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: `${title} | The MBA Mentor`,
    twitterDescription: description,
    twitterImage: image,
  });
  useHead({ link: [{ rel: "canonical", href: canonical }] });
}
