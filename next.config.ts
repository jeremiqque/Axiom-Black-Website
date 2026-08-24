import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Legacy Framer URLs → new /solutions/* structure (brief §4.3).
    // Audit the live site before launch and extend this list.
    return [
      { source: "/water-page-axiom-black", destination: "/solutions/water", permanent: true },
      { source: "/open-position", destination: "/careers", permanent: true },
      { source: "/risk-management-software-system", destination: "/solutions/risk-assessment", permanent: true },
    ];
  },
};

export default nextConfig;
