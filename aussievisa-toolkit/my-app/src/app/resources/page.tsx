import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Official Links & Tools | AussieVisa Toolkit",
  description: "Essential Australian immigration resources, official links, and useful tools for skilled migration applicants.",
};

const faqs = [
  { question: "What is SkillSelect?", answer: "SkillSelect is the online system where you submit your Expression of Interest (EOI) for skilled migration. If invited, you can then apply for a visa." },
  { question: "Where can I check my visa application status?", answer: "You can check your application status through your ImmiAccount on the Department of Home Affairs website." },
  { question: "What English tests are accepted?", answer: "Common accepted tests include IELTS, PTE Academic, TOEFL iBT, and Cambridge English. Check the Department of Home Affairs website for the current list." },
];

const officialResources = [
  {
    category: "Government",
    items: [
      { name: "Department of Home Affairs", desc: "Official immigration website", url: "https://immi.homeaffairs.gov.au" },
      { name: "SkillSelect", desc: "Submit your Expression of Interest", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect" },
      { name: "Skilled Occupation List", desc: "Current list of eligible occupations", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
      { name: "Visa Processing Times", desc: "Check current processing timeframes", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing" },
      { name: "MARA Register", desc: "Find registered migration agents", url: "https://www.mara.gov.au" },
    ],
  },
  {
    category: "English Tests",
    items: [
      { name: "IELTS", desc: "International English Language Testing System", url: "https://www.ielts.org" },
      { name: "PTE Academic", desc: "Pearson Test of English", url: "https://www.pearsonpte.com" },
      { name: "TOEFL iBT", desc: "Test of English as a Foreign Language", url: "https://www.ets.org/toefl" },
    ],
  },
  {
    category: "Skills Assessments",
    items: [
      { name: "VETASSESS", desc: "General skilled occupations", url: "https://www.vetassess.com.au" },
      { name: "ACS", desc: "ICT professionals", url: "https://www.acs.org.au" },
      { name: "Engineers Australia", desc: "Engineering occupations", url: "https://www.engineersaustralia.org.au" },
      { name: "CPA Australia", desc: "Accounting professions", url: "https://www.cpaaustralia.com.au" },
      { name: "TRA", desc: "Trade occupations", url: "https://www.tradesrecognitionaustralia.gov.au" },
    ],
  },
  {
    category: "Living in Australia",
    items: [
      { name: "studyaustralia.gov.au", desc: "Australian Government education", url: "https://www.studyaustralia.gov.au" },
      { name: "joboutlook.gov.au", desc: "Occupation and labour market info", url: "https://joboutlook.gov.au" },
      { name: "Australia Fair Work", desc: "Workplace rights and pay", url: "https://www.fairwork.gov.au" },
    ],
  },
];

const helpfulTools = [
  { name: "PR Points Calculator", desc: "Estimate your EOI score", path: "/tools/pr-points-calculator", icon: "🧮" },
  { name: "Visa Comparison", desc: "Compare 189, 190, 491 visas", path: "/visas", icon: "📊" },
  { name: "Articles & Guides", desc: "In-depth immigration guides", path: "/articles", icon: "📖" },
];

export default function ResourcesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential links, official resources, and tools to help you navigate the Australian skilled migration process.
          </p>
        </div>

        <DisclaimerBanner />

        {/* Quick Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {helpfulTools.map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all"
              >
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-500">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Official Resources */}
        {officialResources.map((section) => (
          <section key={section.category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.category}</h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-700 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* Tips */}
        <section className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Tips</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">1.</span>
              <span>Always bookmark the official <strong>Department of Home Affairs</strong> website and check for updates before making any decisions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">2.</span>
              <span>Set up a <strong>My Health Declaration</strong> account early — you will need it for the health examination step.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">3.</span>
              <span>Start your <strong>English test preparation</strong> well in advance — superior English scores can make a big difference in points.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">4.</span>
              <span>Keep all your <strong>documents organized</strong> in one place from the beginning — you will need certified translations and work references.</span>
            </li>
          </ul>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </Layout>
  );
}
