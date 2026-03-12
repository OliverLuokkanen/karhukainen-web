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
    { name: "Vesikarhut", slug: "joukkue-1" },
    { name: "Waterbears", slug: "joukkue-2" },
    { name: "Tardigrades", slug: "joukkue-3" },
    { name: "Merokensis", slug: "joukkue-4" },
    { name: "Likokuhnurit", slug: "joukkue-5" }
  ]
} as const;