"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, contactItem } from "@/data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <div className="nav-float mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange to-blue text-xs font-bold text-white">
            S
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            SENOTRAMS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen((v) => !v);
                  }}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  aria-expanded={dropdownOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <span className="block text-sm font-semibold text-white/90 group-hover:text-orange">
                          {sub.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-white/45">
                          {sub.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA — last button, Contact */}
        <Link
          href={contactItem.href}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 md:inline-flex"
        >
          {contactItem.label}
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-float mx-auto mt-2 max-h-[80vh] max-w-6xl overflow-y-auto rounded-3xl px-6 py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-white/5 py-2 last:border-none">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-base font-semibold text-white"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-3 mt-1 flex flex-col gap-2.5">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="py-0.5"
                      >
                        <span className="block text-sm font-medium text-white/75 hover:text-orange">
                          {sub.label}
                        </span>
                        <span className="block text-xs text-white/40">{sub.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={contactItem.href}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white"
            >
              {contactItem.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
