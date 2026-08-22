import { FiBookOpen, FiDatabase, FiUsers, FiBriefcase } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";

const features = [
  {
    icon: FiBookOpen,
    title: "Practical Curriculum",
    body: "Structured learning paths designed to build foundational knowledge before introducing complex tools.",
  },
  {
    icon: FiDatabase,
    title: "Real-World Datasets",
    body: "Practice with messy, unorganized data, exactly what you will face in a real corporate environment.",
  },
  {
    icon: FiUsers,
    title: "Mentor-Led Cohorts",
    body: "Learn alongside driven peers with direct access to experienced data professionals for guidance.",
  },
  {
    icon: FiBriefcase,
    title: "Job-Ready Portfolio",
    body: "Graduate with tangible projects that demonstrate your analytical problem-solving skills to employers.",
  },
];

export function WhySection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <Kicker className="text-center">01 · WHY LEARN WITH iKAY</Kicker>
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
          The LWi Difference
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-on-surface-variant">
          Academic precision meets industry reality. We don&apos;t just teach
          tools; we teach you how to think like a data professional.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="glass-card group flex flex-col items-start p-7">
            <div className="mb-5.5 grid h-12 w-12 place-items-center rounded-lg bg-primary-fixed text-primary transition-transform group-hover:scale-110">
              <f.icon size={20} />
            </div>
            <div className="font-display text-[19px] font-semibold tracking-[-0.01em] text-primary">
              {f.title}
            </div>
            <div className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
              {f.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
