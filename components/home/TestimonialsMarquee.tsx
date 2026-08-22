"use client";

import { TESTIMONIALS } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex w-[360px] flex-shrink-0 flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3.5">
        <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-primary-fixed-dim font-display text-[14px] font-bold text-primary">
          {t.initials}
        </div>
        <div>
          <div className="font-display text-[15px] font-semibold text-primary">{t.name}</div>
          <div className="mt-0.5 text-[12.5px] text-outline">{t.role}</div>
        </div>
      </div>
      <p className="mt-4.5 flex-1 text-[14.5px] leading-relaxed text-on-surface-variant">
        &ldquo;{t.quote}&rdquo;
      </p>
 
    </div>
  );
}

export function TestimonialsMarquee() {
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="pt-20 md:pt-24">
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-10">
        <Kicker className="text-center">SUCCESS STORIES</Kicker>
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
          512 analysts trained. Here is what changed for them.
        </h2>
      </div>

      <div className="group relative mt-11 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 px-5 group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
