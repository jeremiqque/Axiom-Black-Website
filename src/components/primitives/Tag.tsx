import { cn } from "@/lib/cn";
import { accentText, type Accent } from "@/lib/brand";

const border: Record<Accent, string> = {
  blue: "border-ab-blue/50",
  orange: "border-ab-orange/50",
  green: "border-ab-green/50",
  none: "border-ab-line-2",
};

export default function Tag({
  children,
  accent = "none",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-ab-pill border px-[11px] py-[5px]",
        "text-ab-fine font-bold uppercase tracking-[0.12em]",
        border[accent],
        accentText[accent],
        className
      )}
    >
      {children}
    </span>
  );
}
