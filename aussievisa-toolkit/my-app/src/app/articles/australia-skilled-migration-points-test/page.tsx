import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia Skilled Migration Points Test (2026 Overview) | AussieVisa Toolkit",
  description:
    "Complete overview of the Australia skilled migration points test. Learn all scoring categories, minimum requirements, and how to maximise your PR score.",
};

const faqs = [
  {
    question: "What is the minimum score for skilled migration?",
    answer:
      "The minimum score is 65 points to submit an Expression of Interest (EOI). However, meeting the minimum does not guarantee an invitation. Most successful applicants have scores of 75–85 or higher.",
  },
  {
    question: "Do I need 65 points for every visa type?",
    answer:
      "Yes. The 65-point minimum applies to 189, 190, and 491 visas. However, with state nomination (5 or 15 bonus points), your effective score may be higher than your base 65.",
  },
  {
    question: "Can I lose points after submitting my EOI?",
    answer:
      "Yes. Points are calculated at the time of invitation, not when you submit your EOI. If you age into a lower bracket or your English test expires before invitation, your score will decrease.",
  },
  {
    question: "Is there a maximum points score?",
    answer:
      "There is no official maximum, but practical maximums exist. Age (30) + English (20) + Work experience (20) + Education (20) = 90 points without state nomination. With state nomination, you can reach 105 points or more.",
  },
];

