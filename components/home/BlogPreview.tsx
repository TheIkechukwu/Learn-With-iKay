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
