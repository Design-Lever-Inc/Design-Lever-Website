import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="pg-notfound">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="none" />
        {/* 404, centered */}
        <div style={{minHeight:"64vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 64px"}}>
          <div style={{font:"400 clamp(160px,26vw,340px)/.88 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.03em",margin:"0 0 8px"}}>404</div>
          <h1 style={{font:"var(--type-h2)",color:"#44063B",letterSpacing:"-.015em",margin:"0 0 20px",maxWidth:"620px",textWrap:"balance"}}>This page could not be found.</h1>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0 0 40px",maxWidth:"440px"}}>
            The link may be broken, or the page has moved.
          </p>
          <Link className="dl-btn" href="/" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none"}}>Back to home <ArrowIcon /></Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