export default function PointsTestOverviewPage() {
  return (
<>
        <ArticleSEO slug="australia-skilled-migration-points-test" title="Australia Skilled Migration Points Test (2026 Overview) | AussieVisa Toolkit" description="Complete overview of the Australia skilled migration points test. Learn all scoring categories, minimum requirements, and how to maximise your PR score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Points Test Overview</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia Skilled Migration Points Test Overview</h1>

          <p>
            The Australia skilled migration points test is the system used to rank
            applicants for skilled visas. Your total score determines whether you
            receive an invitation to apply for permanent residency.
          </p>

          <p>
            Understanding how the points test works is essential for planning your
            migration strategy. Calculate your current score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* What Is Points Test */}
          <h2>What Is the Points Test?</h2>

          <p>
            The points test assigns scores based on various factors the Australian
            government considers important for skilled migrants. These factors
            include age, English ability, work experience, education, and more.
          </p>

          <p>
            The test applies to three main visa categories:
          </p>

          <ul>
            <li><Link href="/articles/189-visa-requirements-australia" className="text-blue-700 hover:underline">189 Skilled Independent</Link></li>
            <li><Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">190 Skilled Nominated</Link></li>
            <li><Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">491 Skilled Regional</Link></li>
          </ul>

          <p>
            Each visa uses the same points test, but state nomination adds bonus
            points for the 190 and 491 visas.
          </p>

          {/* Minimum Requirement */}
          <h2>Minimum Score Requirement</h2>

          <p>
            The minimum score to submit an Expression of Interest (EOI) is 65 points.
            However, this is just the entry threshold. In practice, you often need
            more to receive an invitation.
          </p>

          <h3>Why 65 Is Not Enough</h3>
          <p>
            While you can submit an EOI with 65 points, most invitation rounds show
            that applicants with 75–85+ points receive invitations. The 65-point
            minimum ensures only serious applicants enter the pool, but competition
            pushes the effective threshold higher.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See where your score ranks and whether it is competitive.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Points Categories */}
          <h2>Points Categories at a Glance</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-center p-3 font-semibold">Maximum Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3"><Link href="/articles/australia-pr-points-age" className="text-blue-700 hover:underline">Age</Link></td><td className="text-center p-3 font-bold">30</td></tr>
                <tr className="border-b"><td className="p-3"><Link href="/articles/australia-pr-points-english" className="text-blue-700 hover:underline">English Language</Link></td><td className="text-center p-3 font-bold">20</td></tr>
                <tr className="border-b"><td className="p-3"><Link href="/articles/australia-pr-points-work-experience" className="text-blue-700 hover:underline">Skilled Employment</Link></td><td className="text-center p-3 font-bold">20</td></tr>
                <tr className="border-b"><td className="p-3"><Link href="/articles/australia-pr-points-education" className="text-blue-700 hover:underline">Educational Qualifications</Link></td><td className="text-center p-3 font-bold">20</td></tr>
                <tr className="border-b"><td className="p-3"><Link href="/articles/australia-pr-points-partner" className="text-blue-700 hover:underline">Partner Skills</Link></td><td className="text-center p-3 font-bold">10</td></tr>
                <tr className="border-b"><td className="p-3">State Nomination (190)</td><td className="text-center p-3 font-bold">5</td></tr>
                <tr><td className="p-3">State Nomination (491)</td><td className="text-center p-3 font-bold">15</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Other smaller categories (like Australian study, specialist education)
            can add additional points. But the categories above represent the main
            scoring opportunities.
          </p>

          {/* How Points Are Calculated */}
          <h2>How Points Are Calculated</h2>

          <p>
            Your points are calculated based on your situation at the time of
            invitation. This is crucial: your score can change between submitting
            your EOI and receiving an invitation.
          </p>

          <h3>Timing Matters</h3>
          <p>
            Consider these scenarios:
          </p>
          <ul>
            <li>You submit your EOI at age 32 (30 points)</li>
            <li>You turn 33 before getting invited</li>
            <li>Your age points drop to 25</li>
            <li>Your total score decreases by 5 points</li>
          </ul>

          <p>
            This is why timing your application is important. The sooner you
            receive an invitation, the less chance your circumstances change.
          </p>

          <h3>Valid Documents</h3>
          <p>
            Your supporting documents (skills assessment, English test) must be
            valid at the time of invitation. If they expire, you lose those points
            until you obtain new documents.
          </p>

          {/* Maximising Score */}
          <h2>How to Maximise Your Points</h2>

          <h3>1. Optimise Your Age Points</h3>
          <p>
            If you are approaching an age bracket change, time your application
            carefully. Submitting before you turn 33, 40, or 45 can make a
            significant difference.
          </p>

          <h3>2. Improve Your English</h3>
          <p>
            English is one of the few factors you can actively improve. Moving
            from Competent to Superior English adds 20 points — often the single
            biggest improvement available.
          </p>

          <h3>3. Gain Work Experience</h3>
          <p>
            Each additional year of relevant work experience adds points until
            you reach the 20-point maximum. Plan your career to maximise skilled
            experience in your nominated occupation.
          </p>

          <h3>4. Consider Further Study</h3>
          <p>
            A higher qualification can add education points. However, weigh the
            time and cost against the points benefit.
          </p>

          <h3>5. Explore State Nomination</h3>
          <p>
            State nomination adds 5 or 15 bonus points. Research which states
            need your occupation and consider whether you can meet their
            requirements.
          </p>

          <p>
            Learn more about{" "}
            <Link href="/articles/state-nomination-australia" className="text-blue-700 hover:underline">
              state nomination strategies
            </Link>.
          </p>

          {/* Competitive Scores */}
          <h2>What Is a Competitive Score?</h2>

          <p>
            While the minimum is 65, competitive scores vary by occupation and
            visa type:
          </p>

          <h3>189 Visa Competition</h3>
          <p>
            The 189 visa is the most competitive. Recent trends suggest you need
            85+ points for many occupations. Some high-demand occupations require
            90 or even 95 points.
          </p>

          <h3>190 Visa Competition</h3>
          <p>
            With 5 bonus points, the 190 is slightly less competitive. Scores
            of 75–85 are often sufficient, though popular states may require more.
          </p>

          <h3>491 Visa Competition</h3>
          <p>
            The 491 with 15 bonus points is the most accessible. Scores of 65–75
            can be competitive, especially for regional occupations.
          </p>

          <p>
            Read more about{" "}
            <Link href="/articles/what-is-good-pr-score-australia" className="text-blue-700 hover:underline">
              what makes a good PR score
            </Link>.
          </p>

          {/* Common Mistakes */}
          <h2>Common Points Test Mistakes</h2>

          <h3>Claiming Points Without Evidence</h3>
          <p>
            You cannot claim points just because you believe you qualify. You
            need valid, current evidence: skills assessments, English tests, and
            other documentation.
          </p>

          <h3>Ignoring the Age Deadline</h3>
          <p>
            Applicants who wait too long and turn 45 become ineligible. Do not
            let age creep up on you while you wait for an invitation.
          </p>

          <h3>Expiring Documents</h3>
          <p>
            English tests and skills assessments expire. Monitor expiry dates
            and renew documents before they lapse.
          </p>

          <h3>Overestimating Scores</h3>
          <p>
            Be honest in your self-assessment. Overestimating your points leads
            to disappointment when invitations do not arrive.
          </p>

          {/* EOI System */}
          <h2>How the EOI System Works</h2>

          <p>
            The points test is integrated with the Expression of Interest (EOI)
            system:
          </p>

          <ol>
            <li>Calculate your points accurately</li>
            <li>Submit an EOI on SkillSelect with your claimed score</li>
            <li>Wait in the pool with other applicants</li>
            <li>If your score is competitive, receive an invitation</li>
            <li>Apply for your visa within 60 days</li>
          </ol>

          <p>
            Your EOI remains in the pool for 2 years. You can update it anytime
            your circumstances change (new English score, more experience, etc.).
          </p>

          {/* Final CTA */}
          <h2>Calculate Your Points Score</h2>

          <p>
            The points test is the foundation of skilled migration. Calculate
            your current score and identify opportunities to improve.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Get an accurate calculation of your PR points.
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
            This article provides a general overview of the Australia skilled
            migration points test. Specific requirements and invitation trends
            change regularly. Always verify with the{" "}
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
              href="/articles/how-pr-points-calculated-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📊</span>
              <span className="font-medium text-gray-900">How Points Calculated</span>
            </Link>
            <Link
              href="/articles/australia-pr-points-system-explained"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📖</span>
              <span className="font-medium text-gray-900">Points System Explained</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-skilled-migration-points-test" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
