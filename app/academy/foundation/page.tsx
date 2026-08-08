import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Academy · Foundation track", description: "One intensive week that gives senior designers the vocabulary, systems, and commercial framing to lead a function, not just deliver projects." };

const TESTIMONIALS = [
  {
    quote: "I came in able to run projects and left able to run a function. Design finally had a seat.",
    initials: "DA",
    name: "Damilola Akinwale",
    designation: "Head of Design",
    company: "Kora Systems",
    headshot: "",
    href: "/resources/case-studies/from-projects-to-function",
    metrics: [
      ["4", "Leadership systems adopted"],
      ["12", "Weeks to promotion"],
      ["1", "Function operating plan"],
    ],
  },
  {
    quote: "I stopped guessing. I defend the design budget with numbers now.",
    initials: "ZB",
    name: "Zainab Bello",
    designation: "Product Design Lead",
    company: "Luma Health",
    headshot: "",
    href: "/resources/case-studies/defending-the-design-budget",
    metrics: [
      ["18%", "Budget increase secured"],
      ["3", "Commercial metrics adopted"],
      ["2", "Board planning cycles"],
    ],
  },
] as const;

export default function PageAcademyFoundation() {
  return (
    <div className="pg-academy-foundation">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO */}
        <div className="dl-page-hero-texture" style={{position:"relative",overflow:"hidden",padding:"56px 64px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"end"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Foundation Programme · Certified Design Leader</span>
              <h1 style={{font:"400 82px/1.02 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"32px 0 32px",textWrap:"balance"}}>The fundamentals of leading design.</h1>
              <p style={{font:"400 20px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"540px",margin:"0 0 40px"}}>
                One intensive week that gives senior designers the vocabulary, systems, and commercial framing to lead a function, not just deliver projects.
              </p>
              <div style={{display:"flex",alignItems:"center",gap:"24px"}}>
                <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Apply for the next cohort <ArrowIcon /></Link>
                <a className="dl-link" href="#curriculum" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>See the curriculum</a>
              </div>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)"}}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(68,6,59,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                <span style={{color:"rgba(68,6,59,.55)"}}>Duration</span>
                <span>1 week, full-time</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(68,6,59,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                <span style={{color:"rgba(68,6,59,.55)"}}>Format</span>
                <span>Live · hybrid</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(68,6,59,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                <span style={{color:"rgba(68,6,59,.55)"}}>Cohort</span>
                <span>Max 20 · 2 per year</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(68,6,59,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                <span style={{color:"rgba(68,6,59,.55)"}}>Entry</span>
                <span>5+ years experience</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 26px",backgroundColor:"#FF6D35"}}>
                <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>Tuition</span>
                <span style={{font:"400 30px 'Faculty Glyphic',serif",color:"#44063B"}}>
                  $250
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)"}}>/ ₦400K</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"0 64px 100px"}}>
          <ImageSlot id="dl-fnd-hero" src="/images/scenes/foundation-hero.jpg" style={{width:"100%",height:"460px",display:"block"}} placeholder="Foundation cohort, a week in session" />
        </div>
        {/* WHO IT'S FOR */}
        <div style={{padding:"100px 64px",background:"#14191D"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Who it's for</span>
              <h2 style={{font:"400 46px/1.12 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em"}}>You can design. Now you want to lead.</h2>
            </div>
            <div style={{borderTop:"1px solid rgba(253,251,240,.22)"}}>
              <div style={{padding:"24px 0",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>Senior designers with 5+ years, moving from doing the work to owning the outcome.</div>
              <div style={{padding:"24px 0",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>
                Leads and heads of design who were promoted for craft and now need the commercial language.
              </div>
              <div style={{padding:"24px 0",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>Founders' first design hires who suddenly carry the whole function alone.</div>
            </div>
          </div>
        </div>
        {/* CURRICULUM */}
        <div id="curriculum" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The curriculum</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Five days, five systems you leave with.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"130px 300px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>DAY 01</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Leadership fundamentals</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                What design leadership actually is, the CDO mandate, and where design sits in a company's decisions.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 300px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>DAY 02</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>The business of design</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                How design connects to revenue, retention and velocity, and how to speak to a CEO in their language.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 300px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>DAY 03</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Commercial framing & metrics</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                Making design visible on the P&L: the metrics that matter and how to present return on design investment.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 300px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>DAY 04</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Leading people & culture</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                Building the quality bar, growth pathways and the culture that keeps great designers from leaving.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 300px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>DAY 05</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Systems & capstone</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                Design operations, standards and rituals, applied to your own team in a capstone you take back to work.
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL */}
        {/* FACULTY */}
        <div style={{padding:"118px 64px 118px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"44px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Taught by practitioners</span>
            <Link className="dl-btn2" href="/faculty">See full faculty <ArrowIcon /></Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <div>
              <ImageSlot id="dl-fnd-fac1" src="/images/people/fac-1.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>CDO · NIGERIAN SCALE-UP</div>
            </div>
            <div>
              <ImageSlot id="dl-fnd-fac2" src="/images/people/fac-3.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>DESIGN DIRECTOR · GLOBAL FINTECH</div>
            </div>
            <div>
              <ImageSlot id="dl-fnd-fac3" src="/images/people/fac-5.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>DESIGN LEADER · DIASPORA</div>
            </div>
            <div>
              <ImageSlot id="dl-fnd-fac4" src="/images/people/fac-18.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>HEAD OF DESIGN · HEALTH TECH</div>
            </div>
          </div>
        </div>
        {/* WHAT YOU LEAVE WITH */}
        <div style={{padding:"100px 64px",backgroundColor:"#14191D"}}>
          <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>What you leave with</span>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px",marginTop:"44px"}}>
            <div>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="12" cy="9" r="6"></circle>
                <path d="M8.5 14 7 22l5-3 5 3-1.5-8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"10px"}}>The credential</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>
                Design Lever Certified Design Leader, Foundation level, recognised across the network.
              </p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"10px"}}>Free membership</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>
                Complimentary entry to
                <Link className="dl-link" href="/the-lever" style={{color:"#FDFBF0",textDecoration:"underline",textUnderlineOffset:"3px"}}>The Lever</Link>
                community, included with your place.
              </p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"10px"}}>Implemented systems</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>
                A capstone applied to your own team, you leave with work already in motion, not notes.
              </p>
            </div>
          </div>
        </div>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
        {/* CTA */}
        <div style={{padding:"130px 64px",background:"#FF6D35",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"800px",letterSpacing:"-.015em",textWrap:"balance"}}>Two cohorts a year. Twenty places each.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"#44073BEB",margin:"0 auto 42px",maxWidth:"480px"}}>Apply for the next Foundation intake, or ask us anything before you do.</p>
          <div style={{display:"flex",gap:"18px",justifyContent:"center"}}>
            <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Apply now <ArrowIcon /></Link>
            <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",background:"transparent",border:"1px solid rgba(253,251,240,.6)",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",borderColor:"#44073B99"}}>Ask a question</Link>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Foundation, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is the programme online or in person?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Foundation runs live and cohort-based over one full-time week, delivered in Lagos with select sessions available to remote participants. The live format is deliberate, peer interaction is a core part of the product.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What are the entry requirements?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  At least five years of design experience across any discipline. You don't need a management title, you need to be serious about moving into leadership. Applications are reviewed individually.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I pay in naira?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. Tuition is $250, payable as ₦400,000 at the prevailing rate. Instalment options are available on request during the application conversation.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What certificate do I receive?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  On completion you become a Design Lever Certified Design Leader at Foundation level, a credential whose value compounds as certified practitioners prove themselves in the market.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How is it different from the Executive Programme?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Foundation gives you the language and systems to lead a function.
                  <Link className="dl-link" href="/academy/executive" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>Executive</Link>
                  is a four-week deep dive into design operations, fractional practice and research methodology for the most senior roles.
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
