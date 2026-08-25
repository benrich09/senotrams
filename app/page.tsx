import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Users, Sparkles } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* Centered hero */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(20,216,188,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.12),transparent_45%)]" />
        <Hero3D />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.12]" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center md:px-10">
         

          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            SENOTRAMS
          </h1>
          <p className="eyebrow mt-4 text-orange">
            2026&nbsp;&nbsp;|&nbsp;&nbsp;Innovate&nbsp;&nbsp;|&nbsp;&nbsp;Build&nbsp;&nbsp;|&nbsp;&nbsp;Scale
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Web &amp; mobile apps, hosting, design, animation, data, digital
            marketing and content practical digital services for businesses
            that want to move faster online.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-ink transition-shadow hover:shadow-[0_0_30px_rgba(20,216,188,0.4)]"
            >
              Explore services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-blue">What we offer</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl md:text-5xl">
              Services built for clarity
            </h2>
            <p className="mt-4 text-base text-slate">
              Each service has a simple path from brief to delivery. Pick what you need — or combine them.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovators */}
      <section id="innovators" className="scroll-mt-24 bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-orange">Community</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
                Connect with innovators
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Builders, designers and founders are welcome. Share an idea, find collaborators,
                or explore how Senotrams can support your next product.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Lightbulb, t: "Share product ideas", d: "Early concepts and prototypes" },
                  { icon: Users, t: "Meet practitioners", d: "Dev, design and growth people" },
                  { icon: Sparkles, t: "Ship together", d: "Partner on real client work" },
                ].map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <x.icon size={16} />
                    </span>
                    <div>
                      <p className="font-semibold text-snow">{x.t}</p>
                      <p className="text-sm text-slate">{x.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink"
              >
                Send a suggestion
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-[2rem] border border-line-light bg-paper p-8 md:p-10">
              <p className="font-display text-xl font-bold text-snow">How to plug in</p>
              <ol className="mt-6 space-y-4 text-sm text-slate">
                <li className="flex gap-3"><span className="font-mono text-orange">01</span> Tell us what you are building or learning</li>
                <li className="flex gap-3"><span className="font-mono text-orange">02</span> We route you to the right service or conversation</li>
                <li className="flex gap-3"><span className="font-mono text-orange">03</span> Stay in the loop for workshops and collabs</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink px-6 py-20 text-white md:px-10 md:py-24">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready when you are</h2>
          <p className="mt-4 max-w-xl text-white/65">
            Request a service, apply to a role, or leave a suggestion — we read every message.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink">
              Browse services
            </Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              Share feedback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
