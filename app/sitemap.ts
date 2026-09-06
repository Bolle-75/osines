import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://osines.com";

  const locales = ["es", "en", "de", "ru"];

  const routes = [
    "",
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.5,
    }))
  );
}