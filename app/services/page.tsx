import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Senotrams",
  description: "Web & mobile, hosting, design, marketing, data and content services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear offers. Practical delivery."
        description="Every service has a simple path understand it, request it, ship it."
      />
      <section className="bg-paper px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="min-h-[280px]">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
