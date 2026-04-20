import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR for Engineers (2026 Migration Guide) | AussieVisa Toolkit",
  description:
    "Australia PR guide for engineers. Learn about Engineers Australia skills assessment, eligible engineering occupations, competitive scores, and migration strategies.",
};

const faqs = [
  {
    question: "How does Engineers Australia assess my skills?",
    answer:
      "Engineers Australia offers three assessment pathways: Competency Demonstration Report (CDR), Washington Accord, and Sydney Accord. Most overseas engineers use the CDR pathway, which requires three career episodes and a summary statement demonstrating your engineering competencies.",
  },
  {
    question: "What engineering occupations are eligible for PR?",
    answer:
      "Civil Engineer (233211), Mechanical Engineer (233512), Electrical Engineer (233311), Electronics Engineer (233411), and Software Engineer (261313) are all on the MLTSSL. Many other engineering specialisations are also eligible.",
  },
  {
    question: "How long does Engineers Australia assessment take?",
    answer:
      "Standard processing takes 8-12 weeks. Priority processing is available for an additional fee and reduces this to 4-6 weeks. Ensure your CDR is well-prepared to avoid delays or negative outcomes.",
  },
  {
    question: "What score do engineers need for PR?",
    answer:
      "Engineering is moderately competitive. For 189, 80-85 points is typically needed. For 190 state nomination, 75-80 is often sufficient. Civil engineers may face slightly lower thresholds than software engineers due to less competition.",
  },
];

export default function EngineersPRPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-engineers" title="Australia PR for Engineers (2026 Migration Guide) | AussieVisa Toolkit" description="Australia PR guide for engineers. Learn about Engineers Australia skills assessment, eligible engineering occupations, competitive scores, and migration strategies." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">PR for Engineers</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR for Engineers</h1>

          <p>
            Australia has consistent demand for qualified engineers across
            multiple disciplines. Engineering is a strong pathway to permanent
            residency, with several specialisations on the MLTSSL.
          </p>

          <p>
            Calculate your engineering PR score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Eligible Occupations */}
          <h2>Eligible Engineering Occupations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            {[
              { code: "233211", title: "Civil Engineer" },
              { code: "233212", title: "Geotechnical Engineer" },
              { code: "233213", title: "Quantity Surveyor" },
              { code: "233311", title: "Electrical Engineer" },
              { code: "233411", title: "Electronics Engineer" },
              { code: "233512", title: "Mechanical Engineer" },
              { code: "233511", title: "Industrial Engineer" },
              { code: "233513", title: "Production or Plant Engineer" },
            ].map(occ => (
              <div key={occ.code} className="bg-gray-50 rounded px-3 py-2 text-sm">
                <span className="font-medium">{occ.title}</span>
                <span className="text-gray-500 ml-1">({occ.code})</span>
              </div>
            ))}
          </div>

          {/* Engineers Australia */}
          <h2>Engineers Australia Skills Assessment</h2>

          <h3>Assessment Pathways</h3>
          <ul>
            <li><strong>CDR Pathway:</strong> For non-accredited qualifications. Requires three career episodes demonstrating competency.</li>
            <li><strong>Washington Accord:</strong> For degrees from accredited programs in signatory countries.</li>
            <li><strong>Sydney Accord:</strong> For engineering technologist qualifications.</li>
          </ul>

          <h3>CDR Requirements</h3>
          <ul>
            <li>Three career episodes (500-1000 words each)</li>
            <li>Continuing Professional Development (CPD) statement</li>
            <li>Summary statement linking to competency elements</li>
            <li>IELTS results (minimum 6.0 each band, 7.0 recommended)</li>
          </ul>

          <h3>Processing</h3>
          <ul>
            <li>Standard: 8-12 weeks</li>
            <li>Priority: 4-6 weeks</li>
            <li>Fee: $800-$1,200 AUD</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Calculate your engineering PR score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your PR Points →</Link>
          </div>

          {/* Competitive Scores */}
          <h2>Competitive Scores for Engineers</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Visa Type</th>
                  <th className="text-center p-3 font-semibold">Typical Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">189</td><td className="text-center p-3">80-85 points</td></tr>
                <tr className="border-b"><td className="p-3">190</td><td className="text-center p-3">75-80 points</td></tr>
                <tr><td className="p-3">491</td><td className="text-center p-3">65-75 points</td></tr>
              </tbody>
            </table>
          </div>

          {/* Building Score */}
          <h2>Building Your Engineering Score</h2>

          <ul>
            <li><strong>Superior English (20 points):</strong> Essential for competitive scores</li>
            <li><strong>Work Experience (up to 20):</strong> Engineering experience from major projects is valuable</li>
            <li><strong>Education (15-20):</strong> Masters or PhD in engineering gives strong points</li>
            <li><strong>CCL (5):</strong> If you speak a community language</li>
            <li><strong>State Nomination (5-15):</strong> States with infrastructure projects often seek engineers</li>
          </ul>

          {/* Best States */}
          <h2>Best States for Engineers</h2>

          <ul>
            <li><strong>Western Australia:</strong> Mining and resources sector demand</li>
            <li><strong>Queensland:</strong> Infrastructure and construction growth</li>
            <li><strong>Victoria:</strong> Engineering in healthcare, defence, and technology</li>
            <li><strong>South Australia:</strong> Defence and manufacturing sectors</li>
          </ul>

          {/* Tips */}
          <h2>Tips for Engineers</h2>

          <ul>
            <li><strong>Prepare a strong CDR</strong> — this is your most critical document</li>
            <li><strong>Link to competency elements</strong> — Engineers Australia assesses against specific competencies</li>
            <li><strong>Get professional CDR review</strong> — if unsure about quality</li>
            <li><strong>Target infrastructure states</strong> — WA and QLD have strong engineering demand</li>
          </ul>

          {/* Final CTA */}
          <h2>Calculate Your Engineering PR Score</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Calculate your PR points as an engineer.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points Now →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>This article provides general information for engineers seeking Australian PR. Verify with <a href="https://www.engineersaustralia.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Engineers Australia</a> and the <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-skills-assessment" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span><span className="font-medium text-gray-900">Skills Assessment</span></Link>
            <Link href="/articles/australia-pr-it-professionals" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">💻</span><span className="font-medium text-gray-900">IT Professionals Guide</span></Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-engineers" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
