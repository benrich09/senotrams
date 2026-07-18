import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { openings, values } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | Senotrams Group",
  description: "Open roles across Avionics, SATI, KIDAINO, COGNITA, SENTRYX and NEXORA.",
};

export default function CareersPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Join the group"
        title="Build with us."
        description="Openings across all six subsidiaries — software, data & AI, security, digital services, design and infrastructure."
      />

      {/* Values */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-blue">How we work</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">Our values</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-line bg-panel p-7">
                <h3 className="font-display text-lg font-semibold text-snow">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="border-y border-line-light bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow text-orange">Open roles</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
            Current openings
          </h2>
          {/* TODO: fill in real open roles — left blank as placeholders */}
          <div className="mt-10 flex flex-col gap-4">
            {openings.map((o, i) => (
              <div
                key={i}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-dashed border-line-light bg-panel p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="eyebrow text-blue">{o.company}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-snow">
                    {o.title || "Role title coming soon"}
                  </h3>
                </div>
                <span className="eyebrow text-slate">{o.type || "Type · Location"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
