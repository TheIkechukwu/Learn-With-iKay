import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-10 rounded-[28px] bg-tertiary-fixed px-7 py-11 md:px-14 md:py-14">
        <div className="max-w-[620px]">
          <h2 className="text-pretty font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[38px]">
            Next Cohort starts soon. Reserve your seat now.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-on-tertiary-fixed-variant">
            Applications are reviewed weekly. Screening call, then an offer
            within five working days.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Button href="/enroll" variant="surface">
            Start your application
          </Button>
          <Button href="/contact" variant="outline-dark">
            Talk to us first
          </Button>
        </div>
      </div>
    </section>
  );
}
