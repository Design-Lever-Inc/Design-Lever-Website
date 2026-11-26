import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { HeroFactCard } from "@/components/HeroFactCard";
import { PersonRevealCard } from "@/components/PersonRevealCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Academy", description: "For experienced designers moving from senior craft roles into management, executive responsibility and commercial design leadership." };

const WAITLIST = "https://tally.so/r/J9rOWY";

const FACULTY = [
  {
    img: "/images/people/fac-1.webp",
    name: "Emeka Nwachukwu",
    role: "Head of Design",
    country: "Nigeria",
    company: "Flutterwave",
    bio: "Emeka Nwachukwu, Head of Design at Flutterwave, will identify how to build design-centric organisations, discerning the ingredients of a sustainable creative culture that enables real cross-functional collaboration.",
  },
  {
    img: "/images/people/fac-2.webp",
    name: "Olu Bankole",
    role: "Design Director",
    country: "Nigeria",
    company: "Paystack",
    bio: "Olu Bankole, Design Director at Paystack, brings the systems behind scaling a design function inside a fast-growing fintech, from hiring and craft standards to the operating rhythm of a team.",
  },
  {
    img: "/images/people/fac-3.webp",
    name: "Amaka Obi",
    role: "VP, Product Design",
    country: "Nigeria",
    company: "MTN Group",
    bio: "Amaka Obi, VP of Product Design at MTN Group, leads on connecting design decisions to commercial outcomes and communicating the impact of design in the language of the board.",
  },
  {
    img: "/images/people/fac-4.webp",
    name: "Chidi Okafor",
    role: "Principal Design Lead",
    country: "Nigeria",
    company: "Google",
    bio: "Chidi Okafor, Principal Design Lead at Google, teaches how senior practitioners turn craft into organisational influence across product, engineering and leadership.",
  },
];

