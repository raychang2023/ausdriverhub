"use client";

interface ArticleSEOProps {
  slug: string;
  title: string;
  description: string;
}

const SITE_URL = "https://aussievisatoolkit.com";
const SITE_NAME = "AussieVisa Toolkit";

export default function ArticleSEO({ slug, title, description }: ArticleSEOProps) {
  const url = `${SITE_URL}/articles/${slug}`;
  const cleanTitle = title.replace(/\s*\|\s*AussieVisa Toolkit\s*$/, "").trim();
  const cleanDesc = description.trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cleanTitle,
    description: cleanDesc,
    url,
    datePublished: "2026-04-17T00:00:00+08:00",
    dateModified: "2026-04-17T15:00:00+08:00",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const ogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cleanTitle,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ogJsonLd) }}
      />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={cleanTitle} />
      <meta property="og:description" content={cleanDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={cleanTitle} />
      <meta property="og:published_time" content="2026-04-17T00:00:00+08:00" />
      <meta property="og:modified_time" content="2026-04-17T15:00:00+08:00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={cleanTitle} />
      <meta name="twitter:description" content={cleanDesc} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
    </>
  );
}
