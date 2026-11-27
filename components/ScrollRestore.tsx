"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Save each page's scroll position for refreshes. New route visits start at
 * the top; browser back/forward keeps its own scroll restoration. */
export function ScrollRestore() {
  const pathname = usePathname();
  const firstLoad = useRef(true);
  const historyNavigation = useRef(false);

  useEffect(() => {
    const onPopState = () => { historyNavigation.current = true; };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const key = "dlsc:" + pathname;
    if (firstLoad.current) {
      firstLoad.current = false;
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (navigation?.type === "reload" && !location.hash) {
        const y = +(sessionStorage.getItem(key) ?? 0);
        if (y) window.scrollTo(0, y);
      }
    } else if (historyNavigation.current) {
      historyNavigation.current = false;
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const onScroll = () => sessionStorage.setItem(key, String(window.pageYOffset));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
