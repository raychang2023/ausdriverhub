export const defaultSEO = {
  siteName: "AussieVisa Toolkit",
  siteUrl: "https://aussievisa.com.au",
  defaultTitle: "Australian Visa Guide & Tools",
  defaultDescription: "Comprehensive guides and tools for Australian skilled migration visas including 189, 190, and 491 visas.",
};

export function createSEO(title: string, description: string, path = "") {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${defaultSEO.siteUrl}${path}`,
      siteName: defaultSEO.siteName,
      type: "website" as const,
    },
  };
}
