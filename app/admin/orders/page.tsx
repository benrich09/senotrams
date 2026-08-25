"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Order = {
  id?: string;
  name: string;
  contact: string;
  service: string;
  preferred_date: string;
  message: string;
  status: string;
  created_at?: string;
};

export default function AdminOrders() {
  const [list, setList] = useState<Order[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setList(await apiFetch("/api/orders"));
      } catch (e) {
        setErr(e instanceof Error ? e.message : "Failed to load");
      }
    }
    load();
  }, []);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-snow">Service orders</h1>
      <p className="mt-2 text-sm text-slate">Requests submitted from the public booking forms.</p>
      {err && <p className="mt-4 text-sm text-red-400">{err}</p>}
      <ul className="mt-8 space-y-3">
        {list.length === 0 && !err && (
          <li className="text-sm text-slate">No orders yet.</li>
        )}
        {list.map((o) => (
          <li key={o.id} className="rounded-xl border border-line-light bg-paper-2 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-snow">{o.name}</p>
              <span className="rounded-full bg-orange/15 px-2 py-0.5 text-xs text-orange">{o.status || "new"}</span>
            </div>
            <p className="mt-1 text-sm text-slate">{o.contact} · {o.service}</p>
            {o.preferred_date && <p className="text-xs text-slate">Preferred: {o.preferred_date}</p>}
            {o.message && <p className="mt-2 text-sm text-snow/80">{o.message}</p>}
            {o.created_at && <p className="mt-2 text-xs text-slate">{o.created_at}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
