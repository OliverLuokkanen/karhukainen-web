import Link from "next/link";
import { teams, divisions } from "../../lib/teams";
import { torneopalConfig } from "../../lib/torneopalConfig";
import { TorneopalWidget } from "../../components/TorneopalWidget";

export default function MatchesAndResultsPage({
  searchParams,
}: {
  searchParams?: { team?: string; division?: string };
}) {
  const teamSlug = searchParams?.team ?? teams[0]?.slug;
  const selected = teams.find((t) => t.slug === teamSlug) ?? teams[0];

  // valittu divisioona, tai valitse joukkueen divisioona oletuksena
  const activeDivision = (searchParams?.division as "1div" | "2div") ?? selected.division;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Ottelut & tulokset</h1>
        <p className="text-slate-600">Tarkastele sarjataulukkoa ja joukkueiden otteluohjelmia.</p>
      </header>

      {/* Division tabs */}
      <div className="flex gap-2">
        {(["1div", "2div"] as const).map((d) => (
          <Link
            key={d}
            href={`/ottelut-ja-tulokset?division=${d}`}
            className={`rounded-md px-3 py-2 text-sm font-semibold ring-1 transition ${
              d === activeDivision ? "bg-blue-600 text-white ring-blue-600" : "bg-white text-slate-900 ring-black/10 hover:bg-slate-50"
            }`}
          >
            {divisions[d].label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sarjataulukko (division) */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Sarjataulukko — {divisions[activeDivision].label}</h2>

          {/* Käyttää torneopalConfig.standings[division] src:ia */}
          {torneopalConfig.standings[activeDivision] ? (
            <TorneopalWidget src={torneopalConfig.standings[activeDivision]} widget="scoretable" />
          ) : (
            <div className="rounded-xl border border-dashed border-black/20 bg-white p-5 text-sm text-slate-600">
              Sarjataulukon widget-src puuttuu konfigista. Lisää `apps/web/lib/torneopalConfig.ts` -tiedostoon oikea src.
            </div>
          )}
        </section>

        {/* Valitun joukkueen otteluohjelma */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Valitse joukkue</h2>

          <div className="flex flex-wrap gap-2">
            {teams.map((t) => (
              <Link
                key={t.slug}
                href={`/ottelut-ja-tulokset?team=${encodeURIComponent(t.slug)}&division=${activeDivision}`}
                className={`rounded-md px-3 py-2 text-sm font-semibold ring-1 transition ${
                  t.slug === selected.slug ? "bg-blue-600 text-white ring-blue-600" : "bg-white text-slate-900 ring-black/10 hover:bg-slate-50"
                }`}
              >
                {t.name}
              </Link>
            ))}
          </div>

          {!selected.torneopalTeamId ? (
            <div className="rounded-xl border border-dashed border-black/20 bg-white p-5 text-sm text-slate-600">
              Torneopal teamId puuttuu tälle joukkueelle.
            </div>
          ) : (
            <TorneopalWidget teamId={selected.torneopalTeamId} widget="schedule" title={`Otteluohjelma: ${selected.name}`} />
          )}
        </section>
      </div>

      {/* Kaikkien omien joukkueiden otteluohjelmat (valinnainen) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Kaikkien seurajoukkueiden otteluohjelmat</h2>
          <div className="text-sm text-slate-600">Kaikki joukkueet yhdellä sivulla</div>
        </div>

        <div className="grid gap-6">
          {teams.map((t) => (
            <div key={t.slug}>
              <div className="mb-2 text-sm font-semibold text-slate-700">{t.name}</div>
              {t.torneopalTeamId ? (
                <TorneopalWidget teamId={t.torneopalTeamId} widget="schedule" />
              ) : (
                <div className="rounded-xl border border-dashed border-black/20 bg-white p-4 text-sm text-slate-600">
                  Ei teamId:tä — lisää `lib/teams.ts`-tiedostoon.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}