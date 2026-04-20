import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "190 vs 491 Visa Difference: State Nominated vs Regional (2026) | AussieVisa Toolkit",
  description:
    "Compare 190 vs 491 visa differences. Learn about permanent vs provisional status, points bonuses, residency requirements, and which state-nominated visa suits you.",
};

const faqs = [
  {
    question: "Can I apply for both 190 and 491 at the same time?",
    answer:
      "Yes. You can submit an EOI with both 190 and 491 preferences selected. If you receive invitations for both, you can choose which one to accept. Many applicants keep both options open.",
  },
  {
    question: "Is the 491 better because it has more bonus points?",
    answer:
      "The 491 offers 15 bonus points compared to the 190's 5 points, but it is a provisional visa requiring 3 years in a regional area. The 190 is permanent immediately. Whether 491 is 'better' depends on your score and willingness to live regionally.",
  },
  {
    question: "Can I get 190 nomination and then apply for 491 instead?",
    answer:
      "If you receive a 190 nomination, your EOI will show 5 bonus points. You cannot 'convert' a 190 nomination to 491. However, you could decline the 190 nomination and seek 491 nomination separately if you prefer that pathway.",
  },
  {
    question: "Which has better job prospects: 190 or 491?",
    answer:
      "It depends on your occupation. Major cities (190) have more jobs overall, but regional areas (491) often have specific shortages in healthcare, trades, and agriculture. Research job markets in your field before deciding.",
  },
];

