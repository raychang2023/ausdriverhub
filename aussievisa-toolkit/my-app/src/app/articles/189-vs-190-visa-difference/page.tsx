import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "189 vs 190 Visa Difference: Which PR Visa Is Better? (2026) | AussieVisa Toolkit",
  description:
    "Compare 189 vs 190 visa differences. Learn about points, nomination requirements, residency obligations, and which permanent visa suits your situation.",
};

const faqs = [
  {
    question: "Can I switch from 190 to 189 after getting nominated?",
    answer:
      "Once you accept a 190 nomination and receive the visa, you cannot 'switch' to a 189. However, you could submit a new EOI for a 189 visa while holding a 190, though this is unusual since both grant permanent residency.",
  },
  {
    question: "Does the 190 visa have a higher success rate?",
    answer:
      "The 190 often has a higher invitation rate because the 5 bonus points make applicants more competitive. However, success also depends on state nomination availability and your occupation's demand in specific states.",
  },
  {
    question: "Can I live anywhere after the 2-year commitment?",
    answer:
      "Yes. After fulfilling the typical 2-year residency commitment to the nominating state, you are free to live anywhere in Australia. The 190 visa grants permanent residency from day one.",
  },
  {
    question: "Which visa processes faster?",
    answer:
      "Processing times vary and change regularly. The 190 includes an additional step (state nomination) which can add time upfront, but both visas typically process within similar timeframes once the visa application is submitted.",
  },
];

