import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";

const stats = [
  { value: "5 yrs", label: "Industry practice" },
  { value: "50", label: "Learners mentored" },
  { value: "5", label: "Cohort cap" },
];

export function Founder() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-surface-variant">
          <Image
            src="/ike2.jpeg"
            alt="Ikechukwu Emeka, Founder and Lead Instructor at Learn With iKay"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <Kicker>04 · FOUNDER &amp; LEAD INSTRUCTOR</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold tracking-[-0.02em] text-primary md:text-[36px]">
            Ikechukwu Emeka
          </h2>
          <div className="mt-2 text-base font-medium text-surface-tint">
            Analytics Lead · 9 years in BI, reporting &amp; data modelling
          </div>
          <p className="mt-5.5 text-[16.5px] leading-relaxed text-on-surface-variant">
            Ikechukwu has built reporting layers for fintech, logistics and
            FMCG teams, the kind of work where a broken join or a
            mislabelled KPI costs someone real money. He teaches from that
            same standard: correct grain, documented assumptions, and a
            dashboard that answers the question the business actually asked.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-on-surface-variant">
            Every LWi cohort is led personally by him, capped at 25 learners,
            and graded against a rubric borrowed from real analyst hiring
            loops.
          </p>
          <div className="mt-8.5 grid grid-cols-3 gap-5 border-t border-surface-variant pt-7.5">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[20px] font-bold text-primary md:text-[28px]">
                  {s.value}
                </div>
                <div className="mt-1 text-[13.5px] text-outline">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}