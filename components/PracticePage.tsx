"use client";

import { Fragment, useState, type CSSProperties } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const TESTIMONIALS = [
  {
    quote: "We had eleven designers and no throughline. Within a quarter there was a standard, a ritual, and a reason our seniors stopped leaving.",
    initials: "BA",
    name: "Babatunde Abubakar",
    designation: "Co-founder & CEO",
    company: "Traction Apps",
    headshot: "",
    href: "/resources/case-studies/traction-apps",
    metrics: [
      ["$6M", "Supported Series B raise"],
      ["30%", "Design budget saved"],
      ["14%", "Increase in market share"],
    ],
  },
  {
    quote: "Three months in, our design team stopped being a bottleneck and started setting the pace. The systems stayed after the engagement ended, that was the whole point.",
    initials: "AE",
    name: "Amara Eze",
    designation: "CPO",
    company: "Mosaic Health",
    headshot: "",
    href: "/resources/case-studies/from-bottleneck-to-pace-setter",
    metrics: [
      ["40%", "Faster release cycle"],
      ["50%", "Design-caused rework reduced"],
      ["03", "Months to set the release pace"],
    ],
  },
  {
    quote: "For the first time we could put a naira figure on what design was returning. That single number changed how the board talked about the function.",
    initials: "FA",
    name: "Femi Adeyemi",
    designation: "CFO",
    company: "Arcstone Financial",
    headshot: "",
    href: "/resources/case-studies/design-on-the-pnl",
    metrics: [
      ["₦48M", "Revenue influenced"],
      ["22%", "Conversion uplift"],
      ["3.1×", "Return on design spend"],
    ],
  },
  {
    quote: "The hand-over was the real proof. Everything was documented, we have run the system ourselves for a year without missing a beat.",
    initials: "NM",
    name: "Njeri Mwangi",
    designation: "VP Design",
    company: "Kijani Commerce",
    headshot: "",
    href: "/resources/case-studies/a-system-that-stayed",
    metrics: [
      ["12", "Months running independently"],
      ["00", "Missed operating cycles"],
      ["100%", "Systems documented"],
    ],
  },
] as const;

const SIZES = ["1", "2–5", "6–15", "16+"];

