export default function TapahtumatPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Tapahtumat</h1>
        <p className="text-slate-600">Tulevat tapahtumat, turnaukset ja seuran omat tilaisuudet.</p>
      </header>

      {/* Tapahtumakalenteri placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Tapahtumakalenteri</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-10 text-center text-sm text-slate-500">
          Tapahtumakalenteri tulossa.
        </div>
      </section>

      {/* Ilmoittautuminen placeholder */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Ilmoittautuminen</h2>
        <div className="rounded-xl border border-dashed border-black/20 bg-slate-50 p-6 text-sm text-slate-600">
          Tapahtumiin ilmoittautuminen (SuomiSport-linkitys) tulossa.
        </div>
      </section>
    </div>
  );
}
