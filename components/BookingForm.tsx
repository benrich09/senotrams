"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { services } from "@/data/services";

const WHATSAPP_NUMBER = "255700000000"; // TODO: real number
const CONTACT_EMAIL = "info@senotrams.co.tz";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function BookingForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(defaultService || services[0]?.name || "");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const isValid = name.trim().length > 0 && contact.trim().length > 0;

  const buildMessage = () =>
    [
      `Hello Senotrams, I'd like to request a service.`,
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Service: ${service}`,
      date ? `Preferred date: ${date}` : "",
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const submitOrder = async () => {
    try {
      setStatus("sending");
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          service,
          preferred_date: date,
          message,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  };

  const handleWhatsApp = async () => {
    setTouched(true);
    if (!isValid) return;
    await submitOrder();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmail = async () => {
    setTouched(true);
    if (!isValid) return;
    await submitOrder();
    const subject = encodeURIComponent(`Service request — ${service}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl border border-line bg-panel p-7 sm:p-8">
      <span className="eyebrow text-orange">Request a service</span>
      <h3 className="mt-2 font-display text-2xl font-semibold text-snow">
        Tell us what you need
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">
        Fill in the form — we will save your request and you can also continue on WhatsApp or email.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-snow">
            Full name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-snow">
            Phone or email
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="How should we reach you?"
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-snow">
            Service needed
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
            >
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-snow">
            Preferred date (optional)
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Details
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Describe your project or question"
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
          />
        </label>

        {touched && !isValid && (
          <p className="text-sm text-red-400">Name and contact are required.</p>
        )}
        {status === "ok" && (
          <p className="text-sm text-orange">Request saved. Continue on WhatsApp or email if you like.</p>
        )}
        {status === "err" && (
          <p className="text-sm text-amber-400">
            Could not reach the server — you can still send via WhatsApp or email.
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-snow hover:border-orange"
          >
            <FaEnvelope size={14} />
            Email
          </button>
        </div>
      </form>
    </div>
  );
}
