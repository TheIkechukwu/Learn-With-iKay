import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <Kicker>02 · PROGRAMS</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
            Six ways to learn with us.
          </h2>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-1.5 border-b-2 border-tertiary-fixed pb-1 font-display text-[15px] font-semibold text-primary"
        >
          View all services <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            href={`/services/${s.id}`}
            className="hover-lift flex flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary px-2.5 py-1.5 font-mono text-[11px] tracking-[0.06em] text-tertiary-fixed">
                {s.code}
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.06em] text-outline">
                {s.duration}
              </div>
            </div>
            <div className="mt-6 font-display text-[21px] font-semibold leading-tight tracking-[-0.01em] text-primary">
              {s.name}
            </div>
            <div className="mt-3 flex-1 text-[14.5px] leading-relaxed text-on-surface-variant">
              {s.blurb}
            </div>
            <div className="mt-6 flex items-center gap-1.5 font-display text-[14.5px] font-semibold text-primary">
              Learn more <FiArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
