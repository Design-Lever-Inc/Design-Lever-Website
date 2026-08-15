import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PersonRevealCard } from "@/components/PersonRevealCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Faculty", description: "Every session is led by a working senior design leader. Nigerian CDOs, directors, and diaspora practitioners. No career academics." };

const FACULTY_ROSTER = [
  ["mentors", "Emeka Nwachukwu", "CDO · Nigerian scale-up", "Nigeria"],
  ["mentors", "Olu Bankole", "VP Design · Global fintech", "Nigeria"],
  ["mentors", "Amaka Obi", "Head of Design · Health tech", "Nigeria"],
  ["mentors", "Chidi Okafor", "Fractional CDO · Multiple", "Nigeria"],
  ["advisors", "Amara Sow", "Former CPO · Payments", "Senegal"],
  ["advisors", "Kofi Anku", "Design Partner · VC", "Ghana"],
  ["advisors", "Nadia Cherif", "Professor of Practice · Diaspora", "Tunisia"],
  ["advisors", "Sipho Ndlela", "Founder · Design studio", "South Africa"],
  ["teachers", "Thabo Molefe", "Design Director · Global fintech", "South Africa"],
  ["teachers", "Kwabena Boateng", "Design Leader · Diaspora", "Ghana"],
  ["teachers", "Damilola Balogun", "Product Design VP · Scale-up", "Nigeria"],
  ["teachers", "Leila Diop", "Creative Director · Banking", "Senegal"],
  ["teachers", "Kofi Mensah", "Design Ops Lead · Marketplace", "Ghana"],
  ["teachers", "Yusuf Bello", "Research Director · Telco", "Nigeria"],
  ["teachers", "Sizwe Dlamini", "Staff Designer · Big tech", "South Africa"],
  ["teachers", "Ifeanyi Eze", "Brand Lead · Consumer", "Nigeria"],
  ["partners", "David Chen", "Guest Critic · Brand", "Singapore"],
  ["partners", "Ayo Cole", "Workshop Lead · Research", "Nigeria"],
  ["partners", "Segun Adewale", "Mentor · Career", "Nigeria"],
  ["partners", "Baba Diallo", "Speaker · Strategy", "Mali"],
] as const;

export default function PageFaculty() {
  return (
    <div className="pg-faculty">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="academy" />
        {/* HERO */}
        <div className="dl-page-hero-texture" style={{position:"relative",overflow:"hidden",padding:"80px 64px 0",backgroundColor:"#FDFBF0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"56px"}}>
            <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>The faculty</span>
          </div>
          <h1 style={{font:"400 88px/1.02 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 40px",maxWidth:"1100px",textWrap:"balance"}}>Taught by global design leaders</h1>
        </div>
        {/* HERO IMAGE */}
        <div style={{padding:"56px 64px 0"}}></div>
        {/* STAT STRIP */}
        {/* FACULTY (filterable) */}
        <div id="dl-facwrap" data-filter="all" style={{padding:"60px 64px 104px",borderTop:"1px solid rgba(68,6,59,.16)"}}>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap",position:"sticky",top:"84px",background:"#FDFBF0",padding:"14px 0",marginBottom:"30px",zIndex:"40",borderBottom:"1px solid rgba(68,6,59,.1)"}}>
            <button className="dl-fbtn" data-fcat="all" style={{color:"#FDFBF0",borderColor:"#FF7D44",backgroundColor:"#FF7D44"}}>All</button>
            <button className="dl-fbtn" data-fcat="mentors" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Mentors</button>
            <button className="dl-fbtn" data-fcat="advisors" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Advisors</button>
            <button className="dl-fbtn" data-fcat="teachers" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Teachers</button>
            <button className="dl-fbtn" data-fcat="partners" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Partners</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"44px 24px"}}>
            {FACULTY_ROSTER.map(([category, name, role, country], index) => (
              <PersonRevealCard
                key={`${category}-${index}`}
                id={`dl-fac-${index + 1}`}
                src={`/images/people/fac-${index + 1}.webp`}
                name={name}
                role={role}
                country={country}
                className={`dl-fac cat-${category}`}
                placeholder="Photo"
              />
            ))}
          </div>
          <div className="dl-companies cat-partners" style={{marginTop:"64px",borderTop:"1px solid rgba(68,6,59,.16)",paddingTop:"44px"}}>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"22px"}}>Partner companies</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"24px"}}>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-1" src="/images/logos/partner-asa.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div style={{width:"100%",textAlign:"center"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".02em"}}>RESEARCH PARTNER</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-2" src="/images/logos/partner-techcabal.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div style={{width:"100%",textAlign:"center"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".02em"}}>MEDIA & DATA</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-3" src="/images/logos/partner-fla.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div style={{width:"100%",textAlign:"center"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".02em"}}>EDUCATION</div>
                </div>
              </div>
              <div style={{border:"1px solid rgba(68,6,59,.2)",padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"200px"}}>
                <ImageSlot id="dl-partner-4" src="/images/logos/partner-adplist.svg" fit="contain" style={{width:"100%",height:"56px",display:"block"}} placeholder="Partner logo" />
                <div style={{width:"100%",textAlign:"center"}}>
                  <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".02em"}}>COMMUNITY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TEACH WITH US */}
        <div id="teach" style={{padding:"120px 64px",backgroundColor:"#FF7D44"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
            <div>
              <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>Teach with us</span>
              <h2 style={{font:"400 50px/1.08 'Faculty Glyphic',serif",color:"#44073B",margin:"24px 0 24px",letterSpacing:"-.01em"}}>Help build the next generation of design leaders</h2>
              <p style={{font:"400 16px/1.65 'Roboto Flex',sans-serif",color:"#44073BB3",margin:"0 0 36px",maxWidth:"460px"}}>
                We are always looking for senior design leaders, in Nigeria and across the diaspora, to lead sessions, mentor cohorts, and shape the curriculum.
              </p>
              <Link className="dl-btn hov-cream-plum" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase",backgroundColor:"#44073B"}}>Apply to teach <ArrowIcon /></Link>
            </div>
            <ImageSlot id="dl-fclt-teach" src="/images/scenes/faculty-teach-executive.webp" style={{width:"100%",height:"360px",display:"block",objectPosition:"72% center"}} placeholder="A faculty member leading a session" />
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
