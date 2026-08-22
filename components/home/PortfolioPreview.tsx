import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/data";

export function PortfolioPreview() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <Kicker>WORK PROOFS</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
            Real results, not just testimonials.
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="flex items-center gap-1.5 border-b-2 border-tertiary-fixed pb-1 font-display text-[15px] font-semibold text-primary"
        >
          View full portfolio <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
