import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../lib/siteConfig";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}