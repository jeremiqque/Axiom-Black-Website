import type { Metadata } from "next";

export const SITE = {
  name: "Axiom Black",
  url: "https://axiomblack.com",
  description:
    "Specialist engineering and technology partner to municipal utilities and public agencies, covering water infrastructure, modeling, risk, and applied software.",
};

/** Per-page metadata helper (unique title + description per page). */
export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Organization JSON-LD for the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newark",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    knowsAbout: [
      "Water infrastructure engineering",
      "Hydraulic modeling",
      "Infrastructure risk assessment",
      "Public-sector software development",
    ],
  };
}
