import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for Partner Skills (2026 Guide) | AussieVisa Toolkit",
  description:
    "How many PR points can your partner add? Learn about partner skills, English, and qualifications that can boost your Australia skilled migration score.",
};

const faqs = [
  {
    question: "How many points does a skilled partner add?",
    answer:
      "A partner with Competent English and a positive skills assessment in a relevant occupation adds 10 points. A partner with only Competent English (no skills assessment) adds 5 points. No points are added if your partner has neither English nor skills.",
  },
  {
    question: "Can same-sex partners claim points?",
    answer:
      "Yes. Australia recognises de facto and same-sex relationships for immigration purposes. The same rules apply regardless of your partner's gender.",
  },
  {
    question: "What if my partner is an Australian citizen?",
    answer:
      "If your partner is an Australian citizen or permanent resident, you may be eligible for partner visa pathways instead. The points system is designed for independent skilled migration where both partners are migrants.",
  },
  {
    question: "Do I get points if my partner is included in my application?",
    answer:
      "Simply including your partner does not give points. The points come from your partner meeting specific criteria: skills assessment, English level, or both.",
  },
];

export default function PartnerPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-partner" title="Australia PR Points for Partner Skills (2026 Guide) | AussieVisa Toolkit" description="How many PR points can your partner add? Learn about partner skills, English, and qualifications that can boost your Australia skilled migration score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Partner Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Partner Skills</h1>

          <p>
            Your partner&apos;s qualifications can add valuable points to your Australia
            PR application. Depending on their skills and English level, they can
            contribute up to 10 extra points to your total score.
          </p>

          <p>
            Calculate how your partner affects your score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Table */}
          <h2>Partner Points Breakdown</h2>

          <p>
            Partner points depend on your partner&apos;s skills assessment and English
            proficiency:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Partner Situation</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Partner has skills assessment + Competent English</td><td className="text-center p-3 font-bold text-blue-700">10 points</td></tr>
                <tr className="border-b"><td className="p-3">Partner has Competent English only</td><td className="text-center p-3 font-bold text-blue-700">5 points</td></tr>
                <tr className="border-b"><td className="p-3">You are single (or partner is Australian)</td><td className="text-center p-3 font-bold text-blue-700">10 points</td></tr>
                <tr><td className="p-3">Partner has neither skills nor Competent English</td><td className="text-center p-3">0 points</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Note that single applicants get 10 points automatically. This means
            having a non-skilled partner can actually reduce your total compared
            to applying as a single person.
          </p>

          {/* Breakdown */}
          <h2>How Partner Points Work</h2>

          <h3>Maximum Points: Skilled Partner (10 points)</h3>
          <p>
            Your partner can add 10 points if they:
          </p>
          <ul>
            <li>Are under 45 years of age</li>
            <li>Have a positive skills assessment in an occupation on the same list as yours</li>
            <li>Have at least Competent English</li>
          </ul>
          <p>
            This is the most valuable partner scenario. If your partner qualifies,
            this 10 points can push you over the invitation threshold.
          </p>

          <h3>Medium Points: English Only (5 points)</h3>
          <p>
            Your partner can add 5 points if they:
          </p>
          <ul>
            <li>Have Competent English (IELTS 6.0 or equivalent)</li>
            <li>Do NOT have a skills assessment</li>
          </ul>
          <p>
            This is easier to achieve than the full 10 points. Even basic English
            proficiency can help your application.
          </p>

          <h3>Single Applicants: Automatic 10 Points</h3>
          <p>
            If you are single (or your partner is an Australian citizen/PR not
            included in your application), you get 10 points automatically.
          </p>
          <p>
            This means single applicants start with an advantage. If you have a
            partner without English or skills, including them in your application
            could reduce your total by 10 points.
          </p>

          <h3>No Points: Unskilled Partner (0 points)</h3>
          <p>
            If your partner:
          </p>
          <ul>
            <li>Is over 45 years old</li>
            <li>Has neither Competent English nor a skills assessment</li>
          </ul>
          <p>
            You get 0 partner points. This is the scenario where including your
            partner costs you the 10 points you would have had as a single applicant.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how your partner affects your PR points.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate With/Without Partner →
            </Link>
          </div>

          {/* Skills Assessment */}
          <h2>Partner Skills Assessment</h2>

          <h3>What Is Required?</h3>
          <p>
            For your partner to contribute points through skills, they need:
          </p>
          <ul>
            <li>A positive skills assessment from the relevant authority</li>
            <li>An occupation on the same skilled occupation list as your nominated occupation</li>
            <li>Competent English (minimum requirement)</li>
          </ul>

          <h3>Which Occupation Lists Count?</h3>
          <p>
            Your partner&apos;s occupation does not need to match yours. It just needs
            to be on a relevant skilled occupation list. Check whether both
            occupations appear on the same list (MLTSSL, STSOL, or ROL).
          </p>

          <h3>Cost and Time</h3>
          <p>
            A partner skills assessment costs similar to your own assessment and
            takes a similar amount of time. If your partner&apos;s occupation is in
            demand, the investment can be worthwhile for the 10 points.
          </p>

          {/* English Requirements */}
          <h2>Partner English Requirements</h2>

          <h3>Competent English Standard</h3>
          <p>
            Your partner needs to meet the same Competent English standard as you:
          </p>
          <ul>
            <li>IELTS: 6.0 in each band</li>
            <li>PTE: 50 in each section</li>
            <li>Other tests: equivalent scores</li>
          </ul>

          <p>
            Note: Your partner only needs Competent English to add points. They
            do not need Proficient or Superior English to contribute partner points.
          </p>

          <h3>Preparing Your Partner</h3>
          <p>
            If your partner is not confident in English, consider:
          </p>
          <ul>
            <li>English classes or preparation courses</li>
            <li>Practice tests to build confidence</li>
            <li>Taking the test early so you can retake if needed</li>
          </ul>

          {/* Strategic Considerations */}
          <h2>Strategic Considerations</h2>

          <h3>Should You Include Your Partner?</h3>
          <p>
            This depends on your situation:
          </p>

          <p>
            <strong>Include them if:</strong>
          </p>
          <ul>
            <li>They have skills assessment and English (10 points)</li>
            <li>They have English but no skills (5 points — better than nothing)</li>
            <li>You want them to receive permanent residency with you</li>
          </ul>

          <p>
            <strong>Consider separate applications if:</strong>
          </p>
          <ul>
            <li>They have neither skills nor English (0 points)</li>
            <li>Your score without them reaches 65+</li>
            <li>They can apply separately later</li>
          </ul>

          <p>
            Remember: If you apply as single now and add your partner later, they
            will need a separate visa application (which costs more and takes
            longer).
          </p>

          <h3>Timing Your Application</h3>
          <p>
            If your partner is close to meeting English requirements, it may be
            worth waiting. The difference between 0 and 5 points (or 5 and 10)
            can determine whether you receive an invitation.
          </p>

          {/* Practical Tips */}
          <h2>Practical Tips</h2>

          <h3>Document Everything</h3>
          <p>
            Your partner will need:
          </p>
          <ul>
            <li>English test results</li>
            <li>Skills assessment (if claiming skills points)</li>
            <li>Evidence of your relationship</li>
            <li>Identity documents</li>
          </ul>

          <h3>Relationship Evidence</h3>
          <p>
            You must prove your relationship is genuine and ongoing. Common evidence:
          </p>
          <ul>
            <li>Joint bank accounts or financial documents</li>
            <li>Joint lease or property ownership</li>
            <li>Photos and travel together</li>
            <li>Statutory declarations from friends/family</li>
          </ul>

          <h3>Plan Together</h3>
          <p>
            Discuss your migration strategy as a couple. Decide whether your partner
            will pursue skills assessment, English improvement, or if you will apply
            separately. A united approach works best.
          </p>

          {/* Comparison */}
          <h2>Partner Points vs Going Solo</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Scenario</th>
                  <th className="text-center p-3 font-semibold">Partner Points</th>
                  <th className="text-center p-3 font-semibold">Single Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Skilled partner</td><td className="text-center p-3 text-blue-700 font-bold">10</td><td className="text-center p-3">10</td></tr>
                <tr className="border-b"><td className="p-3">English-only partner</td><td className="text-center p-3">5</td><td className="text-center p-3 text-blue-700 font-bold">10</td></tr>
                <tr><td className="p-3">Unskilled partner</td><td className="text-center p-3">0</td><td className="text-center p-3 text-blue-700 font-bold">10</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            As you can see, a skilled partner matches the single applicant points,
            but an unskilled partner leaves you 10 points behind.
          </p>

          {/* Final CTA */}
          <h2>Calculate Your Partner Points</h2>

          <p>
            Your partner can be an asset to your PR application. Calculate the
            impact to see the best strategy.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Try different partner scenarios in the calculator.
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
            This article provides general information about partner points for
            Australian skilled migration. Requirements change over time. Always
            verify with the{" "}
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
              href="/articles/australia-pr-points-education"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎓</span>
              <span className="font-medium text-gray-900">Education Points</span>
            </Link>
            <Link
              href="/articles/australia-pr-points-work-experience"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">💼</span>
              <span className="font-medium text-gray-900">Work Experience</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-partner" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
