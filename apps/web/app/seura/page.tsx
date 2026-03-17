import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

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
    desc: "Toimintamme kantava ajatus on ottaa kaikki mukaan ja osallistua tosissaan, muttei tosikkona.",
  },
];

const teamManagers: { team: string; manager: string }[] = [
  { team: "Tardigrades", manager: "Petri Luokkanen" },
  { team: "Vesikarhut", manager: "Hannu Kaikkonen" },
  { team: "Waterbears", manager: "Jere Karttunen" },
  { team: "Likokuhnurit", manager: "Esa-matti Lauhikari" },
  { team: "Merokensis", manager: "Mikkal Puominen" },
];

export default function SeuraPage() {
  return (
    <div>
      <PageHero
        title="Seura"
        subtitle="Tervetuloa tutustumaan Karhukaiseen – oululaiseen kaukalopalloperheeseen."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* Esittely */}
        <section>
          <SectionHeading title="Karhukainen ry" subtitle="Oululainen kaukalopalloseura" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>Karhukainen ry</strong> on vuonna {siteConfig.founded} perustettu
                oululainen kaukalopalloseura, jonka tarkoituksena on edistää toiminnallista
                urheilua ja liikuntaa kaiken ikäisille sekä siihen liittyvää kansalaistoimintaa.
              </p>
              <p>
                Seuramme toimii mottona{" "}
                <em>&ldquo;{siteConfig.slogan}&rdquo;</em> – osallistumme tosissaan, muttei
                tosikkona, ja kaikki ovat tervetulleita mukaan sellaisina kuin ovat.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-slate-50 p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Virallinen nimi</span>
                  <span className="text-slate-900">Karhukainen Ry</span>
                </div>
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
                  <span className="text-slate-900">{siteConfig.teams.length} joukkuetta</span>
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

        {/* Toiminnan tarkoitus */}
        <section>
          <SectionHeading title="Toiminnan tarkoitus" subtitle="Miksi olemme olemassa" />
          <div className="rounded-2xl border border-black/10 bg-slate-50 p-8">
            <p className="text-slate-700 leading-relaxed">
              Karhukainen ry:n tarkoituksena on edistää toiminnallista urheilua ja liikuntaa
              kaiken ikäisille sekä siihen liittyvää kansalaistoimintaa. Haluamme tarjota
              matalan kynnyksen mahdollisuuden osallistua kaukalopalloon – niin kilpailullisesti
              kuin harrastepohjaisesti.
            </p>
          </div>
        </section>

        {/* Joukkuevastaavat */}
        <section>
          <SectionHeading
            title="Joukkuevastaavat"
            subtitle="Joukkueiden yhteyshenkilöt"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamManagers.map((m) => (
              <div
                key={m.team}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm text-center"
              >
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg"
                  style={{ backgroundColor: "#001641" }}
                >
                  {m.manager.charAt(0)}
                </div>
                <div className="text-sm font-bold text-slate-900">{m.manager}</div>
                <div className="mt-1 text-xs text-slate-500">{m.team}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ota yhteyttä */}
        <section>
          <SectionHeading title="Ota yhteyttä" subtitle="Ollaan yhteyksissä" />
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm text-center">
            <p className="mb-4 text-slate-600">
              Kysymyksiä seurasta tai toiminnasta? Ota rohkeasti yhteyttä sähköpostilla.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
              style={{ backgroundColor: "#FCB53B" }}
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

