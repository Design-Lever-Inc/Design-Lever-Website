import Link from "next/link";
import type { Metadata } from "next";
import { PortableText, stegaClean, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowIcon } from "@/components/ArrowIcon";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, articleMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { imageUrl } from "@/sanity/lib/image";
import { postPath, type Post } from "@/sanity/lib/queries";

/** The article and spotlight page, filled from Sanity. The markup and inline
 *  styles match the original hand-built pages, so the CSS (including the
 *  mobile rules that key off inline styles) applies unchanged. */

const P = { font: "400 16px/1.75 'Roboto Flex',sans-serif", color: "rgba(68,6,59,.78)", margin: "0 0 26px" } as const;

const plainText = (block: PortableTextBlock) =>
  stegaClean(
    ((block.children as { text?: string }[] | undefined) ?? []).map((c) => c.text ?? "").join(""),
  );

const anchorFor = (text: string) =>
  "a-" + text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p style={P}>{children}</p>,
    h2: ({ children, value }) => (
      <h2
        id={anchorFor(plainText(value))}
        style={{ font: "400 24px/1.2 'Faculty Glyphic',serif", color: "#44063B", margin: "48px 0 20px", letterSpacing: "-.01em" }}
      >
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{ font: "400 24px/1.3 'Faculty Glyphic',serif", color: "#44063B", margin: "44px 0", paddingLeft: "28px", borderLeft: "3px solid #FF7D44", letterSpacing: "-.01em" }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ ...P, paddingLeft: "22px" }}>{children}</ul>,
    number: ({ children }) => <ol style={{ ...P, paddingLeft: "22px" }}>{children}</ol>,
  },
  listItem: ({ children }) => <li style={{ marginBottom: "8px" }}>{children}</li>,
  marks: {
    link: ({ children, value }) => {
      const href = stegaClean((value as { href?: string })?.href ?? "#");
      const external = /^https?:/.test(href);
      return (
        <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})} style={{ color: "#44063B", textDecoration: "underline", textUnderlineOffset: "3px" }}>
          {children}
        </a>
      );
    },
  },
};

const headline = (title: string) => (/[.?!]$/.test(stegaClean(title)) ? title : `${title}.`);

function seoOf(post: Post) {
  return {
    title: stegaClean(post.seo?.title || post.title),
    description: stegaClean(post.seo?.description || post.standfirst),
    path: postPath(post._type, stegaClean(post.slug)),
    image: post.seo?.image ? imageUrl(post.seo.image).width(1200).height(630).url() : undefined,
    publishedAt: stegaClean(post.publishedAt),
    modifiedAt: post._updatedAt,
  };
}

export function postMetadata(post: Post): Metadata {
  return articleMetadata(seoOf(post));
}

export function PostPage({ post }: { post: Post }) {
  const seo = seoOf(post);
  const shareUrl = encodeURIComponent(`${SITE_URL}${seo.path}`);
  const sections = post.body.filter((b) => b._type === "block" && b.style === "h2").map(plainText);
  const year = stegaClean(post.publishedAt)?.slice(0, 4);

  return (
    <div className="pg-post">
      <JsonLd data={articleJsonLd(seo)} />
      <div style={{maxWidth:"1440px",margin:"0 auto",background:"#FDFBF0",overflowX:"clip"}}>
        {/* NAV */}
        <SiteNav active="research" />
        {/* ARTICLE HERO */}
        <div style={{padding:"110px 64px 0",maxWidth:"900px"}}>
          <Link href="/research" style={{font:"400 11px 'Spline Sans Mono',monospace",color:"#FF7D44",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",marginBottom:"40px"}}><ArrowIcon direction="left" /> All resources</Link>
          <h1 style={{font:"400 60px/1.06 'Faculty Glyphic',serif",color:"#44063B",letterSpacing:"-.02em",margin:"0 0 32px",textWrap:"balance"}}>{headline(post.title)}</h1>
          <div style={{display:"flex",gap:"28px",alignItems:"center",font:"400 12px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.6)",letterSpacing:".02em"}}>
            <span>{post.byline}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            <span>·</span>
            <span>{year}</span>
          </div>
        </div>
        {post.heroImage && (
          <div style={{padding:"56px 64px 0"}}>
            <img src={imageUrl(post.heroImage).width(1800).url()} alt={stegaClean(post.heroImage.alt) || ""} style={{width:"100%",height:"460px",display:"block",objectFit:"cover"}} />
          </div>
        )}
        {/* ARTICLE BODY */}
        <div style={{padding:"72px 64px 40px",display:"grid",gridTemplateColumns:"minmax(0,760px) 1fr",gap:"72px",alignItems:"start"}}>
          <div>
            <p id="a-overview" style={{font:"400 20px/1.55 'Roboto Flex',sans-serif",color:"#44063B",margin:"0 0 32px"}}>
              {post.standfirst}
            </p>
            <PortableText value={post.body} components={components} />
          </div>
          <aside style={{position:"sticky",top:"100px"}}>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"16px"}}>In this piece</div>
            <nav className="dl-toc" style={{display:"flex",flexDirection:"column"}}>
              <a href="#a-overview">Overview</a>
              {sections.map((s) => (
                <a key={s} href={`#${anchorFor(s)}`}>{s}</a>
              ))}
            </nav>
            <div style={{font:"400 11px 'Spline Sans Mono',monospace",color:"rgba(68,6,59,.5)",letterSpacing:".12em",textTransform:"uppercase",margin:"34px 0 14px"}}>Share</div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",font:"400 12px 'Spline Sans Mono',monospace"}}>
              <a className="dl-link" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>LinkedIn <ArrowIcon /></a>
              <a className="dl-link" href={`https://x.com/intent/post?url=${shareUrl}`} target="_blank" rel="noopener" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>X / Twitter <ArrowIcon /></a>
              <Link className="dl-link" href="/contact" style={{color:"#44063B",textDecoration:"none",letterSpacing:".04em"}}>Email <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
        {/* CONTRIBUTE STRIP */}
        <div style={{padding:"64px",background:"#FFBCE8",margin:"40px 64px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}>
          <div style={{font:"400 24px/1.15 'Faculty Glyphic',serif",color:"#44063B",maxWidth:"520px"}}>This essay draws on the open dataset. Add your numbers to it.</div>
          <Link href="/research#data" style={{font:"400 12px 'Spline Sans Mono',monospace",color:"#FF7D44",background:"#FDFBF0",padding:"16px 26px",textDecoration:"none",letterSpacing:".04em",textTransform:"uppercase"}}>Contribute to the research <ArrowIcon /></Link>
        </div>
        {/* FOOTER */}
        <SiteFooter />
      </div>
    </div>
  );
}
