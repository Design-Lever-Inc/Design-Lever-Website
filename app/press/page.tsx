import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CopyBoilerplate } from "@/components/CopyBoilerplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press", description: "Design is undervalued everywhere, but Africa pays the highest price. Design lever is changing that." };

export default function PagePress() {
  return (
    <div className="pg-press">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="about" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-company-family-hero" style={{position:"relative",overflow:"hidden",padding:"100px 64px 96px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"44px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>Press · Media</span>
          </div>
          <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",maxWidth:"1080px",textWrap:"balance"}}>Press room.</h1>
          <p style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"620px",margin:"0 0 40px"}}>
            Design Lever builds design leadership infrastructure across African business through fractional leadership, education, professional networks and open research.
          </p>
          <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
            <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none"}}>Download press kit <ArrowIcon /></Link>
            <a className="dl-link" href="mailto:press@designleverinc.com" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",textDecoration:"none",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>Media enquiries</a>
          </div>
        </div>
        {/* THE FACTS */}
        {/* FEATURED IN */}
        {/* STORY */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>The story</span>
              <div style={{marginTop:"28px",borderTop:"1.5px solid #44063B",maxWidth:"420px"}}>
                <div style={{display:"grid",gap:"4px",padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.66)"}}>Founder</span>
                  <span style={{font:"400 18px/1.4 'Roboto Flex',sans-serif",color:"#44063B"}}>Bolutife Awakan</span>
                </div>
                <div style={{display:"grid",gap:"4px",padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.66)"}}>Headquarters</span>
                  <span style={{font:"400 18px/1.4 'Roboto Flex',sans-serif",color:"#44063B"}}>Lagos, Nigeria</span>
                </div>
                <div style={{display:"grid",gap:"4px",padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.66)"}}>Origin</span>
                  <span style={{font:"400 18px/1.4 'Roboto Flex',sans-serif",color:"#44063B"}}>Dreamt in London, built in Lagos</span>
                </div>
                <div style={{display:"grid",gap:"4px",padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.66)"}}>What we do</span>
                  <span style={{font:"400 18px/1.4 'Roboto Flex',sans-serif",color:"#44063B"}}>Practice · Academy · Network · Research</span>
                </div>
                <div style={{display:"grid",gap:"4px",padding:"16px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <span style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.66)"}}>Press contact</span>
                  <span style={{font:"400 18px/1.4 'Roboto Flex',sans-serif",color:"#44063B"}}><a className="dl-link" href="mailto:press@designleverinc.com" style={{color:"#44063B"}}>press@designleverinc.com</a></span>
                </div>
              </div>
            </div>
            <div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"16px"}}>50-word company boilerplate</div>
              <p style={{font:"400 24px/1.35 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 18px",letterSpacing:"-.01em",maxWidth:"820px"}}>
                Design Lever is the design leadership infrastructure company: fractional at executive level, credentialed through a pathway, proven by open evidence.
              </p>
              <CopyBoilerplate text="Design Lever is the design leadership infrastructure company: fractional at executive level, credentialed through a pathway, proven by open evidence." />
              <ImageSlot id="dl-press-founder" src="/images/press-founder.webp" fit="cover" style={{width:"100%",height:"320px",display:"block",margin:"32px 0",objectPosition:"center 20%"}} placeholder="Founder portrait" />
              <p style={{font:"400 16px/1.7 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",margin:"0",maxWidth:"720px"}}>
                Design leadership is a structural bottleneck to 18% annual ICT growth. We install it, certify it, and publish the return as open research.
              </p>
            </div>
          </div>
        </div>
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"44px"}}>
            <div>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>Press kit</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>Everything you need to cite us.</h2>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M7 3h7l4 4v14H7z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Logo & wordmark</div>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>Full mark, wordmark, and clear-space rules in SVG and PNG.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#B8430F",textDecoration:"none"}}>Request <ArrowIcon /></Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M6 3v18"></path>
                  <path d="M6 4h11l-2 4 2 4H6"></path>
                </svg>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Brand facts</div>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>The numbers, sourced, plus approved boilerplate copy.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#B8430F",textDecoration:"none"}}>Request <ArrowIcon /></Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block"}}>
                  <circle cx="9" cy="8" r="3"></circle>
                  <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                  <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                </svg>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Leadership bios</div>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>Founder and advisor biographies, and headshots.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#B8430F",textDecoration:"none"}}>Request <ArrowIcon /></Link>
            </div>
            <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"32px",display:"flex",flexDirection:"column",gap:"16px",minHeight:"210px",justifyContent:"space-between"}}>
              <div>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block"}}>
                  <path d="M3 7h3l2-2h8l2 2h3v12H3z"></path>
                  <circle cx="12" cy="13" r="3.4"></circle>
                </svg>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 8px"}}>Photography</div>
                <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.64)",margin:"0"}}>Approved founder and company imagery, high-resolution.</p>
              </div>
              <Link className="dl-link" href="/contact" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#B8430F",textDecoration:"none"}}>Request <ArrowIcon /></Link>
            </div>
          </div>
        </div>
        {/* PRESS KIT */}
        {/* COVERAGE */}
        {/* MEDIA CONTACT */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"40px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>Coverage</span>
            <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>In the press.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"160px 1fr 160px",gap:"32px",alignItems:"baseline",padding:"28px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)"}}>2026</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Coverage lands here as it publishes.</div>
              <div style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#B8430F",justifySelf:"end"}}>Coming Soon</div>
            </div>
          </div>
        </div>
        <div style={{padding:"130px 64px",background:"#FFBCE8",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 26px",maxWidth:"760px",letterSpacing:"-.015em",textWrap:"balance"}}>Writing about design, leadership or Africa&apos;s creative economy?</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.82)",margin:"0 auto 40px",maxWidth:"460px"}}>We answer press same-day, and share data, methodology, and named sources.</p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none"}}>press@designleverinc.com <ArrowIcon /></Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
