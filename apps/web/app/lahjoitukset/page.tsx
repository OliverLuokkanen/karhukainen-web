import { siteConfig } from "../../lib/siteConfig";

export default function LahjoituksetPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Lahjoitukset</h1>
        <p className="text-slate-600">
          Tue {siteConfig.name}:in toimintaa – jokainen tuki auttaa kehittämään oululaista kaukalopalloa.
        </p>
      </header>

      {/* Mihin varat käytetään */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Mihin varat käytetään?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Pelivarusteet", desc: "Mailat, kypärät ja muut pelivarusteet joukkueille." },
            { title: "Harjoitusolosuhteet", desc: "Hallien vuokrakustannusten kattaminen harjoituksille." },
            { title: "Juniorit", desc: "Nuorten harrastamisen tukeminen ja matalan kynnyksen toiminta." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-base font-bold">{v.title}</div>
              <div className="mt-2 text-sm text-slate-600">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lahjoitustiedot */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Lahjoitusohjeet</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Lahjoitusohjeet (tilinumero, MobilePay tms.) tulossa.
        </div>
      </section>

      {/* Yhteystiedot */}
      <section className="space-y-2">
        <p className="text-sm text-slate-600">
          Lisätietoja lahjoituksista:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-blue-700 hover:text-blue-600"
          >
            {siteConfig.email}
          </a>
        </p>
      </section>
    </div>
  );
}
