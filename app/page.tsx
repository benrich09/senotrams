import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import SubsidiaryCard from "@/components/SubsidiaryCard";
import { subsidiaries } from "@/data/subsidiaries";

export default function Home() {
  return (
    <>
      {/* ---------- Hero (unchanged) ---------- */}
      <section className="relative flex h-screen min-h-[720px] w-full items-center overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,31,0.16),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(43,82,232,0.22),transparent_50%)]" />
        <Hero3D />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            A group of companies, Tanzania
          </span>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.98] sm:text-7xl md:text-8xl">
            SENOTRAMS
          </h1>
          <p className="eyebrow mt-3 text-white/40">smartones, reversed</p>

          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            One core. Three companies. Software &amp; AI, digital electronics
            &amp; gaming, and design, marketing &amp; print — everything a
            business or a person needs, built by one group.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/subsidiaries"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
            >
              Meet the companies
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-50 sm:flex">
          <span className="eyebrow text-white/60">Scroll</span>
          <div className="h-9 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ---------- About / How we started ---------- */}
      <section className="relative overflow-hidden bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            {/* TODO: drop a founders / team photo here */}
            <div className="order-2 md:order-1">
              <div className="placeholder-frame relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-line-light shadow-sm">
                <span className="eyebrow px-6 text-center text-slate">
                  Founders / team photo goes here
                </span>
                <div className={`pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange/10 blur-2xl`} />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-light bg-paper-2 px-4 py-1.5 text-orange">
                How we started
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
                A high-school idea, grouped into{" "}
                <span className="text-gradient">six subsidiaries.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate">
                Senotrams began as an idea between two friends, Benson Richard
                and Wenseslaus Kidakule, back in high school. That idea grew
                into a proper group of companies — each subsidiary focused on
                a different craft, all sharing the same core.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { value: "6", label: "Subsidiaries" },
                  { value: "2", label: "Founders" },
                  { value: "1", label: "Shared core" },
                  { value: "TZ", label: "Based in" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-line-light bg-paper-2 px-4 py-4">
                    <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
                    <p className="eyebrow mt-1 text-[10px] text-slate">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline underline-offset-4"
              >
                Read the full story
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Subsidiaries ---------- */}
      <section className="bg-paper-2 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow text-blue">The group</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
                Six subsidiaries, one core.
              </h2>
              <p className="mt-4 text-base text-slate">
                Software &amp; AI, digital monitoring &amp; gaming, marketing &amp; print,
                data &amp; AI, security &amp; auditing, and IT infrastructure — each
                subsidiary opens its own page to explore and book services.
              </p>
            </div>
            <Link
              href="/subsidiaries"
              className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-orange hover:text-orange"
            >
              View all subsidiaries
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((subsidiary) => (
              <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-10 md:py-28">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-blue/25 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-orange/20 blur-[110px]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="eyebrow text-orange">Let&rsquo;s build something</span>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Got a project in mind for one of our subsidiaries?
          </h2>
          <p className="max-w-xl text-white/65">
            Tell us what you need — software, AI, security, design, gaming, or
            infrastructure — and we&rsquo;ll route it to the right team, or book
            directly on the subsidiary&rsquo;s own page.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
