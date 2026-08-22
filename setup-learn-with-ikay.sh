#!/usr/bin/env bash
set -e
echo "Scaffolding Learn With iKay Next.js project..."

mkdir -p "app/about"
cat > "app/about/page.tsx" << 'LWI_EOF_4aee0e2fc3ea'
import type { Metadata } from "next";
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
            <div className="hover-lift rounded-xl border border-surface-variant bg-surface p-8 shadow-sm md:col-span-8 md:p-12">
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <div className="bg-diagonal h-24 w-24 flex-shrink-0 rounded-full border-2 border-surface" />
                <div>
                  <h2 className="font-display text-[22px] font-bold text-primary">
                    Ikechukwu Emeka
                  </h2>
                  <p className="mb-6 mt-1 font-mono text-[11px] uppercase tracking-widest text-surface-tint">
                    Founder &amp; Lead Instructor
                  </p>
                  <div className="grid gap-4 text-[15.5px] leading-relaxed text-on-surface-variant">
                    <p>
                      With over a decade of experience navigating the
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
              <div className="mt-8 border-t border-primary-container pt-8">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[30px] font-bold text-tertiary-fixed">
                    5k+
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-primary-fixed">
                    Students
                    <br />
                    Empowered
                  </span>
                </div>
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
        <div className="hover-lift grid items-center gap-10 rounded-[28px] border border-surface-variant bg-surface-container-lowest p-8 shadow-sm md:grid-cols-[280px_1fr] md:gap-12 md:p-12">
          <div className="bg-diagonal aspect-square rounded-2xl" />
          <div>
            <Kicker>FOUNDER TOOLKIT</Kicker>
            <h3 className="mt-3.5 font-display text-[26px] font-bold tracking-[-0.02em] text-primary md:text-[30px]">
              Ikechukwu Emeka
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-on-surface-variant">
              Nine years across BI and analytics engineering, star-schema
              modelling, Power BI semantic layers, DAX optimisation and the
              unglamorous work of reconciling three systems that each think
              they own the customer record.
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
LWI_EOF_4aee0e2fc3ea

mkdir -p "app/blog/[slug]"
cat > "app/blog/[slug]/page.tsx" << 'LWI_EOF_790ba829874e'
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiLinkedin, FiTwitter, FiShare2 } from "react-icons/fi";
import { POSTS, ARTICLE } from "@/lib/data";
import { PostCard } from "@/components/blog/PostCard";
import type { ArticleBlock } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function getBody(slug: string, excerpt: string): ArticleBlock[] {
  if (slug === ARTICLE.id) return ARTICLE.body;
  return [
    { isParagraph: true, text: excerpt },
    {
      isParagraph: true,
      text: "The full worked breakdown for this article, including code samples and a step-by-step walkthrough, is being finalised. Subscribe to The Thursday Query to get notified the moment it publishes.",
    },
  ];
}

