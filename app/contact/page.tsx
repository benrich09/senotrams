"use client";

import { FormEvent, useState } from "react";
import PageHero from "@/components/PageHero";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/suggestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, subject, message }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send");
      }
      setStatus("ok");
      setName("");
      setContact("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Failed");
    }
  }

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Suggestions"
        title="Share a recommendation."
        description="Ideas, feedback and improvements for Senotrams — we read every note in the admin inbox."
      />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-xl">
          <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-3xl border border-line bg-panel p-7 sm:p-8">
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Name
              <input required value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Email or phone (optional)
              <input value={contact} onChange={(e) => setContact(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Subject (optional)
              <input value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Your suggestion
              <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange" placeholder="What should we improve or try next?" />
            </label>
            {status === "ok" && <p className="text-sm text-orange">Thank you — your suggestion was received.</p>}
            {status === "err" && <p className="text-sm text-red-400">{error}</p>}
            <button type="submit" disabled={status === "sending"} className="mt-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send suggestion"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
