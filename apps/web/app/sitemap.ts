import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  const routes = [
    "/",
    "/uutiset",
    "/seura",
    "/joukkueet",
    "/ottelut-ja-tulokset",
    "/tapahtumat",
    "/media",
    "/yhteistyokumppanit",
    "/lahjoitukset",
    "/yhteystiedot"
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}