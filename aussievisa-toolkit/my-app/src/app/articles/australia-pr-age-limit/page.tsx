import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Age Limit and Age Points Guide | AussieVisa Toolkit",
  description: "Understand Australia PR age requirements and age points. Learn how age affects your score, strategies for older applicants, and maximum age limits.",
};

const faqs = [
  { question: "What is the maximum age for Australia PR?", answer: "You must be under 45 years old when you receive an invitation to apply. If you turn 45 after submitting your EOI but before invitation, you become ineligible." },
  { question: "How many points do I get for my age?", answer: "Age 18-24: 25 points. Age 25-32: 30 points (maximum). Age 33-39: 25 points. Age 40-44: 15 points. Age 45+: 0 points and ineligible." },
  { question: "Can I apply for PR if I am over 45?", answer: "Generally no for skilled independent, state nominated, or regional visas. Some employer-sponsored visas have higher age limits or exemptions. Family visas may also have different rules." },
  { question: "Should I apply before I turn 33 or 40?", answer: "Yes if possible. The 30-point age bracket (25-32) is optimal. If approaching 33, 39, or 44, consider submitting EOI sooner to lock in higher points." },
];

export default function PRAgeLimitPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-age-limit" title="Australia PR Age Limit and Age Points Guide | AussieVisa Toolkit" description="Understand Australia PR age requirements and age points. Learn how age affects your score, strategies for older applicants, and maximum age limits." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">Age Limit & Points</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Age Limit and Age Points</h1>
          <p>Age is one of the most important factors in the Australia PR points test. Understanding age limits and maximising your age points can significantly impact your application.</p>
          <p>Calculate how age affects your score with our <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Age Points Table</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left p-3 font-semibold">Age Range</th>
                <th className="text-center p-3 font-semibold">Points</th>
                <th className="text-center p-3 font-semibold">Eligibility</th>
              </tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3">18-24</td><td className="text-center p-3">25</td><td className="text-center p-3 text-green-600">✓ Eligible</td></tr>
                <tr className="border-b"><td className="p-3">25-32</td><td className="text-center p-3 font-bold text-blue-700">30</td><td className="text-center p-3 text-green-600">✓ Eligible</td></tr>
                <tr className="border-b"><td className="p-3">33-39</td><td className="text-center p-3">25</td><td className="text-center p-3 text-green-600">✓ Eligible</td></tr>
                <tr className="border-b"><td className="p-3">40-44</td><td className="text-center p-3">15</td><td className="text-center p-3 text-green-600">✓ Eligible</td></tr>
                <tr><td className="p-3">45+</td><td className="text-center p-3">0</td><td className="text-center p-3 text-red-600">✗ Ineligible</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">See your age points and total score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Strategies for Different Age Groups</h2>
          <h3>Age 25-32 (30 Points)</h3>
          <p>This is the sweet spot. With 30 points, you have the best foundation for a competitive score.</p>

          <h3>Age 33-39 (25 Points)</h3>
          <p>You lose 5 points but remain competitive. Focus on achieving Superior English (20 points) and maximum work experience (20 points).</p>

          <h3>Age 40-44 (15 Points)</h3>
          <p>You lose 15 points compared to the maximum. You will need to maximise every other category: Superior English, 8+ years experience, higher education, CCL, and state nomination.</p>

          <h3>Over 45</h3>
          <p>Standard skilled visas (189, 190, 491) are not available. Consider employer-sponsored pathways or family visas if applicable.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Calculate your PR score with your current age.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>Age is calculated at the time of invitation. Verify with the <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-over-40" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎂</span><span className="font-medium text-gray-900">PR Over 40</span></Link>
            <Link href="/articles/australia-pr-under-30" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎓</span><span className="font-medium text-gray-900">PR Under 30</span></Link>
          </div>
          <RelatedArticles currentSlug="australia-pr-age-limit" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
