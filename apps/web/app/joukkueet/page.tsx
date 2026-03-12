import Link from "next/link";
import { divisions, teams } from "../../lib/teams";

export default function TeamsPage() {
  const byDivision = teams.reduce(
    (acc, t) => {
      acc[t.division].push(t);
      return acc;
    },
    { "1div": [] as typeof teams, "2div": [] as typeof teams }
  );

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Joukkueet</h1>
        <p className="text-slate-600">Valitse joukkue ja katso tulevat ottelut ja tulokset.</p>
      </header>

      {(Object.keys(byDivision) as Array<keyof typeof byDivision>).map((div) => (
        <section key={div} className="space-y-4">
          <h2 className="text-xl font-bold">{divisions[div].label}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {byDivision[div].map((t) => (
              <Link
                key={t.slug}
                href={`/joukkueet/${t.slug}`}
                className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="text-lg font-bold">{t.name}</div>
                <div className="mt-1 text-sm font-medium text-slate-700">{t.nickname}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {divisions[t.division].label}
                  {t.homeVenue ? ` • ${t.homeVenue}` : ""}
                </div>
                <div className="mt-4 text-sm font-semibold text-blue-700">Avaa →</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}