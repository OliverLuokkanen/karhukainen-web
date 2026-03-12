import { notFound } from "next/navigation";
import Link from "next/link";
import { divisions, teams } from "../../../lib/teams";
import { TorneopalWidget } from "../../../components/TorneopalWidget";

const placeholderPlayers = [
  { number: 1, name: "Pelaaja 1", role: "Maalivahti" },
  { number: 3, name: "Pelaaja 2", role: "Puolustaja" },
  { number: 5, name: "Pelaaja 3", role: "Puolustaja" },
  { number: 7, name: "Pelaaja 4", role: "Hyökkääjä" },
  { number: 9, name: "Pelaaja 5", role: "Hyökkääjä" },
  { number: 11, name: "Pelaaja 6", role: "Hyökkääjä" },
  { number: 13, name: "Pelaaja 7", role: "Puolustaja" },
  { number: 15, name: "Pelaaja 8", role: "Hyökkääjä" },
  { number: 17, name: "Pelaaja 9", role: "Hyökkääjä" },
  { number: 21, name: "Pelaaja 10", role: "Puolustaja" },
];

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = teams.find((t) => t.slug === params.slug);
  if (!team) return notFound();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #001641 0%, #0055A6 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="mb-2 text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#FCB53B" }}
          >
            {divisions[team.division].label}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {team.name}
          </h1>
          <p className="mt-2 text-xl font-semibold text-white/70">{team.nickname}</p>
          {team.homeVenue && (
            <p className="mt-2 text-sm text-white/50">Kotihalli: {team.homeVenue}</p>
          )}
          <Link
            href="/joukkueet"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            ← Kaikki joukkueet
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Pelaajat */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Pelaajat
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {placeholderPlayers.map((p) => (
              <div
                key={p.number}
                className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm text-center"
              >
                <div
                  className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-white font-black text-lg"
                  style={{ backgroundColor: "#001641" }}
                >
                  #{p.number}
                </div>
                <div className="text-sm font-bold text-slate-900">{p.name}</div>
                <div className="mt-1 text-xs text-slate-500">{p.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Joukkueen johto */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Joukkueen johto
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { role: "Päävalmentaja", name: "Valmentaja" },
              { role: "Joukkueenjohtaja", name: "Johtaja" },
              { role: "Apuvalmentaja", name: "Apuvalmentaja" },
            ].map((m) => (
              <div
                key={m.role}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {m.role}
                </div>
                <div className="mt-1 text-base font-bold text-slate-900">{m.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Otteluohjelma */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Otteluohjelma
            </h2>
          </div>
          {!team.torneopalTeamId ? (
            <div className="rounded-xl border border-dashed border-black/20 bg-white p-5 text-sm text-slate-600">
              Torneopal teamId puuttuu tälle joukkueelle.
            </div>
          ) : (
            <TorneopalWidget teamId={team.torneopalTeamId} widget="schedule" />
          )}
        </section>
      </div>
    </div>
  );
}
