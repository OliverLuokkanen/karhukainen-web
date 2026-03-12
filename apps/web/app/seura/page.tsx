import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

const boardMembers = [
  { name: "Puheenjohtaja", role: "Hallituksen puheenjohtaja" },
  { name: "Varapuheenjohtaja", role: "Varapuheenjohtaja" },
  { name: "Sihteeri", role: "Sihteeri" },
  { name: "Rahastonhoitaja", role: "Rahastonhoitaja" },
  { name: "Hallituksen jäsen", role: "Jäsen" },
];

const values = [
  {
    title: "Positiivinen asenne",
    desc: "Seuramme tunnetaan positiivisesta asenteesta ja kulttuurista.",
  },
  {
    title: "Ennakkoluuloton toiminta",
    desc: "Ennakkoluulottomasta ja eteenpäin suuntautuvasta toimintatavastaan.",
  },
  {
    title: "Kaikki mukaan",
    desc: "Toimintamme kantava ajatus on ottaa kaikki mukaan sellaisena kuin olemme.",
  },
];

const membershipTypes = [
  { type: "Aikuisjäsen", price: "– €/vuosi", desc: "Täysivaltainen jäsenyys" },
  { type: "Juniorijäsen", price: "– €/vuosi", desc: "Alle 18-vuotiaille" },
  { type: "Kannatusjäsen", price: "– €/vuosi", desc: "Tue seuran toimintaa" },
  { type: "Seniori", price: "– €/vuosi", desc: "Yli 65-vuotiaille" },
  { type: "Kunniajäsen", price: "–", desc: "Hallituksen myöntämä" },
];

export default function SeuraPage() {
  return (
    <div>
      <PageHero
        title="Seura"
        subtitle="Tervetuloa tutustumaan RB Karhukaiseen – oululaiseen kaukalopalloperheeseen."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* Esittely */}
        <section>
          <SectionHeading title="Karhukainen ry" subtitle="Oululainen kaukalopalloseura" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>Karhukainen ry</strong> on urheiluseura, jonka tarkoituksena on edistää
                toiminnallista urheilua ja liikuntaa kaiken ikäisille. Seura on perustettu vuonna{" "}
                {siteConfig.founded} Oulussa.
              </p>
              <p>
                Seuramme tunnetaan positiivisesta asenteesta ja kulttuurista sekä
                ennakkoluulottomasta ja eteenpäin suuntautuvasta toimintatavastaan. Toimintamme
                kantava ajatus on ottaa kaikki mukaan ja osallistua{" "}
                <em>&ldquo;{siteConfig.slogan}&rdquo;</em> sellaisena kuin olemme.
              </p>
              <p>
                Seuralla on viisi joukkuetta kahdessa eri divisioonassa, ja toiminta kattaa niin
                kilpailullisen pelaamisen kuin matalan kynnyksen harrastamisen.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-slate-50 p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Perustettu</span>
                  <span className="text-slate-900">{siteConfig.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Kotipaikka</span>
                  <span className="text-slate-900">Oulu</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Laji</span>
                  <span className="text-slate-900">Kaukalopallo</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Joukkueet</span>
                  <span className="text-slate-900">5 joukkuetta</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Sähköposti</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#0055A6] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arvot */}
        <section>
          <SectionHeading title="Arvot" subtitle="Mitä me olemme" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div
                  className="mb-3 h-1 w-10 rounded-full"
                  style={{ backgroundColor: "#FCB53B" }}
                />
                <div className="text-lg font-bold text-slate-900">{v.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hallitus */}
        <section>
          <SectionHeading title="Hallitus" subtitle="Seuran toiminnasta vastaavat henkilöt" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {boardMembers.map((m) => (
              <div
                key={m.role}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm text-center"
              >
                <div
                  className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-white font-bold text-xl"
                  style={{ backgroundColor: "#001641" }}
                >
                  ?
                </div>
                <div className="text-sm font-bold text-slate-900">{m.name}</div>
                <div className="mt-1 text-xs text-slate-500">{m.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Jäseneksi liittyminen */}
        <section>
          <SectionHeading title="Jäseneksi liittyminen" subtitle="Tervetuloa mukaan RB Karhukaiseen!" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {membershipTypes.map((m) => (
              <div
                key={m.type}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm text-center"
              >
                <div className="text-base font-bold text-slate-900">{m.type}</div>
                <div className="mt-1 text-lg font-extrabold" style={{ color: "#0055A6" }}>
                  {m.price}
                </div>
                <div className="mt-1 text-xs text-slate-500">{m.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.suomisport.fi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
              style={{ backgroundColor: "#FCB53B" }}
            >
              Liity jäseneksi SuomiSportissa →
            </a>
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center rounded-md border border-black/20 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
            >
              Kysy lisää
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

