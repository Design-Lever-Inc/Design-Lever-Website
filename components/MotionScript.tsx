"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// useLayoutEffect on the client (so the hidden state lands before paint, with no
// flash), useEffect on the server (React would warn otherwise; it's a no-op).
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Site-wide entrance motion + scroll affordances. Zero per-page markup:
 *  - Content sections fade + rise as they enter the viewport (below-the-fold
 *    only, so nothing above the fold is ever hidden → no flash, no JS
 *    dependency for first paint).
 *  - Grid children stagger in under the section rise.
 *  - The pinned nav gains a soft elevation once the page is scrolled.
 *  - Fully disabled under prefers-reduced-motion.
 */
export function MotionScript() {
  const pathname = usePathname();
  const ioRef = useRef<IntersectionObserver | null>(null);

  // ---- entrance reveal (re-runs per route so client-nav pages animate too) ----
  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // the page's max-width wrapper is the first <div> under .pg-<slug>
    const wrapper = document.querySelector<HTMLElement>('[class^="pg-"] > div, [class*=" pg-"] > div');
    if (!wrapper) return;

    const vh = window.innerHeight;
    const sections = (Array.from(wrapper.children) as HTMLElement[]).filter(
      (el) =>
        !el.classList.contains("dl-nav") &&
        !el.querySelector("#dl-foot-grid") && // footer
        !el.classList.contains("dl-ov"), // modal overlay
    );

    const revealed: HTMLElement[] = [];
    const observed: HTMLElement[] = [];
    let aboveFoldIndex = 0;

    sections.forEach((section) => {
      section.classList.add("dl-reveal");
      revealed.push(section);

      // stagger the children of any grid with several items (rosters, stats)
      section.querySelectorAll<HTMLElement>('[style*="grid"]').forEach((grid) => {
        const kids = Array.from(grid.children) as HTMLElement[];
        if (kids.length >= 3 && kids.length <= 40) {
          kids.forEach((kid, i) => {
            kid.classList.add("dl-reveal-item");
            kid.style.setProperty("--i", String(i));
          });
        }
      });

      const top = section.getBoundingClientRect().top;
      if (top < vh * 0.85) {
        // in / near the first viewport: play on load with a gentle stagger
        const delay = Math.min(aboveFoldIndex, 4) * 90;
        aboveFoldIndex += 1;
        window.setTimeout(() => play(section), delay);
      } else {
        observed.push(section);
      }
    });

    function play(el: HTMLElement) {
      // double rAF so the transition runs from the hidden state, not instantly
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          el.classList.add("dl-in");
          window.setTimeout(() => el.classList.add("dl-settled"), 900);
        }),
      );
    }

    // reveal-on-scroll for the rest. IntersectionObserver is universal; the
    // only failsafe is the no-IO case (reveal immediately so nothing hides).
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              play(entry.target as HTMLElement);
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
      );
      ioRef.current = io;
      observed.forEach((el) => io!.observe(el));
    } else {
      observed.forEach((el) => play(el));
    }

    return () => {
      io?.disconnect();
      revealed.forEach((el) => {
        el.classList.remove("dl-reveal", "dl-in", "dl-settled");
        el.querySelectorAll(".dl-reveal-item").forEach((k) => {
          k.classList.remove("dl-reveal-item");
          (k as HTMLElement).style.removeProperty("--i");
        });
      });
    };
  }, [pathname]);

  // ---- nav elevation on scroll (independent of reveal / reduced-motion) ----
  useEffect(() => {
    const nav = () => document.querySelector<HTMLElement>(".dl-nav");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav()?.classList.toggle("dl-nav--scrolled", window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
