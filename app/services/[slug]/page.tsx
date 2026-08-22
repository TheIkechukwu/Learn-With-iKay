import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiDatabase } from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { PricingCard } from "@/components/services/PricingCard";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { CurriculumTracker } from "@/components/services/CurriculumTracker";
import type { GlanceItem } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.sub,
  };
}

function buildGlance(serviceId: string, duration: string, priceFrom: string): GlanceItem[] {
  const format =
    serviceId === "corporate"
      ? "On-site or remote"
      : serviceId === "kids"
      ? "Live online, small groups"
      : "Live online, mentor-led";

  const cohortSize =
    serviceId === "private"
      ? "1 learner"
      : serviceId === "kids"
      ? "12 learners"
      : serviceId === "workshops"
      ? "40 seats"
      : "25 learners";

  const nextIntake =
    serviceId === "kids"
      ? "5 October 2026"
      : serviceId === "workshops"
      ? "30 August 2026"
      : serviceId === "cohort"
      ? "14 September 2026"
      : "Rolling";

  return [
    { k: "Format", v: format },
    { k: "Duration", v: duration },
    { k: "Cohort size", v: cohortSize },
    { k: "Investment", v: priceFrom },
    { k: "Next intake", v: nextIntake },
  ];
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const glance = buildGlance(service.id, service.duration, service.priceFrom);
  const ctaHref = service.id === "corporate" ? "/contact" : "/enroll";

  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute right-0 top-0 flex h-full w-1/2 items-start justify-end overflow-hidden opacity-[0.06]">
          <FiDatabase className="-mr-16 -mt-16 rotate-12 text-primary" size={420} />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.1em] text-on-surface-variant"
          >
            <FiArrowLeft size={13} /> ALL SERVICES
          </Link>

       
          <h1 className="text-pretty mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[48px]">
            {service.hero}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant md:text-[18px]">
            {service.sub}
          </p>

          <div className="mt-8.5 flex flex-wrap gap-3.5">
       <Link
              href={ctaHref}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[15.5px] font-bold text-white transition-all hover:bg-surface-tint hover:shadow-lg"
              style={{ color: "#ffffff" }}
            >
              {service.ctaLabel}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-full border border-secondary-fixed bg-white px-8 py-4 font-display text-[15.5px] font-semibold text-primary transition-colors hover:bg-surface-container-low"
            >
              Ask a question
            </Link>
          </div>

          
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Kicker>OVERVIEW</Kicker>
            <p className="text-pretty mt-4.5 font-display text-[22px] font-medium leading-[1.46] tracking-[-0.01em] text-primary md:text-[24px]">
              {service.overview}
            </p>
            <p className="mt-5 text-[16.5px] leading-relaxed text-on-surface-variant">
              {service.overviewLong}
            </p>
          </div>
          <div className="rounded-xl border border-surface-variant bg-surface-container-lowest px-8.5 pb-9 pt-8.5 shadow-[var(--shadow-card)]">
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-outline">
              LEARNING OUTCOMES
            </div>
            <div className="mt-5.5 grid gap-4">
              {service.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-on-surface">
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-tertiary-fixed-dim" />
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <Kicker>{service.structureKicker}</Kicker>
        <h2 className="mt-4 font-display text-[26px] font-bold tracking-[-0.02em] text-primary md:text-[34px]">
          {service.structureTitle}
        </h2>
        <p className="mt-3 max-w-xl text-[15.5px] text-on-surface-variant">
          A step-by-step technical progression designed for maximum retention
          and immediate practical application.
        </p>
        <CurriculumTracker modules={service.modules} />
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.audience.map((a) => (
            <div key={a.who} className="rounded-xl bg-surface-container-low px-7 py-8">
              <div className="font-mono text-[10.5px] tracking-[0.12em] text-outline">
                IDEAL FOR
              </div>
              <div className="mt-3.5 font-display text-[19px] font-semibold text-primary">
                {a.who}
              </div>
              <div className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
                {a.why}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <Kicker>PRICING</Kicker>
        <h2 className="mt-4 font-display text-[26px] font-bold tracking-[-0.02em] text-primary md:text-[34px]">
          {service.pricingTitle}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.pricing.map((tier, i) => (
            <PricingCard
              key={tier.tier}
              tier={tier}
              index={i}
              ctaLabel={service.ctaLabel}
              ctaHref={ctaHref}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[320px_1fr]">
          <div>
            <Kicker>FAQ</Kicker>
            <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.14] tracking-[-0.02em] text-primary">
              Before you apply.
            </h2>
          </div>
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-6 pt-20 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-10 rounded-[28px] bg-primary-container px-7 py-11 text-white md:px-14 md:py-14">
          <div className="max-w-[600px]">
            <h2 className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[34px]">
              {service.finalCta}
            </h2>
            <p className="mt-3.5 text-[16.5px] leading-relaxed text-white/74">
              {service.finalCtaSub}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="rounded-full bg-tertiary-fixed px-9 py-4.5 font-display text-base font-bold text-primary transition-colors hover:bg-tertiary-fixed-dim"
          >
            {service.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
