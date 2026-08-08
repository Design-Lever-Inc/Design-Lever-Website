import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { ArrowIcon } from "./ArrowIcon";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

type NavSection = "home" | "practice" | "academy" | "network" | "research" | "about" | "none";

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

const dropStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  minWidth: "240px",
  background: "#14191D",
  padding: "6px 0",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(0)",
  boxShadow: "0 30px 70px -24px rgba(20,25,29,.55)",
  zIndex: 60,
} as const;

const dropItemStyle = { display: "block", padding: "13px 18px", textDecoration: "none" } as const;

const dropItemTextStyle = {
  font: "400 11px 'Spline Sans Mono',monospace",
  color: "#FDFBF0",
  letterSpacing: ".08em",
  textTransform: "uppercase",
} as const;

function DropItem({ href, label }: { href: string; label: string }) {
  return (
    <Link className="dl-di" style={dropItemStyle} href={href}>
      <div className="dl-di-t" style={dropItemTextStyle}>{label}</div>
    </Link>
  );
}

function NavItem({
  href,
  label,
  isActive,
  children,
}: {
  href: string;
  label: string;
  isActive: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="dl-navitem" style={{ position: "relative" }}>
      <Link
        className={isActive ? "dl-navlink dl-navlink--active" : "dl-navlink"}
        style={{ ...navLinkStyle, color: isActive ? "#FF6D35" : "#44063B" }}
        href={href}
      >
        {label}
      </Link>
      {children && (
        <div className="dl-drop" style={dropStyle}>
          {children}
        </div>
      )}
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
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
        <img
          src="/assets/logo-full.png"
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
        <NavItem href="/academy" label="Academy" isActive={active === "academy"}>
          <DropItem href="/academy/foundation" label="Foundation track" />
          <DropItem href="/academy/executive" label="Executive track" />
          <DropItem href="/faculty" label="Faculty" />
        </NavItem>
        <NavItem href="/network" label="Network" isActive={active === "network"}>
          <DropItem href="/the-lever" label="The Lever · Community" />
          <DropItem href="/talent-hub" label="Talent Hub" />
        </NavItem>
        <NavItem href="/research" label="Research" isActive={active === "research"}>
          <DropItem href="/research#reports" label="Reports & white papers" />
          <DropItem href="/research#articles" label="Articles" />
          <DropItem href="/research#playbooks" label="Playbooks" />
          <DropItem href="/research#data" label="Data & rates" />
        </NavItem>
        <NavItem href="/about" label="About" isActive={active === "about"}>
          <DropItem href="/careers" label="Careers" />
          <DropItem href="/press" label="Press" />
        </NavItem>
      </div>
      <MobileMenu />
      <a
        href={BOOK_CALL_URL}
        target="_blank"
        rel="noopener"
        className="dl-navcta"
        style={{
          font: "400 12px 'Spline Sans Mono',monospace",
          color: "#FDFBF0",
          background: "#FF6D35",
          padding: "14px 24px",
          textDecoration: "none",
          letterSpacing: ".04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Book a call <ArrowIcon />
      </a>
    </div>
  );
}
