import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers", description: "We hire practitioners who have done the job, not people who talk about it. A small core, senior standard, documented method." };

export default function PageCareers() {
  return (
    <div className="pg-careers">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="about" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-company-family-hero" style={{position:"relative",overflow:"hidden",padding:"100px 64px 96px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"72px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Careers · Join us</span>
          </div>
          <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",maxWidth:"1080px",textWrap:"balance"}}>Build the design leadership layer African businesses runs on.</h1>
          <p style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"560px",margin:"0"}}>
            We hire practitioners who have done the job, not people who talk about it. A small core, senior standard, documented method.
          </p>
        </div>
        {/* OPEN ROLES */}
        <div style={{padding:"110px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"44px"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Open roles</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>Where we are hiring.</h2>
            </div>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 200px 200px 130px",gap:"24px",alignItems:"center",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Associate Practitioner</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Fractional</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Lagos / remote</div>
              <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase",justifySelf:"end"}}>Apply <ArrowIcon /></Link>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 200px 200px 130px",gap:"24px",alignItems:"center",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Research Lead</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Full-time</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Lagos</div>
              <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase",justifySelf:"end"}}>Apply <ArrowIcon /></Link>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 200px 200px 130px",gap:"24px",alignItems:"center",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Community Lead, The Lever</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Full-time</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Remote</div>
              <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase",justifySelf:"end"}}>Apply <ArrowIcon /></Link>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 200px 200px 130px",gap:"24px",alignItems:"center",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B"}}>Academy Faculty</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Rolling</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".04em"}}>Africa / diaspora</div>
              <Link className="dl-link" href="/contact" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",textDecoration:"none",letterSpacing:".06em",textTransform:"uppercase",justifySelf:"end"}}>Apply <ArrowIcon /></Link>
            </div>
          </div>
        </div>
        {/* HOW WE HIRE */}
        {/* TEACH WITH US */}
        <div style={{padding:"120px 64px",backgroundColor:"#44073B"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Teach with us</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"22px 0 22px",letterSpacing:"-.01em"}}>Done the job? Build the people who do it next.</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.7)",margin:"0 0 36px",maxWidth:"440px"}}>
                We look for senior design leaders to lead sessions and mentor cohorts. One session, or a standing role.
              </p>
              <Link className="dl-btn hov-cream" href="/faculty" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#FF7D44"}}>See the faculty <ArrowIcon /></Link>
            </div>
            <ImageSlot id="dl-careers-teach" src="/images/scenes/careers-teach.webp" style={{width:"100%",height:"340px",display:"block"}} placeholder="A session in progress" />
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Working here, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Do you hire remotely?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Yes. The core is Lagos, and most roles are open to practitioners across Africa and the diaspora.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Can I work fractionally?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Associate Practitioner and Faculty roles are fractional by design. You keep your own practice.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What do you look for?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Senior judgment, a documented track record, and a bias to build. Titles matter less than what you have shipped.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How do I apply?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Write to careers@designleverinc.com with the role and a short note on what you have led. No cover-letter theatre.
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
