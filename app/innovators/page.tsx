"use client";

import { FormEvent, useState } from "react";
import { Lightbulb, Users, Sparkles, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/data/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function InnovatorsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [focus, setFocus] = useState("");
  const [idea, setIdea] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/innovators`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, focus, idea, linkedin }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not submit");
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setPhone("");
      setFocus("");
      setIdea("");
      setLinkedin("");
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Failed");
    }
  }

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Innovators"
        title="A place for builders."
        description="Share ideas, meet practitioners and  find partners   design, software, or growth."
      />
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            { icon: Lightbulb, t: "Share ideas", d: "Pitch early concepts and problems worth solving." },
            { icon: Users, t: "Meet people", d: "Connect with developers, designers and  marketers." },
            { icon: Sparkles, t: "Ship together", d: "Collaborate with Senotrams as delivery partner." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-line-light bg-paper-2 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <x.icon size={20} />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-snow">{x.t}</h2>
              <p className="mt-2 text-sm text-slate">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          
          <h2 className="text-center font-display text-2xl font-bold text-snow">
          Join as an innovator
          </h2>
  
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4 rounded-3xl border border-line bg-panel p-7 sm:p-8">
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Name *
              <input required value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Email *
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Phone
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Focus
              <input value={focus} onChange={(e) => setFocus(e.target.value)} placeholder="e.g. Software, Design, Marketing" className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              LinkedIn (optional)
              <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/…" className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Your idea *
              <textarea required rows={5} value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="What are you building or looking to collaborate on?" className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            {status === "ok" && <p className="text-sm text-orange">Thanks   we received your submission.</p>}
            {status === "err" && <p className="text-sm text-red-400">{error}</p>}
            <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60">
              <Send size={18} />
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
