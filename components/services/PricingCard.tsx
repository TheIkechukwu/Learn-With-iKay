import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import type { PricingTier } from "@/types";

type PricingCardProps = {
  tier: PricingTier;
  index: number;
  ctaLabel: string;
  ctaHref: string;
};

export function PricingCard({ tier, ctaLabel, ctaHref }: PricingCardProps) {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-primary-container px-7 py-8 text-white md:flex-row md:items-center md:gap-10 md:px-10 md:py-10">
      <div className="md:w-[220px] md:flex-shrink-0">
        <div className="font-mono text-[11px] uppercase tracking-widest text-tertiary-fixed">
          {tier.tier}
        </div>
        <div className="mt-2 font-display text-[38px] font-bold leading-none tracking-[-0.02em] md:text-[44px]">
          {tier.price}
        </div>
        <div className="mt-2 text-[13.5px] text-white/65">{tier.note}</div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:border-x md:border-white/12 md:px-10">
        {tier.features.map((f) => (
          <div key={f} className="flex items-center gap-2.5 text-[14.5px] text-white/90">
            <FiCheck className="flex-shrink-0 text-tertiary-fixed" size={16} />
            {f}
          </div>
        ))}
      </div>

      <Link
        href={ctaHref}
        className="flex flex-shrink-0 items-center justify-center rounded-full bg-tertiary-fixed px-8 py-4 text-center font-display text-[15px] font-bold text-primary transition-colors hover:bg-tertiary-fixed-dim md:w-auto"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}