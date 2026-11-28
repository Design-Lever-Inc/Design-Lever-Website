import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Lever · Community", description: "Peer connection, practitioner events, research access and opportunities for senior design leaders across Africa and the diaspora." };

export default function PageTheLever() {
  return (
    <div className="pg-the-lever">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="network" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-page-hero-texture--motif dl-network-family-hero" style={{background:"#DEDF4D",position:"relative",overflow:"hidden",padding:"96px 64px 100px"}}>
          <svg viewBox="0 0 360 360" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="180" cy="180" r="150" strokeWidth="1" strokeDasharray="4 8" opacity=".8"></circle>
            <circle cx="180" cy="120" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="128" cy="216" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="232" cy="216" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <line x1="180" y1="146" x2="140" y2="196" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="180" y1="146" x2="220" y2="196" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="154" y1="216" x2="206" y2="216" strokeWidth="1" strokeDasharray="4 8"></line>
            <circle cx="180" cy="180" r="6" fill="#FF7D44" stroke="none"></circle>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".14em",textTransform:"uppercase"}}>THE LEVER COMMUNITY</span>
            <h1 style={{font:"400 80px/1.04 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"40px 0 40px",textWrap:"balance",width:"668px",height:"241px"}}>A professional home for executive design leaders.</h1>
            <p style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"560px",margin:"0 0 46px"}}>
              Peer connection, practitioner events, research access and opportunities for senior design leaders across Africa and the diaspora.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn" href="#join" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Request to join <ArrowIcon direction="down" /></a>
              <a className="dl-link" href="#inside" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>What's inside</a>
            </div>
          </div>
        </div>
        {/* WHO IT IS FOR */}
        <section className="dl-network-standard" style={{padding:"118px 64px",background:"#FDFBF0",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#7A2A6E",letterSpacing:".14em",textTransform:"uppercase"}}>Who it is for</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em",maxWidth:"760px"}}>Built for experienced practitioners.</h2>
          </div>
          <div className="dl-network-standard-grid" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",borderTop:"1.5px solid #44063B"}}>
            {[
              ["Senior practitioners", "Already operating beyond individual execution."],
              ["Design managers and leads", "Responsible for people, decisions or a design function."],
              ["Diaspora leaders", "African practitioners leading design globally who want a professional connection back to the continent."],
            ].map(([title, copy], index) => (
              <article className="dl-network-standard-item" key={title} style={{padding:"34px 40px 40px",borderLeft:index === 0 ? "none" : "1px solid rgba(68,6,59,.2)"}}>
                <h3 style={{font:"400 24px/1.15 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 16px"}}>{title}</h3>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.68)",margin:0,maxWidth:"330px"}}>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        {/* WHAT'S INSIDE */}
        <div id="inside" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>What members receive</span>
            <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Peer connection at a serious professional level.</h2>
          </div>
          <div className="dl-lever-benefits" style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div className="dl-lever-benefit" style={{borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div className="dl-lever-benefit__icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <path d="M7 3h7l4 4v14H7z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
              </div>
              <h3 className="dl-lever-benefit__title">Research access</h3>
              <p className="dl-lever-benefit__copy">
                Member access to Design Lever research, working findings and the annual African Design Leadership Report.
              </p>
            </div>
            <div className="dl-lever-benefit" style={{borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div className="dl-lever-benefit__icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <rect x="4" y="5" width="16" height="16"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M8 3v4M16 3v4"></path>
                </svg>
              </div>
              <h3 className="dl-lever-benefit__title">Practitioner gatherings</h3>
              <p className="dl-lever-benefit__copy">
                Small-format sessions, roundtables and conversations around the realities of leading design.
              </p>
            </div>
            <div className="dl-lever-benefit" style={{borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div className="dl-lever-benefit__icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <circle cx="9" cy="8" r="3"></circle>
                  <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                  <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                  <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
                </svg>
              </div>
              <h3 className="dl-lever-benefit__title">Peer network</h3>
              <p className="dl-lever-benefit__copy">
                Direct access to experienced designers managing teams, functions and senior design responsibilities across Africa and the diaspora.
              </p>
            </div>
            <div className="dl-lever-benefit" style={{borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div className="dl-lever-benefit__icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <circle cx="8" cy="12" r="4"></circle>
                  <path d="M12 12h9"></path>
                  <path d="M18 12v4"></path>
                  <path d="M21 12v3"></path>
                </svg>
              </div>
              <h3 className="dl-lever-benefit__title">Early access</h3>
              <p className="dl-lever-benefit__copy">First notice of Academy programmes, Network opportunities and Design Lever initiatives.</p>
            </div>
            <div className="dl-lever-benefit">
              <div className="dl-lever-benefit__icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <path d="M12 3v18M3 12h18"></path>
                  <circle cx="12" cy="12" r="8"></circle>
                </svg>
              </div>
              <h3 className="dl-lever-benefit__title">Contribute to the field</h3>
              <p className="dl-lever-benefit__copy">
                Take part in research, peer sessions, practitioner conversations and initiatives shaping the standard for design leadership in Africa.
              </p>
            </div>
          </div>
        </div>
        {/* THE JOINING FEE */}
        <div style={{padding:"118px 64px",background:"#14191D"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The joining fee</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 26px",letterSpacing:"-.01em"}}>A paid membership by design.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.7)",margin:"0",maxWidth:"440px"}}>
                A paid model helps keep The Lever curated, independent and useful to the people in it. Membership is built for quality, not volume.
              </p>
            </div>
            <div style={{border:"1px solid rgba(253,251,240,.22)",padding:"48px 44px 44px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".06em",marginBottom:"20px"}}>ANNUAL MEMBERSHIP</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"16px"}}>
                <div style={{font:"400 96px/.85 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.03em"}}>₦100K</div>
              </div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.62)",margin:"26px 0 0"}}>
                Billed annually. Academy participants receive their first year of membership at no cost, then renew at the standard annual rate.
              </p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="join" style={{padding:"130px 64px",background:"#DEDF4D",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"820px",letterSpacing:"-.015em",textWrap:"balance"}}>Join a room built for your level of practice.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",margin:"0 auto 42px",maxWidth:"500px"}}>
            Membership is reviewed. The founding cohort of The Lever is now taking requests to join.
          </p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>Request to join <ArrowIcon /></Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Lever, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Why is there a joining fee?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The joining fee is a quality gate and a revenue stream at once. Members who pay to be here are invested in the community’s rigour, and the joining and renewal fees keep The Lever independent of any single transaction.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is it free for Academy students?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. Every Academy student receives membership at no additional cost as part of enrolment.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is there an annual membership fee?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. Membership costs ₦100K to join and ₦100K each year to renew. Renewal maintains access to the peer network, member gatherings, research, practitioner conversations and community opportunities.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What do members receive?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Early access to the research evidence base and annual report, invitations to practitioner gatherings, genuine peer connection, and first notice of Academy and Network opportunities.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Who can join?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Serious design practitioners who can demonstrate a commitment to design leadership. Membership is by request and reviewed.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is this the same as joining the Talent Hub?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Community membership is professional membership. Talent Hub listing is separately for hiring vetted design executives for fractional engagements.
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
