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
