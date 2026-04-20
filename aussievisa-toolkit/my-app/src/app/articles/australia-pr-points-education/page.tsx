import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for Education (2026 Qualifications Guide) | AussieVisa Toolkit",
  description:
    "How many PR points for education in Australia? Learn points for PhD, Masters, Bachelor degrees, and how your qualification affects your skilled migration score.",
};

const faqs = [
  {
    question: "Do overseas degrees count for PR points?",
    answer:
      "Yes. Overseas degrees count for education points if they are recognised as equivalent to Australian qualifications. Your skills assessing authority typically assesses overseas qualifications during your skills assessment.",
  },
  {
    question: "Can I claim points for multiple degrees?",
    answer:
      "No. You can only claim points for your highest relevant qualification. You do not get additional points for having multiple Bachelor degrees or adding a Masters to a Bachelor.",
  },
  {
    question: "Do vocational qualifications count?",
    answer:
      "Certain vocational qualifications can count for points. Diploma-level qualifications can give 10 points. However, the qualification must be relevant to your nominated occupation.",
  },
  {
    question: "What if my qualification is not listed?",
    answer:
      "Your qualification is assessed during the skills assessment process. If your assessing authority does not recognise your qualification, you cannot claim education points for it.",
  },
];

export default function EducationPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-education" title="Australia PR Points for Education (2026 Qualifications Guide) | AussieVisa Toolkit" description="How many PR points for education in Australia? Learn points for PhD, Masters, Bachelor degrees, and how your qualification affects your skilled migration score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Education Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Education</h1>

          <p>
            Your educational qualifications can earn you up to 20 points on the
            Australia PR points test. Education is one of the core categories
            where your background can significantly boost your total score.
          </p>

          <p>
            Calculate your total score including education points with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Table */}
          <h2>Education Points Table</h2>

          <p>
            Points are awarded based on the level of your highest qualification:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Qualification Level</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Doctorate (PhD)</td><td className="text-center p-3 font-bold text-blue-700">20 points</td></tr>
                <tr className="border-b"><td className="p-3">Bachelor degree or higher</td><td className="text-center p-3 font-bold text-blue-700">15 points</td></tr>
                <tr className="border-b"><td className="p-3">Diploma or trade qualification</td><td className="text-center p-3 font-bold text-blue-700">10 points</td></tr>
                <tr><td className="p-3">No post-secondary qualification</td><td className="text-center p-3">0 points</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            The key principle is that you claim points for your highest relevant
            qualification. You cannot combine points from multiple degrees.
          </p>

          {/* Breakdown */}
          <h2>Education Points Breakdown</h2>

          <h3>PhD (20 Points)</h3>
          <p>
            A doctoral degree gives the maximum 20 points for education. This
            includes both Australian and recognised overseas PhDs. If you are
            considering further study to boost your score, a PhD could add
            significant value.
          </p>

          <h3>Bachelor or Higher (15 Points)</h3>
          <p>
            This category includes:
          </p>
          <ul>
            <li>Bachelor degrees</li>
            <li>Masters degrees</li>
            <li>Postgraduate diplomas</li>
          </ul>
          <p>
            Note that a Master&apos;s degree gives the same 15 points as a Bachelor.
            The extra study does not add more points in this category, though it
            may help in other areas like work experience.
          </p>

          <h3>Diploma or Trade Qualification (10 Points)</h3>
          <p>
            This level includes:
          </p>
          <ul>
            <li>Technical and Further Education (TAFE) diplomas</li>
            <li>Trade certificates</li>
            <li>Vocational qualifications</li>
          </ul>
          <p>
            For some occupations, a diploma is the standard qualification. Even
            if you have higher education, you might claim this level if it better
            matches your occupation requirements.
          </p>

          <h3>No Qualification (0 Points)</h3>
          <p>
            If you do not have post-secondary qualifications, you receive 0 points
            for education. However, you can still apply if you have other factors
            (work experience, English, age) that bring your score to 65+.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how your education affects your total PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Overseas Degrees */}
          <h2>Overseas Qualifications</h2>

          <p>
            Your overseas degrees can count for education points. Here is how it works:
          </p>

          <h3>Recognition Process</h3>
          <p>
            Your qualifications are assessed as part of your skills assessment.
            The assessing authority determines whether your overseas degree is
            equivalent to an Australian qualification at the appropriate level.
          </p>

          <h3>Common Scenarios</h3>
          <ul>
            <li><strong>UK/US degrees:</strong> Usually recognised at equivalent levels</li>
            <li><strong>Indian degrees:</strong> Often recognised, but may require additional verification</li>
            <li><strong>Chinese degrees:</strong> Generally recognised from major universities</li>
            <li><strong>Other countries:</strong> Assessed case by case</li>
          </ul>

          <p>
            The key is that your assessing authority must accept your qualification
            as part of your positive skills assessment.
          </p>

          {/* Specialist Education */}
          <h2>Specialist Education Qualification</h2>

          <p>
            There is a separate category called "Specialist Education Qualification"
            that awards 10 additional points. This applies to:
          </p>

          <ul>
            <li>Postgraduate research degrees (Masters or PhD) in STEM fields</li>
            <li>Specific fields including science, technology, engineering, and mathematics</li>
          </ul>

          <p>
            This 10 points is in addition to your base education points. So a STEM
            PhD could give you 20 (education) + 10 (specialist) = 30 points just
            from qualifications.
          </p>

          <p>
            Check the Department of Home Affairs website for the current list of
            eligible fields and qualifications.
          </p>

          {/* Study in Australia */}
          <h2>Study in Australia Bonus</h2>

          <p>
            While Australian study does not add extra points in the education
            category, it offers other advantages:
          </p>

          <h3>Graduate Visa Pathway</h3>
          <p>
            Studying in Australia can lead to a temporary graduate visa (Subclass
            485), which allows you to work and gain Australian experience.
          </p>

          <h3>State Nomination Preferences</h3>
          <p>
            Some states give priority to applicants who studied in that state.
            This can improve your nomination chances even without extra points.
          </p>

          <h3>Stronger Application</h3>
          <p>
            Australian qualifications are automatically recognised, and local study
            demonstrates your commitment to living in Australia.
          </p>

          {/* Strategy */}
          <h2>Education Strategy Tips</h2>

          <h3>Claim the Highest Level</h3>
          <p>
            Always claim points for your highest relevant qualification. If you
            have a PhD and a Bachelor, claim the PhD (20 points), not the Bachelor
            (15 points).
          </p>

          <h3>Consider Further Study</h3>
          <p>
            If you have a Bachelor and are sitting at 60–65 points, a Masters or
            PhD could push you over the threshold. However, weigh the time and
            cost against the benefit.
          </p>

          <h3>Check Specialist Options</h3>
          <p>
            If you studied in STEM, check whether your degree qualifies for the
            additional 10 Specialist Education points.
          </p>

          <h3>Document Your Qualifications</h3>
          <p>
            Have your transcripts, certificates, and any professional registration
            ready. You will need these for both skills assessment and visa application.
          </p>

          {/* Common Mistakes */}
          <h2>Common Education Mistakes</h2>

          <h3>Claiming Points Without Assessment</h3>
          <p>
            You cannot claim education points just because you have a degree. Your
            skills assessing authority must recognise your qualification as part
            of your positive assessment.
          </p>

          <h3>Claiming Multiple Qualifications</h3>
          <p>
            You only get points for one qualification — your highest. Do not try
            to claim points for multiple degrees.
          </p>

          <h3>Ignoring Specialist Education</h3>
          <p>
            Many STEM graduates miss out on the additional 10 Specialist Education
            points. Check if your research degree qualifies.
          </p>

          <h3>Unrecognised Institutions</h3>
          <p>
            Degrees from non-accredited or low-quality institutions may not be
            recognised. Ensure your institution is reputable and recognised in
            your home country.
          </p>

          {/* Final CTA */}
          <h2>Calculate Your Education Points</h2>

          <p>
            Education is a core part of your PR points. Check your total to see
            where your qualifications place you.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your total PR points including education.
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
            This article provides general information about education points for
            Australian skilled migration. Requirements change periodically. Always
            verify with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            and your relevant skills assessing authority.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-points-age"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📅</span>
              <span className="font-medium text-gray-900">Age Points</span>
            </Link>
            <Link
              href="/articles/australia-pr-points-english"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🌐</span>
              <span className="font-medium text-gray-900">English Points</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-education" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
