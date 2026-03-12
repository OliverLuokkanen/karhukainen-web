import { siteConfig } from "../../lib/siteConfig";

export default function SeuraPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Seura</h1>
        <p className="text-slate-600">
          Tervetuloa tutustumaan {siteConfig.name}:iin – oululaiseen kaukalopalloperheeseen.
        </p>
      </header>

      {/* Esittely */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">Esittely</h2>
        <p className="text-slate-700 leading-relaxed">
          {siteConfig.name} on vuonna {siteConfig.founded} perustettu oululainen kaukalopalloseura.
          Seuramme motto on <em>&ldquo;{siteConfig.slogan}&rdquo;</em> – otamme lajin tosissaan, mutta pidämme
          hauskaa samalla. Toimintamme kattaa viisi joukkuetta kahdessa eri divisioonassa.
        </p>
      </section>

      {/* Historia */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">Historia</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Seuran historia tulossa.
        </div>
      </section>

      {/* Arvot */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">Arvot</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Yhteisöllisyys", desc: "Rakennamme vahvaa yhteisöä oululaisen kaukalopallokentällä." },
            { title: "Kehittyminen", desc: "Kannustamme jokaista pelaajaa kehittymään omalla tasollaan." },
            { title: "Ilo", desc: "Pidämme hauskaa tosissaan – laji on intohimo, ei velvollisuus." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="text-base font-bold">{v.title}</div>
              <div className="mt-2 text-sm text-slate-600">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hallitus */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">Hallitus</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Hallituksen tiedot tulossa.
        </div>
      </section>

      {/* Jäseneksi liittyminen */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">Jäseneksi liittyminen</h2>
        <p className="text-slate-700">Tervetuloa mukaan {siteConfig.name}:iin! Tarjoamme seuraavat jäsenyysvaihtoehdot:</p>
        <div className="flex flex-wrap gap-2">
          {siteConfig.membershipTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-800 ring-1 ring-blue-100"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Liittymislomakkeen linkki (SuomiSport) tulossa.
        </div>
      </section>
    </div>
  );
}