function fmtNaira(n: number) {
  if (n >= 1e9) return "₦" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "₦" + (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return "₦" + Math.round(n / 1e3) + "K";
  return "₦" + Math.round(n);
}
function fmtUSD(n: number) {
  const v = n / 1400;
  if (v >= 1e6) return "$" + (v / 1e6).toFixed(2) + "M";
  if (v >= 1e3) return "$" + Math.round(v / 1e3) + "K";
  return "$" + Math.round(v);
}
const fmtSalary = (n: number) => "₦" + (n / 1e6).toFixed(1) + "M";

const EMPTY_FORM = { name: "", email: "", company: "", role: "", size: "2–5", challenge: "" };
const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

export default function PracticePage() {
  // hidden-cost calculator
  const [des, setDes] = useState(8);
  const [sal, setSal] = useState(1200000);
  const [rew, setRew] = useState(25);
  const [att, setAtt] = useState(2);
  // health-assessment form modal
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

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
  const setCompany = setField("company");
  const setRole = setField("role");
  const setChallenge = setField("challenge");
  const submitForm = () => setSent(true);
  const notSent = !sent;
  const num = (set: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => set(+e.target.value);
  const cDes = num(setDes);
  const cSal = num(setSal);
  const cRew = num(setRew);
  const cAtt = num(setAtt);
  const rework = des * sal * 12 * (rew / 100);
  const attrition = att * sal * 7.5;
  const c = {
    des, sal, rew, att,
    salFmt: fmtSalary(sal),
    totalFmt: fmtNaira(rework + attrition),
    usdFmt: fmtUSD(rework + attrition),
  };

  const sizeBtns = SIZES.map((v) => ({
    v,
    on: () => setForm((f) => ({ ...f, size: v })),
    style: {
      flex: 1,
      textAlign: "center",
      padding: "12px 0",
      font: "400 12px 'Spline Sans Mono',monospace",
      border: `1px solid ${form.size === v ? "#44063B" : "rgba(68,6,59,.28)"}`,
      background: form.size === v ? "#44063B" : "transparent",
      color: form.size === v ? "#FDFBF0" : "#44063B",
      cursor: "pointer",
    } as CSSProperties,
  }));

  return (
    <div className="pg-home">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="practice" />
        {/* HERO, blush pink field */}
        <div className="dl-page-hero-texture dl-page-hero-texture--motif" style={{background:"#21B58B",padding:"96px 64px 100px",position:"relative",overflow:"hidden"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="230" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="140" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="60" strokeWidth="1" strokeDasharray="4 8"></circle>
            <line x1="300" y1="12" x2="300" y2="588" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="12" y1="300" x2="588" y2="300" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="96" y1="96" x2="504" y2="504" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="504" y1="96" x2="96" y2="504" strokeWidth="1" strokeDasharray="4 8"></line>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>AFRICA'S FIRST DESIGN LEADERSHIP COMPANY</span>
            <h1 style={{font:"400 96px/1 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",width:"816px",height:"263px"}}>Fractional design<br />leadership for<br />businesses.</h1>
            <div style={{boxSizing:"border-box",display:"flex",flexDirection:"column",gap:"12px"}}>
              <p style={{font:"400 20px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",maxWidth:"560px",margin:"0 0 48px"}}>
                A fractional design executive embeds inside your company, builds the systems that make design commercially productive, and hands them over running.
              </p>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>BOOK A CALL</a>
              <a className="dl-link" href="#pricing" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>take a health assessment</a>
            </div>
          </div>
        </div>
        {/* WHO IT'S FOR */}
        <div id="practice" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Who this is built for</span>
            <span style={{font:"400 16px 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.6)",maxWidth:"340px",textAlign:"right"}}>
              <br />
            </span>
          </div>
          <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"900px",margin:"0 0 68px",letterSpacing:"-.01em"}}>Growth-stage companies with designers already on staff.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"36px 32px 34px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>Stage</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B",margin:"0"}}>
                Series A–C companies with design already embedded across product, brand, marketing, and communications. The team exists, the challenge is alignment and performance.
              </p>
            </div>
            <div style={{padding:"36px 32px 34px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>The problem</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B",margin:"0"}}>
                Design is fragmented across functions with different priorities and standards, work is produced in silos and often reworked. Leadership struggles to see clear commercial impact from design.
              </p>
            </div>
            <div style={{padding:"36px 0 34px 32px"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>The gap</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"#44063B",margin:"0"}}>
                No executive-level ownership of design. A need for someone to unify standards, align teams, and make design commercially accountable without hiring a full-time CDO too early.
              </p>
            </div>
          </div>
        </div>
        {/* RECOGNISE THE PROBLEM */}
        <div style={{padding:"118px 64px",backgroundColor:"#44073B"}}>
          <div style={{marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Recognise the problem</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",maxWidth:"820px",margin:"24px 0 20px",letterSpacing:"-.01em"}}>
              Executive design leadership, not another senior designer.
            </h2>
            <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.66)",maxWidth:"600px",margin:"0"}}>
              One leader accountable for how design performs across product, brand, marketing, communications and the design team.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)"}}>
            <div style={{padding:"30px 24px 30px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",marginBottom:"12px",textTransform:"uppercase"}}>Vision & strategy</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Sets the three-year design direction and connects it to business strategy.</p>
            </div>
            <div style={{padding:"30px 24px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",marginBottom:"12px",textTransform:"uppercase"}}>Commercial accountability</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Makes design visible on the P&L and presents its return to the CEO and board.</p>
            </div>
            <div style={{padding:"30px 24px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",marginBottom:"12px",textTransform:"uppercase"}}>Talent & culture</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Owns why great designers join, how they grow, and the reason they stay.</p>
            </div>
            <div style={{padding:"30px 0 30px 24px"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",marginBottom:"12px",textTransform:"uppercase"}}>Standards & governance</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Holds the quality bar across every function, including where no designers sit.</p>
            </div>
          </div>
        </div>
        {/* EXECUTIVE OWNERSHIP OUTCOMES */}
        <section className="dl-executive-outcomes" aria-labelledby="executive-outcomes-title">
          <div className="dl-executive-outcomes__inner">
            <div>
              <span className="dl-executive-outcomes__eyebrow">What changes</span>
              <h2 id="executive-outcomes-title" className="dl-executive-outcomes__title">
                A supercharged design team
              </h2>
              <p className="dl-executive-outcomes__intro">
                A clearer design function, better decisions, stronger team performance, less rework and better commercial alignment.
              </p>
            </div>
            <div className="dl-executive-outcomes__list">
              <article className="dl-executive-outcome">
                <h3>Priorities become clear.</h3>
                <p>The team knows what matters and what doesn&apos;t.</p>
              </article>
              <article className="dl-executive-outcome">
                <h3>Decisions move faster.</h3>
                <p>Design no longer waits on founders, product or marketing for constant direction.</p>
              </article>
              <article className="dl-executive-outcome">
                <h3>Designers do better work.</h3>
                <p>Standards, reviews and development become systematic.</p>
              </article>
              <article className="dl-executive-outcome">
                <h3>Design starts serving the business.</h3>
                <p>Product, brand and marketing work from one direction.</p>
              </article>
            </div>
          </div>
        </section>
        {/* CASE EVIDENCE */}
        <TestimonialCarousel testimonials={TESTIMONIALS} />
        {/* ENGAGEMENTS & PRICING */}
        <div id="pricing" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Engagement models</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"820px",margin:"24px 0 20px",letterSpacing:"-.01em"}}>
              Built around the problem, not a fixed retainer.
            </h2>
            <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"700px",margin:"0"}}>
              We offer five engagement types, selected and scoped to what the defined outcome needs.
            </p>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Founding</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Companies with design talent but no leadership structure, we build the function from zero.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>4 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Turnaround</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Broken design functions, high attrition, team dysfunction, inconsistent output that needs resetting.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>3–5 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Scale</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Preparing a functioning design team for the next phase of growth and complexity.</p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>5–8 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Sprint</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                One specific, high-urgency design leadership problem. Usually with a fixed scope and fee.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>fixed</div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>4–8 weeks</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Advisory</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Post-engagement continuity, or a lightweight ongoing senior design perspective at the top.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>monthly</div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>4-8 hours</div>
              </div>
            </div>
          </div>
        </div>
        {/* PRICING RATIONALE, green field */}
        <div style={{padding:"110px 64px",backgroundColor:"#21B58B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>Cost advantage</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>
                Get the leadership required for your stage without paying indefinitely.
              </h2>
            </div>
            <div style={{background:"#FDFBF0",padding:"44px 44px 40px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"0"}}>
                <div style={{paddingBottom:"26px",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>Permanent senior design leader</div>
                  <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"rgba(68,6,59,.4)",letterSpacing:"-.02em"}}>₦32–60M</div>
                  <div className="dl-comparison-details">
                    <div><div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"5px"}}>Role level</div><div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.72)"}}>CDO or VP Design</div></div>
                    <div><div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"5px"}}>Period</div><div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.72)"}}>12 months, recurring</div></div>
                  </div>
                </div>
                <div style={{paddingTop:"26px"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>Design Lever engagement</div>
                  <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>₦24M</div>
                  <div className="dl-comparison-details">
                    <div><div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"5px"}}>Role level</div><div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.72)"}}>Embedded fractional CDO</div></div>
                    <div><div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.45)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:"5px"}}>Period</div><div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.72)"}}>4 months, fixed term</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* HOW IT WORKS */}
        <div id="start" style={{padding:"120px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>How it works</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>It begins with a call.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"36px 40px 40px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"22px"}}>01</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Discovery call</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                A focused conversation about the company, the team and the outcome leadership needs to produce.
              </p>
            </div>
            <div style={{padding:"36px 40px 40px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"22px"}}>02</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Diagnosis</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                We assess the design function, quantify the current cost and define the outcome and success measures.
              </p>
            </div>
            <div style={{padding:"36px 0 40px 40px"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1",marginBottom:"22px"}}>03</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Leader or engagement</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                We place the right design leader or scope the engagement required to deliver the defined outcome.
              </p>
            </div>
          </div>
          <div style={{marginTop:"60px",display:"flex",alignItems:"center",gap:"28px"}}>
            <a className="dl-btn hov-orange" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 30px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>BOOK A CALL <ArrowIcon /></a>
          </div>
        </div>
        {/* COST CALCULATOR */}
        <div style={{padding:"120px 64px",background:"#44063B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"96px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Cost calculator</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"26px 0 28px",letterSpacing:"-.01em"}}>
                What is design<br />without leadership<br />costing you?
              </h2>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.68)",margin:"0 0 40px",maxWidth:"400px"}}>
                A structured estimate of the cost sitting inside your current design function. Move the sliders.
              </p>
              <Link className="dl-btn hov-pink" href="/diagnostic" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF7D44"}}>Open the full diagnostic <ArrowIcon /></Link>
            </div>
            <div>
              <div style={{display:"flex",flexDirection:"column",gap:"26px",marginBottom:"40px"}}>
                <label style={{display:"block"}}>
                  <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                    <span>Designers on the team</span>
                    <span style={{color:"#FF7D44"}}>{c.des}</span>
                  </div>
                  <input type="range" min="1" max="30" value={c.des} onChange={cDes} style={{width:"100%"}} />
                </label>
                <label style={{display:"block"}}>
                  <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                    <span>Avg designer salary / mo</span>
                    <span style={{color:"#FF7D44"}}>{c.salFmt}</span>
                  </div>
                  <input type="range" min="300000" max="4000000" step="100000" value={c.sal} onChange={cSal} style={{width:"100%"}} />
                </label>
                <div style={{display:"flex",gap:"40px"}}>
                  <label style={{flex:"1"}}>
                    <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                      <span>Rework %</span>
                      <span style={{color:"#FF7D44"}}>{c.rew}%</span>
                    </div>
                    <input type="range" min="0" max="40" value={c.rew} onChange={cRew} style={{width:"100%"}} />
                  </label>
                  <label style={{flex:"1"}}>
                    <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                      <span>Senior exits / yr</span>
                      <span style={{color:"#FF7D44"}}>{c.att}</span>
                    </div>
                    <input type="range" min="0" max="8" value={c.att} onChange={cAtt} style={{width:"100%"}} />
                  </label>
                </div>
              </div>
              <div style={{borderTop:"1px solid rgba(253,251,240,.3)",paddingTop:"26px"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"12px"}}>Estimated annual cost of design inefficiency</div>
                <div style={{font:"400 60px/1 'Faculty Glyphic',serif",color:"#FF7D44",letterSpacing:"-.02em"}}>{c.totalFmt}</div>
                <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FFBCE8",marginTop:"10px"}}>≈ {c.usdFmt} / year</div>
              </div>
            </div>
          </div>
        </div>
        {/* PRIMARY CTA */}
        <div style={{padding:"140px 64px",background:"#21B58B",textAlign:"center"}}>
          <svg viewBox="0 0 60 60" width="36" height="36" fill="none" stroke="#44063B" strokeWidth="1.4" style={{marginBottom:"40px"}}>
            <line x1="30" y1="8" x2="30" y2="52"></line>
            <line x1="8" y1="30" x2="52" y2="30"></line>
            <line x1="14.5" y1="14.5" x2="45.5" y2="45.5"></line>
            <line x1="14.5" y1="45.5" x2="45.5" y2="14.5"></line>
          </svg>
          <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 32px",maxWidth:"900px",letterSpacing:"-.015em",textWrap:"balance"}}>Your design team can only perform as well as the system around it.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",margin:"0 auto 44px",maxWidth:"480px"}}>
            Without clear leadership, designers spend more time reacting, reworking and aligning than producing value.
          </p>
          <a className="dl-btn hov-plum" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>BOOK A DISCOVERY CALL <ArrowIcon /></a>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Questions, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What exactly is a fractional CDO?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A Chief Design Officer engaged part-time, for a defined period, to build design leadership infrastructure, the systems, culture and standards a company needs, rather than a permanent full-time hire.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How long does an engagement run?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Four months. We embed, build the leadership system and exit once the function runs without us.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What happens when you leave?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Everything is documented and handed over. Success is a team that sustains design leadership on its own, you keep the infrastructure permanently.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How is this cheaper than hiring a CDO?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A full-time CDO's base salary can cost ₦32–60M a year. A representative four-month Design Lever engagement can cost ₦24M and includes implementation, documentation and handover.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How do we start?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  With a free Design Team Health Assessment, a naira-denominated read on what the current situation is costing you, before any commitment.
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
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"10px"}}>Free · no obligation</div>
                <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#FDFBF0"}}>Design Team Health Assessment</div>
              </div>
              <div onClick={closeForm} style={{cursor:"pointer",font:"400 24px 'Faculty Glyphic',serif",color:"rgba(253,251,240,.7)",lineHeight:".7",flex:"none",marginLeft:"20px"}}>×</div>
            </div>
            {sent && (
              <>
              <div style={{padding:"66px 36px",textAlign:"center"}}>
                <div style={{width:"58px",height:"58px",border:"1.5px solid #44063B",borderRadius:"0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px"}}>
                  <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FF7D44"}}>✓</span>
                </div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Request received.</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"380px",margin:"0 auto 30px"}}>
                  We'll be in touch within two working days to schedule your assessment and walk you through the naira cost model.
                </p>
                <div className="dl-btn dl-seg" onClick={closeForm} style={{display:"inline-block",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"15px 28px",letterSpacing:".04em",textTransform:"uppercase"}}>Back to site</div>
              </div>
              </>
            )}
            {notSent && (
              <>
              <div style={{padding:"34px 36px 40px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px 24px"}}>
                  <div>
                    <label className="dl-lbl">Full name</label>
                    <input className="dl-field" value={form.name} onChange={setName} placeholder="Ada Obi" />
                  </div>
                  <div>
                    <label className="dl-lbl">Work email</label>
                    <input className="dl-field" type="email" value={form.email} onChange={setEmail} placeholder="ada@company.com" />
                  </div>
                  <div>
                    <label className="dl-lbl">Company</label>
                    <input className="dl-field" value={form.company} onChange={setCompany} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="dl-lbl">Your role</label>
                    <select className="dl-field" value={form.role} onChange={setRole}>
                      <option value="">Select…</option>
                      <option>Founder / CEO</option>
                      <option>Product / Eng leader</option>
                      <option>Head of Design</option>
                      <option>Operations / People</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">Designers on the team</label>
                  <div style={{display:"flex",gap:"8px",marginTop:"8px"}}>
                    {sizeBtns.map((b, bIdx) => (
                      <Fragment key={bIdx}>
                      <div className="dl-seg" onClick={b.on} style={b.style}>{b.v}</div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">What's the biggest design challenge right now?</label>
                  <textarea className="dl-field" value={form.challenge} onChange={setChallenge} placeholder="A sentence or two is plenty."></textarea>
                </div>
                <div className="dl-btn dl-seg hov-orange" onClick={submitForm} style={{marginTop:"30px",textAlign:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px",letterSpacing:".05em",textTransform:"uppercase"}}>Request my assessment <ArrowIcon direction="right" /></div>
                <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Takes 30 minutes · remote · no cost</p>
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
