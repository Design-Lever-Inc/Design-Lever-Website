"use client";

import { Fragment, useState, type CSSProperties } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PersonRevealCard } from "@/components/PersonRevealCard";

const EMPTY_FORM = {
  company: "", name: "", email: "", need: "", cadence: "2 days/wk", timeline: "",
  title: "", years: "", url: "", availability: "2 days/wk", focus: [] as string[],
};

const CADENCES = ["1 day/wk", "2 days/wk", "Advisory", "Interim"];
const FOCUS_AREAS = ["Design ops", "Org design", "Product", "Craft", "0→1 teams", "Research"];

const segStyle = (active: boolean): CSSProperties => ({
  flex: 1,
  textAlign: "center",
  padding: "12px 6px",
  font: "400 12px 'Spline Sans Mono',monospace",
  border: `1px solid ${active ? "#44063B" : "rgba(68,6,59,.28)"}`,
  background: active ? "#44063B" : "transparent",
  color: active ? "#FDFBF0" : "#44063B",
  cursor: "pointer",
});

const chipStyle = (active: boolean): CSSProperties => ({
  padding: "9px 15px",
  cursor: "pointer",
  font: "400 12px 'Spline Sans Mono',monospace",
  border: `1px solid ${active ? "#7A2A6E" : "rgba(68,6,59,.28)"}`,
  background: active ? "#7A2A6E" : "transparent",
  color: active ? "#FDFBF0" : "#44063B",
});

