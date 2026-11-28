/**
 * One-off import of the content that used to be hand-coded in the site:
 * 4 articles, 4 spotlights and the 6 research reports, from
 * scripts/legacy-content.json, plus their images from public/assets/img.
 *
 * Run with the CLI's login (no token to manage):
 *   npx sanity exec scripts/migrate-legacy-content.mjs --with-user-token
 *
 * Safe to re-run: document IDs are fixed, so it replaces rather than duplicates.
 */
import fs from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-10-01" });
const root = process.cwd();
const { posts, reports } = JSON.parse(fs.readFileSync(path.join(root, "scripts/legacy-content.json"), "utf8"));

let n = 0;
const key = () => `k${(n++).toString(36).padStart(4, "0")}`;
const migrated = {
  status: "published",
  submittedBy: "Imported from the original site",
  approvedBy: "Imported from the original site",
  publishedBy: "Imported from the original site",
  lastPublishedAt: new Date().toISOString(),
};

const imageCache = new Map();
async function image(publicPath) {
  if (!imageCache.has(publicPath)) {
    const file = path.join(root, "public", publicPath);
    const asset = await client.assets.upload("image", fs.createReadStream(file), { filename: path.basename(file) });
    imageCache.set(publicPath, asset._id);
  }
  return { _type: "image", asset: { _type: "reference", _ref: imageCache.get(publicPath) } };
}

const block = ({ style, text }) => ({
  _type: "block",
  _key: key(),
  style,
  markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});

const tx = client.transaction();
for (const p of posts) {
  tx.createOrReplace({
    _id: `${p._type}-${p.slug}`,
    _type: p._type,
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    standfirst: p.standfirst,
    heroImage: { ...(await image(p.heroImage)), alt: "" },
    byline: p.byline,
    readingMinutes: p.readingMinutes,
    publishedAt: `${p.year}-01-01`,
    body: p.body.map(block),
    cardLabel: p.cardLabel,
    ...(p.cardTitle ? { cardTitle: p.cardTitle } : {}),
    cardSummary: p.cardSummary,
    order: p.order,
    keywords: p.keywords,
    review: migrated,
  });
}
reports.forEach((r, i) => {
  tx.createOrReplace({
    _id: `report-${i + 1}`,
    _type: "report",
    title: r.title,
    format: r.format,
    summary: r.summary,
    stage: r.stage,
    actionLabel: r.actionLabel,
    order: r.order,
    flagship: r.flagship,
    ...(r.publishedAt ? { publishedAt: r.publishedAt } : {}),
    ...(r.flagshipDetails
      ? { flagshipDetails: { ...r.flagshipDetails, facts: r.flagshipDetails.facts.map((f) => ({ _key: key(), ...f })) } }
      : {}),
    review: migrated,
  });
});

const res = await tx.commit();
console.log(`Imported ${res.results.length} documents and ${imageCache.size} images.`);
