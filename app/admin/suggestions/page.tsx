"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Item = {
  id?: string;
  name: string;
  contact: string;
  subject: string;
  message: string;
  status: string;
  created_at?: string;
};

export default function AdminSuggestions() {
  const [list, setList] = useState<Item[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/api/suggestions")
      .then(setList)
      .catch((e) => setErr(e instanceof Error ? e.message : "Failed"));
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-2xl font-bold text-white">Suggestions</h1>
      <p className="mt-1 text-sm text-white/50">Recommendations from the contact page.</p>
      {err && <p className="mt-4 text-sm text-red-400">{err}</p>}
      <ul className="mt-8 space-y-3">
        {list.length === 0 && !err && <li className="text-sm text-white/45">No suggestions yet.</li>}
        {list.map((s) => (
          <li key={s.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <p className="font-semibold text-white">{s.name}</p>
              <span className="text-xs text-white/40">{s.status}</span>
            </div>
            {s.contact && <p className="text-sm text-white/50">{s.contact}</p>}
            {s.subject && <p className="mt-1 text-sm text-orange/90">{s.subject}</p>}
            <p className="mt-2 text-sm text-white/75">{s.message}</p>
            {s.created_at && <p className="mt-2 text-xs text-white/35">{s.created_at}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
