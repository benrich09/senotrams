"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

type Innovator = {
  id: string;
  name: string;
  email: string;
  phone: string;
  focus: string;
  idea: string;
  linkedin: string;
  status: string;
  created_at: string;
};

export default function AdminInnovatorsPage() {
  const [list, setList] = useState<Innovator[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("senotrams_token") : null;
    fetch(`${API_URL}/api/innovators`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text());
        return r.json();
      })
      .then((data) => setList(Array.isArray(data) ? data : []))
      .catch((e) => setError(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-white">Innovators</h1>
      <p className="mt-1 text-sm text-white/50">Submissions from the Innovators page</p>
      {loading && <p className="mt-6 text-sm text-white/50">Loading…</p>}
      {error && <p className="mt-6 text-sm text-red-400">{error}</p>}
      <div className="mt-8 space-y-4">
        {list.map((i) => (
          <article key={i.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold text-white">{i.name}</h2>
                <p className="text-sm text-white/60">{i.email}</p>
              </div>
              <span className="rounded-full bg-orange/15 px-2.5 py-0.5 text-xs text-orange">{i.status}</span>
            </div>
            {i.focus && <p className="mt-2 text-sm text-white/70">Focus: {i.focus}</p>}
            {i.phone && <p className="text-sm text-white/50">{i.phone}</p>}
            {i.linkedin && (
              <a href={i.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-orange hover:underline">
                LinkedIn
              </a>
            )}
            <p className="mt-3 whitespace-pre-wrap text-sm text-white/80">{i.idea}</p>
            <p className="mt-2 text-xs text-white/40">{i.created_at}</p>
          </article>
        ))}
        {!loading && list.length === 0 && !error && (
          <p className="text-sm text-white/50">No innovator submissions yet.</p>
        )}
      </div>
    </div>
  );
}
