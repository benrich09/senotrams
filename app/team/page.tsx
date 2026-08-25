import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { founders, teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team | Senotrams Group",
  description: "The people behind Senotrams digital services.",
};

export default function TeamPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="The people"
        title="Meet the team."
        description="Founded by two people, now built by a growing group across the team."
      />

      {/* Founders */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-orange">Founders</span>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((f) => (
              <div key={f.name} className="flex items-center gap-5 rounded-3xl border border-line bg-panel p-7">
                {/* TODO: drop a founder photo here */}
                <div className="placeholder-frame flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-dashed border-line-light">
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

      {/* Rest of the team */}
      <section className="border-y border-line-light bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-blue">Across the group</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">The wider team</h2>
          {/* TODO: fill in real team members — left as open slots */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="placeholder-frame flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line-light bg-panel p-6 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-line-light">
                  <span className="eyebrow text-slate">Photo</span>
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-snow">
                    {m.name || "Name"}
                  </p>
                  <p className="eyebrow mt-1 text-slate">{m.role || "Role"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
