"use client";
import { useEffect } from "react";

/**
 * Site-wide declarative widget drivers, ported from the prototype inline
 * scripts. Markup opts in via data attributes; pages without the markup are
 * unaffected.
 *
 *  - Faculty filter pills: [data-fcat] pills set data-filter on #dl-facwrap.
 *  - Bench: [data-bcat] filter pills, [data-exec] roster -> profile view,
 *    .dl-back returns to roster.
 *  - Contact: #dl-send opens the external form.
 */
export function SiteBehaviors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      // faculty filter pills
      const f = target.closest("[data-fcat]");
      if (f) {
        const grid = document.getElementById("dl-facwrap");
        if (grid) {
          const cat = f.getAttribute("data-fcat") ?? "all";
          grid.setAttribute("data-filter", cat);
          document.querySelectorAll<HTMLElement>("[data-fcat]").forEach((p) => {
            const on = p.getAttribute("data-fcat") === cat;
            p.style.background = on ? "#FF7D44" : "transparent";
            p.style.color = on ? "#FDFBF0" : "#44063B";
            p.style.borderColor = on ? "#44063B" : "rgba(68,6,59,.35)";
          });
        }
        return;
      }

      // bench page: category filter, roster -> profile, back
      const page = document.getElementById("dl-benchpage");
      if (page) {
        const b = target.closest("[data-bcat]");
        if (b) {
          document.getElementById("dl-bench")?.setAttribute("data-bfilter", b.getAttribute("data-bcat") ?? "all");
          document.querySelectorAll<HTMLElement>("[data-bcat]").forEach((p) => {
            const on = p === b;
            p.style.background = on ? "#FF7D44" : "transparent";
            p.style.color = on ? "#FDFBF0" : "#44063B";
            p.style.borderColor = on ? "#FF7D44" : "rgba(68,6,59,.35)";
          });
          return;
        }
        const c = target.closest("[data-exec]");
        if (c) {
          const id = c.getAttribute("data-exec");
          page.setAttribute("data-view", "profile");
          document.querySelectorAll<HTMLElement>(".dl-prof").forEach((pr) => {
            pr.style.display = pr.getAttribute("data-prof") === id ? "block" : "none";
          });
          window.scrollTo({ top: 0 });
          return;
        }
        if (target.closest(".dl-back")) {
          page.setAttribute("data-view", "roster");
          document.querySelectorAll<HTMLElement>(".dl-prof").forEach((pr) => (pr.style.display = "none"));
          window.scrollTo({ top: 0 });
          return;
        }
      }

      // contact page: external form
      if (target.closest("#dl-send")) {
        e.preventDefault();
        window.open("https://tally.so/r/GENERAL", "_blank", "noopener");
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
