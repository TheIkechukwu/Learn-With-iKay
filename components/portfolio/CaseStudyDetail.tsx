import { FiTarget, FiCompass } from "react-icons/fi";
import type { CaseStudy } from "@/types";

const gradients: Record<string, string> = {
  "Cohort Capstone": "from-primary-container to-surface-tint",
  "Private 1-on-1": "from-primary to-primary-container",
  "Corporate Training": "from-primary to-primary-container",
  Mentorship: "from-primary to-primary-container",
};

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const gradient = gradients[study.category] ?? "from-primary-container to-surface-tint";

  return (
    <div className="overflow-hidden rounded-2xl border border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]">
      <div className={`relative h-40 bg-gradient-to-br ${gradient} md:h-52`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute left-6 top-6 rounded bg-tertiary-fixed px-3 py-1 font-mono text-[11px] text-primary">
          {study.category}
        </div>
      </div>

      <div className="p-7 md:p-10">
        <h3 className="font-display text-[24px] font-bold leading-tight tracking-[-0.015em] text-primary md:text-[28px]">
          {study.title}
        </h3>
        <p className="mt-2 font-mono text-[11.5px] tracking-[0.08em] text-on-surface-variant">
          {study.client} &middot; {study.program}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-primary">
              <FiTarget size={16} className="text-surface-tint" /> The challenge
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
              {study.challenge}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-primary">
              <FiCompass size={16} className="text-surface-tint" /> The approach
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
              {study.approach}
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-4 rounded-xl bg-surface-container-low p-6">
          {study.results.map((r) => (
            <div key={r.label} className="md:text-center">
              <div className="font-display text-base font-bold text-primary md:text-base">
                {r.value}
              </div>
              <div className="mt-1 text-[11.5px] leading-tight text-on-surface-variant">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tools.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface-container px-3 py-1.5 font-mono text-[11px] text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
