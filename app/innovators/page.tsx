"use client";

import { FormEvent, useState } from "react";
import { Lightbulb, Users, Sparkles, Send, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/data/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function InnovatorsPage() {
  const [started, setStarted] = useState(false);
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
    <div className="bg-gradient-to-b from-[#f7fafc] to-white">
      <PageHero
        eyebrow=""
        title="Your idea. Our technical partnership."
        description="For innovators who have the vision but lack tech skills or budget. Senotrams becomes your collaborator. We help design, build and launch while you stay the founder."
      />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            { icon: Lightbulb, t: "No tech background needed", d: "You bring the problem and the market insight. We handle the technology." },
            { icon: Users, t: "Affordable collaboration", d: "Flexible models for founders who cannot yet afford full agency rates." },
            { icon: Sparkles, t: "We stay your partner", d: "Senotrams remains a long-term collaborator, not just a vendor who disappears after launch." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-line-light bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
                <x.icon size={20} />
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-snow">{x.t}</h2>
              <p className="mt-2 text-sm text-slate">{x.d}</p>
            </div>
          ))}
        </div>

        {/* CTA to start innovator flow */}
        {!started && (
          <div className="mx-auto mt-16 max-w-xl text-center">
            <h2 className="font-display text-2xl font-bold text-snow sm:text-3xl">
              Do you want to be an innovator?
            </h2>
            <p className="mt-3 text-base text-slate">
              Answer a few prompts about your idea. We will review and get back to you on how we can partner.
            </p>
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-sm font-semibold text-ink transition hover:shadow-[0_0_25px_rgba(0,196,184,0.4)]"
            >
              Yes, I want to be an innovator
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {started && (
          <div className="mx-auto mt-16 max-w-2xl">
            <h2 className="text-center font-display text-2xl font-bold text-snow">
              Tell us about your idea
            </h2>
            <p className="mt-2 text-center text-sm text-slate">
              These prompts help us understand how best to partner with you.
            </p>

            {status === "ok" ? (
              <div className="mt-8 rounded-2xl border border-orange/30 bg-orange-soft/40 p-8 text-center">
                <p className="font-display text-lg font-bold text-snow">Thank you</p>
                <p className="mt-2 text-sm text-slate">
                  We received your submission and will review it shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-orange hover:underline"
                >
                  Submit another idea
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-8 flex flex-col gap-4 rounded-2xl border border-line-light bg-white p-7 shadow-sm sm:p-8"
              >
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  Your name *
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  Email *
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  Phone
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  What area is your idea in?
                  <input
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    placeholder="e.g. FinTech, Agriculture, Education"
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  LinkedIn (optional)
                  <input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/…"
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                  Describe your idea *
                  <textarea
                    required
                    rows={5}
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="What problem does it solve? Who is it for? What do you need from a technical partner?"
                    className="rounded-xl border border-line bg-[#f8fbfd] px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  />
                </label>
                {status === "err" && (
                  <p className="text-sm text-red-600">{error || "Something went wrong. Try again."}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Submit my idea"}
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
