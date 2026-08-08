import Link from "next/link";
import { FooterSearch } from "./FooterSearch";

type FooterLink = readonly [href: string, label: string];

/** Footer directory. Some labels point at the nearest existing route where a
 *  dedicated page doesn't exist yet (Courses → /academy, Editorial →
 *  /research#articles, Partnerships → /contact) — swap the href when the real
 *  page ships. */
const FOOTER_GROUPS: ReadonlyArray<{ title: string; links: ReadonlyArray<FooterLink> }> = [
  {
    title: "For companies",
    links: [
      ["/practice", "Fractional Design Leadership"],
      ["/talent-hub", "Hire a Design Leader"],
      ["/diagnostic", "Design Health Diagnostic"],
    ],
  },
  {
    title: "Academy",
    links: [
      ["/academy/foundation", "Foundation"],
      ["/academy/executive", "Executive"],
      ["/faculty", "Faculty"],
      ["/academy", "Courses"],
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
      ["/articles/why-the-cdo-role-keeps-failing", "Articles"],
      ["/spotlights/a-cdo-who-stayed", "Spotlights"],
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

/** Canonical site footer: a full-width plum band on the usual page gutter
 *  (no inset box). Tagline + location and search on the left, the site
 *  directory on the right, a utility base row beneath. */
export function SiteFooter() {
  return (
    <footer className="dl-ftr">
      <div className="dl-ftr-top">
        <div className="dl-ftr-brand">
          <h2 className="dl-ftr-title">Make design count.</h2>
          <p className="dl-ftr-place">Lagos, Nigeria</p>
          <div className="dl-ftr-search">
            <FooterSearch />
          </div>
        </div>

        <nav className="dl-ftr-cols" aria-label="Footer">
          {FOOTER_GROUPS.map((group) => (
            <div className="dl-ftr-col" key={group.title}>
              <div className="dl-ftr-head">{group.title}</div>
              <div className="dl-ftr-links">
                {group.links.map(([href, label]) => (
                  <Link key={href + label} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="dl-ftr-base">
        <div className="dl-ftr-group" aria-label="Social">
          <a href="https://www.linkedin.com/company/design-lever-inc" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="dl-ftr-sep" aria-hidden="true">·</span>
          <a href="https://www.instagram.com/designleverinc" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        <div className="dl-ftr-group">
          <Link href="/privacy">Privacy</Link>
          <span className="dl-ftr-sep" aria-hidden="true">·</span>
          <Link href="/terms">Terms</Link>
          <span className="dl-ftr-sep" aria-hidden="true">·</span>
          <Link href="/cookies">Cookies</Link>
        </div>

        <div className="dl-ftr-copy">Design Lever Inc · © 2026</div>
      </div>
    </footer>
  );
}
