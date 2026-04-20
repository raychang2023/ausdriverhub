import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for Work Experience (2026 Guide) | AussieVisa Toolkit",
  description:
    "How many PR points for work experience in Australia? Learn the points table, requirements, and how to maximise your experience score.",
};

const faqs = [
  {
    question: "Does any work experience count?",
    answer:
      "No. Your work experience must be in your nominated occupation or a closely related field. Experience in unrelated jobs does not earn points. You also need to meet minimum hours requirements (usually 20 hours per week).",
  },
  {
    question: "Can I count experience before my skills assessment?",
    answer:
      "Yes. Work experience before your skills assessment can count, as long as it is relevant to your nominated occupation. However, you must provide evidence like payslips, references, and employment letters.",
  },
  {
    question: "How many years of experience give maximum points?",
    answer:
      "You need at least 8 years of skilled experience to get the maximum 20 points. However, there is a cap: you can only get 20 points total for both Australian and overseas work experience combined.",
  },
  {
    question: "Does Australian work experience give more points?",
    answer:
      "No. The points are the same (up to 20) regardless of whether the experience is Australian or overseas. However, Australian experience may strengthen your overall application for state nomination.",
  },
];

export default function WorkExperiencePointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-work-experience" title="Australia PR Points for Work Experience (2026 Guide) | AussieVisa Toolkit" description="How many PR points for work experience in Australia? Learn the points table, requirements, and how to maximise your experience score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Work Experience Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Work Experience</h1>

          <p>
            Work experience can earn you up to 20 points on your PR points test.
            This makes it one of the most valuable factors after age and English.
            Understanding how experience points work helps you maximise your score.
          </p>

          <p>
            Calculate your total score including work experience with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Table */}
          <h2>Work Experience Points Table</h2>

          <p>
            Points are awarded based on years of skilled work experience in your
            nominated occupation or a closely related field:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Years of Experience</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">8+ years</td><td className="text-center p-3 font-bold text-blue-700">20 points</td></tr>
                <tr className="border-b"><td className="p-3">5–7 years</td><td className="text-center p-3 font-bold text-blue-700">15 points</td></tr>
                <tr className="border-b"><td className="p-3">3–4 years</td><td className="text-center p-3 font-bold text-blue-700">10 points</td></tr>
                <tr className="border-b"><td className="p-3">1–2 years</td><td className="text-center p-3 font-bold text-blue-700">5 points</td></tr>
                <tr><td className="p-3">Less than 1 year</td><td className="text-center p-3">0 points</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            The maximum is 20 points. However, there is an important cap: you cannot
            earn more than 20 points total, even if you have extensive Australian
            AND overseas experience.
          </p>

          {/* Requirements */}
          <h2>Experience Requirements</h2>

          <h3>What Counts as Skilled Experience?</h3>
          <p>
            Your work experience must meet these criteria:
          </p>

          <ul>
            <li>It must be in your nominated occupation or closely related</li>
            <li>You must have worked at least 20 hours per week</li>
            <li>It must be paid work (volunteer does not count)</li>
            <li>You must meet skill level requirements for the occupation</li>
          </ul>

          <h3>Australian vs Overseas Experience</h3>
          <p>
            Both Australian and overseas experience earn the same points. There
            is no bonus for Australian experience in terms of the points test.
            However, Australian experience may improve your state nomination chances.
          </p>

          <h3>The 20-Point Cap</h3>
          <p>
            This is crucial: the maximum is 20 points total, combining both Australian
            and overseas experience. You cannot stack 10 points for overseas plus
            10 for Australian to get 20. The cap is firm.
          </p>

          {/* Impact */}
          <h2>How Work Experience Points Affect Your Score</h2>

          <p>
            Work experience can add significant points to your application:
          </p>

          <h3>5 Points: Entry Level</h3>
          <p>
            Even 1–2 years of experience adds 5 points. This can be the difference
            between 60 and 65 — the minimum requirement.
          </p>

          <h3>10 Points: Solid Contribution</h3>
          <p>
            3–4 years gives you 10 points. Combined with other factors, this
            builds a respectable score.
          </p>

          <h3>15 Points: Strong Profile</h3>
          <p>
            5–7 years is 15 points. At this level, your experience becomes a
            real advantage in the invitation rounds.
          </p>

          <h3>20 Points: Maximum Value</h3>
          <p>
            8+ years gives the full 20 points. This is the ceiling, regardless
            of how much additional experience you have.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how your work experience affects your total PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Evidence */}
          <h2>Proving Your Work Experience</h2>

          <h3>Required Documents</h3>
          <p>
            You must provide evidence of your work experience. Commonly accepted
            documents include:
          </p>

          <ul>
            <li>Employment letters from employers</li>
            <li>Pay slips or bank statements showing salary deposits</li>
            <li>Tax records (PAYE, Superannuation)</li>
            <li>Reference letters with job duties and dates</li>
            <li>CV/Resume outlining your employment history</li>
          </ul>

          <h3>What Reference Letters Should Include</h3>
          <p>
            Your reference letters should include:
          </p>

          <ul>
            <li>Your job title and position</li>
            <li>Start and end dates of employment</li>
            <li>Key responsibilities and duties</li>
            <li>Hours worked per week</li>
            <li>Salary (if possible)</li>
            <li>Employer contact details</li>
          </ul>

          <h3>Timing of Experience</h3>
          <p>
            Work experience can be from before or after your skills assessment.
            However, it must be recent enough to be considered relevant. Generally,
            experience from the past 10 years carries more weight.
          </p>

          {/* Strategy */}
          <h2>Maximising Your Experience Points</h2>

          <h3>Get Experience Before You Apply</h3>
          <p>
            If you are short on experience, consider gaining more before applying.
            Even 1–2 additional years can add 5 points.
          </p>

          <h3>Ensure It Is Documented</h3>
          <p>
            Start gathering employment evidence early. Reference letters are
            easiest to get while you are still employed or when relationships
            are fresh.
          </p>

          <h3>Count All Relevant Experience</h3>
          <p>
            Part-time work, contract work, and even some self-employment can count
            if it meets the requirements. A migration agent can help determine
            what counts.
          </p>

          <h3>Do Not Overlook Related Occupations</h3>
            <p>
              Experience in closely related occupations may count. For example,
              a software developer might count experience as a systems analyst.
              Check with your skills assessing authority.
            </p>

          {/* Australian Experience */}
          <h2>Australian Work Experience: Worth It?</h2>

          <p>
            While Australian experience does not give extra points, it offers
            other advantages:
          </p>

          <ul>
            <li>Strengthens your state nomination application</li>
            <li>Demonstrates ability to work in Australian conditions</li>
            <li>Builds professional networks in Australia</li>
            <li>Improves your English in workplace context</li>
          </ul>

          <p>
            If you have the opportunity to work in Australia before applying
            (on a temporary visa), it can strengthen your overall profile even
            if it only adds a few points.
          </p>

          {/* Common Mistakes */}
          <h2>Common Experience Mistakes</h2>

          <h3>Claiming Unrelated Experience</h3>
          <p>
            Only experience in your nominated occupation or closely related work
            counts. Make sure your experience aligns with your skills assessment.
          </p>

          <h3>Insufficient Hours</h3>
          <p>
            Part-time work below 20 hours per week generally does not count.
            Ensure you meet the minimum hour requirement.
          </p>

          <h3>Poor Documentation</h3>
          <p>
            Vague reference letters or missing documents cause delays and
            rejections. Get proper evidence before submitting your application.
          </p>

          <h3>Ignoring the Cap</h3>
          <p>
            Remember you cannot exceed 20 points total. If you already have 15
            from overseas, getting more Australian experience will not add more
            points.
          </p>

          {/* Final CTA */}
          <h2>Check Your Experience Score</h2>

          <p>
            Work experience points add up quickly. Calculate your total to see
            where you stand.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points including work experience.
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
            This article provides general information about work experience points
            for Australian skilled migration. Requirements may change. Always verify
            with the{" "}
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

          <RelatedArticles currentSlug="australia-pr-points-work-experience" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
