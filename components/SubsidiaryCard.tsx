"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Globe } from "lucide-react";
import type { Subsidiary } from "@/data/subsidiaries";

/**
 * Card expands in place to show the subsidiary's service categories —
 * nothing opens in a new window. The "Visit website" link goes to the
 * subsidiary's own site (its `website` URL in data/subsidiaries.ts).
 */
export default function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  const [open, setOpen] = useState(false);

  const isBlue = subsidiary.accent === "blue";
  const accentText = isBlue ? "text-blue" : "text-orange";
  const accentBg = isBlue ? "bg-blue" : "bg-orange";
  const accentBorder = isBlue ? "hover:border-blue/50" : "hover:border-orange/50";
  const glow = isBlue ? "glow-blue" : "glow-orange";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-7 shadow-sm transition-all duration-300 hover:shadow-xl ${accentBorder} ${glow}`}
    >
      <div className="flex items-start justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white ${accentBg}`}>
          {subsidiary.monogram}
        </span>
        <Link
          href={subsidiary.website}
          className={`flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] font-semibold text-slate transition-colors hover:text-white ${isBlue ? "hover:bg-blue hover:border-blue" : "hover:bg-orange hover:border-orange"}`}
          aria-label={`Visit the ${subsidiary.name} website`}
        >
          <Globe size={12} />
          Visit website
        </Link>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-snow">{subsidiary.name}</h3>
      <p className={`eyebrow mt-1 ${accentText}`}>{subsidiary.tagline}</p>
      <p className="mt-1 text-xs font-medium text-mist">{subsidiary.role}</p>

      <p className="mt-5 text-sm leading-relaxed text-slate">{subsidiary.description}</p>

      {/* Expand-in-place: service categories shown below, no new window */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`mt-6 inline-flex items-center gap-1.5 self-start text-xs font-semibold transition-colors ${accentText}`}
      >
        {open ? "Hide categories" : "View categories"}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <ul className="overflow-hidden">
          {subsidiary.services.map((s) => (
            <li key={s.title} className="border-t border-line-light py-2.5 first:border-t-0">
              <p className="text-[13px] font-semibold text-snow">{s.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate">{s.detail}</p>
            </li>
          ))}
          <li className="border-t border-line-light pt-3">
            <Link
              href={subsidiary.website}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accentText}`}
            >
              Full details & booking on the {subsidiary.name} site
              <ArrowUpRight size={13} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
