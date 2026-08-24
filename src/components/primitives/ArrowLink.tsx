import Link from "next/link";
import { cn } from "@/lib/cn";
import { accentText, type Accent } from "@/lib/brand";

export default function ArrowLink({
  href,
  children,
  accent = "none",
  className,
}: {
  href: string;
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-ab-small font-medium",
        accentText[accent],
        className
      )}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
    </Link>
  );
}
