interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 pb-16 pt-36 text-white md:px-10 md:pb-20 md:pt-44">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-blue/25 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow inline-block text-orange">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (-
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
