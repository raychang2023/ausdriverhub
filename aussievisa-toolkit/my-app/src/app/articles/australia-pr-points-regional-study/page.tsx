import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for Regional Study (2026 Guide) | AussieVisa Toolkit",
  description:
    "How to get bonus PR points for regional study in Australia. Learn eligible locations, requirements, and how regional study can boost your skilled migration score.",
};

const faqs = [
  {
    question: "How many points for regional study?",
    answer:
      "Regional study gives you 5 points. This is separate from Australian study points, meaning you can potentially claim both (5 + 5 = 10 points from study) if you studied in a designated regional area for at least 2 years.",
  },
  {
    question: "What counts as 'regional' for study purposes?",
    answer:
      "Regional includes most of Australia outside Sydney, Melbourne, Brisbane, and Gold Coast. Cities like Perth, Adelaide, Hobart, and regional centres across NSW, VIC, and QLD qualify. Check the current regional postcodes list.",
  },
  {
    question: "Can I claim both Australian and regional study points?",
    answer:
      "Yes, if you studied in a regional area for 2+ years, you can claim both the 5 Australian study points AND the 5 regional study points, totaling 10 points from study.",
  },
  {
    question: "Does regional study help with state nomination?",
    answer:
      "Yes. Many states strongly prefer applicants who studied in regional areas. For example, Tasmania and South Australia offer specific pathways for regional graduates.",
  },
];

