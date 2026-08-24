import Link from "next/link";
import CategoryTag from "./CategoryTag";
import type { BlogPost } from "@/content/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block border border-line bg-surface-3 transition-colors hover:border-ink/20">
      <div className="relative aspect-[16/10] bg-[#d6d6d6]">
        <CategoryTag category={post.category} className="absolute left-0 top-0" />
      </div>
      <div className="p-6">
        <p className="text-[13px] text-muted">
          {post.date} <span className="mx-1.5">·</span> {post.readTime}
        </p>
        <h3 className="mt-3 text-[19px] font-medium leading-snug text-ink">{post.title}</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">{post.excerpt}</p>
      </div>
    </Link>
  );
}
