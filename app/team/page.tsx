import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team | Senotrams",
  description: "Meet the co-founders of Senotrams.",
};

export default function TeamPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Team"
        title="The people behind Senotrams."
        description="Members of the team elavating to Success."
      />
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="flex min-h-[280px] flex-col rounded-[1.75rem] border border-line-light bg-paper-2 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15 font-display text-lg font-bold text-orange">
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-orange">{m.role}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-snow">{m.name}</h2>
              <p className="mt-1 text-sm font-medium text-slate">{m.focus}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
