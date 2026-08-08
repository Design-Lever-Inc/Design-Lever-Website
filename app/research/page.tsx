"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";

const EMPTY_FORM = { name: "", email: "", topic: "Take the practitioner survey", message: "" };

export default function PageResearch() {
  const router = useRouter();
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
        x.style.background = on ? "#FF6D35" : "transparent";
        x.style.color = on ? "#FDFBF0" : "#44063B";
        x.style.borderColor = on ? "#FF6D35" : "rgba(68,6,59,.35)";
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
  const goArticle = () => router.push("/articles/why-the-cdo-role-keeps-failing");
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
        <div className="dl-page-hero-texture dl-page-hero-texture--on-dark dl-page-hero-texture--motif" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",backgroundColor:"#3B6FEB"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="rgba(253,251,240,.75)" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
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
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",letterSpacing:".14em",textTransform:"uppercase"}}>RESEARCH</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance"}}>Building the African design ROI evidence base.</h1>
            <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.9)",maxWidth:"560px",margin:"0 0 48px"}}>
              No published research links design investment to business outcomes in African companies. This report closes that gap.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-blue-cream" href="#streams" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FDFBF0"}}>The three data streams <ArrowIcon direction="down" /></a>
              <a className="dl-link" href="#report" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #FDFBF0",paddingBottom:"4px"}}>The annual report</a>
            </div>
          </div>
        </div>
        {/* THE GAP STAT */}
        {/* THREE STREAMS */}
        <div id="streams" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Three data streams</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Every number, traceable to a source.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1.5px solid #44063B",borderColor:"#FAF9F5EB"}}>
            <div style={{padding:"36px 32px 40px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px",stroke:"#FF6D35"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Company interviews</div>
              <p style={{font:"400 14.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Structured 30-minute conversations with founders and CEOs who have invested in design. What did it cost, what changed, what did it return, in naira?
              </p>
            </div>
            <div style={{padding:"36px 32px 40px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px",stroke:"#FF6D35"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Practitioner survey</div>
              <p style={{font:"400 14.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Distributed through Àsà Design, TechCabal, Design Lagos and ADPList. What do designers earn at each level? What leadership exists? What happened to those who left?
              </p>
            </div>
            <div style={{padding:"36px 0 40px 32px"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" stroke="#FF6D35"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Engagement data</div>
              <p style={{font:"400 14.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 20px"}}>
                Proprietary. Baseline metrics before every engagement, outcome metrics at exit, attrition, rework, velocity, revenue per designer.
              </p>
            </div>
          </div>
        </div>
        {/* THE GAP, cream field, plum numbers */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The market gap</span>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)"}}>Cognitive Market Research, 2024</span>
          </div>
          <h2 style={{font:"400 64px/1.08 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"880px",margin:"0 0 88px",letterSpacing:"-.01em"}}>The talent is comparable, but the infrastructure is not.</h2>
          <div style={{borderTop:"1px solid rgba(68,6,59,.22)"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D3599",letterSpacing:".04em",textTransform:"uppercase"}}>Africa</div>
              <div style={{font:"400 88px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>$494M</div>
              <div style={{font:"400 14px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $366
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D3599",letterSpacing:".04em",textTransform:"uppercase"}}>United Kingdom</div>
              <div style={{font:"400 88px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>$11.85B</div>
              <div style={{font:"400 14px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $6,015
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr 1fr",gap:"40px",alignItems:"end",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.22)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D3599",letterSpacing:".04em",textTransform:"uppercase"}}>United States</div>
              <div style={{font:"400 88px/.85 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>$90B</div>
              <div style={{font:"400 14px 'Spline Sans Mono',monospace",color:"#44063B",textAlign:"right"}}>
                $19,432
                <span style={{color:"rgba(68,6,59,.5)"}}>/ designer / yr</span>
              </div>
            </div>
          </div>
          <p style={{font:"400 18px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",maxWidth:"660px",margin:"56px 0 0"}}>
            Africa has 1.3m+ designers, the largest concentration in the Global South. Nigeria alone holds 302k+. The gap is not talent. It is the complete absence of design leadership infrastructure.
          </p>
        </div>
        {/* THE REPORT */}
        {/* RESOURCE FILTER BAR */}
        <div style={{position:"sticky",top:"84px",zIndex:"45",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",padding:"16px 64px",background:"#FDFBF0",borderTop:"1px solid rgba(68,6,59,.16)",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
          <button className="dl-fbtn" data-fcat="all" style={{color:"#FDFBF0",borderColor:"#FF6D35",backgroundColor:"#FF6D35"}}>All</button>
          <button className="dl-fbtn" data-fcat="reports" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Reports & papers</button>
          <button className="dl-fbtn" data-fcat="articles" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Articles</button>
          <button className="dl-fbtn" data-fcat="spotlights" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Spotlights</button>
          <button className="dl-fbtn" data-fcat="playbooks" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Playbooks</button>
          <button className="dl-fbtn" data-fcat="data" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Data & rates</button>
        </div>
        {/* RESOURCES */}
        <div id="reports" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"56px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Reports & white papers</span>
              <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>White papers & reports, published as they land.</h2>
            </div>
          </div>
          {/* Flagship report, cover + detail (image ≥ 4 cols) */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"stretch",marginBottom:"64px"}}>
            <div style={{position:"relative",minHeight:"440px",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px",backgroundColor:"#3B6FEB"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <span style={{font:"400 10.5px 'Spline Sans Mono',monospace",color:"#FDFBF0",letterSpacing:".14em",textTransform:"uppercase"}}>Flagship report · 2026</span>
                <span style={{font:"400 10.5px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",letterSpacing:".06em"}}>EST. ~120 PP</span>
              </div>
              <div>
                <div style={{font:"400 46px/1.05 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.01em"}}>The African Design Leadership Report</div>
                <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.6)",marginTop:"20px"}}>Volume 01</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div style={{display:"inline-flex",alignSelf:"flex-start",gap:"8px",marginBottom:"22px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",border:"1px solid #FF6D35",padding:"5px 11px"}}>ANNUAL REPORT</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#FF6D35",padding:"5px 11px"}}>IN PRODUCTION</span>
              </div>
              <p style={{font:"400 18px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.72)",margin:"0 0 28px",maxWidth:"520px"}}>
                The foundational proof-of-mission document, the first study to correlate design investment with business outcomes in African companies.
              </p>
              <div style={{borderTop:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                  <span style={{color:"rgba(68,6,59,.55)"}}>Coverage</span>
                  <span>20 interviews</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                  <span style={{color:"rgba(68,6,59,.55)"}}>Coverage</span>
                  <span>500 survey responses</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                  <span style={{color:"rgba(68,6,59,.55)"}}>Licence</span>
                  <span>CC BY 4.0 · free to cite</span>
                </div>
              </div>
              <a className="dl-btn" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify%20me%20when%20Volume%2001%20publishes" style={{alignSelf:"flex-start",marginTop:"28px",display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"15px 24px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#3B6FEB"}}>Notify me when it lands <ArrowIcon direction="right" /></a>
            </div>
          </div>
          {/* Working papers list */}
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em"}}>WHITE PAPER</span>
              <div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>The Cost of No Design Leadership</div>
                <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>How a leaderless design function quietly compounds cost.</p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF6D35",padding:"5px 11px"}}>IN PRODUCTION</span>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Cost%20of%20No%20Design%20Leadership" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em"}}>DATA REPORT</span>
              <div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Design Salary & Seniority in Nigeria 2026</div>
                <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>What designers earn at each level, and where the leadership ceiling sits.</p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",justifySelf:"start",border:"1px solid #FF6D35",padding:"5px 11px"}}>OPEN FOR INPUT</span>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Take%20the%20salary%20survey" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Take the survey</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em"}}>FIELD REPORT</span>
              <div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Japa & the Diaspora Design Bench</div>
                <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>
                  Where Nigerian design leaders went, and how the continent stays connected to them.
                </p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"start",border:"1px solid rgba(68,6,59,.3)",padding:"5px 11px"}}>PLANNED</span>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Japa%20report" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em"}}>WHITE PAPER</span>
              <div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Design ROI: What the Global Numbers Miss About Africa</div>
                <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>Why McKinsey, Adobe and Forrester figures don't transfer, and what does.</p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF6D35",padding:"5px 11px"}}>IN PRODUCTION</span>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Design%20ROI%20paper" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"170px 1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em"}}>DATA BRIEF</span>
              <div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Attrition in African Design Teams</div>
                <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"520px"}}>The 18-month exit curve, and the leadership factors that move it.</p>
              </div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",justifySelf:"start",border:"1px solid #FF6D35",padding:"5px 11px"}}>OPEN FOR INPUT</span>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Contribute:%20Attrition%20brief" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Contribute</a>
            </div>
          </div>
        </div>
        <div id="dl-reswrap" data-filter="all">
          {/* PUBLICATIONS LIBRARY */}
          {/* ARTICLES */}
          <div id="articles" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{marginBottom:"48px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Articles</span>
              <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Field notes & essays.</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"44px 24px"}}>
              <Link className="dl-rcard" href="/articles/why-the-cdo-role-keeps-failing" style={{display:"block",textDecoration:"none"}}>
                <img src="/assets/img/article-1.svg" alt="" style={{width:"100%",height:"200px",display:"block",objectFit:"cover"}} />
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",margin:"18px 0 10px",letterSpacing:".04em"}}>ESSAY</div>
                <div style={{font:"400 21px/1.2 'Faculty Glyphic',serif",color:"#44063B"}}>Why the CDO role keeps failing in Nigeria</div>
                <p style={{font:"400 13.5px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"12px 0 0"}}>
                  The full-time hire is right in theory and wrong at your stage. A look at the tenure data.
                </p>
              </Link>
              <Link className="dl-rcard" href="/articles/design-health-assessment" style={{display:"block",textDecoration:"none"}}>
                <img src="/assets/img/article-2.svg" alt="" style={{width:"100%",height:"200px",display:"block",objectFit:"cover"}} />
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",margin:"18px 0 10px",letterSpacing:".04em"}}>FIELD NOTE</div>
                <div style={{font:"400 21px/1.2 'Faculty Glyphic',serif",color:"#44063B"}}>What a design health assessment actually finds</div>
                <p style={{font:"400 13.5px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"12px 0 0"}}>The five costs that show up in almost every leaderless design function.</p>
              </Link>
              <Link className="dl-rcard" href="/articles/design-on-the-pnl" style={{display:"block",textDecoration:"none"}}>
                <img src="/assets/img/article-3.svg" alt="" style={{width:"100%",height:"200px",display:"block",objectFit:"cover"}} />
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",margin:"18px 0 10px",letterSpacing:".04em"}}>ESSAY</div>
                <div style={{font:"400 21px/1.2 'Faculty Glyphic',serif",color:"#44063B"}}>Design on the P&L, in Nigeria</div>
                <p style={{font:"400 13.5px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"12px 0 0"}}>How to make a design function defensible to a board that only reads numbers.</p>
              </Link>
              <Link className="dl-rcard" href="/articles/the-eighteen-month-exit-curve" style={{display:"block",textDecoration:"none"}}>
                <img src="/assets/img/article-4.svg" alt="" style={{width:"100%",height:"200px",display:"block",objectFit:"cover"}} />
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",margin:"18px 0 10px",letterSpacing:".04em"}}>FIELD NOTE</div>
                <div style={{font:"400 21px/1.2 'Faculty Glyphic',serif",color:"#44063B"}}>The eighteen-month exit curve</div>
                <p style={{font:"400 13.5px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"12px 0 0"}}>Why senior designers leave, and the leadership factors that move the curve.</p>
              </Link>
            </div>
          </div>
          {/* SPOTLIGHTS */}
          <div id="spotlights" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{marginBottom:"48px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Spotlights</span>
              <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em",maxWidth:"700px"}}>The people and companies behind the numbers.</h2>
            </div>
            <div className="dl-spotsplit" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"stretch"}}>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Link className="dl-spotitem" href="/spotlights/a-cdo-who-stayed" style={{borderTop:"1.5px solid #44063B"}}>
                  <div style={{minWidth:"0"}}>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"8px"}}>PRACTITIONER</div>
                    <div style={{font:"400 26px/1.15 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>A CDO who stayed back home</div>
                    <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>What it took to keep a senior design leader past the two-year mark.</p>
                  </div>
                  <span className="dl-spotarrow" style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",flex:"none"}}><ArrowIcon /></span>
                </Link>
                <Link className="dl-spotitem" href="/spotlights/investing-before-the-case-studies">
                  <div style={{minWidth:"0"}}>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"8px"}}>FOUNDER</div>
                    <div style={{font:"400 26px/1.15 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Investing before the case studies</div>
                    <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>A founder on backing design leadership without a benchmark to point to.</p>
                  </div>
                  <span className="dl-spotarrow" style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",flex:"none"}}><ArrowIcon /></span>
                </Link>
                <Link className="dl-spotitem" href="/spotlights/leading-from-abroad">
                  <div style={{minWidth:"0"}}>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"8px"}}>DIASPORA</div>
                    <div style={{font:"400 26px/1.15 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Leading from abroad</div>
                    <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>How an African design leader kept building on the continent after japa.</p>
                  </div>
                  <span className="dl-spotarrow" style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",flex:"none"}}><ArrowIcon /></span>
                </Link>
                <Link className="dl-spotitem" href="/spotlights/from-bottleneck-to-pace-setter">
                  <div style={{minWidth:"0"}}>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"8px"}}>COMPANY</div>
                    <div style={{font:"400 26px/1.15 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>From bottleneck to pace-setter</div>
                    <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>A health-tech team on the quarter their design function changed gear.</p>
                  </div>
                  <span className="dl-spotarrow" style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",flex:"none"}}><ArrowIcon /></span>
                </Link>
              </div>
              <div style={{position:"relative",minHeight:"620px",overflow:"hidden"}}>
                <div className="dl-spotimg" data-i="1">
                  <img src="/assets/img/spot-1.svg" alt="" style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}} />
                  <div style={{position:"absolute",left:"0",bottom:"0",background:"#FDFBF0",padding:"12px 18px",font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em"}}>A CDO WHO STAYED BACK HOME</div>
                </div>
                <div className="dl-spotimg" data-i="2">
                  <img src="/assets/img/spot-2.svg" alt="" style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}} />
                  <div style={{position:"absolute",left:"0",bottom:"0",background:"#FDFBF0",padding:"12px 18px",font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em"}}>INVESTING BEFORE THE CASE STUDIES</div>
                </div>
                <div className="dl-spotimg" data-i="3">
                  <img src="/assets/img/spot-3.svg" alt="" style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}} />
                  <div style={{position:"absolute",left:"0",bottom:"0",background:"#FDFBF0",padding:"12px 18px",font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em"}}>LEADING FROM ABROAD</div>
                </div>
                <div className="dl-spotimg" data-i="4">
                  <img src="/assets/img/spot-4.svg" alt="" style={{width:"100%",height:"100%",display:"block",objectFit:"cover"}} />
                  <div style={{position:"absolute",left:"0",bottom:"0",background:"#FDFBF0",padding:"12px 18px",font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em"}}>FROM BOTTLENECK TO PACE-SETTER</div>
                </div>
              </div>
            </div>
          </div>
          {/* PLAYBOOKS */}
          <div id="playbooks" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
            <div style={{maxWidth:"820px",marginBottom:"36px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Playbooks</span>
              <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Practical guides, free to download.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                <div>
                  <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>The Design Team Health Checklist</div>
                  <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>The 20 questions we ask on every assessment, run it on your own team.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",justifySelf:"start",border:"1px solid #FF6D35",padding:"5px 11px"}}>PDF · FREE</span>
                <a className="dl-link" href="/downloads/Design Lever - Design Health Checklist.pdf" download="" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Download</a>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                <div>
                  <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Hiring Your First Design Leader</div>
                  <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>Scorecards, interview loops and the fractional-vs-full-time decision tree.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF6D35",padding:"5px 11px"}}>IN PRODUCTION</span>
                <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Hiring%20playbook" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 200px 150px",gap:"32px",alignItems:"center",padding:"28px 0"}}>
                <div>
                  <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>The Design-to-P&L Metric Kit</div>
                  <p style={{font:"400 13.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"6px 0 0",maxWidth:"560px"}}>A starter set of metrics to make design legible to your board, with formulas.</p>
                </div>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FDFBF0",justifySelf:"start",background:"#FF6D35",padding:"5px 11px"}}>IN PRODUCTION</span>
                <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Notify:%20Metric%20Kit" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",justifySelf:"end",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Notify me</a>
              </div>
            </div>
          </div>
          {/* DATA & RATES */}
          <div id="data" style={{padding:"118px 64px",backgroundColor:"#44063B"}}>
            <div style={{maxWidth:"820px",marginBottom:"56px"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Data & rates</span>
              <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 20px",letterSpacing:"-.01em"}}>Benchmarks, updated as the dataset grows.</h2>
              <p style={{font:"400 16px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",maxWidth:"600px",margin:"0"}}>
                Early figures from the practitioner survey and engagement data. Directional today; citeable as the sample size climbs.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)",borderColor:"#FDFBF033"}}>
              <div style={{padding:"34px 26px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>₦366</div>
                <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>design spend per designer, per year, vs $6,015 in the UK</div>
              </div>
              <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>18 mo</div>
                <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>median tenure before a senior designer exits a leaderless team</div>
              </div>
              <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
                <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>302K</div>
                <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>designers in Nigeria alone, the largest bench in the Global South</div>
              </div>
              <div style={{padding:"34px 0 34px 26px"}}>
                <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>₦60M</div>
                <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>Year-1 cost of a full-time CDO in Nigeria, incl. risk of a failed hire</div>
              </div>
            </div>
            <div style={{marginTop:"44px"}}>
              <a className="dl-btn hov-blue-cream" onClick={openForm} href="mailto:research@designleverinc.com?subject=Take%20the%20salary%20survey" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#14191D",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF6D35"}}>Add your numbers to the dataset <ArrowIcon direction="right" /></a>
            </div>
          </div>
        </div>
        {/* CONTRIBUTE, inspire participation */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{maxWidth:"820px",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Build it with us</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em"}}>The evidence base only exists if the community builds it.</h2>
            <p style={{font:"400 17px/1.6 'Inter Tight',sans-serif",color:"#44063B",maxWidth:"600px",margin:"0"}}>
              There is no African design ROI dataset yet, so every response, interview and shared metric becomes a citeable data point that the whole field gets to use. Four ways to put your fingerprint on it.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)",borderColor:"#00000033"}}>
            <div style={{padding:"34px 26px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"20px"}}>01</div>
              <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Take the survey</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Ten minutes toward the 500-response practitioner dataset.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Take%20the%20practitioner%20survey" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>START <ArrowIcon direction="right" /></a>
            </div>
            <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)",borderColor:"#FAF9F500"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"20px"}}>02</div>
              <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Nominate a company</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Put forward a founder who has invested in design for a 30-minute interview.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Nominate%20a%20company" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>NOMINATE <ArrowIcon direction="right" /></a>
            </div>
            <div style={{padding:"34px 26px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"20px"}}>03</div>
              <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Share your data</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Contribute anonymised design metrics, attrition, rework, velocity.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Share%20engagement%20data" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>SHARE</a>
              <a className="dl-link" href="mailto:research@designleverinc.com?subject=Nominate%20a%20company" style={{color:"rgb(68, 6, 59)",fontStyle:"normal",fontVariant:"normal",fontSizeAdjust:"none",fontLanguageOverride:"normal",fontKerning:"auto",fontOpticalSizing:"auto",fontFeatureSettings:"normal",fontVariationSettings:"normal",fontStretch:"normal",fontSize:"11px",lineHeight:"normal",fontFamily:"\"Spline Sans Mono\", monospace",textDecoration:"none",letterSpacing:"0.04em"}}><ArrowIcon /></a>
            </div>
            <div style={{padding:"34px 0 34px 26px"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"20px"}}>04</div>
              <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"10px"}}>Co-author or review</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"#44063B9E",margin:"0 0 18px"}}>Peer-review a paper or co-author with the research team.</p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=Co-author%20/%20peer%20review" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>GET IN TOUCH <ArrowIcon direction="right" /></a>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="report" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The annual report</span>
              <h2 style={{font:"400 50px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>The African Design Leadership Report.</h2>
              <p style={{font:"400 16px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 26px",maxWidth:"460px"}}>
                All three streams publish annually, open-access under Creative Commons, with Àsà Design, TechCabal Insights and Future London Academy.
              </p>
              <a className="dl-link" onClick={openForm} href="mailto:research@designleverinc.com?subject=African%20Design%20Leadership%20Report" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>Read the first edition when it lands <ArrowIcon direction="right" /></a>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"44px 40px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".06em",textTransform:"uppercase",marginBottom:"24px"}}>Published with</div>
              <div style={{borderTop:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.12)",font:"400 17px 'Faculty Glyphic',serif",color:"#44063B"}}>Àsà Design + TechCabal Insights</div>
                <div style={{padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.12)",font:"400 17px 'Faculty Glyphic',serif",color:"#44063B"}}>Future London Academy</div>
                <div style={{padding:"16px 0",font:"400 17px 'Faculty Glyphic',serif",color:"#44063B"}}>Open-access · Creative Commons</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:"118px 64px",background:"#3B6FEB",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>The evidence base is a public good, not a paywall.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"rgba(253,251,240,.9)",margin:"0 auto 42px",maxWidth:"520px"}}>
            Contribute to the survey, nominate a company for an interview, or be notified when the report publishes.
          </p>
          <a className="dl-btn hov-blue-cream" onClick={openForm} href="mailto:research@designleverinc.com?subject=Contribute%20to%20the%20research" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#FDFBF0"}}>Contribute to the research <ArrowIcon direction="right" /></a>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#3B6FEB",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The research, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is the report really free?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. The African Design Leadership Report is published open-access under Creative Commons, designed to be cited, never paywalled.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How is the data collected?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Three streams: structured company interviews, a practitioner survey distributed through partners, and proprietary engagement data captured before and after every Practice engagement.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I contribute?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes, you can take the survey, nominate a company for an interview, or ask to be notified when the report publishes.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Who are the partners?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The report is produced with Àsà Design, TechCabal Insights and Future London Academy, with institutional partners for academic credibility.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">When does it publish?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Annually. The first edition is in production; register your interest to receive it the moment it lands.
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
                <div style={{font:"400 10.5px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"10px"}}>Open evidence base</div>
                <div style={{font:"400 30px/1.05 'Faculty Glyphic',serif",color:"#FDFBF0"}}>Contribute to the research</div>
              </div>
              <div onClick={closeForm} style={{cursor:"pointer",font:"400 30px 'Faculty Glyphic',serif",color:"rgba(253,251,240,.7)",lineHeight:".7",flex:"none",marginLeft:"20px"}}>×</div>
            </div>
            {sent && (
              <>
              <div style={{padding:"66px 36px",textAlign:"center"}}>
                <div style={{width:"58px",height:"58px",border:"1.5px solid #44063B",borderRadius:"0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px"}}>
                  <span style={{font:"400 26px 'Faculty Glyphic',serif",color:"#FF6D35"}}>✓</span>
                </div>
                <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Thank you.</div>
                <p style={{font:"400 15.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"380px",margin:"0 auto 30px"}}>
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
                <p style={{font:"400 11.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Open access · Creative Commons · your data is never sold</p>
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
