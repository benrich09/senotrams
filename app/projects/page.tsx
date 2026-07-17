import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Senotrams Group",
  description: "Recent work across all six Senotrams subsidiaries.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Our work"
        title="Projects across the group."
        description="A look at recent work across Avionics, SATI, KIDAINO, COGNITA, SENTRYX and NEXORA — photos are placeholders, ready for you to fill in."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
              {/* TODO: replace with a real project photo */}
              <div className="placeholder-frame flex aspect-[4/3] items-center justify-center border-b border-line-light">
                <span className="eyebrow text-slate">Project photo</span>
              </div>
              <div className="p-6">
                <span className="eyebrow text-orange">{p.company}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {p.title || "Project title"}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate">
                  {p.category}
                </p>
                <p className="mt-3 text-sm text-slate">
                  {p.description || "Short project description goes here."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
