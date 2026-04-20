import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR for Tradespeople (2026 Migration Guide) | AussieVisa Toolkit",
  description: "Australia PR guide for tradespeople. Learn about TRA skills assessment, eligible trade occupations, and pathways for electricians, plumbers, and carpenters.",
};

const faqs = [
  { question: "What skilled trades are eligible for Australia PR?", answer: "Electricians (341111), Plumbers (334111), Carpenters (331212), Fitters (323211), and many other trades are on the MLTSSL. Each trade has specific ANZSCO codes and may have different assessment requirements through Trades Recognition Australia (TRA)." },
  { question: "How are trades assessed for Australian PR?", answer: "Trades Recognition Australia (TRA) assesses skilled trades. The main pathways are the Job Ready Program (for Australian graduates) and Offshore Skills Assessment (for overseas tradespeople). You may need a practical assessment and detailed evidence of your skills and experience." },
  { question: "Is it easier for tradespeople to get PR than professionals?", answer: "Often yes. Trades typically face less competition than IT, accounting, or engineering. While the points system is the same, the invitation thresholds for trades are often lower due to high demand and fewer applicants per occupation." },
  { question: "Can overseas trade experience count toward PR points?", answer: "Yes. Overseas trade experience counts for both TRA skills assessment and PR points, provided you can demonstrate your skills meet Australian standards. You will need detailed evidence including employment contracts, reference letters, and possibly photos or videos of your work." },
  { question: "What is the TRA Job Ready Program?", answer: "The Job Ready Program is for international students who completed their trade qualification in Australia. It involves workplace assessments and helps you gain the Australian experience needed for a positive skills assessment and PR pathway." },
];

export default function TradesPRPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-trades" title="Australia PR for Tradespeople (2026 Migration Guide) | AussieVisa Toolkit" description="Australia PR guide for tradespeople. Learn about TRA skills assessment, eligible trade occupations, and pathways for electricians, plumbers, and carpenters." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">PR for Trades</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR for Tradespeople</h1>
          <p>Australia has ongoing demand for skilled tradespeople. Trades offer a strong pathway to PR with often lower competition than professional occupations.</p>
          <p>Calculate your trade PR score with our <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Eligible Trade Occupations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
            {[{ code: "341111", title: "Electrician" }, { code: "334111", title: "Plumber" }, { code: "331212", title: "Carpenter" }, { code: "323211", title: "Fitter" }, { code: "322211", title: "Sheetmetal Trades" }, { code: "324111", title: "Panelbeater" }].map(o => (
              <div key={o.code} className="bg-gray-50 rounded px-3 py-2 text-sm"><span className="font-medium">{o.title}</span> <span className="text-gray-500">({o.code})</span></div>
            ))}
          </div>

          <h2>TRA Skills Assessment</h2>
          <p>Trades Recognition Australia (TRA) assesses skilled trades through pathways including Job Ready Program (for Australian graduates) and Offshore Skills Assessment (for overseas tradespeople). Processing: 3-6 months. Fee: $300-$1,500 AUD depending on pathway.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Calculate your trade PR score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your PR Points →</Link>
          </div>

          <h2>Competitive Scores</h2>
          <p>Trades often have lower thresholds. The 189 may need 80-85. State nomination (190) often accepts 70-80. The 491 with 15 bonus points can work with 65-75.</p>

          <h2>Tips for Tradespeople</h2>
          <ul>
            <li><strong>Prepare detailed work evidence</strong> — photos, references, contracts</li>
            <li><strong>Consider Australian work</strong> — Job Ready Program can strengthen your case</li>
            <li><strong>Target regional areas</strong> — many trades are in high demand regionally</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Calculate your PR points.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>Verify with <a href="https://www.tra.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">TRA</a> and the <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-skills-assessment" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span><span className="font-medium text-gray-900">Skills Assessment Guide</span></Link>
            <Link href="/articles/state-nomination-australia" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🗺️</span><span className="font-medium text-gray-900">State Nomination</span></Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-trades" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
