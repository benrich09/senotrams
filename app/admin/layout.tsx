"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  UserRoundSearch,
  Inbox,
  MessageSquareQuote,
  ExternalLink,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { clearToken } from "@/lib/api";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/careers", label: "Careers", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: UserRoundSearch },
  { href: "/admin/orders", label: "Orders", icon: Inbox },
  { href: "/admin/innovators", label: "Innovators", icon: Lightbulb },
  { href: "/admin/suggestions", label: "Suggestions", icon: MessageSquareQuote },
];

const SITE_NAME = "Senotrams";

function isActive(path: string, href: string, exact?: boolean) {
  if (exact) return path === href;
  return path === href || path.startsWith(href + "/");
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function logout() {
    clearToken();
    router.replace("/login");
  }

  const pageTitle = links.find((l) => isActive(path, l.href, l.exact))?.label || "Dashboard";

  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-white">
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(100%,18rem)] flex-col border-r border-white/10 bg-[#0e141c] transition-transform duration-200 ease-out lg:static lg:w-64 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-white/10 px-4 sm:h-16 sm:px-5">
          <Link href="/admin" className="flex items-center gap-2" onClick={() => setOpen(false)} aria-label={SITE_NAME}>
           <h1 className="text-2xl font-bold">
            Admin Senotrams
          </h1>
           
          </Link>
          <button type="button" className="rounded-lg p-2 text-white/60 hover:bg-white/5 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">Menu</p>
          {links.map((l) => {
            const active = isActive(path, l.href, l.exact);
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active ? "bg-orange/15 text-orange" : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} className={active ? "text-orange" : "text-white/40 group-hover:text-white/70"} />
                <span className="flex-1">{l.label}</span>
                {active && <ChevronRight size={14} className="text-orange/70" />}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-1 border-t border-white/10 p-3">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/55 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>
            <ExternalLink size={18} className="text-white/35" />
            View site
          </Link>
          <button type="button" onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/55 hover:bg-red-500/10 hover:text-red-300">
            <LogOut size={18} className="text-white/35" />
            Log out
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-white/10 bg-[#0b0f14]/95 px-3 backdrop-blur sm:h-16 sm:px-6 md:px-8">
          <button type="button" className="inline-flex rounded-lg border border-white/10 p-2 text-white/80 hover:bg-white/5 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Menu size={20} />
          </button>
          <p className="truncate text-sm font-semibold text-white sm:text-base">{pageTitle}</p>
        </header>
        <main className="flex-1 overflow-x-hidden px-3 py-5 sm:px-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
