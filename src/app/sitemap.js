import { absoluteUrl, pageSeo } from "../lib/site";

const lastModified = new Date("2026-08-17T00:00:00+02:00");

export default function sitemap() {
  return [
    {
      url: absoluteUrl(pageSeo.home.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/assets/pol-hero-gransasso.jpg")],
    },
    {
      url: absoluteUrl(pageSeo.civica.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/assets/politica-card-campo-imperatore.jpg")],
    },
    ...[
      pageSeo.territorio,
      pageSeo.djEventi,
      pageSeo.mototurismo,
      pageSeo.youtubeMedia,
      pageSeo.graficaBranding,
      pageSeo.contatti,
    ].map((page) => ({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: "monthly",
      priority: page === pageSeo.contatti ? 0.6 : 0.8,
      ...(page.image ? { images: [absoluteUrl(page.image)] } : {}),
    })),
    {
      url: absoluteUrl(pageSeo.privacy.path),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
