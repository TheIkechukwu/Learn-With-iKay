"use client";

import { useState, useMemo } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/data";

const programs = ["All", ...Array.from(new Set(TESTIMONIALS.map((t) => t.program)))];

export function TestimonialsGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.program === filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {programs.map((p) => (
          <button
            key={p}
            onClick={() => setFilter(p)}
            className={cn(
              "rounded-full border border-surface-variant px-5 py-2 font-display text-[14px] font-medium transition-colors",
              filter === p
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-primary hover:bg-surface-variant"
            )}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div
            key={t.name}
            className="hover-lift flex flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7.5 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-primary-fixed-dim font-display text-[15px] font-bold text-primary">
                {t.initials}
              </div>
              <div>
                <div className="font-display text-[15.5px] font-semibold text-primary">
                  {t.name}
                </div>
                <div className="mt-0.5 text-[13px] text-outline">{t.role}</div>
              </div>
            </div>
            <div className="mt-5 flex-1 text-[15px] leading-relaxed text-on-surface-variant">
              &ldquo;{t.quote}&rdquo;
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
}
