import Link from "next/link";
import { teams, divisions } from "../../lib/teams";
import { torneopalConfig } from "../../lib/torneopalConfig";
import { TorneopalWidget } from "../../components/TorneopalWidget";
import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";

const placeholderMatches = [
  { date: "Pe 20.2.2026", time: "18:30", home: "Karhukainen I", away: "Oulu Eagles", result: "–", venue: "Ouluhalli" },
  { date: "La 21.2.2026", time: "14:00", home: "Karhukainen II", away: "Kärpät 2", result: "–", venue: "Raksila" },
  { date: "La 21.2.2026", time: "16:30", home: "Haukipudas HK", away: "Karhukainen III", result: "–", venue: "Haukipudas-halli" },
  { date: "Su 22.2.2026", time: "12:00", home: "Karhukainen IV", away: "OLS", result: "–", venue: "Ouluhalli" },
  { date: "Su 22.2.2026", time: "14:30", home: "Karhukainen V", away: "Nallikari FC", result: "–", venue: "Ouluhalli" },
];

export default function MatchesAndResultsPage({
  searchParams,
}: {
  searchParams?: { team?: string; division?: string };
}) {
  const teamSlug = searchParams?.team ?? teams[0]?.slug;
  const selected = teams.find((t) => t.slug === teamSlug) ?? teams[0];
  const activeDivision = (searchParams?.division as "1div" | "2div") ?? selected.division;

  return (
    <div>
      <PageHero
        title="Ottelut ja tulokset"
        subtitle="Otteluohjelma, tulokset ja sarjataulukko."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Ottelukalenteri */}
        <section>
          <SectionHeading title="Ottelukalenteri" subtitle="Tulevat ottelut" />
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#001641" }}>
                  <th className="px-4 py-3 text-left font-semibold text-white">Päivämäärä</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">Klo</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">Kotijoukkue</th>
                  <th className="px-4 py-3 text-center font-semibold text-white">Tulos</th>
                  <th className="px-4 py-3 text-right font-semibold text-white">Vierasjoukkue</th>
                  <th className="px-4 py-3 text-right font-semibold text-white">Paikka</th>
                </tr>
              </thead>
              <tbody>
                {placeholderMatches.map((m, i) => (
                  <tr
                    key={i}
                    className={`border-t border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">{m.date}</td>
                    <td className="px-4 py-3 text-slate-600">{m.time}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{m.home}</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-400">{m.result}</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-900">{m.away}</td>
                    <td className="px-4 py-3 text-right text-slate-500">{m.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sarjataulukko */}
        <section>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Sarjataulukko
              </h2>
            </div>
            <div className="flex gap-2">
              {(["1div", "2div"] as const).map((d) => (
                <Link
                  key={d}
                  href={`/ottelut-ja-tulokset?division=${d}`}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    d === activeDivision
                      ? "text-white"
                      : "bg-white text-slate-900 ring-1 ring-black/10 hover:bg-slate-50"
                  }`}
                  style={d === activeDivision ? { backgroundColor: "#001641" } : {}}
                >
                  {divisions[d].label}
                </Link>
              ))}
            </div>
          </div>

          {torneopalConfig.standings[activeDivision] ? (
            <TorneopalWidget
              src={torneopalConfig.standings[activeDivision]}
              widget="scoretable"
            />
          ) : (
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm text-sm text-slate-600">
              <p className="mb-4">Sarjataulukko ladataan Torneopallosta.</p>
              <a
                href="https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&sarja=1DIV"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                style={{ backgroundColor: "#0055A6" }}
              >
                Avaa Torneopallo →
              </a>
            </div>
          )}
        </section>

        {/* Joukkuekohtaiset otteluohjelmat */}
        <section>
          <SectionHeading title="Joukkueiden otteluohjelmat" subtitle="Valitse joukkue" />
          <div className="mb-6 flex flex-wrap gap-2">
            {teams.map((t) => (
              <Link
                key={t.slug}
                href={`/ottelut-ja-tulokset?team=${encodeURIComponent(t.slug)}&division=${activeDivision}`}
                className={`rounded-md px-4 py-2 text-sm font-semibold ring-1 transition ${
                  t.slug === selected.slug
                    ? "text-white ring-transparent"
                    : "bg-white text-slate-900 ring-black/10 hover:bg-slate-50"
                }`}
                style={t.slug === selected.slug ? { backgroundColor: "#001641" } : {}}
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
            <TorneopalWidget
              teamId={selected.torneopalTeamId}
              widget="schedule"
              title={`Otteluohjelma: ${selected.name}`}
            />
          )}
        </section>
      </div>
    </div>
  );
}
