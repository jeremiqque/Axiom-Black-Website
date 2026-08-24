"use client";

import Link from "next/link";
import { useState } from "react";
import { accentBorderRGBA, accentText, type Accent } from "@/lib/brand";
import { cn } from "@/lib/cn";

export default function ServiceCard({
  name,
  descriptor,
  href,
  accent = "none",
  icon,
}: {
  name: string;
  descriptor: string;
  href: string;
  accent?: Accent;
  icon?: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "group flex min-h-[230px] flex-col rounded-ab-card border bg-ab-ink-panel p-7 pb-6",
        "transition-transform duration-200 will-change-transform hover:-translate-y-1"
      )}
      style={{ borderColor: hover ? accentBorderRGBA[accent] : "#1e1e1e" }}
    >
      <div className="mb-6 text-ab-silver">
        {icon ?? (
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.4" />
            <path d="M6 19 H32 M19 6 V32" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        )}
      </div>
      <h3 className="text-[17.5px] font-bold text-ab-white">{name}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ab-muted">{descriptor}</p>
      <span className={cn("mt-auto pt-5 inline-flex items-center gap-1.5 text-ab-small font-medium", accentText[accent])}>
        Explore
        <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
      </span>
    </Link>
  );
}
