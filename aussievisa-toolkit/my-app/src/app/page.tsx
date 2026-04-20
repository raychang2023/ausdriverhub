import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import VisaCard from "@/components/VisaCard";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { visas } from "@/data/visas";
import { articles } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Visa Guide & Tools | AussieVisa Toolkit",
  description: "Comprehensive guides and tools for Australian skilled migration visas including 189, 190, and 491 visas. Calculate your PR points and explore visa options.",
  alternates: { canonical: "https://aussievisatoolkit.com" },
  openGraph: {
    title: "Australian Visa Guide & Tools | AussieVisa Toolkit",
    description: "Comprehensive guides and tools for Australian skilled migration visas.",
    url: "https://aussievisatoolkit.com",
    siteName: "AussieVisa Toolkit",
    type: "website",
  },
};

const homeFAQs = [
  { question: "What is the easiest way to immigrate to Australia?", answer: "The 'easiest' path depends on your individual circumstances including skills, qualifications, and points score. Common paths include skilled visas like 189, 190, and 491. Please consult official resources for advice." },
  { question: "How do I calculate my PR points?", answer: "Use our PR Points Calculator to estimate your EOI score based on age, education, work experience, English proficiency, and other factors. Note that actual assessment may differ." },
  { question: "Do I need to hire a migration agent?", answer: "While not mandatory, a registered migration agent can provide professional advice and help with your application. This website does not replace professional immigration advice." },
  { question: "How long does the visa process take?", answer: "Processing times vary significantly based on visa type, occupation, and current demand. Check the Department of Home Affairs website for current processing timeframes." },
  { question: "What is the difference between 189, 190, and 491 visas?", answer: "189 is independent PR, 190 requires state nomination, and 491 is provisional with regional requirements. Visit our visa pages for detailed comparisons." },
];

export default function Home() {
  return (
    <Layout>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AussieVisa Toolkit",
            "url": "https://aussievisatoolkit.com",
            "logo": "https://aussievisatoolkit.com/og-image.png",
            "sameAs": [],
          }),
        }}
      />
      {/* WebSite Schema with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AussieVisa Toolkit",
            "url": "https://aussievisatoolkit.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aussievisatoolkit.com/tools/pr-points-calculator",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Your Guide to Australian
              <span className="text-blue-700"> Skilled Migration</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore visa options, calculate your PR points, and access practical guides for your Australian immigration journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/visas"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
              >
                Explore Visa Options
              </Link>
              <Link
                href="/tools/pr-points-calculator"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg border border-blue-700 hover:bg-blue-50 transition-colors"
              >
                Calculate Your Points
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-4">
        <DisclaimerBanner />
      </section>

      {/* Visa Types */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Choose Your Visa Path</h2>
            <p className="text-gray-600">Compare the three main skilled migration visa options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visas.map((visa) => (
              <VisaCard key={visa.code} visa={visa} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                PR Points Calculator
              </h2>
              <p className="text-gray-600 mb-6">
                Estimate your points for Expression of Interest (EOI) based on age, education, work experience, English proficiency, and other factors. Get a quick assessment to understand your eligibility.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Instant points calculation",
                  "Covers all major categories",
                  "Compare different scenarios",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/tools/pr-points-calculator"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
              >
                Try the Calculator
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    🧮
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Points Estimate</p>
                    <p className="text-sm text-gray-500">Based on your profile</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Age", value: "25-32 years", points: "30 points" },
                    { label: "Education", value: "Bachelor's degree", points: "15 points" },
                    { label: "English", value: "Competent", points: "0 points" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.value}</p>
                      </div>
                      <span className="text-sm font-semibold text-blue-700">{item.points}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-gray-600">Total Estimate</span>
                  <span className="text-2xl font-bold text-blue-700">45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Resources - Start Here */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Start Your PR Journey Here</h2>
            <p className="text-gray-600">Most popular resources based on where you are in the process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Calculator Card */}
            <Link
              href="/tools/pr-points-calculator"
              className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white hover:shadow-lg transition-all"
            >
              <span className="text-3xl mb-2 block">🧮</span>
              <h3 className="font-semibold mb-1 group-hover:underline">Calculate Your Points</h3>
              <p className="text-sm text-blue-100">See your score in 2 minutes. Free, instant, no signup.</p>
            </Link>
            {/* Points Explained Card */}
            <Link
              href="/articles/pr-points-australia-explained"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-2 block">📊</span>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700">How Points Work</h3>
              <p className="text-sm text-gray-600">Complete guide to the 12 points categories.</p>
            </Link>
            {/* Good Score Card */}
            <Link
              href="/articles/what-is-good-pr-score-australia"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700">What Score Do You Need?</h3>
              <p className="text-sm text-gray-600">Competitive scores by visa type and occupation.</p>
            </Link>
            {/* Visa Comparison Card */}
            <Link
              href="/articles/189-vs-190-vs-491-visa-comparison"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-2 block">⚖️</span>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700">Which Visa Is Right?</h3>
              <p className="text-sm text-gray-600">189 vs 190 vs 491 — find your best path.</p>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/articles/65-points-enough-australia-pr"
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-700"
            >
              <span className="mr-2">❓</span>
              Have 65 points and wondering if it&apos;s enough? Read this
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Popular Guides</h2>
              <p className="text-gray-600">Answers to common questions about Australian PR</p>
            </div>
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center text-blue-700 font-medium hover:text-blue-800"
            >
              View all articles
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                <p className="text-xs text-gray-400 mt-3">{article.date}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/articles"
            className="sm:hidden mt-6 inline-flex items-center text-blue-700 font-medium"
          >
            View all articles
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQSection title="Common Questions" faqs={homeFAQs} />
        </div>
      </section>

      {/* Disclaimer Summary */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500">
            <strong>Disclaimer:</strong> This website provides general information only and does not constitute professional immigration advice. 
            Visa policies and requirements are subject to change. Always refer to the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
              Department of Home Affairs
            </a>{" "}
            for official and current information. For personalized advice, please consult a registered migration agent.
          </p>
          <Link
            href="/disclaimer"
            className="inline-block mt-3 text-sm text-blue-700 font-medium hover:underline"
          >
            Read Full Disclaimer
          </Link>
        </div>
      </section>
    </Layout>
  );
}
