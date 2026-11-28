/** Client-side search for the footer search. Site pages are listed here by
 *  hand; articles and spotlights come from Sanity through /search-index.json,
 *  so a newly published piece is searchable without a code change. Search runs
 *  entirely in the browser over title + description + keyword tags. */

export type SearchType = "Article" | "Spotlight" | "Page";

export interface SearchEntry {
  title: string;
  href: string;
  type: SearchType;
  description: string;
  keywords: string[];
}

export const PAGE_INDEX: SearchEntry[] = [
  // ---- Key pages ----
  {
    title: "Research",
    href: "/research",
    type: "Page",
    description: "Reports, white papers, playbooks and open data on the design ROI evidence base.",
    keywords: ["research", "reports", "white papers", "playbooks", "data", "evidence", "roi", "journal"],
  },
  {
    title: "The Diagnostic",
    href: "/diagnostic",
    type: "Page",
    description: "Estimate what a broken design function is costing you, in naira.",
    keywords: ["diagnostic", "cost", "calculator", "naira", "rework", "attrition", "estimate"],
  },
  {
    title: "Academy",
    href: "/academy",
    type: "Page",
    description: "The Certified Design Leader programme: Foundation and Executive tracks.",
    keywords: ["academy", "training", "certified", "design leader", "course", "cohort", "programme", "learn"],
  },
  {
    title: "Academy · Foundation track",
    href: "/academy/foundation",
    type: "Page",
    description: "Design leadership fundamentals and the commercial framing of design.",
    keywords: ["foundation", "academy", "fundamentals", "training", "cohort", "course"],
  },
  {
    title: "Academy · Executive track",
    href: "/academy/executive",
    type: "Page",
    description: "Advanced design operations and fractional practice for senior practitioners.",
    keywords: ["executive", "academy", "design operations", "fractional", "senior", "course"],
  },
  {
    title: "Faculty",
    href: "/faculty",
    type: "Page",
    description: "The roster of working senior design leaders who teach the Academy.",
    keywords: ["faculty", "teachers", "mentors", "advisors", "roster", "practitioners"],
  },
  {
    title: "Network",
    href: "/network",
    type: "Page",
    description: "Structured placement for the continent's design leadership, diaspora included.",
    keywords: ["network", "placement", "roster", "companies", "matching", "diaspora"],
  },
  {
    title: "The Lever · Community",
    href: "/the-lever",
    type: "Page",
    description: "A professional home for serious design leaders.",
    keywords: ["the lever", "community", "membership", "leaders", "join"],
  },
  {
    title: "Talent Hub",
    href: "/talent-hub",
    type: "Page",
    description: "Fractional design executives, on demand, matched to your mandate.",
    keywords: ["talent hub", "fractional", "executives", "hire", "bench", "cdo", "vp design"],
  },
  {
    title: "The Bench",
    href: "/bench",
    type: "Page",
    description: "Browse the executive bench of fractional design leaders across Africa.",
    keywords: ["bench", "executives", "fractional", "roster", "cdo", "vp design", "hire"],
  },
  {
    title: "About",
    href: "/about",
    type: "Page",
    description: "Design Lever's mission to make design count for African business.",
    keywords: ["about", "mission", "team", "manifesto", "company", "story"],
  },
  {
    title: "Careers",
    href: "/careers",
    type: "Page",
    description: "Build the design leadership layer African businesses run on.",
    keywords: ["careers", "jobs", "hiring", "work", "join", "openings"],
  },
  {
    title: "Press",
    href: "/press",
    type: "Page",
    description: "Press, media and the facts behind Design Lever.",
    keywords: ["press", "media", "news", "coverage", "facts"],
  },
  {
    title: "Contact",
    href: "/contact",
    type: "Page",
    description: "Get in touch with Design Lever.",
    keywords: ["contact", "email", "get in touch", "enquiry", "book a call"],
  },
  {
    title: "Privacy policy",
    href: "/privacy",
    type: "Page",
    description: "How we collect, use and protect your personal data.",
    keywords: ["privacy", "data", "gdpr", "ndpa", "policy", "cookies"],
  },
  {
    title: "Terms of use",
    href: "/terms",
    type: "Page",
    description: "The terms that govern your use of the site.",
    keywords: ["terms", "legal", "conditions", "use", "policy"],
  },
];

/** Score an entry against the query tokens. Title hits weigh most, then
 *  keyword hits, then description. Returns 0 when nothing matches. */
function scoreEntry(entry: SearchEntry, tokens: string[], raw: string): number {
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const keys = entry.keywords.join(" ").toLowerCase();
  let score = 0;

  // whole-query phrase match in the title is the strongest signal
  if (title.includes(raw)) score += 8;

  for (const t of tokens) {
    if (title.includes(t)) score += 4;
    if (keys.includes(t)) score += 3;
    if (desc.includes(t)) score += 1;
  }
  // nudge articles/spotlights up a touch: the footer search is content-first
  if (score > 0 && entry.type !== "Page") score += 0.5;
  return score;
}

export function searchEntries(query: string, content: SearchEntry[] = [], limit = 8): SearchEntry[] {
  const raw = query.trim().toLowerCase();
  if (raw.length < 2) return [];
  const tokens = raw.split(/\s+/).filter(Boolean);
  return [...content, ...PAGE_INDEX].map((entry) => ({ entry, score: scoreEntry(entry, tokens, raw) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
