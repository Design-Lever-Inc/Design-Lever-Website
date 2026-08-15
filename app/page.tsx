import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Africa's first design leadership infrastructure",
  description:
    "Design Lever deploys experienced design leadership, develops future executives, connects senior practitioners, and builds intelligence for Africa's design economy.",
};

const BUSINESS_LINES = [
  {
    slug: "practice",
    name: "Practice",
    proposition: "Put experienced design leadership inside companies.",
    description:
      "Fractional Heads of Design, Design Directors, and CDO-level practitioners for defined business outcomes.",
    cta: "For companies",
  },
  {
    slug: "academy",
    name: "Academy",
    proposition: "Develop designers who can lead beyond the craft.",
    description:
      "Leadership education for designers moving into management and executive responsibility.",
    cta: "For designers",
  },
  {
    slug: "network",
    name: "Network",
    proposition: "Connect senior African talent to opportunities.",
    description:
      "A vetted professional network for leadership, collaboration, community, and fractional work.",
    cta: "Join the network",
  },
  {
    slug: "research",
    name: "Research",
    proposition: "Build the evidence behind the African design economy.",
    description:
      "Research and intelligence for companies, practitioners, institutions, funders, and policymakers.",
    cta: "Explore research",
  },
] as const;

const AUDIENCES = [
  {
    label: "For companies",
    title: "Put experienced design leadership and fractional talent to work.",
    copy: "Access an embedded executive for a defined business outcome, or hire vetted fractional talent through the Network.",
    links: [
      ["/practice", "Explore Practice"],
      ["/network", "Hire through Network"],
    ],
  },
  {
    label: "For designers",
    title: "Build leadership capability and access opportunity.",
    copy: "Develop beyond the craft, join a senior practitioner network, and find meaningful leadership work.",
    links: [
      ["/academy", "Explore Academy"],
      ["/network", "Explore Network"],
    ],
  },
  {
    label: "For institutions",
    title: "Understand and strengthen the design economy.",
    copy: "Use the evidence, partner on research, and help document design's contribution across Africa.",
    links: [
      ["/research", "Explore Research"],
      ["/contact", "Partner with us"],
    ],
  },
] as const;

// Optical sizing: real logos carry different weights and baked-in padding, so
// each is tuned to read at the same visual size rather than a uniform height.
const CLIENT_LOGOS = [
  ["2", "Rise", "/images/logos/rise.webp", 26],
  ["3", "Interswitch", "/images/logos/interswitch.webp", 26],
  ["4", "Traction", "/images/logos/traction.webp", 24],
  ["1", "Terragon", "/images/logos/terragon.webp", 40],
  ["6", "Moniepoint", "/images/logos/moniepoint.webp", 28],
  ["7", "Lemfi", "/images/logos/lemfi.webp", 22],
  ["5", "Nomba", "/images/logos/nomba.webp", 26],
] as const;

