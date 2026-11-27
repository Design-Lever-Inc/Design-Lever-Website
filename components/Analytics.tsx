"use client";

import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { useEffect } from "react";

/** PostHog analytics in cookieless mode: nothing is stored in the visitor's
 *  browser, so no consent banner is needed (see /cookies). The project key is
 *  public; set NEXT_PUBLIC_POSTHOG_KEY in Vercel. Cookieless mode must also be
 *  switched on in the PostHog project settings or events are dropped. */
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

let started = false;

/** Only the live site reports, so previews and local testing stay out of the numbers. */
function isLiveSite() {
  return !!KEY && window.location.hostname.endsWith("designleverinc.com");
}

export function track(event: string, props?: Record<string, unknown>) {
  if (started) posthog.capture(event, props);
}

/** Classifies a clicked link into one of the conversion events. */
function trackLinkClick(e: MouseEvent) {
  const link = (e.target as Element | null)?.closest?.("a");
  if (!link) return;
  const href = link.getAttribute("href") || "";
  const label = link.textContent?.trim().slice(0, 80);
  const page = window.location.pathname;
  if (href.includes("conectr.me")) {
    track("book_call_clicked", { page, label });
  } else if (href.includes("tally.so")) {
    track("tally_opened", { page, label, form: href.split("/r/")[1]?.split(/[?#]/)[0] });
  } else if (link.hasAttribute("download") || /\.pdf($|[?#])/i.test(href)) {
    track("download_clicked", { page, label, file: decodeURIComponent(href.split("/").pop() || href) });
  }
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (started || !isLiveSite()) return;
    posthog.init(KEY!, {
      api_host: "https://eu.i.posthog.com",
      ui_host: "https://eu.posthog.com",
      defaults: "2026-08-30",
      cookieless_mode: "always",
      capture_pageview: "history_change",
      autocapture: false,
      disable_session_recording: true,
    });
    started = true;
    document.addEventListener("click", trackLinkClick, true);
  }, []);

  // Articles and spotlights: count a read once the visitor scrolls 75% of the page.
  useEffect(() => {
    if (!/^\/(articles|spotlights)\//.test(pathname)) return;
    let sent = false;
    const onScroll = () => {
      const seen = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (sent || seen < 0.75) return;
      sent = true;
      track("article_read", { page: pathname, type: pathname.split("/")[1] === "articles" ? "article" : "spotlight" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
