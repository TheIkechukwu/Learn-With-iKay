"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { TESTIMONIALS } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import type { Testimonial } from "@/types";

function Avatar({ t, size }: { t: Testimonial; size: number }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-full bg-primary-fixed-dim"
      style={{ width: size, height: size }}
    >
      <Image
        src={t.image}
        alt={t.name}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}

function TestimonialCard({
  t,
  onRead,
}: {
  t: Testimonial;
  onRead: (t: Testimonial) => void;
}) {
  return (
    <div className="flex h-[380px] w-[380px] flex-shrink-0 flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3.5">
        <Avatar t={t} size={44} />
        <div className="min-w-0">
          <div className="truncate font-display text-[15px] font-semibold text-primary">
            {t.name}
          </div>
          <div className="mt-0.5 truncate text-[12.5px] text-outline">{t.role}</div>
        </div>
      </div>

      <div className="mt-3 inline-flex w-fit rounded-md bg-surface-container px-2.5 py-1 font-mono text-[10.5px] text-primary">
        {t.program}
      </div>

      <p className="mt-4 line-clamp-6 flex-1 whitespace-pre-line text-[14px] leading-relaxed text-on-surface-variant">
        &ldquo;{t.quote}&rdquo;
      </p>

      <button
        type="button"
        onClick={() => onRead(t)}
        className="mt-4 self-start font-display text-[13.5px] font-semibold text-surface-tint transition-colors hover:text-primary"
      >
        Read full story &rarr;
      </button>
    </div>
  );
}

function TestimonialModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {testimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[300] grid place-items-center bg-primary/40 px-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-surface-variant bg-surface-container-lowest p-8 shadow-hero"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-variant"
            >
              <FiX size={16} />
            </button>

            <div className="flex items-center gap-3.5 pr-8">
              <Avatar t={testimonial} size={48} />
              <div>
                <div className="font-display text-[16px] font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="mt-0.5 text-[13px] text-outline">{testimonial.role}</div>
              </div>
            </div>

            <div className="mt-4 inline-flex w-fit rounded-md bg-surface-container px-2.5 py-1 font-mono text-[10.5px] text-primary">
              {testimonial.program}
            </div>

            <p className="mt-5 whitespace-pre-line text-[15px] leading-relaxed text-on-surface-variant">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TestimonialsMarquee() {
  const track = [...TESTIMONIALS, ...TESTIMONIALS];
  const [selected, setSelected] = useState<Testimonial | null>(null);

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
            <TestimonialCard key={`${t.name}-${i}`} t={t} onRead={setSelected} />
          ))}
        </div>
      </div>

      <TestimonialModal testimonial={selected} onClose={() => setSelected(null)} />
    </section>
  );
}