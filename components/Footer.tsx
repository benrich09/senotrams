import Link from "next/link";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { services } from "@/data/services";
import { CONTACT } from "@/data/contact";

const SOCIAL = [
  { href: CONTACT.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn, color: "bg-[#0A66C2] border-[#0A66C2] text-white hover:opacity-90" },
  { href: CONTACT.social.instagram, label: "Instagram", icon: FaInstagram, color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] border-transparent text-white hover:opacity-90" },
  { href: CONTACT.social.twitter, label: "X / Twitter", icon: FaXTwitter, color: "bg-black border-black text-white hover:opacity-90" },
  { href: CONTACT.social.facebook, label: "Facebook", icon: FaFacebookF, color: "bg-[#1877F2] border-[#1877F2] text-white hover:opacity-90" },
  { href: CONTACT.social.tiktok, label: "TikTok", icon: FaTiktok, color: "bg-black border-black text-white hover:opacity-90" },
  ...(CONTACT.social.youtube
    ? [{ href: CONTACT.social.youtube, label: "YouTube", icon: FaYoutube, color: "bg-[#FF0000] border-[#FF0000] text-white hover:opacity-90" }]
    : []),
].filter((s) => Boolean(s.href));

const mid = Math.ceil(services.length / 2);
const leftServices = services.slice(0, mid);
const rightServices = services.slice(mid);

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + socials */}
          <div>
            <Link href="/" className="inline-flex flex-col items-start gap-2">
              <img
                src="/images/logo.png"
                alt="Senotrams"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
              />
              <span className="font-display text-base font-bold tracking-wide text-white sm:text-lg">
                Senotrams
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Software development, hosting, design, marketing, data and content 
              digital services for businesses in Tanzania.
            </p>

            {SOCIAL.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${s.color}`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow text-white/50">Services</h4>

            <ul className="mt-4 flex flex-col gap-2.5 md:hidden">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-orange"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 hidden gap-8 md:grid md:grid-cols-2">
              <ul className="flex flex-col gap-2.5">
                {leftServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-white/70 transition-colors hover:text-orange"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2.5">
                {rightServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-white/70 transition-colors hover:text-orange"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-white/50">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              {CONTACT.phones.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="flex items-center gap-2.5 transition-colors hover:text-orange"
                  >
                    <FaPhone size={13} className="shrink-0 text-orange" />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-orange"
                >
                  <FaWhatsapp size={15} className="shrink-0 text-orange" />
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-orange"
                >
                  <FaEnvelope size={13} className="shrink-0 text-orange" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Senotrams. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
