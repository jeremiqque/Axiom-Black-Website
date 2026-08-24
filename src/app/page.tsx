import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import Solutions from "@/components/sections/Solutions";
import AxiomLabs from "@/components/sections/AxiomLabs";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Water Infrastructure Engineering & Technology",
  description:
    "Axiom Black partners with municipal utilities and public agencies to design, modernize, and manage water systems, pairing hands-on engineering with AI, data, and custom software.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Solutions />
      <AxiomLabs />
      <About />
      <Faq />
      <Cta />
    </>
  );
}
