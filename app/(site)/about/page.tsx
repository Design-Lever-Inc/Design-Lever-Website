import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PersonRevealCard } from "@/components/PersonRevealCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Design Lever is building the leadership, systems, professional pathways and evidence that give design more commercial authority in Africa." };

export default function PageAbout() {
  return (
    <div className="pg-about">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="about" />
        {/* HERO */}
        <div className="dl-page-hero-texture dl-page-hero-texture--on-dark dl-about-hero-grid-right dl-company-family-hero" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#44063B"}}>
          <svg viewBox="0 0 600 600" width="620" height="620" fill="none" stroke="#FDFBF0" style={{position:"absolute",top:"-90px",right:"-150px",opacity:".14"}}>
            <circle cx="300" cy="300" r="288" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="230" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="140" strokeWidth="1" strokeDasharray="4 8"></circle>
            <circle cx="300" cy="300" r="60" strokeWidth="1" strokeDasharray="4 8"></circle>
            <line x1="300" y1="12" x2="300" y2="588" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="12" y1="300" x2="588" y2="300" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="96" y1="96" x2="504" y2="504" strokeWidth="1" strokeDasharray="4 8"></line>
            <line x1="504" y1="96" x2="96" y2="504" strokeWidth="1" strokeDasharray="4 8"></line>
          </svg>
          <div style={{position:"relative",maxWidth:"920px",zIndex:"1"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>ABOUT · THE COMPANY</span>
            <h1 style={{font:"400 96px/1.0 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance",maxWidth:"755px"}}>On a mission to make design count.</h1>
            <p style={{font:"400 20px/1.5 'Roboto Flex',sans-serif",color:"rgba(253,251,240,.72)",maxWidth:"560px",margin:"0 0 48px"}}>
              Design Lever is building the leadership, systems, professional pathways and evidence that give design more commercial authority in Africa.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn" href="#team" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Meet the team <ArrowIcon direction="down" /></a>
              <Link className="dl-link" href="/careers" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",textDecoration:"none",letterSpacing:".03em",borderBottom:"1px solid #FDFBF0",paddingBottom:"4px"}}>Careers</Link>
            </div>
          </div>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"0"}}>
          <ImageSlot id="dl-abt-hero" src="/images/scenes/about-hero.webp" style={{width:"100%",height:"620px",display:"block",transform:"scaleX(-1)"}} placeholder="The team at work" />
        </div>
        {/* MANIFESTO */}
        <div style={{padding:"120px 64px",backgroundColor:"#44063B"}}>
          <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The thesis</span>
          <div style={{marginTop:"44px",display:"flex",flexDirection:"column",gap:"8px",maxWidth:"1120px"}}>
            <p style={{font:"400 24px/1.35 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em"}}>Design is undervalued everywhere, but Africa pays the highest price.</p>
            <p style={{font:"400 24px/1.35 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em",maxWidth:"1040px"}}>
              Africa has more than 1.35 million designers, but too few structured routes from senior practice into design leadership. <span style={{color:"rgba(253,251,240,.58)"}}>Companies build design teams without the leadership systems that make the investment perform, while experienced practitioners face a narrower path to executive responsibility.</span>
            </p>
            <p style={{font:"400 24px/1.35 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em"}}>
              Design Lever builds that missing layer in companies through leadership education, across a professional network, backed by open research. We make design count.
            </p>
          </div>
        </div>
        {/* THE SYSTEM */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"760px",marginBottom:"64px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>How Design Lever works</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>One company, built around the same problem.</h2>
          </div>
          <div className="dl-about-system-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",borderTop:"1.5px solid #44063B"}}>
            <div className="dl-about-system-card" style={{padding:"32px 26px 34px 0",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"22px"}}>01</div>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Fractional Design Leadership</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Build executive design capability inside companies.</p>
            </div>
            <div className="dl-about-system-card" style={{padding:"32px 26px 34px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"22px"}}>02</div>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Academy</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Develop practitioners for design leadership.</p>
            </div>
            <div className="dl-about-system-card" style={{padding:"32px 26px 34px",borderRight:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"22px"}}>03</div>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Network</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Connect experienced design leaders to peers and fractional opportunities.</p>
            </div>
            <div className="dl-about-system-card" style={{padding:"32px 0 34px 26px"}}>
              <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".08em",marginBottom:"22px"}}>04</div>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Research</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0"}}>Document what the market, companies and practitioners teach us.</p>
            </div>
          </div>
        </div>
        {/* PHILOSOPHY */}
        {/* TEAM */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div className="dl-about-principles-layout" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"80px",alignItems:"start"}}>
          <div>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>What we will not compromise</span>
            <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Three principles we will not trade away.</h2>
          </div>
          <div style={{borderTop:"1.5px solid #44063B"}}>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1"}}>01</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Rigor</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We hold the standard when it costs us.</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0",borderBottom:"1px solid rgba(68,6,59,.16)"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1"}}>02</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Truth</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We make claims we can prove.</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:"44px",padding:"32px 0"}}>
              <div style={{font:"400 46px 'Faculty Glyphic',serif",color:"#FF7D44",lineHeight:"1"}}>03</div>
              <div>
                <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"8px"}}>Service</div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",margin:"0",maxWidth:"680px"}}>We share what we learn.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* ORIGIN STORY */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Origin</span>
          <div className="dl-about-origin-grid" style={{display:"grid",gridTemplateColumns:"minmax(260px,4fr) minmax(0,8fr)",gap:"64px",marginTop:"28px",alignItems:"stretch"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"380px",padding:"34px",background:"#44063B"}}>
              <h2 style={{font:"400 46px/1.08 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"0",letterSpacing:"-.01em"}}>Our story.</h2>
              <div style={{borderTop:"1px solid rgba(253,251,240,.3)",paddingTop:"20px"}}>
                <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"14px"}}>Origin coordinates</div>
                <div style={{font:"400 24px/1 'Faculty Glyphic',serif",color:"#FDFBF0",letterSpacing:"-.02em"}}>London <span style={{color:"#FF7D44"}}>→</span> Lagos</div>
              </div>
            </div>
            <div style={{borderTop:"1.5px solid #44063B",paddingTop:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div>
                <p style={{font:"400 46px/1.16 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.01em",margin:"0 0 34px",maxWidth:"740px"}}>Dreamt in London, birthed in Lagos.</p>
                <div className="dl-about-origin-copy" style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"28px",maxWidth:"820px"}}>
                  <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",margin:"0"}}>The idea took shape while Bolutife Awakan was studying design leadership in London and reflecting on years spent building brands, teams and design functions across different markets. The pattern was consistent: strong designers were everywhere, but the structures that helped them become stronger leaders were not.</p>
                  <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.7)",margin:"0"}}>Design Lever was built in Lagos to close that gap in practice. First through companies, then through leadership education, professional networks and the evidence produced along the way. What started as a question about better design careers became a company built around better design leadership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="team" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"60px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The team</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 20px",letterSpacing:"-.01em"}}>Build the design leadership layer African businesses runs on.</h2>
            <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.66)",maxWidth:"620px",margin:"0"}}>We hire people who have done the work, not people who only talk about it. A small team, senior standards and documented methods.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <PersonRevealCard id="dl-team-1" src="/images/bolutife-awakan.webp" name="Bolutife Awakan" role="Founder & Principal" country="Nigeria, UK" bio="Leads every engagement and owns the LEVER method. CDO-level experience across Nigerian health-tech and fintech." placeholder="Team photo, Founder" />
            <PersonRevealCard id="dl-team-2" src="/images/kachi-kalu.webp" name="Kachi Kalu" role="Head, Partnerships" country="Nigeria" placeholder="Team photo, Head of Partnerships" />
            <PersonRevealCard id="dl-team-3" src="/images/emmanuel-michael.webp" name="Emmanuel Michael" role="Head, Strategy" country="Nigeria" placeholder="Team photo, Head of Strategy" />
            <PersonRevealCard id="dl-team-4" src="/images/tolulope-adeoye.webp" name="Tolulope Adeoye" role="Head, Operations" country="Nigeria" placeholder="Team photo, Head of Operations" />
          </div>
        </div>
        {/* ADVISORS */}
        <div style={{padding:"118px 64px",backgroundColor:"#44063B"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"60px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Advisors</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            <PersonRevealCard id="dl-adv-1" src="/images/people/adv-1.webp" name="Victor Fatanmi" role="CEO, FourthCanvas" country="Nigeria" tone="dark" placeholder="Advisor photo" />
            <PersonRevealCard id="dl-adv-2" src="/images/people/adv-2.webp" name="Paul Otu" role="Group Head of Design, Interswitch" country="Nigeria" tone="dark" placeholder="Advisor photo" />
            <PersonRevealCard id="dl-adv-3" src="/images/people/adv-3.webp" name="Cat Drew" role="CDO, Design Council" country="United Kingdom" tone="dark" placeholder="Advisor photo" />
            <PersonRevealCard id="dl-adv-4" src="/images/people/adv-4.webp" name="Paul Wright" role="Head of Strategy, Uber EMEA" country="United Kingdom" tone="dark" placeholder="Advisor photo" />
          </div>
        </div>
        {/* CTA */}
        <div style={{padding:"130px 64px",textAlign:"center",backgroundColor:"#FFBCE8"}}>
          <h2 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"820px",letterSpacing:"-.015em",textWrap:"balance"}}>Design leadership as national economic infrastructure.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"#44063BEB",margin:"0 auto 42px",maxWidth:"500px"}}>Partner with us to build stronger design leadership across companies, careers and the wider ecosystem.</p>
          <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44063B"}}>Partner with us <ArrowIcon /></Link>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
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
                  <span className="dl-q">Who does Design Lever work with?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  We work with companies building stronger design capability, practitioners developing into leaders, and institutions strengthening the wider design ecosystem across Africa and the diaspora.
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
