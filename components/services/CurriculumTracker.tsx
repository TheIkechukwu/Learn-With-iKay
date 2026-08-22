import { FiCheckCircle, FiAward } from "react-icons/fi";
import type { Module } from "@/types";

export function CurriculumTracker({ modules }: { modules: Module[] }) {
  return (
    <div className="mt-10">
      {modules.map((m, i) => {
        const isLast = i === modules.length - 1;
        return (
          <div key={m.title} className={`module-item relative flex gap-6 md:gap-8 ${isLast ? "" : "mb-10"}`}>
            <div className="node-line" />
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white font-display text-lg font-bold shadow-sm ${
                  isLast ? "bg-tertiary-fixed text-primary" : "bg-surface-container text-primary"
                }`}
              >
                {isLast ? <FiAward size={20} /> : i + 1}
              </div>
            </div>
            <div
              className={`hover-lift flex-grow rounded-2xl border p-6 md:p-8 ${
                isLast
                  ? "border-primary-container bg-primary-container text-white shadow-lg"
                  : "border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h3
                  className={`flex items-center gap-2 font-display text-[19px] font-semibold ${
                    isLast ? "text-white" : "text-primary"
                  }`}
                >
                  {m.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold ${
                    isLast ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  {m.meta}
                </span>
              </div>
              <p
                className={`text-[14.5px] leading-relaxed ${
                  isLast ? "text-primary-fixed-dim" : "text-on-surface-variant"
                }`}
              >
                {m.detail}
              </p>
              {isLast && (
                <>
                  <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-primary-container-deep">
                    <div className="h-full w-full bg-tertiary-fixed" />
                  </div>
                  <div className="mt-2 flex justify-end">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-tertiary-fixed">
                      <FiCheckCircle size={13} /> Graduation Readiness
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
