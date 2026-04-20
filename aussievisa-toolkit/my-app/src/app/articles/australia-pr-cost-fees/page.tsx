import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Cost and Fees 2026 (189, 190, 491 Breakdown) | AussieVisa Toolkit",
  description:
    "How much does Australia PR cost? Full breakdown of visa fees, skills assessment, health checks, and other expenses for 189, 190, and 491 visas.",
};

const faqs = [
  {
    question: "What is the main visa application fee?",
    answer:
      "The primary visa application fee is charged per applicant. As of 2026, it is approximately AUD 4,640 for the main applicant. Additional fees apply for secondary applicants (partner, children). Fees increase annually on July 1.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "While not hidden, many applicants underestimate costs like health examinations, police clearances, document translations, and migration agent fees. Budget for at least $1,000–$2,000 in additional costs beyond the main visa fee.",
  },
  {
    question: "Do I pay all fees upfront?",
    answer:
      "You pay different fees at different stages: skills assessment fees early, visa application fee when you apply, and health/police costs throughout. Plan your budget accordingly.",
  },
  {
    question: "Can I get a refund if my visa is refused?",
    answer:
      "Generally, no. Visa application fees are not refundable if your application is refused. Skills assessment fees are also non-refundable. Some health examination fees may be refundable if checks were not completed.",
  },
];

