"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, solutionsMenu } from "@/content/nav";
import { accentDot } from "@/lib/brand";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-[57px] z-40 max-h-[calc(100dvh-57px)] overflow-y-auto border-t border-ab-line bg-ab-black/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto w-full max-w-ab-max px-8 py-6">
            {solutionsMenu.map((g) => (
              <div key={g.label} className="mb-6">
                <p className="ab-eyebrow mb-3 flex items-center gap-2">
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${accentDot[g.accent]}`} />
                  {g.label}
                </p>
                <ul className="space-y-1">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        onClick={onClose}
                        className="block rounded-ab-control px-3 py-2 text-ab-body-lg text-ab-white hover:bg-white/[0.05]"
                      >
                        {it.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="space-y-1 border-t border-ab-line pt-4">
              {primaryNav.slice(1).map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={onClose}
                    className="block rounded-ab-control px-3 py-2 text-ab-body-lg text-ab-white hover:bg-white/[0.05]"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
