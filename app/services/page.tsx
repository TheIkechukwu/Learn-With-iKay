import type { Metadata } from "next";
import Link from "next/link";
import { FiUsers, FiTrendingUp, FiBookOpen, FiArrowRight, FiHash } from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three programmes: Data Analysis for Beginners, the Advanced Data Analysis Course, and one-on-one STEM Tutoring.",
};

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  beginners: FiUsers,
  advanced: FiTrendingUp,
  stem: FiBookOpen,
};

export default function ServicesHubPage() {
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
            Accelerate your career with practitioner-led training, or build
            genuine STEM confidence in your child. Three structured paths to
            mastery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s) => {
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
        </div>
      </section>
    </>
  );
}