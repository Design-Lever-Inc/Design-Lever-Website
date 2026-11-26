import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WhichDoINeed } from "@/components/WhichDoINeed";

export const metadata: Metadata = {
  title: "Africa's first design leadership infrastructure",
  description:
    "Design Lever deploys experienced design leadership, develops future executives, connects senior practitioners, and builds intelligence for Africa's design economy.",
};

const BOOK_CALL_URL = "https://www.conectr.me/s/design-intelligence-call-dh";

/** Hero routes by audience; each tab carries the colour of the line it leads to. */
const HERO_AUDIENCES = [
  { title: "I run a company", copy: "Put senior design leadership to work.", href: "/practice", line: "practice" },
  { title: "I'm a designer", copy: "Grow into design leadership.", href: "/academy", line: "academy" },
  { title: "I fund or research", copy: "Use the evidence on African design.", href: "/research", line: "research" },
] as const;

const BUSINESS_LINES = [
  {
    slug: "practice",
    caption: "Fractional design leadership",
    name: "Practice",
    proposition: "Put experienced design leadership inside companies.",
    description:
      "Fractional Heads of Design, Design Directors, and CDO-level practitioners for defined business outcomes.",
    cta: "For companies",
  },
  {
    slug: "academy",
    caption: "Learning & certification",
    name: "Academy",
    proposition: "Develop designers who can lead beyond the craft.",
    description:
      "Leadership education for designers moving into management and executive responsibility.",
    cta: "For designers",
  },
  {
    slug: "network",
    caption: "Platform & community",
    name: "Network",
    proposition: "Connect senior African talent to opportunities.",
    description:
      "A vetted professional network for leadership, collaboration, community, and fractional work.",
    cta: "Join the network",
  },
  {
    slug: "research",
    caption: "Evidence & documentation",
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
    line: "practice",
    title: "Put experienced design leadership and fractional talent to work.",
    copy: "Access an embedded executive for a defined business outcome, or hire vetted fractional talent through the Network.",
    links: [
      ["/practice", "Explore Practice"],
      ["/talent-hub", "Hire through Network"],
    ],
  },
  {
    label: "For designers",
    line: "academy",
    title: "Build leadership capability and access opportunity.",
    copy: "Develop beyond the craft, join a senior practitioner network, and find meaningful leadership work.",
    links: [
      ["/academy", "Explore Academy"],
      ["/network", "Explore Network"],
    ],
  },
  {
    label: "For institutions",
    line: "research",
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
// Logos render as single-colour plum via a CSS mask over the transparent asset.
const CLIENT_LOGOS = [
  ["2", "Rise", "/images/logos/rise.webp", 26],
  ["3", "Interswitch", "/images/logos/interswitch.webp", 26],
  ["4", "Traction", "/images/logos/traction.webp", 24],
  ["1", "Terragon", "/images/logos/terragon.webp", 40],
  ["6", "Moniepoint", "/images/logos/moniepoint.webp", 34],
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
                <a className="dl-corp-button dl-corp-button--orange" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="dl-corp-text-link dl-corp-text-link--light" href="#system">Explore Design Lever</a>
              </div>
            </div>
            <nav className="dl-corp-hero__map" aria-label="Where to start">
              {HERO_AUDIENCES.map((a) => (
                <Link key={a.href} href={a.href} className={`dl-corp-hero__line dl-corp-hero__line--${a.line}`}>
                  <span className="dl-corp-hero__line-text">
                    <strong>{a.title}</strong>
                    <small>{a.copy}</small>
                  </span>
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
              <span className="dl-corp-eyebrow">Our ecosystem</span>
              <h2 id="corporate-system-title">One company, four connecting lines.</h2>
            </div>
            <div className="dl-corp-flywheel__band-wrap">
            <div className="dl-corp-lines-grid">
              {BUSINESS_LINES.map((line) => (
                <article key={line.slug} className={`dl-corp-line-card dl-corp-line-card--${line.slug}`}>
                  <div className="dl-corp-line-card__head">{line.caption}</div>
                  <h3>{line.name}</h3>
                  <p className="dl-corp-line-card__prop">{line.proposition}</p>
                  <p>{line.description}</p>
                  <Link href={`/${line.slug}`}>
                    {line.cta} <ArrowIcon direction="right" />
                  </Link>
                </article>
              ))}
            </div>
            </div>
          </section>

          <section className="dl-corp-evidence" aria-labelledby="corporate-evidence-title">
            <div className="dl-corp-evidence__copy">
              <span className="dl-corp-eyebrow">Grounded in the market</span>
              <h2 id="corporate-evidence-title">Our leaders have built design teams at these companies.</h2>
            </div>
            <div className="dl-corp-evidence__logos">
              {CLIENT_LOGOS.slice(0, 6).map(([id, name, src, h]) => (
                <div key={id} className="dl-corp-evidence__logo">
                  {src ? (
                    <span
                      className="dl-corp-evidence__logo-img"
                      role="img"
                      aria-label={name}
                      style={{ height: `${h}px`, WebkitMaskImage: `url("${src}")`, maskImage: `url("${src}")` }}
                    />
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
                <article key={audience.label} className={`dl-corp-audience dl-corp-audience--${audience.line}`}>
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

          <WhichDoINeed />

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
