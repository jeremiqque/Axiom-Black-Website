import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
};

/** Filled Light Button — the single bright block on a dark page. */
export default function Button({ href, children, className, withArrow = true }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-ab-control bg-ab-white px-[22px] py-3",
        "text-ab-body font-bold text-ab-black transition-[background-color,transform]",
        "hover:bg-[#e8e8e8] active:scale-[0.97]",
        className
      )}
    >
      {children}
      {withArrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
      )}
    </Link>
  );
}
