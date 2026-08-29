"use client";

import { FormEvent, useEffect, useState } from "react";
import PageHero from "@/components/PageHero";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

type Career = {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
};

export default function CareersPage() {
  const [list, setList] = useState<Career[]>([]);
  const [selected, setSelected] = useState<Career | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/careers`)
      .then((r) => r.json())
      .then((data) => setList(Array.isArray(data) ? data : []))
      .catch(() => setList([]));
  }, []);

  async function apply(e: FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          career_id: selected?.id || "",
          career_title: selected?.title || "General",
          name,
          email,
          phone,
          message,
        }),
      });
      if (!res.ok) throw new Error("Could not submit application");
      setStatus("ok");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelected(null);
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Failed");
    }
  }

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Careers"
        title="Build with us."
        description="Join our team and help us shape the future of technology."
      />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Open roles</h2>
            <div className="mt-6 space-y-3">
              {list.length === 0 && (
                <p className="text-sm text-slate">No open roles right now. Check back soon.</p>
              )}
              {list.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelected(c)}
                  className={`w-full rounded-2xl border p-5 text-left transition-colors ${
                    selected?.id === c.id
                      ? "border-orange bg-orange/5"
                      : "border-line-light bg-paper-2 hover:border-orange/40"
                  }`}
                >
                  <p className="font-semibold text-snow">{c.title}</p>
                  <p className="mt-1 text-xs text-slate">
                    {c.department} · {c.type} · {c.location}
                  </p>
                  {c.description && <p className="mt-2 text-sm text-slate">{c.description}</p>}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Apply</h2>
            <p className="mt-2 text-sm text-slate">
              {selected ? `Applying for: ${selected.title}` : "Select a role or send a general application."}
            </p>
            <form onSubmit={apply} className="mt-6 flex flex-col gap-4 rounded-3xl border border-line bg-panel p-6">
              <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
              <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
              <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
              <textarea required rows={4} placeholder="Why you are a fit" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
              {status === "ok" && <p className="text-sm text-orange">Application received.</p>}
              {status === "err" && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink">
                Submit application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
