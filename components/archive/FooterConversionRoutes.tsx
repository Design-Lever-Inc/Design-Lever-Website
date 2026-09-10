import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { FooterSearch } from "@/components/FooterSearch";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

/**
 * Conversion-led footer treatment restored as the live footer entry panel.
 * It remains isolated here so the layout can be changed without disturbing
 * the navigation and legal bands below it.
 */
export function ArchivedFooterConversionRoutes() {
  return (
    <div className="dl-footer-primary">
      <div className="dl-footer-discover">
        <span className="dl-footer-eyebrow">Find your next move</span>
        <h2>What does your design function need next?</h2>
        <p>Start with the problem. We will help you find the right leadership, talent, programme or evidence.</p>
        <div className="dl-footer-primary__search"><FooterSearch /></div>
      </div>

      <nav className="dl-footer-routes" aria-label="Recommended next steps">
        <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="dl-footer-route dl-footer-route--primary">
          <span>For companies</span>
          <strong>Fix or scale a design function.</strong>
          <em>Book a discovery call <ArrowIcon /></em>
        </a>
        <Link href="/academy" className="dl-footer-route">
          <span>For design leaders</span>
          <strong>Build leadership capability.</strong>
          <em>Explore Academy <ArrowIcon /></em>
        </Link>
        <Link href="/network" className="dl-footer-route">
          <span>For hiring</span>
          <strong>Find vetted fractional talent.</strong>
          <em>Explore Network <ArrowIcon /></em>
        </Link>
      </nav>
    </div>
  );
}
