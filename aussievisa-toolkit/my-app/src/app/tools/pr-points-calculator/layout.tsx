import type { Metadata } from "next";

const CALCULATOR_URL = "https://aussievisatoolkit.com/tools/pr-points-calculator";

export const metadata: Metadata = {
  title: "Australia PR Points Calculator 2026 | Free EOI Score Check",
  description: "Calculate your Australian PR points in 2 minutes. Free tool for 189, 190, 491 visas. Check your EOI score instantly based on age, education, work experience, English & more.",
  alternates: { canonical: CALCULATOR_URL },
  openGraph: {
    title: "Australia PR Points Calculator 2026 | Free EOI Score Check",
    description: "Calculate your Australian PR points in 2 minutes. Check your EOI score for 189, 190, 491 visas.",
    url: CALCULATOR_URL,
    siteName: "AussieVisa Toolkit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia PR Points Calculator 2026",
    description: "Calculate your PR points in 2 minutes. Free tool for Australian skilled migration.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
