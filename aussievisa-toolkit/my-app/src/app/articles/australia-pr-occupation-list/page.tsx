import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Occupation List Guide (2026 MLTSSL, STSOL, ROL) | AussieVisa Toolkit",
  description:
    "Which occupations are eligible for Australia PR? Learn about MLTSSL, STSOL, and ROL lists, and how to find your occupation for skilled migration.",
};

const faqs = [
  {
    question: "What is the difference between MLTSSL, STSOL, and ROL?",
    answer:
      "MLTSSL (Medium and Long-term Strategic Skills List) is for occupations Australia needs long-term. STSOL (Short-term Skilled Occupation List) has additional occupations eligible for some visas. ROL (Regional Occupation List) has regional-specific occupations. The 189 visa requires MLTSSL only. The 190 can use MLTSSL and STSOL. The 491 can use all three lists.",
  },
  {
    question: "How do I find my occupation on the list?",
    answer:
      "Search by job title or ANZSCO code on the Department of Home Affairs website. Your occupation must match closely to the description. If unsure, consult your skills assessing authority for guidance on which occupation code fits your qualifications and experience.",
  },
  {
    question: "Can my occupation be removed from the list?",
    answer:
      "Yes. The occupation lists are updated periodically. Your occupation could be added or removed. Once you have submitted your EOI or visa application, changes generally do not affect you, but it is best to apply sooner rather than later.",
  },
  {
    question: "What if my occupation is not on any list?",
    answer:
      "If your occupation is not on MLTSSL, STSOL, or ROL, you cannot apply for points-tested skilled migration. You would need to explore other pathways such as employer sponsorship (if an employer will nominate you) or consider gaining qualifications in a different occupation that is on the list.",
  },
];

