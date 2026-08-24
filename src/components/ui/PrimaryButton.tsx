import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Icon from "./Icon";
import { cn } from "@/lib/cn";

export default function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("ab-btn group", className)}>
      <span>{children}</span>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-none border border-white/40 rounded-[7px] transition-transform group-hover:translate-x-[2px]">
        <Icon icon={ArrowRight01Icon} size={15} className="text-white" strokeWidth={2} />
      </span>
    </Link>
  );
}
