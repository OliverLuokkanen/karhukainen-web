export type Division = "1div" | "2div";

export type Team = {
  slug: string;
  name: string;
  division: Division;
  homeVenue?: string;
  torneopalTeamId?: number;
};

export const divisions: Record<Division, { label: string }> = {
  "1div": { label: "1. divisioona" },
  "2div": { label: "2. divisioona" },
};

export const teams: Team[] = [
  { slug: "vesikarhut", name: "Vesikarhut", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5894 },
  { slug: "tardigrades", name: "Tardigrades", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5747 },
  { slug: "waterbears", name: "Waterbears", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5831 },

  { slug: "likokuhnurit", name: "Likokuhnurit", division: "2div", homeVenue: "Oulu", torneopalTeamId: 5893 },
  { slug: "merokensis", name: "Merokensis", division: "2div", homeVenue: "Oulu", torneopalTeamId: 5955 },
];