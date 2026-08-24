/** Exact "Explore" arrow extracted from the Figma card SVG. */
export default function ExploreArrow({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={(size * 18) / 21} viewBox="93 222.5 21 18" fill="none" className={className} aria-hidden="true">
      <path d="M93 228.834H93.9487C94.5942 228.834 95.2225 228.625 95.7406 228.239L100.643 224.58C101.209 224.158 101.91 223.821 102.558 224.1C103.606 224.551 104.288 225.823 102.716 227.38L101.006 228.978H111.429C113.473 229.034 113.574 232.323 111.429 232.464H105.489C105.68 233.944 104.637 240.918 100.217 239.901C100.007 239.853 99.7937 239.805 99.5835 239.757C98.6647 239.552 97.0273 238.944 96.07 238.273C95.0734 237.575 94.0808 237.822 93 237.822" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
