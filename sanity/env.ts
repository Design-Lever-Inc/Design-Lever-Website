/** Sanity connection settings. The project ID and dataset are public; the
 *  read token (for previews) and webhook secret stay server-side. */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-10-01";
export const studioUrl = "/studio";

/** False until the project ID is set, so a build without Sanity still runs. */
export const sanityConfigured = projectId.length > 0;
