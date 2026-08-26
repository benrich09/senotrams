import Link from "next/link";
import {
  FaWhatsapp,
  FaPhone,          // ← changed from FaPhoneAlt
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
  { href: CONTACT.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: CONTACT.social.instagram, label: "Instagram", icon: FaInstagram },
  { href: CONTACT.social.twitter, label: "X / Twitter", icon: FaXTwitter },
  { href: CONTACT.social.facebook, label: "Facebook", icon: FaFacebookF },
  { href: CONTACT.social.tiktok, label: "TikTok", icon: FaTiktok },
  ...(CONTACT.social.youtube
    ? [{ href: CONTACT.social.youtube, label: "YouTube", icon: FaYoutube }]
    : []),
].filter((s) => Boolean(s.href));

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + socials */}
          <div>
            <Link href="/" className="font-display text-lg font-bold">
              Senotrams
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              Software development, hosting, design, marketing, data and content
              — digital services for businesses in Tanzania.
            </p>

            {/* Social icons under Senotrams */}
            {SOCIAL.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist transition-colors hover:border-orange hover:text-orange"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow text-white/50">Services</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-mist transition-colors hover:text-orange"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-white/50">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-mist">
              {CONTACT.phones.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="flex items-center gap-2 transition-colors hover:text-orange"
                  >
                    <FaPhone size={12} className="text-orange" /> {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-orange"
                >
                  <FaWhatsapp size={13} className="text-orange" /> WhatsApp{" "}
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-orange"
                >
                  <FaEnvelope size={12} className="text-orange" /> {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-mist">
          © {new Date().getFullYear()} Senotrams. All rights reserved.
        </div>
      </div>
    </footer>
  );
}