export default function PRCostPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-cost-fees" title="Australia PR Cost and Fees 2026 (189, 190, 491 Breakdown) | AussieVisa Toolkit" description="How much does Australia PR cost? Full breakdown of visa fees, skills assessment, health checks, and other expenses for 189, 190, and 491 visas." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">PR Costs</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Cost and Fees: Complete Breakdown</h1>

          <p>
            Understanding the true cost of Australian permanent residency helps
            you plan your finances and avoid surprises. The journey involves
            multiple fees at different stages, and costs add up quickly.
          </p>

          <p>
            Before investing in the process, check if you are eligible with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Main Costs */}
          <h2>Main PR Costs at a Glance</h2>

          <p>
            Here is a summary of the major costs for a single applicant:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Cost Category</th>
                  <th className="text-right p-3 font-semibold">Typical Cost (AUD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Skills Assessment</td><td className="text-right p-3">$500–$1,200</td></tr>
                <tr className="border-b"><td className="p-3">English Test (IELTS/PTE)</td><td className="text-right p-3">$300–$400</td></tr>
                <tr className="border-b"><td className="p-3">Visa Application Fee</td><td className="text-right p-3">$4,640</td></tr>
                <tr className="border-b"><td className="p-3">Health Examinations</td><td className="text-right p-3">$300–$500</td></tr>
                <tr className="border-b"><td className="p-3">Police Clearances</td><td className="text-right p-3">$50–$200</td></tr>
                <tr><td className="p-3"><strong>Total (Single Applicant)</strong></td><td className="text-right p-3 font-bold text-blue-700">$6,000–$7,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            These figures are estimates. Actual costs vary by occupation, location,
            and individual circumstances. Additional costs apply for family members.
          </p>

          {/* Visa Application Fee */}
          <h2>Visa Application Fee</h2>

          <p>
            This is the largest single expense. The fee structure is:
          </p>

          <ul>
            <li><strong>Main applicant:</strong> Approximately $4,640 AUD</li>
            <li><strong>Partner (over 18):</strong> Approximately $2,320 AUD</li>
            <li><strong>Children (under 18):</strong> Approximately $1,160 AUD each</li>
          </ul>

          <p>
            Example: A couple with one child would pay approximately $8,120 in
            visa application fees alone.
          </p>

          <p>
            <strong>Important:</strong> Visa fees increase every year on July 1.
            Check the current fee on the Department of Home Affairs website.
          </p>

          {/* Skills Assessment */}
          <h2>Skills Assessment Fees</h2>

          <p>
            Each assessing authority sets its own fees. Common ranges:
          </p>

          <ul>
            <li><strong>ACS (IT):</strong> $500–$550</li>
            <li><strong>Engineers Australia:</strong> $800–$1,200</li>
            <li><strong>VETASSESS:</strong> $600–$1,000</li>
            <li><strong>CPA/CA/IPA:</strong> $400–$600</li>
            <li><strong>ANMAC (Nursing):</strong> $500–$800</li>
            <li><strong>TRA (Trades):</strong> $300–$800</li>
          </ul>

          <p>
            Some authorities offer priority processing for an additional 50–100%
            of the standard fee.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Ensure you are eligible before investing in skills assessment fees.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* English Test */}
          <h2>English Language Test Fees</h2>

          <p>
            Most applicants need to take an approved English test:
          </p>

          <ul>
            <li><strong>IELTS Academic:</strong> Approximately $340–$400 AUD</li>
            <li><strong>PTE Academic:</strong> Approximately $350–$400 AUD</li>
            <li><strong>TOEFL iBT:</strong> Approximately $300–$350 AUD</li>
          </ul>

          <p>
            If you need to retake the test (common), budget for multiple attempts.
            Many applicants take the test 2–3 times to achieve their target score.
          </p>

          {/* Health and Character */}
          <h2>Health Examinations and Police Checks</h2>

          <h3>Health Examinations</h3>
          <p>
            All applicants must undergo health checks with an approved panel
            physician. Costs vary by country and examination requirements:
          </p>
          <ul>
            <li><strong>Standard medical:</strong> $200–$400</li>
            <li><strong>Chest X-ray:</strong> $50–$150</li>
            <li><strong>Blood tests:</strong> $50–$100</li>
          </ul>
          <p>
            Additional tests may be required depending on age, country of origin,
            and medical history.
          </p>

          <h3>Police Clearances</h3>
          <p>
            You need police certificates from every country where you have lived
            for 12 months or more in the past 10 years:
          </p>
          <ul>
            <li><strong>Australian Federal Police:</strong> $42</li>
            <li><strong>International clearances:</strong> Vary by country ($50–$200 each)</li>
          </ul>

          {/* State Nomination */}
          <h2>State Nomination Fees (190/491)</h2>

          <p>
            If applying for a 190 or 491 visa, states may charge nomination fees:
          </p>

          <ul>
            <li><strong>New South Wales:</strong> $300–$800 (varies by stream)</li>
            <li><strong>Victoria:</strong> Usually no fee</li>
            <li><strong>Queensland:</strong> $200–$350</li>
            <li><strong>Western Australia:</strong> $200</li>
            <li><strong>South Australia:</strong> $330–$500</li>
          </ul>

          <p>
            These fees are separate from the federal visa application fee.
          </p>

          {/* Other Costs */}
          <h2>Other Common Costs</h2>

          <h3>Document Translations</h3>
          <p>
            Non-English documents must be translated by accredited translators:
          </p>
          <ul>
            <li>Approximately $50–$150 per document</li>
            <li>Complex documents (academic transcripts) may cost more</li>
          </ul>

          <h3>Migration Agent Fees</h3>
          <p>
            If you use a registered migration agent:
          </p>
          <ul>
            <li><strong>Full service:</strong> $3,000–$6,000</li>
            <li><strong>Document review:</strong> $500–$1,500</li>
            <li><strong>Consultation only:</strong> $200–$500 per hour</li>
          </ul>

          <p>
            While not required, agents can help complex cases and reduce refusal
            risk.
          </p>

          <h3>Certification and Notarisation</h3>
          <p>
            Some documents require certification or notarisation, adding $20–$100
            depending on the document and provider.
          </p>

          {/* Total Budget */}
          <h2>Total Budget Planning</h2>

          <h3>Single Applicant</h3>
          <p>
            Minimum realistic budget: <strong>$6,000–$7,000 AUD</strong>
          </p>
          <p>
            Comfortable budget (including agent, multiple test attempts): <strong>$8,000–$10,000 AUD</strong>
          </p>

          <h3>Couple</h3>
          <p>
            Minimum realistic budget: <strong>$9,000–$11,000 AUD</strong>
          </p>
          <p>
            Comfortable budget: <strong>$12,000–$15,000 AUD</strong>
          </p>

          <h3>Family with Children</h3>
          <p>
            Add approximately $1,500–$2,000 per child to the couple budget.
          </p>

          {/* Saving Tips */}
          <h2>Tips to Manage Costs</h2>

          <h3>Start Early</h3>
          <p>
            Spread costs over time. Skills assessment and English tests can be
            done months before the visa application fee is due.
          </p>

          <h3>Compare Assessing Authorities</h3>
          <p>
            If your occupation has multiple assessing authorities, compare fees
            and processing times. However, choose based on suitability, not just
            cost.
          </p>

          <h3>Prepare Documents Yourself</h3>
          <p>
            You can save on agent fees by preparing documents yourself, provided
            you are thorough and accurate.
          </p>

          <h3>Get English Right First Time</h3>
          <p>
            Invest in preparation courses to avoid multiple test fees. The
            cost of a preparation course is often less than retaking the test.
          </p>

          <h3>Budget for Extras</h3>
          <p>
            Always budget 10–20% more than your estimate. Unexpected costs
            inevitably arise.
          </p>

          {/* Final CTA */}
          <h2>Check Your Eligibility First</h2>

          <p>
            Before investing thousands in the PR process, ensure you have a
            competitive score and realistic chance of success.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points to see if the investment is worthwhile.
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
            This article provides general information about Australia PR costs and
            fees. Fees change regularly, especially on July 1 each year. Always
            verify current fees with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            and your relevant assessing authority.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-processing-time"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">⏱️</span>
              <span className="font-medium text-gray-900">Processing Times</span>
            </Link>
            <Link
              href="/articles/australia-pr-skills-assessment"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span>
              <span className="font-medium text-gray-900">Skills Assessment</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-cost-fees" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
