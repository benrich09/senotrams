import type { Metadata } from "next";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { subsidiaries } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Contact | Senotrams Group",
  description:
    "Reach the Senotrams Group office, or a specific subsidiary — Avionics, SATI, KIDAINO, COGNITA, SENTRYX or NEXORA.",
};

const contactMethods = [
  { icon: FaWhatsapp, label: "WhatsApp", value: "Add your number", href: "https://wa.me/000000000000" },
  { icon: FaPhoneAlt, label: "Call / SMS", value: "Add your number", href: "tel:+000000000000" },
  { icon: FaEnvelope, label: "Email", value: "hello@senotrams.example", href: "mailto:hello@senotrams.example" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Add your address", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="We're here"
        title="Reach out."
        description="Message us directly, or tell us which subsidiary your project belongs to."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <form className="flex flex-col gap-5 rounded-3xl border border-line bg-panel p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-snow">
                Phone or email
                <input
                  type="text"
                  name="contact"
                  placeholder="How can we reach you?"
                  className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Which subsidiary is this for?
              <select
                name="subsidiary"
                className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
              >
                <option>Not sure — route it for me</option>
                {subsidiaries.map((s) => (
                  <option key={s.slug}>{s.name} — {s.tagline}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-snow">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="resize-none rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-snow outline-none transition-colors focus:border-orange"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Send message
            </button>
          </form>

          {/* Contact details */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactMethods.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-orange/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <c.icon size={17} />
                </span>
                <div>
                  <p className="eyebrow text-slate">{c.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-snow">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-dashed border-line-light bg-paper-2 p-5">
              <p className="eyebrow text-slate">Note</p>
              <p className="mt-2 text-sm text-slate">
                Prefer to book a specific service directly? Every subsidiary
                page has its own booking form that goes straight to WhatsApp
                or email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
