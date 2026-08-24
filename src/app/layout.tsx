import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import { SITE, organizationSchema } from "@/lib/seo";

const abSans = localFont({
  variable: "--font-ab-sans",
  display: "swap",
  src: [
    { path: "../../public/fonts/dm-sans/dm-sans-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/dm-sans/dm-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/dm-sans/dm-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/dm-sans/dm-sans-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/dm-sans/dm-sans-900.woff2", weight: "900", style: "normal" },
  ],
});

/* GeistPixel — used only for the decorative footer "Axiom Black" wordmark. */
const geistPixel = localFont({
  variable: "--font-geist-pixel",
  display: "swap",
  src: [{ path: "../../public/fonts/geist-pixel/GeistPixel-Line.otf", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Axiom Black: Water Infrastructure Engineering & Technology",
    template: "%s · Axiom Black",
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${abSans.variable} ${geistPixel.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-surface text-body font-ab antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
