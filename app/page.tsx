"use client";

import { Fragment, useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";

const TESTIMONIALS = [
  { quote: "“Three months in, our design team stopped being a bottleneck and started setting the pace. The systems stayed after the engagement ended, that was the whole point.”", initials: "CE", role: "Chief Executive", org: "Health-tech · Lagos" },
  { quote: "“For the first time we could put a naira figure on what design was returning. That single number changed how the board talked about the function.”", initials: "CF", role: "Chief Financial Officer", org: "Fintech · Lagos" },
  { quote: "“We had eleven designers and no throughline. Within a quarter there was a standard, a ritual, and a reason our seniors stopped leaving.”", initials: "VP", role: "VP Product", org: "Digital bank · Abuja" },
  { quote: "“The hand-over was the real proof. Everything was documented, we have run the system ourselves for a year without missing a beat.”", initials: "HD", role: "Head of Design", org: "E-commerce · Nairobi" },
];

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

export default function PageHome() {
  // hidden-cost calculator
  const [des, setDes] = useState(8);
  const [sal, setSal] = useState(1200000);
  const [rew, setRew] = useState(25);
  const [att, setAtt] = useState(2);
  // testimonial slider
  const [tIdx, setTIdx] = useState(0);
  // health-assessment form modal
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const timer = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(timer);
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
  const setCompany = setField("company");
  const setRole = setField("role");
  const setChallenge = setField("challenge");
  const submitForm = () => setSent(true);
  const notSent = !sent;

  const tNext = () => setTIdx((i) => (i + 1) % TESTIMONIALS.length);
  const tPrev = () => setTIdx((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[tIdx];
  const tDots = TESTIMONIALS.map((_, i) => ({
    on: () => setTIdx(i),
    style: {
      width: i === tIdx ? "26px" : "9px",
      height: "9px",
      cursor: "pointer",
      transition: "all .2s",
      background: i === tIdx ? "#44063B" : "transparent",
      border: "1px solid #44063B",
    } as CSSProperties,
  }));

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
        <SiteNav active="home" />
        {/* HERO, blush pink field */}
        <div style={{background:"#FFBCE8",padding:"96px 64px 100px",position:"relative",overflow:"hidden"}}>
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
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance",width:"816px",height:"263px"}}>Fractional design leadership for businesses.</h1>
            <div style={{boxSizing:"border-box",display:"flex",flexDirection:"column",gap:"12px"}}>
              <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",maxWidth:"560px",margin:"0 0 48px"}}>
                A fractional design executive embeds inside your company, builds the systems that make design commercially productive, and hands them over running.
              </p>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <Link className="dl-btn hov-orange" href="/" onClick={openForm} style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>BOOK A CALL</Link>
              <a className="dl-link" href="#pricing" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>take a health assessment</a>
            </div>
          </div>
        </div>
        {/* TRUST LOGOS */}
        <div style={{padding:"46px 64px",background:"#FDFBF0",borderBottom:"1px solid rgba(68,6,59,.12)"}}>
          <div>
            <div className="dl-marq">
              <div className="dl-marq-track">
                <ImageSlot className="dl-marq-item" id="dl-logo-1" src="/images/logos/client-1.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-2" src="/images/logos/client-2.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-3" src="/images/logos/client-3.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-4" src="/images/logos/client-4.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-5" src="/images/logos/client-5.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-6" src="/images/logos/client-6.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-7" src="/images/logos/client-7.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-8" src="/images/logos/client-8.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-1" src="/images/logos/client-1.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-2" src="/images/logos/client-2.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-3" src="/images/logos/client-3.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-4" src="/images/logos/client-4.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-5" src="/images/logos/client-5.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-6" src="/images/logos/client-6.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-7" src="/images/logos/client-7.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
                <ImageSlot className="dl-marq-item" id="dl-logo-8" src="/images/logos/client-8.svg" fit="contain" style={{width:"184px",height:"69px",display:"block"}} placeholder="Client logo" />
              </div>
            </div>
          </div>
        </div>
        {/* WHO IT'S FOR */}
        <div id="practice" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Who it is for</span>
            <span style={{font:"400 14px 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",maxWidth:"340px",textAlign:"right"}}>
              <br />
            </span>
          </div>
          <h2 style={{font:"400 56px/1.1 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"900px",margin:"0 0 68px",letterSpacing:"-.01em"}}>Growth-stage companies with designers on staff.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"36px 32px 34px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>Stage</div>
              <p style={{font:"400 17px/1.55 'Inter Tight',sans-serif",color:"#44063B",margin:"0"}}>
                Series A to Series C technology companies, fintech, health tech, digital banking, e-commerce, with the product complexity and commercial pressure to act.
              </p>
            </div>
            <div style={{padding:"36px 32px 34px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>Symptom</div>
              <p style={{font:"400 17px/1.55 'Inter Tight',sans-serif",color:"#44063B",margin:"0"}}>
                Brand and product look like different companies. Senior designers leave within eighteen months. Design spend cannot be defended because no one can measure it.
              </p>
            </div>
            <div style={{padding:"36px 0 34px 32px"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"18px"}}>Blocker</div>
              <p style={{font:"400 17px/1.55 'Inter Tight',sans-serif",color:"#44063B",margin:"0"}}>
                Design teams are fragmented with no leadership. A full-time CDO costs heavy in the first year and rarely stays two. You need a CDO but not full-time hire at your stage.
              </p>
            </div>
          </div>
        </div>
        {/* WHAT THE CDO OWNS */}
        <div style={{padding:"118px 64px",backgroundColor:"#44073B"}}>
          <div style={{marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>What the role owns</span>
            <h2 style={{font:"400 56px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",maxWidth:"820px",margin:"24px 0 20px",letterSpacing:"-.01em"}}>
              Not a senior designer role, but an executive role accountable for design across the company.
            </h2>
            <p style={{font:"400 17px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",maxWidth:"600px",margin:"0"}}>
              This function leads every design function, makes each one answer to a business metric and reports to the CEO
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)"}}>
            <div style={{padding:"30px 24px 30px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",marginBottom:"12px",textTransform:"uppercase"}}>Vision & strategy</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Sets the three-year design direction and connects it to business strategy.</p>
            </div>
            <div style={{padding:"30px 24px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",marginBottom:"12px",textTransform:"uppercase"}}>Commercial accountability</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Makes design visible on the P&L and presents its return to the CEO and board.</p>
            </div>
            <div style={{padding:"30px 24px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",marginBottom:"12px",textTransform:"uppercase"}}>Talent & culture</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Owns why great designers join, how they grow, and the reason they stay.</p>
            </div>
            <div style={{padding:"30px 0 30px 24px"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",marginBottom:"12px",textTransform:"uppercase"}}>Standards & governance</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>Holds the quality bar across every function, including where no designers sit.</p>
            </div>
          </div>
        </div>
        {/* LEVER, light cream field, green accents */}
        {/* ENGAGEMENTS & PRICING */}
        <div id="method" style={{background:"#FDFBF0",padding:"120px 64px",borderTop:"1px solid rgba(68,6,59,.16)",borderStyle:"none"}}>
          <div style={{marginBottom:"80px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>OUR METHOD</span>
            <h2 style={{font:"400 60px/1.08 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"760px",margin:"26px 0 0",letterSpacing:"-.01em"}}>A documented framework, not a generic playbook.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"0"}}>
            <div style={{padding:"0 28px 0 0",display:"flex",flexDirection:"column"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase",paddingBottom:"16px",borderBottom:"1px solid rgba(68,6,59,.24)"}}>Leverage</div>
              <div style={{font:"400 clamp(120px,13vw,200px) 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1",margin:"34px 0 40px"}}>
                L
                <p style={{font:"400 13px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Diagnose where design has the greatest untapped commercial potential.</p>
              </div>
            </div>
            <div style={{padding:"0 28px",display:"flex",flexDirection:"column"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase",paddingBottom:"16px",borderBottom:"1px solid rgba(68,6,59,.24)"}}>Empower</div>
              <div style={{font:"400 clamp(120px,13vw,200px) 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1",margin:"34px 0 40px"}}>
                E
                <p style={{font:"400 13px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Build the culture and internal advocacy that unlocks design team performance.</p>
              </div>
            </div>
            <div style={{padding:"0 28px",display:"flex",flexDirection:"column"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase",paddingBottom:"16px",borderBottom:"1px solid rgba(68,6,59,.24)"}}>VELOCITY</div>
              <div style={{font:"400 clamp(120px,13vw,200px) 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1",margin:"34px 0 40px"}}>
                V
                <p style={{font:"400 13px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Systems and rituals that make output faster, more consistent, and predictable.</p>
              </div>
            </div>
            <div style={{padding:"0 28px",display:"flex",flexDirection:"column"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase",paddingBottom:"16px",borderBottom:"1px solid rgba(68,6,59,.24)"}}>Elevate</div>
              <div style={{font:"400 clamp(120px,13vw,200px) 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1",margin:"34px 0 40px"}}>
                E
                <p style={{font:"400 13px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Connect design metrics to the P&L, revenue, retention, velocity, churn.</p>
              </div>
            </div>
            <div style={{padding:"0 0 0 28px",display:"flex",flexDirection:"column"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".08em",textTransform:"uppercase",paddingBottom:"16px",borderBottom:"1px solid rgba(68,6,59,.24)"}}>Replicate</div>
              <div style={{font:"400 clamp(120px,13vw,200px) 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1",margin:"34px 0 40px"}}>
                R
                <p style={{font:"400 13px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Document everything and hand it over, sustained independently afterwards.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>OUR OFFERINGS</span>
            <span style={{font:"400 14px 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",maxWidth:"320px",textAlign:"left"}}>Five ways to start, scoped to where your design function actually is.</span>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B"}}>Founding</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Companies with design talent but no leadership structure, we build the function from zero.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>4–6 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B"}}>Turnaround</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Broken design functions, high attrition, team dysfunction, inconsistent output that needs resetting.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>3–5 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B"}}>Scale</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Preparing a functioning design team for the next phase of growth and complexity.</p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>usually</div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>5–8 months</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B"}}>Velocity Sprint</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                One specific, high-urgency design leadership problem. Usually with a fixed scope and fee.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>fixed</div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>4–8 weeks</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 260px",gap:"44px",alignItems:"center",padding:"38px 0"}}>
              <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B"}}>Strategic Advisory</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Post-engagement continuity, or a lightweight ongoing senior design perspective at the top.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>monthly</div>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>4-8 hours</div>
              </div>
            </div>
          </div>
        </div>
        {/* PRICING RATIONALE, orange field */}
        <div style={{padding:"110px 64px",backgroundColor:"#44063B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The comparison that matters</span>
              <h2 style={{font:"400 50px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 26px",letterSpacing:"-.01em"}}>Total fractional engagement cost, versus monthly salary.</h2>
              <p style={{font:"400 17px/1.65 'Inter Tight',sans-serif",color:"rgba(253,251,240,.92)",margin:"0",maxWidth:"460px"}}>
                Hiring a full-time CDO costs ₦32–60M in Year 1 and fails 40% of the time. A Fractional Engagement delivers the same executive capability at a fraction of the cost.
              </p>
            </div>
            <div style={{background:"#FDFBF0",padding:"44px 44px 40px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"0"}}>
                <div style={{paddingBottom:"26px",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>Full-time CDO, Year 1</div>
                  <div style={{font:"400 60px/.9 'Faculty Glyphic',serif",color:"rgba(68,6,59,.4)",letterSpacing:"-.02em"}}>₦32–60M</div>
                  <div style={{font:"400 13px 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",marginTop:"12px"}}>Recurring every year · average tenure under two years · risk of a failed hire</div>
                </div>
                <div style={{paddingTop:"26px"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>FRACTIONAL ENGAGEMENT</div>
                  <div style={{font:"400 60px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>₦24M</div>
                  <div style={{font:"400 13px 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",marginTop:"12px"}}>
                    Over four months engagement · once · defined outcome · infrastructure kept permanently
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DIAGNOSTIC, plum field, lime output */}
        {/* INTERACTIVE BUSINESS-LINES BAR */}
        <div id="lines" style={{padding:"72px 64px 56px",background:"#FFBCE8",borderTop:"1px solid rgba(68,6,59,.28)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"0"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The wider company</span>
              <h2 style={{font:"400 56px/1.06 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"720px",margin:"24px 0 0",letterSpacing:"-.01em"}}>Fractional design leadership is one line of four.</h2>
            </div>
          </div>
        </div>
        <div style={{padding:"0 64px 80px",background:"#FFBCE8"}}>
          <div className="dl-band">
            <span style={{position:"absolute",top:"24px",right:"26px",font:"400 26px 'Faculty Glyphic',serif",color:"#44063B",zIndex:"2"}}>↗</span>
            <div className="dl-lines">
              <a className="dl-line" href="#practice" style={{"--c":"#25AA84","--ink":"#FDFBF0",width:"136px",height:"344px"} as CSSProperties}>
                <div className="dl-lname">f. Practice</div>
                <div className="dl-lwrite">
                  <div className="dl-lwrite-in">
                    <div className="dl-lidx" style={{display:"none"}}>LINE 01 · fCDO</div>
                    <p className="dl-lblurb">
                      The flagship. A fractional Chief Design Officer embeds for three to six months, builds the leadership system with the LEVER method, and hands it over running.
                    </p>
                    <span className="dl-lgo">Work with us →</span>
                  </div>
                </div>
                <div className="dl-lcap">Fractional Design Leadership</div>
              </a>
              <Link className="dl-line" href="/academy" style={{"--c":"#FF6D35","--ink":"#FDFBF0"} as CSSProperties}>
                <div className="dl-lname">Academy</div>
                <div className="dl-lwrite">
                  <div className="dl-lwrite-in">
                    <div className="dl-lidx" style={{display:"none"}}>LINE 02 · CERTIFY</div>
                    <p className="dl-lblurb">
                      Africa's first structured design-leadership pathway, Foundation and Executive tracks, taught entirely by working practitioners.
                    </p>
                    <span className="dl-lgo">Enter the Academy →</span>
                  </div>
                </div>
                <div className="dl-lcap">Learning & certification</div>
              </Link>
              <Link className="dl-line" href="/network" style={{"--c":"#DEDF4D","--ink":"#44063B"} as CSSProperties}>
                <div className="dl-lname">Network</div>
                <div className="dl-lwrite">
                  <div className="dl-lwrite-in">
                    <div className="dl-lidx" style={{display:"none"}}>LINE 03 · PLACE</div>
                    <p className="dl-lblurb">
                      A vetted platform matching certified design leaders to the companies that need them, home to The Lever community and the executive Talent Hub.
                    </p>
                    <span className="dl-lgo">Enter the Network →</span>
                  </div>
                </div>
                <div className="dl-lcap">Platform & community</div>
              </Link>
              <Link className="dl-line" href="/research" style={{"--c":"#3B6FEB","--ink":"#FDFBF0"} as CSSProperties}>
                <div className="dl-lname">Research</div>
                <div className="dl-lwrite">
                  <div className="dl-lwrite-in">
                    <div className="dl-lidx" style={{display:"none"}}>LINE 04 · PROVE</div>
                    <p className="dl-lblurb">
                      The open-access evidence base, the African Design Leadership Report, white papers and reports that make every other line credible.
                    </p>
                    <span className="dl-lgo">Enter Research →</span>
                  </div>
                </div>
                <div className="dl-lcap">Evidence & documentation</div>
              </Link>
            </div>
            <div className="dl-imgcol">
              <ImageSlot className="dl-img dl-img-1" id="dl-fly-1" src="/images/scenes/fly-practice.jpg" style={{display:"block"}} placeholder="Practice, a design leader at work" />
              <ImageSlot className="dl-img dl-img-2" id="dl-fly-2" src="/images/scenes/fly-academy.jpg" style={{display:"block"}} placeholder="Academy, a cohort learning" />
              <ImageSlot className="dl-img dl-img-3" id="dl-fly-3" src="/images/scenes/fly-network.jpg" style={{display:"block"}} placeholder="Network, the community" />
              <ImageSlot className="dl-img dl-img-4" id="dl-fly-4" src="/images/scenes/fly-research.jpg" style={{display:"block"}} placeholder="Research, the report" />
            </div>
          </div>
        </div>
        {/* HOW TO START */}
        <div id="start" style={{padding:"120px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>How to start</span>
            <h2 style={{font:"400 56px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>It begins with a call.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"36px 40px 40px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 44px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"22px"}}>01</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Health Assessment</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                A free Design Team Health Assessment. We surface the cost of the current situation, before anything is proposed.
              </p>
            </div>
            <div style={{padding:"36px 40px 40px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 44px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"22px"}}>02</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Scope & discovery</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                We map the full design landscape, interview leadership, and recommend the engagement type, with success metrics defined per function.
              </p>
            </div>
            <div style={{padding:"36px 0 40px 40px"}}>
              <div style={{font:"400 44px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1",marginBottom:"22px"}}>03</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Embed & hand over</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                We build the leadership system through the LEVER arc, then exit with everything documented and running independently.
              </p>
            </div>
          </div>
          <div style={{marginTop:"60px",display:"flex",alignItems:"center",gap:"28px"}}>
            <Link className="dl-btn hov-orange" href="/" onClick={openForm} style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 30px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>BOOK A CALL →</Link>
          </div>
        </div>
        {/* TESTIMONIALS, interactive slider */}
        <div style={{padding:"110px 64px",background:"#FFBCE8",position:"relative",overflow:"hidden"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>In their words</span>
            <div style={{display:"flex",gap:"10px"}}>
              <div className="dl-tarr" onClick={tPrev}>←</div>
              <div className="dl-tarr" onClick={tNext}>→</div>
            </div>
          </div>
          <blockquote className="dl-tquote" style={{font:"400 40px/1.24 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 44px",maxWidth:"1080px",letterSpacing:"-.01em",minHeight:"200px"}}>{t.quote}</blockquote>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"24px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
              <div style={{width:"52px",height:"52px",border:"1px solid rgba(68,6,59,.6)",display:"flex",alignItems:"center",justifyContent:"center",font:"400 15px 'Spline Sans Mono',monospace",color:"#44063B"}}>{t.initials}</div>
              <div>
                <div style={{font:"400 15px 'Spline Sans Mono',monospace",color:"#44063B"}}>{t.role}</div>
                <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",marginTop:"3px"}}>{t.org}</div>
              </div>
            </div>
            <div className="dl-tdots" style={{display:"flex",gap:"9px"}}>
              {tDots.map((d, dIdx) => (
                <Fragment key={dIdx}>
                <div onClick={d.on} style={d.style}></div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* CTA, lime field */}
        <div style={{padding:"120px 64px",background:"#44063B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The diagnostic</span>
              <h2 style={{font:"400 58px/1.06 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"26px 0 28px",letterSpacing:"-.01em"}}>What is broken design function costing you?</h2>
              <p style={{font:"400 17px/1.65 'Inter Tight',sans-serif",color:"rgba(253,251,240,.68)",margin:"0 0 40px",maxWidth:"400px"}}>
                A structured estimate of the cost sitting inside your current design function. Move the sliders.
              </p>
              <Link className="dl-btn hov-pink" href="/diagnostic" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF6D35"}}>Open the full diagnostic →</Link>
            </div>
            <div>
              <div style={{display:"flex",flexDirection:"column",gap:"26px",marginBottom:"40px"}}>
                <label style={{display:"block"}}>
                  <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                    <span>Designers on the team</span>
                    <span style={{color:"#FF6D35"}}>{c.des}</span>
                  </div>
                  <input type="range" min="1" max="30" value={c.des} onChange={cDes} style={{width:"100%"}} />
                </label>
                <label style={{display:"block"}}>
                  <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                    <span>Avg designer salary / mo</span>
                    <span style={{color:"#FF6D35"}}>{c.salFmt}</span>
                  </div>
                  <input type="range" min="300000" max="4000000" step="100000" value={c.sal} onChange={cSal} style={{width:"100%"}} />
                </label>
                <div style={{display:"flex",gap:"40px"}}>
                  <label style={{flex:"1"}}>
                    <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                      <span>Rework %</span>
                      <span style={{color:"#FF6D35"}}>{c.rew}%</span>
                    </div>
                    <input type="range" min="0" max="40" value={c.rew} onChange={cRew} style={{width:"100%"}} />
                  </label>
                  <label style={{flex:"1"}}>
                    <div style={{display:"flex",justifyContent:"space-between",font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",letterSpacing:".04em",textTransform:"uppercase",marginBottom:"12px"}}>
                      <span>Senior exits / yr</span>
                      <span style={{color:"#FF6D35"}}>{c.att}</span>
                    </div>
                    <input type="range" min="0" max="8" value={c.att} onChange={cAtt} style={{width:"100%"}} />
                  </label>
                </div>
              </div>
              <div style={{borderTop:"1px solid rgba(253,251,240,.3)",paddingTop:"26px"}}>
                <div style={{font:"400 10.5px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"12px"}}>Estimated annual cost</div>
                <div style={{font:"400 88px/.9 'Faculty Glyphic',serif",color:"#FF6D35",letterSpacing:"-.02em"}}>{c.totalFmt}</div>
                <div style={{font:"400 14px 'Spline Sans Mono',monospace",color:"#FFBCE8",marginTop:"10px"}}>≈ {c.usdFmt} / year</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:"140px 64px",background:"#DEDF4D",textAlign:"center"}}>
          <svg viewBox="0 0 60 60" width="36" height="36" fill="none" stroke="#44063B" strokeWidth="1.4" style={{marginBottom:"40px"}}>
            <line x1="30" y1="8" x2="30" y2="52"></line>
            <line x1="8" y1="30" x2="52" y2="30"></line>
            <line x1="14.5" y1="14.5" x2="45.5" y2="45.5"></line>
            <line x1="14.5" y1="45.5" x2="45.5" y2="14.5"></line>
          </svg>
          <h2 style={{font:"400 66px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 32px",maxWidth:"900px",letterSpacing:"-.015em",textWrap:"balance"}}>Your design team is costing you money, and it is not their fault.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"0 auto 44px",maxWidth:"480px"}}>
            Start with a free Design Team Health Assessment. We surface the cost of the current situation, before anything else.
          </p>
          <Link className="dl-btn hov-plum" href="/" onClick={openForm} style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>BOOK THE CALL →</Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:".75fr 1.25fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
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
                  Typically three to six months, depending on the tier. We embed, build with the LEVER method, and exit once the function runs without us.
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
                  A full-time CDO costs ₦25–60M in the first year with tenure often under two years. A fractional engagement delivers the leadership system at a fraction of that, and the company retains it.
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
                <div style={{font:"400 10.5px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"10px"}}>Free · no obligation</div>
                <div style={{font:"400 30px/1.05 'Faculty Glyphic',serif",color:"#FDFBF0"}}>Design Team Health Assessment</div>
              </div>
              <div onClick={closeForm} style={{cursor:"pointer",font:"400 30px 'Faculty Glyphic',serif",color:"rgba(253,251,240,.7)",lineHeight:".7",flex:"none",marginLeft:"20px"}}>×</div>
            </div>
            {sent && (
              <>
              <div style={{padding:"66px 36px",textAlign:"center"}}>
                <div style={{width:"58px",height:"58px",border:"1.5px solid #44063B",borderRadius:"0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px"}}>
                  <span style={{font:"400 26px 'Faculty Glyphic',serif",color:"#FF6D35"}}>✓</span>
                </div>
                <div style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Request received.</div>
                <p style={{font:"400 15.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"380px",margin:"0 auto 30px"}}>
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
                <div className="dl-btn dl-seg hov-orange" onClick={submitForm} style={{marginTop:"30px",textAlign:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px",letterSpacing:".05em",textTransform:"uppercase"}}>Request my assessment →</div>
                <p style={{font:"400 11.5px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Takes 30 minutes · remote · no cost</p>
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
