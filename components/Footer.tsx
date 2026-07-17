import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { subsidiaries } from "@/data/subsidiaries";
import { navItems, contactItem } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-10 pt-20 text-white md:px-10">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange to-blue text-xs font-bold text-white">
                S
              </span>
              <span className="font-display text-lg font-bold">SENOTRAMS</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              One core, six subsidiaries — software & AI, digital monitoring & gaming,
              marketing & print, data & AI, security & auditing, and IT infrastructure.
              Reversed from &ldquo;Smartones,&rdquo; built from an idea.
            </p>
            <div className="mt-5 flex gap-3">
              {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-orange/50 hover:text-orange"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="eyebrow text-white/50">Subsidiaries</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {subsidiaries.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/subsidiaries/${s.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-orange"
                  >
                    {s.name} — {s.tagline}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="eyebrow text-white/50">Navigate</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-muted transition-colors hover:text-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
              {navItems
                .find((i) => i.dropdown)
                ?.dropdown?.map((sub) => (
                  <li key={sub.href}>
                    <Link href={sub.href} className="text-sm text-ink-muted transition-colors hover:text-orange">
                      {sub.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href={contactItem.href} className="text-sm text-ink-muted transition-colors hover:text-orange">
                  {contactItem.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-white/50">Get in touch</h4>
            <div className="mt-5 flex flex-col gap-3">
              <a href="https://wa.me/000000000000" className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-orange">
                <FaWhatsapp size={16} /> WhatsApp us
              </a>
              <a href="tel:+000000000000" className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-orange">
                <FaPhoneAlt size={14} /> Call / SMS
              </a>
              <a href="mailto:hello@senotrams.example" className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-orange">
                <FaEnvelope size={14} /> hello@senotrams.example
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Senotrams Group. All rights reserved.</p>
          <p>Avionics · SATI · KIDAINO · COGNITA · SENTRYX · NEXORA</p>
        </div>
      </div>
    </footer>
  );
}
