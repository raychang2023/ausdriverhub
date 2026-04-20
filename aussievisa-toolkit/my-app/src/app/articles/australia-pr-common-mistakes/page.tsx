import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Common Mistakes to Avoid (2026) | AussieVisa Toolkit",
  description: "Avoid common mistakes in your Australia PR application. Learn about errors in EOI submission, points claims, documentation, and how to improve your chances.",
};

const faqs = [
  { question: "What is the most common PR application mistake?", answer: "The most common mistake is incorrectly claiming points — either overestimating work experience, claiming qualifications that don't meet Australian standards, or misunderstanding English requirements. Always verify your claims against official criteria." },
  { question: "Should I submit my EOI immediately once I reach 65 points?", answer: "Not necessarily. While you can submit at 65 points, check whether this score is competitive for your occupation. For many occupations, 65 points won't result in an invitation. Consider improving your score before submitting or explore state nomination options." },
  { question: "Can I fix mistakes after submitting my EOI?", answer: "Yes, you can update your EOI details at any time before receiving an invitation. However, once invited, your EOI is locked and you cannot change the information. Ensure all details are accurate before the invitation arrives." },
  { question: "What happens if I claim points I cannot prove?", answer: "If you claim points you cannot substantiate with documentation, your visa application may be refused. In serious cases, providing false or misleading information can result in a ban from future applications." },
  { question: "Do I need a migration agent to avoid mistakes?", answer: "While not required, a registered migration agent can help navigate complex situations. For straightforward cases with clear eligibility, many applicants successfully apply independently using official resources and calculators." },
];

export default function PRMistakesPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-common-mistakes" title="Australia PR Common Mistakes to Avoid (2026) | AussieVisa Toolkit" description="Avoid common mistakes in your Australia PR application. Learn about errors in EOI submission, points claims, documentation, and how to improve your chances." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">Common Mistakes</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Common Australia PR Mistakes to Avoid</h1>
          <p>Avoiding common mistakes can save you time, money, and stress. Learn what errors applicants frequently make and how to prevent them.</p>
          <p>Start with accurate points calculation using our <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Top Mistakes to Avoid</h2>
          <h3>1. Incorrect Points Claims</h3>
          <p>Double-check every point you claim. Common errors include overstating work experience, claiming education that does not qualify, or misinterpreting English requirements.</p>

          <h3>2. Wrong Occupation Code</h3>
          <p>Choose the ANZSCO code that matches your actual duties, not just your job title. A mismatch between your skills assessment and claimed occupation can cause refusal.</p>

          <h3>3. Expired Documents</h3>
          <p>Ensure police clearances, skills assessments, and English test results are valid when you submit your visa application. Some documents expire faster than you expect.</p>

          <h3>4. Not Declaring All Information</h3>
          <p>Always disclose all relevant information, including criminal history, health issues, and previous visa refusals. Failure to disclose is a serious breach.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Get your points right from the start.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Best Practices</h2>
          <ul>
            <li>Verify your points before submitting EOI</li>
            <li>Keep copies of all documents</li>
            <li>Monitor document expiry dates</li>
            <li>Respond promptly to requests for more information</li>
            <li>Seek professional advice if unsure</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Start your PR journey with accurate information.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>This article provides general guidance. For complex situations, consider professional migration advice.</p>
          <DisclaimerBanner />
          <RelatedArticles currentSlug="australia-pr-common-mistakes" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
