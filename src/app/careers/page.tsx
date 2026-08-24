import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Cta from "@/components/sections/Cta";
import RoleRow from "@/components/careers/RoleRow";
import { Briefcase01Icon } from "@hugeicons/core-free-icons";
import { departments } from "@/content/careers";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Career: Open positions",
  description:
    "Join Axiom Black, a Newark, NJ team pairing licensed engineering with in-house technology for municipal utilities and public agencies. See current openings.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section>
        <Container className="pt-[150px] md:pt-[190px]">
          <Eyebrow icon={Briefcase01Icon}>Open positions</Eyebrow>
          <h1 className="mt-6 text-[clamp(40px,6vw,76px)] font-medium leading-[1.03] tracking-[-0.03em] text-ink">
            Current openings.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-body">
            We hire engineers, technologists, and consultants who want to do hands-on work that
            actually ships, for the communities that depend on it.
          </p>
        </Container>
      </section>

      <section className="pb-8 pt-16 md:pt-20">
        <Container>
          {departments.map((dept) => (
            <div key={dept.name} className="mb-16 last:mb-0">
              <p className="mb-2 border-b border-line pb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-muted">
                {dept.name}
              </p>
              {dept.roles.map((role) => (
                <RoleRow key={role.title} role={role} />
              ))}
            </div>
          ))}

          {/* open application fallback */}
          <div className="mt-6 border border-line bg-surface-2 p-8 md:p-10">
            <h3 className="text-[22px] font-medium text-ink">Don&apos;t see your role?</h3>
            <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-body">
              We&apos;re always glad to meet good people. Send us your background and what you&apos;d
              want to work on.
            </p>
            <a href="mailto:careers@axiomblack.com" className="ab-btn group mt-6">
              <span>Send an open application</span>
            </a>
          </div>
        </Container>
      </section>

      <Cta headline="Let’s build something that lasts." cta={{ label: "Start Your Project", href: "/contact" }} />
    </>
  );
}
