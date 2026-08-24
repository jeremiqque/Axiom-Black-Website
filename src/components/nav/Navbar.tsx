"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown01Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import Icon from "@/components/ui/Icon";
import Wordmark from "./Wordmark";
import SolutionsMenu from "./SolutionsMenu";
import ProductMenu from "./ProductMenu";
import CompanyMenu from "./CompanyMenu";
import AccentBadge from "@/components/ui/AccentBadge";
import { solutionGroups } from "@/content/solutions";
import { productNav } from "@/content/products";

const productLinks = productNav.map((p) => ({ label: p.name, href: p.href, status: p.status }));

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Career", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile
  const [menu, setMenu] = useState<null | "product" | "solutions" | "company">(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || menu !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[78px] w-full max-w-[1284px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Wordmark height={38} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {/* Product dropdown */}
          <div className="relative" onMouseEnter={() => setMenu("product")} onMouseLeave={() => setMenu(null)}>
            <button
              type="button"
              onClick={() => setMenu((m) => (m === "product" ? null : "product"))}
              aria-expanded={menu === "product"}
              className="inline-flex items-center gap-1.5 text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-ink/60"
            >
              Product
              <Icon icon={ArrowDown01Icon} size={16} className={`text-ink/50 transition-transform ${menu === "product" ? "rotate-180" : ""}`} strokeWidth={2} />
            </button>
            <AnimatePresence>
              {menu === "product" && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="absolute left-0 top-full pt-3">
                  <ProductMenu onNavigate={() => setMenu(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions dropdown */}
          <div className="relative" onMouseEnter={() => setMenu("solutions")} onMouseLeave={() => setMenu(null)}>
            <button
              type="button"
              onClick={() => setMenu((m) => (m === "solutions" ? null : "solutions"))}
              aria-expanded={menu === "solutions"}
              className="inline-flex items-center gap-1.5 text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-ink/60"
            >
              Solutions
              <Icon icon={ArrowDown01Icon} size={16} className={`text-ink/50 transition-transform ${menu === "solutions" ? "rotate-180" : ""}`} strokeWidth={2} />
            </button>
            <AnimatePresence>
              {menu === "solutions" && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="absolute left-0 top-full pt-3">
                  <SolutionsMenu onNavigate={() => setMenu(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company dropdown */}
          <div className="relative" onMouseEnter={() => setMenu("company")} onMouseLeave={() => setMenu(null)}>
            <button
              type="button"
              onClick={() => setMenu((m) => (m === "company" ? null : "company"))}
              aria-expanded={menu === "company"}
              className="inline-flex items-center gap-1.5 text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-ink/60"
            >
              Company
              <Icon icon={ArrowDown01Icon} size={16} className={`text-ink/50 transition-transform ${menu === "company" ? "rotate-180" : ""}`} strokeWidth={2} />
            </button>
            <AnimatePresence>
              {menu === "company" && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="absolute right-0 top-full pt-3">
                  <CompanyMenu onNavigate={() => setMenu(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center rounded-[10px] bg-ink px-5 py-2.5 text-[16px] font-medium tracking-[-0.01em] text-white transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Contact sales
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-ink lg:hidden"
          >
            <Icon icon={open ? Cancel01Icon : Menu01Icon} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[78px] z-40 max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto w-full max-w-[1284px] px-6 py-5">
              <div className="mb-2">
                <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Product</p>
                {productLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex flex-wrap items-center gap-2 rounded-[10px] px-3 py-3 text-[17px] font-medium text-ink hover:bg-surface-2">
                    {l.label}
                    {l.status && (
                      <span className="border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">{l.status}</span>
                    )}
                  </Link>
                ))}
              </div>

              {solutionGroups.map((g) => (
                <div key={g.label} className="mt-4">
                  <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{g.label}</p>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 hover:bg-surface-2">
                          <AccentBadge icon={it.icon} accent={g.accent} size={34} />
                          <span className="text-[16px] font-medium text-ink">{it.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-4 border-t border-line pt-2">
                <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Company</p>
                {companyLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-[10px] px-3 py-3 text-[17px] font-medium text-ink hover:bg-surface-2">{l.label}</Link>
                ))}
              </div>

              <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-[10px] bg-ink px-3 py-3 text-center text-[15px] font-semibold text-white">Contact sales</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
