import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Building up the economic value of design, one data at a time. A commercial company for African designers to lead in boardrooms, and the infrastructure to get " };

export default function PageAbout() {
  return (
    <div className="pg-about">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="about" />
        {/* HERO */}
        <div style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#FFBCE8"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#44063B" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".9",pointerEvents:"none"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            {/* lever beam */}
            <line x1="90" y1="392" x2="510" y2="208" strokeWidth="1.4" strokeDasharray="4 8"></line>
            {/* fulcrum triangle */}
            <path d="M300 300 L268 372 L332 372 Z" strokeWidth="1" strokeDasharray="4 8"></path>
            <line x1="252" y1="392" x2="348" y2="392" strokeWidth="1" strokeDasharray="4 8"></line>
            {/* load on the heavy end */}
            <rect x="70" y="356" width="52" height="52" strokeWidth="1" strokeDasharray="4 8"></rect>
            {/* effort arrow on the light end */}
            <line x1="486" y1="220" x2="486" y2="150" strokeWidth="1" strokeDasharray="4 8"></line>
            <path d="M476 168 L486 148 L496 168" strokeWidth="1" strokeDasharray="4 8"></path>
            {/* pivot + effort nodes */}
            <circle cx="300" cy="300" r="7" fill="#FF6D35" stroke="none"></circle>
            <circle cx="486" cy="220" r="5" strokeWidth="1" strokeDasharray="4 8"></circle>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>ABOUT · THE COMPANY</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance",width:"755px",height:"279px"}}>We are on a mission to make design count</h1>
            <p style={{font:"400 21px/1.5 'Inter Tight',sans-serif",color:"rgba(68,6,59,.78)",maxWidth:"560px",margin:"0 0 48px"}}>
              Building up the economic value of design, one data at a time. A commercial company for African designers to lead in boardrooms, and the infrastructure to get us there.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href="#team" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",background:"#44063B",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Meet the team →</a>
              <Link className="dl-link" href="/careers" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>Careers</Link>
            </div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"0 64px 100px"}}>
          <ImageSlot id="dl-abt-hero" src="/images/scenes/about-hero.jpg" style={{width:"100%",height:"460px",display:"block"}} placeholder="The team at work" />
        </div>
        {/* MANIFESTO */}
        <div style={{padding:"120px 64px",backgroundColor:"#44063B"}}>
          <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Our manifesto</span>
          <div style={{marginTop:"44px",display:"flex",flexDirection:"column",gap:"8px",maxWidth:"1120px"}}>
            <p style={{font:"400 44px/1.22 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em"}}>Design is undervalued everywhere, but Africa pays the highest price.</p>
            <p style={{font:"400 44px/1.22 'Faculty Glyphic',serif",color:"rgba(253,251,240,.4)",margin:"0",letterSpacing:"-.01em"}}>
              1.35 million designers without a career above senior level. So they leave for markets with higher ceilings, and the ecosystem starts again with juniors.
            </p>
            <p style={{font:"400 44px/1.22 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em"}}>
              We build that layer, embedded in companies, taught in cohorts, placed through a network, proven by open research. We make design count.
            </p>
          </div>
        </div>
        {/* PHILOSOPHY */}
        {/* TEAM */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>What we will not compromise</span>
            <h2 style={{font:"400 48px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Three principles we will not trade away.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1"}}>01</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Rigor</div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We hold the standard when it costs us.</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1"}}>02</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Truth</div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We make claims we can prove.</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0"}}>
              <div style={{font:"400 40px 'Faculty Glyphic',serif",color:"#FF6D35",lineHeight:"1"}}>03</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Service</div>
                <p style={{font:"400 15px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We share what we learn.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="team" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"60px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>The team</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <div>
              <ImageSlot id="dl-team-1" style={{width:"100%",height:"300px"}} placeholder="Team photo, Founder" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px"}}>Bolutife Awakan</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>FOUNDER & PRINCIPAL</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"14px 0 0"}}>
                Leads every engagement and owns the LEVER method. CDO-level experience across Nigerian health-tech and fintech.
              </p>
            </div>
            <div>
              <ImageSlot id="dl-team-2" src="/images/people/team-research.jpg" style={{width:"100%",height:"300px"}} placeholder="Team photo, Research Lead" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px"}}>Research Lead</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>NAME TO BE ADDED</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"14px 0 0"}}>
                Runs the three research streams and the annual African Design Leadership Report, the evidence base beneath every line.
              </p>
            </div>
            <div>
              <ImageSlot id="dl-team-3" src="/images/people/team-ops.jpg" style={{width:"100%",height:"300px"}} placeholder="Team photo, Operations" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px"}}>Operations</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>NAME TO BE ADDED</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"14px 0 0"}}>
                Holds engagement logistics, cohort delivery, and the systems that let a small team operate at senior scale.
              </p>
            </div>
            <div>
              <ImageSlot id="dl-team-4" src="/images/people/team-associate.jpg" style={{width:"100%",height:"300px"}} placeholder="Team photo, Associate" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#44063B",marginTop:"20px"}}>Associate Practitioner</div>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",marginTop:"6px",letterSpacing:".02em"}}>NAME TO BE ADDED</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(68,6,59,.64)",margin:"14px 0 0"}}>
                Delivers engagements under the LEVER method and founder oversight, how the practice scales beyond one person.
              </p>
            </div>
          </div>
        </div>
        {/* ADVISORS */}
        <div style={{padding:"118px 64px",backgroundColor:"#44073B"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"60px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>Advisors & faculty</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"32px"}}>
            <div style={{border:"1px solid rgba(253,251,240,.2)",padding:"28px"}}>
              <ImageSlot id="dl-adv-1" src="/images/people/adv-1.jpg" style={{width:"100%",height:"260px"}} placeholder="Advisor photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#FDFBF0",marginTop:"22px"}}>Founding Advisor</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",marginTop:"6px",letterSpacing:".02em"}}>DESIGN LEADERSHIP · GLOBAL FINTECH</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"14px 0 0"}}>
                A Nigerian design leader at a global organisation, advising on standard and contributing to the Executive faculty.
              </p>
            </div>
            <div style={{border:"1px solid rgba(253,251,240,.2)",padding:"28px"}}>
              <ImageSlot id="dl-adv-2" src="/images/people/adv-2.jpg" style={{width:"100%",height:"260px"}} placeholder="Advisor photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#FDFBF0",marginTop:"22px"}}>Founding Advisor</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",marginTop:"6px",letterSpacing:".02em"}}>DESIGN LEADERSHIP · GLOBAL PRODUCT</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"14px 0 0"}}>
                Diaspora practitioner bringing international credibility and knowledge transfer into the ecosystem.
              </p>
            </div>
            <div style={{border:"1px solid rgba(253,251,240,.2)",padding:"28px"}}>
              <ImageSlot id="dl-adv-3" src="/images/people/adv-3.jpg" style={{width:"100%",height:"260px"}} placeholder="Advisor photo" />
              <div style={{font:"400 22px 'Faculty Glyphic',serif",color:"#FDFBF0",marginTop:"22px"}}>Institutional Partner</div>
              <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(253,251,240,.55)",marginTop:"6px",letterSpacing:".02em"}}>RESEARCH & ACADEMIC CREDIBILITY</div>
              <p style={{font:"400 13.5px/1.6 'Inter Tight',sans-serif",color:"rgba(253,251,240,.62)",margin:"14px 0 0"}}>
                Research and academic co-validation, extending the credential's standing and the report's reach.
              </p>
            </div>
          </div>
        </div>
        {/* NON-NEGOTIABLES */}
        {/* CTA */}
        <div style={{padding:"130px 64px",textAlign:"center",backgroundColor:"#FFBCE8"}}>
          <h2 style={{font:"400 62px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"820px",letterSpacing:"-.015em",textWrap:"balance"}}>Design leadership as national economic infrastructure.</h2>
          <p style={{font:"400 18px/1.55 'Inter Tight',sans-serif",color:"#44073BEB",margin:"0 auto 42px",maxWidth:"500px"}}>
            Start where every engagement starts, with a free, naira-denominated read on the cost of the current situation.
          </p>
          <Link className="dl-btn" href="/diagnostic" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Open the diagnostic →</Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div style={{display:"grid",gridTemplateColumns:".75fr 1.25fr",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF6D35",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>About Design Lever, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What does Design Lever actually do?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  We build design leadership infrastructure across four lines: an embedded fractional CDO practice, an academy that certifies leaders, a network that places them, and open research that proves the case.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is this a consultancy?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Consultancies advise and leave you dependent. We build systems, document them, and hand over infrastructure the organisation sustains on its own.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Where are you based?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">Lagos, Nigeria, built here, for the continent, and expanding pan-African.</p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How do the four lines fit together?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  As a single flywheel: the fractional practice generates proof, the Academy turns it into credentials, the Network places certified leaders, and the community sustains them. Each line makes the next more credible.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How do I start working with you?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Most companies begin with a free Design Team Health Assessment; practitioners start with the Academy or the Network. Every path opens from the diagnostic.
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
