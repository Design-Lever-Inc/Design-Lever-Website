# Design Lever Design System

Design system for **Design Lever Inc.** — Africa's first fractional design leadership company (designleverinc.com). Source of truth: the live website pages in this project (`Design Lever Home.dc.html`, `Design Lever Network.dc.html`, `Design Lever Academy.dc.html` and 12 sibling pages). No external Figma/codebase was provided.

Products represented: the marketing website (Home, Academy + 2 tracks, Faculty, Network, The Lever, Talent Hub + Bench, Research, Article, About, Careers, Press) and the Diagnostic tool.

## CONTENT FUNDAMENTALS

- **Matter-of-fact, high-impact, few words.** Max 3 lines for headlines AND body copy. No filler.
- Sentences end strong. Never end on dependent clauses or weak endings ("…has never had", "…that need them"). Good: "Design leadership infrastructure, built for African business."
- **No em-dashes.** Use commas or full stops.
- Second person for the reader, first person plural for the company ("We install it, certify it, and publish the return").
- Headlines: sentence case with a full stop ("Faculty.", "The case, in numbers.")
- Eyebrows: MONO UPPERCASE, short ("THE ROSTER", "FAQs", "IN THEIR WORDS").
- Numbers do the arguing: "₦25–60M in Year 1", "40% failure rate". Always sourced.
- No emoji, ever.
- CTAs are verbs with an arrow: "Book a call →", "Work with us →", "See full faculty →".

## VISUAL FOUNDATIONS

