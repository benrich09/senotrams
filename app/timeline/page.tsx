"use client";

import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import { timeline } from "@/data/timeline";

export default function TimelinePage() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    setVisible(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= timeline.length) clearInterval(id);
    }, 450);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white">
      <PageHero
        eyebrow=""
        title="Our path so far"
        description="Key moments that shaped Senotrams."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange/40 via-blue/30 to-transparent md:left-1/2 md:-translate-x-px" />

            <ol className="space-y-10">
              {timeline.map((entry, i) => {
                const left = i % 2 === 0;
                const show = i < visible;
                return (
                  <li
                    key={i}
                    className={`relative flex flex-col transition-all duration-700 ease-out md:flex-row ${
                      left ? "md:justify-start" : "md:justify-end"
                    } ${
                      show
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <span className="absolute left-4 z-10 mt-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-orange shadow ring-4 ring-orange/20 md:left-1/2" />

                    <article
                      className={`ml-10 w-full rounded-2xl border border-line-light bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange/30 hover:shadow-md md:ml-0 md:w-[calc(50%-2rem)] ${
                        left ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                      }`}
                    >
                      <span className="font-mono text-xs font-semibold text-orange">
                        {entry.year}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-snow">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {entry.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
