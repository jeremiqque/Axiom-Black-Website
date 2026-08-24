import { notFound } from "next/navigation";
import LabProjectTemplate from "@/components/product/LabProjectTemplate";
import { labProjects } from "@/content/products";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(labProjects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = labProjects[slug];
  if (!project) return {};
  return pageMeta({
    title: `${project.name}: AxiomLabs`,
    description: project.hero.sub,
    path: `/products/${slug}`,
  });
}

export default async function LabProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = labProjects[slug];
  if (!project) notFound();
  return <LabProjectTemplate project={project} />;
}
