import Link from "next/link";
import { FooterSearch } from "./FooterSearch";

const BOOK_CALL_URL = "https://www.conectr.me/s/book-call-q7r";

const colHeadStyle = {
  font: "400 10px 'Spline Sans Mono',monospace",
  color: "#FF6D35",
  letterSpacing: ".12em",
  textTransform: "uppercase",
  marginBottom: "16px",
} as const;

const colListStyle = { display: "flex", flexDirection: "column", gap: "11px" } as const;

const socialStyle = {
  font: "400 11px 'Spline Sans Mono',monospace",
  letterSpacing: ".04em",
  textTransform: "uppercase",
} as const;

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="dl-fcol">
      <div style={colHeadStyle}>{title}</div>
      <div style={colListStyle}>
        {links.map(([href, label]) => (
          <Link key={href + label} href={href}>{label}</Link>
        ))}
      </div>
    </div>
  );
}

/** Canonical footer, identical on every page: plum, 1fr auto grid, five link
 *  columns, social row + copyright. Collapses at 900px / 600px (see CSS). */
export function SiteFooter() {
  return (
    <div style={{ background: "#44063B", overflow: "hidden" }}>
      <div
        id="dl-foot-grid"
        style={{
          padding: "84px 64px 60px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "77px",
          borderBottom: "1px solid rgba(253,251,240,.16)",
        }}
      >
        <div>
          <div
            style={{
              font: "400 11px 'Spline Sans Mono',monospace",
              color: "#FF6D35",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Ready when you are
          </div>
          <h2
            style={{
              font: "400 52px/1.05 'Faculty Glyphic',serif",
              color: "#FDFBF0",
              margin: "0 0 34px",
              letterSpacing: "-.01em",
              maxWidth: "520px",
            }}
          >
            Design leadership infrastructure for Africa.
          </h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener"
              className="dl-btn hov-cream-plum"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                font: "400 12px 'Spline Sans Mono',monospace",
                color: "#44063B",
                background: "#FF6D35",
                padding: "16px 26px",
                textDecoration: "none",
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              Book a call →
            </a>
            <Link
              href="/diagnostic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                font: "400 12px 'Spline Sans Mono',monospace",
                color: "#FDFBF0",
                border: "1px solid rgba(253,251,240,.4)",
                padding: "16px 26px",
                textDecoration: "none",
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              Take the diagnostic
            </Link>
          </div>
          <FooterSearch />
        </div>
        <div
          id="dl-foot-links"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px 72px",
            alignSelf: "end",
            justifySelf: "end",
          }}
        >
          <FootCol
            title="For companies"
            links={[
              ["/diagnostic", "Cost diagnostic"],
            ]}
          />
          <FootCol
            title="Network"
            links={[
              ["/the-lever", "The Lever"],
              ["/talent-hub", "Talent Hub"],
              ["/bench", "The bench"],
            ]}
          />
          <FootCol
            title="Academy"
            links={[
              ["/academy/foundation", "Foundation"],
              ["/academy/executive", "Executive"],
              ["/faculty", "Faculty"],
            ]}
          />
          <FootCol
            title="Research"
            links={[
              ["/research", "Research"],
              ["/articles/why-the-cdo-role-keeps-failing", "The Lever journal"],
              ["/spotlights/a-cdo-who-stayed", "Spotlights"],
            ]}
          />
          <FootCol
            title="More"
            links={[
              ["/about", "About"],
              ["/careers", "Careers"],
              ["/press", "Press"],
              ["/contact", "Contact us"],
            ]}
          />
        </div>
      </div>
      <div style={{ padding: "38px 64px 30px" }}>
        <div
          className="dl-foot-sub"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "22px",
          }}
        >
          <div
            className="dl-fcol"
            style={{ display: "flex", gap: "22px", alignItems: "center", fontFamily: "'Spline Sans Mono',monospace" }}
          >
            <a href="https://www.linkedin.com/company/design-lever-inc" target="_blank" rel="noopener" style={socialStyle}>
              LinkedIn ↗
            </a>
            <a href="https://x.com/designleverinc" target="_blank" rel="noopener" style={socialStyle}>
              X / Twitter ↗
            </a>
            <a href="https://www.instagram.com/designleverinc" target="_blank" rel="noopener" style={socialStyle}>
              Instagram ↗
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              font: "400 11px 'Spline Sans Mono',monospace",
              color: "rgba(253,251,240,.5)",
              letterSpacing: ".04em",
            }}
          >
            <Link href="/privacy" className="dl-link" style={{ textTransform: "uppercase" }}>Privacy</Link>
            <Link href="/terms" className="dl-link" style={{ textTransform: "uppercase" }}>Terms</Link>
            <span>© 2026 Design Lever Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
