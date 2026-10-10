import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

/** Route locale -> hreflang code. Kazakh uses the ISO 639-1 code `kk`. */
const HREFLANG: Record<string, string> = {
  en: "en",
  ru: "ru",
  kz: "kk",
};

const ROUTES = ["en", "ru", "kz"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        ROUTES.map((alt) => [HREFLANG[alt], `${SITE_URL}/${alt}`]),
      ),
    },
  }));
}
