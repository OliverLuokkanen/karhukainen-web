import { notFound } from "next/navigation";
import Link from "next/link";
import { divisions, teams } from "../../../lib/teams";
import { TorneopalWidget } from "../../../components/TorneopalWidget";

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = teams.find((t) => t.slug === params.slug);
  if (!team) return notFound();

  const torneopalUrl = team.torneopalTeamId
    ? `https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&joukkue=${team.torneopalTeamId}`
    : "https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&sarja=1DIV";

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
          <Link
            href="/joukkueet"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            ← Kaikki joukkueet
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Perustiedot */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900">
            Perustiedot
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Divisioona</div>
              <div className="mt-1 text-base font-bold text-slate-900">{divisions[team.division].label}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Joukkuevastaava</div>
              <div className="mt-1 text-base font-bold text-slate-900">{team.managerName}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sijoitus</div>
              <div className="mt-1 text-sm text-slate-500">Haetaan Torneopallosta</div>
              <a
                href={torneopalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#0055A6] hover:underline"
              >
                Avaa Torneopallo →
              </a>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Tulevat ottelut</div>
              <div className="mt-1 text-sm text-slate-500">Haetaan Torneopallosta</div>
              <a
                href={torneopalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#0055A6] hover:underline"
              >
                Avaa Torneopallo →
              </a>
            </div>
          </div>
        </section>

        {/* Otteluohjelma (widget) */}
        {team.torneopalTeamId && (
          <section>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900">
              Otteluohjelma
            </h2>
            <TorneopalWidget teamId={team.torneopalTeamId} widget="schedule" />
          </section>
        )}

        {/* Pelaajat */}
        <section>
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900">
            Pelaajat
          </h2>
          <div className="rounded-2xl border border-dashed border-black/20 bg-white p-8 shadow-sm text-center">
            <p className="text-slate-600">Pelaajatiedot lisätään myöhemmin.</p>
            <a
              href={torneopalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-md px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
              style={{ backgroundColor: "#0055A6" }}
            >
              Avaa Torneopallo →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
