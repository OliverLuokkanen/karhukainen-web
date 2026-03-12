"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Etusivu", href: "/" },
  { label: "Seura", href: "/seura" },
  { label: "Joukkueet", href: "/joukkueet" },
  { label: "Ottelut ja tulokset", href: "/ottelut-ja-tulokset" },
  { label: "Tapahtumat", href: "/tapahtumat" },
  { label: "Media", href: "/media" },
  { label: "Yhteistyökumppanit", href: "/yhteistyokumppanit" },
  { label: "Lahjoitukset", href: "/lahjoitukset" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "#001641" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo / seuran nimi */}
        <Link
          href="/"
          className="text-base font-black tracking-tight text-white hover:text-[#FCB53B] transition-colors"
        >
          RB KARHUKAINEN
        </Link>

        {/* Työpöytänavigaatio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Päänavigaatio">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 ${
                  isActive
                    ? "text-[#FCB53B] underline underline-offset-4"
                    : "text-white/80 hover:text-[#FCB53B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger-nappi (mobiilinäkymä) */}
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-white hover:text-[#FCB53B] focus:outline-none focus:ring-2 focus:ring-white/20 lg:hidden"
          aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobiilivalikko */}
      {mobileOpen && (
        <div
          className="w-full border-t border-white/10 lg:hidden"
          style={{ backgroundColor: "#001641" }}
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobiilinavigaatio">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#FCB53B]"
                      : "text-white/80 hover:text-[#FCB53B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
