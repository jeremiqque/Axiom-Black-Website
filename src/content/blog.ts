export type BlogCategory = "Technology" | "Engineering" | "Consulting" | "Company";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;      // display date
  readTime: string;  // e.g. "6 min"
  body?: string[];   // placeholder paragraphs
};

export const categoryColor: Record<BlogCategory, string> = {
  Technology: "#ff8710",
  Engineering: "#0049ed",
  Consulting: "#12bb1e",
  Company: "#121212",
};

export const blogCategories: BlogCategory[] = ["Technology", "Engineering", "Consulting", "Company"];

export const posts: BlogPost[] = [
  {
    slug: "ai-read-30-years-of-permits",
    title: "We let AI read 30 years of permits. Here's what it found.",
    excerpt: "Placeholder: document intelligence case notes, the surprises buried in a municipal archive.",
    category: "Engineering",
    date: "Jul 3, 2026",
    readTime: "6 min",
  },
  {
    slug: "self-hosting-our-stack",
    title: "Why we self-host our fonts and own our stack.",
    excerpt: "Placeholder: the case for owning your codebase instead of renting a platform.",
    category: "Technology",
    date: "Jul 3, 2026",
    readTime: "5 min",
  },
  {
    slug: "calibrating-when-asbuilts-lie",
    title: "Calibrating a hydraulic model when the as-builts lie.",
    excerpt: "Placeholder: field notes on reconciling record drawings with reality.",
    category: "Engineering",
    date: "Jul 3, 2026",
    readTime: "7 min",
  },
  {
    slug: "what-procurement-looks-for",
    title: "What procurement officers actually look for in an SOQ.",
    excerpt: "Placeholder: the signals that separate a shortlisted firm from the pile.",
    category: "Consulting",
    date: "Jul 3, 2026",
    readTime: "4 min",
  },
  {
    slug: "two-disciplines-one-team",
    title: "Two disciplines, one team: how we actually work.",
    excerpt: "Placeholder: why our engineers and software team share a room.",
    category: "Company",
    date: "Jul 3, 2026",
    readTime: "5 min",
  },
  {
    slug: "dashboards-operators-open",
    title: "Dashboards operators actually open.",
    excerpt: "Placeholder: designing utility tooling for the people on the night shift.",
    category: "Technology",
    date: "Jul 3, 2026",
    readTime: "6 min",
  },
];
