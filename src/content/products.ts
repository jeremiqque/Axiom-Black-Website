import {
  Certificate01Icon,
  DeliveryTruck01Icon,
  City03Icon,
  CloudServerIcon,
  GpsSignal01Icon,
  Route01Icon,
  Wrench01Icon,
  FuelStationIcon,
  TemperatureIcon,
  TrafficLightIcon,
  EnergyIcon,
  WasteIcon,
  Building03Icon,
  ChipIcon,
  Radar01Icon,
  Alert02Icon,
  SearchVisualIcon,
  LockPasswordIcon,
  ArtificialIntelligence04Icon,
  Database01Icon,
  Notification03Icon,
  Analytics01Icon,
  UserGroupIcon,
  ArrowDataTransferHorizontalIcon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type ProductPage = {
  slug: string;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  problem: { eyebrow: string; headline: string; sub: string };
  features: {
    eyebrow: string;
    headline: string;
    sub: string;
    items: { title: string; body: string; icon: IconSvgElement }[];
  };
  alerts: { eyebrow: string; headline: string; sub: string; steps: { when: string; channel: string; body: string }[] };
  how: { eyebrow: string; headline: string; steps: { n: string; title: string; body: string }[] };
  faq: { eyebrow: string; headline: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; headline: string; sub: string; cta: { label: string; href: string } };
};

export const certificateTracker: ProductPage = {
  slug: "certificate-tracker",
  hero: {
    eyebrow: "AxiomLabs · Certificate Tracker",
    headline: "Never miss a certificate expiry again.",
    sub: "Certificate Tracker keeps every licence, safety cert, insurance document, and permit in one place, and warns the right people at 30, 14, and 7 days before it lapses. Your team stays audit-ready without anyone maintaining a spreadsheet.",
    primaryCta: { label: "Get Started Free", href: "https://axiomtracker.vercel.app/" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
  },
  problem: {
    eyebrow: "Why it exists",
    headline: "Compliance management, finally done right.",
    sub: "Most organisations track credentials in a spreadsheet somebody inherited. It works until the person who maintained it leaves, or an auditor asks for proof on a Tuesday afternoon. Certificate Tracker automates the tracking, the reminders, and the reporting, so compliance stops depending on one person remembering.",
  },
  features: {
    eyebrow: "Features",
    headline: "One platform. Full visibility. Zero missed renewals.",
    sub: "Everything you need to know what's valid, what's expiring, and who needs to act, without chasing it down.",
    items: [
      {
        title: "Smart Credential Tracking",
        icon: Certificate01Icon,
        body: "Every employee certificate in one place, with instant visibility into what's active, expiring, and expired across the whole team.",
      },
      {
        title: "Intelligent Notifications",
        icon: Notification03Icon,
        body: "Automated multi-channel alerts at 30, 14, and 7 days before expiry, reaching the certificate holder and their manager, not just an inbox nobody checks.",
      },
      {
        title: "Real-Time Analytics",
        icon: Analytics01Icon,
        body: "Live compliance dashboards with a running compliance score, so risks surface early and trends are visible before they become findings.",
      },
      {
        title: "Role-Based Access",
        icon: UserGroupIcon,
        body: "Invite your team as Admin, Manager, or Viewer: each role sees and edits only what it should across the dashboard.",
      },
      {
        title: "HRIS Integration & Import",
        icon: ArrowDataTransferHorizontalIcon,
        body: "Connect popular HR platforms via API, or move data with CSV import and export, so employee and certificate records stay in sync without re-entry.",
      },
      {
        title: "Audit-Ready by Default",
        icon: SecurityCheckIcon,
        body: "Data encrypted in transit and at rest, role-based access, and a logged history of every action, so an audit request is a report, not a project.",
      },
    ],
  },
  alerts: {
    eyebrow: "Alert cadence",
    headline: "Three warnings before anything lapses.",
    sub: "Renewals take time: approvals, courses, appointments. The cadence is built to give people room to act, then escalate as the date closes in.",
    steps: [
      { when: "30 days out", channel: "Email", body: "The first notice, early enough to book the course, the medical, or the renewal appointment." },
      { when: "14 days out", channel: "SMS", body: "A second reminder to the holder and their manager, when the window is starting to close." },
      { when: "7 days out", channel: "Push", body: "Final escalation: everyone who needs to know can see the credential is about to lapse." },
    ],
  },
  how: {
    eyebrow: "How it works",
    headline: "Up and running in minutes. No IT team required.",
    steps: [
      { n: "01", title: "Upload Certifications", body: "Drag and drop your existing certificates and licences, or import the whole roster at once. The dashboard is populated in minutes." },
      { n: "02", title: "Set Auto-Renew Alerts", body: "Reminders schedule themselves at 30, 14, and 7 days before each expiry date, routed to the holder and their manager." },
      { n: "03", title: "Stay Compliant", body: "Real-time dashboards keep your compliance score current and your organisation audit-ready with no manual effort." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Certificate Tracker questions, answered.",
    items: [
      {
        q: "How does Certificate Tracker prevent certificate expiry?",
        a: "It monitors every certificate's expiry date and sends automated alerts at 30, 14, and 7 days out, to the certificate holder and their manager, so renewals happen before a lapse, not after.",
      },
      {
        q: "Can it integrate with our existing HR systems?",
        a: "Yes. Certificate Tracker connects with popular HRIS platforms via API, plus CSV import and export, so employee and certificate data stays in sync without manual re-entry.",
      },
      {
        q: "Is our certificate data secure?",
        a: "All data is encrypted in transit and at rest, access is role-based, and every action is logged for audit purposes. It's built with compliance-grade security from the ground up.",
      },
      {
        q: "What types of certificates can it manage?",
        a: "Any credential with an expiry date: licences, safety certifications, insurance documents, training completions, permits, and more. If it expires, Certificate Tracker can track it.",
      },
      {
        q: "How do I assign roles to team members?",
        a: "From Settings, invite team members and assign them a role: Admin, Manager, or Viewer, which controls what they can see and edit across the dashboard.",
      },
      {
        q: "Who is it built for?",
        a: "Any organisation whose people carry credentials that expire: utilities and public works crews, contractors, field service teams, and safety-critical operations of any size.",
      },
    ],
  },
  cta: {
    eyebrow: "Get started",
    headline: "Ready to eliminate compliance risk?",
    sub: "Start simplifying your compliance workflow today, and deal with renewals before they turn into findings.",
    cta: { label: "Get Started Free", href: "https://axiomtracker.vercel.app/" },
  },
};


/* ------------------------------------------------------------------ *
 * AxiomLabs research projects
 *
 * These are active R&D efforts, not shipped software. Pages are written
 * to say so plainly — no feature claims for capability that doesn't
 * exist yet, and no pricing or self-serve signup.
 * ------------------------------------------------------------------ */

export type LabProject = {
  slug: string;
  name: string;
  /** Short line used in the nav dropdown and footer. */
  descriptor: string;
  navIcon: IconSvgElement;
  status: string;
  hero: { eyebrow: string; headline: string; sub: string };
  premise: { eyebrow: string; headline: string; sub: string };
  building: {
    eyebrow: string;
    headline: string;
    sub: string;
    items: { title: string; body: string; icon: IconSvgElement }[];
  };
  who: { eyebrow: string; headline: string; sub: string; items: string[] };
  stage: { eyebrow: string; headline: string; body: string };
  cta: { eyebrow: string; headline: string; sub: string; cta: { label: string; href: string } };
};

export const labProjects: Record<string, LabProject> = {
  "iot-vehicle-tracking": {
    slug: "iot-vehicle-tracking",
    name: "IoT Vehicle Tracking System",
    descriptor: "Real-time fleet and asset tracking for field operations",
    navIcon: DeliveryTruck01Icon,
    status: "In development",
    hero: {
      eyebrow: "AxiomLabs \u00b7 Research project",
      headline: "Know where the fleet is, and what it's telling you.",
      sub: "An IoT-based vehicle tracking system in development at AxiomLabs: sensors on the vehicle feeding real-time location, performance, and condition data back to the people dispatching, maintaining, and budgeting for the fleet.",
    },
    premise: {
      eyebrow: "The premise",
      headline: "Public fleets are tracked on paper and memory.",
      sub: "Most municipal fleets know where a truck went after the fact, from a log sheet. Maintenance runs on mileage estimates and whoever noticed a noise. The vehicles already generate the data that would answer these questions. It just never leaves the vehicle. This project is about closing that gap with hardware cheap enough for a public works budget.",
    },
    building: {
      eyebrow: "What we're building",
      headline: "Sensors on the vehicle, answers in the office.",
      sub: "The scope we're working through: each piece grounded in what utility and public works crews have told us they actually chase down.",
      items: [
        { title: "Real-Time Location", icon: GpsSignal01Icon, body: "Live position for every vehicle, so dispatch can send the nearest crew instead of the one they remember." },
        { title: "Route History", icon: Route01Icon, body: "A recorded trail of where each vehicle has been, for job costing, service verification, and answering complaints with facts." },
        { title: "Condition Monitoring", icon: TemperatureIcon, body: "Engine, temperature, and diagnostic signals pulled off the vehicle bus and surfaced before they become a breakdown." },
        { title: "Maintenance Triggers", icon: Wrench01Icon, body: "Service scheduled against real usage rather than a calendar guess, so intervals match how the vehicle is actually worked." },
        { title: "Utilisation & Fuel", icon: FuelStationIcon, body: "Idle time, trip patterns, and consumption: the numbers that justify or retire a vehicle at budget time." },
        { title: "Fleet Dashboard", icon: Analytics01Icon, body: "One view across the fleet, built to be read by a supervisor between calls, not studied." },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      headline: "Fleets that run on public budgets.",
      sub: "We're scoping the system around organisations where vehicles are a major capital line and downtime stops service.",
      items: [
        "Municipal public works and utility fleets",
        "Water and sewer field crews",
        "Contractors running equipment across multiple sites",
        "Agencies reporting vehicle costs to a council or board",
      ],
    },
    stage: {
      eyebrow: "Where it stands",
      headline: "Active development. Looking for pilot partners.",
      body: "This system is being built inside AxiomLabs. It is not a finished product you can buy today. If you operate a fleet and the problems above sound familiar, we'd rather design against your operation than our assumptions. Pilot conversations are open.",
    },
    cta: {
      eyebrow: "Get involved",
      headline: "Want to shape what this becomes?",
      sub: "Tell us how your fleet runs and what you're currently unable to answer. Early partners set the direction.",
      cta: { label: "Talk to Our Team", href: "/contact" },
    },
  },

  "smart-spaces": {
    slug: "smart-spaces",
    name: "Smart Spaces",
    descriptor: "IoT and AI for urban resource use, safety, and mobility",
    navIcon: City03Icon,
    status: "In development",
    hero: {
      eyebrow: "AxiomLabs \u00b7 Research project",
      headline: "Smart spaces in smart cities.",
      sub: "Smart spaces use IoT sensors and AI models to optimise resource use, improve efficiency, and improve daily life for residents, across transportation, energy management, public safety, and sustainability. This project is our work on the connective layer underneath them.",
    },
    premise: {
      eyebrow: "The premise",
      headline: "Cities buy sensors. They rarely buy the layer that connects them.",
      sub: "Parking, lighting, traffic, energy, and waste each arrive as a separate vendor system with its own dashboard and its own login. The data never meets, so nobody can ask a question that crosses two of them. We're more interested in that connective layer than in any single sensor. It's the part that decides whether a smart city investment compounds or just accumulates.",
    },
    building: {
      eyebrow: "What we're building",
      headline: "Where the sensor data meets.",
      sub: "The domains we're working through, chosen because they're where municipal spend and resident experience overlap most directly.",
      items: [
        { title: "Mobility & Traffic", icon: TrafficLightIcon, body: "Flow, congestion, and signal data used to ease movement through the corridors that residents complain about most." },
        { title: "Energy Management", icon: EnergyIcon, body: "Consumption monitoring across municipal buildings and street infrastructure, with the waste made visible rather than averaged away." },
        { title: "Public Safety", icon: Radar01Icon, body: "Environmental and situational sensing that gives responders a picture before they arrive, not after." },
        { title: "Waste & Sanitation", icon: WasteIcon, body: "Fill-level and collection data so routes follow demand rather than a fixed weekly loop." },
        { title: "Facility Intelligence", icon: Building03Icon, body: "Occupancy, air quality, and system health across public buildings: the conditions staff and residents actually feel." },
        { title: "Sensor Fabric", icon: ChipIcon, body: "The integration layer itself: getting devices from different vendors onto one governed data model." },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      headline: "Municipalities past the pilot stage.",
      sub: "This is aimed at agencies that already own some connected infrastructure and have found that owning it isn't the same as using it.",
      items: [
        "Cities running two or more disconnected sensor systems",
        "Public works departments planning infrastructure upgrades",
        "Utilities and authorities with metering or SCADA in place",
        "Agencies with sustainability or resilience targets to report against",
      ],
    },
    stage: {
      eyebrow: "Where it stands",
      headline: "Research and architecture. Not yet deployed.",
      body: "We're designing the integration layer and testing it against real municipal data patterns. There is no product to purchase today. If your agency has sensor systems that don't talk to each other, that's exactly the situation we want to design against.",
    },
    cta: {
      eyebrow: "Get involved",
      headline: "Have sensors that don't talk to each other?",
      sub: "Tell us what you've deployed and what you still can't answer. That gap is the project.",
      cta: { label: "Talk to Our Team", href: "/contact" },
    },
  },

  "cloud-ai-security": {
    slug: "cloud-ai-security",
    name: "Cloud AI Security",
    descriptor: "Anomaly detection and response for agency systems",
    navIcon: CloudServerIcon,
    status: "In development",
    hero: {
      eyebrow: "AxiomLabs \u00b7 Research project",
      headline: "Anomaly detection, before it becomes an incident.",
      sub: "A cloud-based security system in development at AxiomLabs, focused on anomaly detection and response, using machine learning and cloud infrastructure to monitor network traffic, user behaviour, and system activity, identify potential threats, and act to reduce risk.",
    },
    premise: {
      eyebrow: "The premise",
      headline: "Small agencies run critical systems with no security team.",
      sub: "Water and public infrastructure operators are now named targets, but most run lean IT with nobody watching traffic at 2am. Enterprise security tooling assumes an analyst on the other end. We're interested in what detection and response can look like when there isn't one, where the system has to do more of the triage itself.",
    },
    building: {
      eyebrow: "What we're building",
      headline: "Monitor, detect, respond.",
      sub: "The capability we're developing, scoped around operators who need the answer, not the alert queue.",
      items: [
        { title: "Network Traffic Monitoring", icon: Radar01Icon, body: "Continuous observation of traffic across the environment, establishing what normal looks like before judging what isn't." },
        { title: "Behavioural Analysis", icon: SearchVisualIcon, body: "User and system activity modelled over time, so a compromised account looks different from a busy one." },
        { title: "Anomaly Detection", icon: Alert02Icon, body: "Machine learning models that flag deviation from established patterns rather than matching a signature list." },
        { title: "Automated Response", icon: ArtificialIntelligence04Icon, body: "Proactive containment steps when confidence is high: the difference between a 2am alert and a 2am action." },
        { title: "Access Control", icon: LockPasswordIcon, body: "Role-based access and logged activity, so the security system is itself accountable." },
        { title: "Cloud-Native Infrastructure", icon: Database01Icon, body: "Built on cloud infrastructure so detection scales with the environment instead of a server in a closet." },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      headline: "Operators of systems that matter.",
      sub: "Scoped for organisations with real exposure and no security operations centre.",
      items: [
        "Water and wastewater utilities with connected SCADA",
        "Municipal agencies without a dedicated security team",
        "Public authorities holding resident and billing data",
        "Operators facing cyber requirements from funders or regulators",
      ],
    },
    stage: {
      eyebrow: "Where it stands",
      headline: "In development. No security claims yet.",
      body: "This system is being built and tested inside AxiomLabs. We're deliberately not making protection claims for software still in development. If you need security help today, talk to us about our technology practice instead, and we'll tell you honestly what's ready.",
    },
    cta: {
      eyebrow: "Get involved",
      headline: "Who's watching your network tonight?",
      sub: "If the honest answer is nobody, that's the conversation we want to have, whether or not this project is the answer.",
      cta: { label: "Talk to Our Team", href: "/contact" },
    },
  },
};

/** Single source of truth for the Product dropdown, mobile nav, and footer. */
export const productNav: {
  name: string;
  href: string;
  descriptor: string;
  icon: IconSvgElement;
  status?: string;
}[] = [
  {
    name: "Certificate Tracker",
    href: "/products/certificate-tracker",
    descriptor: "Track licences, certs, and compliance deadlines in one place",
    icon: Certificate01Icon,
  },
  ...Object.values(labProjects).map((l) => ({
    name: l.name,
    href: `/products/${l.slug}`,
    descriptor: l.descriptor,
    icon: l.navIcon,
    status: l.status,
  })),
];
