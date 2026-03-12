export type Division = "1div" | "2div";

export type Team = {
  slug: string;
  name: string;
  nickname: string;
  division: Division;
  homeVenue?: string;
  torneopalTeamId?: number;
};

export const divisions: Record<Division, { label: string }> = {
  "1div": { label: "1. divisioona" },
  "2div": { label: "2. divisioona" },
};

export const teams: Team[] = [
  { slug: "karhukainen-i", name: "Karhukainen I", nickname: "RBK-Tardigrades", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5747 },
  { slug: "karhukainen-ii", name: "Karhukainen II", nickname: "RBK-Waterbears", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5831 },
  { slug: "karhukainen-iii", name: "Karhukainen III", nickname: "RBK-Vesikarhut", division: "1div", homeVenue: "Oulu", torneopalTeamId: 5894 },

  { slug: "karhukainen-iv", name: "Karhukainen IV", nickname: "RBK-Likokuhnurit", division: "2div", homeVenue: "Oulu", torneopalTeamId: 5893 },
  { slug: "karhukainen-v", name: "Karhukainen V", nickname: "RBK-Merokensis", division: "2div", homeVenue: "Oulu", torneopalTeamId: 5955 },
];