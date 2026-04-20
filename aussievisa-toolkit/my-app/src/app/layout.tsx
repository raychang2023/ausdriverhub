import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AussieVisa Toolkit - Australian Skilled Migration Guide",
    template: "%s | AussieVisa Toolkit"
  },
  description: "Free tools and guides for Australian skilled migration. Calculate your PR points, compare visa options, and understand the points system.",
  metadataBase: new URL("https://aussievisatoolkit.com"),
  verification: {
    google: "T6TcJ6hoM48Xz2i-mnYbX2nZQXKMvT3peFcaaTCliUA",
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://aussievisatoolkit.com",
    siteName: "AussieVisa Toolkit",
    title: "AussieVisa Toolkit - Australian Skilled Migration Guide",
    description: "Free tools and guides for Australian skilled migration. Calculate your PR points, compare visa options, and understand the points system.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AussieVisa Toolkit - Australian Skilled Migration Guide"
      }
    ]
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "AussieVisa Toolkit - Australian Skilled Migration Guide",
    description: "Free tools and guides for Australian skilled migration. Calculate your PR points, compare visa options, and understand the points system.",
    images: ["/og-image.png"],
    creator: "@AussieVisaToolkit"
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  // Canonical
  alternates: {
    canonical: "https://aussievisatoolkit.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
