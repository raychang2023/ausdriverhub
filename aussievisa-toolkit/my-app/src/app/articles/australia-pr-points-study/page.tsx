import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for Australian Study (2026 Guide) | AussieVisa Toolkit",
  description:
    "How many PR points for studying in Australia? Learn about Australian study requirements, eligible qualifications, and how local study boosts your PR chances.",
};

const faqs = [
  {
    question: "How many points do I get for studying in Australia?",
    answer:
      "Australian study can give you 5 points if you meet the requirements: at least 2 years of study in Australia resulting in a degree, diploma, or trade qualification. You must have studied at an Australian institution while holding a valid student visa.",
  },
  {
    question: "Does any study in Australia count for points?",
    answer:
      "No. The study must be at least 2 academic years (92 weeks), result in a qualification, and be completed at an Australian educational institution. Short courses, online study, or part-time study may not qualify.",
  },
  {
    question: "Can I claim points for a Master degree completed in Australia?",
    answer:
      "Yes. A Master degree completed in Australia can give you 5 Australian study points plus 15 education points (total 20 points from qualifications). The degree must be at least 2 years of full-time study.",
  },
  {
    question: "Does Australian study help with state nomination?",
    answer:
      "Yes. Many states give priority to applicants who studied in that state. While it does not add extra points on the points test, it can significantly improve your chances of receiving state nomination.",
  },
];

