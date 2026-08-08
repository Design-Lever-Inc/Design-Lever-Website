import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Why the CDO role keeps failing in Nigeria", description: "The full-time Chief Design Officer is the right role at the wrong moment for most Nigerian growth-stage companies. The mandate is sound; the hire, at Series A" };

export default function PageArticlesWhyTheCdoRoleKeepsFailing() {
  return (
    <div className="pg-articles-why-the-cdo-role-keeps-failing">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="research" />
        {/* ARTICLE HERO */}
        <div style={{padding:"110px 64px 0",maxWidth:"900px"}}>
          <Link href="/research" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",marginBottom:"40px"}}><ArrowIcon direction="left" /> All resources</Link>
          <h1 style={{font:"400 64px/1.06 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 32px",textWrap:"balance"}}>Why the CDO role keeps failing in Nigeria.</h1>
          <div style={{display:"flex",gap:"28px",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".02em"}}>
            <span>By the Design Lever research team</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>2026</span>
          </div>
        </div>
        <div style={{padding:"56px 64px 0"}}>
          <img src="/assets/img/article-1.svg" alt="" style={{width:"100%",height:"460px",display:"block",objectFit:"cover"}} />
        </div>
        {/* ARTICLE BODY */}
        <div style={{padding:"72px 64px 40px",display:"grid",gridTemplateColumns:"minmax(0,760px) 1fr",gap:"72px",alignItems:"start"}}>
          <div>
            <p id="a-overview" style={{font:"400 22px/1.55 'Inter Tight',sans-serif",color:"#44063B",margin:"0 0 32px"}}>
              The full-time Chief Design Officer is the right role at the wrong moment for most Nigerian growth-stage companies. The mandate is sound; the hire, at Series A to C, rarely survives contact with reality.
            </p>
            <p style={{font:"400 17px/1.75 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              One pattern repeats across our interviews: companies hire a senior design leader before the organisation can hold one. No structure, no measurement culture, no peer at the table. Within eighteen months the leader leaves.
            </p>
            <h2 id="a-tenure" style={{font:"400 32px/1.2 'Faculty Glyphic',serif",color:"#44063B",margin:"48px 0 20px",letterSpacing:"-.01em"}}>The tenure problem</h2>
            <p style={{font:"400 17px/1.75 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              A full-time CDO in Nigeria costs ₦25–60M in the first year once salary, recruitment and benefits are counted, and the statistical tenure is under two years. That is an expensive way to learn that the function was not ready.
            </p>
            <blockquote style={{font:"400 30px/1.3 'Faculty Glyphic',serif",color:"#44063B",margin:"44px 0",paddingLeft:"28px",borderLeft:"3px solid #FF6D35",letterSpacing:"-.01em"}}>The gap is never talent. It is the infrastructure the talent is dropped into.</blockquote>
            <h2 id="a-window" style={{font:"400 32px/1.2 'Faculty Glyphic',serif",color:"#44063B",margin:"48px 0 20px",letterSpacing:"-.01em"}}>The fractional window</h2>
            <p style={{font:"400 17px/1.75 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              The fractional model exists precisely for this window: build the leadership system, prove design on the P&L, and hand it over running, so that when the company does hire full-time, there is a seat worth taking.
            </p>
          </div>
          <aside style={{position:"sticky",top:"100px"}}>
            <div style={{font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"16px"}}>In this piece</div>
            <nav className="dl-toc" style={{display:"flex",flexDirection:"column"}}>
              <a href="#a-overview">Overview</a>
              <a href="#a-tenure">The tenure problem</a>
              <a href="#a-window">The fractional window</a>
            </nav>
            <div style={{font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",margin:"34px 0 14px"}}>Share</div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace"}}>
              <a className="dl-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.designleverinc.com" target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>LinkedIn <ArrowIcon /></a>
              <a className="dl-link" href="https://x.com/intent/post?url=https%3A%2F%2Fwww.designleverinc.com" target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>X / Twitter <ArrowIcon /></a>
              <Link className="dl-link" href="/contact" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>Email <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
        {/* CONTRIBUTE STRIP */}
        <div style={{padding:"64px",background:"#FFBCE8",margin:"40px 64px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}>
          <div style={{font:"400 30px/1.15 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"520px"}}>This essay draws on the open dataset. Add your numbers to it.</div>
          <Link href="/research#data" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",background:"#FDFBF0",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Contribute to the research <ArrowIcon /></Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
