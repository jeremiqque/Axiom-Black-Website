import { categoryColor, type BlogCategory } from "@/content/blog";

export default function CategoryTag({
  category,
  className,
}: {
  category: BlogCategory;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white ${className ?? ""}`}
      style={{ background: categoryColor[category] }}
    >
      {category}
    </span>
  );
}
