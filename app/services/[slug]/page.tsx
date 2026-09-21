import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import BookingForm from "@/components/BookingForm";
import DomainSearch from "@/components/DomainSearch";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Senotrams" };
  return { title: service.name, description: service.description };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const isOrange = service.accent === "orange";
  const accent = isOrange ? "text-orange" : "text-blue";
  const dot = isOrange ? "bg-orange" : "bg-blue";

  return (
    <div className="bg-gradient-to-b from-[#f7fafc] to-white">
      <section className="relative overflow-hidden border-b border-line-light px-6 py-24 text-white md:px-10 md:py-32">
        {service.image ? (
          <>
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})`, filter: "blur(4px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/80 via-[#0a1f3d]/75 to-[#061428]/90" />
          </>
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}
        <div className="relative z-10 mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={16} />
            All services
          </Link>
          <div className="mt-8 max-w-3xl">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">{service.name}</h1>
            <p className="mt-3 text-base text-white/75 sm:text-lg">{service.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-snow">How it works</h2>
            <ol className="mt-6 space-y-3">
              {service.howItWorks.map((step, i) => (
                <li key={step} className="flex gap-3 rounded-xl border border-line-light bg-paper-2 px-4 py-3 text-sm text-slate">
                  <span className={`font-mono text-xs ${accent}`}>{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {service.priceFrom && (
            <div className="rounded-2xl border border-orange/30 bg-gradient-to-br from-white to-[#eef9f7] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange">{service.priceLabel || "Starting price"}</p>
              <p className="mt-2 font-display text-2xl font-bold text-snow sm:text-3xl">{service.priceFrom}</p>
              <p className="mt-1 text-xs text-slate">Indicative in Tanzania Shilling. Final scope agreed in writing.</p>
              {service.priceItems && service.priceItems.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {service.priceItems.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div>
            <h2 className="font-display text-2xl font-bold text-snow">What is included</h2>
            <ul className="mt-6 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {service.offerings && service.offerings.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-snow">Capabilities</h2>
              <p className="mt-2 text-sm text-slate">What we deliver under this service.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.offerings.map((o) => (
                  <div key={o.title} className="rounded-2xl border border-line-light bg-paper-2 p-4">
                    <p className="font-semibold text-snow">{o.title}</p>
                    <p className="mt-1 text-sm text-slate">{o.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.platforms && service.platforms.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-snow">Products</h2>
              <p className="mt-2 text-sm text-slate">Ready platforms you can adopt or customise.</p>
              <div className="mt-6 space-y-3">
                {service.platforms.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-line-light bg-paper-2 p-4">
                    <p className="text-xs uppercase tracking-wide text-orange">{p.category}</p>
                    <p className="mt-1 font-semibold text-snow">{p.name}</p>
                    <p className="mt-1 text-sm text-slate">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.techStacks && service.techStacks.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-snow">Tech stacks</h2>
              <p className="mt-2 text-sm text-slate">Tools and platforms we use for this service.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.techStacks.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-light bg-paper-2 px-3 py-1.5 text-xs font-medium text-slate"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {service.showDomainSearch && (
            <div>
              <h2 className="font-display text-2xl font-bold text-snow">Domain availability</h2>
              <p className="mt-2 text-sm text-slate">
                Check whether a name looks free or already in use (public DNS). We confirm before registration.
              </p>
              <div className="mt-4">
                <DomainSearch />
              </div>
            </div>
          )}
        </div>

        {/* Request form */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-line-light pt-16">
          <h2 className="text-center font-display text-2xl font-bold text-snow">Request this service</h2>
          <p className="text-center mt-2 text-sm text-slate">{service.bookingNote}</p>
          <div className="mt-6">
            <BookingForm defaultService={service.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
