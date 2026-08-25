import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import BookingForm from "@/components/BookingForm";
import DomainSearch from "@/components/DomainSearch";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: `${service.name} | Senotrams`, description: service.description };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const isOrange = service.accent === "orange";

  return (
    <div className="bg-paper">
      <section className="border-b border-line-light bg-ink px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={16} />
            All services
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-orange">{service.tagline}</p>
            <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{service.name}</h1>
            <p className="mt-4 text-lg text-white/70">{service.longDescription}</p>
            {service.externalUrl && (
              <Link
                href={`/services/${service.slug}#explore`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-orange hover:text-orange"
              >
                Explore this offering
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-snow">How it works</h2>
              <ol className="mt-6 space-y-3">
                {service.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-3 rounded-xl border border-line-light bg-paper-2 px-4 py-3 text-sm text-slate">
                    <span className={`font-mono text-xs ${isOrange ? "text-orange" : "text-blue"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-snow">What is included</h2>
              <ul className="mt-6 space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isOrange ? "bg-orange" : "bg-blue"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {service.showDomainSearch && (
              <div>
                <h2 className="font-display text-2xl font-bold text-snow">Check a domain</h2>
                <p className="mt-2 text-sm text-slate">Search availability — we will help you register and host it.</p>
                <div className="mt-4">
                  <DomainSearch />
                </div>
              </div>
            )}

            {service.exploreDetails && service.exploreDetails.length > 0 && (
              <div id="explore" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold text-snow">Explore in depth</h2>
                <p className="mt-2 text-sm text-slate">
                  Highlights from our product studio. Open the full site when you are ready.
                </p>
                <div className="mt-6 space-y-4">
                  {service.exploreDetails.map((d) => (
                    <div key={d.title} className="rounded-2xl border border-line-light bg-paper-2 p-5">
                      <p className="font-semibold text-snow">{d.title}</p>
                      <p className="mt-2 text-sm text-slate">{d.body}</p>
                    </div>
                  ))}
                </div>
                {service.externalUrl && (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink"
                  >
                    {service.externalLabel || "Open external site"}
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-snow">Request this service</h2>
            <p className="mt-2 text-sm text-slate">{service.bookingNote}</p>
            <div className="mt-6">
              <BookingForm defaultService={service.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
