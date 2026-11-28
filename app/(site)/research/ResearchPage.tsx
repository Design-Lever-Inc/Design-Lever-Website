"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { imageUrl } from "@/sanity/lib/image";
import { postPath } from "@/sanity/lib/paths";
import type { PostCard, Report } from "@/sanity/lib/queries";

const EMPTY_FORM = { name: "", email: "", topic: "Take the practitioner survey", message: "" };

/** Tag styles for each report stage, as in the original design. */
const STAGE: Record<Report["stage"], { label: string; style: React.CSSProperties }> = {
  planned: { label: "PLANNED", style: { color: "rgba(68,6,59,.55)", border: "1px solid rgba(68,6,59,.3)" } },
  in_production: { label: "IN PRODUCTION", style: { color: "#FDFBF0", background: "#FF7D44" } },
  open_for_input: { label: "OPEN FOR INPUT", style: { color: "#FF7D44", border: "1px solid #FF7D44" } },
  published: { label: "PUBLISHED", style: { color: "#FDFBF0", background: "#44063B" } },
};

/** A report's button: the PDF if one is uploaded, else its link, else the
 *  research contact form (with an email fallback if scripts are off). */
function ReportAction({ report, onForm, className, style, children }: {
  report: Report;
  onForm: (e?: { preventDefault?: () => void }) => void;
  className: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (report.fileUrl) {
    return <a className={className} href={`${report.fileUrl}?dl=`} download="" style={style}>{children}</a>;
  }
  if (report.link) {
    return <a className={className} href={report.link} target="_blank" rel="noopener" style={style}>{children}</a>;
  }
  const subject = encodeURIComponent(`${report.actionLabel}: ${report.title}`);
  return <a className={className} onClick={onForm} href={`mailto:research@designleverinc.com?subject=${subject}`} style={style}>{children}</a>;
}

export interface ResearchContent {
  articles: PostCard[];
  spotlights: PostCard[];
  reports: Report[];
}

export function ResearchPage({ articles, spotlights: allSpotlights, reports }: ResearchContent) {
  // The spotlight image swap is built for four items (see .dl-spotimg in prototype.css).
  const spotlights = allSpotlights.slice(0, 4);
  const flagship = reports.find((r) => r.flagship);
  const papers = reports.filter((r) => r !== flagship);
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  // resource filter pills: set data-filter on the wrapper, restyle pills,
  // scroll the grid into view (ported from the prototype)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const b = (e.target as Element | null)?.closest?.("[data-fcat]");
      if (!b) return;
      const host = document.getElementById("dl-reswrap");
      if (!host) return;
      const cat = b.getAttribute("data-fcat") ?? "all";
      host.setAttribute("data-filter", cat);
      b.parentNode?.querySelectorAll<HTMLElement>("[data-fcat]").forEach((x) => {
        const on = x.getAttribute("data-fcat") === cat;
        x.style.background = on ? "#FF7D44" : "transparent";
        x.style.color = on ? "#FDFBF0" : "#44063B";
        x.style.borderColor = on ? "#FF7D44" : "rgba(68,6,59,.35)";
      });
      const y = host.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const openForm = (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    setFormOpen(true);
    setSent(false);
  };
  const closeForm = () => setFormOpen(false);
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const setField =
    (k: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const setName = setField("name");
  const setEmail = setField("email");
  const setTopic = setField("topic");
  const setMessage = setField("message");
  const submitForm = () => setSent(true);
  const notSent = !sent;

  return (
    <div className="pg-research">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="research" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-page-hero-texture--motif" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",backgroundColor:"#4F83FF"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="rgba(68,6,59,.75)" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            <line x1="140" y1="440" x2="470" y2="440" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="140" y1="440" x2="140" y2="150" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="200" y1="440" x2="200" y2="380" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="260" y1="440" x2="260" y2="330" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="320" y1="440" x2="320" y2="360" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="380" y1="440" x2="380" y2="260" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="440" y1="440" x2="440" y2="190" strokeWidth="1" strokeDasharray="4 8"></line>
            <path d="M140 400 200 360 260 310 320 330 380 240 440 170" strokeWidth="1" strokeDasharray="4 8"></path>
            <circle cx="440" cy="170" r="10" strokeWidth="1" strokeDasharray="4 8"></circle>
          </svg>
          <div className="dl-research-hero-grid" style={{position:"relative",display:"grid",gridTemplateColumns:"minmax(0,7fr) minmax(0,3fr)",gap:"90px",zIndex:"1"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>RESEARCH</span>
              <h1 style={{font:"400 96px/1 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance"}}>The evidence behind design leadership in Africa.</h1>
              <p style={{font:"400 20px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.82)",maxWidth:"560px",margin:"0 0 48px"}}>
                Original research, benchmarks and analysis on design leadership, talent, careers and commercial performance across African businesses.
              </p>
              <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
                <a className="dl-btn hov-blue-cream" href="#reports" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#44063B"}}>Read the latest research <ArrowIcon direction="down" /></a>
                <a className="dl-link" href="#data" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>Browse the evidence</a>
              </div>
            </div>
          </div>
        </div>
        {/* THE GAP STAT */}
        {/* THREE STREAMS */}
        <div id="streams" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The standard</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em"}}>Every number, traceable to a source.</h2>
            <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"620px",margin:"0"}}>Research only becomes useful when people can see where it came from, how it was produced and what it can reasonably prove.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1.5px solid #44063B",borderColor:"#FAF9F5EB"}}>
            <div style={{padding:"36px 32px 40px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px",stroke:"#FF7D44"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Source transparency</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Every public figure is linked to its original source or clearly labelled as a Design Lever estimate.
              </p>
            </div>
            <div style={{padding:"36px 32px 40px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px",stroke:"#FF7D44"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Method before claim</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Research notes explain the sample, method, assumptions and limitations behind every finding.
              </p>
            </div>
            <div style={{padding:"36px 0 40px 32px"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" stroke="#FF7D44"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Updates stay visible</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Benchmarks change as the dataset grows. Previous figures remain dated so the history can be followed.
              </p>
            </div>
          </div>
        </div>
        {/* THE GAP, cream field, plum numbers */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The market</span>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)"}}>Cognitive Market Research, 2024</span>
          </div>
          <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"880px",margin:"0 0 28px",letterSpacing:"-.01em"}}>A large design workforce. A small commercial market.</h2>
          <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",maxWidth:"660px",margin:"0 0 64px"}}>Africa has an estimated 1.35 million designers. The continent's design services market is estimated at $323 million. The gap is worth examining, not simplifying.</p>
          <div style={{borderTop:"1px solid rgba(68,6,59,.22)"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D4499",letterSpacing:".04em",textTransform:"uppercase"}}>Africa</div>
              <div style={{font:"400 60px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",textAlign:"center"}}>$323M</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $239
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D4499",letterSpacing:".04em",textTransform:"uppercase"}}>United Kingdom</div>
              <div style={{font:"400 60px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",textAlign:"center"}}>$11.85B</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $6,015
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D4499",letterSpacing:".04em",textTransform:"uppercase"}}>United States</div>
              <div style={{font:"400 60px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",textAlign:"center"}}>$90B</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $19,432
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
          </div>
          <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",maxWidth:"660px",margin:"56px 0 0"}}>
            Market figures are estimates from external research. Comparable category definitions and source years are shown alongside every public comparison.
          </p>
        </div>
        {/* THE REPORT */}
        {/* RESOURCE FILTER BAR */}
        <div style={{position:"sticky",top:"84px",zIndex:"45",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",padding:"16px 64px",background:"#FDFBF0",borderTop:"1px solid rgba(68,6,59,.16)",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
          <button className="dl-fbtn" data-fcat="all" style={{color:"#FDFBF0",borderColor:"#FF7D44",backgroundColor:"#FF7D44"}}>All</button>
          <button className="dl-fbtn" data-fcat="reports" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Reports</button>
          <button className="dl-fbtn" data-fcat="data" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Data</button>
          <button className="dl-fbtn" data-fcat="articles" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Analysis</button>
          <button className="dl-fbtn" data-fcat="playbooks" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Tools</button>
        </div>
        {/* RESOURCES */}
        <div id="reports" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"56px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The library</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em"}}>Research, analysis and tools as they are published.</h2>
            <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"620px",margin:"0"}}>One library, four formats. Each item is labelled by what it is so readers can distinguish evidence from interpretation.</p>
            </div>
          </div>
          {/* Flagship report, cover + detail (image ≥ 4 cols) */}
          {flagship && (
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"stretch",marginBottom:"64px"}}>
            <div style={{position:"relative",minHeight:"440px",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px",backgroundColor:"#44063B"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",letterSpacing:".14em",textTransform:"uppercase"}}>{`Flagship report${flagship.publishedAt ? ` · ${flagship.publishedAt.slice(0, 4)}` : ""}`}</span>
                {flagship.flagshipDetails?.length && <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",letterSpacing:".06em"}}>{flagship.flagshipDetails.length}</span>}
              </div>
              <div>
                <div style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.01em"}}>{flagship.title}</div>
                {flagship.flagshipDetails?.edition && <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.6)",marginTop:"20px"}}>{flagship.flagshipDetails.edition}</div>}
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div style={{display:"inline-flex",alignSelf:"flex-start",gap:"8px",marginBottom:"22px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",border:"1px solid #FF7D44",padding:"5px 11px",textTransform:"uppercase"}}>{flagship.format}</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",padding:"5px 11px",...STAGE[flagship.stage].style,color:flagship.stage === "in_production" ? "#44063B" : STAGE[flagship.stage].style.color}}>{STAGE[flagship.stage].label}</span>
              </div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.72)",margin:"0 0 28px",maxWidth:"520px"}}>
                {flagship.summary}
              </p>
              {!!flagship.flagshipDetails?.facts?.length && (
              <div style={{borderTop:"1px solid rgba(68,6,59,.16)"}}>
                {flagship.flagshipDetails.facts.map((f, i, all) => (
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"14px 0",...(i < all.length - 1 ? {borderBottom:"1px solid rgba(68,6,59,.1)"} : {}),font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                  <span style={{color:"rgba(68,6,59,.55)"}}>{f.label}</span>
                  <span>{f.value}</span>
                </div>
                ))}
              </div>
              )}
              <ReportAction report={flagship} onForm={openForm} className="dl-btn" style={{alignSelf:"flex-start",marginTop:"28px",display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"15px 24px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#44063B"}}>{flagship.actionLabel} <ArrowIcon direction="right" /></ReportAction>
            </div>
          </div>
          )}
          {/* Working papers list */}
          <div style={{borderTop:"1.5px solid #44063B"}}>
            {papers.map((r, i) => (
            <div key={r._id} style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",...(i < papers.length - 1 ? {borderBottom:"1px solid rgba(68,6,59,.14)"} : {})}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".04em",textTransform:"uppercase"}}>{r.format}</span>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>{r.title}</div>
                <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>{r.summary}</p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",justifySelf:"start",transform:"translateX(10px)",padding:"5px 11px",...STAGE[r.stage].style}}>{STAGE[r.stage].label}</span>
              <ReportAction report={r} onForm={openForm} className="dl-link" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",transform:"translateX(10px)",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>{r.actionLabel}</ReportAction>
            </div>
            ))}
          </div>
        </div>
        <div id="dl-reswrap" data-filter="all">
          {/* PUBLICATIONS LIBRARY */}
          {/* ARTICLES */}
          <div id="articles" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{marginBottom:"48px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Analysis</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Field notes and analysis.</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"44px 24px"}}>
              {articles.map((a) => (
                <Link key={a._id} className="dl-rcard" href={postPath("article", a.slug)} style={{display:"block",textDecoration:"none"}}>
                  {a.heroImage && <img src={imageUrl(a.heroImage).width(720).url()} alt="" style={{width:"100%",height:"200px",display:"block",objectFit:"cover"}} />}
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",margin:"18px 0 10px",letterSpacing:".04em",textTransform:"uppercase"}}>{a.cardLabel}</div>
                  <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B"}}>{a.cardTitle || a.title}</div>
                  <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"12px 0 0"}}>{a.cardSummary}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* SPOTLIGHTS */}
          <div id="spotlights" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{marginBottom:"48px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The method</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em",maxWidth:"700px"}}>Three data streams. One evidence base.</h2>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"620px",margin:"0"}}>Design Lever combines market research with first-hand evidence from the people building, leading and funding design inside African companies.</p>
            </div>
            <div className="dl-spotsplit" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"stretch"}}>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                {spotlights.map((s, i) => (
                  <Link key={s._id} className="dl-spotitem" href={postPath("spotlight", s.slug)} style={i === 0 ? {borderTop:"1.5px solid #44063B"} : undefined}>
                    <div style={{minWidth:"0"}}>
                      <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"8px",textTransform:"uppercase"}}>{s.cardLabel}</div>
                      <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>{s.cardTitle || s.title}</div>
                      <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>{s.cardSummary}</p>
                    </div>
                    <span className="dl-spotarrow" style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",flex:"none"}}><ArrowIcon /></span>
                  </Link>
                ))}
              </div>
              <div style={{position:"relative",minHeight:"620px",overflow:"hidden"}}>
                {spotlights.map((s, i) => (
                  <div key={s._id} className="dl-spotimg" data-i={i + 1}>
                    {s.heroImage && <img src={imageUrl(s.heroImage).width(1200).url()} alt="" style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}} />}
                    <div style={{position:"absolute",left:"0",bottom:"0",background:"#FDFBF0",padding:"12px 18px",font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase"}}>{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* PLAYBOOKS */}
          <div id="playbooks" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{maxWidth:"820px",marginBottom:"36px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Tools</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Put the research to work.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                <div>
                  <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>The Design Team Health Checklist</div>
                  <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>The 20 questions we ask on every assessment, run it on your own team.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",justifySelf:"start",border:"1px solid #FF7D44",padding:"5px 11px"}}>PDF · FREE</span>
                <a className="dl-link" href="/downloads/Design Lever - Design Health Checklist.pdf" download="" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Download</a>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                <div>
                  <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Hiring Your First Design Leader</div>
                  <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>Scorecards, interview loops and the fractional-vs-full-time decision tree.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF7D44",padding:"5px 11px"}}>IN PRODUCTION</span>
                <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Hiring%20playbook" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0"}}>
                <div>
                  <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>The Design-to-P&L Metric Kit</div>
                  <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>A starter set of metrics to make design legible to your board, with formulas.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF7D44",padding:"5px 11px"}}>IN PRODUCTION</span>
                <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Metric%20Kit" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
              </div>
            </div>
          </div>
          {/* DATA & RATES */}
          <div id="data" style={{padding:"118px 64px",backgroundColor:"#44063B"}}>
            <div style={{maxWidth:"820px",marginBottom:"56px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Benchmarks</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 20px",letterSpacing:"-.01em"}}>Benchmarks, updated as the dataset grows.</h2>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",maxWidth:"600px",margin:"0"}}>
                These figures are dated, sourced and revised when stronger evidence becomes available.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)",borderColor:"#FDFBF033"}}>
              <div style={{padding:"34px 26px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>₦366</div>
                <div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>design spend per designer, per year, vs $6,015 in the UK</div>
              </div>
              <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>18 mo</div>
                <div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>median tenure before a senior designer exits a leaderless team</div>
              </div>
              <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>302K</div>
                <div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>designers in Nigeria alone, the largest bench in the Global South</div>
              </div>
              <div style={{padding:"34px 0 34px 26px"}}>
                <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>₦60M</div>
                <div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>Year-1 cost of a full-time CDO in Nigeria, incl. risk of a failed hire</div>
              </div>
            </div>
            <div style={{marginTop:"44px"}}>
              <a className="dl-btn hov-blue-cream" onClick={openForm} href="mailto:research@designleverinc.com?subject=Take%20the%20salary%20survey" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#14191D",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF7D44"}}>Add your numbers to the dataset <ArrowIcon direction="right" /></a>
            </div>
          </div>
        </div>
        {/* CONTRIBUTE, inspire participation */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{maxWidth:"820px",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Contribute</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em"}}>The evidence base grows when the industry contributes.</h2>
            <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"#44063B",maxWidth:"600px",margin:"0"}}>
              Companies, practitioners and institutions can contribute without becoming Design Lever clients or members. Research participation is kept separate from sales.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)",borderColor:"#00000033"}}>
            <div style={{padding:"34px 26px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"20px"}}>01</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Take the practitioner survey</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Contribute to the recurring picture of compensation, seniority, leadership access and career mobility.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Take%20the%20practitioner%20survey" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>START <ArrowIcon direction="right" /></a>
            </div>
            <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)",borderColor:"#FAF9F500"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"20px"}}>02</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Join a research interview</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Share first-hand experience of building, funding or leading design inside an organisation.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Nominate%20a%20company" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>NOMINATE <ArrowIcon direction="right" /></a>
            </div>
            <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"20px"}}>03</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Contribute company data</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Contribute anonymised information on design investment, team structure and measurable outcomes.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Share%20engagement%20data" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>SHARE</a>
              <a className="dl-link" href="mailto:research@designleverinc.com?subject=Nominate%20a%20company" style={{color:"rgb(68, 6, 59)",fontStyle:"normal",fontVariant:"normal",fontSizeAdjust:"none",fontLanguageOverride:"normal",fontKerning:"auto",fontOpticalSizing:"auto",fontFeatureSettings:"normal",fontVariationSettings:"normal",fontStretch:"normal",fontSize:"11px",lineHeight:"normal",fontFamily:"\"Spline Sans Mono\", monospace",textDecoration:"none",letterSpacing:"0.04em"}}><ArrowIcon /></a>
            </div>
            <div style={{padding:"34px 0 34px 26px"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"20px"}}>04</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Partner on research</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>For institutions and organisations that can strengthen methodology, distribution or access to data.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Co-author%20/%20peer%20review" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>GET IN TOUCH <ArrowIcon direction="right" /></a>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="report" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The annual report</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>The African Design Leadership Report.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 26px",maxWidth:"460px"}}>
                Published annually, the report brings the evidence together into one view of design leadership across African business: workforce, careers, leadership structures, organisational practice and commercial performance.
              </p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=African%20Design%20Leadership%20Report" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>Read the latest report <ArrowIcon direction="right" /></a>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"44px 40px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".06em",textTransform:"uppercase",marginBottom:"24px"}}>Published with</div>
              <div style={{borderTop:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.12)",font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Àsà Design + TechCabal Insights</div>
                <div style={{padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.12)",font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>FourthCanvas</div>
                <div style={{padding:"16px 0",font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Open-access · Creative Commons</div>
              </div>
            </div>
          </div>
        </div>
        <div id="contribute" style={{padding:"118px 64px",background:"#4F83FF",textAlign:"center"}}>
          <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>Open access</span>
          <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>The evidence base is public by design.</h2>
          <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.82)",margin:"0 auto 42px",maxWidth:"520px"}}>
            Design Lever publishes public research so companies, practitioners, educators and institutions can use, test and challenge the work. Where data cannot be published, that limitation is stated.
          </p>
          <a className="dl-btn hov-blue-cream" href="#reports" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#FDFBF0"}}>Read our research principles <ArrowIcon direction="right" /></a>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#4F83FF",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The research, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is the report really free?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Public reports, published benchmarks and open research outputs are available without a paywall or registration gate.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How is the data collected?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The evidence base combines external market sources, company interviews, practitioner survey data and approved Design Lever engagement data. Each publication states which sources it uses.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I contribute?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. You can take the practitioner survey, join a research interview, contribute company data or discuss a research partnership.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How often are benchmarks updated?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Every benchmark carries a date so readers can see when the figure was last reviewed. Updates depend on the strength and growth of the dataset.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I cite Design Lever research?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes, where the publication permits it. Use the citation and attribution guidance attached to the specific report or dataset.
                </p>
              </details>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
      {formOpen && (
        <>
        <div className="dl-ov" onClick={closeForm}>
          <div className="dl-panel" onClick={stop}>
            <div style={{background:"#44063B",padding:"28px 36px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"10px"}}>Open evidence base</div>
                <div style={{font:"400 24px/1.05 'Faculty Glyphic',serif",color:"#FDFBF0"}}>Contribute to the research</div>
              </div>
              <div onClick={closeForm} style={{cursor:"pointer",font:"400 24px 'Faculty Glyphic',serif",color:"rgba(253,251,240,.7)",lineHeight:".7",flex:"none",marginLeft:"20px"}}>×</div>
            </div>
            {sent && (
              <>
              <div style={{padding:"66px 36px",textAlign:"center"}}>
                <div style={{width:"58px",height:"58px",border:"1.5px solid #44063B",borderRadius:"0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px"}}>
                  <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FF7D44"}}>✓</span>
                </div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Thank you.</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"380px",margin:"0 auto 30px"}}>
                  Your contribution is logged. We'll be in touch, every response makes the evidence base citeable for the whole field.
                </p>
                <div className="dl-btn dl-seg" onClick={closeForm} style={{display:"inline-block",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"15px 28px",letterSpacing:".04em",textTransform:"uppercase"}}>Back to resources</div>
              </div>
              </>
            )}
            {notSent && (
              <>
              <div style={{padding:"34px 36px 40px"}}>
                <div style={{marginBottom:"24px"}}>
                  <label className="dl-lbl">I'd like to…</label>
                  <select className="dl-field" value={form.topic} onChange={setTopic}>
                    <option>Take the practitioner survey</option>
                    <option>Be notified when a report publishes</option>
                    <option>Nominate a company for an interview</option>
                    <option>Share anonymised design data</option>
                    <option>Co-author or peer-review a paper</option>
                    <option>Support / fund the research</option>
                  </select>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px 24px"}}>
                  <div>
                    <label className="dl-lbl">Full name</label>
                    <input className="dl-field" value={form.name} onChange={setName} placeholder="Ada Obi" />
                  </div>
                  <div>
                    <label className="dl-lbl">Email</label>
                    <input className="dl-field" type="email" value={form.email} onChange={setEmail} placeholder="ada@company.com" />
                  </div>
                </div>
                <div style={{marginTop:"24px"}}>
                  <label className="dl-lbl">
                    Anything to add?
                    <span style={{textTransform:"none",letterSpacing:"0",opacity:".7"}}>(optional)</span>
                  </label>
                  <textarea className="dl-field" value={form.message} onChange={setMessage} placeholder="Context, a company to nominate, a dataset you can share…"></textarea>
                </div>
                <div className="dl-btn dl-seg hov-plum" onClick={submitForm} style={{marginTop:"30px",textAlign:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px",letterSpacing:".05em",textTransform:"uppercase"}}>Send my contribution <ArrowIcon direction="right" /></div>
                <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Open access · Creative Commons · your data is never sold</p>
              </div>
              </>
            )}
          </div>
        </div>
        </>
      )}
    </div>
  );
}
