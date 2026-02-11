import { siteConfig } from "../../lib/siteConfig";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Ottelut ja tulokset</h1>
      <p className="mt-3 text-slate-700">
        Ajantasaiset ottelut ja tulokset Torneopallossa.
      </p>

      <a
        className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        href={siteConfig.torneopallo.url}
        target="_blank"
        rel="noreferrer"
      >
        Avaa {siteConfig.torneopallo.label}
      </a>
    </main>
  );
}