export default function CorporateHomePage() {
  return (
    <div className="pg-corporate-home">
      <div className="dl-corp-canvas">
        <SiteNav active="home" />

        <main>
          <section className="dl-corp-hero" aria-labelledby="corporate-hero-title">
            <div className="dl-corp-hero__copy">
              <span className="dl-corp-eyebrow">Make Design count</span>
              <h1 id="corporate-hero-title">Africa&apos;s first design leadership infrastructure.</h1>
              <p>
                We are championing and building the structural and leadership systems required to make design drive revenue and operational value in African businesses.
              </p>
              <div className="dl-corp-actions">
                <a className="dl-corp-button dl-corp-button--orange" href="#system">Explore Design Lever</a>
                <Link className="dl-corp-text-link dl-corp-text-link--light" href="/practice">Work with us</Link>
              </div>
            </div>
            <nav className="dl-corp-hero__map" aria-label="Design Lever business lines">
              {BUSINESS_LINES.map((line) => (
                <Link key={line.slug} href={`/${line.slug}`} className={`dl-corp-hero__line dl-corp-hero__line--${line.slug}`}>
                  <span>{line.name}</span>
                  <ArrowIcon />
                </Link>
              ))}
            </nav>
          </section>

          <section className="dl-corp-problem" aria-labelledby="corporate-problem-title">
            <div>
              <span className="dl-corp-eyebrow">Why we exist</span>
              <h2 id="corporate-problem-title">Africa has design talent. The leadership infrastructure has not kept pace.</h2>
            </div>
            <div className="dl-corp-problem__points">
              <p>Companies struggle to find experienced design leadership.</p>
              <p>Experienced designers have limited pathways into management and executive roles.</p>
              <p>Knowledge about how to build and operate design functions remains fragmented.</p>
              <p>The economic contribution of African design remains poorly documented.</p>
            </div>
          </section>

          <section id="system" className="dl-corp-flywheel" aria-labelledby="corporate-system-title">
            <div className="dl-corp-flywheel__head">
              <span className="dl-corp-eyebrow" style={{color:"#44063B"}}>Our ecosystem</span>
              <h2 id="corporate-system-title">One company, four connecting lines.</h2>
            </div>
            <div className="dl-corp-flywheel__band-wrap">
              <div className="dl-band">
                <ArrowIcon className="dl-corp-flywheel__arrow" direction="right" />
                <div className="dl-lines">
                  <Link className="dl-line" href="/practice" style={{"--c":"#21B58B","--ink":"#44063B"} as CSSProperties}>
                    <div className="dl-lname">Practice</div>
                    <div className="dl-lwrite">
                      <div className="dl-lwrite-in">
                        <h3 className="dl-lprop">{BUSINESS_LINES[0].proposition}</h3>
                        <p className="dl-lblurb">{BUSINESS_LINES[0].description}</p>
                        <span className="dl-lgo">{BUSINESS_LINES[0].cta}</span>
                      </div>
                    </div>
                    <div className="dl-lcap">Fractional Design Leadership</div>
                  </Link>
                  <Link className="dl-line" href="/academy" style={{"--c":"#FF7D44","--ink":"#44063B"} as CSSProperties}>
                    <div className="dl-lname">Academy</div>
                    <div className="dl-lwrite">
                      <div className="dl-lwrite-in">
                        <h3 className="dl-lprop">{BUSINESS_LINES[1].proposition}</h3>
                        <p className="dl-lblurb">{BUSINESS_LINES[1].description}</p>
                        <span className="dl-lgo">{BUSINESS_LINES[1].cta}</span>
                      </div>
                    </div>
                    <div className="dl-lcap">Learning &amp; certification</div>
                  </Link>
                  <Link className="dl-line" href="/network" style={{"--c":"#DEDF4D","--ink":"#44063B"} as CSSProperties}>
                    <div className="dl-lname">Network</div>
                    <div className="dl-lwrite">
                      <div className="dl-lwrite-in">
                        <h3 className="dl-lprop">{BUSINESS_LINES[2].proposition}</h3>
                        <p className="dl-lblurb">{BUSINESS_LINES[2].description}</p>
                        <span className="dl-lgo">{BUSINESS_LINES[2].cta}</span>
                      </div>
                    </div>
                    <div className="dl-lcap">Platform &amp; community</div>
                  </Link>
                  <Link className="dl-line" href="/research" style={{"--c":"#4F83FF","--ink":"#44063B"} as CSSProperties}>
                    <div className="dl-lname">Research</div>
                    <div className="dl-lwrite">
                      <div className="dl-lwrite-in">
                        <h3 className="dl-lprop">{BUSINESS_LINES[3].proposition}</h3>
                        <p className="dl-lblurb">{BUSINESS_LINES[3].description}</p>
                        <span className="dl-lgo">{BUSINESS_LINES[3].cta}</span>
                      </div>
                    </div>
                    <div className="dl-lcap">Evidence &amp; documentation</div>
                  </Link>
                </div>
                <div className="dl-imgcol">
                  <ImageSlot className="dl-img dl-img-1" id="dl-fly-1" src="/images/scenes/fly-practice.webp" style={{display:"block"}} placeholder="Practice, a design leader at work" />
                  <ImageSlot className="dl-img dl-img-2" id="dl-fly-2" src="/images/scenes/fly-academy.webp" style={{display:"block"}} placeholder="Academy, a cohort learning" />
                  <ImageSlot className="dl-img dl-img-3" id="dl-fly-3" src="/images/scenes/fly-network.webp" style={{display:"block"}} placeholder="Network, the community" />
                  <ImageSlot className="dl-img dl-img-4" id="dl-fly-4" src="/images/scenes/fly-research.webp" style={{display:"block"}} placeholder="Research, the report" />
                </div>
              </div>
            </div>
          </section>

          <section className="dl-corp-evidence" aria-labelledby="corporate-evidence-title">
            <div className="dl-corp-evidence__copy">
              <span className="dl-corp-eyebrow">Grounded in the market</span>
              <h2 id="corporate-evidence-title">Design leadership experience across teams.</h2>
            </div>
            <div className="dl-corp-evidence__logos">
              {CLIENT_LOGOS.slice(0, 6).map(([id, name, src, h]) => (
                <div key={id} className="dl-corp-evidence__logo">
                  {src ? (
                    <img className="dl-corp-evidence__logo-img" src={src} alt={name} style={{ maxHeight: `${h}px` }} />
                  ) : (
                    <span className="dl-corp-evidence__logo-ph">{name}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="dl-corp-audiences" aria-labelledby="corporate-audiences-title">
            <div className="dl-corp-section-head dl-corp-section-head--wide">
              <span className="dl-corp-eyebrow">Find your place in the system</span>
              <h2 id="corporate-audiences-title">Different audiences enter Design Lever for different reasons.</h2>
            </div>
            <div className="dl-corp-audiences__grid">
              {AUDIENCES.map((audience) => (
                <article key={audience.label} className="dl-corp-audience">
                  <span>{audience.label}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.copy}</p>
                  <div>
                    {audience.links.map(([href, label]) => (
                      <Link key={href} href={href}>{label}</Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="dl-corp-cta" aria-labelledby="corporate-cta-title">
            <span className="dl-corp-eyebrow">Build with us</span>
            <h2 id="corporate-cta-title">Help build Africa&apos;s design leadership infrastructure.</h2>
            <p>Work with Design Lever as a company, practitioner, educator, researcher, funder, or institutional partner.</p>
            <div className="dl-corp-actions dl-corp-actions--center">
              <Link className="dl-corp-button dl-corp-button--plum" href="/contact">Start a conversation</Link>
              <Link className="dl-corp-text-link" href="/about">About Design Lever</Link>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
