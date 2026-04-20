import type { Metadata } from "next";

const SITE_URL = "https://aussievisatoolkit.com";
const SITE_NAME = "AussieVisa Toolkit";

interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateArticleMetadata({
  slug,
  title,
  description,
  publishedTime = "2026-04-17T00:00:00+08:00",
  modifiedTime,
}: ArticleMeta): Metadata {
  const url = `${SITE_URL}/articles/${slug}`;
  const mod = modifiedTime || publishedTime;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime,
      modifiedTime: mod,
      authors: [SITE_NAME],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function generateArticleJsonLd({
  title,
  description,
  slug,
  publishedTime = "2026-04-17T00:00:00+08:00",
  modifiedTime,
}: ArticleMeta) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": `${SITE_URL}/articles/${slug}`,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "author": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": SITE_URL,
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/og-image.png`,
          "width": 1200,
          "height": 630,
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE_URL}/articles/${slug}`,
      },
    }),
  };
}
