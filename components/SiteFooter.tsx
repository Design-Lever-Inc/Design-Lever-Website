import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { FooterSearch } from "./FooterSearch";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

type FooterLink = readonly [href: string, label: string];

const FOOTER_GROUPS: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<FooterLink>;
}> = [
  {
    title: "Practice",
    links: [
      ["/practice", "Overview"],
      ["/practice#pricing", "Engagement models"],
      ["/diagnostic", "Cost diagnostic"],
      ["/practice#start", "How it works"],
    ],
  },
  {
    title: "Academy",
    links: [
      ["/academy", "Overview"],
      ["/academy/foundation", "Foundation"],
      ["/academy/executive", "Executive"],
      ["/faculty", "Faculty"],
    ],
  },
  {
    title: "Network",
    links: [
      ["/network", "Overview"],
      ["/the-lever", "The Lever"],
      ["/talent-hub", "Talent Hub"],
      ["/bench", "Executive bench"],
    ],
  },
  {
    title: "Research",
    links: [
      ["/research", "Overview"],
      ["/research#reports", "Reports & papers"],
      ["/research#articles", "Articles"],
      ["/research#spotlights", "Spotlights"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/careers", "Careers"],
      ["/press", "Press"],
      ["/contact", "Contact us"],
    ],
  },
];

function FootRow({ title, links }: { title: string; links: ReadonlyArray<FooterLink> }) {
  const [overview, ...secondaryLinks] = links;

  return (
    <div className="dl-footer-directory__row">
      <Link className="dl-footer-directory__main" href={overview[0]}>
        <span>{title}</span>
      </Link>
      <div className="dl-footer-directory__links">
        {secondaryLinks.map(([href, label]) => (
          <Link key={href + label} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Canonical site footer: one conversion prompt, structured site directory,
 * search and a compact utility base within a ruled plum composition. */
export function SiteFooter() {
  return (
    <footer className="dl-site-footer">
      <div className="dl-footer-plate">
        <div className="dl-footer-plate__top">
          <div className="dl-footer-intro">
            <span className="dl-footer-eyebrow">Find your next move</span>
            <h2>What does your design function need next?</h2>
            <p>Start with the problem. We will help you find the right leadership, talent, programme or evidence.</p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dl-footer-action"
            >
              Book a discovery call <ArrowIcon />
            </a>
          </div>

          <div className="dl-footer-directory">
            <div className="dl-footer-directory__search">
              <FooterSearch />
            </div>
            <nav aria-label="Footer navigation">
              {FOOTER_GROUPS.map((group) => (
                <FootRow key={group.title} title={group.title} links={group.links} />
              ))}
            </nav>
          </div>
        </div>

        <div className="dl-footer-plate__base">
          <div className="dl-footer-meta">
            <div className="dl-footer-socials" aria-label="Social media">
              <a href="https://www.linkedin.com/company/design-lever-inc" target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowIcon />
              </a>
              <a href="https://x.com/designleverinc" target="_blank" rel="noopener noreferrer">
                X <ArrowIcon />
              </a>
              <a href="https://www.instagram.com/designleverinc" target="_blank" rel="noopener noreferrer">
                Instagram <ArrowIcon />
              </a>
            </div>

            <div className="dl-footer-legal">
              <div className="dl-footer-legal__links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
              <span>© 2026 Design Lever Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
