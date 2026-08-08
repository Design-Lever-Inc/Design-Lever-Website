import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Academy · Executive track", description: "Four weeks for practitioners moving into the most senior and independent roles, design operations, fractional practice, client management, and research method" };

const TESTIMONIALS = [
  {
    quote: "By the end of Week 2 I had priced my first fractional engagement. A quarter later the Network placed me.",
    initials: "CO",
    name: "Chinedu Okafor",
    designation: "Fractional Design Director",
    company: "Independent",
    headshot: "",
    href: "/resources/case-studies/pricing-the-first-engagement",
    metrics: [
      ["2", "Weeks to price engagement"],
      ["1", "Quarter to placement"],
      ["4", "Client systems installed"],
    ],
  },
  {
    quote: "The room was the value. Twelve operators at my level, and the standard held.",
    initials: "AM",
    name: "Amina Mensah",
    designation: "Design Director",
    company: "Sankofa Group",
    headshot: "",
    href: "/resources/case-studies/the-executive-room",
    metrics: [
      ["12", "Senior operators in cohort"],
      ["4", "Weeks of live practice"],
      ["3", "Fractional engagements won"],
    ],
  },
] as const;

export default function PageAcademyExecutive() {
  return (
    <div className="pg-academy-executive">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO */}
        <div className="dl-page-hero-texture" style={{position:"relative",overflow:"hidden",padding:"56px 64px 64px",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"end"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Executive Programme · Certified Design Leader</span>
              <h1 style={{font:"400 82px/1.02 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"32px 0 32px",textWrap:"balance"}}>The full craft of design leadership.</h1>
              <p style={{font:"400 20px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"540px",margin:"0 0 40px"}}>
                Four weeks for practitioners moving into the most senior and independent roles, design operations, fractional practice, client management, and research methodology.
              </p>
              <div style={{display:"flex",alignItems:"center",gap:"24px"}}>
                <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Apply for the next cohort <ArrowIcon /></Link>
                <a className="dl-link" href="#curriculum" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>See the curriculum</a>
              </div>
            </div>
            <div style={{border:"1px solid #44063B",background:"#44063B"}}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                <span style={{color:"rgba(253,251,240,.6)"}}>Duration</span>
                <span>4 weeks</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                <span style={{color:"rgba(253,251,240,.6)"}}>Format</span>
                <span>Live · hybrid</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                <span style={{color:"rgba(253,251,240,.6)"}}>Cohort</span>
                <span style={{position:"relative"}}>12 participants</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"20px 26px",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                <span style={{color:"rgba(253,251,240,.6)"}}>Entry</span>
                <span>8+ yrs · 3 yrs design mgt</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 26px",backgroundColor:"#FF6D35"}}>
                <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>Tuition</span>
                <span style={{font:"400 30px 'Faculty Glyphic',serif",color:"#44063B"}}>
                  $750
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)"}}>/ ₦1M</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"0 64px 100px"}}>
          <ImageSlot id="dl-exe-hero" src="/images/scenes/executive-hero.jpg" style={{width:"100%",height:"460px",display:"block"}} placeholder="Executive cohort, senior practitioners at work" />
        </div>
        {/* WHO IT'S FOR */}
        <div style={{padding:"100px 64px",backgroundColor:"#44073B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Who it's for</span>
              <h2 style={{font:"400 46px/1.12 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em"}}>You already lead, Now you want to scale and learn the right tools.</h2>
            </div>
            <div style={{borderTop:"1px solid rgba(253,251,240,.22)"}}>
              <div style={{padding:"24px 0",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>Heads of design and design managers with 8+ years, ready for a CDO-level mandate.</div>
              <div style={{padding:"24px 0",borderBottom:"1px solid rgba(253,251,240,.14)",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>Established leaders considering fractional or independent practice of their own.</div>
              <div style={{padding:"24px 0",font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.72)"}}>
                Practitioners who want to be placed on the
                <Link className="dl-link" href="/network" style={{color:"#FDFBF0",textDecoration:"underline",textUnderlineOffset:"3px"}}>Network</Link>
                with their first fee waived.
              </div>
            </div>
          </div>
        </div>
        {/* CURRICULUM */}
        <div id="curriculum" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The curriculum</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Four weeks, four bodies of practice.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"130px 320px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>WEEK 01</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Design operations at scale</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                Systems, standards, tooling and rituals for functions of every size, building the machine that makes design output predictable.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 320px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>WEEK 02</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>The fractional practice</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                The LEVER method, engagement structure, pricing and exit, how to embed, transform and hand over a design function.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 320px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>WEEK 03</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Client & stakeholder management</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                Winning the mandate, managing executives, and holding authority in rooms where you are the only designer.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"130px 320px 1fr",gap:"40px",alignItems:"baseline",padding:"32px 0"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#FF6D35"}}>WEEK 04</div>
              <div style={{font:"400 26px 'Faculty Glyphic',serif",color:"#44063B"}}>Research methodology & capstone</div>
              <p style={{font:"400 15px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"600px"}}>
                How to measure and prove design's commercial impact, culminating in a capstone engagement plan you can take to a real client.
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
              <ImageSlot id="dl-exe-fac1" src="/images/people/fac-4.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>FRACTIONAL CDO · PAN-AFRICAN</div>
            </div>
            <div>
              <ImageSlot id="dl-exe-fac2" src="/images/people/fac-7.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>HEAD OF DESIGN · GLOBAL PRODUCT</div>
            </div>
            <div>
              <ImageSlot id="dl-exe-fac3" src="/images/people/fac-2.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>RESEARCH LEAD · DESIGN LEVER</div>
            </div>
            <div>
              <ImageSlot id="dl-exe-fac4" src="/images/people/fac-8.jpg" style={{width:"100%",height:"280px",display:"block"}} placeholder="Faculty photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px"}}>Faculty Member</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px"}}>VP DESIGN · SCALE-UP</div>
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
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>Design Lever Certified Design Leader, Executive level, the senior standard.</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"10px"}}>Network placement</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>
                Automatic listing on the
                <Link className="dl-link" href="/network" style={{color:"#FDFBF0",textDecoration:"underline",textUnderlineOffset:"3px"}}>Network</Link>
                , with your first placement fee waived.
              </p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"10px"}}>A live engagement plan</div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"#FDFBF0B8",margin:"0"}}>
                A capstone you can take straight to a real client, your first fractional mandate, mapped.
              </p>
            </div>
          </div>
        </div>
        <TestimonialCarousel testimonials={TESTIMONIALS} />
        {/* CTA */}
        <div style={{padding:"130px 64px",background:"#FF6D35",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"800px",letterSpacing:"-.015em",textWrap:"balance"}}>One cohort a year. Twelve places.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"#44073BEB",margin:"0 auto 42px",maxWidth:"480px",width:"394px",height:"55px"}}>Apply for the next Executive intake, or ask us anything before you do.</p>
          <div style={{display:"flex",gap:"18px",justifyContent:"center"}}>
            <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",background:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>Apply now <ArrowIcon /></Link>
            <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"transparent",border:"1px solid rgba(253,251,240,.6)",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>Ask a question</Link>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44073B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Executive, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Do I need the Foundation Programme first?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Executive is a standalone track for practitioners with 8+ years and design management experience. Foundation is recommended if you're earlier in the leadership transition.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How does the four weeks run?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  One cohort a year, delivered live over four weeks with a mix of intensive sessions and applied work between them, so you can continue in your current role while you study.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is the Network placement guaranteed?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Graduates are automatically listed and their first placement fee is waived. Placement itself depends on a match with a company's requirement, the listing and vetting are what we guarantee.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I pay in naira, and are instalments available?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes to both. Tuition is $750 / ₦1,000,000 at the prevailing rate, with instalment options discussed during the application conversation.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What's the capstone?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A complete fractional engagement plan, scope, LEVER roadmap, pricing and metrics, built for a real prospective client, so you finish with your first mandate ready to pitch.
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
