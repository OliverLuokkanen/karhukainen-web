import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    `${siteConfig.name} – kaukalopalloseura Oulusta. ` +
    "Uutiset, joukkueet, ottelut ja tulokset.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "fi_FI",
    title: siteConfig.name,
    description:
      `${siteConfig.name} – kaukalopalloseura Oulusta. ` +
      "Uutiset, joukkueet, ottelut ja tulokset.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      `${siteConfig.name} – kaukalopalloseura Oulusta. ` +
      "Uutiset, joukkueet, ottelut ja tulokset.",
  },
};

function NavItem({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:text-[#FCB53B] focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
      href={href}
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:text-[#FCB53B] focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
        aria-haspopup="menu"
      >
        <span>{label}</span>
        <span aria-hidden="true" className="text-xs opacity-70">
          ▼
        </span>
      </button>

      <div
        className="invisible absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border border-white/10 bg-[#001641] p-1 opacity-0 shadow-lg transition
                   group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        role="menu"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            className="block rounded px-3 py-2 text-sm text-white/80 hover:text-[#FCB53B] hover:bg-white/5 focus:bg-white/5 focus:outline-none"
            href={item.href}
            role="menuitem"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ backgroundColor: "#001641" }}>
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-base font-bold tracking-tight text-white hover:text-[#FCB53B] transition-colors">
              {siteConfig.name}
            </Link>

            <nav className="flex items-center gap-1" aria-label="Päänavigaatio">
              <NavDropdown
                label="Seura"
                items={[
                  { label: "Seura", href: "/seura" },
                  { label: "Yhteistyökumppanit", href: "/yhteistyokumppanit" },
                  { label: "Lahjoitukset", href: "/lahjoitukset" },
                ]}
              />
              <NavDropdown
                label="Toiminta"
                items={[
                  { label: "Joukkueet", href: "/joukkueet" },
                  { label: "Ottelut & tulokset", href: "/ottelut-ja-tulokset" },
                  { label: "Tapahtumat", href: "/tapahtumat" },
                  { label: "Uutiset", href: "/uutiset" },
                  { label: "Media", href: "/media" },
                ]}
              />
              <NavItem label="Yhteystiedot" href="/yhteystiedot" />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer style={{ backgroundColor: "#001641" }}>
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="text-base font-bold text-white">{siteConfig.name}</div>
                <div className="text-sm italic text-white/60">{`"${siteConfig.slogan}"`}</div>
                <div className="text-xs text-white/50">Perustettu {siteConfig.founded}</div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Yhteystiedot</div>
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

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Sivut</div>
                <div className="flex flex-col gap-1">
                  {[
                    { label: "Joukkueet", href: "/joukkueet" },
                    { label: "Ottelut & tulokset", href: "/ottelut-ja-tulokset" },
                    { label: "Yhteystiedot", href: "/yhteystiedot" },
                    { label: "Lahjoitukset", href: "/lahjoitukset" },
                  ].map((l) => (
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
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/40">
              © {new Date().getFullYear()} {siteConfig.name}. Kaikki oikeudet pidätetään.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}