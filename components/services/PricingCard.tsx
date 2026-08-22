import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import type { PricingTier } from "@/types";

const skins = [
  { bg: "bg-surface-container-lowest", fg: "text-primary", opacity: "opacity-70", btn: "bg-primary text-on-primary" },
  { bg: "bg-primary-container", fg: "text-white", opacity: "opacity-70", btn: "bg-tertiary-fixed text-primary" },
  { bg: "bg-surface-container", fg: "text-primary", opacity: "opacity-70", btn: "bg-primary text-on-primary" },
];

type PricingCardProps = {
  tier: PricingTier;
  index: number;
  ctaLabel: string;
  ctaHref: string;
};

export function PricingCard({ tier, index, ctaLabel, ctaHref }: PricingCardProps) {
  const skin = skins[index % 3];

  return (
    <div
      className={`flex flex-col rounded-xl border border-outline-variant/40 px-7.5 py-8.5 ${skin.bg} ${skin.fg}`}
    >
      <div className={`font-mono text-[10.5px] tracking-[0.12em] ${skin.opacity}`}>
        {tier.tier}
      </div>
      <div className="mt-3.5 font-display text-[34px] font-bold tracking-[-0.02em] md:text-[38px]">
        {tier.price}
      </div>
      <div className={`mt-1.5 text-sm ${skin.opacity}`}>{tier.note}</div>
      <div className="mt-6.5 grid flex-1 gap-3">
        {tier.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-[14.5px] leading-snug">
            <FiCheck className="mt-0.5 flex-shrink-0 text-tertiary-fixed-dim" size={16} />
            {f}
          </div>
        ))}
      </div>
      <Link
        href={ctaHref}
        className={`mt-7 rounded-full px-5.5 py-3.5 text-center font-display text-[14.5px] font-bold ${skin.btn}`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
