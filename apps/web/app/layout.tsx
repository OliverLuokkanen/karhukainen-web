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
      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
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
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
        aria-haspopup="menu"
      >
        <span>{label}</span>
        <span aria-hidden="true" className="text-xs opacity-70">
          ▼
        </span>
      </button>

      <div
        className="invisible absolute left-0 top-full z-50 mt-2 min-w-56 rounded-md border border-black/10 bg-white p-1 opacity-0 shadow-lg transition
                   group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        role="menu"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            className="block rounded px-3 py-2 text-sm hover:bg-black/5 focus:bg-black/5 focus:outline-none"
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
        <header className="border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-base font-semibold tracking-tight">
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
                  { label: "Ottelut & tulokset", href: "/ottelut-tulokset" },
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

        <footer className="border-t border-black/10 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-black/70 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} {siteConfig.name}
            </div>
            <div className="flex gap-4">
              <Link className="hover:underline" href="/yhteystiedot">
                Yhteystiedot
              </Link>
              <Link className="hover:underline" href="/lahjoitukset">
                Lahjoitukset
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}