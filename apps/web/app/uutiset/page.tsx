import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";

const news = [
  {
    tag: "Tiedote",
    title: "Kauden 2025–2026 harjoitusvuorot julkaistu",
    date: "20.2.2026",
    excerpt: "Kevätkauden harjoitusvuorot on nyt vahvistettu. Kaikki joukkueet harjoittelevat kaksi kertaa viikossa Ouluhallin tiloissa.",
    href: "/uutiset",
  },
  {
    tag: "Otteluraportti",
    title: "Tiukka kamppailu päättyi pistejakoon",
    date: "18.2.2026",
    excerpt: "RBK-Tardigrades pelasi tasapelin vierasottelussa. Molemmat joukkueet maalasivat kahdesti ja pisteet jaettiin tasan.",
    href: "/uutiset",
  },
  {
    tag: "Otteluennakko",
    title: "Ennakko: viikonlopun tuplapelit",
    date: "16.2.2026",
    excerpt: "Tällä viikonlopulla pelaa peräti neljä Karhukaisen joukkuetta. Lue tarkempi ennakko tuleviin otteluihin.",
    href: "/uutiset",
  },
  {
    tag: "Tiedote",
    title: "Uudet jäseneksi liittymisen ohjeet päivitetty",
    date: "10.2.2026",
    excerpt: "Seuran jäsenrekisteröinti on siirtynyt kokonaan SuomiSportiin. Löydät ohjeet seura-sivulta.",
    href: "/uutiset",
  },
  {
    tag: "Otteluraportti",
    title: "RBK-Waterbears voittaa kotiottelun 4–2",
    date: "8.2.2026",
    excerpt: "Karhukainen II:n toinen joukkue RBK-Waterbears voitti kotipelin selkeästi. Maalikuninkuus Pelaaja 7:lle.",
    href: "/uutiset",
  },
  {
    tag: "Tiedote",
    title: "Uusi yhteistyökumppani mukaan toimintaan",
    date: "2.2.2026",
    excerpt: "Olemme iloisia uudesta yhteistyöstä! Tervetuloa mukaan oululaiseen kaukalopalloperheeseen.",
    href: "/uutiset",
  },
];

export default function UutisetPage() {
  return (
    <div>
      <PageHero
        title="Uutiset"
        subtitle="Tuoreimmat tiedotteet, otteluennakot ja -raportit."
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title="Kaikki uutiset" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">
                  {n.excerpt}
                </p>
                <div className="mt-4 text-sm font-semibold text-[#0055A6]">Lue lisää →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

