import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { productNav } from "@/content/products";

/** Product mega-menu dropdown (light, single column) — mirrors the Solutions/Company menus. */
export default function ProductMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-[400px] max-w-[92vw] overflow-hidden rounded-[18px] border border-line bg-white p-3 shadow-[0_24px_64px_rgba(18,18,18,0.12)]">
      <ul className="space-y-1">
        {productNav.map((it) => (
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
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-medium text-ink">{it.name}</span>
                  {it.status && (
                    <span className="border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {it.status}
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-relaxed text-body">{it.descriptor}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
