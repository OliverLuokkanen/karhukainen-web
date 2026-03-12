import { siteConfig } from "../../lib/siteConfig";

export default function YhteistyokumppanisivuPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Yhteistyökumppanit</h1>
        <p className="text-slate-600">
          {siteConfig.name} tekee yhteistyötä paikallisten yritysten ja toimijoiden kanssa.
        </p>
      </header>

      {/* Sponsorilogobanneri placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kumppanit</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-10 text-center text-sm text-slate-500">
          Kumppanien logot tulossa.
        </div>
      </section>

      {/* Yhteydenottolomake placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kiinnostaako yhteistyö?</h2>
        <p className="text-slate-700">
          Jos olet kiinnostunut yhteistyöstä {siteConfig.name}:in kanssa, ota yhteyttä:
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-black/10 hover:shadow-md transition"
        >
          {siteConfig.email}
        </a>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Yhteydenottolomake tulossa.
        </div>
      </section>
    </div>
  );
}
