import Link from "next/link";
import { cn } from "@/lib/cn";

export default function GhostButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-ab-control border border-[#3a3a3a] px-[22px] py-3",
        "text-ab-body font-bold text-ab-white transition-colors hover:border-[#6e6e6e]",
        className
      )}
    >
      {children}
    </Link>
  );
}
