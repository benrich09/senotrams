import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Sparkles,
  Search,
  PenLine,
  Code2,
  Rocket,
  LifeBuoy,
  Quote,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const PM_STEPS = [
  {
    step: "01",
    title: "Discover",
    text: "We clarify goals, users, scope, and success metrics so the project starts with a shared plan.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan & design",
    text: "Timelines, milestones, wireframes or creative direction — agreed before heavy build work begins.",
    icon: PenLine,
  },
  {
    step: "03",
    title: "Build",
    text: "Work in short cycles with visible progress, demos, and feedback so nothing ships in the dark.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    text: "Deploy, test, train your team, and hand over documentation so you can run day to day.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Support & grow",
    text: "Fixes, improvements, and new features as your business needs change.",
    icon: LifeBuoy,
  },
];

const TOOLS = [
  {
    group: "Software",
    items: ["React / Next.js", "TypeScript / Node.js", "Golang / Go Fiber", "Flutter / React Native", "PostgreSQL", "Docker"],
  },
  {
    group: "Design & motion",
    items: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Premiere Pro"],
  },
  {
    group: "Hosting & ops",
    items: ["Vercel", "Render", "DNS & SSL", "VPS / Linux", "CI/CD", "Backups"],
  },
  {
    group: "Growth",
    items: ["Meta Ads", "Google Ads", "Analytics", "SEO basics", "Content calendars"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Senotrams took our idea from a rough brief to a working web app. Clear steps, regular updates, and no jargon.",
    name: "Client, Dar es Salaam",
    role: "Business owner",
    service: "Software Development",
  },
  {
    quote:
      "They handled our domain, hosting, and email setup quickly. We finally look professional online.",
    name: "Operations lead",
    role: "SME",
    service: "Hosting Services",
  },
  {
    quote:
      "The brand visuals and social content matched what we asked for. Fast turnaround and easy to work with.",
    name: "Marketing contact",
    role: "Growing brand",
    service: "Graphics & Content",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(20,216,188,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.1),transparent_45%)]" />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.1]" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center md:px-10">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Senotrams
          </h1>
          <p className="eyebrow mt-4 text-orange">
            2026&nbsp;&nbsp;|&nbsp;&nbsp;Innovate&nbsp;&nbsp;|&nbsp;&nbsp;Build&nbsp;&nbsp;|&nbsp;&nbsp;Scale
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Software development, hosting, design, animation, data analysis, digital marketing and
            content creation.
            <br />
            Practical digital services for businesses that want to move faster online.
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
              Each service has a simple path from brief to delivery. Explore one — or combine several.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Project management steps */}
      <section className="bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-orange">How we run work</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
              Steps in project management
            </h2>
            <p className="mt-4 text-base text-slate">
              A clear path from first conversation to launch — so you always know what happens next.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PM_STEPS.map((s) => (
              <article
                key={s.step}
                className="flex flex-col rounded-3xl border border-line-light bg-paper p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <s.icon size={18} />
                  </span>
                  <span className="font-mono text-xs text-orange">{s.step}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-snow">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & technologies */}
      <section className="bg-paper px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-blue">Stack</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
              Tools and technologies we use
            </h2>
            <p className="mt-4 text-base text-slate">
              Practical tools matched to the job — software, design, hosting, and growth.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLS.map((g) => (
              <div key={g.group} className="rounded-3xl border border-line-light bg-paper-2 p-6">
                <h3 className="font-display text-lg font-bold text-snow">{g.group}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-orange">Feedback</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
              What clients say about our services
            </h2>
            <p className="mt-4 text-base text-slate">
              Real outcomes from software, hosting, design, and content work.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.quote}
                className="flex h-full flex-col rounded-3xl border border-line-light bg-paper p-6 shadow-sm"
              >
                <Quote className="text-orange/80" size={22} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-line-light pt-4">
                  <p className="text-sm font-semibold text-snow">{t.name}</p>
                  <p className="text-xs text-slate">
                    {t.role} · {t.service}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Innovators */}
      <section className="bg-paper px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow text-orange">Community</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-snow sm:text-4xl">
                Connect with innovators
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Builders, designers and founders are welcome. Share an idea, find collaborators, or
                explore how Senotrams can support your next product.
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
                href="/innovators"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink"
              >
                Visit innovators
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-[2rem] border border-line-light bg-paper-2 p-8 md:p-10">
              <p className="font-display text-xl font-bold text-snow">How to plug in</p>
              <ol className="mt-6 space-y-4 text-sm text-slate">
                <li className="flex gap-3">
                  <span className="font-mono text-orange">01</span>
                  Tell us what you are building or learning
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-orange">02</span>
                  We route you to the right service or conversation
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-orange">03</span>
                  Stay in the loop for workshops and collabs
                </li>
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
            <Link
              href="/services"
              className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-ink"
            >
              Browse services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}