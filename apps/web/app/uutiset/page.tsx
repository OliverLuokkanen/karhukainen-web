export default function UutisetPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Uutiset</h1>
        <p className="text-slate-600">Tuoreimmat tiedotteet, otteluennakot ja -raportit.</p>
      </header>

      <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-10 text-center text-sm text-slate-500">
        Uutisia tulossa. Seuraa meitä Instagramissa{" "}
        <a
          href="https://www.instagram.com/rbkarhukainen/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-700 hover:text-blue-600"
        >
          @rbkarhukainen
        </a>{" "}
        ajankohtaisista asioista.
      </div>
    </div>
  );
}
