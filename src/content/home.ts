import {
  WaterEnergyIcon,
  RulerIcon,
  ChartLineData02Icon,
  ShieldEnergyIcon,
  ArtificialIntelligence04Icon,
  CloudServerIcon,
  SourceCodeIcon,
  PresentationBarChart01Icon,
  Target02Icon,
  ChartBreakoutSquareIcon,
  Plant03Icon,
  WorkflowSquare03Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type Card = { name: string; href: string; descriptor: string; icon: IconSvgElement };

export const heroCopy = {
  headline: ["Resilient water infrastructure,", "engineered for the next century."],
  sub: "Axiom Black partners with municipal utilities and public agencies to design, modernize, and manage water systems, pairing hands-on engineering with AI, data, and custom software.",
  cta: { label: "Explore Solutions", href: "/solutions" },
};

export const trustedLogos = ["TeckTeki", "City of Paterson", "City of Newark"];

export const stats = [
  { value: "25+", label: "Years of combined engineering & technology experience" },
  { value: "2", label: "Disciplines under one roof: licensed engineering and modern software" },
  { value: "11", label: "Registered NAICS codes across engineering, IT & consulting services" },
  { value: "100%", label: "Focus on municipal utilities, public works & government agencies" },
];

export const engineeringCards: Card[] = [
  { name: "Water", href: "/solutions/water", descriptor: "Planning, design, and delivery for municipal water and wastewater systems.", icon: WaterEnergyIcon },
  { name: "Design", href: "/solutions/design", descriptor: "Civil and process engineering design for public infrastructure projects.", icon: RulerIcon },
  { name: "Modeling", href: "/solutions/modeling", descriptor: "Calibrated hydraulic models that de-risk capital projects before construction.", icon: ChartLineData02Icon },
  { name: "Risk Assessment", href: "/solutions/risk-assessment", descriptor: "Resilience and condition analysis for aging public infrastructure.", icon: ShieldEnergyIcon },
];

export const technologyCards: Card[] = [
  { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning", descriptor: "Predictive maintenance from field and inspection data, plus AI assistants trained on your own operations.", icon: ArtificialIntelligence04Icon },
  { name: "Digital Transformation", href: "/solutions/digital-transformation", descriptor: "Cloud, IoT, and IT strategy roadmaps that move public agencies off paper and legacy systems without disruption.", icon: CloudServerIcon },
  { name: "Data Analytics & BI", href: "/solutions/data-analytics", descriptor: "Dashboards, warehousing, and board-ready reporting that turn scattered utility data into decisions.", icon: PresentationBarChart01Icon },
  { name: "Software Development", href: "/solutions/software-development", descriptor: "Custom applications, dashboards, and legacy modernization built for how utilities actually work day to day.", icon: SourceCodeIcon },
];

export const growCards: Card[] = [
  { name: "Goal-Oriented Strategy Development", href: "/about", descriptor: "Every engagement starts from your outcomes, not our service list.", icon: Target02Icon },
  { name: "Resource Optimization Solutions", href: "/about", descriptor: "Projects measured by impact delivered, not effort billed.", icon: ChartBreakoutSquareIcon },
  { name: "Organizational Development Services", href: "/about", descriptor: "Solutions engineered for sustainability, built to stand the test of time.", icon: Plant03Icon },
  { name: "Workflow Enhancement Solutions", href: "/about", descriptor: "Collaboration at the core: with your team, in your systems.", icon: WorkflowSquare03Icon },
];

export const faqs = [
  { q: "How do I start a project with your team?", a: "Most engagements begin with a scoped assessment: we map the problem, the constraints, and the funding path before proposing a delivery plan. Reach out through the contact form and we'll set up an intro call." },
  { q: "What services do you offer?", a: "Engineering (water, design, modeling, risk assessment) and technology (AI & machine learning, digital transformation, software development), delivered by one team." },
  { q: "What types of businesses do you work with?", a: "We focus on municipal utilities, public works departments, and government agencies, and also support private clients operating in the water and infrastructure sector." },
  { q: "Do you offer ongoing support?", a: "Yes. Beyond project delivery we offer ongoing operations support, monitoring, and iterative improvements to the systems we build." },
  { q: "Can you work alongside our internal team?", a: "Absolutely. We work as partners: embedding with your staff, using your systems, and setting direction from your goals rather than a fixed service list." },
  { q: "Is there a minimum project size or budget?", a: "No fixed minimum. We scope engagements to the problem and the available funding, and can start small with an assessment before committing to a larger program." },
];

export const ctaCopy = {
  eyebrow: "Building the future",
  headline: "Engineering the future, one solution at a time.",
  sub: "Partner with Axiom Black to drive sustainable growth through technology, innovation, and expert engineering insight.",
  cta: { label: "Start Your Project", href: "/contact" },
};

/* =========================================================================
   PRESERVED — Phase 1 dummy copy (kept for reuse; Figma carries placeholder
   copy, this is the earlier brief-aligned copy). Not deleted intentionally.
   ========================================================================= */
import type { Accent } from "@/lib/brand";

export const homeSolutions: { name: string; href: string; descriptor: string; accent: Accent }[] = [
  { name: "Water Infrastructure", href: "/solutions/water", descriptor: "Planning, design, and delivery for municipal water and wastewater systems.", accent: "blue" },
  { name: "Hydraulic Modeling", href: "/solutions/modeling", descriptor: "Calibrated models that de-risk capital projects before they break ground.", accent: "blue" },
  { name: "Risk Assessment", href: "/solutions/risk-assessment", descriptor: "Resilience and condition analysis for aging public infrastructure.", accent: "blue" },
  { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning", descriptor: "Applied models that turn utility data into operational decisions.", accent: "orange" },
  { name: "Digital Transformation", href: "/solutions/digital-transformation", descriptor: "Modernizing agency workflows, data, and reporting end to end.", accent: "orange" },
  { name: "Data Analytics & BI", href: "/solutions/data-analytics", descriptor: "Dashboards and reporting that turn scattered data into decisions.", accent: "orange" },
  { name: "Software Development", href: "/solutions/software-development", descriptor: "Custom tools built for the way public-sector teams actually work.", accent: "orange" },
];

export const homeStats: { value: string; unit?: string; label: string }[] = [
  { value: "15", unit: "+", label: "Years across water and public infrastructure" },
  { value: "40", unit: "+", label: "Municipal and agency engagements delivered" },
  { value: "3", label: "Disciplines: engineering, technology, consulting" },
];

export const credentials: { label: string; value: string }[] = [
  { label: "UEI", value: "Pending" },
  { label: "CAGE", value: "Pending" },
  { label: "NAICS", value: "237110 · 541330" },
];

export const homeFaqs: { q: string; a: string }[] = [
  { q: "Who does Axiom Black work with?", a: "We partner with municipal utilities, public works departments, and government agencies, supporting the people responsible for water infrastructure and the systems that run it." },
  { q: "What makes your water-infrastructure work different?", a: "We pair licensed engineering with in-house technology: the same team that models a system can build the software that operates it, so decisions stay grounded in the physical asset." },
  { q: "Are you set up for public-sector procurement?", a: "Yes. We maintain the registrations procurement officers look for (UEI, CAGE, NAICS) and have experience working within funding-program requirements." },
  { q: "How do engagements typically start?", a: "Most begin with a scoped assessment: we map the problem, the constraints, and the funding path before committing to a delivery plan." },
];
