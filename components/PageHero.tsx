interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden text-white md:min-h-[46vh]">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/network-hero.jpeg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/80 via-[#0a1f3d]/75 to-[#061428]/90" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-6 md:px-10 md:py-32">
        {eyebrow ? (
          <p className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm sm:text-sm">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
