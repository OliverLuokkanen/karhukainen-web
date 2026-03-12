import { siteConfig } from "../../lib/siteConfig";

export default function YhteystiedotPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Yhteystiedot</h1>
        <p className="text-slate-600">Ota yhteyttä tai lähetä meille palautetta.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Yhteystiedot */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Karhukainen ry</h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Sähköposti</div>
              <a className="text-sm underline hover:text-blue-700" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Instagram</div>
              <a
                className="text-sm underline hover:text-blue-700"
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                @rbkarhukainen
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Kotipaikka</div>
              <div className="text-sm">Oulu</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Perustettu</div>
              <div className="text-sm">{siteConfig.founded}</div>
            </div>
          </div>
        </section>

        {/* Yhteydenottolomake placeholder */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Lähetä viesti</h2>
          <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
            Yhteydenottolomake tulossa.
          </div>
        </section>
      </div>

      {/* Palautelomake placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Anna palautetta</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Palautelomake tulossa.
        </div>
      </section>
    </div>
  );
}
