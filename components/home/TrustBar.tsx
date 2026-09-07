"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Kicker } from "@/components/ui/Kicker";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Students Trained" },
  { value: 5, label: "Cohorts Delivered" },
  { value: 78, suffix: "%", label: "Placement Rate" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Average Rating" },
];

function CountUpStat({ value, decimals = 0, prefix = "", suffix = "", label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="px-6 py-2 text-center">
      <div className="font-display text-[20px] font-bold tracking-[-0.01em] text-primary md:text-[36px]">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2.5 font-mono text-[11px] uppercase tracking-widest text-outline">
        {label}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-surface-variant bg-surface py-14 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Kicker className="text-center">TRUSTED BY LEARNERS ACROSS WORLD</Kicker>

        <div className="mt-8 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-surface-variant">
          {stats.map((s) => (
            <CountUpStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}