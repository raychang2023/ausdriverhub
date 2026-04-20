import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import { visaFAQs } from "@/data/articles";

export const metadata: Metadata = {
  title: "Skilled Nominated Visa (Subclass 190) | AussieVisa Toolkit",
  description: "Complete guide to Australian Subclass 190 visa - state nominated skilled migration. Requirements, process, and nomination information.",
};

const otherVisas = [
  { code: "189", name: "189 Independent", desc: "Independent permanent visa" },
  { code: "491", name: "491 Regional", desc: "Regional-sponsored provisional visa" },
];

export default function Visa190Page() {
  const faqs = visaFAQs["190"] || [];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/visas" className="hover:text-blue-700">Visa Types</Link>
          <span>/</span>
          <span className="text-gray-900">190 Visa</span>
        </nav>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 text-blue-700 font-bold text-3xl mb-4">
            190
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Skilled Nominated Visa (Subclass 190)</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Subclass 190 visa is a points-tested skilled migration visa that requires state or territory government nomination. You receive an additional 5 points for the nomination and become a permanent resident.
          </p>
        </div>

        <DisclaimerBanner />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This Visa For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Need state sponsorship to reach the required EOI score",
              "Are willing to live in the nominating state for a period of time",
              "Have an occupation in demand in a specific state or territory",
              "Have a positive skills assessment",
              "Meet all other skilled visa requirements",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Requirements</h2>
          <div className="space-y-6">
            {[
              { category: "State Nomination", items: ["Must be nominated by a state or territory government", "Each state has its own criteria and occupation lists"] },
              { category: "Age", items: ["Must be under 45 years of age when invited"] },
              { category: "English Language", items: ["Competent English is the minimum requirement", "Higher scores earn additional points"] },
              { category: "Skills Assessment", items: ["Must have a positive skills assessment", "From a relevant assessing authority"] },
              { category: "EOI Score", items: ["Minimum of 65 points (including 5 nomination points)", "States may have higher threshold requirements"] },
            ].map((req) => (
              <div key={req.category} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
          <div className="space-y-4">
            {[
              "Skills Assessment — Complete assessment for your nominated occupation",
              "Research States — Research which states are sponsoring your occupation",
              "Apply for State Nomination — Submit nomination application to chosen state",
              "Expression of Interest — Submit EOI through SkillSelect with state nomination selected",
              "Receive Nomination — Wait for state nomination approval",
              "Submit Visa Application — Lodge your visa application after receiving invitation",
              "Visa Grant — Wait for processing and visa grant",
            ].map((step, idx) => {
              const [stepTitle, ...rest] = step.split(" — ");
              const stepDesc = rest.join(" — ");
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pb-4">
                    <h3 className="font-medium text-gray-900">{stepTitle}</h3>
                    {stepDesc && <p className="text-sm text-gray-600 mt-1">{stepDesc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Visa Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherVisas.map((v) => (
              <Link key={v.code} href={`/visa-${v.code}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">{v.code}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{v.name}</p>
                    <p className="text-sm text-gray-500">{v.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <div className="mt-10 p-6 bg-blue-50 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-xl">📋</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Official Information</h3>
              <p className="text-sm text-gray-600 mb-2">
                Always refer to the official Department of Home Affairs website for the most current visa information.
              </p>
              <a
                href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 font-medium hover:underline"
              >
                Visit Official Page
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Check Your Eligibility</h3>
          <p className="text-sm text-gray-600 mb-4">
            Use our PR Points Calculator to estimate your EOI score and see which visa options might work for you.
          </p>
          <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-5 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
            Calculate Points
          </Link>
        </div>
      </div>
    </Layout>
  );
}
