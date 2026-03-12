import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

export default function YhteystiedotPage() {
  return (
    <div>
      <PageHero
        title="Yhteystiedot"
        subtitle="Ota yhteyttä tai lähetä meille palautetta."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Yhteystiedot-kortti */}
          <section>
            <SectionHeading title="Karhukainen ry" />
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sähköposti
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-base font-semibold text-[#0055A6] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Instagram
                </div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-semibold text-[#0055A6] hover:underline"
                >
                  @rbkarhukainen
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Kotipaikka
                </div>
                <div className="mt-1 text-base text-slate-900">Oulu</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Perustettu
                </div>
                <div className="mt-1 text-base text-slate-900">{siteConfig.founded}</div>
              </div>
            </div>
          </section>

          {/* Yhteydenottolomake (UI-only) */}
          <section>
            <SectionHeading title="Lähetä viesti" />
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                    placeholder="Etu- ja sukunimi"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                    placeholder="email@esimerkki.fi"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Viesti *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                    placeholder="Kirjoita viestisi tähän..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
                  style={{ backgroundColor: "#FCB53B" }}
                >
                  Lähetä viesti
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* Palautelomake */}
        <section>
          <SectionHeading title="Anna palautetta" subtitle="Kehitämme toimintaamme palautteesi avulla." />
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Palaute *
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                  placeholder="Kirjoita palautteesi tähän..."
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Sähköposti (valinnainen)
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                  placeholder="Jos haluat vastauksen"
                />
              </div>
              <button
                type="submit"
                className="rounded-md px-6 py-2.5 text-sm font-bold text-[#001641] transition hover:brightness-110"
                style={{ backgroundColor: "#FCB53B" }}
              >
                Lähetä palaute
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

