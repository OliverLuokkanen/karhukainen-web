type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#001641" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
