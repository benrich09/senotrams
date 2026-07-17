import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-white">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="font-display text-8xl font-bold leading-none text-gradient sm:text-9xl">
          404
        </span>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="max-w-md text-white/50">
          This page doesn&rsquo;t exist or has moved. Let&rsquo;s get you back
          to the group.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
        >
          Back to home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
