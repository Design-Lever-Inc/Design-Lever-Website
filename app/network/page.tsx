import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network",
  description:
    "The continent's design leadership, findable. Structured placement on your own terms; practitioners never pay to be placed.",
};

const TESTIMONIALS = [
  {
    quote: "We needed leadership for a six-month push, not a permanent hire. Matched in a week, one fee.",
    initials: "KM",
    name: "Kevin Mwangi",
    designation: "VP Product",
    company: "LatticePay",
    headshot: "",
    href: "/resources/case-studies/a-six-month-leadership-push",
    metrics: [
      ["7", "Days to match"],
      ["1", "Placement fee"],
      ["6", "Months of leadership"],
    ],
  },
  {
    quote: "One vetted leader, one fee, six weeks. No agency margin.",
    initials: "TA",
    name: "Tola Adebayo",
    designation: "Founder & CEO",
    company: "Marula Market",
    headshot: "",
    href: "/resources/case-studies/one-vetted-leader",
    metrics: [
      ["1", "Vetted leader"],
      ["6", "Weeks to start"],
      ["0", "Agency margin"],
    ],
  },
] as const;

export default function PageNetwork() {
  return (
    <div className="pg-network">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="network" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-page-hero-texture--motif" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#DEDF4D"}}>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>THE NETWORK</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance"}}>Certified design leaders, matched to companies.</h1>
            <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"#44063B",maxWidth:"560px",margin:"0 0 48px"}}>
              A vetted placement platform, not a freelance marketplace. Practitioners work completely independently, we only earn when a match is made.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href="#companies" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>For companies <ArrowIcon direction="down" /></a>
              <a className="dl-link" href="#practitioners" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>For practitioners</a>
            </div>
          </div>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="183" cy="300" r="87" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="417" cy="300" r="87" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="183" cy="300" r="250" strokeWidth="1" strokeDasharray="4 8" opacity=".5"></circle>
            <line x1="270" y1="300" x2="330" y2="300" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="183" y1="117" x2="183" y2="483" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="417" y1="117" x2="417" y2="483" strokeWidth="1" strokeDasharray="4 8"></line>
            <circle cx="300" cy="300" r="10" fill="#FF6D35" stroke="none"></circle>
          </svg>
        </div>
        {/* INSIDE THE NETWORK */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Inside the Network</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"22px 0 0",letterSpacing:"-.01em"}}>Inside the Network</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
            <Link className="dl-netcard" href="/the-lever" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"44px 40px",textDecoration:"none",transition:"border-color .15s"}}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"22px",stroke:"#FF6D35"}}>
                <path d="M4 12h14"></path>
                <path d="M12 6l6 6-6 6"></path>
              </svg>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"12px"}}>THE LEVER COMMUNITY</div>
              <div style={{font:"400 30px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>The design leaders community.</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 28px",maxWidth:"440px"}}>
                Gated, serious, and evidence-based. Events, the research library, and peers who hold the standard.
              </p>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Enter The Lever <ArrowIcon /></span>
            </Link>
            <Link className="dl-netcard" href="/talent-hub" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"44px 40px",textDecoration:"none",transition:"border-color .15s"}}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",marginBottom:"22px"}}>
                <path d="M4 12h14"></path>
                <path d="M12 6l6 6-6 6"></path>
              </svg>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"12px"}}>THE TALENT NETWORK PLATFORM</div>
              <div style={{font:"400 30px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Hire fractional design executives.</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 28px",maxWidth:"440px"}}>Vetted fractional CDOs, VPs and Heads of Design, matched to companies in days.</p>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Enter the Talent Hub <ArrowIcon /></span>
            </Link>
          </div>
        </div>
        {/* COMMERCIAL MODEL */}
        <div style={{padding:"118px 64px",background:"#14191D"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The model</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 20px",letterSpacing:"-.01em"}}>One clean fee, company-side. We earn only on a match.</h2>
            <p style={{font:"400 17px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",maxWidth:"600px",margin:"0"}}>
              No retainers, no listing fees, no employment relationship. Design Lever takes a single placement fee from the company, and only when a placement is made. Practitioners are never charged.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
            <div style={{padding:"44px 40px",backgroundColor:"#DEDF4C"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".06em",marginBottom:"20px"}}>THE COMPANY PAYS</div>
              <div style={{font:"400 72px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>20%</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"22px 0 0"}}>
                a placement fee equal to 20% of the first month's engagement value, charged once, on a confirmed match.
              </p>
            </div>
            <div style={{background:"#FDFBF0",padding:"44px 40px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".06em",marginBottom:"20px"}}>THE PRACTITIONER PAYS</div>
              <div style={{font:"400 72px/.9 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em"}}>₦0</div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"22px 0 0"}}>Practitioners never pay to be placed. No fee, no cut, on any engagement, ever.</p>
            </div>
          </div>
        </div>
        {/* FOR COMPANIES */}
        <div id="companies" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div id="dl-net-companies-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>For companies</span>
              <h2 style={{font:"400 46px/1.12 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>Fractional design leadership, without the search.</h2>
              <p style={{font:"400 16px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 34px",maxWidth:"440px"}}>
                Post a requirement; we match it to a vetted, certified leader. You keep the relationship, the practitioner is never contracted to us.
              </p>
            </div>
            <div style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
              <div style={{display:"flex",gap:"28px",padding:"26px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <span style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>01</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Post the requirement</div>
                  <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Scope, duration, and the design problem you need led.</p>
                </div>
              </div>
              <div style={{display:"flex",gap:"28px",padding:"26px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <span style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>02</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Get matched</div>
                  <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>We match certified leaders whose experience fits the mandate.</p>
                </div>
              </div>
              <div style={{display:"flex",gap:"28px",padding:"26px 0"}}>
                <span style={{font:"400 32px 'Faculty Glyphic',serif",color:"#44063B",lineHeight:"1"}}>03</span>
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Engage directly</div>
                  <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>One placement fee, then the engagement is yours to run.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOR PRACTITIONERS */}
        <div id="practitioners" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
              <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"36px",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Rigorous vetting</div>
                <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  Entry requires demonstrated design leadership experience, commercial thinking, and an understanding of design operations and team culture.
                </p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"36px",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Certified by default</div>
                <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  Academy graduates meet the standard automatically. External practitioners are assessed through a formal application process.
                </p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"36px",padding:"28px 0"}}>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B"}}>Truly independent</div>
                <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>
                  You are never employed by or contracted to Design Lever. The Network connects you; the engagement is yours.
                </p>
              </div>
            </div>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>For practitioners</span>
              <h2 style={{font:"400 46px/1.12 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 22px",letterSpacing:"-.01em"}}>Structured placement, on your own terms.</h2>
              <p style={{font:"400 16px/1.65 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 30px",maxWidth:"440px"}}>
                The Network is where the continent's design leadership becomes findable, including talent that has left the country. Japa becomes a bridge, not a loss.
              </p>
              <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Apply to the Network <ArrowIcon /></Link>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL */}
        {/* CTA */}
        <TestimonialCarousel testimonials={TESTIMONIALS} />
        <div style={{padding:"130px 64px",background:"#DEDF4D",textAlign:"center"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>Africa's design leadership, wherever it now lives.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"#44073BEB",margin:"0 auto 42px",maxWidth:"500px"}}>
            Whether you are hiring fractional leadership or ready to be placed, the Network is the match layer.
          </p>
          <div style={{display:"flex",gap:"18px",justifyContent:"center"}}>
            <a className="dl-btn" href="#companies" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Post a requirement</a>
            <a className="dl-btn" href="#practitioners" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44073B",background:"transparent",border:"1px solid rgba(253,251,240,.6)",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",borderColor:"#44073B99"}}>Apply to join</a>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Network, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is this a freelance marketplace?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. It is a vetted placement platform for certified design leaders, matched to specific company mandates, not an open listing board.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How does the placement fee work?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  A single, company-side fee: the company pays 20% of the first month’s engagement value, charged once on a confirmed match. Practitioners never pay to be placed. We earn only when a match is made.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Are practitioners employed by Design Lever?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Never. Practitioners work completely independently. The Network connects the two sides; the engagement is entirely yours.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How are practitioners vetted?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Academy Executive graduates qualify automatically. External practitioners are assessed for demonstrated leadership experience, commercial thinking and design-operations understanding.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What if I’ve left Nigeria?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The Network is built for exactly that, it makes African design leadership findable wherever it now lives. Japa becomes a bridge, not a loss.
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
