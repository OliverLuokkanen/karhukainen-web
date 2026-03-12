import { notFound } from "next/navigation";
import Link from "next/link";
import { divisions, teams } from "../../../lib/teams";
import { TorneopalWidget } from "../../../components/TorneopalWidget";

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = teams.find((t) => t.slug === params.slug);
  if (!team) return notFound();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm font-semibold text-blue-700">
          {divisions[team.division].label}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">{team.name}</h1>
        <p className="text-slate-600">
          {team.homeVenue ? `Kotihalli: ${team.homeVenue}` : ""}
        </p>

        <div className="pt-2">
          <Link
            href="/ottelut-tulokset"
            className="text-sm font-semibold text-blue-700 hover:text-blue-600"
          >
            Ottelut & tulokset →
          </Link>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Otteluohjelma</h2>

        {!team.torneopalTeamId ? (
          <div className="rounded-xl border border-dashed border-black/20 bg-white p-5 text-sm text-slate-600">
            Torneopal teamId puuttuu tälle joukkueelle.
          </div>
        ) : (
          <TorneopalWidget teamId={team.torneopalTeamId} widget="schedule" />
        )}
      </section>
    </div>
  );
}