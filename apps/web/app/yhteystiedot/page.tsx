import { siteConfig } from "../../lib/siteConfig";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Yhteystiedot</h1>

      <div className="mt-6 space-y-4 text-slate-700">
        <p>
          Sähköposti:{" "}
          <a className="underline" href={"mailto:" + siteConfig.email}>
            {siteConfig.email}
          </a>
        </p>

        <p>
          Instagram:{" "}
          <a
            className="underline"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            @rbkarhukainen
          </a>
        </p>
      </div>
    </main>
  );
}
