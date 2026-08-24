import { cn } from "@/lib/cn";
import { accentDot, type Accent } from "@/lib/brand";

export default function Eyebrow({
  children,
  accent = "none",
  pulse = false,
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("ab-eyebrow flex items-center gap-2", className)}>
      <span
        className={cn(
          "inline-block h-1.5 w-1.5 rounded-full",
          accentDot[accent],
          pulse && "motion-safe:animate-pulse"
        )}
      />
      {children}
    </p>
  );
}
