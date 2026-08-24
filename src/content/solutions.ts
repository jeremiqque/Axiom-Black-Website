import {
  WaterEnergyIcon,
  RulerIcon,
  ChartLineData02Icon,
  ShieldEnergyIcon,
  ArtificialIntelligence04Icon,
  CloudServerIcon,
  SourceCodeIcon,
  PresentationBarChart01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type Accent = "blue" | "orange";
export type SolutionItem = { name: string; href: string; descriptor: string; icon: IconSvgElement };
export type SolutionGroup = { label: string; accent: Accent; items: SolutionItem[] };

/** Descriptors match the reference crop exactly. */
export const solutionGroups: SolutionGroup[] = [
  {
    label: "Engineering",
    accent: "blue",
    items: [
      { name: "Water", href: "/solutions/water", descriptor: "Distribution, treatment & lead service line programs", icon: WaterEnergyIcon },
      { name: "Design", href: "/solutions/design", descriptor: "Collection systems, lift stations & force mains", icon: RulerIcon },
      { name: "Modeling", href: "/solutions/modeling", descriptor: "Hydraulic modeling & simulation for utility networks", icon: ChartLineData02Icon },
      { name: "Risk Assessment", href: "/solutions/risk-assessment", descriptor: "Asset management & regulatory compliance", icon: ShieldEnergyIcon },
    ],
  },
  {
    label: "Technology",
    accent: "orange",
    items: [
      { name: "AI & Machine Learning", href: "/solutions/ai-machine-learning", descriptor: "Predictive maintenance from field & inspection data", icon: ArtificialIntelligence04Icon },
      { name: "Digital Transformation", href: "/solutions/digital-transformation", descriptor: "Cloud, IoT & IT strategy for public agencies", icon: CloudServerIcon },
      { name: "Data Analytics & BI", href: "/solutions/data-analytics", descriptor: "Dashboards, reporting & decision support", icon: PresentationBarChart01Icon },
      { name: "Software Development", href: "/solutions/software-development", descriptor: "Custom applications & legacy modernization", icon: SourceCodeIcon },
    ],
  },
];
