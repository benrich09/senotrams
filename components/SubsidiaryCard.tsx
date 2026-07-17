import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Subsidiary } from "@/data/subsidiaries";

export default function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  const isBlue = subsidiary.accent === "blue";
  const accentText = isBlue ? "text-blue" : "text-orange";
  const accentBg = isBlue ? "bg-blue" : "bg-orange";
  const accentBorder = isBlue ? "hover:border-blue/50" : "hover:border-orange/50";
  const glow = isBlue ? "glow-blue" : "glow-orange";

  return (
    <a
      href={`/subsidiaries/${subsidiary.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${subsidiary.name} in a new tab`}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentBorder} ${glow}`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white ${accentBg}`}>
            {subsidiary.monogram}
          </span>
          <span className="flex items-center gap-1 text-slate opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
            <ExternalLink size={13} />
            <ArrowUpRight size={20} />
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-ink">{subsidiary.name}</h3>
        <p className={`eyebrow mt-1 ${accentText}`}>{subsidiary.tagline}</p>
        <p className="mt-1 text-xs font-medium text-ink-muted">{subsidiary.role}</p>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-slate">{subsidiary.description}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {subsidiary.services.slice(0, 3).map((s) => (
          <span
            key={s.title}
            className="rounded-full border border-line-light bg-paper-2 px-2.5 py-1 text-[11px] font-medium text-slate"
          >
            {s.title}
          </span>
        ))}
      </div>

      <span className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${accentText}`}>
        Explore & book services
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
