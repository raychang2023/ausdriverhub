import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Australia PR Document Checklist (Complete Guide) | AussieVisa Toolkit",
  description: "Complete document checklist for Australia PR. Learn what documents you need for skills assessment, EOI, and visa application.",
};

const faqs = [
  { question: "What documents do I need for skills assessment?", answer: "You typically need identity documents, qualifications (degrees, transcripts), employment evidence (reference letters, payslips), and English test results. Specific requirements vary by assessing authority." },
  { question: "Do I need original documents?", answer: "Certified copies are usually accepted. Some authorities may request originals for verification. Always check the specific requirements of your assessing authority and the Department of Home Affairs." },
  { question: "How old can my documents be?", answer: "Police clearances are typically valid for 12 months. English tests are valid for 3 years. Skills assessments usually valid for 2-3 years. Employment evidence should be current at time of application." },
  { question: "Can documents be in another language?", answer: "Documents not in English must be translated by a certified translator. Both the original and translation must be provided." },
];

export default function DocumentChecklistPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-document-checklist" title="Australia PR Document Checklist (Complete Guide) | AussieVisa Toolkit" description="Complete document checklist for Australia PR. Learn what documents you need for skills assessment, EOI, and visa application." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link><span>/</span><Link href="/articles">Articles</Link><span>/</span><span className="text-gray-900">Document Checklist</span>
        </nav>
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Document Checklist</h1>
          <p>Having the right documents ready is crucial for a smooth PR application. This checklist covers the main documents you will need.</p>
          <p>Start with your points calculation: <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">PR Points Calculator</Link>.</p>

          <h2>Identity Documents</h2>
          <ul>
            <li>Passport (all pages with stamps and visas)</li>
            <li>Birth certificate</li>
            <li>National identity card (if applicable)</li>
            <li>Name change certificates (if applicable)</li>
          </ul>

          <h2>Qualification Documents</h2>
          <ul>
            <li>Degree certificates</li>
            <li>Academic transcripts</li>
            <li>Professional registration certificates</li>
            <li>Course completion certificates</li>
          </ul>

          <h2>Employment Documents</h2>
          <ul>
            <li>Employment reference letters</li>
            <li>Payslips</li>
            <li>Employment contracts</li>
            <li>Tax returns</li>
            <li>Superannuation statements (if Australian work)</li>
          </ul>

          <h2>English Test Results</h2>
          <ul>
            <li>IELTS Test Report Form</li>
            <li>PTE Academic Score Report</li>
            <li>TOEFL iBT (if accepted)</li>
          </ul>

          <h2>Character Documents</h2>
          <ul>
            <li>Police clearance certificates from all countries lived in 12+ months</li>
            <li>Australian Federal Police check (if applicable)</li>
          </ul>

          <h2>Health Documents</h2>
          <ul>
            <li>Medical examination results (conducted by panel physician)</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">Calculate your PR score while gathering documents.</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate Your Points →</Link>
          </div>

          <h2>Document Preparation Tips</h2>
          <ul>
            <li>Start collecting documents early</li>
            <li>Keep certified copies of everything</li>
            <li>Organise documents by category</li>
            <li>Ensure translations are certified</li>
            <li>Check validity periods</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">Ready to check your PR eligibility?</p>
            <Link href="/tools/pr-points-calculator" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Your PR Points →</Link>
          </div>

          <h2>Disclaimer</h2>
          <p>Document requirements vary by individual circumstances. Always check official requirements.</p>
          <DisclaimerBanner />
          <RelatedArticles currentSlug="australia-pr-document-checklist" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