export default function RegionalStudyPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-regional-study" title="Australia PR Points for Regional Study (2026 Guide) | AussieVisa Toolkit" description="How to get bonus PR points for regional study in Australia. Learn eligible locations, requirements, and how regional study can boost your skilled migration score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Regional Study Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Regional Study</h1>

          <p>
            Studying in a regional area of Australia can give you 5 additional
            PR points on top of the standard Australian study points. For the
            right applicant, this means 10 total points just from choosing the
            right location for your education.
          </p>

          <p>
            Calculate how regional study affects your score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Points Overview */}
          <h2>Regional Study Points Overview</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Study Location</th>
                  <th className="text-center p-3 font-semibold">Points Available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Sydney / Melbourne / Brisbane / Gold Coast</td><td className="text-center p-3">Australian study only (5)</td></tr>
                <tr><td className="p-3">Regional Australia</td><td className="text-center p-3 font-bold text-blue-700">Australian (5) + Regional (5) = 10</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Choosing regional study can double your study-related points.
          </p>

          {/* Requirements */}
          <h2>Requirements for Regional Study Points</h2>

          <h3>1. Regional Location</h3>
          <p>
            Your institution must be located in a designated regional area.
            Regional Australia currently includes:
          </p>
          <ul>
            <li>Perth (Western Australia)</li>
            <li>Adelaide (South Australia)</li>
            <li>Hobart (Tasmania)</li>
            <li>Canberra (Australian Capital Territory)</li>
            <li>Darwin (Northern Territory)</li>
            <li>Regional centres in NSW, VIC, and QLD (outside major cities)</li>
          </ul>

          <p>
            Sydney, Melbourne, Brisbane, and the Gold Coast do NOT count as
            regional for study points.
          </p>

          <h3>2. Minimum Duration</h3>
          <p>
            You must complete at least 2 academic years (92 weeks) of study
            at a regional institution. The same duration requirement applies
            as for standard Australian study points.
          </p>

          <h3>3. Valid Qualification</h3>
          <p>
            You must complete a qualification that is eligible for points:
            diploma, trade qualification, Bachelor, Masters, or PhD.
          </p>

          <h3>4. Student Visa</h3>
          <p>
            You must have held a valid Subclass 500 student visa during your
            regional study.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how regional study doubles your study points.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Why Regional */}
          <h2>Why Study Regionally?</h2>

          <h3>1. Double the Points</h3>
          <p>
            10 points from study (5 Australian + 5 Regional) is a significant
            boost. For many applicants, this alone justifies the regional choice.
          </p>

          <h3>2. State Nomination Priority</h3>
          <p>
            Many states give priority to regional graduates. Examples:
          </p>
          <ul>
            <li><strong>Tasmania:</strong> Specific pathways for Tasmanian graduates</li>
            <li><strong>South Australia:</strong> Graduate streams with lower requirements</li>
            <li><strong>Northern Territory:</strong> Strong preference for local graduates</li>
          </ul>

          <h3>3. Lower Cost of Living</h3>
          <p>
            Regional areas typically have lower rent and living costs than
            Sydney or Melbourne. Your study budget stretches further.
          </p>

          <h3>4. Post-Study Work Opportunities</h3>
          <p>
            Regional areas often have skill shortages. Graduates may find it
            easier to secure skilled employment and work towards PR.
          </p>

          {/* Top Regional Locations */}
          <h2>Top Regional Study Destinations</h2>

          <h3>Adelaide, South Australia</h3>
          <ul>
            <li>High-quality universities (University of Adelaide, Flinders, UniSA)</li>
            <li>Affordable living compared to eastern capitals</li>
            <li>Strong state nomination pathways for graduates</li>
            <li>Growing tech and healthcare sectors</li>
          </ul>

          <h3>Perth, Western Australia</h3>
          <ul>
            <li>World-class universities (UWA, Curtin, Murdoch)</li>
            <li>Strong mining and resources industry</li>
            <li>Sunny climate and outdoor lifestyle</li>
            <li>Good job opportunities in engineering and trades</li>
          </ul>

          <h3>Hobart, Tasmania</h3>
          <ul>
            <li>University of Tasmania with strong graduate pathways</li>
            <li>Unique lifestyle and natural environment</li>
            <li>Priority processing for Tasmanian graduates</li>
            <li>Lower competition for state nomination</li>
          </ul>

          <h3>Canberra, Australian Capital Territory</h3>
          <ul>
            <li>Australian National University (top-ranked)</li>
            <li>Strong public sector employment</li>
            <li>Defined pathways for ACT graduates</li>
            <li>High quality of life</li>
          </ul>

          {/* Pathways */}
          <h2>Regional Study to PR Pathway</h2>

          <ol>
            <li><strong>Study:</strong> Complete 2+ years at a regional institution</li>
            <li><strong>Graduate:</strong> Claim 10 points (5 Australian + 5 Regional)</li>
            <li><strong>Work Visa:</strong> Apply for Subclass 485 graduate visa</li>
            <li><strong>Work:</strong> Gain Australian experience (more points)</li>
            <li><strong>Nomination:</strong> Apply for state nomination (5–15 bonus points)</li>
            <li><strong>PR:</strong> Receive invitation and apply for 189/190/491</li>
          </ol>

          <p>
            Regional study can be the foundation of a strong PR strategy.
          </p>

          {/* Considerations */}
          <h2>Things to Consider</h2>

          <h3>Job Market</h3>
          <p>
            Research job opportunities in your field before choosing a regional
            location. Some regions have strong demand in certain industries but
            limited opportunities in others.
          </p>

          <h3>Lifestyle Adjustment</h3>
          <p>
            Regional living is different from major cities. Consider whether the
            lifestyle suits you and your family.
          </p>

          <h3>Course Availability</h3>
          <p>
            Not all courses are available regionally. Ensure your desired program
            is offered at your preferred regional institution.
          </p>

          <h3>Post-Study Mobility</h3>
          <p>
            Remember that regional study points are retrospective. Once you have
            them, you can move anywhere in Australia for work.
          </p>

          {/* Final CTA */}
          <h2>Calculate Regional Study Benefits</h2>

          <p>
            If you are considering studying in Australia, regional study could
            give you a significant points advantage.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              See how regional study boosts your PR score.
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
            This article provides general information about regional study points.
            Regional definitions and requirements change. Verify with the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-points-study"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎓</span>
              <span className="font-medium text-gray-900">Australian Study</span>
            </Link>
            <Link
              href="/articles/state-nomination-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🏛️</span>
              <span className="font-medium text-gray-900">State Nomination</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-regional-study" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
