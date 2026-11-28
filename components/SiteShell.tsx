import "@/styles/globals.css";
import "@/styles/prototype.css";
import "@/styles/responsive.css";
import "@/styles/motion.css";
import { SiteBehaviors } from "@/components/SiteBehaviors";
import { ScrollRestore } from "@/components/ScrollRestore";
import { MotionScript } from "@/components/MotionScript";
import { Analytics } from "@/components/Analytics";

/** Everything the public site needs around a page: its stylesheets, the canvas
 *  and the site-wide scripts. The Studio at /studio sits outside it, so the
 *  site's global CSS never reaches the editing interface. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="dl-canvas">{children}</div>
      <SiteBehaviors />
      <ScrollRestore />
      <MotionScript />
      <Analytics />
    </>
  );
}