export default function OccupationListPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-occupation-list" title="Australia PR Occupation List Guide (2026 MLTSSL, STSOL, ROL) | AussieVisa Toolkit" description="Which occupations are eligible for Australia PR? Learn about MLTSSL, STSOL, and ROL lists, and how to find your occupation for skilled migration." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Occupation List</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Occupation List Guide</h1>

          <p>
            Your occupation must be on one of Australia's skilled occupation
            lists to qualify for points-tested migration. Understanding these
            lists helps you determine which visas you can apply for and your
            chances of success.
          </p>

          <p>
            Check your eligibility for your occupation with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Three Lists */}
          <h2>The Three Occupation Lists</h2>

          <p>
            Australia maintains three skilled occupation lists. Each visa type
            can use different lists:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">List</th>
                  <th className="text-left p-3 font-semibold">Full Name</th>
                  <th className="text-center p-3 font-semibold">189</th>
                  <th className="text-center p-3 font-semibold">190</th>
                  <th className="text-center p-3 font-semibold">491</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-semibold">MLTSSL</td><td className="p-3">Medium and Long-term Strategic Skills List</td><td className="text-center p-3 text-green-700">✓</td><td className="text-center p-3 text-green-700">✓</td><td className="text-center p-3 text-green-700">✓</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold">STSOL</td><td className="p-3">Short-term Skilled Occupation List</td><td className="text-center p-3 text-red-700">✗</td><td className="text-center p-3 text-green-700">✓</td><td className="text-center p-3 text-green-700">✓</td></tr>
                <tr><td className="p-3 font-semibold">ROL</td><td className="p-3">Regional Occupation List</td><td className="text-center p-3 text-red-700">✗</td><td className="text-center p-3 text-red-700">✗</td><td className="text-center p-3 text-green-700">✓</td></tr>
              </tbody>
            </table>
          </div>

          {/* MLTSSL */}
          <h2>MLTSSL: Long-Term Skills</h2>

          <p>
            The MLTSSL contains occupations Australia needs on a long-term
            basis. These are typically professional, technical, and trade
            occupations with sustained demand.
          </p>

          <h3>Popular MLTSSL Occupations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
            {["Software Engineer", "Registered Nurse", "Electrician", "Civil Engineer", "Accountant", "Secondary Teacher", "Mechanical Engineer", "Chef", "ICT Business Analyst"].map(occ => (
              <div key={occ} className="bg-gray-50 rounded px-3 py-2 text-sm">{occ}</div>
            ))}
          </div>

          <p>
            MLTSSL occupations are eligible for all skilled visas: 189, 190, and 491.
          </p>

          {/* STSOL */}
          <h2>STSOL: Short-Term Skills</h2>

          <p>
            The STSOL contains occupations with current demand that may be
            more variable. These occupations are only eligible for the 190 and
            491 visas, not the 189.
          </p>

          <h3>STSOL Only Occupations</h3>
          <p>
            Examples include certain marketing specialists, recruitment
            consultants, and other business professionals. These occupations
            require state nomination or regional sponsorship.
          </p>

          {/* ROL */}
          <h2>ROL: Regional Skills</h2>

          <p>
            The ROL contains occupations specifically needed in regional
            Australia. These are only eligible for the 491 visa.
          </p>

          <h3>ROL Occupations</h3>
          <p>
            Many trade occupations, agriculture-related roles, and some
            specialised professionals appear on the ROL. These occupations
            require you to live and work in a designated regional area.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Check your occupation eligibility and calculate your PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Finding Occupation */}
          <h2>How to Find Your Occupation</h2>

          <h3>Step 1: Identify Your ANZSCO Code</h3>
          <p>
            ANZSCO is the Australian and New Zealand Standard Classification
            of Occupations. Each occupation has a unique 6-digit code. Find
            the code that best matches your job duties and qualifications.
          </p>

          <h3>Step 2: Check the Lists</h3>
          <p>
            Use the Department of Home Affairs website to search for your
            ANZSCO code. The search will show:
          </p>
          <ul>
            <li>Which lists your occupation appears on</li>
            <li>Which visas you can apply for</li>
            <li>Your assessing authority</li>
            <li>Any special conditions or caveats</li>
          </ul>

          <h3>Step 3: Verify with Assessing Authority</h3>
          <p>
            Your skills assessing authority can confirm whether your
            qualifications and experience match the occupation requirements.
            This is important because your skills assessment determines
            whether you can actually claim that occupation.
          </p>

          {/* Occupation Ceilings */}
          <h2>Occupation Ceilings</h2>

          <p>
            Each occupation on the MLTSSL has an annual ceiling — a maximum
            number of invitations that can be issued per program year.
          </p>

          <h3>Why Ceilings Matter</h3>
          <p>
            Once an occupation's ceiling is reached, no more invitations are
            issued for that occupation until the next program year. This
            affects how competitive that occupation becomes.
          </p>

          <h3>High-Demand Occupations</h3>
          <p>
            Occupations like software engineers, nurses, and accountants often
            have higher ceilings but also more applicants. Regional and trade
            occupations may have lower ceilings but less competition.
          </p>

          {/* State Lists */}
          <h2>State-Specific Occupation Lists</h2>

          <p>
            In addition to the federal lists, each state maintains its own
            occupation lists for nomination purposes.
          </p>

          <h3>Why State Lists Differ</h3>
          <p>
            States nominate based on their specific labour needs. A state
            might prioritise healthcare workers while another needs engineers
            or tradespeople.
          </p>

          <h3>Checking State Lists</h3>
          <p>
            Visit each state migration website to see their current occupation
            priorities. Apply to states where your occupation is in demand.
          </p>

          <p>
            Read our{" "}
            <Link href="/articles/state-nomination-australia" className="text-blue-700 hover:underline">
              state nomination guide
            </Link>{" "}
            for more details.
          </p>

          {/* Changing Lists */}
          <h2>When Lists Change</h2>

          <p>
            The occupation lists are reviewed and updated periodically,
            typically once or twice per year. Changes can include:
          </p>

          <ul>
            <li>Adding new occupations</li>
            <li>Removing existing occupations</li>
            <li>Moving occupations between lists</li>
            <li>Adding or removing caveats</li>
          </ul>

          <h3>Protecting Your Application</h3>
          <p>
            If your occupation is removed from the list after you submit your
            EOI or visa application, you are generally protected. However,
            it is always better to apply sooner rather than later.
          </p>

          {/* Tips */}
          <h2>Tips for Occupation Selection</h2>

          <ul>
            <li><strong>Choose carefully</strong> — your occupation affects which visas you can apply for</li>
            <li><strong>Match your skills</strong> — your assessment must support your nominated occupation</li>
            <li><strong>Check state demand</strong> — some occupations are in higher demand in specific states</li>
            <li><strong>Monitor changes</strong> — lists can change, so stay informed</li>
            <li><strong>Have a backup</strong> — consider if you qualify for multiple occupations</li>
          </ul>

          {/* Final CTA */}
          <h2>Check Your Occupation Eligibility</h2>

          <p>
            Finding your occupation on the right list is the first step toward
            Australian PR. Calculate your score and explore your visa options.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points for your occupation.
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
            This article provides general information about Australian skilled
            occupation lists. Lists change regularly. Always verify current
            information with the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/best-visa-australia-pr"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🛤️</span>
              <span className="font-medium text-gray-900">Best Visa Guide</span>
            </Link>
            <Link
              href="/articles/australia-pr-skills-assessment"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span>
              <span className="font-medium text-gray-900">Skills Assessment</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-occupation-list" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
