export const siteConfig = {
  name: "RB Karhukainen",
  slogan: "tosissaan, muttei tosikkona",
  email: "karhukainenry@gmail.com",
  instagramUrl: "https://www.instagram.com/rbkarhukainen/",
  torneopallo: {
    label: "1DIV (Torneopallo)",
    url: "https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&sarja=1DIV"
  },
  teams: [
    { name: "Joukkue 1", slug: "joukkue-1" },
    { name: "Joukkue 2", slug: "joukkue-2" },
    { name: "Joukkue 3", slug: "joukkue-3" },
    { name: "Joukkue 4", slug: "joukkue-4" },
    { name: "Joukkue 5", slug: "joukkue-5" }
  ]
} as const;