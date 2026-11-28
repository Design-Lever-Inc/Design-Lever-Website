import { notFound } from "next/navigation";
import { PostPage, postMetadata } from "@/components/PostPage";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_QUERY, POST_SLUGS_QUERY, type Post } from "@/sanity/lib/queries";
import { sanityConfigured } from "@/sanity/env";

type Props = { params: Promise<{ slug: string }> };

/** Pre-builds every published article; new ones render on first visit. */
export async function generateStaticParams() {
  if (!sanityConfigured) return [];
  return client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY, { type: "article" });
}

const load = async (slug: string) => sanityFetch<Post | null>(POST_QUERY, { type: "article", slug }, null);

export async function generateMetadata({ params }: Props) {
  const post = await load((await params).slug);
  return post ? postMetadata(post) : {};
}

export default async function Page({ params }: Props) {
  const post = await load((await params).slug);
  if (!post) notFound();
  return <PostPage post={post} />;
}
