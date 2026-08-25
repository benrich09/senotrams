import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projects | Senotrams",
  description: "Selected work and the kinds of outcomes we deliver.",
};

const showcase = [
  { title: "Product websites", category: "Web", blurb: "Clear marketing sites that explain the offer and convert visitors." },
  { title: "Business web apps", category: "Software", blurb: "Internal tools and client portals built around real workflows." },
  { title: "Brand systems", category: "Design", blurb: "Identity and assets that stay consistent across channels." },
  { title: "Launch campaigns", category: "Marketing", blurb: "Coordinated content and ads around a product or event." },
  { title: "Hosting & domains", category: "Infrastructure", blurb: "Reliable setups with email, SSL and ongoing care." },
  { title: "Content systems", category: "Content", blurb: "Copy and calendars that keep a brand active online." },
];

export default function ProjectsPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Our work"
        title="Outcomes we optimise for."
        description="Projects are curated manually. Here is the shape of work we take on — request a similar engagement from Services."
      />
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((p) => (
            <article
              key={p.title}
              className="flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line-light bg-paper-2 p-6 transition-colors hover:border-orange/40 sm:aspect-[5/6]"
            >
              <span className="eyebrow text-orange">{p.category}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-snow">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{p.blurb}</p>
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
