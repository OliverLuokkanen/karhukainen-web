export const siteConfig = {
  name: "RB Karhukainen",
  slogan: "tosissaan, muttei tosikkona",
  founded: 2022,
  email: "karhukainenry@gmail.com",
  instagramUrl: "https://www.instagram.com/rbkarhukainen/",
  torneopallo: {
    label: "1DIV (Torneopallo)",
    url: "https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&sarja=1DIV"
  },
  teams: [
    { name: "Karhukainen I", nickname: "RBK-Tardigrades", division: "1.div", slug: "karhukainen-i" },
    { name: "Karhukainen II", nickname: "RBK-Waterbears", division: "1.div", slug: "karhukainen-ii" },
    { name: "Karhukainen III", nickname: "RBK-Vesikarhut", division: "1.div", slug: "karhukainen-iii" },
    { name: "Karhukainen IV", nickname: "RBK-Likokuhnurit", division: "2.div", slug: "karhukainen-iv" },
    { name: "Karhukainen V", nickname: "RBK-Merokensis", division: "2.div", slug: "karhukainen-v" },
  ],
  membershipTypes: ["Aikuisjäsen", "Juniorijäsen", "Kannatusjäsen", "Seniori", "Kunniajäsen"],
} as const;