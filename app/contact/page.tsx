"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Phone, Send, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/data/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const iconBox =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange";

const SOCIAL = [
  { href: CONTACT.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: CONTACT.social.instagram, label: "Instagram", icon: FaInstagram },
  { href: CONTACT.social.twitter, label: "X / Twitter", icon: FaXTwitter },
  { href: CONTACT.social.facebook, label: "Facebook", icon: FaFacebookF },
  { href: CONTACT.social.tiktok, label: "TikTok", icon: FaTiktok },
  ...(CONTACT.social.youtube
    ? [{ href: CONTACT.social.youtube, label: "YouTube", icon: FaYoutube }]
    : []),
].filter((s) => Boolean(s.href));

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("Help");
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
      setSubject("Help");
      setMessage("");
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Failed");
    }
  }

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Contact"
        title="We’re here to help."
        description="Ask a question, request support, or share a suggestion. Prefer a quick chat? Use WhatsApp, email, or call us."
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Reach the team</h2>
            <p className="mt-2 text-sm text-slate">Choose the channel that works best for you.</p>

            <ul className="mt-8 space-y-3">
              {/* Email */}
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-line-light bg-paper-2 p-4 transition-colors hover:border-orange/40"
                >
                  <span className={iconBox}>
                    <Mail size={18} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-snow">Email</p>
                    <p className="truncate text-sm text-slate">{CONTACT.email}</p>
                  </div>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-line-light bg-paper-2 p-4 transition-colors hover:border-orange/40"
                >
                  <span className={iconBox}>
                    <MessageCircle size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-snow">WhatsApp</p>
                    <p className="text-sm text-slate">{CONTACT.whatsappDisplay}</p>
                  </div>
                </a>
              </li>

              {/* Phones */}
              {CONTACT.phones.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="flex items-center gap-4 rounded-2xl border border-line-light bg-paper-2 p-4 transition-colors hover:border-orange/40"
                  >
                    <span className={iconBox}>
                      <Phone size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-snow">{p.label}</p>
                      <p className="text-sm text-slate">{p.display}</p>
                    </div>
                  </a>
                </li>
              ))}

              {/* Location */}
              <li>
                <div className="flex items-center gap-4 rounded-2xl border border-line-light bg-paper-2 p-4">
                  <span className={iconBox}>
                    <MapPin size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-snow">Location</p>
                    <p className="text-sm text-slate">{CONTACT.location.label}</p>
                  </div>
                </div>
              </li>

              {/* Social media with icons */}
              <li>
                <div className="rounded-2xl border border-line-light bg-paper-2 p-4">
                  <p className="mb-3 text-sm font-semibold text-snow">Social media</p>
                  <div className="flex flex-wrap gap-2">
                    {SOCIAL.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-slate transition-colors hover:border-orange/40 hover:text-orange"
                        >
                          <Icon size={13} />
                          {s.label}
                        </a>
                      );
                    })}
                  </div>
                  
                </div>
              </li>
            </ul>
          </div>

          {/* Right column – form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Send a message</h2>
            <p className="mt-2 text-sm text-slate">
              For help, feedback, or ideas. We read every message.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col gap-4 rounded-3xl border border-line bg-panel p-7 sm:p-8"
            >
              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Your name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Email or phone
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Topic
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                >
                  <option value="Help">Help / support</option>
                  <option value="Suggestion">Suggestion / feedback</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Message
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
                  placeholder="Describe what you need…"
                />
              </label>

              {status === "ok" && (
                <p className="text-sm text-orange">Thank you   your message was received.</p>
              )}
              {status === "err" && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60"
              >
                <Send size={18} strokeWidth={2} />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}