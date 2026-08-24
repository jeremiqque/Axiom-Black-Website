import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CategoryTag from "@/components/blog/CategoryTag";
import Cta from "@/components/sections/Cta";
import Icon from "@/components/ui/Icon";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { posts } from "@/content/blog";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <Container className="max-w-[760px] pt-[140px] md:pt-[170px]">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-ink">
            <Icon icon={ArrowLeft01Icon} size={16} strokeWidth={2} /> All posts
          </Link>
          <div className="mt-6">
            <CategoryTag category={post.category} />
          </div>
          <h1 className="mt-5 text-[clamp(30px,4.5vw,52px)] font-medium leading-[1.06] tracking-[-0.03em] text-ink">
            {post.title}
          </h1>
          <p className="mt-4 text-[14px] text-muted">
            {post.date} <span className="mx-1.5">·</span> {post.readTime}
          </p>
          <div className="mt-8 aspect-[16/9] w-full bg-[#d6d6d6]" />
          <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-body">
            <p>{post.excerpt}</p>
            <p>This is a placeholder article body. Real content will replace it before launch. The layout, typography, and reading width are set for long-form writing.</p>
            <p>Axiom Black pairs licensed engineering with in-house technology, and this is where we share what we learn doing the work.</p>
          </div>
        </Container>
      </article>
      <div className="mt-24">
        <Cta headline="Let’s build something that lasts." cta={{ label: "Start Your Project", href: "/contact" }} />
      </div>
    </>
  );
}
