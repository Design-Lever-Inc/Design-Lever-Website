import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press", description: "Design is undervalued everywhere, but Africa pays the highest price. Design lever is changing that." };

export default function PagePress() {
  return (
    <div className="pg-press">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip",position:"absolute",left:"-9px",top:"23px"}}>
        {/* NAV */}
        <SiteNav active="about" />
        {/* HERO */}
        <div style={{position:"relative",overflow:"hidden",padding:"100px 64px 96px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Press · Media</span>
          </div>
          <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",maxWidth:"1080px",textWrap:"balance"}}>A gap in infrastructure, not talent.</h1>
          <p style={{font:"400 20px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"560px",margin:"0"}}>
            Design is undervalued everywhere, but Africa pays the highest price. Design lever is changing that.
          </p>
        </div>
        {/* THE FACTS */}
        {/* FEATURED IN */}
        {/* STORY */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:".75fr 1.25fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The story</span>
            </div>
            <div>
              <p style={{font:"400 30px/1.35 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 32px",letterSpacing:"-.01em",maxWidth:"820px"}}>
                Design Lever is the design leadership infrastructure company: fractional at executive level, credentialed through a pathway, proven by open evidence.
              </p>
              <ImageSlot id="dl-press-founder" style={{width:"100%",height:"320px",display:"block",marginBottom:"32px"}} placeholder="Founder portrait" />
              <p style={{font:"400 16px/1.7 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"0",maxWidth:"720px"}}>
                Design leadership is a structural bottleneck to 18% annual ICT growth. We install it, certify it, and publish the return as open research.
              </p>
            </div>
          </div>
        </div>
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"44px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Press kit</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>Everything you need to cite us.</h2>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M7 3h7l4 4v14H7z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Logo & wordmark</div>
                <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>Full mark, wordmark, and clear-space rules in SVG and PNG.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase"}}>Request →</Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M6 3v18"></path>
                  <path d="M6 4h11l-2 4 2 4H6"></path>
                </svg>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Brand facts</div>
                <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>The numbers, sourced, plus approved boilerplate copy.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase"}}>Request →</Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block"}}>
                  <circle cx="9" cy="8" r="3"></circle>
                  <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                  <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                </svg>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Leadership bios</div>
                <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>Founder and advisor biographies, and headshots.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase"}}>Request →</Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF6D35" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M7 3h7l4 4v14H7z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>The report</div>
                <p style={{font:"400 14px/1.55 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>The annual African Design Leadership Report, open access.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase"}}>Request →</Link>
            </div>
          </div>
        </div>
        <div style={{padding:"110px 64px",backgroundColor:"#44073B"}}>
          <div style={{maxWidth:"820px",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The facts</span>
            <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"22px 0 0",letterSpacing:"-.01em"}}>The case, in numbers.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px"}}>
            <div style={{borderTop:"1px solid rgba(253,251,240,.25)",paddingTop:"22px"}}>
              <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>302,630</div>
              <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>designers in Nigeria, the largest concentration on the continent</div>
            </div>
            <div style={{borderTop:"1px solid rgba(253,251,240,.25)",paddingTop:"22px"}}>
              <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>$323M</div>
              <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>Nigerian design services market, against $90B in the United States</div>
            </div>
            <div style={{borderTop:"1px solid rgba(253,251,240,.25)",paddingTop:"22px"}}>
              <div style={{font:"400 56px/.9 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>40%</div>
              <div style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(253,251,240,.66)",marginTop:"14px"}}>first-year failure rate on executive hires the fractional model removes</div>
            </div>
          </div>
        </div>
        {/* PRESS KIT */}
        {/* COVERAGE */}
        {/* MEDIA CONTACT */}
        <div style={{padding:"56px 64px",borderTop:"1px solid rgba(253,251,240,.14)",backgroundColor:"#FDFBF0"}}>
          <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase",marginBottom:"30px"}}>Featured in</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"28px",alignItems:"center"}}>
            <ImageSlot id="dl-press-feat1" style={{width:"100%",height:"56px",display:"block"}} placeholder="Media logo" />
            <ImageSlot id="dl-press-feat2" style={{width:"100%",height:"56px",display:"block"}} placeholder="Media logo" />
            <ImageSlot id="dl-press-feat3" style={{width:"100%",height:"56px",display:"block"}} placeholder="Media logo" />
            <ImageSlot id="dl-press-feat4" style={{width:"100%",height:"56px",display:"block"}} placeholder="Media logo" />
            <ImageSlot id="dl-press-feat5" style={{width:"100%",height:"56px",display:"block"}} placeholder="Media logo" />
          </div>
        </div>
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"40px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Coverage</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>In the press.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"160px 1fr 160px",gap:"32px",alignItems:"baseline",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)"}}>2026</div>
              <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Coverage lands here as it publishes.</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",justifySelf:"end"}}>Coming Soon</div>
            </div>
          </div>
        </div>
        <div style={{padding:"130px 64px",background:"#FF6D35",textAlign:"center"}}>
          <h2 style={{font:"400 58px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0 auto 26px",maxWidth:"760px",letterSpacing:"-.015em",textWrap:"balance"}}>Writing about African design?</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"rgba(253,251,240,.92)",margin:"0 auto 40px",maxWidth:"460px"}}>We answer press same-day, and share data, methodology, and named sources.</p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FF6D35",background:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase"}}>press@designleverinc.com →</Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
