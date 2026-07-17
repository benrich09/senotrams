import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubsidiaryCard from "@/components/SubsidiaryCard";
import { subsidiaries } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Subsidiaries | Senotrams Group",
  description:
    "Avionics, SATI, KIDAINO, COGNITA, SENTRYX and NEXORA — the six subsidiaries under Senotrams Group.",
};

export default function SubsidiariesPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="The group"
        title="Six subsidiaries, one core."
        description="Each subsidiary opens in its own page with the full list of services and a booking form — click a card to open it in a new tab."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>
    </div>
  );
}
