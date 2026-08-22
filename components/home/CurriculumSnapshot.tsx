"use client";

import { useState } from "react";
import { CURRICULUM } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CurriculumSnapshot() {
  const [active, setActive] = useState(CURRICULUM[0].key);
  const activeModule = CURRICULUM.find((m) => m.key === active) ?? CURRICULUM[0];

  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-20 md:px-10 md:pt-26">
      <div className="bg-grid-dark relative overflow-hidden rounded-[30px] bg-primary-container px-6 py-10 text-white md:px-14 md:py-14">
        <div className="relative">
          <div className="font-mono text-[11.5px] tracking-[0.2em] text-tertiary-fixed">
            03 · CURRICULUM SNAPSHOT
          </div>
          <h2 className="mt-4 font-display text-[30px] font-bold tracking-[-0.03em] md:text-[42px]">
            The 16-week analyst pipeline.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {CURRICULUM.map((m) => (
              <button
                key={m.key}
                onClick={() => setActive(m.key)}
                className={cn(
                  "rounded-full border border-white/20 px-4.5 py-2.5 text-sm font-medium transition-colors",
                  active === m.key ? "bg-tertiary-fixed text-primary" : "bg-transparent text-white"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] tracking-[0.12em] text-tertiary-fixed">
                {activeModule.weeks}
              </div>
              <div className="mt-3 font-display text-[28px] font-bold tracking-[-0.02em] md:text-[30px]">
                {activeModule.title}
              </div>
              <div className="mt-3.5 text-base leading-relaxed text-white/74">
                {activeModule.detail}
              </div>
              <div className="mt-5.5 flex flex-wrap gap-2">
                {activeModule.tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-md bg-white/8 px-2.5 py-1.5 font-mono text-[11.5px] text-white/86"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/14 bg-white/6 px-7 py-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-tertiary-fixed">
                YOU WILL BE ABLE TO
              </div>
              <div className="mt-5 grid gap-3.5">
                {activeModule.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 text-[15px] leading-snug text-white/86">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-tertiary-fixed" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
