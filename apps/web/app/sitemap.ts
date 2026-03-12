import type { MetadataRoute } from "next";
import { teams } from "../lib/teams";

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

  const teamRoutes = teams.map((t) => `/joukkueet/${t.slug}`);

  return [...routes, ...teamRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}