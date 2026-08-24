import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { BuildingIcon } from "@hugeicons/core-free-icons";
import ContactForm from "@/components/contact/ContactForm";
import Stats from "@/components/sections/Stats";
import { trustedLogos } from "@/content/home";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact: Book a demo",
  description:
    "Book a 30-minute conversation with Axiom Black about your organization and where we can make the biggest impact.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section>
        <Container className="pt-[140px] md:pt-[170px]">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Copy + calendar + trusted */}
            <div className="order-1 lg:order-2">
              <h1 className="text-[clamp(32px,4.5vw,56px)] font-black uppercase leading-[1.02] tracking-[-0.01em] text-ink">
                Book a demo with Axiom Black
              </h1>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-body">
                A 30-minute conversation about your organization and where Axiom Black can make the biggest impact.
              </p>

              {/* calendar / scheduling embed placeholder */}
              <div className="mt-8 flex aspect-[16/10] w-full items-center justify-center border border-line bg-[#eaeaea] text-[13px] font-medium uppercase tracking-widest text-muted">
                Scheduling embed placeholder
              </div>

              <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
                Trusted by 1000+ businesses
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
                {trustedLogos.map((name) => (
                  <span key={name} className="inline-flex items-center gap-2 text-[15px] font-medium text-ink/80">
                    <Icon icon={BuildingIcon} size={20} className="text-ink/50" strokeWidth={1.6} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="mt-24 md:mt-28">
        <Stats />
      </div>
    </>
  );
}
