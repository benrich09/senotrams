"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Entry = {
  id?: string;
  year: string;
  title: string;
  description: string;
};

export default function AdminTimeline() {
  const [list, setList] = useState<Entry[]>([]);
  const [form, setForm] = useState<Entry>({ year: "", title: "", description: "" });
  const [err, setErr] = useState("");

  async function load() {
    try {
      setList(await apiFetch("/api/timeline"));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed to load");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await apiFetch("/api/timeline", { method: "POST", body: JSON.stringify(form) });
      setForm({ year: "", title: "", description: "" });
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed to save");
    }
  }

  async function remove(id?: string) {
    if (!id) return;
    await apiFetch(`/api/timeline/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-snow">Timeline</h1>
      <form onSubmit={onSubmit} className="mt-8 grid gap-3 rounded-2xl border border-line bg-panel p-6 sm:grid-cols-2">
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Year / period" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow sm:col-span-2" placeholder="Description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit" className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-ink sm:col-span-2 sm:w-fit">Add entry</button>
        {err && <p className="text-sm text-red-400 sm:col-span-2">{err}</p>}
      </form>
      <ul className="mt-8 space-y-3">
        {list.map((t) => (
          <li key={t.id} className="flex items-start justify-between gap-4 rounded-xl border border-line-light bg-paper-2 p-4">
            <div>
              <p className="text-xs text-orange">{t.year}</p>
              <p className="font-semibold text-snow">{t.title}</p>
              <p className="mt-1 text-sm text-slate">{t.description}</p>
            </div>
            <button type="button" onClick={() => remove(t.id)} className="text-sm text-red-400">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
