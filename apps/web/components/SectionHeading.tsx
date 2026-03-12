type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
