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
    quote: "We needed temporary design leadership,\nnot another permanent hire.\nWithin a week, the right leader\nwas working with our team.",
    initials: "KM",
    name: "Kevin Mwangi",
    designation: "VP Product",
    company: "LatticePay",
    headshot: "/images/testimonials/kevin-mwangi.png",
    href: "/resources/case-studies/a-six-month-leadership-push",
    metrics: [
      ["07", "Days to match"],
      ["01", "Placement fee"],
      ["06", "Months of leadership"],
    ],
  },
  {
    quote: "We met one vetted leader,\nagreed one transparent fee,\nand had the right executive\nworking with us within six weeks.",
    initials: "TA",
    name: "Tola Adebayo",
    designation: "Founder & CEO",
    company: "Marula Market",
    headshot: "/images/testimonials/tola-adebayo.png",
    href: "/resources/case-studies/one-vetted-leader",
    metrics: [
      ["01", "Vetted leader"],
      ["06", "Weeks to start"],
      ["00", "Agency margin"],
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
        <div className="dl-page-hero-texture dl-page-hero-texture--motif dl-network-family-hero" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#DEDF4D"}}>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>THE NETWORK</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance"}}>The network for Africa’s senior design leaders.</h1>
            <p style={{font:"400 21px/1.5 'Roboto Flex',sans-serif",color:"#44063B",maxWidth:"560px",margin:"0 0 48px"}}>
              A professional network for community, fractional opportunities and companies looking for experienced design leadership.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href="/talent-hub" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>For companies</a>
              <a className="dl-link" href="/talent-hub#apply" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>For design leaders</a>
            </div>
          </div>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="183" cy="300" r="87" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="417" cy="300" r="87" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="183" cy="300" r="250" strokeWidth="1" strokeDasharray="4 8" opacity=".5"></circle>
            <line x1="270" y1="300" x2="330" y2="300" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="183" y1="117" x2="183" y2="483" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="417" y1="117" x2="417" y2="483" strokeWidth="1" strokeDasharray="4 8"></line>
            <circle cx="300" cy="300" r="10" fill="#FF7D44" stroke="none"></circle>
          </svg>
        </div>
        {/* INSIDE THE NETWORK */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Inside the Network</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"22px 0 0",letterSpacing:"-.01em"}}>Two ways into the Network</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
            <Link className="dl-netcard" href="/the-lever" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"44px 40px",textDecoration:"none",transition:"border-color .15s"}}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"22px",stroke:"#FF7D44"}}>
                <path d="M4 12h14"></path>
                <path d="M12 6l6 6-6 6"></path>
              </svg>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"12px"}}>COMMUNITY</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>The professional home for senior design leaders.</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 28px",maxWidth:"440px"}}>
                Peer community, events, conversations, research access and professional connection.
              </p>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Explore Community <ArrowIcon direction="right" /></span>
            </Link>
            <Link className="dl-netcard" href="/talent-hub" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"44px 40px",textDecoration:"none",transition:"border-color .15s"}}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"22px"}}>
                <path d="M4 12h14"></path>
                <path d="M12 6l6 6-6 6"></path>
              </svg>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"12px"}}>TALENT HUB</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Vetted design leaders for fractional engagements.</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0 0 28px",maxWidth:"440px"}}>Companies get matched with experienced design executives for defined leadership needs.</p>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Explore Talent Hub <ArrowIcon direction="right" /></span>
            </Link>
          </div>
        </div>
        {/* THE STANDARD */}
        <section className="dl-network-standard" style={{padding:"88px 64px",background:"#44063B",color:"#FDFBF0"}}>
          <div style={{marginBottom:"46px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The standard</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em",maxWidth:"760px"}}>Built for senior practice.</h2>
          </div>
          <div className="dl-network-standard-grid" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderTop:"1px solid rgba(253,251,240,.28)"}}>
            {[
              ["Quality-gated", "Not an open professional directory."],
              ["Africa + diaspora", "Participation is not limited by where practitioners currently live."],
              ["Independent", "Practitioners keep their professional independence."],
              ].map(([title, copy], index) => (
              <div className="dl-network-standard-item" key={title} style={{padding:"32px 40px 38px",borderLeft:index === 0 ? "none" : "1px solid rgba(253,251,240,.2)"}}>
                <svg aria-hidden="true" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="#FF7D44" strokeWidth="1.25" style={{display:"block",marginBottom:"24px"}}>
                  {index === 0 && <><path d="M16 3.5 26 7v7.6c0 6.2-4.1 10.9-10 13.9-5.9-3-10-7.7-10-13.9V7l10-3.5Z"/><path d="m11.2 15.8 3.1 3.1 6.7-7"/></>}
                  {index === 1 && <><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c3.5 3.3 5.3 7.3 5.3 12S19.5 24.7 16 28M16 4c-3.5 3.3-5.3 7.3-5.3 12s1.8 8.7 5.3 12"/></>}
                  {index === 2 && <><circle cx="16" cy="16" r="10.5"/><path d="M16 2.5v5M16 24.5v5M2.5 16h5M24.5 16h5"/><circle cx="16" cy="16" r="2" fill="#FF7D44" stroke="none"/></>}
                </svg>
                <h3 style={{font:"400 24px/1.15 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0 0 14px"}}>{title}</h3>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.68)",margin:0,maxWidth:"320px"}}>{copy}</p>
              </div>
            ))}
          </div>
        </section>
        {/* WHO IT IS FOR */}
        <section className="dl-network-audiences" style={{padding:"72px 64px 78px",background:"#FDFBF0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
          <div className="dl-network-section-layout dl-network-audiences-layout" style={{display:"grid",gridTemplateColumns:"40% 60%",alignItems:"stretch"}}>
            <div style={{padding:"4px 72px 0 0"}}>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>04 / Who it is for</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em",maxWidth:"360px"}}>Different needs. One senior design network.</h2>
            </div>
            <div className="dl-network-audiences-grid" style={{display:"grid",gridTemplateColumns:"1fr",borderTop:"1.5px solid #44063B"}}>
              {[
                ["Companies", "Need experienced design leadership without a permanent hire."],
                ["Senior practitioners", "Want fractional opportunities at the level they already operate."],
                ["Design leaders", "Want a serious peer community beyond generic networking."],
              ].map(([title, copy], index) => (
                <div className="dl-network-audience-item" key={title} style={{display:"grid",gridTemplateColumns:"45% 55%",alignItems:"start",gap:"28px",padding:"28px 0",borderTop:index === 0 ? "none" : "1px solid rgba(68,6,59,.16)"}}>
                  <h3 style={{font:"400 24px/1.18 'Faculty Glyphic',serif",color:"#44063B",margin:0}}>{title}</h3>
                  <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:0}}>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TESTIMONIAL */}
        {/* CTA */}
        <TestimonialCarousel testimonials={TESTIMONIALS} />
        <div style={{padding:"130px 64px",background:"#DEDF4D",textAlign:"center"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>Africa’s design leadership, wherever it now lives.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"#44073BEB",margin:"0 auto 42px",maxWidth:"500px"}}>
            Whether you are hiring fractional leadership or ready to be placed, the Network is the match layer.
          </p>
          <div style={{display:"flex",gap:"24px",justifyContent:"center",alignItems:"center"}}>
            <a className="dl-btn" href="/talent-hub" style={{display:"inline-flex",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Find a Design Leader</a>
            <a className="dl-link" href="/talent-hub#apply" style={{display:"inline-flex",alignItems:"center",font:"400 12px/1.2 'Spline Sans Mono',monospace",color:"#44073B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>Join the Network</a>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Network, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is this a freelance marketplace?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. The Network combines a professional community with a vetted Talent Hub for defined leadership engagements. It is not an open gig board or a marketplace for execution work.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Who can join the Network?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Senior African design leaders with demonstrated experience leading teams, functions, decisions or defined organisational outcomes can apply. The Network includes practitioners across the continent and the diaspora.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Do I need to be an Academy graduate?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Academy graduates meet the Network standard automatically, while experienced external practitioners can apply through the formal vetting process.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can diaspora practitioners join?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. The Network is designed to keep African design leadership connected and accessible wherever it now lives. Diaspora practitioners can participate in the Community and apply to the Talent Hub.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can companies access the Network?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. Companies can submit a defined design leadership requirement through the Talent Hub and be matched with vetted leaders whose experience fits the mandate.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How are design leaders vetted?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Vetting assesses demonstrated leadership experience, commercial thinking, design operations and the ability to lead teams and organisational outcomes. Academy graduates qualify automatically; external practitioners complete a formal application and review.
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
