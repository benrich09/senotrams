"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type App = {
  id?: string;
  career_title: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  created_at?: string;
};

export default function AdminApplications() {
  const [list, setList] = useState<App[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiFetch("/api/applications")
      .then(setList)
      .catch((e) => setErr(e instanceof Error ? e.message : "Failed"));
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-2xl font-bold text-white">Applications</h1>
      <p className="mt-1 text-sm text-white/50">People who applied to open roles on the website.</p>
      {err && <p className="mt-4 text-sm text-red-400">{err}</p>}
      <ul className="mt-8 space-y-3">
        {list.length === 0 && !err && <li className="text-sm text-white/45">No applications yet.</li>}
        {list.map((a) => (
          <li key={a.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-white">{a.name}</p>
              <span className="rounded-full bg-orange/15 px-2 py-0.5 text-xs text-orange">{a.status}</span>
            </div>
            <p className="mt-1 text-sm text-white/50">{a.email} {a.phone ? `· ${a.phone}` : ""}</p>
            <p className="mt-1 text-xs text-orange/80">Role: {a.career_title || "General"}</p>
            {a.message && <p className="mt-2 text-sm text-white/70">{a.message}</p>}
            {a.created_at && <p className="mt-2 text-xs text-white/35">{a.created_at}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
