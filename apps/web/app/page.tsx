import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

const news = [
  {
    tag: "Tiedote",
    title: "Kauden 2025–2026 harjoitusvuorot julkaistu",
    date: "20.2.2026",
    excerpt: "Kevätkauden harjoitusvuorot on nyt vahvistettu. Kaikki joukkueet harjoittelevat kaksi kertaa viikossa.",
    href: "/uutiset",
  },
  {
    tag: "Otteluraportti",
    title: "Tiukka kamppailu päättyi pistejakoon",
    date: "18.2.2026",
    excerpt: "RBK-Tardigrades pelasi tasapelin vierasottelussa. Molemmille joukkueille jaettiin yksi piste.",
    href: "/uutiset",
  },
  {
    tag: "Otteluennakko",
    title: "Ennakko: viikonlopun tuplapelit",
    date: "16.2.2026",
    excerpt: "Tällä viikonlopulla pelaa peräti neljä Karhukaisen joukkuetta. Lue ennakko tuleviin otteluihin.",
    href: "/uutiset",
  },
];

const upcomingMatches = [
  {
    date: "Pe 20.2.2026",
    time: "18:30",
    home: "Karhukainen I",
    away: "Oulu Eagles",
    venue: "Ouluhalli",
  },
  {
    date: "La 21.2.2026",
    time: "14:00",
    home: "Karhukainen II",
    away: "Kärpät 2",
    venue: "Raksila",
  },
  {
    date: "La 21.2.2026",
    time: "16:30",
    home: "Haukipudas HK",
    away: "Karhukainen III",
    venue: "Haukipudas-halli",
  },
];

const partnerPlaceholders = [
  "Kumppani 1",
  "Kumppani 2",
  "Kumppani 3",
  "Kumppani 4",
  "Kumppani 5",
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #001641 0%, #0055A6 60%, #001641 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, rgba(252,181,59,0.3), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FCB53B]">
              Kaukalopalloseura • Oulu • Perustettu {siteConfig.founded}
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              RB KARHUKAINEN
            </h1>
            <p className="mt-4 text-xl font-medium italic text-white/70">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
              Viisi joukkuetta, yksi yhteisö. Tervetuloa mukaan oululaiseen kaukalopalloperheeseen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/seura"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-[#001641] transition hover:brightness-110"
                style={{ backgroundColor: "#FCB53B" }}
              >
                Liity jäseneksi
              </Link>
              <Link
                href="/ottelut-ja-tulokset"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Katso ottelut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AJANKOHTAISTA ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Ajankohtaista
              </h2>
              <p className="mt-1 text-base text-slate-500">
                Tuoreimmat uutiset, raportit ja tiedotteet.
              </p>
            </div>
            <Link
              href="/uutiset"
              className="hidden text-sm font-semibold text-[#0055A6] hover:text-[#001641] sm:block"
            >
              Kaikki uutiset →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.title}
                href={n.href}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  className="aspect-video w-full"
                  style={{
                    background: "linear-gradient(135deg, #001641 0%, #0055A6 100%)",
                  }}
                />
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      className="inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: "#0055A6" }}
                    >
                      {n.tag}
                    </span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#0055A6] transition-colors">
                    {n.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
                    {n.excerpt}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-[#0055A6]">
                    Lue lisää →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/uutiset"
              className="text-sm font-semibold text-[#0055A6] hover:text-[#001641]"
            >
              Kaikki uutiset →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TULEVAT OTTELUT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Tulevat ottelut
              </h2>
              <p className="mt-1 text-base text-slate-500">
                Seuraavaksi pelikentällä.
              </p>
            </div>
            <Link
              href="/ottelut-ja-tulokset"
              className="hidden text-sm font-semibold text-[#0055A6] hover:text-[#001641] sm:block"
            >
              Katso kaikki ottelut →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {upcomingMatches.map((m) => (
              <div
                key={`${m.date}-${m.home}`}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="rounded-md px-2 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: "#001641" }}
                  >
                    {m.date}
                  </span>
                  <span className="text-xs text-slate-400">{m.time}</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-900">{m.home}</div>
                  <div className="my-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    vs
                  </div>
                  <div className="text-sm font-bold text-slate-900">{m.away}</div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {m.venue}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/ottelut-ja-tulokset"
              className="text-sm font-semibold text-[#0055A6] hover:text-[#001641]"
            >
              Katso kaikki ottelut →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SARJATILANNE ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Sarjatilanne
            </h2>
            <p className="mt-1 text-base text-slate-500">
              Ajantasainen sarjatilanne Torneopallon kautta.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "1. divisioona", url: siteConfig.torneopallo.url },
              { label: "2. divisioona", url: "https://kaukis.torneopal.fi/taso/sarja.php?turnaus=ou2025&sarja=2DIV" },
            ].map((div) => (
              <div
                key={div.label}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-900">{div.label}</h3>
                <div className="rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
                  Sarjataulukko ladataan Torneopallosta.
                </div>
                <a
                  href={div.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0055A6] hover:text-[#001641]"
                >
                  Avaa Torneopallo →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section
        className="py-16"
        style={{ backgroundColor: "#001641" }}
      >
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Seuraa meitä
          </h2>
          <p className="mt-3 text-base text-white/60">
            Parhaat hetket kentältä – seuraa Instagramissa.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl"
                style={{ backgroundColor: "#0055A6" }}
              >
                <div className="aspect-square" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                  <span className="text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    Instagram
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @rbkarhukainen
          </a>
        </div>
      </section>

      {/* ── YHTEISTYÖKUMPPANIT ── */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Yhteistyökumppanit
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Kiitos tuestanne!
              </p>
            </div>
            <Link
              href="/yhteistyokumppanit"
              className="text-sm font-semibold text-[#0055A6] hover:text-[#001641]"
            >
              Tule kumppaniksi →
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partnerPlaceholders.map((p) => (
              <div
                key={p}
                className="flex h-16 w-36 items-center justify-center rounded-xl border border-black/10 bg-slate-100 text-xs font-semibold text-slate-400"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
