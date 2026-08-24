import { notFound } from "next/navigation";
import SolutionTemplate from "@/components/solution/SolutionTemplate";
import { solutionPages } from "@/content/solutionPages";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(solutionPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages[slug];
  if (!page) return {};
  return pageMeta({
    title: `${page.hero.eyebrow.replace("Engineering · ", "").replace("Technology · ", "")}: Solutions`,
    description: page.hero.sub,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages[slug];
  if (!page) notFound();
  return <SolutionTemplate page={page} />;
}
