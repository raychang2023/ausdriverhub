import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR for Nurses (2026 Migration Guide) | AussieVisa Toolkit",
  description:
    "Australia PR guide for nurses and midwives. Learn about ANMAC skills assessment, registration requirements, competitive scores, and state nomination options.",
};

const faqs = [
  {
    question: "What is the skills assessing authority for nurses?",
    answer:
      "Nurses are assessed by the Australian Nursing and Midwifery Accreditation Council (ANMAC). You need a positive assessment from ANMAC before you can submit an Expression of Interest for skilled migration.",
  },
  {
    question: "Do I need to register as a nurse in Australia?",
    answer:
      "To work as a nurse in Australia, you must register with the Nursing and Midwifery Board of Australia (NMBA) through AHPRA. This is separate from but related to your ANMAC skills assessment. Most employers require registration before employment.",
  },
  {
    question: "What score do nurses need for PR?",
    answer:
      "Nursing is in high demand in Australia. For the 189 visa, competitive scores are typically 80-85 points. For state nomination (190), 75-80 is often sufficient. The 491 regional visa may accept 65-75 base points.",
  },
  {
    question: "Which types of nurses are eligible for PR?",
    answer:
      "Registered Nurses (2544), Nurse Managers (2543), Nurse Practitioners (2544), and Midwives (2541) are all on the MLTSSL and eligible for skilled migration. Enrolled Nurses (4114) may also qualify under certain conditions.",
  },
];

export default function NursesPRPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-nurses" title="Australia PR for Nurses (2026 Migration Guide) | AussieVisa Toolkit" description="Australia PR guide for nurses and midwives. Learn about ANMAC skills assessment, registration requirements, competitive scores, and state nomination options." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">PR for Nurses</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR for Nurses and Midwives</h1>

          <p>
            Nursing is one of Australia's most in-demand professions. As a
            nurse, your skills are highly valued, and the skilled migration
            pathway is often more accessible compared to other occupations.
          </p>

          <p>
            Calculate your nursing PR score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Eligible Occupations */}
          <h2>Eligible Nursing Occupations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            {[
              { code: "254111", title: "Nurse Practitioner" },
              { code: "254411", title: "Registered Nurse" },
              { code: "254412", title: "Registered Mental Health Nurse" },
              { code: "254413", title: "Registered Midwife" },
              { code: "254414", title: "Registered Nurse (Child and Family)" },
              { code: "254415", title: "Registered Nurse (Community Health)" },
              { code: "254422", title: "Registered Nurse (Critical Care)" },
              { code: "254423", title: "Registered Nurse (Developmental Disability)" },
            ].map(occ => (
              <div key={occ.code} className="bg-gray-50 rounded px-3 py-2 text-sm">
                <span className="font-medium">{occ.title}</span>
                <span className="text-gray-500 ml-1">({occ.code})</span>
              </div>
            ))}
          </div>

          <p>
            All registered nurse categories are on the MLTSSL, making them
            eligible for 189, 190, and 491 visas.
          </p>

          {/* ANMAC Assessment */}
          <h2>ANMAC Skills Assessment</h2>

          <p>
            Nurses must have their skills assessed by ANMAC (Australian
            Nursing and Midwifery Accreditation Council).
          </p>

          <h3>Requirements</h3>
          <ul>
            <li>Recognised nursing or midwifery qualification</li>
            <li>Minimum of 3 months post-qualification experience</li>
            <li>English proficiency (IELTS 7.0 overall, 7.0 in each band)</li>
            <li>Current registration in your home country (if applicable)</li>
          </ul>

          <h3>Processing</h3>
          <ul>
            <li>Standard processing: 6–8 weeks</li>
            <li>Assessment fee: approximately $500–$800 AUD</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your nursing PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Registration */}
          <h2>NMBA Registration</h2>

          <p>
            To work as a nurse in Australia, you must register with the
            Nursing and Midwifery Board of Australia (NMBA) through AHPRA.
          </p>

          <h3>Registration Steps</h3>
          <ol>
            <li>Complete your ANMAC skills assessment</li>
            <li>Meet English requirements (IELTS 7.0 each band)</li>
            <li>Apply for registration through AHPRA</li>
            <li>Complete a bridging program if required (for some overseas qualifications)</li>
            <li>Receive your registration</li>
          </ol>

          {/* Competitive Scores */}
          <h2>Competitive Scores for Nurses</h2>

          <p>
            Nursing has a strong advantage: lower competitive thresholds
            compared to IT and accounting.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Visa Type</th>
                  <th className="text-center p-3 font-semibold">Typical Score Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">189 Skilled Independent</td><td className="text-center p-3">80–85 points</td></tr>
                <tr className="border-b"><td className="p-3">190 State Nominated</td><td className="text-center p-3">75–80 points</td></tr>
                <tr><td className="p-3">491 Skilled Regional</td><td className="text-center p-3">65–75 points</td></tr>
              </tbody>
            </table>
          </div>

          {/* State Options */}
          <h2>Best States for Nurse Nomination</h2>

          <ul>
            <li><strong>All states</strong> actively seek nurses due to ongoing healthcare shortages</li>
            <li><strong>Rural and regional areas</strong> often have the highest demand and lowest score thresholds</li>
            <li><strong>Aged care nurses</strong> are particularly in demand</li>
            <li><strong>Critical care and mental health</strong> nurses are also prioritised</li>
          </ul>

          {/* Building Score */}
          <h2>Building Your Nursing PR Score</h2>

          <ul>
            <li><strong>English:</strong> Superior English (20 points) is achievable for many nurses</li>
            <li><strong>Experience:</strong> Nursing experience accumulates quickly in high-demand settings</li>
            <li><strong>State nomination:</strong> Healthcare states have accessible pathways</li>
            <li><strong>CCL:</strong> If you speak a community language, add 5 easy points</li>
          </ul>

          {/* Example Score */}
          <h2>Example Nurse Score</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Age (28)</td><td className="text-center p-3">30</td></tr>
                <tr className="border-b"><td className="p-3">Superior English</td><td className="text-center p-3">20</td></tr>
                <tr className="border-b"><td className="p-3">Work Experience (5 years)</td><td className="text-center p-3">15</td></tr>
                <tr className="border-b"><td className="p-3">Bachelor Degree</td><td className="text-center p-3">15</td></tr>
                <tr className="border-b"><td className="p-3">Single Applicant</td><td className="text-center p-3">10</td></tr>
                <tr><td className="p-3 font-bold">Total</td><td className="text-center p-3 font-bold text-blue-700">90</td></tr>
              </tbody>
            </table>
          </div>

          {/* Tips */}
          <h2>Tips for Nurse Migration</h2>

          <ul>
            <li><strong>Get ANMAC assessment early</strong> — it is mandatory for EOI</li>
            <li><strong>Start AHPRA registration</strong> — it may be required for some state nominations</li>
            <li><strong>Target regional states</strong> — lower scores and higher success rates</li>
            <li><strong>Consider aged care experience</strong> — high demand specialty</li>
            <li><strong>Improve English to Superior</strong> — 20 points makes a big difference</li>
          </ul>

          {/* Final CTA */}
          <h2>Calculate Your Nursing PR Score</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points as a nursing professional.
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
            This article provides general information for nurses seeking
            Australian PR. Verify with{" "}
            <a href="https://www.anmac.org.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">ANMAC</a>{" "}
            and the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-skills-assessment" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all">
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span>
              <span className="font-medium text-gray-900">Skills Assessment</span>
            </Link>
            <Link href="/articles/australia-pr-points-english" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all">
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🌐</span>
              <span className="font-medium text-gray-900">English Points</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-nurses" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
