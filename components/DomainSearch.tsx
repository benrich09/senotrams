"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

const TLDS = [".com", ".co.tz", ".tz", ".net", ".org", ".io", ".africa"];

type Row = { domain: string; status: "available" | "taken" | "unknown" | "checking"; note: string };

async function checkDomain(domain: string): Promise<Row> {
  try {
    // Google Public DNS — NXDOMAIN often means not in DNS (likely free / not configured)
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=NS`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      return { domain, status: "unknown", note: "Could not check — we can verify for you" };
    }
    const data = (await res.json()) as { Status?: number; Answer?: unknown[] };
    // 0 = NOERROR (records exist → usually taken / in use)
    // 3 = NXDOMAIN (no DNS → often available, but not a legal WHOIS guarantee)
    if (data.Status === 3) {
      return { domain, status: "available", note: "Likely available (no public DNS)" };
    }
    if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
      return { domain, status: "taken", note: "In use / registered (has DNS)" };
    }
    if (data.Status === 0) {
      return { domain, status: "taken", note: "Resolves — treat as taken" };
    }
    return { domain, status: "unknown", note: "Unclear — we will confirm before register" };
  } catch {
    return { domain, status: "unknown", note: "Network error — try again or ask us" };
  }
}

export default function DomainSearch() {
  const [q, setQ] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const base = q.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    if (!base) return;
    setLoading(true);
    setRows(TLDS.map((tld) => ({ domain: `${base}${tld}`, status: "checking", note: "Checking…" })));
    const results = await Promise.all(TLDS.map((tld) => checkDomain(`${base}${tld}`)));
    setRows(results);
    setLoading(false);
  }

  const badge = (s: Row["status"]) => {
    if (s === "available") return "bg-emerald-500/15 text-emerald-400";
    if (s === "taken") return "bg-red-500/15 text-red-400";
    if (s === "checking") return "bg-white/5 text-white/50";
    return "bg-amber-500/15 text-amber-400";
  };

  return (
    <div className="rounded-2xl border border-line-light bg-paper-2 p-5">
      <p className="mb-3 text-xs text-slate">
        Live DNS check (not a legal WHOIS). “Available” means no public DNS found — we confirm before registration.
      </p>
      <form onSubmit={onSearch} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="yourbrand"
          className="flex-1 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-snow outline-none focus:border-orange"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3 text-sm font-semibold text-ink disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          Check availability
        </button>
      </form>
      {rows.length > 0 && (
        <ul className="mt-4 space-y-2">
          {rows.map((r) => (
            <li
              key={r.domain}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-line-light bg-paper px-3 py-2 text-sm"
            >
              <span className="font-mono text-snow">{r.domain}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge(r.status)}`}>
                {r.status === "available"
                  ? "Likely available"
                  : r.status === "taken"
                    ? "Taken / in use"
                    : r.status === "checking"
                      ? "Checking…"
                      : "Unclear"}
              </span>
              <span className="w-full text-xs text-slate sm:w-auto">{r.note}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
