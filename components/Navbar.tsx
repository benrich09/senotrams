"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, contactItem } from "@/data/nav";

type ServiceType = "support" | "collaboration" | "partner" | "innovator" | "project" | "hosting" | "design" | "marketing" | "other" | null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setGetStartedOpen(false);
      }
    };
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const resetGetStarted = () => {
    setStep(1);
    setServiceType(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      budget: "",
      timeline: "",
    });
    setSubmitted(false);
  };

  const closeGetStarted = () => {
    setGetStartedOpen(false);
    resetGetStarted();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API / email service
    console.log({ serviceType, ...formData });
    setSubmitted(true);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-5 sm:py-2.5 ${
            scrolled
              ? "bg-white/95 shadow-lg shadow-black/5 border border-line-light backdrop-blur-md"
              : "bg-white/10 border border-white/15 backdrop-blur-md"
          }`}
        >
          {/* Logo + name — no box, clear on all backgrounds */}
          <Link
            href="/home"
            className="inline-flex shrink-0 flex-col ml-5 items-center gap-0.3 leading-none"
          >
            <img
              src="/images/logo.png"
              alt="Senotrams"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
            />
            <span
              className={`font-display text-[11px] font-bold tracking-wide sm:text-xs ${
                scrolled ? "text-snow" : "text-white drop-shadow-sm"
              }`}
            >
              Senotrams
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate hover:bg-paper-2 hover:text-snow"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact on its own visual group */}
            <Link
              href={contactItem.href}
              className={`ml-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate hover:bg-paper-2 hover:text-snow"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {contactItem.label}
            </Link>

            {/* Get Started */}
            <button
              type="button"
              onClick={() => setGetStartedOpen(true)}
              className="ml-2 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-ink transition hover:shadow-[0_0_20px_rgba(0,196,184,0.4)]"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`rounded-full p-2 md:hidden ${
              scrolled ? "text-snow" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-line-light bg-white p-4 shadow-xl md:hidden">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-snow hover:bg-paper-2"
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact on its own line */}
              <Link
                href={contactItem.href}
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-medium text-snow hover:bg-paper-2"
              >
                {contactItem.label}
              </Link>

              {/* Get Started on its own line */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setGetStartedOpen(true);
                }}
                className="mt-2 block w-full rounded-full bg-orange px-4 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Get Started modal */}
      {getStartedOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeGetStarted}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-line-light bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center py-6">
                <h3 className="font-display text-xl font-bold text-snow mb-2">
                  Thank you!
                </h3>
                <p className="text-slate text-sm mb-6">
                  We received your request and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeGetStarted}
                  className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-lg font-bold text-snow">
                    Get Started
                  </h3>
                  <button
                    type="button"
                    onClick={closeGetStarted}
                    className="rounded-full p-1.5 text-slate hover:bg-paper-2"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-5 flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 rounded-full ${
                        step >= s ? "bg-orange" : "bg-paper-2"
                      }`}
                    />
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Support or Collaboration */}
                  {step === 1 && (
                    <div className="space-y-3">
                      <p className="text-sm text-slate">
                        What can we help you with?
                      </p>
                      <div className="grid max-h-[50vh] gap-2 overflow-y-auto pr-1">
                        {[
                          { id: "support", title: "Support", desc: "Maintenance, fixes, troubleshooting" },
                          { id: "collaboration", title: "Collaboration", desc: "Long-term tech partnership" },
                          { id: "partner", title: "Business partner", desc: "Strategic or commercial partnership" },
                          { id: "innovator", title: "Innovator program", desc: "Idea + limited budget or skills" },
                          { id: "project", title: "New project", desc: "Web, mobile app or full product build" },
                          { id: "hosting", title: "Hosting & domains", desc: "VPS, domains, cloud setup" },
                          { id: "design", title: "Design & animation", desc: "Graphics, branding, motion" },
                          { id: "marketing", title: "Marketing & content", desc: "Digital campaigns and content" },
                          { id: "other", title: "Something else", desc: "Tell us what you need" },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setServiceType(opt.id as ServiceType);
                              setStep(2);
                            }}
                            className={`rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${
                              serviceType === opt.id
                                ? "border-orange bg-orange/10 text-snow"
                                : "border-line-light text-snow hover:border-orange/50 hover:bg-paper-2"
                            }`}
                          >
                            <span className="block font-semibold">{opt.title}</span>
                            <span className="mt-0.5 block text-xs text-slate">{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <p className="text-sm text-slate">
                        Tell us a bit about your request
                        {serviceType ? ` (${serviceType})` : ""}.
                      </p>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          Your name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((d) => ({ ...d, name: e.target.value }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              email: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              company: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange"
                          placeholder="Optional"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          {serviceType === "support"
                            ? "What do you need help with? *"
                            : "Describe the project or opportunity *"}
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              message: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange resize-none"
                          placeholder="Describe what you need from Senotrams..."
                        />
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 rounded-full border border-line-light px-4 py-2.5 text-sm font-medium text-snow hover:bg-paper-2"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          disabled={
                            !formData.name ||
                            !formData.email ||
                            !formData.message
                          }
                          className="flex-1 rounded-full bg-orange px-4 py-2.5 text-sm font-semibold text-ink disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Extra + Submit */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <p className="text-sm text-slate">
                        A few more details (optional)
                      </p>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          Budget range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              budget: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="<5k">Under $5k</option>
                          <option value="5k-20k">$5k – $20k</option>
                          <option value="20k-50k">$20k – $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate mb-1">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) =>
                            setFormData((d) => ({
                              ...d,
                              timeline: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-line-light bg-paper-2 px-3 py-2.5 text-sm text-snow outline-none focus:border-orange"
                        >
                          <option value="">Flexible</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3months">1–3 months</option>
                          <option value="3-6months">3–6 months</option>
                          <option value="6months+">6+ months</option>
                        </select>
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 rounded-full border border-line-light px-4 py-2.5 text-sm font-medium text-snow hover:bg-paper-2"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 rounded-full bg-orange px-4 py-2.5 text-sm font-semibold text-ink hover:shadow-[0_0_20px_rgba(0,196,184,0.4)]"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}