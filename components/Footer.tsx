import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { subsidiaries } from "@/data/subsidiaries";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-lg font-bold">
              SENOTRAMS
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              One group, six subsidiaries — software, digital services, marketing,
              data & AI, security, and IT infrastructure.
            </p>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="eyebrow text-white/50">Subsidiaries</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {subsidiaries.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.website}
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
          © {new Date().getFullYear()} SENOTRAMS Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
