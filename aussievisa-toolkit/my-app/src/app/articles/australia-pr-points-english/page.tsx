import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for English (2026 IELTS/PTE Score Guide) | AussieVisa Toolkit",
  description:
    "How many PR points for English in Australia? Learn IELTS, PTE, TOEFL score requirements for Competent, Proficient, and Superior English levels.",
};

const faqs = [
  {
    question: "What IELTS score do I need for Australia PR?",
    answer:
      "The minimum is IELTS 6.0 in each band for Competent English (0 points). For Proficient English (10 points), you need IELTS 7.0 in each band. For Superior English (20 points), you need IELTS 8.0 in each band.",
  },
  {
    question: "Is PTE accepted for Australian skilled migration?",
    answer:
      "Yes. PTE Academic is widely accepted. The equivalent scores are: Competent (PTE 50), Proficient (PTE 65), Superior (PTE 79). Many applicants prefer PTE because it often feels easier to prepare for than IELTS.",
  },
  {
    question: "How long is the English test valid for PR?",
    answer:
      "Most English test results are valid for 3 years from the test date. Your results must be valid at the time you submit your EOI and when you receive your invitation. Plan your timeline carefully.",
  },
  {
    question: "Can I retake the test to improve my score?",
    answer:
      "Yes. You can take the test as many times as you need. Many applicants take it multiple times to achieve their target score. Just make sure your final result is valid when you need it.",
  },
];

