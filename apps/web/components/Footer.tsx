import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

const footerLinks = [
  { label: "Etusivu", href: "/" },
  { label: "Seura", href: "/seura" },
  { label: "Joukkueet", href: "/joukkueet" },
  { label: "Ottelut ja tulokset", href: "/ottelut-ja-tulokset" },
  { label: "Tapahtumat", href: "/tapahtumat" },
  { label: "Media", href: "/media" },
  { label: "Yhteistyökumppanit", href: "/yhteistyokumppanit" },
  { label: "Lahjoitukset", href: "/lahjoitukset" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
  { label: "Uutiset", href: "/uutiset" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#001641" }}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Seura */}
          <div className="space-y-3">
            <div className="text-lg font-black tracking-tight text-white">
              RB KARHUKAINEN
            </div>
            <div className="text-sm italic text-white/60">
              &ldquo;{siteConfig.slogan}&rdquo;
            </div>
            <div className="text-xs text-white/50">
              Perustettu {siteConfig.founded} • Oulu
            </div>
            <p className="text-xs leading-relaxed text-white/50">
              Oululainen kaukalopalloseura, joka pelaa tosissaan muttei tosikkona.
            </p>
          </div>

          {/* Sivukartta */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Sivukartta
            </div>
            <div className="flex flex-col gap-1.5">
              {footerLinks.slice(0, 5).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 hover:text-[#FCB53B] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
              &nbsp;
            </div>
            <div className="flex flex-col gap-1.5">
              {footerLinks.slice(5).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 hover:text-[#FCB53B] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Yhteystiedot */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Yhteystiedot
            </div>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-white/70 hover:text-[#FCB53B] transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-white/70 hover:text-[#FCB53B] transition-colors"
              >
                Instagram @rbkarhukainen
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Yhteistyössä
              </div>
              <div className="text-xs text-white/40">
                Kumppanien logot tulossa
              </div>
              <Link
                href="/yhteistyokumppanit"
                className="inline-block text-xs font-semibold text-[#FCB53B] hover:underline"
              >
                Tule yhteistyökumppaniksi →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Kaikki oikeudet pidätetään.
          </div>
          <div className="text-xs text-white/30">
            Kaukalopalloseura • Oulu • Perustettu {siteConfig.founded}
          </div>
        </div>
      </div>
    </footer>
  );
}
