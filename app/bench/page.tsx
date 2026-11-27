import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageSlot } from "@/components/ImageSlot";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PersonRevealCard } from "@/components/PersonRevealCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "The Bench", description: "Fifteen years across payments and banking. Builds design orgs that defend their budget with numbers." };

const BENCH_ROSTER = [
  { category: "cdo", name: "Adaeze Okafor", role: "Fractional CDO", country: "Nigeria", image: "adaeze-okafor.webp", bio: "Fifteen years across payments and banking. Builds design organisations that defend their budget with numbers." },
  { category: "cdo", name: "Tunde Bakare", role: "Fractional CDO", country: "Nigeria · United Kingdom", image: "tunde-bakare.webp", bio: "Led design at two unicorns. Specialises in zero-to-one design leadership installs." },
  { category: "vp", name: "Zainab Mohammed", role: "VP Design", country: "Nigeria", image: "zainab-mohammed.webp", bio: "Runs design where the stakes are clinical, across digital products and physical care." },
  { category: "vp", name: "Kwame Mensah", role: "VP Design", country: "Ghana", image: "kwame-mensah.webp", bio: "A design systems operator who makes output faster, more consistent and less expensive to maintain." },
  { category: "head", name: "Amara Diallo", role: "Head of Design", country: "Senegal", image: "amara-diallo.webp", bio: "A consumer growth designer turned leader who ties brand work directly to acquisition cost." },
  { category: "head", name: "Femi Adeyemi", role: "Head of Design", country: "Nigeria", image: "femi-adeyemi.webp", bio: "Designs for operators, not just users: dashboards, dispatch and the messy middle of logistics." },
  { category: "cdo", name: "Nadia Hassan", role: "Fractional CDO", country: "Egypt", image: "nadia-hassan.webp", bio: "Leads enterprise design transformation across procurement, compliance and complex organisations." },
  { category: "head", name: "Sipho Ndlovu", role: "Head of Design", country: "South Africa", image: "sipho-ndlovu.webp", bio: "Research-led design for regulated industries, turning compliance constraints into design advantages." },
] as const;