- **Colors:** cream (#FDFBF0) page base; plum (#44063B) is the type + stroke color; orange (#FF6D35) is THE accent (eyebrows, active nav, icons, primary CTA bg, active filter/segment). Feature sections rotate: slate #14191D, deep plum #2A0A25, pink #FFBCE8, chartreuse #DEDF4D, blue #3B6FEB, orange. RULE: no two adjacent sections share a background (cream may repeat). FAQs always sit on cream. Labels are always orange, never chartreuse.
- **TEXT-ON-BACKGROUND CONTRAST (hard rule).** Every surface is either LIGHT or DARK, and text/stroke color follows the *surface*, never the section's theme. LIGHT (cream, pink, chartreuse, orange) → plum text. DARK (plum, deep-plum, slate, blue) → cream text. Orange is an accent on light surfaces (eyebrows/labels/active states), and eyebrows stay orange on dark too. The recurring bug is light text (#FDFBF0) left on a light surface (pink/cream) — pull-quotes, "Contribute" strips, testimonial quotes: always re-check the quote/heading color when a section's background changes.
- **Type:** Faculty Glyphic (display serif) for headlines/figures/names; Inter Tight for body; Spline Sans Mono for eyebrows, labels, buttons, data. Hero H1 82–96px (96px on full-bleed color heroes), section H2 46–52px, card H3 24px, stat figures 56–68px, body 15px/1.6. Eyebrow: 11px mono, .14em tracking, uppercase, orange.
- **Corners: ZERO radius, everywhere.** Squares only — buttons, cards, swatches, image slots, slider thumbs.
- **Borders:** hairlines rgba(68,6,59,.16) on cream, rgba(253,251,240,.2) on dark. Strong dividers are 1.5px solid plum above list blocks.
- **Spacing:** 1440px canvas, 64px horizontal gutter everywhere (nav, footer, full-bleed bands included — nothing bleeds past the gutter). Sections 104–120px vertical. Grids: 4 columns / 24px gap (rosters, kits), 3 columns (stats, how-it-works, press numbers), split layouts .75fr/1.25fr or 1.1fr/.9fr with 64px gap. Responsive: multi-col grids collapse to 2 then 1; footer link grid 3→2→stacked.
- **Hero illustration:** single-stroke radial geometry, 1px plum stroke. IDENTICAL box on every hero: 620×620px, `position:absolute; top:-90px; right:-150px; opacity:.9`, cropped by the section (`overflow:hidden`), `pointer-events:none`. Motif varies per page and should *represent the page* (radial on Home, node-graph on Network/The Lever, lever-and-fulcrum on About, bar-chart on Research) but position/size/stroke never change. DASH RULE: **one uniform dash for every motif stroke on every page — `stroke-dasharray: 4 8`** — regardless of shape or size. Never mix dash lengths within or across motifs.
- **Backgrounds:** flat color blocks only. No gradients, no textures, no photography as background. Photography lives in square `image-slot` placeholders.
- **Animation:** small and functional. 0.15s color/border transitions on hover; 0.4s opacity fades for testimonial slides (auto-advance every 5.5s); logo marquee 30s linear infinite, pauses on hover. No bounces, no parallax.
- **Hover states:** color shifts, not shadows. Nav links → orange. Primary CTA → plum bg. Outline buttons fill with plum. Filter pills: active = solid ORANGE, cream text.
- **Shadows:** none, except the nav dropdown panel (0 30px 70px -24px rgba(42,4,36,.6)). Cards are hairline-bordered, flat.
- **Imagery:** square-cornered image slots with mono placeholder labels. Portraits ~300px tall in grids, 420px in profiles, 460px full-width hero images. Marketing pages carry a full-bleed hero image band directly below the hero.
- **Sliders:** 1.5px hairline track, 13px square cream thumb, mono label left / value right.
- **Layout fixtures:** sticky nav (top:0, z-50, cream, hairline bottom border); logo (logo-full.png, 27.6px tall) left, menu pushed right against the orange CTA. Page order rule: …content → CTA banner → FAQs → footer.

## COMPONENT PATTERNS & CONVENTIONS

Reusable section patterns, standardized across all pages (change one, change all):

- **Footer (canonical, identical on every page):** plum (#44063B) bg. Two-part grid `1fr auto` with 77px gap — left column = eyebrow + big headline + Book-a-call (orange, plum text) / Take-the-diagnostic (outline) buttons; right = link columns `1fr 1fr 1fr` / 40px×72px gap, `justify-self:end`, five columns (For companies, Network, Academy, Research, More; "Contact us" lives in More). Sub-row: uppercase social links (LinkedIn/X/Twitter/Instagram) + © line. Collapses at 900px (single col) and 600px (2-col links).
- **Testimonial slider (pink or dark section):** eyebrow "IN THEIR WORDS" + prev/next arrows top row; big Faculty-Glyphic quote; author row = square initials box + role/org on the LEFT with the dots aligned RIGHT on the same row (`justify-content:space-between`). Auto-advances every 5.5s; arrows + dots also drive it; 0.4s fade between slides. On dark sections, arrows/dots/text go cream (set `data-dotink` for dot active color).
- **Filter bar:** sticky mono pills; active pill = solid orange + cream text + orange border; inactive = transparent + plum + hairline; hover = orange text/border. Filtering hides non-matching items in place (CSS attribute selector on a wrapper).
- **Article / spotlight page top:** `← ALL RESOURCES` back-label (orange mono) as `display:inline-block` with a 40px bottom margin (hard rule) before the H1; spotlight eyebrow, if present, sits between with no extra top margin. Byline row (author · read time · year) below the H1. Body is a `minmax(0,760px) 1fr` split with a sticky TOC aside; pull-quotes are plum with a 3px orange left border (never light text on cream). Every article ends with a pink "Contribute" strip (plum heading) → CTA → footer.
- **Hero (marketing page):** flat color band, single-stroke motif in the top-right corner, single `max-width:920px` content column (eyebrow → H1 → lede → button row), followed by a full-bleed image band.

## ICONOGRAPHY

- Hand-drawn-feel **single-stroke SVG icons**, 24×24 viewBox, 1.4px stroke, orange (#FF6D35), no fill, square caps. Used before sub-topic headings (26px) and in membership rows (24px).
- The logo is a 100×100 stroked mark (square + arc + cross lines), 4px stroke; plum on light, cream on dark. Files: `assets/logo.svg`, `assets/logo-on-dark.svg`.
- Arrows are text glyphs (→ ↗ ← +), not SVG. No icon font, no emoji.
- `assets/hero-illustration.svg` is the canonical radial hero geometry.

## INDEX

- `styles.css` → imports `tokens/colors.css`, `tokens/typography.css`, `tokens/layout.css`
- `assets/` — logo.svg, logo-on-dark.svg, logo-full.png, hero-illustration.svg
- `components/core/` — Button, Eyebrow, FilterPill, StatBlock, SectionHeader, FaqItem (jsx + d.ts + prompt.md each)
- `ui_kits/website/` — interactive Home-page recreation (`index.html`, tagged as a Website card + Starting Point) + README
- `guidelines/` — specimen cards rendered in the Design System tab
- `SKILL.md` — agent skill entry point
- Live reference pages: the fifteen `Design Lever *.dc.html` files in the project root

Note: fonts load from Google Fonts (Faculty Glyphic, Inter Tight, Spline Sans Mono) via @import in tokens/typography.css; no font binaries are stored.
