import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

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
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
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
          <nav className="dl-footer-directory__grid" aria-label="Footer navigation">
            {FOOTER_GROUPS.map((group, index) => (
              <FootGroup key={group.title} title={group.title} links={group.links} cell={index + 1} />
            ))}
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

          <div className="dl-footer-legal"><span>© 2026 DESIGN LEVER INC.</span></div>
        </div>
      </div>
    </footer>
  );
}
