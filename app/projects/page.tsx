import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Senotrams",
  description: "Selected work and the kinds of outcomes we deliver.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-[#f7fafc] to-white">
      <PageHero
        eyebrow=""
        title="Selected work"
        description="Real projects we have helped shape. Request a similar engagement from Services."
      />
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-line-light bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {p.image && (
                <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange">{p.category}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-snow">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
                <p className="mt-3 text-xs text-slate">{p.service}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-6xl text-center">
          <Link href="/services" className="inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink">
            Start from services
          </Link>
        </div>
      </section>
    </div>
  );
}
