"use client";

import { useMemo, useState } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";
import { services } from "@/data/services";
import { CONTACT } from "@/data/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function BookingForm({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const serviceNames = useMemo(() => [...services.map((s) => s.name), "Other"], []);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(defaultService || serviceNames[0] || "");
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const isValid = name.trim().length > 0 && contact.trim().length > 0;

  const products = useMemo(() => {
    const match = services.find((s) => s.name === service);
    return match?.platforms ?? [];
  }, [service]);

  const buildMessage = () =>
    [
      `Hello Senotrams, I'd like to request a service.`,
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Service: ${service}`,
      product ? `Product / package: ${product}` : "",
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
          product,
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
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmail = async () => {
    setTouched(true);
    if (!isValid) return;
    await submitOrder();
    const subject = encodeURIComponent(`Service request — ${service}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSend = async () => {
    setTouched(true);
    if (!isValid) return;
    await submitOrder();
  };

  return (
    <div className="rounded-3xl border border-line bg-panel p-7 sm:p-8">
      <span className="eyebrow text-orange">Request a service</span>
      <h3 className="mt-2 font-display text-2xl font-semibold text-snow">Tell us what you need</h3>
      <p className="mt-2 text-sm text-slate">
        Pick a service (or Other). Product is optional. Send via form, WhatsApp, or email.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
            placeholder="Your name"
          />
          {touched && !name.trim() && <span className="text-xs text-red-400">Required</span>}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Phone or email
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
            placeholder="How we can reach you"
          />
          {touched && !contact.trim() && <span className="text-xs text-red-400">Required</span>}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Service
          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setProduct("");
            }}
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
          >
            {serviceNames.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Product / package <span className="font-normal text-slate">(optional)</span>
          {products.length > 0 ? (
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
            >
              <option value="">None / custom</option>
              {products.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Optional product name"
              className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
            />
          )}
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Preferred date (optional)
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-snow">
          Details (optional)
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none focus:border-orange"
            placeholder="Goals, timeline, budget range…"
          />
        </label>

        {status === "ok" && <p className="text-sm text-orange">Request saved. You can also message us below.</p>}
        {status === "err" && (
          <p className="text-sm text-red-400">Could not reach the server — still open WhatsApp or email.</p>
        )}

        <div className="display-flex items-center mt-2 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSend}
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink disabled:opacity-60"
          >
            <Send size={18} />
            Send request
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:border-[#25D366]/50"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:border-orange/50"
          >
            <Mail size={18} />
            Email
          </button>
        </div>
      </div>
    </div>
  );
}
