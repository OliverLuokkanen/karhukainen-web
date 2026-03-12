import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";
import { siteConfig } from "../../lib/siteConfig";

const galleryItems = [
  { label: "Ottelupäivä vs Eagles", date: "15.2.2026" },
  { label: "Harjoitukset – talvikausi", date: "10.2.2026" },
  { label: "Joukkuekuva 2026", date: "1.2.2026" },
  { label: "Reissupeli Tampere", date: "25.1.2026" },
  { label: "Voitto kotikentällä", date: "18.1.2026" },
  { label: "Hallifiilis treeneissä", date: "12.1.2026" },
  { label: "Tyttöjoukkue pelissä", date: "5.1.2026" },
  { label: "Jouluturnauspäivä", date: "21.12.2025" },
  { label: "Kausialoitus 2025", date: "15.9.2025" },
];

export default function MediaPage() {
  return (
    <div>
      <PageHero
        title="Media"
        subtitle="Kuvat, videot ja tunnelmat kentältä ja sen ulkopuolelta."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Kuvagalleria */}
        <section>
          <SectionHeading title="Kuvagalleria" subtitle="Parhaat hetket kaudelta" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#001641" }}
              >
                <div
                  className="aspect-square w-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #001641 0%, #0055A6 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                  <div className="text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-xs text-white/60">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videot */}
        <section>
          <SectionHeading title="Videot" subtitle="Ottelutaltioinnit ja tunnelmavideot" />
          <div className="grid gap-4 md:grid-cols-2">
            {["Otteluvideo: Karhukainen I vs Eagles 15.2.2026", "Kauden aloitusfiilis 2025–2026"].map((v) => (
              <div
                key={v}
                className="relative overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#001641" }}
              >
                <div
                  className="aspect-video w-full"
                  style={{
                    background: "linear-gradient(135deg, #001641 0%, #0055A6 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#FCB53B" }}
                  >
                    <svg className="h-6 w-6 text-[#001641]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                  <div className="text-sm font-semibold text-white">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Some-linkit */}
        <section>
          <SectionHeading title="Seuraa meitä somessa" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram @rbkarhukainen
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

