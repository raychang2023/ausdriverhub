import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Timeline: From EOI to Visa Grant | AussieVisa Toolkit",
  description: "Understand the full Australia PR timeline from EOI submission to visa grant. Learn about each stage, processing times, and how to plan your migration journey.",
};

const faqs = [
  { question: "How long does the entire PR process take?", answer: "From EOI submission to visa grant, expect 12-24 months total. This includes waiting for invitation (varies by score), visa application processing (6-12 months), and pre-grant requirements like health and character checks." },
  { question: "What happens after I submit my EOI?", answer: "Your EOI enters the pool and is ranked by points. If your score is competitive for your occupation, you may receive an invitation in the next round. Until invited, you can update your EOI to improve your score." },
  { question: "How long do I have to apply after invitation?", answer: "You have 60 days from invitation to submit your visa application. Prepare documents in advance as this deadline is strict." },
  { question: "Can I stay in Australia while waiting for PR?", answer: "If you hold a valid visa (student, work, bridging), you can stay. If not, you would need to apply for a bridging visa (if eligible) or be outside Australia when the visa is granted." },
];

export default function PRTimelinePage() {
  return (
<>
        <ArticleSEO slug="australia-pr-timeline" title="Australia PR Timeline: From EOI to Visa Grant | AussieVisa Toolkit" description="Understand the full Australia PR timeline from EOI submission to visa grant. Learn about each stage, processing times, and how to plan your migration journey." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">PR Timeline</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Timeline: From EOI to Visa Grant</h1>
          <p>Understanding the PR timeline helps you plan your migration journey. Learn what to expect at each stage and how long each step typically takes.</p>
          <p>Start by calculating your points: <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>The PR Journey Timeline</h2>
          <h3>Stage 1: Skills Assessment (2-4 months)</h3>
          <p>Before submitting your EOI, you need a positive skills assessment from the relevant authority. Processing times vary by occupation.</p>

          <h3>Stage 2: English Test (1-2 months)</h3>
          <p>Take IELTS, PTE, or another accepted test. Results typically available within days to weeks.</p>

          <h3>Stage 3: EOI Submission (Immediate)</h3>
          <p>Submit your Expression of Interest through SkillSelect. Your EOI enters the pool immediately.</p>

          <h3>Stage 4: Waiting for Invitation (Varies)</h3>
          <p>Wait time depends on your points score and occupation demand. High scores may receive invitations within 1-2 months. Lower scores may wait 6+ months or never be invited.</p>

          <h3>Stage 5: Visa Application (60 days)</h3>
          <p>After invitation, you have 60 days to submit your complete visa application with all documents.</p>

          <h3>Stage 6: Processing (6-12 months)</h3>
          <p>The Department processes your application, conducts checks, and may request additional information.</p>

          <h3>Stage 7: Decision</h3>
          <p>Visa grant or refusal. If granted, you become an Australian permanent resident.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Calculate your competitive score.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Total Timeline Estimate</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left p-3 font-semibold">Stage</th>
                <th className="text-center p-3 font-semibold">Time</th>
              </tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Preparation (skills, English)</td><td className="text-center p-3">3-6 months</td></tr>
                <tr className="border-b"><td className="p-3">EOI to Invitation</td><td className="text-center p-3">1-6 months</td></tr>
                <tr className="border-b"><td className="p-3">Visa Processing</td><td className="text-center p-3">6-12 months</td></tr>
                <tr><td className="p-3 font-bold">Total</td><td className="text-center p-3 font-bold text-blue-700">10-24 months</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Tips for a Smooth Timeline</h2>
          <ul>
            <li>Prepare documents before submitting EOI</li>
            <li>Monitor invitation rounds for your occupation</li>
            <li>Respond promptly to any requests for information</li>
            <li>Ensure documents remain valid throughout the process</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Start your PR journey with accurate points calculation.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>Timelines vary significantly based on individual circumstances and policy changes.</p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link href="/articles/australia-pr-processing-time" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">⏱️</span><span className="font-medium text-gray-900">Processing Times</span></Link>
            <Link href="/articles/australia-pr-eoi-guide" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"><span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span><span className="font-medium text-gray-900">EOI Guide</span></Link>
          </div>
          <RelatedArticles currentSlug="australia-pr-timeline" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
