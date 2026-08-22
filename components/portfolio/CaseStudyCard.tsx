import type { CaseStudy } from "@/types";

const gradients: Record<string, string> = {
  "Cohort Capstone": "from-primary-container to-surface-tint",
  "Private 1-on-1": "from-primary to-primary-container",
  "Corporate Training": "from-surface-tint to-tertiary-fixed-dim",
  Mentorship: "from-primary-container to-on-tertiary-container",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const gradient = gradients[study.category] ?? "from-primary-container to-surface-tint";

  return (
    <div className="hover-lift flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]">
      <div className={`relative h-44 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute left-4 top-4 rounded bg-tertiary-fixed px-3 py-1 font-mono text-[10.5px] text-primary">
          {study.category}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-7">
        <h3 className="font-display text-[19px] font-semibold leading-tight tracking-[-0.01em] text-primary">
          {study.title}
        </h3>
        <p className="mt-1.5 font-mono text-[11px] text-on-surface-variant">{study.client}</p>
        <p className="mt-3.5 flex-grow text-[14.5px] leading-relaxed text-on-surface-variant">
          {study.summary}
        </p>

        <div className="mt-6 grid sm:grid-cols-3 grid-cols-1 gap-2 border-t border-surface-variant pt-5">
          {study.results.map((r) => (
            <div key={r.label}>
              <div className="font-display text-sm font-bold text-primary">{r.value}</div>
              <div className="mt-0.5 text-[11px] leading-tight text-outline">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tools.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[11px] text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