export default function Visa189vs190Page() {
  return (
<>
        <ArticleSEO slug="189-vs-190-visa-difference" title="189 vs 190 Visa Difference: Which PR Visa Is Better? (2026) | AussieVisa Toolkit" description="Compare 189 vs 190 visa differences. Learn about points, nomination requirements, residency obligations, and which permanent visa suits your situation." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">189 vs 190 Difference</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>189 vs 190 Visa Difference: Which PR Visa Is Better?</h1>

          <p>
            The 189 and 190 visas both lead to Australian permanent residency, but they
            have important differences that can affect your decision. Understanding
            these differences helps you choose the right pathway for your situation.
          </p>

          <p>
            Calculate your score for both options using our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to see which works better for you.
          </p>

          {/* Quick Comparison */}
          <h2>Quick Comparison: 189 vs 190</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold">189 Visa</th>
                  <th className="text-center p-3 font-semibold">190 Visa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Visa Type</td><td className="text-center p-3">Permanent</td><td className="text-center p-3">Permanent</td></tr>
                <tr className="border-b"><td className="p-3">Nomination Required</td><td className="text-center p-3">No</td><td className="text-center p-3">Yes — State</td></tr>
                <tr className="border-b"><td className="p-3">Bonus Points</td><td className="text-center p-3">0</td><td className="text-center p-3">+5</td></tr>
                <tr className="border-b"><td className="p-3">Residency Obligation</td><td className="text-center p-3">None</td><td className="text-center p-3">~2 years in state</td></tr>
                <tr className="border-b"><td className="p-3">Processing Steps</td><td className="text-center p-3">EOI → Invitation → Visa</td><td className="text-center p-3">EOI → Nomination → Invitation → Visa</td></tr>
                <tr><td className="p-3">Where You Can Live</td><td className="text-center p-3">Anywhere immediately</td><td className="text-center p-3">Nominating state first, then anywhere</td></tr>
              </tbody>
            </table>
          </div>

          {/* What Is 189 */}
          <h2>The 189 Visa: Independent Pathway</h2>

          <p>
            The <Link href="/articles/189-visa-requirements-australia" className="text-blue-700 hover:underline">189 visa</Link> is
            completely independent. You do not need anyone to sponsor or nominate you.
            Your application stands on its own merits.
          </p>

          <h3>189 Visa Pros</h3>
          <ul>
            <li>Maximum freedom — live anywhere in Australia immediately</li>
            <li>No nomination process to navigate</li>
            <li>No residency commitment to any state</li>
            <li>Direct permanent residency on grant</li>
          </ul>

          <h3>189 Visa Cons</h3>
          <ul>
            <li>Usually requires higher points (85+ for many occupations)</li>
            <li>More competitive — no bonus points</li>
            <li>Dependent entirely on your own score</li>
          </ul>

          {/* What Is 190 */}
          <h2>The 190 Visa: State Nominated Pathway</h2>

          <p>
            The <Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">190 visa</Link> requires
            state nomination. In exchange for living in the state for a period (typically
            2 years), you receive 5 bonus points and often face less competition.
          </p>

          <h3>190 Visa Pros</h3>
          <ul>
            <li>5 bonus points can make the difference</li>
            <li>Often lower points thresholds than 189</li>
            <li>State lists may include additional occupations</li>
            <li>Still grants permanent residency immediately</li>
          </ul>

          <h3>190 Visa Cons</h3>
          <ul>
            <li>Must commit to living in the nominating state</li>
            <li>Additional application step (state nomination)</li>
            <li>State fees and separate requirements</li>
            <li>Nomination is not guaranteed</li>
          </ul>

          {/* Key Differences */}
          <h2>Key Differences Explained</h2>

          <h3>Points and Competition</h3>
          <p>
            The biggest practical difference is the points. The 190&apos;s 5 bonus points
            can turn a 75-point application into an 80-point application — often the
            difference between waiting indefinitely and receiving an invitation.
          </p>

          <p>
            However, the 189 offers complete freedom. If you have 90+ points, the 189
            might be worth pursuing for the flexibility alone.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Not sure how 5 points changes your position? Calculate both scenarios.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Compare Your Scores →
            </Link>
          </div>

          <h3>Residency Obligations</h3>
          <p>
            The 189 has no strings attached. The 190 requires a commitment — typically
            2 years in the nominating state. After that period, you are free to move.
          </p>

          <p>
            For many people, this is a reasonable trade-off. Two years in a state like
            South Australia or Tasmania can be a positive experience, and you still
            end up with permanent residency.
          </p>

          <h3>Application Process</h3>
          <p>
            The 190 adds a step: state nomination. This means:
          </p>

          <ul>
            <li>Additional application fees to the state</li>
            <li>Waiting for both state and federal processes</li>
            <li>Meeting state-specific criteria beyond the federal requirements</li>
          </ul>

          {/* Which Should You Choose */}
          <h2>Which Visa Should You Choose?</h2>

          <h3>Choose 189 If:</h3>
          <ul>
            <li>You have a high score (85+ points)</li>
            <li>You want maximum location flexibility</li>
            <li>You do not want any residency commitments</li>
            <li>Your occupation has strong demand nationally</li>
          </ul>

          <h3>Choose 190 If:</h3>
          <ul>
            <li>Your score is moderate (70–80 points)</li>
            <li>The 5 bonus points would make you competitive</li>
            <li>You are open to living in a specific state</li>
            <li>Your occupation is in demand in particular states</li>
          </ul>

          <h3>Consider Both</h3>
          <p>
            Many applicants submit EOIs for both visas. You can select multiple options
            in SkillSelect and accept whichever invitation comes first. This keeps your
            options open without committing prematurely.
          </p>

          {/* Scenarios */}
          <h2>Real-World Scenarios</h2>

          <h3>Scenario 1: High Scorer</h3>
          <p>
            You have 90 points. The 189 visa gives you complete freedom, and your score
            is competitive enough to get invited. The 190 would add unnecessary
            commitment.
          </p>

          <h3>Scenario 2: Borderline Scorer</h3>
          <p>
            You have 75 points. The 189 is unlikely at this score for most occupations.
            The 190&apos;s bonus takes you to 80, making you competitive. The state
            commitment is worth it for the invitation.
          </p>

          <h3>Scenario 3: Occupation Specific</h3>
          <p>
            Your occupation is only on certain state lists. The 190 becomes your best
            or only option, depending on where your skills are needed.
          </p>

          {/* Final CTA */}
          <h2>Make Your Decision</h2>

          <p>
            Both visas lead to the same destination: Australian permanent residency.
            The question is which path gets you there faster and with less stress,
            given your specific circumstances.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your score and see how the 5-point difference affects your options.
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
            This article compares 189 vs 190 visa differences based on general
            information. Visa policies and invitation trends change regularly. Always
            verify current requirements with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/189-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">189</span>
              <span className="font-medium text-gray-900">189 Requirements</span>
            </Link>
            <Link
              href="/articles/190-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">190</span>
              <span className="font-medium text-gray-900">190 Requirements</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="189-vs-190-visa-difference" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
