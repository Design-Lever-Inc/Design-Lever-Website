import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

/** The editing Studio. Sign-in is handled by Sanity, so only invited project
 *  members can see or change anything here. */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
