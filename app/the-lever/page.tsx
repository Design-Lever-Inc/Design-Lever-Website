import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Lever · Community", description: "Entry takes a demonstrated commitment and a one-time fee. The gate keeps the room serious." };

export default function PageTheLever() {
  return (
    <div className="pg-the-lever">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="network" />
        {/* HERO */}
        <div style={{background:"#DEDF4D",position:"relative",overflow:"hidden",padding:"96px 64px 100px"}}>
          <svg viewBox="0 0 360 360" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="180" cy="180" r="150" strokeWidth="1" strokeDasharray="4 8" opacity=".8"></circle>
            <circle cx="180" cy="120" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="128" cy="216" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="232" cy="216" r="26" strokeWidth="1" strokeDasharray="4 8"></circle>
            <line x1="180" y1="146" x2="140" y2="196" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="180" y1="146" x2="220" y2="196" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="154" y1="216" x2="206" y2="216" strokeWidth="1" strokeDasharray="4 8"></line>
            <circle cx="180" cy="180" r="6" fill="#FF6D35" stroke="none"></circle>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".14em",textTransform:"uppercase"}}>THE LEVER COMMUNITY</span>
            <h1 style={{font:"400 80px/1.04 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"40px 0 40px",textWrap:"balance",width:"668px",height:"241px"}}>A professional home for serious design leaders.</h1>
            <p style={{font:"400 20px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"560px",margin:"0 0 46px"}}>
              Entry takes a demonstrated commitment and a one-time fee. The gate keeps the room serious.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn" href="#join" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Request to join →</a>
              <a className="dl-link" href="#inside" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"4px"}}>What's inside</a>
            </div>
          </div>
        </div>
        {/* THE JOINING FEE */}
        <div style={{padding:"118px 64px",background:"#14191D"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The gate</span>
              <h2 style={{font:"400 50px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 26px",letterSpacing:"-.01em"}}>The fee is the point.</h2>
              <p style={{font:"400 17px/1.65 'Inter Tight',sans-serif",color:"rgba(253,251,240,.7)",margin:"0",maxWidth:"440px"}}>
                One fee, paid once. It keeps the room serious and keeps The Lever independent. Academy students join free.
              </p>
            </div>
            <div style={{border:"1px solid rgba(253,251,240,.22)",padding:"48px 44px 44px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".06em",marginBottom:"20px"}}>ONE-TIME JOINING FEE</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"16px"}}>
                <div style={{font:"400 96px/.85 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.03em"}}>₦100K</div>
                <div style={{font:"400 16px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.6)"}}>$71</div>
              </div>
              <p style={{font:"400 14px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"26px 0 0"}}>
                Paid once. Free for Academy students. Requires a demonstrated commitment to design leadership.
              </p>
            </div>
          </div>
        </div>
        {/* WHAT'S INSIDE */}
        <div id="inside" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>What members receive</span>
            <h2 style={{font:"400 52px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Peer connection at a serious professional level.</h2>
          </div>
          <div style={{borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"44px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <path d="M7 3h7l4 4v14H7z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>The evidence base</span>
              </div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"640px"}}>
                Access to the Design Lever research evidence base and the annual African Design Leadership Report before anyone else.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"44px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <rect x="4" y="5" width="16" height="16"></rect>
                  <path d="M4 10h16"></path>
                  <path d="M8 3v4M16 3v4"></path>
                </svg>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Practitioner events</span>
              </div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"640px"}}>
                Invitations to practitioner gatherings, the room where the continent's design leadership actually meets.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"44px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <circle cx="9" cy="8" r="3"></circle>
                  <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                  <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                  <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
                </svg>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Peer connection</span>
              </div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"640px"}}>
                A network of designers who lead, not a follower count, but people you can call when the decision is hard.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:"44px",padding:"30px 0"}}>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block",flex:"0 0 auto"}}>
                  <circle cx="8" cy="12" r="4"></circle>
                  <path d="M12 12h9"></path>
                  <path d="M18 12v4"></path>
                  <path d="M21 12v3"></path>
                </svg>
                <span style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Early access</span>
              </div>
              <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"640px"}}>First to hear Academy announcements and Network opportunities as they open.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="join" style={{padding:"130px 64px",background:"#DEDF4D",textAlign:"center"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"820px",letterSpacing:"-.015em",textWrap:"balance"}}>If you are serious about leading design, this is your room.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"0 auto 42px",maxWidth:"500px"}}>
            Membership is by request and reviewed for commitment to design leadership. Join the founding cohort of The Lever.
          </p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>Request to join →</Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:".75fr 1.25fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Lever, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Why is there a joining fee?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  The one-time fee is a quality gate and a revenue stream at once. Members who pay to be here are invested in the community’s rigour, and it keeps The Lever independent of any single transaction.
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
                  <span className="dl-q">Is it online or in person?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Both. The community lives online, with in-person practitioner gatherings, the room where the continent’s design leadership actually meets.
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
