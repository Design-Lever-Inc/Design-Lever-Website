"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Per-page scroll persistence, as specified in the handoff:
 *  sessionStorage keyed by pathname, restored on load/navigation. */
export function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    const key = "dlsc:" + pathname;
    if (!location.hash) {
      const y = +(sessionStorage.getItem(key) ?? 0);
      if (y) window.scrollTo(0, y);
    }
    const onScroll = () => sessionStorage.setItem(key, String(window.pageYOffset));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
