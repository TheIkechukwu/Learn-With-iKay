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
