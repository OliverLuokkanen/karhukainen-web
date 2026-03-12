import Link from "next/link";

type NewsItem = {
  title: string;
  date: string;
  tag: string;
  href: string;
};

type MatchItem = {
  home: string;
  away: string;
  dateLabel: string;
  href: string;
};

const mockNews: NewsItem[] = [
  {
    tag: "Tiedote",
    title: "Kauden 2025–2026 harjoitusvuorot julkaistu",
    date: "20.2.2026",
    href: "/uutiset",
  },
  {
    tag: "Raportti",
    title: "Tiukka kamppailu päättyi pistejakoon",
    date: "18.2.2026",
    href: "/uutiset",
  },
  {
    tag: "Otteluennakko",
    title: "Ennakko: viikonlopun tuplapelit",
    date: "16.2.2026",
    href: "/uutiset",
  },
];

const nextMatch: MatchItem = {
  home: "Karhukainen",
  away: "Vastustaja",
  dateLabel: "Perjantai 20.02. | klo 18.30",
  href: "/ottelut-tulokset",
};

const mediaTiles = [
  { label: "Ottelupäivä", href: "/media" },
  { label: "Treeneistä", href: "/media" },
  { label: "Juniorit", href: "/media" },
  { label: "Hallifiilis", href: "/media" },
  { label: "Reissu", href: "/media" },
  { label: "Voitto", href: "/media" },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="-mx-4 -mt-8">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        {/* background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.18), transparent 40%)",
          }}
        />
        {/* faux image layer (swap to real image later) */}
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="h-full w-full bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_40%,rgba(255,255,255,0.06)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <Pill>Oulu</Pill>
              <Pill>Kaukalopallo</Pill>
              <Pill>Sinivalkoinen</Pill>
            </div>

            <h1 className="text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
              POHJOINEN PELAA YHDESSÄ.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base text-white/80 md:text-lg">
              {`Tervetuloa mukaan Karhukaisen matkaan. Uutiset, joukkueet, ottelut ja tulokset – kaikki samasta paikasta.`}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/joukkueet"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 shadow-sm hover:bg-white/90"
              >
                Katso joukkueet
              </Link>
              <Link
                href="/ottelut-tulokset"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 ring-1 ring-white/10"
              >
                Ottelut & tulokset
              </Link>
              <Link
                href="/lahjoitukset"
                className="inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10"
              >
                Tue toimintaa
              </Link>
            </div>
          </div>
        </div>

        {/* NEXT MATCH BAR */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold tracking-wide text-white/70">
                SEURAAVA OTTELU
              </div>
              <div className="text-sm font-semibold text-white">
                {nextMatch.dateLabel}
              </div>
              <div className="text-sm text-white/85">
                {nextMatch.home} <span className="text-white/60">vs</span>{" "}
                {nextMatch.away}
              </div>
            </div>

            <Link
              href={nextMatch.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-white/90"
            >
              Ottelusivulle
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* NEWS */}
        <section className="py-4">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Uutiset
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Tuoreimmat tiedotteet, ennakot ja raportit.
              </p>
            </div>
            <Link
              href="/uutiset"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Kaikki uutiset →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {mockNews.map((n) => (
              <Link
                key={n.title}
                href={n.href}
                className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-700 to-slate-950" />
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-100">
                      {n.tag}
                    </span>
                    <span className="text-xs text-slate-500">{n.date}</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-800">
                    {n.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MEDIA */}
        <section className="py-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Media
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Kuvat ja tunnelmat – kentältä ja sen ulkopuolelta.
              </p>
            </div>
            <Link
              href="/media"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Lisää mediaa →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mediaTiles.map((t, i) => (
              <Link
                key={`${t.label}-${i}`}
                href={t.href}
                className="group relative overflow-hidden rounded-xl border border-black/10 bg-slate-950"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600/80 via-slate-900 to-slate-950" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.65),transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-semibold text-white">
                    {t.label}
                  </div>
                  <div className="text-xs text-white/70">Avaa →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="py-4">
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { label: "Joukkueet", href: "/joukkueet" },
              { label: "Ottelut & tulokset", href: "/ottelut-tulokset" },
              { label: "Tapahtumat", href: "/tapahtumat" },
              { label: "Yhteystiedot", href: "/yhteystiedot" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl border border-black/10 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md hover:border-blue-200 transition"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}