export default function PageBench() {
  return (
    <div className="pg-bench">
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="network" />
        {/* BENCH PAGE */}
        <div id="dl-benchpage" data-view="roster">
          <div id="dl-roster">
            {/* HERO */}
            <div className="dl-page-hero-texture dl-network-family-hero" style={{padding:"80px 64px 0",backgroundColor:"#FDFBF0"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"56px"}}>
                <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".14em",textTransform:"uppercase"}}>TALENT NETWORK</span>
              </div>
              <h1 style={{font:"400 82px/1.03 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 36px",maxWidth:"1080px",textWrap:"balance"}}>The full bench of design executives.</h1>
            </div>
            {/* FILTER + GRID */}
            <div id="dl-bench" data-bfilter="all" style={{padding:"56px 64px 110px"}}>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap",position:"sticky",top:"84px",background:"#FDFBF0",padding:"14px 0",marginBottom:"30px",zIndex:"40",borderBottom:"1px solid rgba(68,6,59,.1)"}}>
                <button className="dl-fbtn" data-bcat="all" style={{background:"#FF7D44",color:"#FDFBF0",borderColor:"#FF7D44"}}>All</button>
                <button className="dl-fbtn" data-bcat="cdo" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Fractional CDOs</button>
                <button className="dl-fbtn" data-bcat="vp" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>VPs of Design</button>
                <button className="dl-fbtn" data-bcat="head" style={{background:"transparent",color:"#44063B",borderColor:"rgba(68,6,59,.35)"}}>Heads of Design</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"44px 24px"}}>
                {BENCH_ROSTER.map((person, index) => (
                  <PersonRevealCard
                    key={person.name}
                    id={`dl-exec-${index + 1}`}
                    src={`/images/people/${person.image}`}
                    name={person.name}
                    role={person.role}
                    country={person.country}
                    bio={person.bio}
                    className={`dl-exec cat-${person.category}`}
                    dataExec={`${index + 1}`}
                    placeholder="Photo"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="1">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Adaeze Okafor</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>FRACTIONAL CDO · LAGOS, NIGERIA</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Fintech</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Design ops</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>P&L</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Fifteen years across payments and banking. Builds design orgs that defend their budget with numbers.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Adaeze <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-1" src="/images/people/adaeze-okafor.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Global fintech</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Chief Design Officer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Built a 30-person org across 4 markets. Design now reports at board level.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2022 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Payments scale-up</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>VP Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Took design from 4 to 22. Cut release rework by a third.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2018 – 2022</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Design studio</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Founder</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Ran a 12-person studio serving banks across West Africa.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2012 – 2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="2">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Tunde Bakare</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>FRACTIONAL CDO · LAGOS / LONDON</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Marketplaces</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Research</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Hiring</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Led design at two unicorns. Specialises in the zero-to-one design leadership install.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Tunde <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-2" src="/images/people/tunde-bakare.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Marketplace unicorn</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Head of Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>First design executive. Installed measurement and hiring systems.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2021 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Global e-commerce</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Design Director</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Led 3 product areas and the design platform team.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2017 – 2021</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Agency</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Creative Lead</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Brand and product for consumer startups.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2013 – 2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="3">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Zainab Mohammed</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>VP DESIGN · ABUJA, NIGERIA</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Health tech</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Service design</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Gov</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Runs design where the stakes are clinical. Service design across digital and physical care.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Zainab <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-3" src="/images/people/zainab-mohammed.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Health platform</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>VP Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Design leadership across 3 countries and 2 regulators.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2022 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Telco</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Design Manager</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Rebuilt the design system serving 40M subscribers.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2019 – 2022</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>NGO consortium</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Service Designer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Field service design for primary care delivery.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2016 – 2019</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="4">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Kwame Mensah</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>VP DESIGN · ACCRA, GHANA</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>B2B SaaS</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Design systems</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Velocity</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Design systems operator. Makes design output fast, consistent and cheap to maintain.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Kwame <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-4" src="/images/people/kwame-mensah.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>B2B SaaS</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>VP Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Design velocity doubled; headcount flat.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2021 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Banking group</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Principal Designer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>One design system across 9 country apps.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2018 – 2021</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Startup</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>First designer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Everything from brand to front-end.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2015 – 2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="5">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Amara Diallo</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>HEAD OF DESIGN · DAKAR, SENEGAL</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Consumer</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Brand</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Growth</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Consumer growth designer turned leader. Ties brand work directly to acquisition cost.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Amara <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-5" src="/images/people/amara-diallo.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Consumer app</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Head of Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Brand refresh cut CAC 18%.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2022 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Media group</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Design Lead</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Led a 9-person brand and product team.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2019 – 2022</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Freelance</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Brand Designer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Identity systems for 30+ startups.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2016 – 2019</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="6">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Femi Adeyemi</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>HEAD OF DESIGN · LAGOS, NIGERIA</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Logistics</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Ops design</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Data viz</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Designs for operators, not just users. Dashboards, dispatch, and the messy middle of logistics.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Femi <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-6" src="/images/people/femi-adeyemi.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Logistics scale-up</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Head of Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Ops tooling design cut dispatch errors 40%.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2021 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Ride-hailing</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Senior PD</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Driver-side experience across 3 markets.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2018 – 2021</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Consultancy</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Designer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Enterprise data products.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2015 – 2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="7">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Nadia Hassan</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>FRACTIONAL CDO · CAIRO / REMOTE</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Enterprise</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Transformation</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Teams</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Enterprise design transformation. Comfortable with procurement, compliance and 200-page RFPs.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Nadia <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-7" src="/images/people/nadia-hassan.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Enterprise software</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Design Executive</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Design function installed across 5 business units.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2020 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Bank</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Head of CX</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>CX measurement adopted at board level.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2016 – 2020</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Studio</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Design Director</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Led delivery for regional financial clients.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2012 – 2016</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dl-prof" data-prof="8">
            <div style={{padding:"72px 64px",background:"#FDFBF0"}}>
              <button className="dl-back" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",background:"transparent",border:"1px solid rgba(68,6,59,.4)",padding:"10px 18px",letterSpacing:".08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"48px"}}><ArrowIcon direction="left" /> Back to the bench</button>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}}>
                <div>
                  <h2 className="dl-prof-name" style={{font:"400 60px/1.04 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 14px",letterSpacing:"-.02em"}}>Sipho Ndlovu</h2>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".06em",marginBottom:"24px"}}>HEAD OF DESIGN · JOHANNESBURG, SA</div>
                  <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"32px"}}>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Insurance</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Research</span>
                    <span style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#44063B",border:"1px solid rgba(68,6,59,.35)",padding:"7px 14px",letterSpacing:".04em"}}>Compliance</span>
                  </div>
                  <p style={{font:"400 18px/1.6 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 0 40px",maxWidth:"520px"}}>
                    Research-led design in regulated industries. Turns compliance constraints into design advantages.
                  </p>
                  <Link className="dl-btn" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#44063B",background:"#FF7D44",padding:"17px 28px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Engage Sipho <ArrowIcon /></Link>
                </div>
                <ImageSlot id="dl-prof-8" src="/images/people/sipho-ndlovu.webp" style={{width:"100%",height:"420px",display:"block"}} placeholder="Portrait" />
              </div>
            </div>
            <div style={{padding:"96px 64px"}}>
              <h2 style={{font:"400 46px/1.1 'Faculty Glyphic',serif",color:"#44063B",margin:"0 0 40px",letterSpacing:"-.01em"}}>Experience.</h2>
              <div style={{borderTop:"1.5px solid #44063B"}}>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Insurer</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Head of Design</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Claims redesign lifted NPS 22 points.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2022 – present</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>Fintech</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Research Lead</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Built the research practice from zero.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2019 – 2022</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"260px 1fr 180px",gap:"36px",padding:"30px 0",borderBottom:"1px solid rgba(68,6,59,.14)"}}>
                  <div style={{font:"400 20px 'Faculty Glyphic',serif",color:"#44063B"}}>University</div>
                  <div>
                    <div style={{font:"400 16px 'Roboto Flex',sans-serif",color:"#44063B",marginBottom:"8px"}}>Lecturer</div>
                    <p style={{font:"400 16px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.62)",margin:"0"}}>Design methods, part-time.</p>
                  </div>
                  <div style={{font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.55)",justifySelf:"end"}}>2016 – 2019</div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA */}
          <div style={{padding:"120px 64px",background:"#DEDF4D",textAlign:"center"}}>
            <h2 style={{font:"400 60px/1.08 'Faculty Glyphic',serif",color:"#44063B",margin:"0 auto 26px",maxWidth:"820px",letterSpacing:"-.015em",textWrap:"balance"}}>Brief us. Meet a shortlist in two weeks.</h2>
            <p style={{font:"400 18px/1.55 'Roboto Flex',sans-serif",color:"rgba(68,6,59,.78)",margin:"0 auto 38px",maxWidth:"560px"}}>
              Tell us the mandate and meet two or three vetted design leaders matched to your company’s needs.
            </p>
            <Link className="dl-btn" href="/talent-hub#apply" style={{display:"inline-flex",alignItems:"center",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace",color:"#FDFBF0",padding:"18px 32px",textDecoration:"none",letterSpacing:".05em",textTransform:"uppercase",backgroundColor:"#44063B"}}>Brief the Talent Hub <ArrowIcon /></Link>
          </div>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
