import type { Metadata } from "next";
import { Kicker } from "@/components/ui/Kicker";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real graduate outcomes from the Learn With iKay cohort, private classes, corporate training, mentorship and kids programmes.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            SUCCESS STORIES
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.06] tracking-[-0.02em] text-primary md:text-[48px]">
            512 analysts trained. Here are a few of their stories.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant">
            Career switchers, junior analysts, and reporting teams — before
            and after Learn With iKay.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-6 pt-16 md:px-10">
        <TestimonialsGrid />
      </section>
    </>
  );
}
