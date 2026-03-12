export type Match = {
  id: string;
  date: string; // ISO: "2026-02-20T18:30:00+02:00"
  competition?: string;
  homeTeam: string;
  awayTeam: string;
  venue?: string;

  // tulos (kun pelattu)
  status: "upcoming" | "played";
  homeScore?: number;
  awayScore?: number;

  // mihin joukkueeseen tämä liittyy (joukkue slug)
  teamSlug: string;
};

export const matches: Match[] = [
  {
    id: "m1",
    teamSlug: "miehet",
    date: "2026-02-20T18:30:00+02:00",
    competition: "Runkosarja",
    homeTeam: "Karhukainen",
    awayTeam: "Vastustaja",
    venue: "Oulu",
    status: "upcoming",
  },
  {
    id: "m2",
    teamSlug: "miehet",
    date: "2026-02-13T19:00:00+02:00",
    competition: "Runkosarja",
    homeTeam: "Vastustaja",
    awayTeam: "Karhukainen",
    venue: "Vieras",
    status: "played",
    homeScore: 4,
    awayScore: 4,
  },
];