import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About | Senotrams",
  description: "The story of Senotrams co-founders building practical digital services in Tanzania.",
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="About"
        title="Built to help businesses move faster online."
        description="Senotrams is a digital services company focused on software, design, marketing and  infrastructure that teams can actually use."
      />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-snow md:text-3xl">Our story</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
            <p>
              Senotrams was founded by after seeing the gap for:<br/>
              Businesses needed reliable digital work websites, apps, branding and  growth without the confusion
              of many disconnected vendors.
            </p>

            <p>
              Senotrams is set out to build a single studio where software development, design, animation,
              hosting, content and  marketing could be planned and delivered together.<br/>
            </p>

            <p>
            The goal was simple:
            <ul>
              <li>Help businesses grow with digital solutions</li>
              <li>Create products for businesses and customers</li>
              <li>Help businesses move faster online</li>
              <li>Help innovate and stay ahead of the curve</li>
              <li>Help innovators make a difference</li>
            </ul>Help businesses move faster online
            </p>

            <p>
              Today Senotrams helps organisations across Tanzania and beyond launch products, stay
              online and  tell their story.
              <br/>
              Senotrams still lead the core disciplines software, visual craft and  digital marketing so every engagement stays close to the
              people who ship the work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line-light bg-paper-2 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-orange">Leadership</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-snow md:text-3xl">Co-founder</h2>
            </div>
            <Link href="/team" className="text-sm font-semibold text-orange hover:underline">
              Full team page
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="rounded-3xl border border-line-light bg-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange">{m.role}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-snow">{m.name}</h3>
                <p className="mt-1 text-sm text-slate">{m.focus}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
