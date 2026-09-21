import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-light bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden bg-paper-2 sm:h-48">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-soft to-orange-soft text-2xl font-bold text-orange">
            {service.monogram}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-snow">{service.name}</h3>
        <p className="mt-1 text-xs font-medium text-slate">{service.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate line-clamp-3">{service.description}</p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition group-hover:gap-2.5">
          Explore
          <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
