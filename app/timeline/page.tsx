import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline | Senotrams Group",
  description: "From a high-school idea to a digital services company.",
};

export default function TimelinePage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Milestones"
        title="From notebook to group."
        description="A rough sketch of how Senotrams got here."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <ol className="relative border-l border-line-light pl-8">
            {timeline.map((entry, i) => (
              <li key={i} className="mb-12 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-orange" />
                <span className="eyebrow text-orange">{entry.year}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-snow sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">
                  {entry.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
