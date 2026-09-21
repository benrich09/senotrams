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
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import IntroSplash from "@/components/IntroSplash";
import { services } from "@/data/services";

const PM_STEPS = [
  {
    step: "01",
    title: "Discover",
    text: "We clarify goals, users, scope and success metrics so the project starts with a shared plan.",
    icon: Search,
    tools: ["Workshops", "Interviews", "Miro"],
  },
  {
    step: "02",
    title: "Plan & Design",
    text: "Timelines, milestones, wireframes and creative direction agreed before heavy build work begins.",
    icon: PenLine,
    tools: ["Figma", "Roadmaps", "Prototypes"],
  },
  {
    step: "03",
    title: "Build",
    text: "Work in short cycles with visible progress, demos and feedback so nothing ships in the dark.",
    icon: Code2,
    tools: ["Next.js", "Flutter", "CI/CD"],
  },
  {
    step: "04",
    title: "Launch",
    text: "Deploy, test, train your team and hand over documentation so you can run day to day.",
    icon: Rocket,
    tools: ["Vercel", "Render", "Monitoring"],
  },
  {
    step: "05",
    title: "Support & Grow",
    text: "Fixes, improvements and new features as your business needs change.",
    icon: LifeBuoy,
    tools: ["Analytics", "Support desk", "Roadmap"],
  },
];

const IMPACT = [
  { num: "2", label: "Projects delivered" },
  { num: "2", label: "Happy clients" },
  { num: "5", label: "Core service lines" },
  { num: "100%", label: "Transparent costs" },
];

const INDUSTRIES = [
  {
    name: "FinTech & Banking",
    image: "/images/industry-fintech.jpeg",
    benefit: "Secure digital payments, scoring and banking tools that work for local markets.",
  },
  {
    name: "Agriculture",
    image: "/images/industry-agriculture.jpeg",
    benefit: "Farm data, supply tracking and advisory tools that raise yields and cut waste.",
  },
  {
    name: "Healthcare",
    image: "/images/industry-healthcare.jpeg",
    benefit: "Patient apps, clinic systems and telehealth that keep care continuous.",
  },
  {
    name: "Education",
    image: "/images/industry-education.jpeg",
    benefit: "E-learning platforms and school tools that reach students anywhere.",
  },
  {
    name: "Logistics",
    image: "/images/industry-logistics.jpeg",
    benefit: "Fleet, inventory and route systems that move goods faster across the region.",
  },
  {
    name: "Government",
    image: "/images/industry-government.jpeg",
    benefit: "Transparent digital services and data systems for public institutions.",
  },
  {
    name: "Retail & E-commerce",
    image: "/images/industry-retail.jpeg",
    benefit: "Online shops, orders and payments that turn browsers into buyers.",
  },
  {
    name: "Media & Entertainment",
    image: "/images/industry-media.jpeg",
    benefit: "Streaming, content and studio tech that scale audiences and revenue.",
  },
];

export default function Home() {
  return (
    <>
      <IntroSplash />

      {/* Hero — blurred hero.jpeg, no card overlay */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-white">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/hero.jpeg)",
            filter: "blur(6px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/75 via-[#0a1f3d]/70 to-[#061428]/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center md:px-10">
         
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Strategic Digital
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            We design, build and grow digital products for businesses and innovators.
            Clear process. Labeled costs. Real partnership.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-ink transition hover:shadow-[0_0_30px_rgba(0,196,184,0.45)]"
            >
              Explore services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/innovators"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Partner as innovator
            </Link>
          </div>
        </div>
      </section>

      {/* Impact bar */}
      <section className="border-b border-line-light bg-gradient-to-r from-white via-[#f0f7ff] to-white px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {IMPACT.map((i) => (
            <div key={i.label} className="text-center">
              <p className="font-display text-3xl font-bold text-orange sm:text-4xl">{i.num}</p>
              <p className="mt-1 text-sm text-slate">{i.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services with pictures */}
      <section className="bg-gradient-to-b from-[#f7fafc] to-[#eef4f9] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-snow sm:text-4xl md:text-5xl">
              Services built for clarity
            </h2>
            <p className="mt-4 text-base text-slate">
              Software, design, hosting, growth and content. Each with a simple path from brief to delivery.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline">
              View all services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process — vertical timeline */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-snow sm:text-4xl">
              A clear path from idea to impact
            </h2>
            <p className="mt-4 text-base text-slate">
              Transparent steps, tools at every stage, and regular demos so you always know the status.
            </p>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-line-light md:left-6" />
            <ol className="space-y-8">
              {PM_STEPS.map((s) => (
                <li key={s.step} className="relative flex gap-5 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white text-orange shadow-sm md:h-12 md:w-12">
                    <s.icon size={18} />
                  </div>
                  <div className="flex-1 rounded-2xl border border-line-light bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold text-orange">{s.step}</span>
                      <h3 className="font-display text-lg font-bold text-snow">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.tools.map((t) => (
                        <span key={t} className="rounded-full border border-line-light bg-paper-2 px-2 py-0.5 text-[11px] font-medium text-slate">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      

      {/* Industries */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-snow sm:text-3xl">
              Built for African markets
            </h2>
            <p className="mt-3 text-sm text-slate sm:text-base">
              Practical digital solutions tailored to the sectors that drive growth across the continent.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <article
                key={ind.name}
                className="group overflow-hidden rounded-2xl border border-line-light bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-36 overflow-hidden bg-paper-2">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-snow">{ind.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{ind.benefit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Innovators */}
      <section className="bg-gradient-to-b from-[#eef4f9] to-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-snow sm:text-4xl">
                Have an idea but no tech skills or budget?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Senotrams partners with innovators who have strong ideas but limited technical knowledge or cannot yet afford full development rates. We remain your collaborator, helping turn the idea into a real, innovative product while you keep ownership.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Lightbulb, t: "Bring the idea", d: "You focus on the vision and market need" },
                  { icon: Users, t: "We supply the tech", d: "Design, build and launch as your partner" },
                  { icon: Sparkles, t: "Share the journey", d: "Flexible collaboration, not just a one-off job" },
                ].map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-soft text-orange">
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
                Apply as innovator
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-[2rem] border border-line-light bg-white p-8 shadow-sm md:p-10">
              <p className="font-display text-xl font-bold text-snow">How partnership works</p>
              <ol className="mt-6 space-y-5 text-sm text-slate">
                <li className="flex gap-3">
                  <span className="font-mono font-semibold text-orange">01</span>
                  Share your idea and constraints (budget, skills, timeline)
                </li>
                <li className="flex gap-3">
                  <span className="font-mono font-semibold text-orange">02</span>
                  We assess fit and propose a collaboration model
                </li>
                <li className="flex gap-3">
                  <span className="font-mono font-semibold text-orange">03</span>
                  Build together. Senotrams as technical partner, you as founder
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
