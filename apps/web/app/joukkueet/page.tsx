import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
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
    <div>
      <PageHero
        title="Joukkueet"
        subtitle="Karhukainen ry:n viisi joukkuetta kahdessa divisioonassa."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {(Object.keys(byDivision) as Array<keyof typeof byDivision>).map((div) => (
          <section key={div}>
            <SectionHeading title={divisions[div].label} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {byDivision[div].map((t) => (
                <Link
                  key={t.slug}
                  href={`/joukkueet/${t.slug}`}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div
                    className="h-32 w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #001641 0%, #0055A6 100%)",
                    }}
                  />
                  <div className="p-5">
                    <div className="text-lg font-extrabold text-slate-900 group-hover:text-[#0055A6] transition-colors">
                      {t.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {divisions[t.division].label}
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                      <span className="font-semibold">Joukkuevastaava:</span> {t.managerName}
                    </div>
                    <div className="mt-4 text-sm font-semibold text-[#0055A6]">
                      Avaa joukkuesivu →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
