import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Cta from "@/components/sections/Cta";
import BlogIndex from "@/components/blog/BlogIndex";
import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Blog: Notes from the field and the codebase",
  description:
    "Engineering lessons, technology deep-dives, and honest takes on running infrastructure, written by the Axiom Black team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section>
        <Container className="pt-[150px] text-center md:pt-[190px]">
          <div className="flex justify-center">
            <Eyebrow icon={BookOpen01Icon}>The Axiom Black Blog</Eyebrow>
          </div>
          <h1 className="mx-auto mt-6 max-w-[20ch] text-[clamp(38px,6vw,72px)] font-medium leading-[1.04] tracking-[-0.03em] text-ink">
            Notes from the field and the codebase.
          </h1>
          <p className="mx-auto mt-6 max-w-[74ch] text-[17px] leading-relaxed text-body">
            Engineering lessons, technology deep-dives, and honest takes on running infrastructure,
            written by the people doing the work, not a content team.
          </p>
        </Container>
      </section>

      <section className="pb-24 pt-14 md:pb-28">
        <Container>
          <BlogIndex />
        </Container>
      </section>

      <Cta headline="Let’s build something that lasts." cta={{ label: "Start Your Project", href: "/contact" }} />
    </>
  );
}
