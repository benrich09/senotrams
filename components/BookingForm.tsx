"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import type { Subsidiary } from "@/data/subsidiaries";

// TODO: replace with the real Senotrams WhatsApp number & email.
const WHATSAPP_NUMBER = "000000000000";
const CONTACT_EMAIL = "hello@senotrams.example";

export default function BookingForm({ subsidiary }: { subsidiary: Subsidiary }) {
  const isBlue = subsidiary.accent === "blue";
  const accentBg = isBlue ? "bg-blue" : "bg-orange";
  const accentText = isBlue ? "text-blue" : "text-orange";
  const accentFocus = isBlue ? "focus:border-blue" : "focus:border-orange";

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(subsidiary.services[0]?.title ?? "");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = name.trim().length > 0 && contact.trim().length > 0;

  const buildMessage = () =>
    [
      `Hello ${subsidiary.name}, I'd like to book a service.`,
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Service: ${service}`,
      date ? `Preferred date: ${date}` : "",
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const handleWhatsApp = () => {
    setTouched(true);
    if (!isValid) return;
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    setTouched(true);
    if (!isValid) return;
    const subject = encodeURIComponent(`Service booking — ${subsidiary.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-7 sm:p-8">
      <span className={`eyebrow ${accentText}`}>Book a service</span>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
        Get {subsidiary.name} working on it
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{subsidiary.bookingNote}</p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Full name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={`rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-ink outline-none transition-colors ${accentFocus}`}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Phone or email
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="How should we reach you?"
              className={`rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-ink outline-none transition-colors ${accentFocus}`}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Service needed
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-ink outline-none transition-colors ${accentFocus}`}
            >
              {subsidiary.services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Preferred date{" "}
            <span className="font-normal text-ink-muted">(optional)</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-ink outline-none transition-colors ${accentFocus}`}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Tell us more
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any details that'll help us prepare..."
            className={`resize-none rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-ink outline-none transition-colors ${accentFocus}`}
          />
        </label>

        {touched && !isValid && (
          <p className="text-xs font-medium text-orange">
            Please add your name and a phone number or email so we can reach you.
          </p>
        )}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsApp}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] ${accentBg}`}
          >
            <FaWhatsapp size={16} />
            Book via WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            <FaEnvelope size={14} />
            Book via email
          </button>
        </div>
      </form>
    </div>
  );
}
