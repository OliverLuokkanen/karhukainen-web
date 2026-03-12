import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

const fundUsages = [
  {
    title: "Pelivarusteet",
    desc: "Mailat, kypärät ja muut pelivarusteet joukkueille.",
    icon: "🏒",
  },
  {
    title: "Harjoitusolosuhteet",
    desc: "Hallien vuokrakustannusten kattaminen harjoituksille.",
    icon: "🏟️",
  },
  {
    title: "Juniorit",
    desc: "Nuorten harrastamisen tukeminen ja matalan kynnyksen toiminta.",
    icon: "⭐",
  },
  {
    title: "Turnaukset",
    desc: "Osallistumismaksujen kattaminen joukkueiden turnauksiin.",
    icon: "🏆",
  },
  {
    title: "Matkakulut",
    desc: "Vieraspelien kuljetuskustannukset.",
    icon: "🚌",
  },
  {
    title: "Seuratoiminta",
    desc: "Tapahtumien järjestäminen ja seuran hallinto.",
    icon: "🤝",
  },
];

export default function LahjoituksetPage() {
  return (
    <div>
      <PageHero
        title="Lahjoitukset"
        subtitle="Tue RB Karhukaisen toimintaa – jokainen tuki auttaa kehittämään oululaista kaukalopalloa."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Mihin varat käytetään */}
        <section>
          <SectionHeading
            title="Mihin varat käytetään?"
            subtitle="Lahjoituksesi vaikuttaa suoraan seuran toimintaan."
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {fundUsages.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <div className="text-base font-bold text-slate-900">{f.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Lahjoitusohjeet */}
        <section>
          <SectionHeading title="Lahjoitusohjeet" />
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-slate-700 mb-6">
              Voit tukea {siteConfig.name}:n toimintaa lahjoittamalla suoraan seuran tilille.
              Kaikki lahjoitukset käytetään seuratoiminnan kehittämiseen.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Tilinumero
                </div>
                <div className="mt-1 font-mono text-base font-bold text-slate-900">
                  FI00 0000 0000 0000 00
                </div>
                <div className="mt-1 text-xs text-slate-500">(tarkentuu)</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Saaja
                </div>
                <div className="mt-1 text-base font-bold text-slate-900">
                  {siteConfig.name}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
                style={{ backgroundColor: "#FCB53B" }}
              >
                Lahjoita
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-md border border-black/20 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                Kysy lisää
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

