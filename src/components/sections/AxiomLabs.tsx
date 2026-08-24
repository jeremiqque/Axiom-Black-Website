import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "./Reveal";
import { DashboardSquare02Icon } from "@hugeicons/core-free-icons";

export default function AxiomLabs() {
  return (
    <section className="bg-surface-2 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="rounded-none bg-white px-6 py-12 md:px-14 md:py-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow icon={DashboardSquare02Icon}>Products · AxiomLabs</Eyebrow>
                <h2 className="ab-h2 mt-6 max-w-[16ch]">Where our engineering meets our software.</h2>
                <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-body">
                  AxiomLabs is where Axiom Black turns two decades of utility experience into
                  products: data tools, dashboards, and AI systems purpose-built for the water sector.
                </p>
                <div className="mt-10">
                  <PrimaryButton href="/solutions">See Our Technology Solutions</PrimaryButton>
                </div>
              </div>
              {/* product screenshot placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center rounded-none bg-[#767676] text-[13px] font-medium uppercase tracking-widest text-white/70">
                Product preview placeholder
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
