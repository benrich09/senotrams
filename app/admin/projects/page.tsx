"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type Project = {
  id?: string;
  title: string;
  service: string;
  category: string;
  description: string;
};

export default function AdminProjects() {
  const [list, setList] = useState<Project[]>([]);
  const [form, setForm] = useState<Project>({ title: "", service: "", category: "", description: "" });
  const [err, setErr] = useState("");

  async function load() {
    try {
      setList(await apiFetch("/api/projects"));
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
      await apiFetch("/api/projects", { method: "POST", body: JSON.stringify(form) });
      setForm({ title: "", service: "", category: "", description: "" });
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed to save");
    }
  }

  async function remove(id?: string) {
    if (!id) return;
    await apiFetch(`/api/projects/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-snow">Projects</h1>
      <form onSubmit={onSubmit} className="mt-8 grid gap-3 rounded-2xl border border-line bg-panel p-6 sm:grid-cols-2">
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} />
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input className="rounded-xl border border-line bg-paper-2 px-3 py-2 text-sm text-snow" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit" className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-ink sm:col-span-2 sm:w-fit">Add project</button>
        {err && <p className="text-sm text-red-400 sm:col-span-2">{err}</p>}
      </form>
      <ul className="mt-8 space-y-3">
        {list.map((p) => (
          <li key={p.id} className="flex items-start justify-between gap-4 rounded-xl border border-line-light bg-paper-2 p-4">
            <div>
              <p className="font-semibold text-snow">{p.title}</p>
              <p className="text-xs text-slate">{p.service} · {p.category}</p>
              <p className="mt-1 text-sm text-slate">{p.description}</p>
            </div>
            <button type="button" onClick={() => remove(p.id)} className="text-sm text-red-400">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
