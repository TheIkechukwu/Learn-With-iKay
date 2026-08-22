import { Button } from "@/components/ui/Button";
import { OutcomesChart } from "@/components/home/OutcomesChart";

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-container text-white">
      <div className="absolute -right-36 -top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,226,101,0.16),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-tertiary-fixed/32 bg-tertiary-fixed/12 py-1.5 pl-3 pr-4 font-mono text-[11px] font-medium uppercase tracking-widest text-tertiary-fixed">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-tertiary-fixed" />
            Next Cohort Starting Soon
          </div>

          <h1 className="text-pretty mt-6 font-display text-[38px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[52px]">
            From spreadsheet beginner to{" "}
            <span className="text-tertiary-fixed">job-ready data professional.</span>
          </h1>

          <p className="text-pretty mt-6 max-w-[560px] text-[18px] leading-relaxed text-white/76">
            Master Excel, SQL, Power Query, Power BI and statistical thinking
            on real, messy datasets, then ship a portfolio that survives a
            hiring manager&apos;s questions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="/enroll" variant="lime">
              Enroll Now
            </Button>
            <Button href="/contact" variant="outline">
              Book a Free Consultation
            </Button>
          </div>
        </div>

        <OutcomesChart />
      </div>
    </section>
  );
}
