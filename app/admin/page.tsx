"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, UserRoundSearch, Inbox, MessageSquareQuote, ArrowUpRight } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function AdminHome() {
  const [stats, setStats] = useState({ careers: 0, applications: 0, orders: 0, suggestions: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [c, a, o, s] = await Promise.all([
          apiFetch("/api/careers"),
          apiFetch("/api/applications"),
          apiFetch("/api/orders"),
          apiFetch("/api/suggestions"),
        ]);
        setStats({
          careers: c.length || 0,
          applications: a.length || 0,
          orders: o.length || 0,
          suggestions: s.length || 0,
        });
      } catch (e) {
        setError(e instanceof Error ? e.message : "API offline");
      }
    }
    load();
  }, []);

  const cards = [
    { label: "Careers", value: stats.careers, href: "/admin/careers", icon: Briefcase, hint: "Open roles" },
    { label: "Applications", value: stats.applications, href: "/admin/applications", icon: UserRoundSearch, hint: "Job applications" },
    { label: "Orders", value: stats.orders, href: "/admin/orders", icon: Inbox, hint: "Service requests" },
    { label: "Suggestions", value: stats.suggestions, href: "/admin/suggestions", icon: MessageSquareQuote, hint: "From contact page" },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="font-display text-2xl font-bold text-white md:text-3xl">Overview</h1>
      <p className="mt-1 text-sm text-white/50">Careers, applications, customer orders and suggestions.</p>
      {error && <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">{error}</div>}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.href} href={c.href} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-orange/40 hover:bg-orange/5">
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-orange"><Icon size={18} /></span>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-orange" />
              </div>
              <p className="mt-4 text-sm text-white/50">{c.label}</p>
              <p className="mt-1 font-display text-3xl font-bold text-white">{c.value}</p>
              <p className="mt-1 text-xs text-white/35">{c.hint}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
