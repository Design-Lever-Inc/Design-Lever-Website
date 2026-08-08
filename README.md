# Design Lever Inc.: Website

Marketing/brand website for **Design Lever Inc.** (designleverinc.com), Africa's first
fractional design leadership company. 23 pages: marketing pages, 4 long-form articles,
4 spotlight interviews, and the interactive cost Diagnostic.

Built from the Claude Design handoff (`design_handoff_design_lever_website`): the
design references, tokens, and screenshots live in [design/](design/).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Static export** (`output: "export"`): no backend, deploys to Vercel or any CDN
- Plain CSS: design tokens as CSS custom properties ([app/globals.css](app/globals.css)),
  plus the merged prototype stylesheet ([styles/prototype.css](styles/prototype.css))
- Fonts from Google Fonts: Faculty Glyphic (display), Inter Tight (body),
  Spline Sans Mono (eyebrows/labels/buttons)

## Commands

```bash
npm install
npm run dev     # dev server
npm run build   # static export -> out/
```

## Structure

- `app/`: one route per page (`/`, `/academy`, `/academy/foundation`, `/academy/executive`,
  `/faculty`, `/network`, `/the-lever`, `/talent-hub`, `/bench`, `/research`, `/about`,
  `/careers`, `/press`, `/contact`, `/diagnostic`, `/articles/*` ×4, `/spotlights/*` ×4)
- `components/`
  - `SiteNav`: canonical sticky nav (dropdowns, active section, orange CTA)
  - `SiteFooter`: canonical footer (identical on every page)
  - `ImageSlot`: square-cornered image placeholder (photography is user-supplied);
    pass `src` to fill a slot with a real image
  - `SiteBehaviors`: site-wide declarative widget drivers (testimonial sliders,
    filter pills, Bench roster/profile), ported from the prototype scripts
  - `ScrollRestore`: per-page scroll persistence (sessionStorage)
- `styles/prototype.css`: generated: all prototype `<style>` blocks merged; rules that
  vary per page are scoped under `.pg-<slug>` body classes
- `scripts/convert.py`: the one-shot codegen that converted the handoff prototypes to
  these pages (kept for provenance; not needed at runtime)
- `design/`: design system reference (tokens, written rules, component specs) and
  full-page screenshots for visual regression checks

## Design rules (from the design system: do not break)

- **Contrast hard rule**: LIGHT surfaces (cream/pink/chartreuse/orange) → plum text;
  DARK surfaces (plum/deep-plum/slate/blue) → cream text. Eyebrows always orange.
- **Zero border radius everywhere.** Flat colors only, no gradients/shadows
  (nav dropdown shadow is the one exception).
- Hero motif: 620×620 at `top:-90px; right:-150px`, 1px plum stroke,
  uniform dash `4 8` on every motif stroke.
- Hovers are color/border shifts only, 0.15s. No bounces, no parallax.
- Articles: `← ALL RESOURCES` back-label with exactly 40px gap before the H1.

## Known gaps (need real content)

- **Photography**: pages render square `ImageSlot` placeholders; drop real images in
  `public/` and pass `src` to fill them.
- **Article/spotlight hero patterns**: the handoff referenced `assets/img/*.png` files
  that weren't included; they're recreated as SVG patterns in `public/assets/img/`
  matching the handoff screenshots.
- **Forms**: contact form opens `https://tally.so/r/GENERAL` (prototype placeholder :
  replace with real Tally form IDs); modal forms show a local thank-you state, not wired
  to a backend.
- `public/downloads/`: the Design Health Checklist PDF linked from Research isn't in
  the handoff.
