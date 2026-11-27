import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, articleMetadata, type ArticleSeo } from "@/lib/seo";

const SEO: ArticleSeo = {
  title: "What a design health assessment actually finds",
  description: "Five costs show up in almost every leaderless design function. None of them appear on a design budget line.",
  path: "/articles/design-health-assessment",
};

export const metadata = articleMetadata(SEO);

export default function PageArticlesDesignHealthAssessment() {
  return (
    <div className="pg-articles-design-health-assessment">
      <JsonLd data={articleJsonLd(SEO)} />
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="research" />
        {/* ARTICLE HERO */}
        <div style={{padding:"110px 64px 0",maxWidth:"900px"}}>
          <Link href="/research" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",marginBottom:"40px"}}><ArrowIcon direction="left" /> All resources</Link>
          <h1 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 32px",textWrap:"balance"}}>What a design health assessment actually finds.</h1>
          <div style={{display:"flex",gap:"28px",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".02em"}}>
            <span>By the Design Lever research team</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>2026</span>
          </div>
        </div>
        <div style={{padding:"56px 64px 0"}}>
          <img src="/assets/img/article-2.svg" alt="" style={{width:"100%",height:"460px",display:"block",objectFit:"cover"}} />
        </div>
        {/* ARTICLE BODY */}
        <div style={{padding:"72px 64px 40px",display:"grid",gridTemplateColumns:"minmax(0,760px) 1fr",gap:"72px",alignItems:"start"}}>
          <div>
            <p id="a-overview" style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"#44063B",margin:"0 0 32px"}}>
              Five costs show up in almost every leaderless design function. None of them appear on a design budget line.
            </p>
            <p style={{font:"400 16px/1.75 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              Rework, duplicated tooling, stalled approvals, quiet attrition, and brand drift. Each is measurable, and each traces back to the same missing role.
            </p>
            <h2 id="a-tenure" style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",margin:"48px 0 20px",letterSpacing:"-.01em"}}>The five costs</h2>
            <p style={{font:"400 16px/1.75 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              Engineering rework alone typically runs 15–30% of build time in functions without design leadership. The others compound it.
            </p>
            <blockquote style={{font:"400 24px/1.3 'Faculty Glyphic',serif",color:"#44063B",margin:"44px 0",paddingLeft:"28px",borderLeft:"3px solid #FF7D44",letterSpacing:"-.01em"}}>The costs are real and recurring. They are just filed under other departments.</blockquote>
            <h2 id="a-window" style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",margin:"48px 0 20px",letterSpacing:"-.01em"}}>What to do with the findings</h2>
            <p style={{font:"400 16px/1.75 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 26px"}}>
              Score the function, price the leaks, and decide: hire, contract, or install fractional leadership until the organisation is ready.
            </p>
          </div>
          <aside style={{position:"sticky",top:"100px"}}>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"16px"}}>In this piece</div>
            <nav className="dl-toc" style={{display:"flex",flexDirection:"column"}}>
              <a href="#a-overview">Overview</a>
              <a href="#a-tenure">The five costs</a>
              <a href="#a-window">What to do with the findings</a>
            </nav>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",margin:"34px 0 14px"}}>Share</div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace"}}>
              <a className="dl-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.designleverinc.com" target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>LinkedIn <ArrowIcon /></a>
              <a className="dl-link" href="https://x.com/intent/post?url=https%3A%2F%2Fwww.designleverinc.com" target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>X / Twitter <ArrowIcon /></a>
              <Link className="dl-link" href="/contact" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>Email <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
        {/* CONTRIBUTE STRIP */}
        <div style={{padding:"64px",background:"#FFBCE8",margin:"40px 64px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}>
          <div style={{font:"400 24px/1.15 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"520px"}}>This essay draws on the open dataset. Add your numbers to it.</div>
          <Link href="/research#data" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",background:"#FDFBF0",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Contribute to the research <ArrowIcon /></Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
