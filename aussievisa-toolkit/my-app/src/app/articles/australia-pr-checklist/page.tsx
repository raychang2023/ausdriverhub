import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Checklist: Complete Step-by-Step Guide | AussieVisa Toolkit",
  description: "Complete step-by-step checklist for Australia PR application. From initial assessment to visa grant, track your progress through every stage.",
};

const faqs = [
  { question: "What is the first step for Australia PR?", answer: "Check your eligibility by calculating your points score, verifying your occupation is on the skilled list, and ensuring you meet basic requirements like age and English." },
  { question: "How do I know if I qualify for PR?", answer: "Use our PR Points Calculator to get an initial assessment. A score of 65+ meets the minimum, but competitive scores vary by occupation. Consider state nomination if your score is below competitive thresholds." },
  { question: "What is the minimum score for PR?", answer: "The minimum is 65 points. However, for 189 visa, you typically need 80-90+ to receive an invitation. For 190, 75-85+. For 491, 65-80." },
  { question: "Can I check my PR eligibility for free?", answer: "Yes. Our PR Points Calculator provides a free initial assessment. Use it to understand your current score and identify areas to improve." },
];

export default function PRChecklistPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-checklist" title="Australia PR Checklist: Complete Step-by-Step Guide | AussieVisa Toolkit" description="Complete step-by-step checklist for Australia PR application. From initial assessment to visa grant, track your progress through every stage." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">PR Checklist</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Checklist: Complete Step-by-Step Guide</h1>
          <p>This comprehensive checklist walks you through every step of the Australia PR process. Use it to track your progress and ensure nothing is missed.</p>
          <p>Start with the most important step: <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">Calculate Your PR Points</Link>.</p>

          <h2>Phase 1: Self-Assessment</h2>
          <div className="space-y-2 my-4">
            {[
              "Calculate your points score",
              "Verify your occupation is on the skilled list",
              "Check you are under 45 years old",
              "Assess your English level",
              "Review work experience eligibility",
              "Check education recognition",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2>Phase 2: Skills Assessment</h2>
          <div className="space-y-2 my-4">
            {[
              "Identify your assessing authority",
              "Prepare application materials",
              "Submit skills assessment",
              "Receive positive assessment",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Not sure about your eligibility? Calculate your points first.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Phase 3: English Testing</h2>
          <div className="space-y-2 my-4">
            {[
              "Choose your test (PTE, IELTS, TOEFL)",
              "Prepare and practice",
              "Take the test",
              "Receive results (aim for Superior or Proficient)",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2>Phase 4: Expression of Interest</h2>
          <div className="space-y-2 my-4">
            {[
              "Create a SkillSelect account",
              "Complete your EOI with all details",
              "Select visa subclasses",
              "Submit and monitor for invitations",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2>Phase 5: State Nomination (if applicable)</h2>
          <div className="space-y-2 my-4">
            {[
              "Research state requirements",
              "Express interest with target states",
              "Receive and accept state nomination",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2>Phase 6: Visa Application</h2>
          <div className="space-y-2 my-4">
            {[
              "Submit visa application within 60 days of invitation",
              "Pay visa fees",
              "Complete health examinations",
              "Provide police clearances",
              "Respond to any additional requests",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2>Phase 7: Visa Grant</h2>
          <div className="space-y-2 my-4">
            {[
              "Receive visa grant notification",
              "Plan your move to Australia",
              "Enter Australia before initial entry date",
              "Begin your new life as a permanent resident!",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 p-2 bg-gray-50 rounded text-sm">
                <span className="text-blue-700 font-bold mt-0.5">☐</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Begin your PR journey now.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>This checklist provides general guidance. Individual requirements may vary.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-timeline" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📅</span><span className="font-medium text-gray-900">PR Timeline</span></Link>
            <Link href="/articles/australia-pr-document-checklist" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📄</span><span className="font-medium text-gray-900">Document Checklist</span></Link>
          </div>
          <RelatedArticles currentSlug="australia-pr-checklist" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
