import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR After Rejection: What to Do Next | AussieVisa Toolkit",
  description: "What to do if your Australia PR application is rejected. Learn about appeals, reapplying, and how to improve your chances next time.",
};

const faqs = [
  { question: "Can I appeal a PR refusal?", answer: "In some cases, you can appeal to the Administrative Appeals Tribunal (AAT). Time limits apply (usually 21-28 days). Not all decisions are appealable." },
  { question: "Should I reapply or appeal?", answer: "This depends on the reason for refusal. If the decision was incorrect, appeal. If you can fix the issue (more points, better documents), reapplying may be faster and cheaper." },
  { question: "How long should I wait before reapplying?", answer: "There is no mandatory waiting period. Reapply when you have addressed the reasons for refusal and have a stronger application." },
  { question: "Will a previous refusal affect my new application?", answer: "You must disclose previous refusals. A previous refusal does not automatically prevent approval, but you must address the issues that caused the refusal." },
];

export default function PRRejectionPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-after-rejection" title="Australia PR After Rejection: What to Do Next | AussieVisa Toolkit" description="What to do if your Australia PR application is rejected. Learn about appeals, reapplying, and how to improve your chances next time." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">After Rejection</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR After Rejection: Your Options</h1>
          <p>A visa refusal is disappointing, but it is not the end of your PR journey. Understanding your options helps you make the best decision for your situation.</p>
          <p>Recalculate your points and strengthen your profile: <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Understand Why You Were Refused</h2>
          <p>The refusal letter will state the reason. Common reasons include:</p>
          <ul>
            <li>Incorrect points claim</li>
            <li>Incomplete or inaccurate information</li>
            <li>Failure to meet character or health requirements</li>
            <li>Insufficient evidence of claims</li>
            <li>Issues with skills assessment or occupation</li>
          </ul>

          <h2>Option 1: Appeal to AAT</h2>
          <p>The Administrative Appeals Tribunal reviews migration decisions. You can appeal if you believe the decision was incorrect.</p>
          <ul>
            <li>Time limit: Usually 21-28 days from decision</li>
            <li>Cost: Approximately $3,000+</li>
            <li>Processing: 12-18 months</li>
            <li>Success varies based on merit of case</li>
          </ul>

          <h2>Option 2: Reapply</h2>
          <p>If you can address the refusal reasons, reapplying may be the best option.</p>
          <ul>
            <li>Fix the issues that caused refusal</li>
            <li>Improve your points score if possible</li>
            <li>Submit stronger documentation</li>
            <li>Consider different visa or state nomination</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Recalculate your points for a stronger application.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Improving Your Application</h2>
          <ul>
            <li><strong>Higher English score:</strong> Move from 10 to 20 points</li>
            <li><strong>More experience:</strong> Accumulate additional skilled work</li>
            <li><strong>State nomination:</strong> Add 5-15 points</li>
            <li><strong>CCL test:</strong> Add 5 points if you speak a community language</li>
            <li><strong>Better documentation:</strong> Ensure all claims are well-supported</li>
          </ul>

          <h2>When to Seek Professional Help</h2>
          <p>Consider migration agent or lawyer assistance if:</p>
          <ul>
            <li>The refusal reason is complex</li>
            <li>You are considering an appeal</li>
            <li>There are character or health issues</li>
            <li>You have been refused multiple times</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Start fresh with a stronger application.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>Consider professional advice for refusal situations. This article provides general guidance only.</p>
          <DisclaimerBanner />
          <RelatedArticles currentSlug="australia-pr-after-rejection" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