export default function AustralianStudyPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-study" title="Australia PR Points for Australian Study (2026 Guide) | AussieVisa Toolkit" description="How many PR points for studying in Australia? Learn about Australian study requirements, eligible qualifications, and how local study boosts your PR chances." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Australian Study Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Australian Study</h1>

          <p>
            Studying in Australia can give you 5 extra points on your PR points
            test. More importantly, Australian study can open pathways to work
            visas, state nomination, and a smoother transition to permanent
            residency.
          </p>

          <p>
            Calculate your total PR score including Australian study points with
            our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Overview */}
          <h2>Australian Study Points Overview</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Requirement</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">2+ years Australian study</td><td className="text-center p-3 font-bold text-blue-700">5 points</td></tr>
                <tr><td className="p-3">Less than 2 years or ineligible</td><td className="text-center p-3">0 points</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            While 5 points may seem modest, Australian study offers other
            significant benefits beyond the points themselves.
          </p>

          {/* Requirements */}
          <h2>Requirements for Australian Study Points</h2>

          <h3>1. Minimum Duration</h3>
          <p>
            You must have completed at least 2 academic years (92 weeks) of
            study in Australia. The study does not have to be consecutive,
            but the total must meet the minimum.
          </p>

          <h3>2. Valid Qualification</h3>
          <p>
            Your study must result in a qualification that is eligible for
            points:
          </p>
          <ul>
            <li>Diploma or trade qualification</li>
            <li>Bachelor degree</li>
            <li>Masters degree</li>
            <li>Doctoral degree</li>
          </ul>

          <h3>3. Australian Institution</h3>
          <p>
            You must have studied at a registered Australian educational
            institution. Online study from overseas does not count.
          </p>

          <h3>4. Valid Student Visa</h3>
          <p>
            You must have held a valid Australian student visa (Subclass 500)
            during your studies. Study on other visa types does not qualify.
          </p>

          <h3>5. English Language Instruction</h3>
          <p>
            The course must have been conducted in English.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Check if Australian study would boost your PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Beyond Points */}
          <h2>Benefits Beyond Points</h2>

          <h3>Post-Study Work Rights</h3>
          <p>
            Graduates can apply for the Temporary Graduate visa (Subclass 485),
            allowing you to work in Australia for 2–4 years depending on your
            qualification level. This gives you time to:
          </p>
          <ul>
            <li>Gain Australian work experience (adds to your points)</li>
            <li>Improve your English in a workplace setting</li>
            <li>Build professional networks</li>
            <li>Apply for state or employer sponsorship</li>
          </ul>

          <h3>State Nomination Advantages</h3>
          <p>
            Many states give priority to graduates from their own universities:
          </p>
          <ul>
            <li>Some states have graduate streams with lower requirements</li>
            <li>Local study demonstrates commitment to the state</li>
            <li>You may qualify for occupation-specific graduate pathways</li>
          </ul>

          <p>
            Read our{" "}
            <Link href="/articles/state-nomination-australia" className="text-blue-700 hover:underline">
              state nomination guide
            </Link>{" "}
            to learn more.
          </p>

          <h3>Local Experience and Networks</h3>
          <p>
            Australian employers value local qualifications and experience.
            Studying in Australia helps you:
          </p>
          <ul>
            <li>Understand Australian workplace culture</li>
            <li>Build professional connections</li>
            <li>Access graduate recruitment programs</li>
            <li>Secure skilled employment more easily</li>
          </ul>

          {/* Combining Points */}
          <h2>Combining Australian Study Points</h2>

          <p>
            Australian study points stack with other qualification points:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Qualification</th>
                  <th className="text-center p-3 font-semibold">Education Points</th>
                  <th className="text-center p-3 font-semibold">Australian Study Points</th>
                  <th className="text-center p-3 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Australian Bachelor</td><td className="text-center p-3">15</td><td className="text-center p-3">5</td><td className="text-center p-3 font-bold">20</td></tr>
                <tr className="border-b"><td className="p-3">Australian Master</td><td className="text-center p-3">15</td><td className="text-center p-3">5</td><td className="text-center p-3 font-bold">20</td></tr>
                <tr><td className="p-3">Australian PhD</td><td className="text-center p-3">20</td><td className="text-center p-3">5</td><td className="text-center p-3 font-bold">25</td></tr>
              </tbody>
            </table>
          </div>

          {/* What Does Not Count */}
          <h2>What Does Not Count for Australian Study Points</h2>

          <ul>
            <li><strong>Online or distance learning:</strong> Must be physically in Australia</li>
            <li><strong>Study on non-student visas:</strong> Must hold Subclass 500</li>
            <li><strong>Less than 92 weeks:</strong> Does not meet minimum duration</li>
            <li><strong>Non-award courses:</strong> Must lead to a qualification</li>
            <li><strong>English language courses only:</strong> Must be academic study</li>
          </ul>

          {/* Is It Worth It */}
          <h2>Is Australian Study Worth It?</h2>

          <h3>Advantages</h3>
          <ul>
            <li>5 extra points</li>
            <li>Post-study work visa options</li>
            <li>State nomination advantages</li>
            <li>Australian work experience opportunities</li>
            <li>Local professional networks</li>
          </ul>

          <h3>Considerations</h3>
          <ul>
            <li>High tuition costs (international student fees)</li>
            <li>Living expenses in Australia</li>
            <li>2+ years of commitment</li>
            <li>No guarantee of PR</li>
          </ul>

          <h3>When It Makes Sense</h3>
          <p>
            Australian study is often worthwhile if:
          </p>
          <ul>
            <li>You need the 5 points to reach a competitive score</li>
            <li>Your occupation requires Australian qualifications</li>
            <li>You are young and can invest 2+ years in study</li>
            <li>You want to transition from student to worker in Australia</li>
          </ul>

          {/* Final CTA */}
          <h2>Calculate Your Study Benefits</h2>

          <p>
            If you are considering Australian study, calculate how it would
            affect your overall PR score and competitiveness.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              See how Australian study points boost your total score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Check Your PR Points Now →
            </Link>
          </div>

          <h2>Disclaimer</h2>
          <p>
            This article provides general information about Australian study
            points for skilled migration. Requirements change over time. Always
            verify with the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-points-education"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎓</span>
              <span className="font-medium text-gray-900">Education Points</span>
            </Link>
            <Link
              href="/articles/state-nomination-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🏛️</span>
              <span className="font-medium text-gray-900">State Nomination</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-study" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
