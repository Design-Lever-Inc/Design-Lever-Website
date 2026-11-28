import { sanityFetch } from "@/sanity/lib/fetch";
import { RESEARCH_QUERY } from "@/sanity/lib/queries";
import { ResearchPage, type ResearchContent } from "./ResearchPage";

const EMPTY: ResearchContent = { articles: [], spotlights: [], reports: [] };

/** The research library. Articles, spotlights and reports come from Sanity. */
export default async function Page() {
  return <ResearchPage {...await sanityFetch<ResearchContent>(RESEARCH_QUERY, {}, EMPTY)} />;
}
