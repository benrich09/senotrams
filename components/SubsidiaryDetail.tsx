import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import BookingForm from "@/components/BookingForm";

export default function SubsidiaryDetail({ slug }: { slug: string }) {
  const subsidiary = subsidiaries.find((c) => c.slug === slug);
  if (!subsidiary) notFound();

  const isBlue = subsidiary.accent === "blue";
  const accentBg = isBlue ? "bg-blue" : "bg-orange";
  const accentText = isBlue ? "text-blue" : "text-orange";

  return (
    <div className="bg-paper">
      {/* Header */}
      <section className="relative overflow-hidden bg-ink px-6 pb-16 pt-36 text-white md:px-10 md:pb-20 md:pt-44">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
        <div
          className={`pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full ${accentBg}/25 blur-[100px]`}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white ${accentBg}`}>
              {subsidiary.monogram}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              {subsidiary.name}
            </h1>
            <p className={`eyebrow mt-3 ${accentText}`}>{subsidiary.tagline}</p>
            <p className="mt-1 text-sm font-medium text-white/50">{subsidiary.role}</p>
            <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
              {subsidiary.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 ${accentBg}`}
              >
                Book a service
                <ArrowRight size={15} />
              </a>
              <Link
                href="/subsidiaries"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                All subsidiaries
              </Link>
            </div>
          </div>

          {/* TODO: replace with a real cover photo for this subsidiary */}
          <div className="placeholder-frame flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-white/20">
            <span className="eyebrow px-6 text-center text-white/50">{subsidiary.coverCaption}</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <span className={`eyebrow ${accentText}`}>What {subsidiary.name} does</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            All services
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate sm:text-base">
            Every service {subsidiary.name} offers — pick one below to pre-fill the booking form.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {subsidiary.services.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-panel p-5"
              >
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accentBg}/15`}>
                  <Check size={13} className={accentText} />
                </span>
                <div>
                  <span className="block text-sm font-semibold text-snow">{s.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate">{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work gallery */}
      <section className="border-y border-line-light bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <span className={`eyebrow ${accentText}`}>Selected work</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            Recent projects
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiary.galleryCaptions.map((caption, i) => (
              <div
                key={i}
                className="placeholder-frame flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-line-light p-4 text-center"
              >
                <span className="eyebrow text-slate">{caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="scroll-mt-28 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <BookingForm subsidiary={subsidiary} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 text-center md:px-10 md:pb-28">
        <span className={`eyebrow ${accentText}`}>Prefer to talk first?</span>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold text-snow sm:text-4xl">
          Have a project for {subsidiary.name}?
        </h2>
        <Link
          href="/contact"
          className={`mt-7 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 ${accentBg}`}
        >
          Get in touch
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
