import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CopyEmail } from "@/components/CopyEmail";
import type { Metadata } from "next";
import { HeroFactCard } from "@/components/HeroFactCard";

export const metadata: Metadata = { title: "Contact", description: "We reply same-day, Lagos time." };

export default function PageContact() {
  return (
    <div className="pg-contact">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="none" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-company-family-hero" style={{position:"relative",overflow:"hidden",padding:"72px 64px 56px"}}>
          <div className="dl-hero-split">
          <div>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>CONTACT</span>
            <h1 style={{font:"400 64px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"28px 0 18px",textWrap:"balance"}}>Talk to us.</h1>
            <p style={{font:"400 18px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0"}}>Pick the route that fits. We reply the same working day, Lagos time.</p>
          </div>
          <HeroFactCard
            title="Reach us directly"
            rows={[
              ["General", <a className="dl-link" href="mailto:hello@designleverinc.com" style={{color:"#44063B"}}>hello@designleverinc.com</a>],
              ["Press", <a className="dl-link" href="mailto:press@designleverinc.com" style={{color:"#44063B"}}>press@designleverinc.com</a>],
              ["Research", <a className="dl-link" href="mailto:research@designleverinc.com" style={{color:"#44063B"}}>research@designleverinc.com</a>],
              ["Based in", "Lagos · remote across Africa"],
              ["Reply", "Same working day"],
            ]}
          />
          </div>
        </div>
        {/* ROUTES */}
        <div style={{padding:"0 64px 90px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <a className="dl-netcard" href="https://www.conectr.me/s/design-intelligence-call-dh" target="_blank" rel="noopener noreferrer" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".08em",marginBottom:"10px"}}>COMPANIES</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Book a call</div>
              <span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.2 'Roboto Flex',sans-serif",color:"#44063B",border:"1px solid rgba(68,6,59,.4)",padding:"9px 14px",whiteSpace:"nowrap"}}>Book <ArrowIcon /></span>
            </a>
            <Link className="dl-netcard" href="/academy#apply" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".08em",marginBottom:"10px"}}>ADMISSIONS</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Admissions &amp; cohorts</div>
              <span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.2 'Roboto Flex',sans-serif",color:"#44063B",border:"1px solid rgba(68,6,59,.4)",padding:"9px 14px",whiteSpace:"nowrap"}}>Apply <ArrowIcon /></span>
            </Link>
            <Link className="dl-netcard" href="/talent-hub" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".08em",marginBottom:"10px"}}>TALENT</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Find a design leader</div>
              <span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.2 'Roboto Flex',sans-serif",color:"#44063B",border:"1px solid rgba(68,6,59,.4)",padding:"9px 14px",whiteSpace:"nowrap"}}>Brief the Hub <ArrowIcon /></span>
            </Link>
            <Link className="dl-netcard" href="/press" style={{display:"block",border:"1px solid rgba(68,6,59,.18)",padding:"30px 28px",textDecoration:"none",transition:"border-color .15s"}}>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".08em",marginBottom:"10px"}}>PRESS</div>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"16px"}}>Media enquiries</div>
              <span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.2 'Roboto Flex',sans-serif",color:"#44063B",border:"1px solid rgba(68,6,59,.4)",padding:"9px 14px",whiteSpace:"nowrap"}}>Press kit <ArrowIcon /></span>
            </Link>
          </div>
        </div>
        {/* FORM */}
        <div id="form" style={{padding:"100px 64px",background:"#14191D"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"stretch"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Write to us</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 22px",letterSpacing:"-.01em",maxWidth:"340px"}}>Everything else lands here.</h2>
              <div style={{marginTop:"auto",display:"grid",gap:"18px"}}>
                <CopyEmail email="hello@designleverinc.com" />
                <div style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.72)"}}>Lagos · remote across Africa</div>
              </div>
            </div>
            <div>
              <div id="dl-cform" style={{background:"#FDFBF0",padding:"40px",display:"flex",flexDirection:"column",gap:"22px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px"}}>
                  <div>
                    <label style={{display:"block",font:"500 14px/1.3 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.8)",margin:"0 0 8px"}}>Name</label>
                    <input id="dl-cname" type="text" style={{width:"100%",boxSizing:"border-box",font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}} />
                  </div>
                  <div>
                    <label style={{display:"block",font:"500 14px/1.3 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.8)",margin:"0 0 8px"}}>Email</label>
                    <input id="dl-cmail" type="email" style={{width:"100%",boxSizing:"border-box",font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}} />
                  </div>
                </div>
                <div>
                  <label style={{display:"block",font:"500 14px/1.3 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.8)",margin:"0 0 8px"}}>Topic</label>
                  <select id="dl-ctopic" defaultValue="" style={{width:"100%",boxSizing:"border-box",font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}}>
                    <option value="" disabled>Select a topic</option>
                    <option>Partnerships</option>
                    <option>Research</option>
                    <option>General enquiry</option>
                    <option>Community</option>
                    <option>Careers</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label style={{display:"block",font:"500 14px/1.3 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.8)",margin:"0 0 8px"}}>Message</label>
                  <textarea id="dl-cmsg" rows={5} style={{width:"100%",boxSizing:"border-box",font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.35)",padding:"15px 16px",outline:"none"}}></textarea>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"18px"}}>
                  <button id="dl-send" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",background:"#FF7D44",padding:"16px 28px",border:"0",cursor:"pointer"}}>Send <ArrowIcon direction="right" /></button>
                  <span id="dl-cnote" style={{font:"400 13px 'Spline Sans Mono',monospace",color:"#B8430F"}}></span>
                </div>
              </div>
              <div id="dl-csent" style={{display:"none",background:"#FDFBF0",padding:"60px 40px",textAlign:"center"}}>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Received.</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>We reply same-day, Lagos time.</p>
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
