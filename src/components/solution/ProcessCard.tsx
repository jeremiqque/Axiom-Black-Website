import { cn } from "@/lib/cn";

export default function ProcessCard({
  n,
  title,
  body,
  side = "left",
}: {
  n: string;
  title: string;
  body: string;
  side?: "left" | "right";
}) {
  return (
    <div className="relative min-h-[340px] border border-line bg-surface-2">
      <span
        className={cn(
          "absolute top-0 flex h-14 min-w-14 items-center justify-center bg-ink px-3 font-mono text-[22px] tracking-tight text-white",
          side === "left" ? "left-0" : "right-0"
        )}
      >
        {n}
      </span>
      <div className="absolute inset-x-0 bottom-0 px-9 pb-8">
        <p className="text-[18px] font-medium text-ink">{title}</p>
        <p className="mt-1.5 max-w-[46ch] text-[15px] leading-relaxed text-body">{body}</p>
      </div>
    </div>
  );
}
