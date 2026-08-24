import type { Accent } from "@/lib/brand";

export type NavItem = { label: string; href: string };

export type SolutionLink = {
  name: string;
  href: string;
  descriptor: string;
};

export type SolutionGroup = {
  label: string;
  accent: Accent;
  items: SolutionLink[];
};

/** Solutions mega-menu taxonomy (brief §4.2). */
export const solutionsMenu: SolutionGroup[] = [
  {
    label: "Engineering",
    accent: "blue",
    items: [
      { name: "Water", href: "/solutions/water", descriptor: "Municipal water & wastewater infrastructure" },
      { name: "Design", href: "/solutions/design", descriptor: "Civil and process engineering design" },
      { name: "Modeling", href: "/solutions/modeling", descriptor: "Hydraulic and systems modeling" },
      { name: "Risk Assessment", href: "/solutions/risk-assessment", descriptor: "Infrastructure risk & resilience analysis" },
    ],
  },
  {
    label: "Technology",
    accent: "orange",
    items: [
      { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning", descriptor: "Applied models for utility operations" },
      { name: "Digital Transformation", href: "/solutions/digital-transformation", descriptor: "Modernizing agency workflows and data" },
      { name: "Data Analytics & BI", href: "/solutions/data-analytics", descriptor: "Dashboards, reporting & decision support" },
      { name: "Software Development", href: "/solutions/software-development", descriptor: "Custom tools for public-sector teams" },
    ],
  },
];

/** Top-level nav (Contact is rendered separately as a filled CTA). */
export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products/certificate-tracker" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/careers" },
  { label: "Blog", href: "/blog" },
];
