import { PageHero } from "../../components/PageHero";
import { SectionHeading } from "../../components/SectionHeading";

const events = [
  {
    date: "15.3.2026",
    title: "Kausijuhla 2026",
    desc: "Kauden päättäjäisjuhla koko seuralle. Tervetuloa mukaan juhlistamaan kautta!",
    location: "Ravintola Oulu",
    tag: "Juhla",
  },
  {
    date: "22.3.2026",
    title: "Kevätkokous",
    desc: "Seuran sääntömääräinen kevätkokous. Kaikki jäsenet tervetulleita.",
    location: "Oulu (tarkentuu)",
    tag: "Kokous",
  },
  {
    date: "5.4.2026",
    title: "Harjoitusturnaus – Oulu Cup",
    desc: "Seuran oma sisäinen harjoitusturnaus. Kaikki joukkueet osallistuvat.",
    location: "Ouluhalli",
    tag: "Turnaus",
  },
  {
    date: "19.4.2026",
    title: "Talkoot – varusteiden huolto",
    desc: "Yhteinen varusteiden huoltopäivä. Kahvit tarjolla!",
    location: "Ouluhalli",
    tag: "Talkoot",
  },
];

export default function TapahtumatPage() {
  return (
    <div>
      <PageHero
        title="Tapahtumat"
        subtitle="Tulevat tapahtumat, turnaukset ja seuran omat tilaisuudet."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Tapahtumakalenteri */}
        <section>
          <SectionHeading title="Tapahtumakalenteri" subtitle="Tulevat tapahtumat" />
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="rounded-md px-2 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: "#001641" }}
                  >
                    {e.date}
                  </span>
                  <span
                    className="rounded-md px-2 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: "#0055A6" }}
                  >
                    {e.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-slate-400">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {e.location}
                </div>
                <button
                  type="button"
                  className="mt-4 rounded-md px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
                  style={{ backgroundColor: "#0055A6" }}
                >
                  Ilmoittaudu
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SuomiSport-linkitys */}
        <section>
          <SectionHeading title="Ilmoittautuminen" subtitle="Tapahtumat SuomiSportin kautta" />
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600 mb-4">
              Tapahtumiin ilmoittautuminen tapahtuu SuomiSportin kautta. Ohjeet lähetetään
              sähköpostitse ennen tapahtumia.
            </p>
            <a
              href="https://www.suomisport.fi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
              style={{ backgroundColor: "#0055A6" }}
            >
              Avaa SuomiSport →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

