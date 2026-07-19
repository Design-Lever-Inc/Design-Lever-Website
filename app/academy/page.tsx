import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Academy", description: "The Certified Design Leader programme taught entirely by experienced practitioners, grounded in original African research." };

export default function PageAcademy() {
  return (
    <div className="pg-academy">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO, image forward */}
        <div style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#FF6D35"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="260" r="150" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="260" r="110" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="260" r="46" strokeWidth="1" strokeDasharray="4 8"></circle>
            <path d="M240 395 205 530 300 478 395 530 360 395" strokeWidth="1" strokeDasharray="4 8"></path>
            <line x1="150" y1="260" x2="12" y2="260" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="450" y1="260" x2="588" y2="260" strokeWidth="1" strokeDasharray="4 8"></line>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>
              THE ACADEMY
              <br />
            </span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance",width:"839px",height:"282px"}}>Africa's first pathway into design leadership.</h1>
            <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",maxWidth:"560px",margin:"0 0 48px"}}>
              The Certified Design Leader programme taught entirely by experienced practitioners, grounded in original African research.
              <br />
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href="#tracks" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FDFBF0"}}>See the two tracks →</a>
              <a className="dl-link" href="#faculty" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>Meet the faculty</a>
            </div>
          </div>
        </div>
        {/* STAT STRIP */}
        <ImageSlot id="dl-ac-hero" style={{width:"100%",height:"520px",display:"block"}} placeholder="Hero image, a cohort in session / design leaders at work" />
        <div style={{padding:"70px 64px",backgroundColor:"#FF6D35"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px"}}>
            <div>
              <div style={{font:"400 68px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>12–20</div>
              <div style={{font:"400 14px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.72)",marginTop:"14px"}}>participants per cohort, small by design, because peer quality is the product</div>
            </div>
            <div>
              <div style={{font:"400 68px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>0</div>
              <div style={{font:"400 14px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.72)",marginTop:"14px"}}>
                academics, every session taught by someone working at senior design leadership level
              </div>
            </div>
            <div>
              <div style={{font:"400 68px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>60K+</div>
              <div style={{font:"400 14px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.72)",marginTop:"14px"}}>senior designers in Nigeria ready to lead, and nowhere to learn how, until now</div>
            </div>
          </div>
        </div>
        {/* TRACKS, image-forward cards */}
        <div id="tracks" style={{padding:"118px 64px"}}>
          <div style={{marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Two tracks</span>
            <h2 style={{font:"400 56px/1.08 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"760px",margin:"24px 0 0",letterSpacing:"-.01em"}}>Foundation, then Executive.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
            {/* Foundation */}
            <div className="dl-card" style={{border:"1px solid rgba(68,6,59,.18)",background:"#FDFBF0"}}>
              <ImageSlot id="dl-ac-found" style={{width:"100%",height:"300px",display:"block"}} placeholder="Foundation cohort image" />
              <div style={{padding:"36px 36px 40px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"22px"}}>
                  <div>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".06em",marginBottom:"10px"}}>FOUNDATION PROGRAMME</div>
                    <div style={{font:"400 38px 'Faculty Glyphic',serif",color:"#44063B"}}>The fundamentals</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{font:"400 40px/.9 'Faculty Glyphic',serif",color:"#44063B"}}>₦400K</div>
                    <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",marginTop:"6px"}}>$250</div>
                  </div>
                </div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 28px"}}>
                  Design leadership fundamentals, the business of design, and commercial framing, the vocabulary and systems to lead a function, and not just a project operations
                </p>
                <div style={{borderTop:"1px solid rgba(68,6,59,.16)",marginBottom:"28px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.55)"}}>Format</span>
                    <span>1 week · max 20 · 2 cohorts / yr</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.55)"}}>Entry</span>
                    <span>5+ years design experience</span>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"22px"}}>
                  <Link className="dl-btn" href="/academy/foundation" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"15px 24px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>View programme →</Link>
                  <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Apply</Link>
                </div>
              </div>
            </div>
            {/* Executive */}
            <div className="dl-card" style={{border:"1px solid #44063B",background:"#44063B"}}>
              <ImageSlot id="dl-ac-exec" style={{width:"100%",height:"300px",display:"block"}} placeholder="Executive cohort image" />
              <div style={{padding:"36px 36px 40px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"22px"}}>
                  <div>
                    <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".06em",marginBottom:"10px"}}>EXECUTIVE PROGRAMME</div>
                    <div style={{font:"400 38px 'Faculty Glyphic',serif",color:"#FDFBF0"}}>The full executive</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{font:"400 40px/.9 'Faculty Glyphic',serif",color:"#FDFBF0"}}>₦1M</div>
                    <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.6)",marginTop:"6px"}}>$750</div>
                  </div>
                </div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)",margin:"0 0 28px"}}>
                  Advanced design operations, fractional practice, client management, and research methodology, for practitioners moving into the most senior and independent roles.
                </p>
                <div style={{borderTop:"1px solid rgba(253,251,240,.2)",marginBottom:"28px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Format</span>
                    <span>4 weeks · max 12 · 1 cohort / yr</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Entry</span>
                    <span>8+ yrs, design management</span>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"22px"}}>
                  <Link className="dl-btn" href="/academy/executive" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"15px 24px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF6D35"}}>View programme →</Link>
                  <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(222,223,77,.5)",paddingBottom:"3px"}}>Apply</Link>
                </div>
              </div>
            </div>
          </div>
          <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"36px 0 0",maxWidth:"820px"}}>
            Every student receives free membership to
            <Link className="dl-link" href="/the-lever" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>The Lever</Link>
            . Executive graduates are automatically listed on the
            <Link className="dl-link" href="/network" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>Design Lever Network</Link>
            , with their first placement fee waived.
          </p>
        </div>
        {/* FACULTY, face cards */}
        <div id="faculty" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"60px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The faculty</span>
              <h2 style={{font:"400 52px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Taught by design directors in Africa and globally.</h2>
            </div>
            <a className="dl-link" href="#faculty" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px",width:"216px",height:"19px"}}>Meet the faculty →</a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <div className="dl-facultycard">
              <ImageSlot id="dl-fac-1" style={{width:"100%",height:"300px",display:"block"}} placeholder="Faculty photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px",transition:"color .15s"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>CDO · NIGERIAN SCALE-UP</div>
              <p style={{font:"400 13px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"12px 0 0"}}>Name to be added</p>
            </div>
            <div className="dl-facultycard">
              <ImageSlot id="dl-fac-2" style={{width:"100%",height:"300px",display:"block"}} placeholder="Faculty photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px",transition:"color .15s"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN DIRECTOR · GLOBAL FINTECH</div>
              <p style={{font:"400 13px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"12px 0 0"}}>Name to be added</p>
            </div>
            <div className="dl-facultycard">
              <ImageSlot id="dl-fac-3" style={{width:"100%",height:"300px",display:"block"}} placeholder="Faculty photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px",transition:"color .15s"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN LEADER · DIASPORA</div>
              <p style={{font:"400 13px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"12px 0 0"}}>Name to be added</p>
            </div>
            <div className="dl-facultycard">
              <ImageSlot id="dl-fac-4" style={{width:"100%",height:"300px",display:"block"}} placeholder="Faculty photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px",transition:"color .15s"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>PRODUCT DESIGN VP · SCALE-UP</div>
              <p style={{font:"400 13px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",margin:"12px 0 0"}}>Name to be added</p>
            </div>
          </div>
          <div style={{marginTop:"44px"}}>
            <Link className="dl-btn hov-orange" href="/faculty" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>View the full faculty →</Link>
          </div>
        </div>
        {/* WHAT MAKES IT WORK */}
        <div id="credential" style={{padding:"118px 64px",background:"#14191D"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Why it works</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em"}}>A credential the market can read, and that compounds.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)"}}>
            <div style={{padding:"34px 28px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8z"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Immediately applicable</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>
                You leave with implemented systems, not frameworks. The curriculum is built to be used on Monday.
              </p>
            </div>
            <div style={{padding:"34px 28px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Peer network</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>
                Twelve to twenty serious practitioners in the room. The people you meet are half the value.
              </p>
            </div>
            <div style={{padding:"34px 0 34px 28px"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="12" cy="9" r="6"></circle>
                <path d="M8.5 14 7 22l5-3 5 3-1.5-8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Certified Design Leader</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"0"}}>
                The marketable output, and its value grows as certified practitioners prove themselves in the market.
              </p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="apply" style={{padding:"130px 64px",background:"#FF6D35",textAlign:"center"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>The credential for Africa's design leaders.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"0 auto 42px",maxWidth:"500px"}}>
            Cohorts are small and fill on referral. Register your interest for the next Foundation or Executive intake.
          </p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>Register your interest →</Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
