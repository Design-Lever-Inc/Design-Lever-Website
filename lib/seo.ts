import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** One article or spotlight, declared once per page and used for both its
 *  metadata (share card) and its structured data. */
export interface ArticleSeo {
  title: string;
  description: string;
  path: string;
  /** Absolute share-image URL; defaults to the standard Design Lever card. */
  image?: string;
  publishedAt?: string;
  modifiedAt?: string;
}

const DEFAULT_IMAGE = { url: "/og-default.png", width: 1200, height: 630, alt: SITE_NAME };

export function articleMetadata({ title, description, path, image, publishedAt, modifiedAt }: ArticleSeo): Metadata {
  return {
    title,
    description,
    // Setting openGraph replaces the root one, so restate what it carried.
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url: path,
      images: [image ? { url: image, width: 1200, height: 630, alt: title } : DEFAULT_IMAGE],
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
    },
  };
}

const ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/favicon.png`,
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
    description:
      "Africa's first fractional design leadership company. Design leadership infrastructure, built for African business.",
    email: "hello@designleverinc.com",
    sameAs: [
      "https://www.linkedin.com/company/design-lever-inc",
      "https://x.com/designleverinc",
      "https://www.instagram.com/designleverinc",
    ],
  };
}

export function articleJsonLd({ title, description, path, image, publishedAt, modifiedAt }: ArticleSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: image ?? `${SITE_URL}${DEFAULT_IMAGE.url}`,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: ORGANIZATION,
    publisher: ORGANIZATION,
  };
}
