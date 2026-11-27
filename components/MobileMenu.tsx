"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

const GROUPS: [string, [string, string][]][] = [
  ["Home", [["/", "Home"]]],
  ["Practice", [["/practice", "Practice"]]],
  [
    "Academy",
    [
      ["/academy", "The Academy"],
      ["/academy/foundation", "Foundation track"],
      ["/academy/executive", "Executive track"],
      ["/faculty", "Faculty"],
    ],
  ],
  [
    "Network",
    [
      ["/network", "The Network"],
      ["/the-lever", "The Lever · Community"],
      ["/talent-hub", "Talent Hub"],
      ["/bench", "The bench"],
    ],
  ],
  [
    "Research",
    [
      ["/research", "Research"],
      ["/diagnostic", "The Diagnostic"],
    ],
  ],
  [
    "About",
    [
      ["/about", "About"],
      ["/careers", "Careers"],
      ["/press", "Press"],
      ["/contact", "Contact"],
    ],
  ],
];

/** Touch-friendly menu for small screens: the hover dropdowns of the desktop
 *  nav don't exist on touch, so under 900px the menu collapses behind a
 *  burger button into a full-width cream panel. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(68);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // close on navigation; lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // flag the open state so the nav's scrolled backdrop-filter can be
    // dropped: backdrop-filter makes the nav a containing block for the
    // panel's position:fixed, collapsing it against the nav when scrolled.
    document.body.classList.toggle("dl-menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("dl-menu-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const getLinks = () => Array.from(panel?.querySelectorAll<HTMLElement>("a[href]") ?? []);
    getLinks()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const links = getLinks();
      if (!links.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      const active = document.activeElement;
      if (!panel?.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // the nav's height varies (announcement bar, wrapped rows): anchor the
  // panel to the nav's real bottom edge at the moment it opens
  const toggle = (e: React.MouseEvent) => {
    const nav = (e.currentTarget as HTMLElement).closest(".dl-nav");
    if (nav) setPanelTop(Math.max(0, Math.round(nav.getBoundingClientRect().bottom)));
    setOpen((o) => !o);
  };

  return (
    <div className="dl-mnav">
      <button
        className="dl-mnav-btn"
        ref={buttonRef}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        {open ? "CLOSE ×" : "MENU ☰"}
      </button>
      {open && (
        <div id="mobile-navigation" className="dl-mnav-panel" role="dialog" aria-modal="true" aria-label="Navigation menu" ref={panelRef} style={{ top: panelTop }}>
          {GROUPS.map(([title, links]) => (
            <div key={title} className="dl-mnav-group">
              {links.map(([href, label], i) => (
                <Link
                  key={href}
                  href={href}
                  className={i === 0 ? "dl-mnav-link dl-mnav-link--head" : "dl-mnav-link"}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
          <a href={BOOK_CALL_URL} target="_blank" rel="noopener" className="dl-mnav-cta">
            Book a call
          </a>
        </div>
      )}
    </div>
  );
}