export default function EnglishPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-english" title="Australia PR Points for English (2026 IELTS/PTE Score Guide) | AussieVisa Toolkit" description="How many PR points for English in Australia? Learn IELTS, PTE, TOEFL score requirements for Competent, Proficient, and Superior English levels." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">English Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for English Language</h1>

          <p>
            English proficiency can give you up to 20 points on your PR points test
            — the second-highest category after age. For many applicants, improving
            their English score is the fastest way to boost their total.
          </p>

          <p>
            Calculate your score including English points with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Overview */}
          <h2>English Points Breakdown</h2>

          <p>
            Australia recognises three English levels for points purposes, each
            giving different points:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">English Level</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Superior English</td><td className="text-center p-3 font-bold text-blue-700">20 points</td></tr>
                <tr className="border-b"><td className="p-3">Proficient English</td><td className="text-center p-3 font-bold text-blue-700">10 points</td></tr>
                <tr className="border-b"><td className="p-3">Competent English</td><td className="text-center p-3 font-bold text-blue-700">0 points</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Note that Competent English gives 0 points but is still required as a
            minimum. The real points come from Proficient and Superior levels.
          </p>

          {/* IELTS */}
          <h2>IELTS Score Requirements</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">English Level</th>
                  <th className="text-center p-3 font-semibold">IELTS Score</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Superior</td><td className="text-center p-3">8.0 each band</td><td className="text-center p-3">20</td></tr>
                <tr className="border-b"><td className="p-3">Proficient</td><td className="text-center p-3">7.0 each band</td><td className="text-center p-3">10</td></tr>
                <tr><td className="p-3">Competent</td><td className="text-center p-3">6.0 each band</td><td className="text-center p-3">0</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            IELTS scores must be met in ALL four bands: Reading, Writing, Listening,
            and Speaking. If you score 8.0 in three bands but 7.5 in one, you only
            qualify for Proficient (10 points), not Superior.
          </p>

          {/* PTE */}
          <h2>PTE Academic Score Requirements</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">English Level</th>
                  <th className="text-center p-3 font-semibold">PTE Score</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Superior</td><td className="text-center p-3">79 each</td><td className="text-center p-3">20</td></tr>
                <tr className="border-b"><td className="p-3">Proficient</td><td className="text-center p-3">65 each</td><td className="text-center p-3">10</td></tr>
                <tr><td className="p-3">Competent</td><td className="text-center p-3">50 each</td><td className="text-center p-3">0</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            PTE Academic is a computer-based test. Many applicants find it more
            straightforward than IELTS because it uses automated scoring. The
            Speaking and Writing sections, in particular, feel different from
            IELTS and suit some test-takers better.
          </p>

          {/* TOEFL */}
          <h2>TOEFL iBT Score Requirements</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">English Level</th>
                  <th className="text-center p-3 font-semibold">TOEFL Score</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Superior</td><td className="text-center p-3">Total 110+</td><td className="text-center p-3">20</td></tr>
                <tr className="border-b"><td className="p-3">Proficient</td><td className="text-center p-3">Total 94+</td><td className="text-center p-3">10</td></tr>
                <tr><td className="p-3">Competent</td><td className="text-center p-3">Total 64+</td><td className="text-center p-3">0</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Check the Department of Home Affairs website for the most current
            TOEFL score equivalencies, as these can change.
          </p>

          {/* Impact */}
          <h2>How Much Do English Points Matter?</h2>

          <p>
            English points can make or break your application. Consider the impact:
          </p>

          <h3>Competent to Proficient: +10 Points</h3>
          <p>
            Going from 0 to 10 points may not seem like much, but a 10-point
            difference often separates successful applicants from those who wait
            indefinitely for invitations.
          </p>

          <h3>Proficient to Superior: +10 More Points</h3>
          <p>
            Going from 10 to 20 points is even more impactful. Superior English
            alone can push a borderline application into a competitive range.
          </p>

          <h3>Competent to Superior: +20 Points</h3>
          <p>
            The full 20-point difference is massive. It is equivalent to the gap
            between a 189 and 491 nomination bonus. Investing in English preparation
            can be the single most effective strategy.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how different English levels change your total PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Preparation Tips */}
          <h2>Tips to Improve Your English Score</h2>

          <h3>Choose the Right Test</h3>
          <p>
            If IELTS Writing keeps pulling your score down, try PTE. If you
            prefer face-to-face speaking, IELTS might suit you better. Some
            applicants score significantly higher on one test versus the other.
          </p>

          <h3>Focus on Weak Bands</h3>
          <p>
            Your overall score is determined by your weakest band. If three bands
            are Superior but one is Proficient, you only get Proficient points.
            Target your weakest area first.
          </p>

          <h3>Practice with Real Materials</h3>
          <p>
            Use official practice tests. For IELTS, the Cambridge test books are
            excellent. For PTE, the official scored practice tests give accurate
            predictions.
          </p>

          <h3>Consider a Preparation Course</h3>
          <p>
            If you are close to the next level, a targeted course can push you
            over. Many test centres and online platforms offer preparation
            specifically for immigration English requirements.
          </p>

          <h3>Time Your Test Well</h3>
          <p>
            Do not wait until the last minute. Take your English test early so you
            have time to retake it if needed. Remember results are valid for 3 years.
          </p>

          {/* Common Mistakes */}
          <h2>Common Mistakes</h2>

          <h3>Taking the Test Too Late</h3>
          <p>
            Many applicants focus on skills assessment first and leave English
            for later. This can backfire if you need multiple attempts. Take the
            test early in your preparation.
          </p>

          <h3>Assuming One Test Is Easier</h3>
          <p>
            Neither IELTS nor PTE is universally easier. It depends on your
            strengths. Try a practice test for each before committing.
          </p>

          <h3>Ignoring Band Requirements</h3>
          <p>
            Some applicants aim for a high average but neglect specific bands.
            Remember that ALL bands must meet the minimum. A single weak band
            costs you 10 points.
          </p>

          {/* Which Test */}
          <h2>IELTS vs PTE: Which Should You Take?</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Factor</th>
                  <th className="text-center p-3 font-semibold">IELTS</th>
                  <th className="text-center p-3 font-semibold">PTE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Format</td><td className="text-center p-3">Paper or computer</td><td className="text-center p-3">Computer only</td></tr>
                <tr className="border-b"><td className="p-3">Speaking</td><td className="text-center p-3">Face-to-face</td><td className="text-center p-3">Microphone (automated)</td></tr>
                <tr className="border-b"><td className="p-3">Results</td><td className="text-center p-3">13 days</td><td className="text-center p-3">2–5 days</td></tr>
                <tr><td className="p-3">Cost</td><td className="text-center p-3">Similar</td><td className="text-center p-3">Similar</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Many immigration applicants prefer PTE because of the faster results
            and automated scoring. However, the best choice depends on your
            personal preferences and test-taking style.
          </p>

          {/* Final CTA */}
          <h2>Check How English Affects Your Score</h2>

          <p>
            English is one of the few factors you can actively improve. Calculate
            your score at different English levels to see the impact.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Try different English levels in the calculator to see how they affect your total.
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
            This article provides general information about English test scores for
            Australian skilled migration. Score equivalencies may change. Always
            verify with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            for the most current requirements.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-points-age"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📅</span>
              <span className="font-medium text-gray-900">Age Points Guide</span>
            </Link>
            <Link
              href="/articles/how-pr-points-calculated-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📊</span>
              <span className="font-medium text-gray-900">How Points Calculated</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-english" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
