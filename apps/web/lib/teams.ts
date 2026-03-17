export type Division = "1div" | "2div";

export type Team = {
  slug: string;
  name: string;
  division: Division;
  managerName: string;
  torneopalTeamId?: number;
};

export const divisions: Record<Division, { label: string }> = {
  "1div": { label: "1. divisioona" },
  "2div": { label: "2. divisioona" },
};

export const teams: Team[] = [
  { slug: "tardigrades", name: "Tardigrades", division: "1div", managerName: "Petri Luokkanen", torneopalTeamId: 5747 },
  { slug: "waterbears", name: "Waterbears", division: "1div", managerName: "Jere Karttunen", torneopalTeamId: 5831 },
  { slug: "vesikarhut", name: "Vesikarhut", division: "1div", managerName: "Hannu Kaikkonen", torneopalTeamId: 5894 },

  { slug: "likokuhnurit", name: "Likokuhnurit", division: "2div", managerName: "Esa-matti Lauhikari", torneopalTeamId: 5893 },
  { slug: "merokensis", name: "Merokensis", division: "2div", managerName: "Mikkal Puominen", torneopalTeamId: 5955 },
];