export default function PageTalentHub() {
  const [kind, setKind] = useState<"brief" | "join" | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  const openBrief = (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    setKind("brief");
    setSent(false);
  };
  const openJoin = (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    setKind("join");
    setSent(false);
  };
  const closeForm = () => setKind(null);
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const setField =
    (k: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const setCompany = setField("company");
  const setName = setField("name");
  const setEmail = setField("email");
  const setNeed = setField("need");
  const setTimeline = setField("timeline");
  const setTitle = setField("title");
  const setYears = setField("years");
  const setUrl = setField("url");
  const setSeg = (k: "cadence" | "availability", v: string) => () =>
    setForm((f) => ({ ...f, [k]: v }));
  const toggleFocus = (v: string) => () =>
    setForm((f) => ({
      ...f,
      focus: f.focus.includes(v) ? f.focus.filter((x) => x !== v) : [...f.focus, v],
    }));
  const submitForm = () => setSent(true);

  const cadenceBtns = CADENCES.map((v) => ({ v, on: setSeg("cadence", v), style: segStyle(form.cadence === v) }));
  const availBtns = CADENCES.map((v) => ({ v, on: setSeg("availability", v), style: segStyle(form.availability === v) }));
  const focusChips = FOCUS_AREAS.map((v) => ({ v, on: toggleFocus(v), style: chipStyle(form.focus.includes(v)) }));

  const isBrief = kind === "brief";
  const isJoin = kind === "join";
  const formOpen = kind !== null;
  const showBrief = isBrief && !sent;
  const showJoin = isJoin && !sent;
  const formEyebrow = isBrief ? "For companies" : "For executives";
  const formTitle = isBrief ? "Brief the Talent Hub" : "Join the executive bench";
  const successTitle = isBrief ? "Brief received." : "Application received.";
  const successMsg = isBrief
    ? "We'll come back with a matched shortlist of two or three executives within about two weeks."
    : "We'll review your background and be in touch about the bench and live mandates.";

  return (
    <div className="pg-talent-hub">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* ANNOUNCEMENT */}
        <div className="dl-anno">
          <span>Interview a fractional design leader this week.</span>
          {" "}
          <a href="https://www.conectr.me/s/design-intelligence-call-dh" target="_blank" rel="noopener noreferrer">Book a free call <ArrowIcon /></a>
        </div>
        {/* NAV */}
        <SiteNav active="network" />
        {/* HERO, plum executive field */}
        <div className="dl-page-hero-texture dl-page-hero-texture--on-dark dl-page-hero-texture--motif dl-network-family-hero" style={{background:"#44063B",padding:"96px 64px 100px",position:"relative",overflow:"hidden"}}>
          <svg viewBox="0 0 520 520" width="540" height="540" fill="none" stroke="#FDFBF0" style={{position:"absolute",top:"-70px",right:"-120px",opacity:".28"}}>
            <circle cx="260" cy="260" r="250" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="180" cy="260" r="70" strokeWidth="1"></circle>
            <circle cx="340" cy="260" r="70" strokeWidth="1"></circle>
            <line x1="250" y1="260" x2="270" y2="260" strokeWidth="1"></line>
            <circle cx="260" cy="260" r="6" fill="#DEDF4D" stroke="none"></circle>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The executive tier of the Network</span>
            <h1 style={{font:"400 88px/1.0 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em",margin:"40px 0 38px",textWrap:"balance",width:"729px",height:"259px"}}>Vetted design executives, matched to your company needs.</h1>
            <p style={{font:"400 21px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.78)",maxWidth:"580px",margin:"0 0 48px"}}>
              CDOs, VPs and Heads of Design available for defined fractional and advisory engagements.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <Link className="dl-btn hov-cream" href="/bench" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#DEDF4D"}}>Find a design leader <ArrowIcon /></Link>
              <a className="dl-link" href="#apply" onClick={openJoin} style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(253,251,240,.5)",paddingBottom:"4px"}}>Join the Talent Hub</a>
            </div>
          </div>
        </div>
        {/* HOW IT WORKS */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".14em",textTransform:"uppercase"}}>For companies</span>
              <h2 style={{font:"400 48px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>Executive design leadership, sized to your stage.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"440px"}}>
                You are not ready for a full-time CDO, but a senior designer cannot set direction across the company. The Talent Hub sits exactly in between: a proven design executive, part-time, accountable to a business outcome.
              </p>
              <Link className="dl-btn hov-plum-mid" href="/contact" onClick={openBrief} style={{display:"inline-flex",alignItems:"center",gap:"10px",marginTop:"30px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Find a design leader <ArrowIcon direction="right" /></Link>
            </div>
            <div style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
              <div style={{display:"flex",gap:"28px",padding:"26px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>01</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Tell us the mandate</div>
                  <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>
                    The design problem you need led, the cadence, and the outcome you are accountable for.
                  </p>
                </div>
              </div>
              <div style={{display:"flex",gap:"28px",padding:"26px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>02</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Meet a shortlist</div>
                  <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>
                    Two or three executives from the bench whose track record fits, with full profiles, not CVs.
                  </p>
                </div>
              </div>
              <div style={{display:"flex",gap:"28px",padding:"26px 0"}}>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>03</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Engage part-time</div>
                  <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>
                    One placement fee, then a direct fractional engagement, a day or two a week, month to month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* THE BENCH, exec roster, 3-up (images ≥4 cols) */}
        <div id="bench" style={{padding:"118px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"56px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The bench</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em",width:"628px",height:"108px"}}>A curated roster of design executives.</h2>
            </div>
            <Link className="dl-link" href="/bench" style={{display:"inline-flex",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",padding:"0 0 4px",textDecoration:"none",letterSpacing:".06em",borderBottom:"1px solid rgba(68,6,59,.4)"}}>View all design leaders</Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <PersonRevealCard id="dl-th-exec1" src="/images/people/th-1.jpg" name="Adaeze Okafor" role="Fractional CDO" country="Nigeria" company="Ex-fintech · 14 yrs" bio="Built and led design across two Series-B fintechs. Strongest on design ops and commercial framing." className="dl-exec" placeholder="Executive portrait">
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"16px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Design ops</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>0→1 teams</span>
              </div>
            </PersonRevealCard>
            <PersonRevealCard id="dl-th-exec2" src="/images/people/th-2.jpg" name="Zainab Mohammed" role="VP, Design" country="Nigeria" company="Ex-health tech · 16 yrs" bio="Scaled a design org from 4 to 30. Deep on hiring, career frameworks, and retention." className="dl-exec" placeholder="Executive portrait">
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"16px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Org design</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Hiring</span>
              </div>
            </PersonRevealCard>
            <PersonRevealCard id="dl-th-exec3" src="/images/people/th-3.jpg" name="Nadia Hassan" role="Head of Design" country="Kenya" company="Diaspora · 12 yrs" bio="Global product design leader. Bridges African teams with international product standards." className="dl-exec" placeholder="Executive portrait">
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"16px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Product</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Craft</span>
              </div>
            </PersonRevealCard>
            <PersonRevealCard id="dl-th-exec4" src="/images/people/th-4.jpg" name="Kwame Mensah" role="Design Director" country="Ghana" company="Ex-e-commerce · 13 yrs" bio="Ran design for a pan-African marketplace. Strong on research ops and multi-brand systems." className="dl-exec" placeholder="Executive portrait">
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"16px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Research</span>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44073BB3",border:"1px solid rgba(253,251,240,.25)",padding:"4px 10px",borderColor:"#44073B40"}}>Systems</span>
              </div>
            </PersonRevealCard>
          </div>
        </div>
        {/* LISTING STANDARD */}
        <section className="dl-network-standard" style={{padding:"110px 64px",background:"#44063B"}}>
          <div style={{marginBottom:"46px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The standard</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em",maxWidth:"760px"}}>Every listing clears a standard.</h2>
          </div>
          <div className="dl-network-standard-grid" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderTop:"1px solid rgba(253,251,240,.28)"}}>
            {[
              ["Experience reviewed", "Senior leadership history and relevant work are checked."],
              ["Human vetted", "Every practitioner completes Design Lever's review process."],
              ["Independent", "Practitioners work independently and agree their engagement terms with the company."],
            ].map(([title, copy], index) => (
              <div className="dl-network-standard-item" key={title} style={{padding:"32px 40px 38px",borderLeft:index === 0 ? "none" : "1px solid rgba(253,251,240,.2)"}}>
                <svg aria-hidden="true" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="#FF7D44" strokeWidth="1.25" style={{display:"block",marginBottom:"24px"}}>
                  {index === 0 && <><path d="M16 3.5 26 7v7.6c0 6.2-4.1 10.9-10 13.9-5.9-3-10-7.7-10-13.9V7l10-3.5Z"/><path d="m11.2 15.8 3.1 3.1 6.7-7"/></>}
                  {index === 1 && <><circle cx="16" cy="16" r="12"/><path d="M10.5 22c1.4-3.2 3.2-4.8 5.5-4.8s4.1 1.6 5.5 4.8M16 8.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/></>}
                  {index === 2 && <><circle cx="16" cy="16" r="10.5"/><path d="M16 2.5v5M16 24.5v5M2.5 16h5M24.5 16h5"/><circle cx="16" cy="16" r="2" fill="#FF7D44" stroke="none"/></>}
                </svg>
                <h3 style={{font:"400 24px/1.15 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0 0 14px"}}>{title}</h3>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.72)",margin:0}}>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        {/* ENGAGEMENT MODELS */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Engagement models</span>
            <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Two ways to bring an executive in.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 240px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Embedded / Fractional</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Ongoing part-time design leadership, the executive owns direction and sits on your leadership calls.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>monthly</div>
                <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>
                  <span style={{fontStyle:"normal",fontVariant:"normal",fontSizeAdjust:"none",fontLanguageOverride:"normal",fontKerning:"auto",fontOpticalSizing:"auto",fontFeatureSettings:"normal",fontVariationSettings:"normal",fontWeight:"400",fontStretch:"normal",lineHeight:"normal"}}>2 - 3 days</span>
                  <span style={{font:"400 12px \"Roboto Flex\"",color:"rgba(68, 6, 59, 0.55)"}}>/ week</span>
                </div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr 240px",gap:"44px",alignItems:"center",padding:"38px 0",borderBottom:"1px solid rgba(68,6,59,.18)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Advisory</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>
                A lighter cadence, a standing executive perspective for a founder or an in-house design lead who needs a sounding board.
              </p>
              <div style={{textAlign:"right"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginBottom:"4px"}}>monthly</div>
                <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>4 - 8 hours</div>
              </div>
            </div>
          </div>
        </div>
        {/* FEE MODEL, plum band */}
        <div style={{padding:"110px 64px",backgroundColor:"#44073B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The model</span>
              <h2 style={{font:"400 50px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 26px",letterSpacing:"-.01em"}}>One company-side fee. No practitioner commission.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.85)",margin:"0",maxWidth:"460px"}}>
                Clean and one-sided: a single 20% placement fee from the company on a confirmed match. Practitioners never pay to be placed. No retainer to Design Lever, no agency margin on the ongoing engagement.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
              <div style={{background:"#FDFBF0",padding:"36px 32px"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".06em",marginBottom:"16px"}}>COMPANY PAYS</div>
                <div style={{font:"400 60px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>20%</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"18px 0 0"}}>of the first month's engagement value, charged once on a confirmed match.</p>
              </div>
              <div style={{background:"#FDFBF0",padding:"36px 32px"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".06em",marginBottom:"16px"}}>PRACTITIONER PAYS</div>
                <div style={{font:"400 60px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>₦0</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"18px 0 0"}}>Executives never pay a fee to get placed. Ever.</p>
              </div>
            </div>
          </div>
        </div>
        {/* FOR EXECUTIVES */}
        <div id="apply" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div className="dl-talent-apply-layout" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
              <div style={{display:"grid",gridTemplateColumns:"260px 1fr",gap:"36px",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Senior mandates</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  Work at the level you already operate, not as execution capacity.
                </p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"260px 1fr",gap:"36px",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Keep your fee</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  Design Lever charges the company, not the practitioner.
                </p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"260px 1fr",gap:"36px",padding:"28px 0"}}>
                <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Work across markets</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  Take defined engagements from Africa or the diaspora without relocating.
                </p>
              </div>
            </div>
            <div className="dl-talent-apply-summary">
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".14em",textTransform:"uppercase"}}>For executives</span>
              <h2 style={{font:"400 46px/1.12 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>Build a portfolio career at executive level.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 30px",maxWidth:"440px"}}>
                Join the bench and let matched mandates come to you, vetted companies, clear briefs, and complete independence. You are never contracted to Design Lever.
              </p>
              <Link className="dl-btn hov-plum-mid" href="/contact" onClick={openJoin} style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Join the Talent Hub <ArrowIcon direction="right" /></Link>
            </div>
          </div>
        </div>
        {/* CTA, plum */}
        <div style={{padding:"130px 64px",textAlign:"center",backgroundColor:"#DEDF4C"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44073B",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>The design executive you need, without the permanency.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"#44073BD9",margin:"0 auto 42px",maxWidth:"500px"}}>Tell us the mandate and meet a matched shortlist within about two weeks.</p>
          <div style={{display:"flex",gap:"24px",justifyContent:"center",alignItems:"center"}}>
            <Link className="dl-btn" href="/contact" onClick={openBrief} style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Find a leader</Link>
            <a className="dl-link" href="#apply" onClick={openJoin} style={{display:"inline-flex",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",background:"transparent",padding:"0 0 4px",textDecoration:"none",letterSpacing:".06em",borderBottom:"1px solid rgba(68,6,59,.4)"}}>Join the Talent Hub</a>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Talent Hub, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How is this different from the fractional practice?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The fractional practice is Design Lever's own embedded fractional-CDO engagement, delivered with the LEVER method. The Talent Hub matches you to an independent design executive from a curated bench for a lighter, ongoing fractional role.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">And how is it different from the Network?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The Talent Hub is the executive tier of the Network, director-level and above, for fractional leadership roles specifically, rather than the full range of certified practitioners.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Are the executives employed by Design Lever?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Every executive is independent. The Hub makes the match; the engagement is directly between you and them.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What does it cost?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A one-time placement fee of 20% of the first month's engagement value, paid by the company on a confirmed match. Practitioners never pay a fee to be placed. The ongoing engagement fee is set directly with the executive, no agency margin.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How fast can we start?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Typically about two weeks from brief to a matched executive in the room, depending on the specificity of the mandate.
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
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"10px"}}>{formEyebrow}</div>
                <div style={{font:"400 24px/1.05 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{formTitle}</div>
              </div>
              <div onClick={closeForm} style={{cursor:"pointer",font:"400 24px 'Faculty Glyphic',serif",color:"rgba(253,251,240,.7)",lineHeight:".7",flex:"none",marginLeft:"20px"}}>×</div>
            </div>
            {sent && (
              <>
              <div style={{padding:"66px 36px",textAlign:"center"}}>
                <div style={{width:"58px",height:"58px",border:"1.5px solid #44063B",borderRadius:"0",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px"}}>
                  <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FF7D44"}}>✓</span>
                </div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>{successTitle}</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"390px",margin:"0 auto 30px"}}>{successMsg}</p>
                <div className="dl-btn dl-seg" onClick={closeForm} style={{display:"inline-block",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"15px 28px",letterSpacing:".04em",textTransform:"uppercase"}}>Back to site</div>
              </div>
              </>
            )}
            {showBrief && (
              <>
              <div style={{padding:"34px 36px 40px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px 24px"}}>
                  <div style={{gridColumn:"1 / -1"}}>
                    <label className="dl-lbl">Company</label>
                    <input className="dl-field" value={form.company} onChange={setCompany} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="dl-lbl">Your name</label>
                    <input className="dl-field" value={form.name} onChange={setName} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="dl-lbl">Work email</label>
                    <input className="dl-field" type="email" value={form.email} onChange={setEmail} placeholder="you@company.com" />
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">What do you need led?</label>
                  <textarea className="dl-field" value={form.need} onChange={setNeed} placeholder="The design problem, the mandate, and the outcome you're accountable for."></textarea>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">Cadence</label>
                  <div style={{display:"flex",gap:"8px",marginTop:"8px"}}>
                    {cadenceBtns.map((b, bIdx) => (
                      <Fragment key={bIdx}>
                      <div className="dl-seg" onClick={b.on} style={b.style}>{b.v}</div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">When</label>
                  <select className="dl-field" value={form.timeline} onChange={setTimeline}>
                    <option value="">Select…</option>
                    <option>Immediately</option>
                    <option>This quarter</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="dl-btn dl-seg hov-plum-mid" onClick={submitForm} style={{marginTop:"30px",textAlign:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px",letterSpacing:".05em",textTransform:"uppercase"}}>Send the brief <ArrowIcon direction="right" /></div>
                <p style={{font:"400 12px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Matched shortlist in ~2 weeks · one 20% placement fee, company-side only</p>
              </div>
              </>
            )}
            {showJoin && (
              <>
              <div style={{padding:"34px 36px 40px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px 24px"}}>
                  <div>
                    <label className="dl-lbl">Full name</label>
                    <input className="dl-field" value={form.name} onChange={setName} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="dl-lbl">Email</label>
                    <input className="dl-field" type="email" value={form.email} onChange={setEmail} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="dl-lbl">Current / most recent title</label>
                    <input className="dl-field" value={form.title} onChange={setTitle} placeholder="e.g. VP of Design" />
                  </div>
                  <div>
                    <label className="dl-lbl">Years leading design</label>
                    <select className="dl-field" value={form.years} onChange={setYears}>
                      <option value="">Select…</option>
                      <option>8–10</option>
                      <option>11–14</option>
                      <option>15+</option>
                    </select>
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">Focus areas</label>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"}}>
                    {focusChips.map((c, cIdx) => (
                      <Fragment key={cIdx}>
                      <div className="dl-seg" onClick={c.on} style={c.style}>{c.v}</div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">Portfolio / LinkedIn</label>
                  <input className="dl-field" value={form.url} onChange={setUrl} placeholder="https://" />
                </div>
                <div style={{marginTop:"26px"}}>
                  <label className="dl-lbl">Availability</label>
                  <div style={{display:"flex",gap:"8px",marginTop:"8px"}}>
                    {availBtns.map((b, bIdx) => (
                      <Fragment key={bIdx}>
                      <div className="dl-seg" onClick={b.on} style={b.style}>{b.v}</div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="dl-btn dl-seg hov-plum-mid" onClick={submitForm} style={{marginTop:"30px",textAlign:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px",letterSpacing:".05em",textTransform:"uppercase"}}>Apply to the bench <ArrowIcon direction="right" /></div>
                <p style={{font:"400 12px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.45)",textAlign:"center",margin:"16px 0 0"}}>Director-level and above · you're never contracted to Design Lever</p>
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
