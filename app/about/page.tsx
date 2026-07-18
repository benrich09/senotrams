import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Layers } from "lucide-react";
import PageHero from "@/components/PageHero";
import { founders } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us | Senotrams Group",
  description:
    "Senotrams started as a high-school idea between Benson Richard and Wenseslaus Kidakule, and grew into a group of six subsidiaries.",
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Just an idea, <span className="text-gradient">grouped</span> into a company.
          </>
        }
        description="Senotrams began between two friends in high school, and grew into a group of six subsidiaries sharing one core."
      />

      {/* Origin story */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-blue/10 blur-[100px]" />
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          {/* TODO: drop a founders photo here */}
          <div className="order-2 md:order-1">
            <div className="placeholder-frame flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-line-light shadow-sm">
              <span className="eyebrow px-6 text-center text-slate">Founders photo goes here</span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-light bg-paper-2 px-4 py-1.5 text-orange">
              How it began
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-snow sm:text-4xl">
              Two friends, one notebook, one idea.
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate">
              <p>
                Senotrams was founded by Benson Richard and Wenseslaus
                Kidakule. It started as just an idea in high school — no
                office, no funding, just two people who kept talking about
                what they could build.
              </p>
              <p>
                That idea grew into a proper group of companies by splitting
                the original plan into focused subsidiaries: Avionics for
                software, SATI for digital monitoring &amp; gaming, KIDAINO
                for marketing &amp; print, COGNITA for AI &amp; data, SENTRYX
                for security &amp; auditing, and NEXORA for IT infrastructure.
              </p>
              <p>
                The name itself carries the story. Senotrams comes from
                &ldquo;Smartones&rdquo; — reversed. A small detail, kept ever
                since.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line-light bg-paper-2 px-5 py-4">
              <span className="font-display text-lg font-bold text-snow">SENOTRAMS</span>
              <ArrowRight size={16} className="text-slate" />
              <span className="font-mono text-sm text-slate">SMARTONES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / how we work */}
      <section className="border-y border-line-light bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-blue">What ties us together</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            One core, many crafts.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Build with intent",
                description: "Every product ships because it solves a real problem, not because it's trendy.",
              },
              {
                icon: Layers,
                title: "One core, six crafts",
                description: "Software, data, security, design and infrastructure people share one roof and learn from each other.",
              },
              {
                icon: Users,
                title: "Start small, think big",
                description: "The whole group started as a notebook idea in high school — we still build that way.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border border-line bg-panel p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <v.icon size={18} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-snow">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-orange">Founders</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            Built by two people.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((f) => (
              <div
                key={f.name}
                className="flex flex-col gap-4 rounded-3xl border border-line bg-panel p-7"
              >
                {/* TODO: drop a founder photo here */}
                <div className="placeholder-frame flex aspect-square w-24 items-center justify-center rounded-2xl border border-dashed border-line-light">
                  <span className="eyebrow text-slate">Photo</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-snow">{f.name}</h3>
                  <p className="eyebrow mt-1 text-orange">{f.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links to the rest of the about section */}
      <section className="border-t border-line-light bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-blue">Keep exploring</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            More about the group.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <Link
              href="/about/timeline"
              className="group flex flex-col justify-between rounded-3xl border border-line bg-panel p-8 transition-colors hover:border-orange/50"
            >
              <div>
                <span className="eyebrow text-orange">Milestones</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-snow">Timeline</h3>
                <p className="mt-2 text-sm text-slate">From idea to a group of six subsidiaries.</p>
              </div>
              <ArrowRight size={20} className="mt-6 text-slate transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/team"
              className="group flex flex-col justify-between rounded-3xl border border-line bg-panel p-8 transition-colors hover:border-blue/50"
            >
              <div>
                <span className="eyebrow text-blue">The people</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-snow">Team</h3>
                <p className="mt-2 text-sm text-slate">Founders and the wider team across the group.</p>
              </div>
              <ArrowRight size={20} className="mt-6 text-slate transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about/careers"
              className="group flex flex-col justify-between rounded-3xl border border-line bg-panel p-8 transition-colors hover:border-orange/50"
            >
              <div>
                <span className="eyebrow text-orange">Join the group</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-snow">Careers</h3>
                <p className="mt-2 text-sm text-slate">Open roles across all six subsidiaries.</p>
              </div>
              <ArrowRight size={20} className="mt-6 text-slate transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
