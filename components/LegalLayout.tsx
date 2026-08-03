import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

/** Shared chrome + typography wrapper for the legal pages (privacy, terms).
 *  Prose elements inside are styled by the `.dl-legal` rules in globals.css. */
export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pg-legal">
      <div style={{ maxWidth: "1440px", margin: "0 auto", background: "#FDFBF0", overflowX: "clip" }}>
        <SiteNav active="none" />
        <div style={{ padding: "88px 64px 44px" }}>
          <div style={{ maxWidth: "760px" }}>
            <span
              style={{
                font: "400 11px 'Spline Sans Mono',monospace",
                color: "#FF6D35",
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              Legal
            </span>
            <h1
              style={{
                font: "400 64px/1.04 'Faculty Glyphic',serif",
                color: "#44063B",
                letterSpacing: "-.02em",
                margin: "26px 0 22px",
                textWrap: "balance",
              }}
            >
              {title}
            </h1>
            <div
              style={{
                font: "400 12px 'Spline Sans Mono',monospace",
                color: "rgba(68,6,59,.55)",
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              Last updated · {updated}
            </div>
            <p style={{ font: "400 18px/1.6 'Inter Tight',sans-serif", color: "rgba(68,6,59,.78)", margin: "28px 0 0" }}>
              {intro}
            </p>
          </div>
        </div>
        <div style={{ padding: "16px 64px 110px" }}>
          <div className="dl-legal" style={{ maxWidth: "760px" }}>
            {children}
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
