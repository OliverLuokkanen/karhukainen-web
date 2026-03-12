export default function MediaPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Kuvagalleria & Media</h1>
        <p className="text-slate-600">Kuvat, videot ja tunnelmat kentältä ja sen ulkopuolelta.</p>
      </header>

      {/* Kuvagalleria placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kuvagalleria</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-10 text-center text-sm text-slate-500">
          Kuvagalleria tulossa.
        </div>
      </section>

      {/* Videot placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Videot</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Videosisältö tulossa.
        </div>
      </section>

      {/* Some-linkit */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Some</h2>
        <a
          href="https://www.instagram.com/rbkarhukainen/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-black/10 hover:shadow-md transition"
        >
          Instagram @rbkarhukainen →
        </a>
      </section>
    </div>
  );
}
