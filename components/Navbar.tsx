"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, contactItem } from "@/data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <div className="nav-float mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 sm:px-5 sm:py-2.5">
        <Link
          href="/"
          className="shrink-0 rounded-full px-1"
          onClick={() => setOpen(false)}
          aria-label="Senotrams home"
        >
          <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            Senotrams
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={contactItem.href}
            className="rounded-full bg-orange px-4 py-2 text-sm font-semibold text-ink transition-shadow hover:shadow-[0_0_20px_rgba(20,216,188,0.35)]"
          >
            {contactItem.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-full p-2 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0e141c]/95 p-4 shadow-2xl backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactItem.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-orange px-4 py-2.5 text-center text-sm font-semibold text-ink"
            >
              {contactItem.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}