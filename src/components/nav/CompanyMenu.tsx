import Link from "next/link";
import { UserGroupIcon, Briefcase01Icon, BookOpen01Icon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import Icon from "@/components/ui/Icon";

const items: { name: string; href: string; descriptor: string; icon: IconSvgElement }[] = [
  { name: "About", href: "/about", descriptor: "Our story, GROW framework, and leadership", icon: UserGroupIcon },
  { name: "Career", href: "/careers", descriptor: "Open roles and how we hire", icon: Briefcase01Icon },
  { name: "Blog", href: "/blog", descriptor: "Notes from the field and the codebase", icon: BookOpen01Icon },
];

/** Company mega-menu dropdown (light, single column) — mirrors the Solutions menu. */
export default function CompanyMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-[320px] max-w-[92vw] overflow-hidden rounded-[18px] border border-line bg-white p-3 shadow-[0_24px_64px_rgba(18,18,18,0.12)]">
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              onClick={onNavigate}
              className="group/item flex items-start gap-3.5 rounded-[12px] px-3 py-2.5 transition-colors hover:bg-surface-2"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-ink text-white">
                <Icon icon={it.icon} size={18} className="text-white" strokeWidth={1.8} />
              </span>
              <span className="pt-0.5">
                <span className="block text-[15px] font-medium text-ink">{it.name}</span>
                <span className="mt-0.5 block text-[12.5px] leading-relaxed text-body">{it.descriptor}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
