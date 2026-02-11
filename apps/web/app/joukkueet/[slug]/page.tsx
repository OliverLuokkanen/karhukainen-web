import { notFound } from "next/navigation";
import { siteConfig } from "../../../lib/siteConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const team = siteConfig.teams.find((t) => t.slug === slug);
  if (!team) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">{team.name}</h1>
      <p className="mt-3 text-slate-700">Joukkuesivu (sisältö tulossa).</p>
    </main>
  );
}
