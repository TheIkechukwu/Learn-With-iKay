import type { Metadata } from "next";
import Link from "next/link";
import {
  FiUsers,
  FiUser,
  FiBriefcase,
  FiAward,
  FiHeart,
  FiZap,
  FiArrowRight,
  FiHash,
} from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six delivery models across the same practitioner curriculum, from a 16-week mentor-led cohort to corporate training and a kids programme.",
};

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  cohort: FiUsers,
  private: FiUser,
  corporate: FiBriefcase,
  kids: FiAward,
  mentorship: FiHeart,
  workshops: FiZap,
};

export default function ServicesHubPage() {
  const [cohort, priv, corporate, kids, mentorship, workshops] = SERVICES;

  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            <FiHash className="mr-0.5" size={12} />
            LWi SERVICES HUB
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[32px] font-bold leading-[1.06] tracking-[-0.02em] text-primary md:text-[48px]">
            Modern Data Skills for <span className="text-surface-tint">Every Goal</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-on-surface-variant md:text-[18px]">
            Accelerate your career with practitioner-led training. From
            foundational analytics to advanced data science, we provide
            structured paths to mastery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[cohort, corporate, kids, mentorship].map((s) => {
            const Icon = icons[s.id];
            return (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[var(--shadow-card)]"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-bl-full bg-primary-fixed/20 transition-transform group-hover:scale-110" />
                <div className="relative mb-6 inline-flex w-fit rounded-lg bg-surface-container p-3">
                  <Icon size={26} />
                </div>
                <h3 className="relative font-display text-[21px] font-semibold text-primary">
                  {s.name}
                </h3>
                <p className="relative mb-6 mt-3 flex-grow text-[14.5px] leading-relaxed text-on-surface-variant">
                  {s.blurb}
                </p>
                <div className="relative mt-auto flex items-center justify-between border-t border-surface-variant pt-4">
                  <span className="rounded bg-primary/5 px-2 py-1 font-mono text-[11px] text-primary">
                    {s.duration}
                  </span>
                  <span className="flex items-center gap-1 font-display text-[14.5px] font-semibold text-primary transition-colors group-hover:text-surface-tint">
                    Learn More
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
                  </span>
                </div>
              </Link>
            );
          })}

          <Link
            href={`/services/${priv.id}`}
            className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[var(--shadow-card)] lg:row-span-2"
          >
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-tl-full bg-tertiary-fixed/10 transition-transform group-hover:scale-110" />
            <div className="relative mb-6 inline-flex w-fit rounded-lg bg-surface-container p-3">
              <FiUser size={26} />
            </div>
            <h3 className="relative font-display text-[25px] font-semibold text-primary">
              {priv.name}
            </h3>
            <p className="relative mb-6 mt-3 flex-grow text-[15.5px] leading-relaxed text-on-surface-variant">
              {priv.overviewLong.slice(0, 175)}…
            </p>
            <div className="relative mt-auto pt-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {priv.tools.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface-variant px-3 py-1.5 font-mono text-[11px] text-on-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="flex w-full items-center justify-center rounded-full bg-primary py-3 font-display text-[14.5px] font-bold text-on-primary shadow-sm transition-colors group-hover:opacity-90">
                Book a Consultation
              </span>
            </div>
          </Link>

          <Link
            href={`/services/${workshops.id}`}
            className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-8 shadow-[var(--shadow-card)] md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-grow">
                <div className="mb-6 inline-flex w-fit rounded-lg bg-surface-container p-3">
                  <FiZap size={26} />
                </div>
                <h3 className="font-display text-[25px] font-semibold text-primary">
                  {workshops.name}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-on-surface-variant">
                  {workshops.blurb}
                </p>
              </div>
              <div className="flex flex-col justify-end md:w-1/3">
                <div className="mb-4 rounded-lg bg-surface-container p-6">
                  <p className="mb-2 font-mono text-[11px] tracking-[0.06em] text-on-surface-variant">
                    Next Masterclass:
                  </p>
                  <p className="font-display text-[19px] font-semibold text-primary">
                    {workshops.modules[0].title}
                  </p>
                  <p className="mt-1 text-[14.5px] text-surface-tint">
                    {workshops.modules[0].meta} · Virtual
                  </p>
                </div>
                <span className="flex w-full items-center justify-center rounded-full border border-primary/20 bg-surface-container py-3 font-display text-[14.5px] font-bold text-primary shadow-sm transition-colors group-hover:bg-surface-container-low">
                  View Schedule
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
