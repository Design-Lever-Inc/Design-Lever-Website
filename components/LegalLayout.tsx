import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Give each top-level <h2> an id and collect them for the contents list. */
function withSectionIds(children: ReactNode) {
  const toc: { id: string; label: string }[] = [];
  const content = Children.map(children, (child) => {
    if (isValidElement<{ children?: ReactNode }>(child) && child.type === "h2" && typeof child.props.children === "string") {
      const id = slugify(child.props.children);
      toc.push({ id, label: child.props.children });
      return cloneElement(child as ReactElement<{ id?: string }>, { id });
    }
    return child;
  });
  return { content, toc };
}

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
  children: ReactNode;
}) {
  const { content, toc } = withSectionIds(children);
  return (
    <div className="pg-legal">
      <div style={{ maxWidth: "1440px", margin: "0 auto", background: "#FDFBF0", overflowX: "clip" }}>
        <SiteNav active="none" />
        <div style={{ padding: "88px 64px 44px" }}>
          <div style={{ maxWidth: "760px" }}>
            <span
              style={{
                font: "400 12px 'Spline Sans Mono',monospace",
                color: "#B8430F",
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              Legal
            </span>
            <h1
              style={{
                font: "400 60px/1.04 'Faculty Glyphic',serif",
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
                font: "400 13px 'Spline Sans Mono',monospace",
                color: "rgba(68,6,59,.6)",
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              Last updated · {updated}
            </div>
            <p style={{ font: "400 18px/1.6 'Roboto Flex',sans-serif", color: "rgba(68,6,59,.78)", margin: "28px 0 0" }}>
              {intro}
            </p>
          </div>
        </div>
        <div className="dl-legal-body" style={{ padding: "16px 64px 110px" }}>
          <div className="dl-legal" style={{ maxWidth: "760px" }}>
            {content}
          </div>
          {toc.length > 2 && (
            <nav className="dl-legal-toc" aria-label="On this page">
              <div className="dl-legal-toc__title">On this page</div>
              {toc.map(({ id, label }) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
