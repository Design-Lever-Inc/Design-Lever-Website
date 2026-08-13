import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";
import { FooterSearch } from "./FooterSearch";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

type FooterLink = readonly [href: string, label: string];

type FooterGroup = {
  title: string;
  links: ReadonlyArray<FooterLink>;
};

const FOOTER_GROUPS: ReadonlyArray<FooterGroup> = [
  {
    title: "For companies",
    links: [
      ["/practice", "Fractional Design Leadership"],
      ["/network#companies", "Hire a Design Leader"],
      ["/diagnostic", "Design Health Diagnostic"],
    ],
  },
  {
    title: "Academy",
    links: [
      ["/academy/foundation", "Foundation"],
      ["/academy/executive", "Executive"],
      ["/faculty", "Faculty"],
      ["/academy#tracks", "Courses"],
    ],
  },
  {
    title: "Network",
    links: [
      ["/talent-hub", "Fractional talent"],
      ["/the-lever", "Lever Community"],
      ["/bench", "Executive bench"],
    ],
  },
  {
    title: "Intelligence",
    links: [
      ["/research", "Research"],
      ["/research#articles", "Editorial"],
      ["/research#reports", "Reports"],
      ["/research#articles", "Articles"],
      ["/research#spotlights", "Spotlights"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/careers", "Careers"],
      ["/contact", "Partnerships"],
      ["/press", "Press"],
      ["/contact", "Contact"],
    ],
  },
];

function FootGroup({ title, links, cell }: FooterGroup & { cell: number }) {
  return (
    <section className="dl-footer-directory__box" data-cell={cell}>
      <h3>{title}</h3>
      <div className="dl-footer-directory__links">
        {links.map(([href, label]) => (
          <Link key={href + label} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Canonical site footer: one conversion prompt, structured site directory,
 * search and a compact utility base within a ruled plum composition. */
export function SiteFooter() {
  return (
    <footer className="dl-site-footer">
      <div className="dl-footer-main">
        <div className="dl-footer-intro">
          <h2>Let&apos;s help you find your next move</h2>
          <p>Start with the problem. We will help you find the right leadership, talent, programme or evidence.</p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dl-footer-action"
          >
            Book a discovery call
          </a>
        </div>

        <div className="dl-footer-directory">
          <div className="dl-footer-directory__search">
            <FooterSearch />
          </div>
          <nav className="dl-footer-directory__grid" aria-label="Footer navigation">
            {FOOTER_GROUPS.map((group, index) => (
              <FootGroup key={group.title} title={group.title} links={group.links} cell={index + 1} />
            ))}
            <div className="dl-footer-directory__box dl-footer-directory__box--empty" data-cell={6} aria-hidden="true" />
          </nav>
        </div>
      </div>

      <div className="dl-footer-utility">
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
            <span>© 2026 DESIGN LEVER INC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
