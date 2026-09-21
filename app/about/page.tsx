import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Senotrams",
  description: "Who we are and how we work.",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#f7fafc] to-white">
      <PageHero
        eyebrow=""
        title="Design and development with clarity"
        description="Senotrams helps businesses and innovators across Tanzania and East Africa turn ideas into working digital products."
      />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-snow sm:text-3xl">Our story</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate">
            <p>
              Senotrams started with a simple belief: good digital work should be clear, practical and within reach of businesses that want to grow.
            </p>
            <p>
              We combine software development, design, hosting and growth services under one roof so clients do not have to juggle multiple vendors. From the first conversation to launch and support, we keep the process transparent and the costs labeled.
            </p>
            <p>
              Alongside commercial work we partner with innovators who have strong ideas but limited technical knowledge or budget. In those cases we stay as a collaborator, helping shape and build the product while the founder keeps ownership.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line-light bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-snow">What we value</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                <li>Clear communication over jargon</li>
                <li>Labeled costs before work starts</li>
                <li>Working software and design that ships</li>
                <li>Long-term partnership where it makes sense</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line-light bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-snow">Where we work</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Based in Tanzania, serving clients across East Africa. Remote collaboration is standard; on-site support is available for selected projects.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/team" className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink">
              Meet the team
            </Link>
            <Link href="/contact" className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-snow">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
