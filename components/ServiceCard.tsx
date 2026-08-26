import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const isOrange = service.accent === "orange";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[1.75rem] border border-line-light bg-paper p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg"
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold tracking-wide ${
          isOrange ? "bg-orange/15 text-orange" : "bg-blue/15 text-blue"
        }`}
      >
        {service.monogram}
      </div>

      <h3 className="font-display text-xl font-bold text-snow">{service.name}</h3>
      <p className="eyebrow mt-1 text-[11px] text-slate">{service.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{service.description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors group-hover:underline underline-offset-4">
        Explore
        <ArrowUpRight size={15} />
      </span>
    </Link>
  );
}
