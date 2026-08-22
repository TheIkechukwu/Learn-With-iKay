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
