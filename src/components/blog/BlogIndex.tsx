"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import CategoryTag from "./CategoryTag";
import BlogCard from "./BlogCard";
import { blogCategories, posts, type BlogCategory } from "@/content/blog";

type Filter = "All" | BlogCategory;

export default function BlogIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const [featured, ...rest] = filtered;
  const pills: Filter[] = ["All", ...blogCategories];

  return (
    <div>
      {/* filter pills */}
      <div className="flex flex-wrap gap-3">
        {pills.map((p) => {
          const active = p === filter;
          return (
            <button
              key={p}
              type="button"
              onClick={() => setFilter(p)}
              className={`px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                active ? "bg-surface-2 text-ink ring-1 ring-line" : "bg-ink text-white hover:bg-black"
              }`}
            >
              {p === "All" ? "All" : p}
            </button>
          );
        })}
      </div>

      {/* featured */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-8 block border border-line bg-surface-3 transition-colors hover:border-ink/20"
        >
          <div className="relative aspect-[21/9] w-full bg-[#c2c2c2]">
            <CategoryTag category={featured.category} className="absolute left-0 top-0" />
          </div>
          <div className="p-7 md:p-9">
            <p className="text-[13px] text-muted">
              {featured.date} <span className="mx-1.5">·</span> {featured.readTime}
            </p>
            <h2 className="mt-3 max-w-[26ch] text-[clamp(24px,3vw,32px)] font-medium leading-tight tracking-[-0.02em] text-ink">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-body">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
              Read more
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] border border-ink/15 transition-transform group-hover:translate-x-[2px]">
                <Icon icon={ArrowRight01Icon} size={15} className="text-ink" strokeWidth={2} />
              </span>
            </span>
          </div>
        </Link>
      )}

      {/* grid */}
      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="mt-10 text-[15px] text-muted">No posts in this category yet.</p>
      )}
    </div>
  );
}
