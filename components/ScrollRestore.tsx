"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Per-page scroll persistence, as specified in the handoff: sessionStorage
 *  keyed by pathname. Restores only on a real page load (refresh/return),
 *  client-side navigations must land at the top like any link click, so
 *  there we only record, never restore. */
export function ScrollRestore() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    const key = "dlsc:" + pathname;
    if (firstLoad.current) {
      firstLoad.current = false;
      if (!location.hash) {
        const y = +(sessionStorage.getItem(key) ?? 0);
        if (y) window.scrollTo(0, y);
      }
    }
    const onScroll = () => sessionStorage.setItem(key, String(window.pageYOffset));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
