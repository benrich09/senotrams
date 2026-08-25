"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Career = {
  id?: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
};

export default function AdminCareers() {
  const [list, setList] = useState<Career[]>([]);
  const [form, setForm] = useState<Career>({ title: "", department: "", type: "Full-time", location: "", description: "" });
  const [err, setErr] = useState("");

  async function load() {
    try {
      setList(await apiFetch("/api/careers"));
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
      await apiFetch("/api/careers", { method: "POST", body: JSON.stringify(form) });
      setForm({ title: "", department: "", type: "Full-time", location: "", description: "" });
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed to save");
    }
  }

  async function remove(id?: string) {
    if (!id) return;
    await apiFetch(`/api/careers/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-2xl font-bold text-white">Careers</h1>
      <p className="mt-1 text-sm text-white/50">Roles published here appear on the public careers page.</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2">
        <input className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" placeholder="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
        <input className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" placeholder="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} />
        <input className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <textarea className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white sm:col-span-2" rows={3} placeholder="Role description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit" className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-ink sm:col-span-2 sm:w-fit">Add role</button>
        {err && <p className="text-sm text-red-400 sm:col-span-2">{err}</p>}
      </form>
      <ul className="mt-8 space-y-3">
        {list.map((c) => (
          <li key={c.id} className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div>
              <p className="font-semibold text-white">{c.title}</p>
              <p className="text-xs text-white/45">{c.department} · {c.type} · {c.location}</p>
              {c.description && <p className="mt-2 text-sm text-white/60">{c.description}</p>}
            </div>
            <button type="button" onClick={() => remove(c.id)} className="text-sm text-red-400">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
