import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

const partnershipBenefits = [
  {
    title: "Näkyvyys",
    desc: "Logonne näkyy seuran nettisivuilla, somekanavissa ja pelivaatteissa.",
  },
  {
    title: "Yhteisö",
    desc: "Pääsette mukaan aktiiviseen oululaiseen urheiluyhteisöön.",
  },
  {
    title: "Vastuullisuus",
    desc: "Tuette oululaista nuorisoliikuntaa ja matalan kynnyksen harrastamista.",
  },
];

const partnerPlaceholders = [
  "Kumppani 1",
  "Kumppani 2",
  "Kumppani 3",
  "Kumppani 4",
  "Kumppani 5",
  "Kumppani 6",
];

export default function YhteistyokumppanisivuPage() {
  return (
    <div>
      <PageHero
        title="Yhteistyökumppanit"
        subtitle="RB Karhukainen tekee yhteistyötä paikallisten yritysten ja toimijoiden kanssa."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Kumppanit */}
        <section>
          <SectionHeading title="Kumppanimme" subtitle="Kiitos tuestanne!" />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partnerPlaceholders.map((p) => (
              <div
                key={p}
                className="flex h-20 w-40 items-center justify-center rounded-2xl border border-black/10 bg-slate-100 text-xs font-semibold text-slate-400"
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Yhteistyön hyödyt */}
        <section>
          <SectionHeading title="Miksi yhteistyö Karhukaisen kanssa?" />
          <div className="grid gap-6 md:grid-cols-3">
            {partnershipBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div
                  className="mb-3 h-1 w-10 rounded-full"
                  style={{ backgroundColor: "#FCB53B" }}
                />
                <div className="text-lg font-bold text-slate-900">{b.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tule kumppaniksi */}
        <section>
          <SectionHeading
            title="Tule yhteistyökumppariksi"
            subtitle="Oletko kiinnostunut yhteistyöstä? Ota yhteyttä!"
          />
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-6 text-slate-700">
              Jos olet kiinnostunut yhteistyöstä {siteConfig.name}:n kanssa, ota yhteyttä
              sähköpostitse tai täytä alla oleva lomake. Vastaamme mahdollisimman pian.
            </p>

            {/* Yhteydenottolomake (UI-only) */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
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
                    Yritys
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-black/20 px-4 py-2.5 text-sm focus:border-[#0055A6] focus:outline-none focus:ring-2 focus:ring-[#0055A6]/20"
                    placeholder="Yrityksen nimi"
                  />
                </div>
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
                  placeholder="Kerro kiinnostuksestasi yhteistyöhön..."
                />
              </div>
              <button
                type="submit"
                className="rounded-md px-6 py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
                style={{ backgroundColor: "#FCB53B" }}
              >
                Lähetä viesti
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-500">
              Tai ota suoraan yhteyttä:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-[#0055A6] hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

