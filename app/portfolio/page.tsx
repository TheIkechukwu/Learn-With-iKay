import type { Metadata } from "next";
import { Kicker } from "@/components/ui/Kicker";
import { CaseStudyDetail } from "@/components/portfolio/CaseStudyDetail";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real work from Learn With iKay students, clients and corporate partners: dashboards, pipelines and portfolio rebuilds, with the results attached.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            WORK PROOFS
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.06] tracking-[-0.02em] text-primary md:text-[48px]">
            Real problems. Real data. Real results.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant">
            A selection of dashboards, pipelines and career outcomes built by
            students, private clients and corporate partners, with the
            numbers attached.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <CaseStudyDetail key={study.id} study={study} />
          ))}
        </div>
      </section>
    </>
  );
}
