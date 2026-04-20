import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "State Nomination Australia 2026 (190 & 491 Guide) | AussieVisa Toolkit",
  description: "Complete guide to Australian state nomination for PR. Learn about 190 and 491 state sponsorship, eligibility, and how to apply for nomination.",
};

const faqs = [
  { question: "What is the difference between 190 and 491 state nomination?", answer: "The 190 is a permanent visa with 5 extra points. The 491 is a provisional visa with 15 extra points, requiring you to live and work in a regional area for 3 years before applying for the 191 PR visa." },
  { question: "Can I apply to multiple states?", answer: "Yes. You can express interest in multiple states. However, each state has its own requirements and some states may require a genuine commitment to live there." },
  { question: "How do I apply for state nomination?", answer: "Submit an Expression of Interest through SkillSelect. Each state reviews EOIs and may invite you to apply for nomination. Some states require a separate registration of interest." },
  { question: "Do I have to stay in the nominating state?", answer: "For the 190, there is a moral obligation to live in the state for 2 years. For the 491, you must live in the designated regional area for 3 years. These conditions affect your eligibility for future PR." },
];

export default function StateNominationPage() {
  return (
<>
        <ArticleSEO slug="state-nomination-australia" title="State Nomination Australia 2026 (190 & 491 Guide) | AussieVisa Toolkit" description="Complete guide to Australian state nomination for PR. Learn about 190 and 491 state sponsorship, eligibility, and how to apply for nomination." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">State Nomination</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>State Nomination Australia: 190 and 491 Guide</h1>
          <p>State nomination provides a valuable pathway to Australian permanent residency, adding 5-15 points to your score and increasing your chances of receiving an invitation.</p>
          <p>Calculate your score with state nomination using our <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>State Nomination Overview</h2>
          <h3>190 Skilled Nominated (Permanent)</h3>
          <ul>
            <li>+5 points for state nomination</li>
            <li>Permanent residency on grant</li>
            <li>Moral obligation to live in the state for 2 years</li>
            <li>Eligible for all states and territories</li>
          </ul>

          <h3>491 Skilled Work Regional (Provisional)</h3>
          <ul>
            <li>+15 points for regional nomination</li>
            <li>Provisional visa — must live in regional area for 3 years</li>
            <li>Pathway to 191 permanent visa after 3 years</li>
            <li>Higher points but more conditions</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Calculate your score with state nomination.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate With Nomination →</Link>
          </div>

          <h2>State Requirements Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left p-3 font-semibold">State</th>
                <th className="text-center p-3 font-semibold">190</th>
                <th className="text-center p-3 font-semibold">491</th>
                <th className="text-center p-3 font-semibold">Key Focus</th>
              </tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3">NSW</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">High-demand occupations</td></tr>
                <tr className="border-b"><td className="p-3">Victoria</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Health, tech, education</td></tr>
                <tr className="border-b"><td className="p-3">Queensland</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Construction, mining</td></tr>
                <tr className="border-b"><td className="p-3">South Australia</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Many occupations open</td></tr>
                <tr className="border-b"><td className="p-3">WA</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Mining, engineering</td></tr>
                <tr className="border-b"><td className="p-3">Tasmania</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Graduate pathways</td></tr>
                <tr><td className="p-3">ACT</td><td className="text-center p-3">✓</td><td className="text-center p-3">✓</td><td className="p-3">Canberra-based, many occupations</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Application Tips</h2>
          <ul>
            <li><strong>Research each state's occupation list</strong> — they differ from the national list</li>
            <li><strong>Show genuine intent</strong> — many states want evidence you plan to stay</li>
            <li><strong>Apply early</strong> — some states have limited quotas</li>
            <li><strong>Consider regional</strong> — 491 often has more accessible pathways</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">See how state nomination affects your score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>State requirements change frequently. Verify with each state government website and the <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/best-visa-australia-pr" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🛤️</span><span className="font-medium text-gray-900">Best Visa Guide</span></Link>
            <Link href="/articles/australia-pr-invitation-rounds" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎯</span><span className="font-medium text-gray-900">Invitation Rounds</span></Link>
          </div>
          <RelatedArticles currentSlug="state-nomination-australia" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