function ArticleBody({ block }: { block: ArticleBlock }) {
  if (block.isHeading) {
    return (
      <h2 className="mt-11 mb-4 font-display text-[26px] font-bold tracking-[-0.025em] text-primary">
        {block.text}
      </h2>
    );
  }
  if (block.isQuote) {
    return (
      <div className="my-8.5 border-l-[3px] border-tertiary-fixed py-1.5 pl-7">
        <div className="font-display text-[24px] font-medium leading-[1.5] tracking-[-0.02em] text-primary">
          {block.text}
        </div>
      </div>
    );
  }
  if (block.isCode) {
    return (
      <pre className="my-7.5 overflow-x-auto rounded-2xl bg-primary-container px-7 py-6.5 font-mono text-[13.5px] leading-relaxed text-[#D9E8C4]">
        {block.text}
      </pre>
    );
  }
  if (block.isImage) {
    return (
      <div className="my-8">
        <div className="bg-diagonal grid aspect-video place-items-center rounded-[18px] border border-surface-variant">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-outline">
            {block.text}
          </div>
        </div>
        {block.caption && (
          <div className="mt-2.5 text-[13px] text-outline">{block.caption}</div>
        )}
      </div>
    );
  }
  return (
    <p className="mt-5 text-[17px] leading-loose text-on-surface-variant">{block.text}</p>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) notFound();

  const body = getBody(slug, post.excerpt);
  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-[820px] px-6 pt-14 md:px-10">
        <Link href="/blog" className="font-mono text-[11.5px] tracking-[0.16em] text-outline">
          ← ALL ARTICLES
        </Link>
        <div className="mt-7 inline-block rounded-md bg-surface-container-low px-2.75 py-1.5 font-mono text-[10.5px] text-primary">
          {post.category}
        </div>
        <h1 className="text-pretty mt-5 font-display text-[31px] font-bold leading-[1.1] tracking-[-0.035em] text-primary md:text-[46px]">
          {post.title}
        </h1>
        <div className="mt-6.5 flex items-center gap-3.5 border-b border-surface-variant pb-7">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-surface-container-low font-display text-sm font-bold text-primary">
            {post.author
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-semibold text-primary">{post.author}</div>
            <div className="mt-0.5 text-[13.5px] text-outline">
              {post.date} · {post.readTime}
            </div>
          </div>
          <div className="flex gap-2">
            {[FiLinkedin, FiTwitter, FiShare2].map((Icon, i) => (
              <button
                key={i}
                className="grid h-9.5 w-9.5 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary-container hover:text-white"
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          {body.map((block, i) => (
            <ArticleBody key={i} block={block} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-6 pt-16 md:px-10">
        <div className="font-mono text-[11.5px] tracking-[0.2em] text-outline">
          RELATED ARTICLES
        </div>
        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
LWI_EOF_790ba829874e

mkdir -p "app/blog"
cat > "app/blog/page.tsx" << 'LWI_EOF_ecfbb1b42088'
import type { Metadata } from "next";
import { POSTS } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "SQL tutorials, Power BI and DAX deep dives, statistics explainers and career advice from the Learn With iKay instructors.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export default function BlogPage() {
  const featuredPost = POSTS[0];

  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant px-5 pb-16 pt-16 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="glass-card flex flex-col overflow-hidden md:flex-row">
            <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded bg-primary px-3 py-1 font-mono text-[11px] text-tertiary-fixed">
                  {featuredPost.category}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  {featuredPost.readTime}
                </span>
              </div>
              <h1 className="text-pretty font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-primary md:text-[38px]">
                {featuredPost.title}
              </h1>
              <p className="mt-4 max-w-[560px] text-[16.5px] leading-relaxed text-on-surface-variant">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-surface bg-primary-fixed-dim font-display font-bold text-primary">
                  {initials(featuredPost.author)}
                </div>
                <div>
                  <p className="font-display text-[15px] font-semibold text-primary">
                    {featuredPost.author}
                  </p>
                  <p className="font-mono text-[11px] text-on-surface-variant">
                    Lead Instructor at Learn With iKay
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-primary-container to-surface-tint md:h-auto md:w-1/2">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-6 pt-14 md:px-10">
        <Kicker>THE THURSDAY QUERY</Kicker>
        <BlogGrid />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-9 rounded-[24px] bg-tertiary-fixed px-8 py-11 md:px-12">
          <div className="max-w-[560px]">
            <h3 className="font-display text-[24px] font-bold tracking-[-0.02em] text-primary md:text-[28px]">
              One practical analytics lesson, every Thursday.
            </h3>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-on-tertiary-fixed-variant">
              A query pattern, a DAX measure, or a chart critique. No fluff,
              no course spam.
            </p>
          </div>
          <form className="flex items-center gap-2.5">
            <input
              type="email"
              placeholder="you@work.com"
              className="min-w-[240px] rounded-full border border-primary/25 bg-white/70 px-5.5 py-3.5 text-[14.5px] outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-7 py-3.5 font-display text-[14.5px] font-bold text-on-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
LWI_EOF_ecfbb1b42088

mkdir -p "app/contact"
cat > "app/contact/page.tsx" << 'LWI_EOF_f7e4e4593858'
import type { Metadata } from "next";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Learn With iKay, email, WhatsApp, or book a free consultation call.",
};

const contactDetails = [
  { icon: FiMail, k: "EMAIL", v: "hello@learnwithikay.com" },
  { icon: FiPhone, k: "PHONE / WHATSAPP", v: "+234 801 234 5678" },
  { icon: FiMapPin, k: "OFFICE", v: "Lekki Phase 1, Lagos, Nigeria" },
  { icon: FiClock, k: "OFFICE HOURS", v: "Mon–Fri, 09:00–18:00 WAT" },
];

const inputClass =
  "mt-2.25 w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3.5 text-[15px] outline-none transition-all duration-200 focus:border-2 focus:border-primary";

export default function ContactPage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            CONTACT
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.06] tracking-[-0.02em] text-primary md:text-[48px]">
            Ask us anything before you apply.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant">
            Programs, pricing, corporate engagements, or the kids programme , 
            we usually reply within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-20 pt-14 md:px-10">
        <div className="grid items-start gap-7 lg:grid-cols-[1.15fr_1fr]">
          <form className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-6 pb-8 pt-7 shadow-[var(--shadow-card)] md:px-10 md:pb-11 md:pt-10">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
            <div className="font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
              Send us a message
            </div>
            <div className="mt-2 text-[15px] text-on-surface-variant">
              We&apos;ll route your message to the right team automatically.
            </div>

            <div className="mt-7.5 grid grid-cols-1 gap-4.5 sm:grid-cols-2">
              <label>
                <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                  FULL NAME
                </div>
                <input required placeholder="Your name" className={inputClass} />
              </label>
              <label>
                <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                  EMAIL
                </div>
                <input required type="email" placeholder="you@email.com" className={inputClass} />
              </label>
            </div>

            <label className="mt-4.5 block">
              <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                SUBJECT
              </div>
              <input placeholder="What is this about?" className={inputClass} />
            </label>

            <label className="mt-4.5 block">
              <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                MESSAGE
              </div>
              <textarea
                required
                rows={6}
                placeholder="Tell us what you'd like to know."
                className={`${inputClass} resize-y leading-relaxed`}
              />
            </label>

            <button
              type="submit"
              className="mt-8 rounded-full bg-primary px-9 py-4 font-display text-[15.5px] font-bold text-on-primary transition-colors hover:opacity-90"
            >
              Send message
            </button>
          </form>

          <div className="grid gap-6">
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-8.5 py-8.5 shadow-[var(--shadow-card)]">
              <div className="grid gap-5">
                {contactDetails.map((c) => (
                  <div key={c.k} className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-surface-container">
                      <c.icon className="text-primary" size={17} />
                    </div>
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                        {c.k}
                      </div>
                      <div className="mt-1 text-[15.5px] font-medium text-primary">{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-diagonal mt-6 grid aspect-[21/9] place-items-center rounded-xl">
                <div className="font-mono text-[10.5px] tracking-[0.1em] text-outline">
                  MAP EMBED · LEKKI, LAGOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
LWI_EOF_f7e4e4593858

mkdir -p "app/enroll"
cat > "app/enroll/page.tsx" << 'LWI_EOF_fab293253d75'
import type { Metadata } from "next";
import { FiGitBranch } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { EnrollForm } from "@/components/enroll/EnrollForm";
import { ProcessStepper } from "@/components/enroll/ProcessStepper";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Apply for your seat in Cohort 12. Applications close 7 September 2026 · twenty-five seats, reviewed weekly.",
};

const admissionsFaqs = [
  {
    q: "Cohort Deadlines",
    a: "Applications close exactly 7 days prior to the start of a new cohort. Late applications are rolled to the subsequent session.",
  },
  {
    q: "Prerequisites",
    a: "Basic computer literacy is required for all tracks. Advanced tracks require a foundational knowledge of Python and core mathematics.",
  },
  {
    q: "Re-application",
    a: "If not accepted, candidates may re-apply for a future cohort after a 30-day waiting period, demonstrating progress in required foundational areas.",
  },
  ...SERVICES.find((s) => s.id === "cohort")!.faqs.slice(0, 2),
];

export default function EnrollPage() {
  return (
    <div className="bg-grid relative overflow-hidden pb-24">
      <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-16 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Kicker tone="pill" className="mx-auto">
            APPLICATION PORTAL
          </Kicker>
          <h1 className="mt-6 font-display text-[32px] font-bold tracking-[-0.02em] text-primary md:text-[48px]">
            Begin Your Data Journey
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-on-surface-variant">
            Our rigorous programs require high commitment. Please complete
            the application below to begin the screening process for our
            upcoming cohorts.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <EnrollForm />
          </div>

          <div className="grid gap-6 lg:col-span-4">
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-[var(--shadow-card)]">
              <h4 className="mb-6 flex items-center gap-2 font-display text-[18px] font-semibold text-primary">
                <FiGitBranch className="text-tertiary-fixed-dim" size={19} />
                The Process
              </h4>
              <ProcessStepper />
            </div>

            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
              <h4 className="mb-4 font-display text-[18px] font-semibold text-primary">
                Admissions FAQ
              </h4>
              <FaqAccordion faqs={admissionsFaqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
LWI_EOF_fab293253d75

mkdir -p "app"
cat > "app/globals.css" << 'LWI_EOF_4581d8413dd2'
@import "tailwindcss";

@theme {
  --font-display: var(--font-space-grotesk), sans-serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), monospace;

  --color-surface: #faf9f7;
  --color-surface-dim: #dadad8;
  --color-surface-bright: #faf9f7;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f4f4f1;
  --color-surface-container: #eeeeeb;
  --color-surface-container-high: #e8e8e6;
  --color-surface-container-highest: #e3e2e0;
  --color-surface-variant: #e3e2e0;
  --color-surface-tint: #456557;

  --color-on-surface: #1a1c1b;
  --color-on-surface-variant: #414844;
  --color-inverse-surface: #2f312f;
  --color-inverse-on-surface: #f1f1ee;

  --color-outline: #727974;
  --color-outline-variant: #c1c8c3;

  --color-primary: #03251a;
  --color-on-primary: #ffffff;
  --color-primary-container: #1b3b2f;
  --color-primary-container-deep: #12291f;
  --color-on-primary-container: #83a596;
  --color-inverse-primary: #abcebd;
  --color-primary-fixed: #c7ebd9;
  --color-primary-fixed-dim: #abcebd;
  --color-on-primary-fixed: #002116;
  --color-on-primary-fixed-variant: #2d4d40;

  --color-secondary: #5e5f5b;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #e3e3de;
  --color-on-secondary-container: #646561;
  --color-secondary-fixed: #e3e3de;
  --color-secondary-fixed-dim: #c7c7c2;
  --color-on-secondary-fixed: #1b1c19;
  --color-on-secondary-fixed-variant: #464744;

  --color-tertiary: #1b2300;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #2f3900;
  --color-on-tertiary-container: #90a731;
  --color-tertiary-fixed: #c9e265;
  --color-tertiary-fixed-dim: #b9d156;
  --color-on-tertiary-fixed: #181e00;
  --color-on-tertiary-fixed-variant: #3f4c00;

  --color-gold: #d4af37;

  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  --color-background: #faf9f7;
  --color-on-background: #1a1c1b;

  --shadow-card: 0 4px 20px rgba(26, 28, 27, 0.04);
  --shadow-card-hover: 0 12px 24px rgba(26, 28, 27, 0.08);
  --shadow-hero: 0 34px 70px rgba(0, 0, 0, 0.3);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--color-surface);
  color: var(--color-on-background);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

input,
select,
textarea,
button {
  font-family: inherit;
}

::selection {
  background: var(--color-tertiary-fixed);
  color: var(--color-primary);
}

.bg-grid {
  background-image: linear-gradient(to right, rgba(114, 121, 116, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(114, 121, 116, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-grid-dark {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-diagonal {
  background-image: repeating-linear-gradient(
    135deg,
    #e4e9dd,
    #e4e9dd 10px,
    #edf1e7 10px,
    #edf1e7 20px
  );
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-outline-variant);
  box-shadow: var(--shadow-card);
  border-radius: 1rem;
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.hover-lift {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.node-line {
  position: absolute;
  left: 23px;
  top: 48px;
  bottom: -24px;
  width: 2px;
  background-color: var(--color-outline-variant);
  z-index: 0;
}

.module-item:last-child .node-line {
  display: none;
}

.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

@keyframes lwiRise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes lwiPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse-soft {
  animation: lwiPulse 2s ease-in-out infinite;
}

@keyframes lwiMarquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: lwiMarquee 42s linear infinite;
}
LWI_EOF_4581d8413dd2

mkdir -p "app"
cat > "app/layout.tsx" << 'LWI_EOF_1b9b32791492'
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnwithikay.com"),
  title: {
    default: "Learn With iKay | Data Analytics School",
    template: "%s · Learn With iKay",
  },
  description:
    "Learn With iKay (LWi) is a practitioner-led data analytics school offering cohort-based bootcamps, private 1-on-1 classes, corporate training and a Data Analytics for Kids programme. Excel, SQL, Power Query, Power BI and Python on real, messy data.",
  keywords: [
    "data analytics school",
    "data analytics bootcamp Nigeria",
    "learn SQL",
    "learn Power BI",
    "data analytics for kids",
    "corporate data training",
  ],
  authors: [{ name: "Learn With iKay" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://learnwithikay.com",
    siteName: "Learn With iKay",
    title: "Learn With iKay | Data Analytics School",
    description:
      "Academic precision meets industry reality. Cohorts, private classes, corporate training and a kids programme.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn With iKay | Data Analytics School",
    description: "Academic precision meets industry reality.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-sans text-on-background antialiased selection:bg-tertiary-fixed selection:text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
LWI_EOF_1b9b32791492

mkdir -p "app"
cat > "app/not-found.tsx" << 'LWI_EOF_3d0913b11f80'
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-32 text-center md:px-10">
      <div className="font-mono text-[11.5px] tracking-[0.2em] text-outline">404</div>
      <h1 className="mt-4 font-display text-[32px] font-bold tracking-[-0.02em] text-primary md:text-[42px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-[480px] text-[16.5px] leading-relaxed text-on-surface-variant">
        The page you&apos;re looking for may have been moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-tertiary-fixed px-8 py-4 font-display text-[15.5px] font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-tertiary-fixed-dim"
      >
        Back to home
      </Link>
    </section>
  );
}
LWI_EOF_3d0913b11f80

mkdir -p "app"
cat > "app/page.tsx" << 'LWI_EOF_80725792c604'
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhySection } from "@/components/home/WhySection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CurriculumSnapshot } from "@/components/home/CurriculumSnapshot";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySection />
      <ServicesPreview />
      <PortfolioPreview />
      <CurriculumSnapshot />
      <TestimonialsMarquee />
      <BlogPreview />
      <Founder />
      <FinalCta />
    </>
  );
}
LWI_EOF_80725792c604

mkdir -p "app/portfolio"
cat > "app/portfolio/page.tsx" << 'LWI_EOF_7a278da55900'
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
LWI_EOF_7a278da55900

mkdir -p "app/services/[slug]"
cat > "app/services/[slug]/page.tsx" << 'LWI_EOF_8592c73d5c46'
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

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
              {service.code} · {service.duration}
            </span>
          </div>

          <h1 className="text-pretty mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[48px]">
            {service.hero}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant md:text-[18px]">
            {service.sub}
          </p>

          <div className="mt-8.5 flex flex-wrap gap-3.5">
            <Link
              href={ctaHref}
              className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[15.5px] font-bold text-on-primary transition-all hover:bg-surface-tint hover:shadow-lg"
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

          <div className="glass-card mt-10 grid max-w-md gap-4 p-6">
            <div className="font-mono text-[10.5px] tracking-[0.14em] text-outline">
              AT A GLANCE
            </div>
            {glance.map((g) => (
              <div
                key={g.k}
                className="flex justify-between gap-4.5 border-b border-surface-variant pb-3 text-[14.5px] last:border-0 last:pb-0"
              >
                <div className="text-on-surface-variant">{g.k}</div>
                <div className="text-right font-semibold text-primary">{g.v}</div>
              </div>
            ))}
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
LWI_EOF_8592c73d5c46

mkdir -p "app/services"
cat > "app/services/page.tsx" << 'LWI_EOF_b10d24a3ac9f'
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
LWI_EOF_b10d24a3ac9f

mkdir -p "components/blog"
cat > "components/blog/BlogGrid.tsx" << 'LWI_EOF_a32524697869'
"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { POSTS } from "@/lib/data";
import { PostCard } from "@/components/blog/PostCard";

const categories = ["All Posts", ...Array.from(new Set(POSTS.map((p) => p.category)))];
const PAGE_SIZE = 6;

export function BlogGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Posts");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCategory = category === "All Posts" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-5 border-b border-surface-variant pb-6">
        <div className="flex min-w-[280px] items-center gap-2.5 rounded-full border border-outline-variant/60 bg-surface-container-lowest px-5 py-2.75">
          <FiSearch className="text-outline" size={15} />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search articles, e.g. window functions"
            className="w-full border-none bg-transparent text-[14.5px] text-on-background outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "rounded-full border border-surface-variant px-5 py-2 font-display text-[14px] font-medium transition-colors",
                category === c
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-low text-primary hover:bg-surface-variant"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center text-on-surface-variant">
            No articles match your search.
          </div>
        )}
      </div>

      {visible < filtered.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border-2 border-primary px-8 py-3 font-display text-[15px] font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
LWI_EOF_a32524697869

mkdir -p "components/blog"
cat > "components/blog/PostCard.tsx" << 'LWI_EOF_89f10766d70e'
import Link from "next/link";
import type { Post } from "@/types";

const gradients: Record<string, string> = {
  "SQL Tutorials": "from-primary-container to-surface-tint",
  "Power BI": "from-primary to-primary-container",
  "Excel Tips": "from-surface-tint to-tertiary-fixed-dim",
  Statistics: "from-primary-container to-on-tertiary-container",
  "Data Storytelling": "from-surface-tint to-primary",
  "Career Advice": "from-primary to-surface-tint",
  Python: "from-primary-container to-surface-tint",
  "Student Spotlights": "from-tertiary-fixed-dim to-surface-tint",
  "Industry Trends": "from-primary to-on-primary-fixed-variant",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export function PostCard({ post }: { post: Post }) {
  const gradient = gradients[post.category] ?? "from-primary-container to-surface-tint";

  return (
    <Link
      href={`/blog/${post.id}`}
      className="hover-lift flex h-full flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest"
    >
      <div className={`relative h-44 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute left-4 top-4 rounded bg-tertiary-fixed px-3 py-1 font-mono text-[10.5px] text-primary">
          {post.category}
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="font-display text-[18.5px] font-semibold leading-tight tracking-[-0.01em] text-primary">
          {post.title}
        </h3>
        <p className="mt-3 flex-grow text-[14.5px] leading-relaxed text-on-surface-variant">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary-fixed-dim font-display text-[12px] font-bold text-primary">
            {initials(post.author)}
          </div>
          <span className="font-mono text-[11px] text-primary">
            {post.author} · {post.readTime}
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-tertiary-fixed" />
    </Link>
  );
}
LWI_EOF_89f10766d70e

mkdir -p "components/enroll"
cat > "components/enroll/EnrollForm.tsx" << 'LWI_EOF_174bbd9853e0'
"use client";

import { useState } from "react";
import { FiUser, FiBook, FiEdit3, FiArrowRight } from "react-icons/fi";
import { SERVICES } from "@/lib/data";

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const inputClass =
  "w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3 text-[15px] text-on-surface outline-none transition-all duration-200 placeholder:text-outline focus:border-2 focus:border-primary";

const labelClass = "block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-2";

export function EnrollForm() {
  const [submitted, setSubmitted] = useState(false);
  const [experience, setExperience] = useState("Beginner");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[var(--shadow-card)] md:p-10">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
        <div className="font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
          Application received.
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-on-surface-variant">
          Thank you for applying. We review applications every Monday and
          Thursday, expect a screening call within three working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-[var(--shadow-card)] md:p-8"
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />

      <div>
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiUser className="text-primary-container" size={19} />
          Candidate Profile
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={labelClass}>First Name</label>
            <input required placeholder="e.g., Ada" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input required placeholder="e.g., Lovelace" className={inputClass} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Professional Email</label>
            <input required type="email" placeholder="name@domain.com" className={inputClass} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>LinkedIn Profile URL (Optional)</label>
            <input type="url" placeholder="https://linkedin.com/in/..." className={inputClass} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiBook className="text-primary-container" size={19} />
          Program Selection
        </h3>
        <div className="grid gap-6">
          <div>
            <label className={labelClass}>Desired Track</label>
            <select required className={`${inputClass} appearance-none bg-white`} defaultValue="">
              <option value="" disabled>
                Select a program...
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Current Experience Level</label>
            <div className="grid grid-cols-3 gap-3">
              {experienceLevels.map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setExperience(level)}
                  className={`rounded-lg border p-3 text-center font-body text-[14.5px] font-medium transition-colors ${
                    experience === level
                      ? "border-primary-container bg-primary-container text-white"
                      : "border-outline-variant/50 bg-surface-container-low text-on-surface"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 flex items-center gap-2 border-b border-surface-variant pb-3 font-display text-[19px] font-semibold text-primary">
          <FiEdit3 className="text-primary-container" size={19} />
          Statement of Intent
        </h3>
        <div>
          <label className={labelClass}>Why Learn With iKay? (Max 250 words)</label>
          <p className="mb-2 text-sm text-on-surface-variant">
            Help us understand your goals and why this rigorous format fits
            your learning style.
          </p>
          <textarea
            required
            rows={4}
            placeholder="I am applying to this cohort because..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="mt-8 pt-2">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[15.5px] font-bold text-on-primary transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          Submit Application
          <FiArrowRight size={17} />
        </button>
        <p className="mt-4 text-center font-mono text-[11px] text-on-surface-variant">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </form>
  );
}
LWI_EOF_174bbd9853e0

mkdir -p "components/enroll"
cat > "components/enroll/ProcessStepper.tsx" << 'LWI_EOF_6aeb1cccc294'
import { FiCheck } from "react-icons/fi";

const steps = [
  {
    title: "1. Apply",
    body: "Submit your detailed application form.",
    status: "done" as const,
  },
  {
    title: "2. Screening",
    body: "Our team reviews your goals to ensure program fit (2-3 days).",
    status: "current" as const,
  },
  {
    title: "3. Offer",
    body: "Accepted candidates receive cohort placement details.",
    status: "upcoming" as const,
  },
  {
    title: "4. Onboarding",
    body: "Access materials and prepare for day one.",
    status: "upcoming" as const,
  },
];

export function ProcessStepper() {
  return (
    <div className="relative space-y-8 border-l-2 border-surface-variant pl-6">
      {steps.map((s) => (
        <div key={s.title} className="relative">
          {s.status === "done" && (
            <div className="absolute -left-[35px] top-1 grid h-6 w-6 place-items-center rounded-full bg-primary ring-4 ring-surface-container-lowest">
              <FiCheck className="text-on-primary" size={13} />
            </div>
          )}
          {s.status === "current" && (
            <div className="absolute -left-[35px] top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-primary bg-surface-container-high ring-4 ring-surface-container-lowest">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
          )}
          {s.status === "upcoming" && (
            <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full border-2 border-outline-variant bg-surface-container-high ring-4 ring-surface-container-lowest" />
          )}
          <h5
            className={`font-display text-[16px] font-semibold ${
              s.status === "upcoming" ? "text-on-surface-variant" : "text-primary"
            }`}
          >
            {s.title}
          </h5>
          <p className="mt-1 text-[14.5px] leading-relaxed text-on-surface-variant">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
LWI_EOF_6aeb1cccc294

mkdir -p "components/home"
cat > "components/home/BlogPreview.tsx" << 'LWI_EOF_63981cb5adf0'
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { PostCard } from "@/components/blog/PostCard";
import { POSTS } from "@/lib/data";

export function BlogPreview() {
  const latest = POSTS.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <Kicker>THE THURSDAY QUERY</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
            From the blog.
          </h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1.5 border-b-2 border-tertiary-fixed pb-1 font-display text-[15px] font-semibold text-primary"
        >
          Read all articles <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
LWI_EOF_63981cb5adf0

mkdir -p "components/home"
cat > "components/home/CurriculumSnapshot.tsx" << 'LWI_EOF_9d017be13e4e'
"use client";

import { useState } from "react";
import { CURRICULUM } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CurriculumSnapshot() {
  const [active, setActive] = useState(CURRICULUM[0].key);
  const activeModule = CURRICULUM.find((m) => m.key === active) ?? CURRICULUM[0];

  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-20 md:px-10 md:pt-26">
      <div className="bg-grid-dark relative overflow-hidden rounded-[30px] bg-primary-container px-6 py-10 text-white md:px-14 md:py-14">
        <div className="relative">
          <div className="font-mono text-[11.5px] tracking-[0.2em] text-tertiary-fixed">
            03 · CURRICULUM SNAPSHOT
          </div>
          <h2 className="mt-4 font-display text-[30px] font-bold tracking-[-0.03em] md:text-[42px]">
            The 16-week analyst pipeline.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {CURRICULUM.map((m) => (
              <button
                key={m.key}
                onClick={() => setActive(m.key)}
                className={cn(
                  "rounded-full border border-white/20 px-4.5 py-2.5 text-sm font-medium transition-colors",
                  active === m.key ? "bg-tertiary-fixed text-primary" : "bg-transparent text-white"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] tracking-[0.12em] text-tertiary-fixed">
                {activeModule.weeks}
              </div>
              <div className="mt-3 font-display text-[28px] font-bold tracking-[-0.02em] md:text-[30px]">
                {activeModule.title}
              </div>
              <div className="mt-3.5 text-base leading-relaxed text-white/74">
                {activeModule.detail}
              </div>
              <div className="mt-5.5 flex flex-wrap gap-2">
                {activeModule.tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-md bg-white/8 px-2.5 py-1.5 font-mono text-[11.5px] text-white/86"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/14 bg-white/6 px-7 py-7">
              <div className="font-mono text-[10.5px] tracking-[0.14em] text-tertiary-fixed">
                YOU WILL BE ABLE TO
              </div>
              <div className="mt-5 grid gap-3.5">
                {activeModule.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 text-[15px] leading-snug text-white/86">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-tertiary-fixed" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
LWI_EOF_9d017be13e4e

mkdir -p "components/home"
cat > "components/home/FinalCta.tsx" << 'LWI_EOF_530eeac55083'
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-center justify-between gap-10 rounded-[28px] bg-tertiary-fixed px-7 py-11 md:px-14 md:py-14">
        <div className="max-w-[620px]">
          <h2 className="text-pretty font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[38px]">
            Cohort 12 opens 14 September. 25 seats.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-on-tertiary-fixed-variant">
            Applications are reviewed weekly. Screening call, then an offer
            within five working days.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Button href="/enroll" variant="dark">
            Start your application
          </Button>
          <Button href="/contact" variant="outline-dark">
            Talk to us first
          </Button>
        </div>
      </div>
    </section>
  );
}
LWI_EOF_530eeac55083

mkdir -p "components/home"
cat > "components/home/Founder.tsx" << 'LWI_EOF_8c1aee3315ee'
import { Kicker } from "@/components/ui/Kicker";

const stats = [
  { value: "9 yrs", label: "Industry practice" },
  { value: "512", label: "Learners mentored" },
  { value: "25", label: "Cohort cap" },
];

export function Founder() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="bg-diagonal aspect-[4/5] rounded-2xl border border-surface-variant" />
        <div>
          <Kicker>04 · FOUNDER &amp; LEAD INSTRUCTOR</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold tracking-[-0.02em] text-primary md:text-[36px]">
            Ikechukwu Emeka
          </h2>
          <div className="mt-2 text-base font-medium text-surface-tint">
            Analytics Lead · 9 years in BI, reporting &amp; data modelling
          </div>
          <p className="mt-5.5 text-[16.5px] leading-relaxed text-on-surface-variant">
            Ikechukwu has built reporting layers for fintech, logistics and
            FMCG teams, the kind of work where a broken join or a
            mislabelled KPI costs someone real money. He teaches from that
            same standard: correct grain, documented assumptions, and a
            dashboard that answers the question the business actually asked.
          </p>
          <p className="mt-4 text-[16.5px] leading-relaxed text-on-surface-variant">
            Every LWi cohort is led personally by him, capped at 25 learners,
            and graded against a rubric borrowed from real analyst hiring
            loops.
          </p>
          <div className="mt-8.5 grid grid-cols-3 gap-5 border-t border-surface-variant pt-7.5">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[26px] font-bold text-primary md:text-[30px]">
                  {s.value}
                </div>
                <div className="mt-1 text-[13.5px] text-outline">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
LWI_EOF_8c1aee3315ee

mkdir -p "components/home"
cat > "components/home/Hero.tsx" << 'LWI_EOF_ba464bfc44e9'
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
LWI_EOF_ba464bfc44e9

mkdir -p "components/home"
cat > "components/home/OutcomesChart.tsx" << 'LWI_EOF_bdd3356df6da'
"use client";

import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { FiBarChart2 } from "react-icons/fi";

const skillData = [
  { label: "EXCEL", pre: 35, post: 88 },
  { label: "SQL", pre: 12, post: 82 },
  { label: "POWER BI", pre: 8, post: 79 },
  { label: "STATS", pre: 22, post: 74 },
  { label: "PYTHON", pre: 5, post: 68 },
];

const stats = [
  { label: "PLACEMENT", value: "78%" },
  { label: "MEDIAN Δ PAY", value: "+41%" },
  { label: "COMPLETION", value: "92%" },
];

export function OutcomesChart() {
  return (
    <div className="rounded-2xl bg-surface p-5 text-on-background shadow-hero md:p-6">
      <div className="mb-4.5 flex items-center justify-between">
        <div>
          <div className="font-display text-[15px] font-bold text-primary">
            Cohort Outcomes Dashboard
          </div>
          <div className="mt-1 font-mono text-[10.5px] tracking-[0.05em] text-outline">
            SOURCE: LWi_ALUMNI_2024_2026.CSV
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[10px] text-primary">
          <FiBarChart2 size={12} />
          LIVE
        </div>
      </div>

      <div className="mb-3.5 grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-[13px] border border-outline-variant bg-surface-container-lowest p-3.5"
          >
            <div className="font-mono text-[9.5px] tracking-[0.09em] text-outline">
              {s.label}
            </div>
            <div className="mt-1.5 font-display text-[22px] font-bold text-primary md:text-[25px]">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[13px] border border-outline-variant bg-surface-container-lowest px-4 pb-3 pt-4">
        <div className="mb-3.5 flex items-baseline justify-between">
          <div className="text-[12.5px] font-semibold text-primary">
            Skill confidence, pre vs. post cohort
          </div>
          <div className="font-mono text-[10px] text-outline">n = 512</div>
        </div>
        <div className="h-[150px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillData} barGap={3} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fill: "#727974" }}
              />
              <Tooltip
                cursor={{ fill: "rgba(3,37,26,0.05)" }}
                contentStyle={{
                  borderRadius: 10,
                  border: "1px solid #E3E2E0",
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="pre" name="Pre-cohort" fill="#E3E2E0" radius={[5, 5, 0, 0]} />
              <Bar dataKey="post" name="Post-cohort" fill="#1B3B2F" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
LWI_EOF_bdd3356df6da

mkdir -p "components/home"
cat > "components/home/PortfolioPreview.tsx" << 'LWI_EOF_cbdbc3961d33'
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
LWI_EOF_cbdbc3961d33

mkdir -p "components/home"
cat > "components/home/ServicesPreview.tsx" << 'LWI_EOF_163bfa7c8ea3'
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { SERVICES } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <Kicker>02 · PROGRAMS</Kicker>
          <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
            Six ways to learn with us.
          </h2>
        </div>
        <Link
          href="/services"
          className="flex items-center gap-1.5 border-b-2 border-tertiary-fixed pb-1 font-display text-[15px] font-semibold text-primary"
        >
          View all services <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            href={`/services/${s.id}`}
            className="hover-lift flex flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary px-2.5 py-1.5 font-mono text-[11px] tracking-[0.06em] text-tertiary-fixed">
                {s.code}
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.06em] text-outline">
                {s.duration}
              </div>
            </div>
            <div className="mt-6 font-display text-[21px] font-semibold leading-tight tracking-[-0.01em] text-primary">
              {s.name}
            </div>
            <div className="mt-3 flex-1 text-[14.5px] leading-relaxed text-on-surface-variant">
              {s.blurb}
            </div>
            <div className="mt-6 flex items-center gap-1.5 font-display text-[14.5px] font-semibold text-primary">
              Learn more <FiArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
LWI_EOF_163bfa7c8ea3

mkdir -p "components/home"
cat > "components/home/TestimonialsMarquee.tsx" << 'LWI_EOF_c18ef8691ea5'
"use client";

import { TESTIMONIALS } from "@/lib/data";
import { Kicker } from "@/components/ui/Kicker";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex w-[360px] flex-shrink-0 flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3.5">
        <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-primary-fixed-dim font-display text-[14px] font-bold text-primary">
          {t.initials}
        </div>
        <div>
          <div className="font-display text-[15px] font-semibold text-primary">{t.name}</div>
          <div className="mt-0.5 text-[12.5px] text-outline">{t.role}</div>
        </div>
      </div>
      <p className="mt-4.5 flex-1 text-[14.5px] leading-relaxed text-on-surface-variant">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-2 border-t border-surface-variant pt-4 text-[11.5px]">
        <span className="rounded-md bg-surface-container px-2 py-1 font-mono text-primary">
          {t.before}
        </span>
        <span className="text-outline">to</span>
        <span className="rounded-md bg-tertiary-fixed/40 px-2 py-1 font-mono text-primary">
          {t.after}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="pt-20 md:pt-24">
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-10">
        <Kicker className="text-center">SUCCESS STORIES</Kicker>
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[36px]">
          512 analysts trained. Here is what changed for them.
        </h2>
      </div>

      <div className="group relative mt-11 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 px-5 group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
LWI_EOF_c18ef8691ea5

mkdir -p "components/home"
cat > "components/home/TrustBar.tsx" << 'LWI_EOF_3da8d184a856'
const trustItems = ["EXCEL", "SQL", "POWER QUERY", "POWER BI", "PYTHON"];

const avatarColors = ["bg-tertiary-fixed", "bg-primary-fixed-dim", "bg-gold"];

export function TrustBar() {
  return (
    <section className="border-y border-surface-variant bg-surface py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-10">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarColors.map((c, i) => (
              <div
                key={i}
                className={`h-10 w-10 rounded-full border-2 border-surface ${c}`}
              />
            ))}
          </div>
          <div className="text-[14.5px] text-on-surface-variant">
            <strong className="text-primary">500+</strong> Students Trained
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-mono text-[12.5px] font-medium uppercase tracking-widest text-outline">
          {trustItems.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && <span className="text-surface-variant">•</span>}
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
LWI_EOF_3da8d184a856

mkdir -p "components/home"
cat > "components/home/WhySection.tsx" << 'LWI_EOF_14530220467a'
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
LWI_EOF_14530220467a

mkdir -p "components/layout"
cat > "components/layout/Footer.tsx" << 'LWI_EOF_2e8cb1b85e06'
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/#testimonials" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiTwitter, label: "X" },
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary-container bg-primary-container-deep text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo inverted />
            <span className="font-display text-base font-bold tracking-[-0.01em] text-white">
              Learn With iKay
            </span>
          </Link>
          <p className="mt-5 max-w-[300px] text-[14.5px] leading-relaxed text-on-primary-container">
            Academic Precision in Data Science Education.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-container text-on-primary-container transition-colors hover:bg-tertiary-fixed hover:text-primary"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Programs</div>
          <div className="mt-4 grid gap-2.5">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Company</div>
          <div className="mt-4 grid gap-2.5">
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-7 font-display text-[15px] font-semibold text-white">Legal</div>
          <div className="mt-4 grid gap-2.5">
            {legalLinks.map((l) => (
              <span
                key={l.label}
                className="cursor-pointer text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {l.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-tertiary-fixed">
            THE THURSDAY QUERY
          </div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-on-primary-container">
            One practical lesson a week, a query pattern, a DAX measure, a
            chart critique.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="you@work.com"
              className="flex-1 rounded-full border border-white/15 bg-white/6 px-4 py-2.75 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-tertiary-fixed px-5 py-2.75 font-display text-sm font-bold text-primary"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 border-t border-primary-container px-5 py-7 font-mono text-[12px] tracking-wide text-on-primary-container md:px-10">
        <div>© 2026 Learn With iKay. Academic Precision in Data Science Education.</div>
        <div>hello@learnwithikay.com · +234 801 234 5678</div>
      </div>
    </footer>
  );
}
LWI_EOF_2e8cb1b85e06

mkdir -p "components/layout"
cat > "components/layout/Header.tsx" << 'LWI_EOF_a966ad0698e6'
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { NAV_ITEMS, SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-surface-variant bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-8 gap-y-4 px-4 py-4 md:px-10">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
          <Logo />
          <span className="font-display text-[17px] font-bold tracking-[-0.01em] text-primary">
            Learn With iKay
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3.5 py-2.5 font-display text-[15px] font-medium transition-colors",
                pathname.startsWith("/services")
                  ? "border-b-2 border-primary text-primary"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Services
              <FiChevronDown className="text-[11px] opacity-60" />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="glass-card absolute left-0 top-full z-50 w-[640px] p-3"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        className="flex items-start gap-3.5 rounded-xl p-4 hover:bg-surface-container-low"
                      >
                        <div className="mt-0.5 rounded-md bg-primary px-1.5 py-1 font-mono text-[10.5px] font-medium tracking-[0.06em] text-tertiary-fixed">
                          {s.code}
                        </div>
                        <div>
                          <div className="font-display text-[15px] font-semibold text-primary">
                            {s.name}
                          </div>
                          <div className="mt-1 text-[13px] leading-relaxed text-on-surface-variant">
                            {s.kicker}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_ITEMS.filter((i) => i.label !== "Services").map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2.5 font-display text-[15px] font-medium text-on-surface-variant transition-colors hover:text-primary",
                  isActive && "border-b-2 border-primary text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/enroll"
            className="ml-3 flex items-center gap-2 rounded-full bg-tertiary-fixed px-6 py-2.75 font-display text-[15px] font-bold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-tertiary-fixed-dim"
          >
            Enroll Now
            <FiArrowRight size={15} />
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-primary lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-surface-variant bg-surface-container-lowest lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 font-display text-[15px] font-medium text-primary hover:bg-surface-container-low"
              >
                Home
              </Link>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 font-display text-[15px] font-medium text-primary hover:bg-surface-container-low"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-tertiary-fixed px-6 py-3 text-center font-display text-[15px] font-bold text-primary"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
LWI_EOF_a966ad0698e6

mkdir -p "components/portfolio"
cat > "components/portfolio/CaseStudyCard.tsx" << 'LWI_EOF_fab74bdbb350'
import type { CaseStudy } from "@/types";

const gradients: Record<string, string> = {
  "Cohort Capstone": "from-primary-container to-surface-tint",
  "Private 1-on-1": "from-primary to-primary-container",
  "Corporate Training": "from-surface-tint to-tertiary-fixed-dim",
  Mentorship: "from-primary-container to-on-tertiary-container",
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const gradient = gradients[study.category] ?? "from-primary-container to-surface-tint";

  return (
    <div className="hover-lift flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]">
      <div className={`relative h-44 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute left-4 top-4 rounded bg-tertiary-fixed px-3 py-1 font-mono text-[10.5px] text-primary">
          {study.category}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-7">
        <h3 className="font-display text-[19px] font-semibold leading-tight tracking-[-0.01em] text-primary">
          {study.title}
        </h3>
        <p className="mt-1.5 font-mono text-[11px] text-on-surface-variant">{study.client}</p>
        <p className="mt-3.5 flex-grow text-[14.5px] leading-relaxed text-on-surface-variant">
          {study.summary}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-surface-variant pt-5">
          {study.results.map((r) => (
            <div key={r.label}>
              <div className="font-display text-[16px] font-bold text-primary">{r.value}</div>
              <div className="mt-0.5 text-[11px] leading-tight text-outline">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tools.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface-container px-2.5 py-1.5 font-mono text-[11px] text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
LWI_EOF_fab74bdbb350

mkdir -p "components/portfolio"
cat > "components/portfolio/CaseStudyDetail.tsx" << 'LWI_EOF_8fcf98dfddeb'
import { FiTarget, FiCompass } from "react-icons/fi";
import type { CaseStudy } from "@/types";

const gradients: Record<string, string> = {
  "Cohort Capstone": "from-primary-container to-surface-tint",
  "Private 1-on-1": "from-primary to-primary-container",
  "Corporate Training": "from-surface-tint to-tertiary-fixed-dim",
  Mentorship: "from-primary-container to-on-tertiary-container",
};

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const gradient = gradients[study.category] ?? "from-primary-container to-surface-tint";

  return (
    <div className="overflow-hidden rounded-2xl border border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]">
      <div className={`relative h-40 bg-gradient-to-br ${gradient} md:h-52`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute left-6 top-6 rounded bg-tertiary-fixed px-3 py-1 font-mono text-[11px] text-primary">
          {study.category}
        </div>
      </div>

      <div className="p-7 md:p-10">
        <h3 className="font-display text-[24px] font-bold leading-tight tracking-[-0.015em] text-primary md:text-[28px]">
          {study.title}
        </h3>
        <p className="mt-2 font-mono text-[11.5px] tracking-[0.08em] text-on-surface-variant">
          {study.client} &middot; {study.program}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-primary">
              <FiTarget size={16} className="text-surface-tint" /> The challenge
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
              {study.challenge}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-display text-[15px] font-semibold text-primary">
              <FiCompass size={16} className="text-surface-tint" /> The approach
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-on-surface-variant">
              {study.approach}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-surface-container-low p-6">
          {study.results.map((r) => (
            <div key={r.label} className="text-center">
              <div className="font-display text-[22px] font-bold text-primary md:text-[26px]">
                {r.value}
              </div>
              <div className="mt-1 text-[11.5px] leading-tight text-on-surface-variant">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tools.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface-container px-3 py-1.5 font-mono text-[11px] text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
LWI_EOF_8fcf98dfddeb

mkdir -p "components/services"
cat > "components/services/CurriculumTracker.tsx" << 'LWI_EOF_4aac828eafab'
import { FiCheckCircle, FiAward } from "react-icons/fi";
import type { Module } from "@/types";

export function CurriculumTracker({ modules }: { modules: Module[] }) {
  return (
    <div className="mt-10">
      {modules.map((m, i) => {
        const isLast = i === modules.length - 1;
        return (
          <div key={m.title} className={`module-item relative flex gap-6 md:gap-8 ${isLast ? "" : "mb-10"}`}>
            <div className="node-line" />
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white font-display text-lg font-bold shadow-sm ${
                  isLast ? "bg-tertiary-fixed text-primary" : "bg-surface-container text-primary"
                }`}
              >
                {isLast ? <FiAward size={20} /> : i + 1}
              </div>
            </div>
            <div
              className={`hover-lift flex-grow rounded-2xl border p-6 md:p-8 ${
                isLast
                  ? "border-primary-container bg-primary-container text-white shadow-lg"
                  : "border-surface-variant bg-surface-container-lowest shadow-[var(--shadow-card)]"
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h3
                  className={`flex items-center gap-2 font-display text-[19px] font-semibold ${
                    isLast ? "text-white" : "text-primary"
                  }`}
                >
                  {m.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold ${
                    isLast ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  {m.meta}
                </span>
              </div>
              <p
                className={`text-[14.5px] leading-relaxed ${
                  isLast ? "text-primary-fixed-dim" : "text-on-surface-variant"
                }`}
              >
                {m.detail}
              </p>
              {isLast && (
                <>
                  <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-primary-container-deep">
                    <div className="h-full w-full bg-tertiary-fixed" />
                  </div>
                  <div className="mt-2 flex justify-end">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-tertiary-fixed">
                      <FiCheckCircle size={13} /> Graduation Readiness
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
LWI_EOF_4aac828eafab

mkdir -p "components/services"
cat > "components/services/FaqAccordion.tsx" << 'LWI_EOF_d542a2ae1f80'
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { ServiceFaq } from "@/types";

export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-2.5">
      {faqs.map((q, i) => {
        const open = openIndex === i;
        return (
          <div
            key={q.q}
            onClick={() => setOpenIndex(open ? null : i)}
            className="cursor-pointer rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-6.5 py-5.5"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="font-display text-[16.5px] font-semibold text-primary">
                {q.q}
              </div>
              <FiChevronDown
                className={`flex-shrink-0 text-primary-container transition-transform ${open ? "rotate-180" : ""}`}
                size={18}
              />
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="max-w-[720px] border-t border-surface-variant pt-3.5 mt-3.5 text-[15px] leading-relaxed text-on-surface-variant">
                    {q.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
LWI_EOF_d542a2ae1f80

mkdir -p "components/services"
cat > "components/services/PricingCard.tsx" << 'LWI_EOF_c7ac1d830810'
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
LWI_EOF_c7ac1d830810

mkdir -p "components/ui"
cat > "components/ui/Button.tsx" << 'LWI_EOF_7937822c960a'
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "lime" | "outline" | "outline-dark" | "dark" | "surface";
  className?: string;
};

export function Button({ href, children, variant = "lime", className }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-display text-[15.5px] font-bold transition-all duration-200 whitespace-nowrap active:scale-[0.98]";

  const variants: Record<string, string> = {
    lime: "bg-tertiary-fixed text-primary shadow-sm hover:bg-tertiary-fixed-dim hover:-translate-y-0.5",
    outline: "border border-white/34 text-white hover:bg-white/10 hover:border-white/60",
    "outline-dark": "border border-primary/30 text-primary hover:bg-primary/5",
    dark: "bg-primary text-on-primary hover:opacity-90 hover:-translate-y-0.5",
    surface:
      "bg-surface-container text-primary border border-primary/15 hover:bg-surface-container-low",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
LWI_EOF_7937822c960a

mkdir -p "components/ui"
cat > "components/ui/Kicker.tsx" << 'LWI_EOF_605accb4da04'
import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  tone?: "muted" | "lime" | "pill" | "pill-dark";
  className?: string;
};

export function Kicker({ children, tone = "muted", className }: KickerProps) {
  if (tone === "pill" || tone === "pill-dark") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest",
          tone === "pill"
            ? "border-outline-variant bg-surface-container-low text-primary"
            : "border-tertiary-fixed/30 bg-tertiary-fixed/12 text-tertiary-fixed",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed-dim" />
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "font-mono text-[11.5px] font-medium tracking-[0.2em]",
        tone === "lime" ? "text-tertiary-fixed" : "text-outline",
        className
      )}
    >
      {children}
    </div>
  );
}
LWI_EOF_605accb4da04

mkdir -p "components/ui"
cat > "components/ui/Logo.tsx" << 'LWI_EOF_4552e83668dc'
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const box = inverted ? "bg-tertiary-fixed" : "bg-primary-container";
  const path = inverted ? "#03251A" : "#C9E265";
  const stroke = inverted ? "#03251A" : "#FAF9F7";

  return (
    <div className={`grid h-10 w-10 place-items-center rounded-xl ${box}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 8L12 3.5L22 8L12 12.5L2 8Z" fill={path} />
        <path
          d="M6 10.2V15C6 15 8.4 17 12 17C15.6 17 18 15 18 15V10.2"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
LWI_EOF_4552e83668dc

mkdir -p "lib"
cat > "lib/data.ts" << 'LWI_EOF_7b663b2b86b5'
import type {
  NavItem,
  Service,
  CurriculumModule,
  Post,
  Testimonial,
  Article,
  CaseStudy,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "cohort",
    code: "CO-01",
    name: "Data Analytics Cohort Program",
    duration: "16 weeks",
    priceFrom: "from ₦450,000",
    kicker: "Mentor-led, project-based, capped at 25 learners.",
    blurb:
      "Our flagship 16-week track: data literacy and statistics through to Power BI dashboards and a defended capstone.",
    tools: ["Excel", "SQL", "Power Query", "Power BI", "Python"],
    hero: "Sixteen weeks from data literacy to a defended capstone.",
    sub: "Live mentor-led sessions twice weekly, graded weekly deliverables, and a capstone reviewed against a real analyst hiring rubric.",
    overview:
      "A full analyst apprenticeship compressed into sixteen weeks, descriptive through predictive analytics, taught on datasets that arrive broken.",
    overviewLong:
      "You will work the entire pipeline: profiling raw extracts, resolving grain and duplication, writing joins and window functions against a relational database, shaping an ETL flow in Power Query, modelling to a star schema, then building and narrating a Power BI report. Every week ends with a graded artefact and written feedback; every fortnight there is a live critique session where you defend your numbers out loud.",
    outcomes: [
      "Profile and clean a dirty extract, types, nulls, duplicates, referential gaps, and document every assumption you made",
      "Write multi-table SQL with joins, subqueries, CTEs and window functions, and reason about query grain",
      "Build repeatable ETL/ELT flows in Power Query and model to a star schema with conformed dimensions",
      "Write DAX measures that survive filter context, including time intelligence and ratio-to-parent patterns",
      "Apply descriptive statistics, correlation, and hypothesis testing correctly, and refuse causal claims the data cannot support",
      "Design a KPI framework and tell the story it supports in a five-minute stakeholder readout",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Module by module, week by week.",
    modules: [
      {
        meta: "WEEKS 1–2",
        title: "Data Literacy & Statistics",
        detail:
          "Levels of measurement, mean/median/variance, distributions and outliers, correlation vs. causation, sampling error, and framing an analytical question before touching a tool.",
      },
      {
        meta: "WEEKS 3–5",
        title: "Excel for Analysts",
        detail:
          "Structured tables, XLOOKUP and INDEX/MATCH, PivotTables and PivotCharts, Power Pivot and the data model, What-If analysis, and building an auditable workbook.",
      },
      {
        meta: "WEEKS 6–8",
        title: "SQL & Relational Databases",
        detail:
          "Schema design, all four join types, aggregation and HAVING, subqueries and CTEs, window functions, indexing basics, and query performance intuition.",
      },
      {
        meta: "WEEKS 9–10",
        title: "Power Query & ETL/ELT",
        detail:
          "Connectors, applied-step discipline, unpivot and merge patterns, incremental refresh, parameterised queries, and where transformation should actually live.",
      },
      {
        meta: "WEEKS 11–13",
        title: "Visualisation & Dashboards",
        detail:
          "Star-schema modelling, DAX measures and filter context, encoding choices and pre-attentive attributes, dashboard IA, and Tableau as a comparative build.",
      },
      {
        meta: "WEEKS 14–15",
        title: "Intro to Python for Analysis",
        detail:
          "pandas dataframes, groupby and merge, NumPy vectorisation, EDA workflow in Jupyter, and a first look at regression and classification framing.",
      },
      {
        meta: "WEEK 16",
        title: "Capstone & Defence",
        detail:
          "An end-to-end project on a real dataset: brief, clean, model, visualise, recommend, then defend it in a live panel review with written feedback.",
      },
    ],
    audience: [
      {
        who: "Career switchers",
        why: "Teachers, accountants, ops coordinators, anyone with strong reasoning who needs a portfolio and a vocabulary to enter analytics.",
      },
      {
        who: "Junior analysts stuck in Excel",
        why: "You already produce reports but cannot yet model, query, or defend the numbers when a stakeholder pushes back.",
      },
      {
        who: "Graduates with no data experience",
        why: "A structured, graded route from zero to interview-ready with genuine artefacts rather than certificates.",
      },
    ],
    pricingTitle: "Three ways to pay for Cohort 12.",
    pricing: [
      {
        tier: "EARLY BIRD",
        price: "₦396,000",
        note: "12% off · closes 24 August 2026",
        features: [
          "Full 16-week curriculum",
          "Twice-weekly live sessions",
          "Capstone panel defence",
          "Lifetime recording access",
        ],
      },
      {
        tier: "STANDARD",
        price: "₦450,000",
        note: "Paid in full at offer stage",
        features: [
          "Everything in Early Bird",
          "Portfolio review session",
          "Alumni Slack access",
          "Certificate of completion",
        ],
      },
      {
        tier: "INSTALMENT",
        price: "3 × ₦160,000",
        note: "Monthly, first payment before week 1",
        features: [
          "Everything in Standard",
          "No interest or fees",
          "Pause option once per cohort",
          "Payment plan agreement",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need any prior experience?",
        a: "No. Weeks 1–2 assume nothing beyond comfort with a computer. What we do assume is 10–12 hours a week, sessions plus deliverables, for sixteen weeks.",
      },
      {
        q: "What software do I need?",
        a: "A Windows machine (or Windows via Parallels/VM) for Power BI Desktop and Power Pivot, Microsoft 365, and a free PostgreSQL instance we help you set up in week 6.",
      },
      {
        q: "Are sessions recorded?",
        a: "Yes, every live session is recorded and available for the lifetime of your account. Attendance still matters: critique sessions are graded on participation.",
      },
      {
        q: "Is there job support?",
        a: "Cohort fees include one portfolio review and one mock interview. Deeper support lives in the Mentorship & Career Coaching track.",
      },
      {
        q: "What if I fall behind?",
        a: "You may defer once to the next cohort at no cost, provided you notify us before week 8. After that, a 40% re-entry fee applies.",
      },
    ],
    finalCta: "Cohort 12 starts 14 September. 25 seats.",
    finalCtaSub:
      "Apply now, screening call within three working days, offer within five.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "private",
    code: "PR-02",
    name: "Private 1-on-1 Classes",
    duration: "Flexible",
    priceFrom: "from ₦45,000/session",
    kicker: "A curriculum built around your role, your data, your calendar.",
    blurb:
      "One instructor, one learner, one syllabus written for the job you actually do.",
    tools: ["Excel", "SQL", "Power BI", "DAX", "pandas"],
    hero: "Your syllabus. Your dataset. Your schedule.",
    sub: "A diagnostic session establishes what you already know, then we write a learning path against the analyses your role genuinely requires.",
    overview:
      "Cohorts move at cohort pace. Private classes move at yours, and can be taught entirely on your own data.",
    overviewLong:
      "We start with a 45-minute diagnostic covering data literacy, spreadsheet fluency, SQL reasoning and visualisation judgement. From that we produce a written learning path with module order, target artefacts and a session count. Sessions are 90 minutes, live, and each ends with a hands-on task graded before the next one. Working professionals frequently bring their own extracts under NDA and leave with a working report instead of a toy exercise.",
    outcomes: [
      "A written, personalised learning path with modules sequenced to your role and current gaps",
      "Session-by-session artefacts built on your own data where confidentiality allows",
      "Deep-dive coverage on the specific areas you choose, DAX filter context, window functions, statistical testing",
      "Async review of homework and work-in-progress between sessions",
      "A final portfolio piece and a written skills assessment you can share with a manager",
    ],
    structureKicker: "HOW IT WORKS",
    structureTitle: "Four steps, then repeat.",
    modules: [
      {
        meta: "STEP 01",
        title: "Diagnostic session",
        detail:
          "A 45-minute skills audit across data literacy, Excel, SQL reasoning and visualisation judgement. Free, no obligation.",
      },
      {
        meta: "STEP 02",
        title: "Learning path design",
        detail:
          "A written plan: modules, order, target artefacts, estimated session count and the datasets we will use.",
      },
      {
        meta: "STEP 03",
        title: "90-minute live sessions",
        detail:
          "Screen-shared, hands-on, recorded. Concept, worked example, then you drive while the instructor watches and corrects.",
      },
      {
        meta: "STEP 04",
        title: "Graded task + async review",
        detail:
          "Every session ends with a task. It is reviewed in writing before the next session, so nothing compounds silently.",
      },
      {
        meta: "STEP 05",
        title: "Checkpoint every 6 sessions",
        detail:
          "A short assessment and a re-plan, accelerate, slow down, or change direction based on evidence rather than feel.",
      },
    ],
    audience: [
      {
        who: "Working professionals",
        why: "You need SQL and Power BI for the job you already have, and you need it around a full calendar.",
      },
      {
        who: "Career switchers on a deadline",
        why: "A cohort intake is months away; a private path can start next week and move twice as fast.",
      },
      {
        who: "Analysts with specific gaps",
        why: "You can build a dashboard but DAX filter context still bites. Buy six sessions, fix the gap, leave.",
      },
    ],
    pricingTitle: "Buy sessions, not subscriptions.",
    pricing: [
      {
        tier: "SINGLE SESSION",
        price: "₦55,000",
        note: "90 minutes · pay as you go",
        features: [
          "One 90-minute live session",
          "Session recording",
          "Written task and review",
          "Rescheduling with 24h notice",
        ],
      },
      {
        tier: "SIX-PACK",
        price: "₦285,000",
        note: "₦47,500 per session · most popular",
        features: [
          "Six 90-minute sessions",
          "Free diagnostic and learning path",
          "Async review between sessions",
          "Mid-point checkpoint assessment",
        ],
      },
      {
        tier: "TWELVE-PACK",
        price: "₦540,000",
        note: "₦45,000 per session · full track",
        features: [
          "Twelve sessions, full analyst path",
          "Portfolio piece and skills report",
          "Two checkpoint assessments",
          "Priority scheduling",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we use my company data?",
        a: "Yes, where your employer permits it. We sign an NDA on request and can work on anonymised or synthetic copies that preserve structure.",
      },
      {
        q: "How quickly can I start?",
        a: "Diagnostics are usually available within 48 hours, with first teaching sessions the same week subject to instructor availability.",
      },
      {
        q: "What is the rescheduling policy?",
        a: "Free with 24 hours notice. Inside 24 hours, the session is counted as delivered unless it is a first-time occurrence.",
      },
      {
        q: "Do sessions expire?",
        a: "Six-packs expire after four months, twelve-packs after eight. Extensions are granted for documented medical or work reasons.",
      },
    ],
    finalCta: "Book a free 45-minute diagnostic.",
    finalCtaSub:
      "No obligation, you leave with a written learning path either way.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "corporate",
    code: "CT-03",
    name: "Corporate Training",
    duration: "2–8 weeks",
    priceFrom: "custom quote",
    kicker: "Team upskilling built around your reporting stack.",
    blurb:
      "Curriculum designed against your actual data model, delivered on-site or remote to teams of 6–40.",
    tools: ["Excel", "Power BI", "SQL", "Governance", "DAX"],
    hero: "Your reporting team, measurably faster.",
    sub: "We audit how your team currently produces numbers, then design a training programme against your real schema, tools and reporting calendar.",
    overview:
      "Generic training produces generic results. We build the curriculum from your extracts, your KPI definitions and your reporting bottlenecks.",
    overviewLong:
      "Engagements open with a discovery workshop: which reports exist, who builds them, how long they take, and where the numbers stop reconciling. From there we design modules with your own tables and metric definitions as teaching material. Delivery is on-site or remote, in half-day or two-hour blocks that fit around month-end. Every engagement closes with a capability report, pre/post assessment scores, artefacts produced, and a prioritised list of what to fix next.",
    outcomes: [
      "A documented baseline of current team capability, per person and per skill area",
      "Shared KPI definitions and a metric dictionary the whole team agrees on",
      "Standardised Power Query and modelling patterns so reports stop being one-person dependencies",
      "Measurably reduced manual reporting hours, typically 30–60% on recurring reports",
      "A closing capability report with pre/post scores and a prioritised improvement roadmap",
    ],
    structureKicker: "SAMPLE MODULES",
    structureTitle: "Modules we most often deliver.",
    modules: [
      {
        meta: "MODULE A",
        title: "Excel for Business Analysts",
        detail:
          "Power Pivot, structured references, XLOOKUP, auditable workbook design, and eliminating the copy-paste refresh ritual.",
      },
      {
        meta: "MODULE B",
        title: "SQL for Reporting Teams",
        detail:
          "Joins, CTEs and window functions against your own schema, plus query hygiene and grain discipline for reconcilable reports.",
      },
      {
        meta: "MODULE C",
        title: "Dashboard Design for Decision-Makers",
        detail:
          "Encoding choices, chart selection, cognitive load, and designing for the decision rather than for the data available.",
      },
      {
        meta: "MODULE D",
        title: "Data-Driven Decision Making",
        detail:
          "For managers: reading variance honestly, correlation vs. causation, A/B test interpretation, and interrogating an analyst well.",
      },
      {
        meta: "MODULE E",
        title: "Power BI Semantic Modelling",
        detail:
          "Star schema, relationship cardinality, DAX filter context, row-level security and refresh governance.",
      },
      {
        meta: "MODULE F",
        title: "Data Quality & Governance",
        detail:
          "Profiling, validation rules, metric dictionaries, ownership models and lightweight documentation practice.",
      },
    ],
    audience: [
      {
        who: "Finance & FP&A teams",
        why: "Month-end takes four days because the workbook is a hand-built artefact. We industrialise it.",
      },
      {
        who: "Operations & supply chain",
        why: 'Multiple systems, no conformed dimensions, three versions of "on-time delivery". We reconcile the definitions.',
      },
      {
        who: "Leadership teams",
        why: "Executives who want to interrogate a dashboard properly rather than accept the first number shown.",
      },
    ],
    pricingTitle: "Priced per engagement, not per seat.",
    pricing: [
      {
        tier: "FOCUSED",
        price: "from ₦1.8M",
        note: "2 modules · up to 12 people · 2 weeks",
        features: [
          "Discovery workshop",
          "Two tailored modules",
          "Pre/post assessment",
          "Session recordings",
        ],
      },
      {
        tier: "PROGRAMME",
        price: "from ₦4.2M",
        note: "4–6 modules · up to 25 people · 6 weeks",
        features: [
          "Everything in Focused",
          "Curriculum built on your schema",
          "Metric dictionary workshop",
          "Capability report",
        ],
      },
      {
        tier: "PARTNERSHIP",
        price: "custom",
        note: "Multi-cohort, multi-quarter rollout",
        features: [
          "Everything in Programme",
          "Train-the-trainer track",
          "Quarterly capability reviews",
          "Named account lead",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you deliver on-site?",
        a: "Yes, on-site across Lagos and Abuja, and remote anywhere. Most clients mix: on-site for kickoff and critique, remote for the teaching blocks.",
      },
      {
        q: "Can you use our internal data?",
        a: "That is the point. We sign your NDA, work on anonymised extracts where required, and build every exercise on your real schema.",
      },
      {
        q: "How do you measure impact?",
        a: "A pre-assessment before module one, the same instrument after the final module, plus time-to-produce measurements on two nominated recurring reports.",
      },
      {
        q: "What team size works best?",
        a: "Twelve to twenty per cohort. Above twenty-five we split into parallel groups so hands-on time per person stays meaningful.",
      },
    ],
    finalCta: "Tell us what your reporting week looks like.",
    finalCtaSub:
      "We will send a scoped proposal with modules, timeline and pricing within five working days.",
    ctaLabel: "Request a Proposal",
  },
  {
    id: "kids",
    code: "KD-04",
    name: "Data Analytics for Kids",
    duration: "8 weeks",
    priceFrom: "from ₦85,000",
    kicker: "Ages 9–15. Charts, patterns and logical thinking.",
    blurb:
      "A playful, screen-light introduction to asking questions with data, spreadsheets, charts and pattern-spotting.",
    tools: ["Google Sheets", "Charts", "Logic", "Surveys"],
    hero: "Curiosity is already a data skill. We give it tools.",
    sub: "Eight weeks of surveys, tally charts, spreadsheets and pattern-hunting for ages 9–15 · taught by the same instructors, at the right altitude.",
    overview:
      "Kids already argue about which football team is better. We teach them to settle it with evidence.",
    overviewLong:
      "Sessions are 60 minutes, twice weekly, capped at twelve learners so every child gets called on. We run age-banded groups (9–11 and 12–15) with the same arc at different depths: collect data, organise it, chart it, notice something, say what you noticed and why you believe it. Every child finishes with a small data story of their own, favourite snacks in the class, rainfall in their city, screen time across a week, presented to parents in a final showcase.",
    outcomes: [
      "Design a simple survey and collect clean, usable responses",
      "Organise data in a spreadsheet, headers, rows, sorting, filtering and simple formulas",
      "Choose the right chart for a question and read one critically",
      'Spot patterns, outliers and "that looks wrong" moments in real numbers',
      "Present a short data story to an audience with a claim and evidence",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Eight weeks, one data story.",
    modules: [
      {
        meta: "WEEK 1",
        title: "What is data, really?",
        detail:
          "Counting things around us, tally charts, and the difference between a fact, a guess and an opinion.",
      },
      {
        meta: "WEEK 2",
        title: "Asking a good question",
        detail:
          "Turning curiosity into something answerable, and designing a short survey that people will actually finish.",
      },
      {
        meta: "WEEK 3",
        title: "Spreadsheets are grids of facts",
        detail:
          "Rows, columns, headers, typing tidy data, sorting and filtering in Google Sheets.",
      },
      {
        meta: "WEEK 4",
        title: "Formulas that do the work",
        detail:
          "SUM, AVERAGE, COUNT and MAX, and why a computer never gets bored of adding.",
      },
      {
        meta: "WEEK 5",
        title: "Pictures of numbers",
        detail:
          "Bar, line and pie charts, when each one helps and when it lies to you.",
      },
      {
        meta: "WEEK 6",
        title: "Finding the odd one out",
        detail:
          "Patterns, outliers and the useful question: does that number look believable?",
      },
      {
        meta: "WEEK 7",
        title: "Telling the story",
        detail: "Claim, evidence, reasoning, building the slides for their own data story.",
      },
      {
        meta: "WEEK 8",
        title: "Showcase day",
        detail:
          "Each learner presents their data story to parents and peers, with certificates for completion.",
      },
    ],
    audience: [
      {
        who: "Ages 9–11",
        why: "Curious counters. Heavy on physical activities, tally charts and colour, light on typing.",
      },
      {
        who: "Ages 12–15",
        why: "Ready for real spreadsheets, formulas and chart critique, and often their first taste of a career interest.",
      },
      {
        who: "Parents who want substance",
        why: "Not a coding-camp badge. A genuine thinking skill their child will use in every school subject.",
      },
    ],
    pricingTitle: "Per child, per 8-week term.",
    pricing: [
      {
        tier: "WEEKEND CLUB",
        price: "₦85,000",
        note: "Saturdays · 8 weeks · online",
        features: [
          "8 × 60-minute live sessions",
          "Workbook and activity pack",
          "Showcase day",
          "Completion certificate",
        ],
      },
      {
        tier: "HOLIDAY INTENSIVE",
        price: "₦110,000",
        note: "2 weeks · 4 sessions weekly",
        features: [
          "Same curriculum, condensed",
          "Small groups of 10",
          "Daily activity pack",
          "Showcase day",
        ],
      },
      {
        tier: "SIBLING PLACE",
        price: "₦68,000",
        note: "20% off second child",
        features: [
          "Full term for the second child",
          "Same group or age-matched",
          "Shared parent progress report",
          "Showcase day",
        ],
      },
    ],
    faqs: [
      {
        q: "How much screen time is involved?",
        a: "Roughly half. Weeks 1–2 are almost entirely off-screen, counting, tallying, drawing. Spreadsheet work builds up gradually from week 3.",
      },
      {
        q: "Is the class supervised and safe?",
        a: "All sessions are recorded, hosted in a locked room with waiting-room admission, and every instructor holds a current background check. Parents may observe any session.",
      },
      {
        q: "What does my child need?",
        a: "A laptop or tablet with a keyboard, stable internet, and a free Google account. We provide all datasets and worksheets.",
      },
      {
        q: "Will this help with school?",
        a: "Directly, the reasoning transfers to maths, science fair projects and geography. Parents most often report improved confidence reading charts in class.",
      },
    ],
    finalCta: "The next kids term starts 5 October.",
    finalCtaSub:
      "Twelve places per group. Sibling discount applies automatically at offer stage.",
    isKids: true,
    ctaLabel: "Enroll Now",
  },
  {
    id: "mentorship",
    code: "MC-05",
    name: "Mentorship & Career Coaching",
    duration: "4–12 weeks",
    priceFrom: "from ₦75,000",
    kicker: "Portfolio review, mock interviews, career pathing.",
    blurb:
      "For people who can already analyse but are not converting applications into offers.",
    tools: ["Portfolio", "SQL interviews", "Case studies", "Positioning"],
    hero: "You can do the work. Now get hired for it.",
    sub: "Portfolio teardowns, live SQL and case interviews, and honest positioning advice for data analyst and data scientist roles.",
    overview:
      "Most rejected candidates are not underskilled. They are unevidenced, mispositioned, or unrehearsed under pressure.",
    overviewLong:
      "We start by auditing what a hiring manager actually sees: your CV, your portfolio, your GitHub, your LinkedIn. Then we rebuild the evidence, projects reframed around business outcomes rather than tools used. From there it is repetition: live SQL screens under time pressure, take-home case debriefs, and behavioural rounds where you have to explain a decision you got wrong. Sessions are recorded so you can watch yourself and see what the interviewer sees.",
    outcomes: [
      "A CV and LinkedIn rewritten around outcomes and metrics rather than tool lists",
      "Two portfolio projects restructured into defensible business cases with clear recommendations",
      "Timed practice on live SQL screens, take-home cases and dashboard critiques",
      'A rehearsed, honest answer to every standard behavioural and "tell me about a mistake" prompt',
      "A target role map, analyst vs. BI developer vs. analytics engineer, with a realistic salary band",
    ],
    structureKicker: "THE PROGRAMME",
    structureTitle: "What each block covers.",
    modules: [
      {
        meta: "BLOCK 01",
        title: "Career diagnostic & role mapping",
        detail:
          "Where you actually fit, data analyst, BI developer, analytics engineer, product analyst, and what each one screens for.",
      },
      {
        meta: "BLOCK 02",
        title: "CV, LinkedIn & portfolio audit",
        detail:
          "Line-by-line rewrite around outcomes, metrics and scope. Screening filters explained honestly.",
      },
      {
        meta: "BLOCK 03",
        title: "Project teardown & rebuild",
        detail:
          "Two portfolio projects reframed: business question, method, limitation, recommendation. README and dashboard polish included.",
      },
      {
        meta: "BLOCK 04",
        title: "Technical interview drills",
        detail:
          "Timed SQL screens, Excel tasks, and a take-home case with written feedback against a real rubric.",
      },
      {
        meta: "BLOCK 05",
        title: "Behavioural & stakeholder rounds",
        detail:
          "STAR structure, explaining a wrong analysis, pushing back on a bad request, and salary conversations.",
      },
      {
        meta: "BLOCK 06",
        title: "Offer strategy & 90-day plan",
        detail:
          "Evaluating offers, negotiating bands, and what to deliver in the first ninety days so probation is uneventful.",
      },
    ],
    audience: [
      {
        who: "Bootcamp graduates",
        why: "You have projects but they read as coursework. We turn them into evidence.",
      },
      {
        who: "Internal movers",
        why: "You do analysis inside a non-analyst role and need to make it legible to a hiring panel.",
      },
      {
        who: "Stalled applicants",
        why: "Forty applications, three screens, no offers. Usually a positioning or rehearsal problem, not a skill one.",
      },
    ],
    pricingTitle: "Pick the depth you need.",
    pricing: [
      {
        tier: "PORTFOLIO REVIEW",
        price: "₦75,000",
        note: "One-off · 2 hours + written report",
        features: [
          "CV and LinkedIn audit",
          "One project teardown",
          "Written report with priorities",
          "Two-week follow-up email",
        ],
      },
      {
        tier: "INTERVIEW SPRINT",
        price: "₦195,000",
        note: "4 weeks · 6 sessions",
        features: [
          "Everything in Portfolio Review",
          "Three mock interviews recorded",
          "Timed SQL and case drills",
          "Rubric-scored feedback",
        ],
      },
      {
        tier: "FULL COACHING",
        price: "₦380,000",
        note: "12 weeks · 12 sessions",
        features: [
          "Everything in Interview Sprint",
          "Two projects rebuilt end-to-end",
          "Offer negotiation support",
          "90-day onboarding plan",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you guarantee a job?",
        a: "No, and be sceptical of anyone who does. We guarantee honest feedback, rubric-scored practice and a materially stronger application, the market decides the rest.",
      },
      {
        q: "Can you help with international roles?",
        a: "Yes. We coach for remote-first and relocation applications, including CV format differences and visa-sponsorship realities.",
      },
      {
        q: "Do I need to be an LWi graduate?",
        a: "No. Roughly half of coaching clients trained elsewhere or are self-taught.",
      },
      {
        q: "Are mock interviews recorded?",
        a: "Yes, and watching yourself back is usually the single most useful hour of the programme.",
      },
    ],
    finalCta: "Get your portfolio torn down properly.",
    finalCtaSub:
      "Book a review and receive a written report within three working days of the session.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "workshops",
    code: "WM-06",
    name: "Workshops & Masterclasses",
    duration: "1–2 days",
    priceFrom: "from ₦25,000",
    kicker: "Single-topic intensives. One skill, one sitting.",
    blurb:
      "Short, sharp sessions on one subject, from a Power BI dashboard in a day to a weekend SQL bootcamp.",
    tools: ["Power BI", "SQL", "DAX", "Storytelling", "pandas"],
    hero: "One topic. One sitting. Something built by the end.",
    sub: "Live, hands-on intensives for people who need a specific skill now, not a sixteen-week commitment.",
    overview:
      "Every workshop is build-along. You leave with a finished artefact, the dataset, and the file you made it in.",
    overviewLong:
      "Workshops run live on Saturdays or weekday evenings, capped at forty participants with a teaching assistant monitoring the chat for anyone stuck. Format is consistent: fifteen minutes of concept, then build alongside the instructor with checkpoints every twenty minutes. Recordings and all working files are yours permanently, and workshop fees are creditable against a cohort seat within ninety days.",
    outcomes: [
      "A completed, working artefact by the end of the session, not notes to act on later",
      "The dataset and finished file to reuse, adapt and show",
      "A recording you can rewatch while rebuilding it independently",
      "A clear map of what to learn next, and where it fits in the full analyst path",
      "Fee credit toward a cohort seat if you enrol within ninety days",
    ],
    structureKicker: "UPCOMING SCHEDULE",
    structureTitle: "What is running next.",
    modules: [
      {
        meta: "30 AUG",
        title: "Power BI Dashboard in a Day",
        detail:
          "Load, model to a star schema, write core DAX measures, and ship a three-page sales report. 09:00–16:00 WAT. ₦45,000.",
      },
      {
        meta: "6–7 SEP",
        title: "SQL for Beginners: Bootcamp Weekend",
        detail:
          "From SELECT to window functions across two days on a live PostgreSQL database. 10:00–15:00 both days. ₦55,000.",
      },
      {
        meta: "13 SEP",
        title: "Excel Power Query Deep Dive",
        detail:
          "Unpivot, merge, parameterise and schedule refreshes. Kill the monthly copy-paste ritual. 10:00–14:00. ₦35,000.",
      },
      {
        meta: "20 SEP",
        title: "Data Storytelling for Analysts",
        detail:
          "Structure a five-minute readout, choose encodings that survive scrutiny, and handle the hostile question. 10:00–14:00. ₦30,000.",
      },
      {
        meta: "27 SEP",
        title: "Statistics Without the Fear",
        detail:
          "Distributions, variance, hypothesis testing and A/B test reading, worked in Excel, no formulas memorised. 10:00–14:00. ₦30,000.",
      },
      {
        meta: "4 OCT",
        title: "Python & pandas for Excel Users",
        detail:
          "Every PivotTable move, rewritten as groupby. A gentle first day in Jupyter. 10:00–15:00. ₦40,000.",
      },
    ],
    audience: [
      {
        who: "Busy professionals",
        why: "A specific gap to close before Monday, and no capacity for a multi-month programme.",
      },
      {
        who: "Cohort-curious learners",
        why: "Try our teaching for a day. Fees credit toward a cohort seat within ninety days.",
      },
      {
        who: "Small teams",
        why: "Book three or more seats and we will tailor the sample dataset to your industry at no extra cost.",
      },
    ],
    pricingTitle: "Per session, or bundled.",
    pricing: [
      {
        tier: "SINGLE WORKSHOP",
        price: "from ₦25,000",
        note: "Half-day and full-day rates vary",
        features: [
          "Live hands-on session",
          "All datasets and files",
          "Permanent recording access",
          "Certificate of attendance",
        ],
      },
      {
        tier: "THREE-PACK",
        price: "₦95,000",
        note: "Any three sessions · 15% off",
        features: [
          "Three workshops of your choice",
          "Valid twelve months",
          "Transferable to a colleague",
          "Permanent recordings",
        ],
      },
      {
        tier: "TEAM SEATS",
        price: "from ₦20,000/seat",
        note: "Five seats or more",
        features: [
          "Volume rate per seat",
          "Industry-matched dataset",
          "Private Q&A block",
          "Consolidated invoicing",
        ],
      },
    ],
    faqs: [
      {
        q: "Are workshops beginner-friendly?",
        a: 'Each listing states its prerequisite. "Dashboard in a Day" assumes basic Excel; the SQL weekend assumes nothing at all.',
      },
      {
        q: "Can I get a recording if I miss it?",
        a: "Yes, every registrant receives the recording and files regardless of attendance, available permanently.",
      },
      {
        q: "Does the fee count toward a cohort?",
        a: "Yes. One hundred percent of workshop fees paid within ninety days of enrolling are credited against your cohort seat.",
      },
      {
        q: "Do you run private team workshops?",
        a: "Regularly. Five seats or more unlocks a private run with your industry dataset, request it through the contact page.",
      },
    ],
    finalCta: "Next up: Power BI Dashboard in a Day, 30 August.",
    finalCtaSub: "Forty seats, live, with all files and the recording yours to keep.",
    ctaLabel: "Enroll Now",
  },
];

export const CURRICULUM: CurriculumModule[] = [
  {
    key: "literacy",
    label: "Data Literacy & Statistics",
    weeks: "WEEKS 1–2",
    title: "Data Literacy & Statistics",
    detail:
      "Before any tool: what a variable is, how distributions behave, why the mean lies when the data is skewed, and how to frame a question that data can actually answer.",
    tools: ["Descriptive stats", "Hypothesis testing", "Sampling", "Correlation"],
    outcomes: [
      "Choose mean, median or mode defensibly for a given distribution",
      "Read variance and standard deviation as decision information",
      "Distinguish correlation from causation in a stakeholder conversation",
      "Frame a vague business question as a testable analytical one",
    ],
  },
  {
    key: "excel",
    label: "Excel",
    weeks: "WEEKS 3–5",
    title: "Excel for Analysts",
    detail:
      "Excel treated as a modelling tool, not a notepad: structured tables, lookup logic that does not break, PivotTables, and Power Pivot for datasets past a million rows.",
    tools: ["PivotTables", "XLOOKUP", "Power Pivot", "What-If"],
    outcomes: [
      "Build auditable workbooks with structured tables and named ranges",
      "Replace fragile VLOOKUP chains with XLOOKUP and INDEX/MATCH",
      "Summarise millions of rows through the Power Pivot data model",
      "Design a KPI sheet a finance lead can review without asking you",
    ],
  },
  {
    key: "sql",
    label: "SQL",
    weeks: "WEEKS 6–8",
    title: "SQL & Relational Databases",
    detail:
      "The core analyst language. Schema reading, joins that preserve grain, aggregation, subqueries and CTEs, and window functions for ranking and running totals.",
    tools: ["Joins", "CTEs", "Window functions", "PostgreSQL"],
    outcomes: [
      "Read an unfamiliar schema and identify the grain of every table",
      "Write inner, left, right and full joins knowing what each will duplicate",
      "Compose CTEs and subqueries into readable multi-step logic",
      "Use window functions for ranking, running totals and period comparison",
    ],
  },
  {
    key: "etl",
    label: "Power Query / ETL",
    weeks: "WEEKS 9–10",
    title: "Power Query & ETL/ELT",
    detail:
      "Turning a manual monthly ritual into a refreshable pipeline: connectors, applied steps, unpivot and merge patterns, parameters and incremental refresh.",
    tools: ["Power Query", "M", "Unpivot", "Incremental refresh"],
    outcomes: [
      "Build a refreshable pipeline from messy multi-sheet source files",
      "Apply unpivot, merge and append patterns to normalise shapes",
      "Parameterise queries for environment and date-range changes",
      "Decide correctly whether logic belongs in ETL, the model, or the report",
    ],
  },
  {
    key: "viz",
    label: "Visualisation & Dashboards",
    weeks: "WEEKS 11–13",
    title: "Data Visualisation & Dashboards",
    detail:
      "Star-schema modelling, DAX that survives filter context, and the visual grammar that decides whether a dashboard gets used or ignored.",
    tools: ["Power BI", "DAX", "Tableau", "Star schema"],
    outcomes: [
      "Model to a star schema with correct relationship cardinality",
      "Write DAX measures using CALCULATE and time intelligence correctly",
      "Choose encodings on perceptual grounds, not aesthetic preference",
      "Structure a dashboard around the decision it serves",
    ],
  },
  {
    key: "python",
    label: "Python & Intro ML",
    weeks: "WEEKS 14–16",
    title: "Python for Analysis & Intro ML",
    detail:
      "pandas as the analyst escape hatch, a disciplined EDA workflow, and enough machine learning framing to talk about classification, regression and clustering honestly.",
    tools: ["pandas", "NumPy", "Jupyter", "scikit-learn"],
    outcomes: [
      "Load, reshape and merge dataframes with pandas",
      "Run a structured EDA, distributions, missingness, relationships",
      "Frame a problem as regression, classification or clustering",
      "Read a model evaluation metric without overclaiming",
    ],
  },
];

export const POSTS: Post[] = [
  {
    id: "p1",
    category: "SQL Tutorials",
    title: "Window functions are the SQL skill that gets you promoted",
    excerpt:
      "RANK, LAG and running totals, and the moment a GROUP BY stops being enough for the question you were asked.",
    author: "Ikechukwu Emeka",
    date: "18 Aug 2026",
    readTime: "9 min read",
    imageNote: "COVER · SQL WINDOW FN",
  },
  {
    id: "p2",
    category: "Power BI",
    title: "Your DAX measure is wrong because you misread filter context",
    excerpt:
      "CALCULATE does not filter your table. It modifies the filter context of the evaluation, a distinction that explains most broken measures.",
    author: "Ikechukwu Emeka",
    date: "11 Aug 2026",
    readTime: "12 min read",
    imageNote: "COVER · DAX CONTEXT",
  },
  {
    id: "p3",
    category: "Excel Tips",
    title: "Stop using VLOOKUP. Here is the migration path.",
    excerpt:
      "XLOOKUP, INDEX/MATCH and the Power Pivot data model, when each is right, and how to convert a fragile workbook without breaking month-end.",
    author: "Adaeze Nwosu",
    date: "4 Aug 2026",
    readTime: "7 min read",
    imageNote: "COVER · XLOOKUP",
  },
  {
    id: "p4",
    category: "Statistics",
    title: "Correlation vs. causation, explained with a real sales dataset",
    excerpt:
      "Ice cream and drowning is a tired example. Here is a confounded marketing spend analysis that nearly shipped.",
    author: "Ikechukwu Emeka",
    date: "28 Jul 2026",
    readTime: "10 min read",
    imageNote: "COVER · CONFOUNDING",
  },
  {
    id: "p5",
    category: "Data Storytelling",
    title: "The five-minute readout: a structure that survives executives",
    excerpt:
      "Lead with the decision, not the methodology. A repeatable outline for presenting analysis to people with no patience.",
    author: "Adaeze Nwosu",
    date: "21 Jul 2026",
    readTime: "6 min read",
    imageNote: "COVER · READOUT",
  },
  {
    id: "p6",
    category: "Career Advice",
    title: "What a hiring manager actually looks for in a portfolio",
    excerpt:
      "Not eight Titanic notebooks. Two projects with a business question, a documented limitation and a recommendation.",
    author: "Ikechukwu Emeka",
    date: "14 Jul 2026",
    readTime: "8 min read",
    imageNote: "COVER · PORTFOLIO",
  },
  {
    id: "p7",
    category: "Python",
    title: "Every PivotTable move, rewritten as pandas groupby",
    excerpt:
      "A side-by-side translation table for Excel users making their first move into pandas, plus the three gotchas that cause panic.",
    author: "Chidi Balogun",
    date: "7 Jul 2026",
    readTime: "11 min read",
    imageNote: "COVER · PANDAS",
  },
  {
    id: "p8",
    category: "Student Spotlights",
    title: "From secondary school teacher to BI analyst in eleven months",
    excerpt:
      "Ngozi took Cohort 8 while teaching full-time. Her capstone on school attendance data got her the interview.",
    author: "LWi Team",
    date: "30 Jun 2026",
    readTime: "5 min read",
    imageNote: "COVER · SPOTLIGHT",
  },
  {
    id: "p9",
    category: "Industry Trends",
    title: "Do analysts need dbt in 2026? An honest answer.",
    excerpt:
      "The analytics engineering stack keeps expanding. What is genuinely load-bearing for a junior analyst, and what is resume theatre.",
    author: "Chidi Balogun",
    date: "23 Jun 2026",
    readTime: "9 min read",
    imageNote: "COVER · MODERN STACK",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "NA",
    name: "Ngozi Adeleke",
    role: "BI Analyst, HealthTrack",
    program: "Cohort Program",
    before: "Secondary school teacher",
    after: "BI Analyst",
    quote:
      "The capstone was the interview. I walked in with a school attendance dashboard, explained the grain problem I hit in week nine, and the hiring manager stopped asking screening questions.",
  },
  {
    initials: "TO",
    name: "Tunde Oyelaran",
    role: "Data Analyst, Paystack-adjacent fintech",
    program: "Cohort Program",
    before: "Bank operations officer",
    after: "Data Analyst",
    quote:
      "I had used Excel for six years and thought I was good. Week three broke that comfortably. By week eight I was writing CTEs against production replicas at work.",
  },
  {
    initials: "AM",
    name: "Amaka Mbeki",
    role: "Reporting Lead, LogiFleet",
    program: "Private 1-on-1",
    before: "Manual monthly reports",
    after: "Automated pipeline",
    quote:
      "Six private sessions on Power Query. Month-end went from three days of copy-paste to a refresh button. That alone paid for the whole thing.",
  },
  {
    initials: "SK",
    name: "Samuel Kalu",
    role: "Analytics Engineer, Sabi",
    program: "Mentorship",
    before: "40 applications, 0 offers",
    after: "Two competing offers",
    quote:
      "My skills were fine. My portfolio read like coursework. The teardown session rebuilt both projects around business outcomes and the callbacks started within two weeks.",
  },
  {
    initials: "FO",
    name: "Funmi Okonjo",
    role: "FP&A Manager, Ardova",
    program: "Corporate Training",
    before: "Four-day month-end",
    after: "Same-day close reporting",
    quote:
      'They trained on our actual schema, not a sample database. The metric dictionary workshop ended a two-year argument about what counts as an active account.',
  },
  {
    initials: "DE",
    name: "David Eze",
    role: "Product Analyst, Moniepoint-scale startup",
    program: "Workshops",
    before: "Dashboard-curious PM",
    after: "Ships own reports",
    quote:
      "Dashboard in a Day did exactly what it says. I left with a working three-page report and stopped filing tickets for numbers I could pull myself.",
  },
  {
    initials: "BA",
    name: "Blessing Aluko",
    role: "Junior Data Analyst, Renmoney",
    program: "Cohort Program",
    before: "Unemployed graduate",
    after: "Junior Data Analyst",
    quote:
      "The weekly graded deliverables were brutal and exactly what I needed. Nobody let me hand in an unlabelled chart twice.",
  },
  {
    initials: "KI",
    name: "Kemi Ige",
    role: "Parent of two LWi Kids graduates",
    program: "Kids Program",
    before: "Chart-shy 11-year-old",
    after: "Won her science fair",
    quote:
      "My daughter presented rainfall data at showcase day with a claim and evidence. Her science fair project the next term used the same structure and won.",
  },
];

export const ARTICLE: Article = {
  id: "p1",
  category: "SQL Tutorials",
  title: "Window functions are the SQL skill that gets you promoted",
  author: "Ikechukwu Emeka",
  date: "18 August 2026",
  readTime: "9 min read",
  body: [
    {
      isParagraph: true,
      text: "Most analysts stop learning SQL the moment GROUP BY stops throwing errors. That is exactly the point where the interesting questions start, running totals, rankings within a category, comparisons against the previous period, and GROUP BY quietly cannot answer any of them without collapsing rows you still need.",
    },
    {
      isHeading: true,
      text: "The problem GROUP BY cannot solve",
    },
    {
      isParagraph: true,
      text: "Say a sales manager asks for each region's top three products by revenue, alongside every individual transaction. A GROUP BY aggregates the rows away, you lose the transaction grain the moment you collapse to region and product. A window function keeps every row and adds a calculation computed across a related set of rows, which is precisely the shape most real requests take.",
    },
    {
      isQuote: true,
      text: "A window function does not reduce your rows. It adds a lens over them.",
    },
    {
      isHeading: true,
      text: "RANK, LAG and running totals",
    },
    {
      isParagraph: true,
      text: "Three patterns cover most of what shows up in a reporting job: ranking within a partition, comparing a row to the one before it, and accumulating a total as you move through ordered rows. Once these are automatic, most 'clever' analytics requests turn out to be a five-line query.",
    },
    {
      isCode: true,
      text: "SELECT\n  region,\n  product,\n  revenue,\n  RANK() OVER (\n    PARTITION BY region\n    ORDER BY revenue DESC\n  ) AS revenue_rank\nFROM sales;",
    },
    {
      isParagraph: true,
      text: "RANK() PARTITION BY region resets the ranking for every region, so you get a clean top-N per region without a self-join or a subquery per group. Swap RANK for ROW_NUMBER when ties should not share a rank, or DENSE_RANK when a tie should not skip the next number.",
    },
    {
      isHeading: true,
      text: "Comparing a row to the one before it",
    },
    {
      isParagraph: true,
      text: "LAG and LEAD let you reach into an adjacent row without a self-join. Month-over-month change, day-over-day churn, or the gap between a customer's consecutive orders are all one LAG call ordered correctly within a partition.",
    },
    {
      isCode: true,
      text: "SELECT\n  month,\n  revenue,\n  revenue - LAG(revenue) OVER (ORDER BY month) AS mom_change\nFROM monthly_revenue;",
    },
    {
      isHeading: true,
      text: "Why this gets you promoted",
    },
    {
      isParagraph: true,
      text: "The analysts who get pulled into harder problems are the ones whose queries do not need three CTEs and a spreadsheet pivot to answer a ranking or trend question. Window functions collapse that entire workflow into the query itself, and a query that answers the question directly, in one read, is the kind of work that gets noticed in a code review.",
    },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthtrack-attendance",
    category: "Cohort Capstone",
    title: "A school attendance dashboard that became a job offer",
    client: "Ngozi Adeleke, Cohort 8 graduate",
    program: "Data Analytics Cohort Program",
    summary:
      "A capstone project analysing three years of school attendance records, cleaned, modelled and shipped as a Power BI dashboard that ended up carrying the interview.",
    challenge:
      "Raw attendance registers arrived as inconsistent monthly spreadsheets, duplicated student IDs, and no shared definition of a chronic absence.",
    approach:
      "Profiled and reconciled the source files in Power Query, built a star schema with a clean student dimension, and defined a single chronic-absence metric the whole model could trust.",
    tools: ["Power Query", "Power BI", "DAX", "Star schema"],
    results: [
      { label: "Data sources reconciled", value: "14" },
      { label: "Dashboard build time", value: "3 weeks" },
      { label: "Outcome", value: "Hired as BI Analyst" },
    ],
    imageNote: "CASE STUDY - ATTENDANCE DASHBOARD",
  },
  {
    id: "logifleet-power-query",
    category: "Private 1-on-1",
    title: "Turning a three-day month-end into a refresh button",
    client: "Amaka Mbeki, Reporting Lead at LogiFleet",
    program: "Private 1-on-1 Classes",
    summary:
      "Six private sessions rebuilt a manual monthly reporting ritual into a single refreshable Power Query pipeline pulling from five source systems.",
    challenge:
      "Every month-end meant three full days of copy-pasting exports from five separate systems into one master workbook, with no audit trail.",
    approach:
      "Mapped every source file's shape, built parameterised queries per system, and merged them into one governed pipeline with documented transformation steps.",
    tools: ["Power Query", "M", "Excel", "Data modelling"],
    results: [
      { label: "Month-end time", value: "3 days to 20 min" },
      { label: "Source systems unified", value: "5" },
      { label: "Sessions delivered", value: "6" },
    ],
    imageNote: "CASE STUDY - REPORTING PIPELINE",
  },
  {
    id: "ardova-metric-dictionary",
    category: "Corporate Training",
    title: "Ending a two-year argument over what counts as active",
    client: "Funmi Okonjo, FP&A Manager at Ardova",
    program: "Corporate Training",
    summary:
      "A six-week engagement trained Ardova's reporting team on their own schema and produced a shared metric dictionary that finally settled a long-running definitional dispute.",
    challenge:
      "Finance and marketing had been reporting two different active-account numbers for two years, each defensible, neither reconcilable with the other.",
    approach:
      "Ran a discovery workshop to trace both definitions to their source tables, then facilitated a metric dictionary workshop that produced one documented, agreed definition.",
    tools: ["SQL", "Power BI", "Governance", "DAX"],
    results: [
      { label: "Reporting hours saved", value: "42% monthly" },
      { label: "Team members trained", value: "18" },
      { label: "Metric definitions agreed", value: "1 dictionary" },
    ],
    imageNote: "CASE STUDY - METRIC DICTIONARY",
  },
  {
    id: "sabi-portfolio-teardown",
    category: "Mentorship",
    title: "From forty rejections to two competing offers",
    client: "Samuel Kalu, Analytics Engineer at Sabi",
    program: "Mentorship & Career Coaching",
    summary:
      "A portfolio teardown rebuilt two coursework-style projects into defensible business cases, and the callbacks started within two weeks.",
    challenge:
      "Forty applications and zero offers despite genuinely solid SQL and modelling skills. The portfolio read like classroom exercises, not evidence.",
    approach:
      "Rewrote both projects around a business question, a documented limitation, and a clear recommendation, then rehearsed the story behind each decision.",
    tools: ["Portfolio strategy", "SQL interviews", "Positioning"],
    results: [
      { label: "Callback time", value: "2 weeks" },
      { label: "Competing offers", value: "2" },
      { label: "Projects rebuilt", value: "2" },
    ],
    imageNote: "CASE STUDY - PORTFOLIO REBUILD",
  },
];
LWI_EOF_7b663b2b86b5

mkdir -p "lib"
cat > "lib/utils.ts" << 'LWI_EOF_645aafd0caf1'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
LWI_EOF_645aafd0caf1

cat > "next.config.ts" << 'LWI_EOF_c2472e718cd3'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
LWI_EOF_c2472e718cd3

cat > "package.json" << 'LWI_EOF_b34b4d918ed0'
{
  "name": "learn-with-ikay",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.17",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.3.0",
    "recharts": "^2.13.3",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.9.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.14.0",
    "eslint-config-next": "^16.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.3"
  }
}
LWI_EOF_b34b4d918ed0

cat > "postcss.config.mjs" << 'LWI_EOF_056c5cfa5b2c'
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
LWI_EOF_056c5cfa5b2c

cat > "tsconfig.json" << 'LWI_EOF_3fa447c59c27'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
LWI_EOF_3fa447c59c27

mkdir -p "types"
cat > "types/index.ts" << 'LWI_EOF_b05bde14e7ad'
export type NavItem = {
  label: string;
  href: string;
};

export type GlanceItem = {
  k: string;
  v: string;
};

export type Module = {
  meta: string;
  title: string;
  detail: string;
};

export type Audience = {
  who: string;
  why: string;
};

export type PricingTier = {
  tier: string;
  price: string;
  note: string;
  features: string[];
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  id: string;
  code: string;
  name: string;
  duration: string;
  priceFrom: string;
  kicker: string;
  blurb: string;
  tools: string[];
  hero: string;
  sub: string;
  overview: string;
  overviewLong: string;
  outcomes: string[];
  structureKicker: string;
  structureTitle: string;
  modules: Module[];
  audience: Audience[];
  pricingTitle: string;
  pricing: PricingTier[];
  faqs: ServiceFaq[];
  finalCta: string;
  finalCtaSub: string;
  isKids?: boolean;
  ctaLabel: string;
};

export type CurriculumModule = {
  key: string;
  label: string;
  weeks: string;
  title: string;
  detail: string;
  tools: string[];
  outcomes: string[];
};

export type Post = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageNote: string;
};

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  program: string;
  before: string;
  after: string;
  quote: string;
};

export type ArticleBlock = {
  isHeading?: boolean;
  isParagraph?: boolean;
  isQuote?: boolean;
  isCode?: boolean;
  isImage?: boolean;
  text: string;
  caption?: string;
};

export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  client: string;
  program: string;
  summary: string;
  challenge: string;
  approach: string;
  tools: string[];
  results: { label: string; value: string }[];
  imageNote: string;
};

export type Article = {

  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  body: ArticleBlock[];
};
LWI_EOF_b05bde14e7ad

echo "All files created."
echo "Run: npm install (if packages are not yet installed) then npm run dev"