export default function Visa190vs491Page() {
  return (
<>
        <ArticleSEO slug="190-vs-491-visa-difference" title="190 vs 491 Visa Difference: State Nominated vs Regional (2026) | AussieVisa Toolkit" description="Compare 190 vs 491 visa differences. Learn about permanent vs provisional status, points bonuses, residency requirements, and which state-nominated visa suits you." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">190 vs 491 Difference</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>190 vs 491 Visa Difference: State Nominated vs Regional</h1>

          <p>
            Both the 190 and 491 visas require state nomination, but they differ
            significantly in their outcome. One grants permanent residency immediately.
            The other is provisional with a longer path to PR but offers more bonus points.
          </p>

          <p>
            Compare how the 10-point difference affects your score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Quick Comparison */}
          <h2>Quick Comparison: 190 vs 491</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold">190 Visa</th>
                  <th className="text-center p-3 font-semibold">491 Visa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Visa Type</td><td className="text-center p-3">Permanent</td><td className="text-center p-3">Provisional (5 years)</td></tr>
                <tr className="border-b"><td className="p-3">Bonus Points</td><td className="text-center p-3">+5</td><td className="text-center p-3">+15</td></tr>
                <tr className="border-b"><td className="p-3">Residency Requirement</td><td className="text-center p-3">~2 years in state</td><td className="text-center p-3">3 years in regional area</td></tr>
                <tr className="border-b"><td className="p-3">Where You Can Live</td><td className="text-center p-3">State first, then anywhere</td><td className="text-center p-3">Regional area only (3 years)</td></tr>
                <tr className="border-b"><td className="p-3">Path to PR</td><td className="text-center p-3">Immediate</td><td className="text-center p-3">Via Subclass 191 after 3 years</td></tr>
                <tr><td className="p-3">Income Requirement</td><td className="text-center p-3">None</td><td className="text-center p-3">Yes — minimum for 3 years</td></tr>
              </tbody>
            </table>
          </div>

          {/* What Is 190 */}
          <h2>The 190 Visa: Direct Permanent Residency</h2>

          <p>
            The <Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">190 visa</Link> offers
            the best of both worlds: state nomination bonus points AND immediate
            permanent residency. You get the 5-point boost without the provisional
            period.
          </p>

          <h3>190 Visa Advantages</h3>
          <ul>
            <li>Permanent residency on day one</li>
            <li>5 bonus points from nomination</li>
            <li>Shorter residency commitment (typically 2 years)</li>
            <li>No income requirements to maintain status</li>
            <li>Can live in major cities (depending on state)</li>
          </ul>

          <h3>190 Visa Considerations</h3>
          <ul>
            <li>Only 5 bonus points (vs 15 for 491)</li>
            <li>Competition can be high in popular states</li>
            <li>States may prefer onshore applicants</li>
          </ul>

          {/* What Is 491 */}
          <h2>The 491 Visa: Higher Points, Longer Path</h2>

          <p>
            The <Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">491 visa</Link> trades
            immediate permanency for a significant points advantage. The 15 bonus
            points can turn a weak application into a competitive one.
          </p>

          <h3>491 Visa Advantages</h3>
          <ul>
            <li>15 bonus points (highest of any visa)</li>
            <li>Lower points thresholds for invitations</li>
            <li>Regional living can mean lower costs</li>
            <li>Guaranteed PR pathway if conditions met</li>
            <li>Some states prioritise 491 applicants</li>
          </ul>

          <h3>491 Visa Considerations</h3>
          <ul>
            <li>Provisional status for 3 years</li>
            <li>Must live in regional area</li>
            <li>Income requirements to qualify for PR</li>
            <li>Longer overall timeline to permanency</li>
          </ul>

          {/* Key Differences */}
          <h2>Key Differences Explained</h2>

          <h3>Points Difference (5 vs 15)</h3>
          <p>
            The 10-point gap between 190 and 491 is significant. If your base score
            is 70, the 190 takes you to 75 — competitive but not guaranteed. The 491
            takes you to 85 — a strong score for most occupations.
          </p>

          <p>
            For applicants with lower base scores, the 491's 15 points can be
            transformative.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how 5 points vs 15 points changes your competitiveness.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Compare Both Scenarios →
            </Link>
          </div>

          <h3>Permanent vs Provisional</h3>
          <p>
            The 190 gives you certainty immediately. You are a permanent resident
            from the day the visa is granted. The 491 gives you a pathway, but you
            must meet conditions over 3 years before becoming permanent.
          </p>

          <p>
            This does not make the 491 inferior — many successful migrants have
            used it as a stepping stone. But you should understand the commitment.
          </p>

          <h3>Location Flexibility</h3>
          <p>
            Both visas have location restrictions, but they differ:
          </p>

          <ul>
            <li><strong>190:</strong> Commit to the nominating state, but major cities are usually allowed</li>
            <li><strong>491:</strong> Must live in regional areas (excludes Sydney, Melbourne, Brisbane, Gold Coast)</li>
          </ul>

          <p>
            "Regional" is broader than many people realise. Perth, Adelaide, and
            Hobart all count as regional for the 491 visa.
          </p>

          {/* Which Should You Choose */}
          <h2>Which Visa Should You Choose?</h2>

          <h3>Choose 190 If:</h3>
          <ul>
            <li>Your base score is 75+ (80+ with bonus)</li>
            <li>You want permanent status immediately</li>
            <li>You prefer to live in major cities</li>
            <li>You do not want a 3-year provisional period</li>
          </ul>

          <h3>Choose 491 If:</h3>
          <ul>
            <li>Your base score is below 75</li>
            <li>You need the 15-point boost to be competitive</li>
            <li>You are open to regional living</li>
            <li>You are patient and can wait 3 years for PR</li>
          </ul>

          <h3>The "Both" Strategy</h3>
          <p>
            Many applicants select both 190 and 491 in their EOI. This maximises
            your chances of receiving an invitation. You can then choose which
            pathway to pursue based on the specific nomination offer.
          </p>

          {/* Scenarios */}
          <h2>Real-World Scenarios</h2>

          <h3>Scenario 1: Competitive 190 Candidate</h3>
          <p>
            You have 80 base points. With 190 nomination, you reach 85 — very
            competitive. The immediate permanent residency is worth pursuing.
          </p>

          <h3>Scenario 2: 491's Sweet Spot</h3>
          <p>
            You have 65 base points. The 190 takes you to 70 — marginal. The 491
            takes you to 80 — solid. The 3-year provisional period is a reasonable
            trade-off for the invitation.
          </p>

          <h3>Scenario 3: State-Specific</h3>
          <p>
            Your state of choice offers both 190 and 491 nominations. The 491
            has lower requirements and faster processing. Even with a decent base
            score, the 491 might get you there quicker.
          </p>

          {/* Final CTA */}
          <h2>Make Your Choice</h2>

          <p>
            Both the 190 and 491 are viable pathways to Australian permanent
            residency. The right choice depends on your current score, your
            flexibility about location, and your timeline preferences.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate both scenarios to see which works better for your situation.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Check Your PR Points Now →
            </Link>
          </div>

          {/* Disclaimer */}
          <h2>Disclaimer</h2>

          <p>
            This article compares 190 vs 491 visa differences based on general
            information. State nomination policies change frequently. Always verify
            current requirements with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            and relevant state governments.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/190-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">190</span>
              <span className="font-medium text-gray-900">190 Requirements</span>
            </Link>
            <Link
              href="/articles/491-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">491</span>
              <span className="font-medium text-gray-900">491 Requirements</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="190-vs-491-visa-difference" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
