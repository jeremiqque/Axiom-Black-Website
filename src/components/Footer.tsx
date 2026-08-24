import Link from "next/link";
import { InstagramIcon, Linkedin02Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import Icon from "@/components/ui/Icon";
import Wordmark from "@/components/nav/Wordmark";
import { productNav } from "@/content/products";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Water", href: "/solutions/water" },
      { label: "Design", href: "/solutions/design" },
      { label: "Modeling", href: "/solutions/modeling" },
      { label: "Risk Assessment", href: "/solutions/risk-assessment" },
      { label: "AI & Machine Learning", href: "/solutions/ai-machine-learning" },
      { label: "Digital Transformation", href: "/solutions/digital-transformation" },
      { label: "Data Analytics & BI", href: "/solutions/data-analytics" },
      { label: "Software Development", href: "/solutions/software-development" },
    ],
  },
  {
    title: "Products",
    links: productNav.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Career", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
];

const socials = [Linkedin02Icon, NewTwitterIcon, InstagramIcon];

export default function Footer() {
  return (
    <footer className="bg-surface-2">
      <div className="mx-auto w-full max-w-[1284px] px-6 pt-20 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div>
            <Wordmark height={24} />
            <p className="mt-5 max-w-[26ch] text-[15px] text-body">
              From concept to creation, engineered with precision.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              511 South Orange Ave #2238,
              <br />
              Newark, NJ 07103.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-none bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-line transition-colors hover:bg-ink hover:text-white"
                >
                  <Icon icon={s} size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[15px] font-semibold text-ink">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-body transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line py-7 text-[14px] text-body md:flex-row md:items-center md:justify-between">
          <span>© Axiom Black, LLC 2026. All rights reserved.</span>
          <span className="flex items-center gap-6 text-ink">
            <span>Engineering</span>
            <span>Technology</span>
            <span>Consulting</span>
          </span>
        </div>
      </div>

      {/* Decorative scanline wordmark (GeistPixel) */}
      <div className="overflow-hidden px-6 pb-6" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-center font-pixel leading-none text-ink/85"
           style={{ fontSize: "clamp(64px, 15vw, 230px)" }}>
          Axiom Black
        </p>
      </div>
    </footer>
  );
}
