import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { team, partners } from "@/data/team";

export const metadata: Metadata = {
  title: "Team | Senotrams",
  description: "Meet the team and partners behind Senotrams.",
};

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-b from-[#f7fafc] to-white">
      <PageHero
        eyebrow=""
        title="The people behind Senotrams"
        description="The team driving Senotrams forward, and the partners we work with."
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-snow">Leadership & team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="flex min-h-[260px] flex-col rounded-2xl border border-line-light bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-soft font-display text-lg font-bold text-orange">
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-orange">
                  {m.role}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-snow">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate">{m.focus}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-light bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-snow">Partners</h2>
          <p className="mt-2 max-w-xl text-sm text-slate">
            Organisations we collaborate with to deliver stronger outcomes for clients.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {partners.map((p) => (
              <article
                key={p.name}
                className="flex items-start gap-5 rounded-2xl border border-line-light bg-gradient-to-br from-white to-[#f0f7ff] p-6 shadow-sm"
              >
                {p.logo && (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-contain bg-white p-1 shadow-sm"
                  />
                )}
                <div>
                  <h3 className="font-display text-lg font-bold text-snow">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
