import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { readToken } from "@/sanity/lib/fetch";

/** Called by the Studio's Preview tab. Sanity signs each request, so only a
 *  signed-in editor can switch the site into showing unpublished drafts. */
export const { GET } = defineEnableDraftMode({ client: client.withConfig({ token: readToken }) });
