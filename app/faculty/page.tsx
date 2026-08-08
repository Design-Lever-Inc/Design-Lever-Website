import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Faculty", description: "Every session is led by a working senior design leader. Nigerian CDOs, directors, and diaspora practitioners. No career academics." };

export default function PageFaculty() {
  return (
    <div className="pg-faculty">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO */}
        <div className="dl-page-hero-texture" style={{position:"relative",overflow:"hidden",padding:"80px 64px 0",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The faculty</span>
          </div>
          <h1 style={{font:"400 88px/1.02 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 40px",maxWidth:"1100px",textWrap:"balance"}}>Our experienced faculty roster.</h1>
          <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.7)",margin:"0",maxWidth:"600px"}}>
            Every session is led by a working senior design leader. Nigerian CDOs, directors, and diaspora practitioners. No career academics.
          </p>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"56px 64px 0"}}></div>
        {/* STAT STRIP */}
        {/* FACULTY (filterable) */}
        <div id="dl-facwrap" data-filter="all" style={{padding:"60px 64px 104px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"28px",gap:"24px",flexWrap:"wrap"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The roster</span>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"18px 0 0",letterSpacing:"-.01em"}}>Faculty.</h2>
            </div>
            <span style={{font:"400 13px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.6)",maxWidth:"320px",textAlign:"right"}}>Filter by role. Every name is a working practitioner.</span>
          </div>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap",position:"sticky",top:"84px",background:"#FDFBF0",padding:"14px 0",marginBottom:"30px",zIndex:"40",borderBottom:"1px solid rgba(68,6,59,.1)"}}>
            <button className="dl-fbtn" data-fcat="all" style={{color:"#FDFBF0",borderColor:"#FF6D35",backgroundColor:"#FF6D35"}}>All</button>
            <button className="dl-fbtn" data-fcat="mentors" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Mentors</button>
            <button className="dl-fbtn" data-fcat="advisors" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Advisors</button>
            <button className="dl-fbtn" data-fcat="teachers" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Teachers</button>
            <button className="dl-fbtn" data-fcat="partners" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Partners</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"44px 24px"}}>
            <div className="dl-fac cat-mentors dl-facultycard">
              <ImageSlot id="dl-fac-1" src="/images/people/fac-1.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>CDO · NIGERIAN SCALE-UP</div>
            </div>
            <div className="dl-fac cat-mentors dl-facultycard">
              <ImageSlot id="dl-fac-2" src="/images/people/fac-2.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>VP DESIGN · GLOBAL FINTECH</div>
            </div>
            <div className="dl-fac cat-mentors dl-facultycard">
              <ImageSlot id="dl-fac-3" src="/images/people/fac-3.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>HEAD OF DESIGN · HEALTH TECH</div>
            </div>
            <div className="dl-fac cat-mentors dl-facultycard">
              <ImageSlot id="dl-fac-4" src="/images/people/fac-4.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>FRACTIONAL CDO · MULTIPLE</div>
            </div>
            <div className="dl-fac cat-advisors dl-facultycard">
              <ImageSlot id="dl-fac-5" src="/images/people/fac-5.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>FMR CPO · PAYMENTS</div>
            </div>
            <div className="dl-fac cat-advisors dl-facultycard">
              <ImageSlot id="dl-fac-6" src="/images/people/fac-6.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN PARTNER · VC</div>
            </div>
            <div className="dl-fac cat-advisors dl-facultycard">
              <ImageSlot id="dl-fac-7" src="/images/people/fac-7.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>PROFESSOR OF PRACTICE · DIASPORA</div>
            </div>
            <div className="dl-fac cat-advisors dl-facultycard">
              <ImageSlot id="dl-fac-8" src="/images/people/fac-8.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>FOUNDER · DESIGN STUDIO</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-9" src="/images/people/fac-9.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN DIRECTOR · GLOBAL FINTECH</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-10" src="/images/people/fac-10.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN LEADER · DIASPORA</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-11" src="/images/people/fac-11.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>PRODUCT DESIGN VP · SCALE-UP</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-12" src="/images/people/fac-12.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>CREATIVE DIRECTOR · BANKING</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-13" src="/images/people/fac-13.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>DESIGN OPS LEAD · MARKETPLACE</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-14" src="/images/people/fac-14.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>RESEARCH DIRECTOR · TELCO</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-15" src="/images/people/fac-15.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>STAFF DESIGNER · BIG TECH</div>
            </div>
            <div className="dl-fac cat-teachers dl-facultycard">
              <ImageSlot id="dl-fac-16" src="/images/people/fac-16.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>BRAND LEAD · CONSUMER</div>
            </div>
            <div className="dl-fac cat-partners dl-facultycard">
              <ImageSlot id="dl-fac-17" src="/images/people/fac-17.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>GUEST CRITIC · BRAND</div>
            </div>
            <div className="dl-fac cat-partners dl-facultycard">
              <ImageSlot id="dl-fac-18" src="/images/people/fac-18.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>WORKSHOP LEAD · RESEARCH</div>
            </div>
            <div className="dl-fac cat-partners dl-facultycard">
              <ImageSlot id="dl-fac-19" src="/images/people/fac-19.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>MENTOR · CAREER</div>
            </div>
            <div className="dl-fac cat-partners dl-facultycard">
              <ImageSlot id="dl-fac-20" src="/images/people/fac-20.jpg" style={{width:"100%",height:"300px",display:"block"}} placeholder="Photo" />
              <div className="dl-fac-name" style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"18px",transition:"color .15s"}}>Name to be added</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>SPEAKER · STRATEGY</div>
            </div>
          </div>
          <div className="dl-companies cat-partners" style={{marginTop:"64px",borderTop:"1px solid rgba(68,6,59,.16)",paddingTop:"44px"}}>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"22px"}}>Partner companies</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-1" src="/images/logos/partner-asa.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Àsà Design</div>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".02em"}}>RESEARCH PARTNER</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-2" src="/images/logos/partner-techcabal.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>TechCabal Insights</div>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".02em"}}>MEDIA & DATA</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-3" src="/images/logos/partner-fla.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>Future London Academy</div>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".02em"}}>EDUCATION</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-4" src="/images/logos/partner-adplist.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"6px"}}>ADPList</div>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".02em"}}>COMMUNITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TEACH WITH US */}
        <div id="teach" style={{padding:"120px 64px",backgroundColor:"#FF6D35"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Teach with us</span>
              <h2 style={{font:"400 50px/1.08 'Faculty Glyphic',serif",color:"#44073B",margin:"24px 0 24px",letterSpacing:"-.01em"}}>Help build the next generation of design leaders</h2>
              <p style={{font:"400 17px/1.65 'Inter Tight',sans-serif",color:"#44073BB3",margin:"0 0 36px",maxWidth:"460px"}}>
                We are always looking for senior design leaders, in Nigeria and across the diaspora, to lead sessions, mentor cohorts, and shape the curriculum.
              </p>
              <Link className="dl-btn hov-cream" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Apply to teach <ArrowIcon /></Link>
            </div>
            <ImageSlot id="dl-fclt-teach" src="/images/scenes/faculty-teach.jpg" style={{width:"100%",height:"360px",display:"block"}} placeholder="A faculty member leading a session" />
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
