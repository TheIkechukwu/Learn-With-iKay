import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiCompass, FiTool, FiUserPlus, FiShield, FiAward } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn With iKay started in 2021 as a Saturday study group. Read our story, mission, vision and teaching philosophy.",
};

const values = [
  {
    icon: FiTool,
    title: "Practicality",
    body: "Theory is useless without application. Every concept taught is anchored to a real-world business scenario or dataset.",
  },
  {
    icon: FiUserPlus,
    title: "Mentorship",
    body: "Learning isn't solitary. We provide structured guidance to help students navigate roadblocks and build confidence.",
  },
  {
    icon: FiShield,
    title: "Data Integrity",
    body: "We instil a deep respect for data quality, ethics, and rigorous validation in all our analytical methodologies.",
  },
  {
    icon: FiAward,
    title: "Lifelong Learning",
    body: "The tech landscape shifts rapidly. We teach students how to learn, adapting to new tools and frameworks continuously.",
  },
];

const founderTags = [
  "Power BI",
  "DAX",
  "SQL",
  "Star schema modelling",
  "FP&A reporting",
  "Analytics engineering",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            OUR STORY
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[48px]">
            Bridging the gap between{" "}
            <span className="text-surface-tint">Academic Precision</span> and
            Industry Reality.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-on-surface-variant">
            We exist to transform complex data science concepts into
            actionable, practical knowledge. Building the next generation of
            analytical leaders.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="hover-lift overflow-hidden rounded-xl border border-surface-variant bg-surface shadow-sm md:col-span-8">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-72 w-full flex-shrink-0 md:h-auto md:w-[280px]">
                  <Image
               src="/ike2.jpeg"
                    alt="Ikechukwu Emeka, Founder and Lead Instructor at Learn With iKay"
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="font-display text-[22px] font-bold text-primary">
                    Ikechukwu Emeka
                  </h2>
                  <p className="mb-6 mt-1 font-mono text-[11px] uppercase tracking-widest text-surface-tint">
                    Founder &amp; Lead Instructor
                  </p>
                  <div className="grid gap-4 text-[15.5px] leading-relaxed text-on-surface-variant">
                    <p>
                      With a senior level of experience navigating the
                      complexities of enterprise data architectures,
                      Ikechukwu founded Learn With iKay to solve a persistent
                      industry problem: the disconnect between theoretical
                      data science education and practical, on-the-job
                      application.
                    </p>
                    <p>
                      His approach combines the rigor of traditional academic
                      frameworks with the agility required in modern tech
                      environments. He believes that true mastery comes not
                      just from knowing the algorithms, but understanding the
                      business context they serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover-lift flex flex-col justify-between rounded-xl bg-primary-container p-8 text-white md:col-span-4 md:p-10">
              <div>
                <FiCompass className="mb-4 text-tertiary-fixed" size={30} />
                <h3 className="font-display text-[20px] font-bold">Our Mission</h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-primary-fixed opacity-90">
                  To democratize elite data science education by providing
                  structured, mentorship-driven learning experiences that
                  prioritize real-world problem solving and data integrity.
                </p>
                <div className="mt-5 h-px w-full bg-white/12" />
                <h3 className="mt-5 font-display text-[20px] font-bold">Our Vision</h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-primary-fixed opacity-90">
                  A generation of African analysts whose work is trusted
                  because their assumptions are documented and their numbers
                  reconcile.
                </p>
              </div>
          
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-[26px] font-bold text-primary md:text-[32px]">
              Core Principles
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-on-surface-variant">
              The foundational values that guide our curriculum design and
              student mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-sm"
              >
                <div className="absolute left-0 top-0 h-full w-1 -translate-x-full bg-surface-tint transition-transform duration-300 group-hover:translate-x-0" />
                <div className="mb-5.5 grid h-11 w-11 place-items-center rounded-lg bg-surface-container">
                  <v.icon className="text-surface-tint" size={18} />
                </div>
                <div className="font-display text-[15.5px] font-bold text-primary">
                  {v.title}
                </div>
                <div className="mt-2.5 flex-grow text-[14px] leading-relaxed text-on-surface-variant">
                  {v.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <h2 className="font-display text-[22px] font-bold text-primary md:text-[26px]">
            Ready to master the data?
          </h2>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-tertiary-fixed px-8 py-3.5 font-display text-[15px] font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10">
        <div className="hover-lift grid items-center gap-10 rounded-[28px] border border-surface-variant bg-surface-container-lowest p-8 shadow-sm md:grid-cols-[320px_1fr] md:gap-12 md:p-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/ike2.jpeg"
              alt="Ikechukwu Emeka teaching a Learn With iKay cohort"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Kicker>FOUNDER TOOLKIT</Kicker>
            <h3 className="mt-3.5 font-display text-[26px] font-bold tracking-[-0.02em] text-primary md:text-[30px]">
              Ikechukwu Emeka
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-on-surface-variant">
               A senior-level background across BI and analytics engineering,
              star-schema modelling, Power BI semantic layers, DAX
              optimisation and the unglamorous work of reconciling three
              systems that each think they own the customer record.
            </p>
            <div className="mt-5.5 flex flex-wrap gap-2">
              {founderTags.map((t) => (
                <div
                  key={t}
                  className="rounded-md bg-surface-container px-3 py-1.5 font-mono text-[11px] text-primary"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}