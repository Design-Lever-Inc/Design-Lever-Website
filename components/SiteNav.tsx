import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

type NavSection = "home" | "practice" | "about" | "none";

const navLinkStyle = {
  font: "400 12px 'Spline Sans Mono',monospace",
  textDecoration: "none",
  letterSpacing: ".1em",
  textTransform: "uppercase",
  padding: "14px 16px",
  display: "flex",
  alignItems: "center",
  gap: "7px",
  position: "relative",
  background: "transparent",
  border: "0",
  cursor: "pointer",
} as const;

function NavItem({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <div className="dl-navitem" style={{ position: "relative" }}>
      <Link
        className={isActive ? "dl-navlink dl-navlink--active" : "dl-navlink"}
        style={{ ...navLinkStyle, color: isActive ? "#FF7D44" : "#44063B" }}
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}

/** Canonical sticky nav: cream, hairline bottom border, logo left, mono links
 *  pushed right against the orange CTA. Dropdowns on hover, no chevrons. */
export function SiteNav({ active = "none" }: { active?: NavSection }) {
  return (
    <div
      className="dl-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        padding: "20px 64px",
        borderBottom: "1px solid rgba(68,6,59,.16)",
        background: "#FDFBF0",
      }}
    >
      <Link className="dl-navbrand" href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
        <img
          src="/assets/logo-full.webp"
          alt="Design Lever Inc."
          style={{ height: "27.6px", width: "auto", display: "block" }}
        />
      </Link>
      <div
        className="dl-navmenu"
        style={{ display: "flex", alignItems: "center", gap: "2px", marginLeft: "auto", marginRight: "28px" }}
      >
        <NavItem href="/" label="Home" isActive={active === "home"} />
        <NavItem href="/practice" label="Practice" isActive={active === "practice"} />
        <NavItem href="/about" label="About" isActive={active === "about"} />
      </div>
      <MobileMenu />
      <a
        href={BOOK_CALL_URL}
        target="_blank"
        rel="noopener"
        className="dl-navcta"
        style={{
          font: "400 12px 'Spline Sans Mono',monospace",
          color: "#44063B",
          background: "#FF7D44",
          padding: "14px 24px",
          textDecoration: "none",
          letterSpacing: ".04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Book a call
      </a>
    </div>
  );
}
