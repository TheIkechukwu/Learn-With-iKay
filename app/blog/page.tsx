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
