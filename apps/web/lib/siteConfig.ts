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
    { name: "Tardigrades", division: "1.div", slug: "tardigrades", managerName: "Petri Luokkanen" },
    { name: "Waterbears", division: "1.div", slug: "waterbears", managerName: "Jere Karttunen" },
    { name: "Vesikarhut", division: "1.div", slug: "vesikarhut", managerName: "Hannu Kaikkonen" },
    { name: "Likokuhnurit", division: "2.div", slug: "likokuhnurit", managerName: "Esa-matti Lauhikari" },
    { name: "Merokensis", division: "2.div", slug: "merokensis", managerName: "Mikkal Puominen" },
  ],
  membershipTypes: ["Aikuisjäsen", "Juniorijäsen", "Kannatusjäsen", "Seniori", "Kunniajäsen"],
} as const;