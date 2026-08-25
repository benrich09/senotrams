import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-lg font-bold">
              SENOTRAMS
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              Web &amp; mobile apps, hosting, design, marketing, data and content
              — digital services for businesses in Tanzania.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-white/50">Services</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
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

          <div>
            <h4 className="eyebrow text-white/50">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-mist">
              <li className="flex items-center gap-2">
                <FaPhoneAlt size={12} className="text-orange" /> +255 700 000 000
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp size={13} className="text-orange" /> WhatsApp us
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={12} className="text-orange" /> info@senotrams.co.tz
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-mist">
          © {new Date().getFullYear()} SENOTRAMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
