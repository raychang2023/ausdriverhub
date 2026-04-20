import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { visas } from "@/data/visas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Visa Types | 189, 190, 491 Visas | AussieVisa Toolkit",
  description: "Compare Australian skilled migration visas: 189 Independent, 190 State Nominated, and 491 Regional. Find the best visa option for your situation.",
};

const visaComparisonFAQs = [
  { question: "Which visa has the fastest processing time?", answer: "Processing times vary based on demand, occupation, and individual circumstances. Please check the Department of Home Affairs website for current processing timeframes." },
  { question: "Can I apply for multiple visas at the same time?", answer: "While technically possible, it's generally not recommended as it may complicate your applications. Consult a registered migration agent for advice specific to your situation." },
  { question: "Do all skilled visas require a skills assessment?", answer: "Most skilled visas require a positive skills assessment for your nominated occupation. Requirements vary by occupation and assessing authority." },
  { question: "What is the difference between PR and provisional visas?", answer: "PR (Permanent Resident) visas like 189 and 190 grant immediate permanent residency. Provisional visas like 491 are temporary and require meeting certain conditions before applying for PR." },
  { question: "Can I include family members in my application?", answer: "Yes, most skilled visas allow you to include eligible family members (partner, children) in your application. Each has specific requirements." },
];

export default function VisasPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Australian Skilled Migration Visas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the three main pathways for skilled workers to immigrate to Australia. Choose the visa that best matches your qualifications and goals.
          </p>
        </div>

        <DisclaimerBanner />

        {/* Visa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {visas.map((visa) => (
            <div
              key={visa.code}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-700 font-bold text-xl">
                  {visa.code}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{visa.shortName}</h2>
                  <p className="text-xs text-gray-500">Subclass {visa.code}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{visa.description}</p>
              <div className="space-y-2 mb-4">
                {visa.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Suitable for:</strong> {visa.suitableFor}
                </p>
                <Link
                  href={visa.path}
                  className="block w-full text-center py-2 px-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-blue-700">189</th>
                  <th className="text-center p-4 font-semibold text-blue-700">190</th>
                  <th className="text-center p-4 font-semibold text-blue-700">491</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  { feature: "State Sponsorship", "189": "Not required", "190": "Required", "491": "Required or family sponsored" },
                  { feature: "Points Bonus", "189": "0 points", "190": "5 points", "491": "15 points" },
                  { feature: "Visa Type", "189": "Permanent", "190": "Permanent", "491": "Provisional (5 years)" },
                  { feature: "Regional Requirement", "189": "No", "190": "No", "491": "Yes" },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600">{row["189"]}</td>
                    <td className="p-4 text-center text-gray-600">{row["190"]}</td>
                    <td className="p-4 text-center text-gray-600">{row["491"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Comparison is for general reference. Requirements may vary. Please verify with official sources.
          </p>
        </section>

        {/* Next Steps */}
        <section className="bg-blue-50 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Visa?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Use our PR Points Calculator to estimate your EOI score and discover which visa pathways might be suitable for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your Points
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg border border-blue-700 hover:bg-blue-50 transition-colors"
            >
              Read Guides
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection title="Visa Comparison FAQs" faqs={visaComparisonFAQs} />

        {/* Official Reminder */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-xl">📋</span>
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Always Verify with Official Sources</h3>
              <p className="text-sm text-amber-800">
                Visa policies change frequently. For the most current and accurate information, visit the{" "}
                <a
                  href="https://immi.homeaffairs.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  Department of Home Affairs website
                </a>{" "}
                or consult a registered migration agent for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
