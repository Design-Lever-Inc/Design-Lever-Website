import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "We reply same-day, Lagos time." };

export default function PageContact() {
  return (
    <div className="pg-contact">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="none" />
        {/* HERO */}
        <div style={{position:"relative",overflow:"hidden",padding:"96px 64px 90px"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            <path d="M150 210h300v180H260l-70 70v-70h-40z" strokeWidth="1" strokeDasharray="4 8"></path>
            <line x1="190" y1="270" x2="410" y2="270" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="190" y1="310" x2="360" y2="310" strokeWidth="1" strokeDasharray="4 8"></line>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>CONTACT</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance"}}>Talk to us.</h1>
          </div>
        </div>
        {/* ROUTES */}
        <div style={{padding:"0 64px 90px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <a className="dl-netcard" href="https://www.conectr.me/s/book-call-q7r" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"10px"}}>COMPANIES</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Book a call</div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Book →</span>
            </a>
            <Link className="dl-netcard" href="/academy#apply" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"10px"}}>ADMISSIONS</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Join a cohort</div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Academy →</span>
            </Link>
            <Link className="dl-netcard" href="/talent-hub" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"10px"}}>TALENT</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Brief the Talent Hub</div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Talent Hub →</span>
            </Link>
            <Link className="dl-netcard" href="/press" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".08em",marginBottom:"10px"}}>PRESS</div>
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Media enquiries</div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".04em",textTransform:"uppercase",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>Press kit →</span>
            </Link>
          </div>
        </div>
        {/* FORM */}
        <div id="form" style={{padding:"100px 64px",background:"#14191D"}}>
          <div style={{display:"grid",gridTemplateColumns:".75fr 1.25fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Write to us</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 22px",letterSpacing:"-.01em"}}>Everything else lands here.</h2>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",letterSpacing:".04em"}}>
                hello@designleverinc.com
                <br />
                <br />
                Lagos · remote across Africa
              </div>
            </div>
            <div>
              <div id="dl-cform" style={{background:"#FDFBF0",padding:"40px",display:"flex",flexDirection:"column",gap:"22px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px"}}>
                  <div>
                    <label style={{display:"block",font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 0 8px"}}>Name</label>
                    <input id="dl-cname" type="text" style={{width:"100%",boxSizing:"border-box",font:"400 15px 'Inter Tight',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}} />
                  </div>
                  <div>
                    <label style={{display:"block",font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 0 8px"}}>Email</label>
                    <input id="dl-cmail" type="email" style={{width:"100%",boxSizing:"border-box",font:"400 15px 'Inter Tight',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}} />
                  </div>
                </div>
                <div>
                  <label style={{display:"block",font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 0 8px"}}>Topic</label>
                  <select id="dl-ctopic" style={{width:"100%",boxSizing:"border-box",font:"400 15px 'Inter Tight',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}}>
                    <option>Working with Design Lever</option>
                    <option>Academy admissions</option>
                    <option>Talent Hub / placements</option>
                    <option>The Lever community</option>
                    <option>Research</option>
                    <option>Careers</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label style={{display:"block",font:"400 10px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",letterSpacing:".12em",textTransform:"uppercase",margin:"0 0 8px"}}>Message</label>
                  <textarea id="dl-cmsg" rows={5} style={{width:"100%",boxSizing:"border-box",font:"400 15px 'Inter Tight',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}}></textarea>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"18px"}}>
                  <button id="dl-send" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#FF6D35",padding:"16px 28px",border:"0",cursor:"pointer",letterSpacing:".05em",textTransform:"uppercase"}}>Send →</button>
                  <span id="dl-cnote" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35"}}></span>
                </div>
              </div>
              <div id="dl-csent" style={{display:"none",background:"#FDFBF0",padding:"60px 40px",textAlign:"center"}}>
                <div style={{font:"400 34px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Received.</div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>We reply same-day, Lagos time.</p>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
