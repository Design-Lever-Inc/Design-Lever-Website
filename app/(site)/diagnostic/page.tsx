"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/components/Analytics";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";

const STORAGE_KEY = "dl_diag_v1";

/** Eases a displayed number toward its target so the headline figure counts
 *  rather than jumping. Chases the latest target (handles fast slider drags),
 *  counts up from zero on first paint, and snaps instantly under
 *  prefers-reduced-motion. */
function useCountUp(target: number) {
  const [display, setDisplay] = useState(target);
  const currentRef = useRef(target);
  const rafRef = useRef<number | null>(null);
  const firstRef = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      currentRef.current = target;
      setDisplay(target);
      return;
    }
    if (firstRef.current) {
      firstRef.current = false;
      currentRef.current = 0; // count up from zero on load
    }
    const tick = () => {
      const diff = target - currentRef.current;
      if (Math.abs(diff) < Math.max(1, Math.abs(target) * 0.0008)) {
        currentRef.current = target;
        setDisplay(target);
        rafRef.current = null;
        return;
      }
      currentRef.current += diff * 0.16;
      setDisplay(currentRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return display;
}

const DEFAULTS = { des: 8, sal: 1200000, eng: 20, engSal: 2200000, rew: 25, att: 2, rep: 7.5 };
type DiagState = typeof DEFAULTS;

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

export default function PageDiagnostic() {
  const [s, setS] = useState<DiagState>(DEFAULTS);
  const touched = useRef(false);
  const reported = useRef(false);

  // inputs persist across visits (as in the prototype)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && typeof saved === "object") setS((cur) => ({ ...cur, ...saved }));
    } catch {}
  }, []);

  const set =
    (k: keyof DiagState, isFloat = false) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      touched.current = true;
      const val = isFloat ? parseFloat(e.target.value) : parseInt(e.target.value, 10);
      setS((cur) => {
        const next = { ...cur, [k]: val };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    };
  const setDes = set("des");
  const setSal = set("sal");
  const setEng = set("eng");
  const setEngSal = set("engSal");
  const setRew = set("rew");
  const setAtt = set("att");
  const setRep = set("rep", true);

  const rework = s.eng * s.engSal * 12 * (s.rew / 100);
  const attrition = s.att * s.sal * s.rep;
  const total = rework + attrition;
  const animatedTotal = useCountUp(total);

  // Analytics: once per visit, after the visitor stops adjusting the sliders.
  useEffect(() => {
    if (!touched.current || reported.current) return;
    const t = setTimeout(() => {
      reported.current = true;
      track("diagnostic_used", { designers: s.des, annual_cost_ngn: Math.round(total) });
    }, 3000);
    return () => clearTimeout(t);
  }, [s, total]);
  const perDes = s.des > 0 ? total / s.des : 0;
  const maxPart = Math.max(rework, attrition, 1);
  const v = {
    ...s,
    salFmt: fmtNaira(s.sal),
    engSalFmt: fmtNaira(s.engSal),
    totalFmt: fmtNaira(animatedTotal),
    usdFmt: fmtUSD(animatedTotal),
    perDesFmt: fmtNaira(perDes),
    reworkFmt: fmtNaira(rework),
    attritionFmt: fmtNaira(attrition),
    reworkPct: Math.round((rework / maxPart) * 100) + "%",
    attritionPct: Math.round((attrition / maxPart) * 100) + "%",
  };

  return (
    <div className="pg-diagnostic">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="none" />
        {/* HERO */}
        <div className="dl-page-hero-texture" style={{position:"relative",overflow:"hidden",padding:"96px 64px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>DIAGNOSTIC</span>
          </div>
          <h1 style={{font:"400 80px/1.03 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 32px",maxWidth:"1040px",textWrap:"balance"}}>What is broken design costing you, in naira?</h1>
          <p style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"600px",margin:"0"}}>
            Broken design leaks money in every function: brand, product, marketing and service. This tool prices two of the most measurable leaks.
          </p>
        </div>
        {/* CALCULATOR */}
        <div style={{padding:"0 64px 64px",backgroundColor:"#44063B"}}>
          <div style={{background:"#14191D",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            {/* INPUTS */}
            <div style={{padding:"56px 52px",borderRight:"1px solid rgba(253,251,240,.14)",backgroundColor:"#44063B"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"44px"}}>Your inputs</div>
              <div style={{display:"flex",flexDirection:"column",gap:"38px"}}>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Designers on the team</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.des}</span>
                  </div>
                  <input className="dl-slider" type="range" min="1" max="30" value={v.des} onChange={setDes} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Avg designer salary / month</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.salFmt}</span>
                  </div>
                  <input className="dl-slider" type="range" min="300000" max="4000000" step="100000" value={v.sal} onChange={setSal} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Engineers affected by design inconsistency</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.eng}</span>
                  </div>
                  <input className="dl-slider" type="range" min="0" max="80" value={v.eng} onChange={setEng} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Avg engineer salary / month</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.engSalFmt}</span>
                  </div>
                  <input className="dl-slider" type="range" min="400000" max="6000000" step="100000" value={v.engSal} onChange={setEngSal} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Sprint capacity lost to rework</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.rew}%</span>
                  </div>
                  <input className="dl-slider" type="range" min="0" max="40" value={v.rew} onChange={setRew} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Senior designer exits / year</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.att}</span>
                  </div>
                  <input className="dl-slider" type="range" min="0" max="8" value={v.att} onChange={setAtt} />
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"16px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Months of salary to replace a senior</span>
                    <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.rep}</span>
                  </div>
                  <input className="dl-slider" type="range" min="6" max="9" step="0.5" value={v.rep} onChange={setRep} />
                </div>
              </div>
            </div>
            {/* OUTPUT */}
            <div style={{padding:"56px 52px",display:"flex",flexDirection:"column",backgroundColor:"#44063B"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"32px"}}>Estimated annual cost of design inefficiency</div>
              <div className="dl-diag-figure" style={{font:"400 96px/.86 'Faculty Glyphic',serif",fontVariantNumeric:"tabular-nums",color:"#FF7D44",letterSpacing:"-.03em"}}>{v.totalFmt}</div>
              <div style={{font:"400 15px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.7)",marginTop:"16px"}}>≈ {v.usdFmt} / year · {v.perDesFmt} per designer</div>
              <div style={{marginTop:"48px",display:"flex",flexDirection:"column",gap:"26px"}}>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"12px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Engineering rework</span>
                    <span style={{font:"400 20px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.reworkFmt}</span>
                  </div>
                  <div style={{height:"8px",background:"rgba(253,251,240,.12)",borderRadius:"0",overflow:"hidden"}}>
                    <div className="dl-bar" style={{height:"100%",background:"#FF7D44",borderRadius:"0",width:v.reworkPct}}></div>
                  </div>
                </div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"12px"}}>
                    <span style={{font:"400 12px 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.82)"}}>Senior designer attrition</span>
                    <span style={{font:"400 20px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>{v.attritionFmt}</span>
                  </div>
                  <div style={{height:"8px",background:"rgba(253,251,240,.12)",borderRadius:"0",overflow:"hidden"}}>
                    <div className="dl-bar" style={{height:"100%",borderRadius:"0",width:v.attritionPct,backgroundColor:"#FDFBF0"}}></div>
                  </div>
                </div>
              </div>
              <div style={{marginTop:"auto",paddingTop:"44px"}}>
                <p style={{font:"400 12px/1.6 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.5)",margin:"0 0 24px",maxWidth:"420px"}}>
                  Estimates based on Design Lever's engagement benchmarks and Cognitive Market Research, 2024. Directional, not an audit, a Health Assessment produces the real figure.
                </p>
                <a className="dl-btn" href="#book" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#14191D",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF7D44"}}>Turn this into a real number <ArrowIcon direction="down" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* HOW WE READ IT */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>How the estimate works</span>
            <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Two costs, both grounded in benchmarks.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0",borderTop:"1.5px solid #44063B"}}>
            <div style={{padding:"36px 40px 40px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Engineering rework</div>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 18px"}}>
                Design inconsistency and missing standards push work back to engineering. Studies put this at 20–30% of sprint capacity, we apply your figure to the affected engineers' salaries.
              </p>
            </div>
            <div style={{padding:"36px 0 40px 40px"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Senior attrition</div>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 18px"}}>
                Senior designers stay 12–18 months without a leader, and cost 6–9 months of salary to replace. We multiply your exits by the replacement cost you set.
              </p>
            </div>
          </div>
        </div>
        {/* BOOK CTA */}
        <div id="book" style={{padding:"130px 64px",background:"#FF7D44",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"860px",letterSpacing:"-.015em",textWrap:"balance"}}>Your design team is costing you money, and it isn't their fault.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"#44063BEB",margin:"0 auto 42px",maxWidth:"520px"}}>
            A free Design Team Health Assessment replaces this estimate with a real, defensible figure, and shows you what to do about it.
          </p>
          <Link className="dl-btn" href="/" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44063B"}}>Book the assessment <ArrowIcon /></Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The diagnostic, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How accurate is this estimate?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  It is directional, not an audit. The figures use Design Lever engagement benchmarks and published research to give you an order-of-magnitude read, a Health Assessment produces the real number.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What assumptions does it make?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Two cost drivers: engineering time lost to design-caused rework (engineers × salary × rework %), and senior designer attrition (exits × salary × replacement months). You set every input.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is my data stored anywhere?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Your inputs stay in your browser so the tool remembers them on your next visit. Nothing is sent to us unless you choose to book an assessment.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What is a Design Team Health Assessment?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A free, structured session that replaces this estimate with a real, defensible naira figure, and a clear view of what to do about it.
                </p>
              </details>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
