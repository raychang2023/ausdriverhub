import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Partner Visa vs Skilled Visa Comparison | AussieVisa Toolkit",
  description: "Compare partner visa and skilled visa pathways for Australia PR. Learn which is faster, cheaper, and more suitable for your situation.",
};

const faqs = [
  { question: "Which is faster: partner visa or skilled visa?", answer: "Skilled visas are generally faster. Partner visas often have long processing times (12-24+ months). However, onshore partner visa applicants receive a bridging visa allowing them to stay in Australia while waiting." },
  { question: "Can my partner add points to my skilled visa?", answer: "Yes. If your partner has competent English and a positive skills assessment in a relevant occupation, you can claim 10 points. If your partner has competent English only, you can claim 5 points." },
  { question: "Should we apply for partner visa or skilled visa?", answer: "If one partner has strong skilled visa prospects (high points, in-demand occupation), the skilled route is usually better. If not, or if already in a relationship, partner visa may be the right choice." },
  { question: "Can we apply for both at the same time?", answer: "Generally yes, though you should consult migration advice. Each visa has different requirements and costs. Be aware that being granted one may affect the other." },
];

export default function PartnerVsSkilledPage() {
  return (
<>
        <ArticleSEO slug="partner-visa-vs-skilled-visa" title="Australia PR Partner Visa vs Skilled Visa Comparison | AussieVisa Toolkit" description="Compare partner visa and skilled visa pathways for Australia PR. Learn which is faster, cheaper, and more suitable for your situation." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">Partner vs Skilled</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Partner Visa vs Skilled Visa for Australia PR</h1>
          <p>If you have a partner who is an Australian citizen or permanent resident, you may be considering whether to pursue a partner visa or continue with the skilled migration pathway.</p>
          <p>Calculate your skilled visa points with our <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Quick Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left p-3 font-semibold">Factor</th>
                <th className="text-center p-3 font-semibold">Skilled Visa</th>
                <th className="text-center p-3 font-semibold">Partner Visa</th>
              </tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Processing Time</td><td className="text-center p-3">6-12 months</td><td className="text-center p-3">12-24+ months</td></tr>
                <tr className="border-b"><td className="p-3">Cost</td><td className="text-center p-3">$4,000-$5,000</td><td className="text-center p-3">$8,000+</td></tr>
                <tr className="border-b"><td className="p-3">Points/Requirements</td><td className="text-center p-3">Points test</td><td className="text-center p-3">Relationship proof</td></tr>
                <tr><td className="p-3">Work Rights</td><td className="text-center p-3">Full</td><td className="text-center p-3">Bridging visa (onshore)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Check your skilled visa eligibility.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>When to Choose Skilled Visa</h2>
          <ul>
            <li>You have a competitive points score (80+)</li>
            <li>Your occupation is in high demand</li>
            <li>You want faster processing</li>
            <li>You want lower cost</li>
            <li>You value independence in your migration pathway</li>
          </ul>

          <h2>When to Choose Partner Visa</h2>
          <ul>
            <li>Your partner is Australian citizen or PR</li>
            <li>Your skilled visa prospects are weak</li>
            <li>You are already in a long-term relationship</li>
            <li>You want to stay in Australia during processing</li>
          </ul>

          <h2>Combined Strategy</h2>
          <p>Many couples pursue both pathways simultaneously. The main applicant pursues skilled migration while the partner relationship provides a backup option. This strategy can be complex — consider professional advice.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Calculate your skilled visa score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>This article provides general comparison. Individual circumstances vary significantly.</p>
          <DisclaimerBanner />
          <RelatedArticles currentSlug="partner-visa-vs-skilled-visa" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
