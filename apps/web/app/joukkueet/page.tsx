import Link from "next/link";
import { siteConfig } from "../../lib/siteConfig";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Joukkueet</h1>

      <ul className="mt-6 space-y-2">
        {siteConfig.teams.map((team) => (
          <li key={team.slug}>
            <Link className="underline" href={"/joukkueet/" + team.slug}>
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
