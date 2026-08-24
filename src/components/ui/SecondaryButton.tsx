import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

/** White secondary button — cal.com light surface treatment. */
export default function SecondaryButton({
  href,
  children,
  className,
  withArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={cn("ab-btn-white group", className)}>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex h-6 w-6 items-center justify-center border border-ink/15 rounded-[7px] transition-transform group-hover:translate-x-[2px]">
          <Icon icon={ArrowRight01Icon} size={15} className="text-ink" strokeWidth={2} />
        </span>
      )}
    </Link>
  );
}
