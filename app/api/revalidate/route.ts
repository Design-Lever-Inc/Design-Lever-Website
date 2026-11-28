import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { CONTENT_TAG } from "@/sanity/lib/fetch";

/** Sanity webhook: fires when content is published, changed or unpublished.
 *  The request is signed with SANITY_REVALIDATE_SECRET; anything unsigned is
 *  refused. Clearing the tag makes every Sanity-backed page rebuild on its
 *  next visit. */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ error: "Not configured" }, { status: 500 });
  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret, true);
  if (!isValidSignature) return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  revalidateTag(CONTENT_TAG);
  return NextResponse.json({ revalidated: true, type: body?._type ?? null });
}