export default function PageAcademy() {
  return (
    <div className="pg-academy">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO, image forward */}
        <div className="dl-page-hero-texture dl-page-hero-texture--motif" style={{position:"relative",overflow:"hidden",padding:"96px 64px 100px",background:"#FF7D44"}}>
          <div className="dl-hero-split">
          <div>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",letterSpacing:".14em",textTransform:"uppercase"}}>
              THE ACADEMY
              <br />
            </span>
            <h1 style={{font:"400 96px/1 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"44px 0 40px",textWrap:"balance",maxWidth:"839px"}}>Africa's first pathway into design leadership.</h1>
            <p style={{font:"400 20px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.85)",maxWidth:"600px",margin:"0 0 48px"}}>
              For experienced designers moving from senior craft roles into management, executive responsibility and commercial design leadership.
              <br />
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"28px"}}>
              <a className="dl-btn hov-orange" href="#tracks" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",padding:"17px 28px",textDecoration:"none",backgroundColor:"#44063B"}}>Compare tracks <ArrowIcon direction="down" /></a>
              <a className="dl-link" href="#faculty" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",textDecoration:"none",borderBottom:"1px solid #44063B",paddingBottom:"4px"}}>Meet the faculty</a>
            </div>
          </div>
          <HeroFactCard
            title="Next cohorts"
            rows={[
              ["Foundation", "January 2027 · 20 seats"],
              ["Executive", "April 2027 · 12 seats"],
              ["Format", "Hybrid (Lagos)"],
            ]}
            highlight={{ label: "Tuition from", value: "₦400K", note: "$250" }}
          >
            <a className="dl-btn" href={WAITLIST} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"15px 24px",textDecoration:"none"}}>Join the waitlist <ArrowIcon /></a>
          </HeroFactCard>
          </div>
        </div>
        {/* HERO IMAGE */}
        <ImageSlot id="dl-ac-hero" src="/images/scenes/fly-academy.webp" style={{width:"100%",height:"520px",display:"block"}} placeholder="Hero image, a cohort in session / design leaders at work" />
        {/* WHY, senior is not the end */}
        <div style={{padding:"118px 64px"}}>
          <div style={{marginBottom:"64px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>The problem</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"820px",margin:"24px 0 0",letterSpacing:"-.01em",textWrap:"balance"}}>Senior is not the end of a design career.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"34px 28px 0 0",borderRight:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Craft stops being enough.</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Leadership requires commercial judgment, people management and organisational influence.
              </p>
            </div>
            <div style={{padding:"34px 28px",borderRight:"1px solid rgba(68,6,59,.14)"}}>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>Most designers learn leadership after promotion.</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>
                The responsibility arrives before the framework.
              </p>
            </div>
            <div style={{padding:"34px 0 0 28px"}}>
              <div style={{font:"400 24px/1.2 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"14px"}}>The next role is different work.</div>
              <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>
                Leading design means managing systems, decisions, people and business outcomes.
              </p>
            </div>
          </div>
        </div>
        {/* LEARNING PILLARS */}
        <div style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>Learning pillars</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Leadership is a different practice.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(68,6,59,.2)"}}>
            <div style={{padding:"34px 28px 34px 0",borderRight:"1px solid rgba(68,6,59,.14)",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><path d="M4 4v16h16"></path><path d="M7 15l3.5-4 3 2L20 6"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Business of design</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Connect design decisions to company performance.</p>
            </div>
            <div style={{padding:"34px 28px",borderRight:"1px solid rgba(68,6,59,.14)",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><circle cx="9" cy="8" r="3"></circle><path d="M3.5 20c0-3.3 2.5-5 5.5-5s5.5 1.7 5.5 5"></path><path d="M16.5 5.6A3 3 0 0 1 16.5 11"></path><path d="M17 15c2.4.4 4 1.9 4 5"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>People leadership</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Manage designers, feedback, performance and development.</p>
            </div>
            <div style={{padding:"34px 0 34px 28px",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><circle cx="12" cy="12" r="3"></circle><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.1 5.1l2.1 2.1M16.8 16.8l2.1 2.1M18.9 5.1l-2.1 2.1M7.2 16.8l-2.1 2.1"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Design operations</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Build the systems behind a functioning design organisation.</p>
            </div>
            <div style={{padding:"34px 28px 34px 0",borderRight:"1px solid rgba(68,6,59,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><path d="M4 5h16v10H9l-4 4V5z"></path><path d="M8 9h8M8 12h5"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Executive communication</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Present design in the language of leadership and boards.</p>
            </div>
            <div style={{padding:"34px 28px",borderRight:"1px solid rgba(68,6,59,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><path d="M12 3v18M6 21h12"></path><path d="M12 6H4l-2 5a2.4 2.4 0 0 0 4.8 0zM12 6h8l2 5a2.4 2.4 0 0 1-4.8 0z"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Commercial accountability</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Measure what design contributes.</p>
            </div>
            <div style={{padding:"34px 0 34px 28px"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}><circle cx="5" cy="6" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="12" cy="18" r="2"></circle><path d="M6.6 7.4l4 9M17.4 7.4l-4 9M7 6h10"></path></svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#44063B",marginBottom:"12px"}}>Organisational influence</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0"}}>Work across product, marketing, engineering and leadership.</p>
            </div>
          </div>
        </div>
        {/* TRACKS, image-forward cards */}
        <div id="tracks" style={{padding:"0 64px 118px"}}>
          <div style={{marginBottom:"64px",maxWidth:"860px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>Two tracks</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em",textWrap:"balance"}}>Designed to enable success in your leadership transition.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
            {/* Foundation */}
            <div className="dl-card" style={{border:"1px solid rgba(68,6,59,.18)",background:"#FDFBF0"}}>
              <ImageSlot id="dl-ac-found" src="/images/scenes/foundation-workshop.webp" style={{width:"100%",height:"300px",display:"block"}} placeholder="Foundation cohort image" />
              <div style={{padding:"36px 36px 40px"}}>
                <div style={{marginBottom:"22px"}}>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".06em",marginBottom:"10px"}}>FOUNDATION PROGRAMME</div>
                  <div style={{font:"400 24px/1.1 'Faculty Glyphic',serif",color:"#44063B"}}>Build the leadership foundation.</div>
                </div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.66)",margin:"0 0 28px"}}>
                  For experienced designers beginning to lead teams, projects or design decisions.
                </p>
                <div style={{borderTop:"1px solid rgba(68,6,59,.16)",marginBottom:"28px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Duration</span>
                    <span>1 week</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Experience</span>
                    <span>5+ years design experience</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Leadership</span>
                    <span>No leadership experience required</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Next cohort</span>
                    <span>January 2027</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Format</span>
                    <span>Hybrid (Lagos)</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(68,6,59,.1)",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Seats</span>
                    <span>20 available</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"14px 0",font:"400 13px 'Spline Sans Mono',monospace",color:"#44063B"}}>
                    <span style={{color:"rgba(68,6,59,.6)"}}>Tuition</span>
                    <span style={{font:"400 22px 'Faculty Glyphic',serif"}}>₦400K / $250</span>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"22px"}}>
                  <a className="dl-btn" href={WAITLIST} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"15px 24px",textDecoration:"none"}}>Join the waitlist <ArrowIcon /></a>
                  <Link className="dl-link" href="/academy/foundation" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",textDecoration:"none",borderBottom:"1px solid rgba(68,6,59,.4)",paddingBottom:"3px"}}>View programme</Link>
                </div>
              </div>
            </div>
            {/* Executive */}
            <div className="dl-card" style={{border:"1px solid #44063B",background:"#44063B"}}>
              <ImageSlot id="dl-ac-exec" src="/images/scenes/executive-hero.webp" style={{width:"100%",height:"300px",display:"block"}} placeholder="Executive cohort image" />
              <div style={{padding:"36px 36px 40px"}}>
                <div style={{marginBottom:"22px"}}>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".06em",marginBottom:"10px"}}>EXECUTIVE PROGRAMME</div>
                  <div style={{font:"400 24px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0"}}>Lead design at organisational level.</div>
                </div>
                <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(253,251,240,.72)",margin:"0 0 28px"}}>
                  For senior designers and design managers preparing for Head of Design, Director and executive responsibility.
                </p>
                <div style={{borderTop:"1px solid rgba(253,251,240,.2)",marginBottom:"28px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Duration</span>
                    <span>4 weeks</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Experience</span>
                    <span>8+ years design experience</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Leadership</span>
                    <span>2+ years leadership experience</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Next cohort</span>
                    <span>April 2027</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Format</span>
                    <span>Hybrid (Lagos)</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(253,251,240,.12)",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Seats</span>
                    <span>12 available</span>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"14px 0",font:"400 13px 'Spline Sans Mono',monospace",color:"#FDFBF0"}}>
                    <span style={{color:"rgba(253,251,240,.6)"}}>Tuition</span>
                    <span style={{font:"400 22px 'Faculty Glyphic',serif"}}>₦1M / $750</span>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"22px"}}>
                  <a className="dl-btn" href={WAITLIST} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",padding:"15px 24px",textDecoration:"none",backgroundColor:"#FF7D44"}}>Join the waitlist <ArrowIcon /></a>
                  <Link className="dl-link" href="/academy/executive" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FF7D44",textDecoration:"none",borderBottom:"1px solid rgba(222,223,77,.5)",paddingBottom:"3px"}}>View programme</Link>
                </div>
              </div>
            </div>
          </div>
          <p style={{font:"400 16px/1.6 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.6)",margin:"36px 0 0",maxWidth:"820px"}}>
            Every student receives free membership to{" "}
            <Link className="dl-link" href="/the-lever" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>The Lever</Link>
            . Executive graduates are automatically listed on the{" "}
            <Link className="dl-link" href="/network" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>Design Lever Network</Link>
            , with their first placement fee waived.
          </p>
        </div>
        {/* FACULTY, face cards */}
        <div id="faculty" style={{padding:"118px 64px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"60px"}}>
            <div>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>The faculty</span>
              <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>Taught by design directors working in Africa.</h2>
            </div>
            <a className="dl-link" href="#faculty" style={{font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#44063B",textDecoration:"none",borderBottom:"1px solid #44063B",paddingBottom:"4px",width:"216px",height:"19px"}}>Meet the faculty <ArrowIcon direction="down" /></a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
            {FACULTY.map((f, i) => (
              <PersonRevealCard key={i} id={`dl-fac-${i + 1}`} src={f.img} name={f.name} role={f.role} country={f.country} company={f.company} bio={f.bio} placeholder="Faculty photo" />
            ))}
          </div>
        </div>
        {/* WHAT IT LEADS TO */}
        <div id="credential" style={{padding:"118px 64px",background:"#14191D"}}>
          <div style={{maxWidth:"820px",marginBottom:"64px"}}>
            <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>What it leads to</span>
            <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#FDFBF0",margin:"24px 0 0",letterSpacing:"-.01em"}}>A credential with a standard behind it.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0",borderTop:"1px solid rgba(253,251,240,.2)"}}>
            <div style={{padding:"34px 28px 34px 0",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="12" cy="9" r="6"></circle>
                <path d="M8.5 14 7 22l5-3 5 3-1.5-8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Professional credibility</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(253,251,240,.62)",margin:"0"}}>
                A verifiable leadership credential.
              </p>
            </div>
            <div style={{padding:"34px 28px",borderRight:"1px solid rgba(253,251,240,.14)"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"></path>
                <path d="M16 5.5A3 3 0 0 1 16 11"></path>
                <path d="M17.5 15.2c2.1.6 3.5 2 3.5 4.8"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Peer network</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(253,251,240,.62)",margin:"0"}}>
                Senior designers at a comparable career stage.
              </p>
            </div>
            <div style={{padding:"34px 0 34px 28px"}}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FF7D44" strokeWidth="1.4" style={{display:"block",marginBottom:"16px"}}>
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8z"></path>
              </svg>
              <div style={{font:"400 24px 'Faculty Glyphic',serif",color:"#FDFBF0",marginBottom:"12px"}}>Fractional opportunities</div>
              <p style={{font:"400 16px/1.5 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(253,251,240,.62)",margin:"0"}}>
                Eligible Executive graduates can enter the Design Lever Network.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div style={{padding:"118px 64px",background:"#FDFBF0"}}>
          <div className="dl-faq-grid" style={{display:"grid",gap:"64px",alignItems:"start"}}>
            <div>
              <span style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#B8430F",letterSpacing:".14em",textTransform:"uppercase"}}>FAQs</span>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"24px 0 0",letterSpacing:"-.01em"}}>The Academy, answered.</h2>
            </div>
            <div style={{borderTop:"1.5px solid #44063B"}}>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Is the programme online or in person?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Both tracks run live and cohort-based, delivered hybrid in Lagos with select sessions available to remote participants. The live format is deliberate, peer interaction is a core part of the product.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What are the entry requirements?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Foundation asks for at least five years of design experience, with no leadership experience required. Executive is for practitioners with 8+ years and 2+ years of leadership experience. Applications are reviewed individually.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">Do I need the Foundation Programme before Executive?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  No. Executive is a standalone track for practitioners already in or moving into senior leadership. Foundation is recommended if you're earlier in the leadership transition.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">What certificate do I receive?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  On completion you become a Design Lever Certified Design Leader, a verifiable credential whose value compounds as certified practitioners prove themselves in the market.
                </p>
              </details>
              <details className="dl-faq" name="dlfaq">
                <summary>
                  <span className="dl-q">How do I join the next cohort?</span>
                  <span className="dl-plus">+</span>
                </summary>
                <p className="dl-a">
                  Cohorts are small and fill on referral.{" "}
                  <a className="dl-link" href={WAITLIST} target="_blank" rel="noopener noreferrer" style={{color:"#44063B",textDecoration:"underline",textUnderlineOffset:"3px"}}>Join the waitlist</a>
                  {" "}for the next Foundation or Executive intake and we'll be in touch.
                </p>
              </details>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div id="apply" style={{padding:"130px 64px",background:"#FF7D44",textAlign:"center"}}>
          <h2 style={{font:"400 60px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 30px",maxWidth:"840px",letterSpacing:"-.015em",textWrap:"balance"}}>The credential for Africa's design leaders.</h2>
          <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",letterSpacing:"-0.1px",color:"rgba(68,6,59,.85)",margin:"0 auto 42px",maxWidth:"520px"}}>
            Join the waitlist for the next Foundation or Executive cohort.
          </p>
          <a className="dl-btn" href={WAITLIST} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"500 15px/1.2 'Roboto Flex',sans-serif",color:"#FDFBF0",background:"#44063B",padding:"18px 32px",textDecoration:"none"}}>Join the waitlist <ArrowIcon /></a>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
