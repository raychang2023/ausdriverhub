import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Health Requirements 2026 (Medical Checks) | AussieVisa Toolkit",
  description:
    "Health requirements for Australia PR explained. Learn about medical examinations, panel physicians, common issues, and how to meet the health criteria.",
};

const faqs = [
  {
    question: "What health checks are required for Australia PR?",
    answer:
      "All applicants must undergo medical examinations including a physical exam, chest X-ray (for tuberculosis), HIV test, and sometimes additional tests based on age and country of origin. Family members included in your application must also be examined.",
  },
  {
    question: "Where can I get my health examination?",
    answer:
      "You must use an approved panel physician or clinic. The Department of Home Affairs lists approved providers worldwide. You cannot use your regular doctor unless they are specifically approved as a panel physician.",
  },
  {
    question: "How long are health examinations valid?",
    answer:
      "Health examinations are typically valid for 12 months. If your visa process takes longer than this, you may need to repeat the examinations. It is best to complete health checks close to your visa application or when requested.",
  },
  {
    question: "Can health issues prevent me from getting PR?",
    answer:
      "Certain health conditions may affect your application if they are deemed to pose a significant cost to the Australian community or threaten public health. However, many conditions are manageable and do not automatically lead to refusal. Each case is assessed individually.",
  },
];

export default function HealthRequirementsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-health-requirements" title="Australia PR Health Requirements 2026 (Medical Checks) | AussieVisa Toolkit" description="Health requirements for Australia PR explained. Learn about medical examinations, panel physicians, common issues, and how to meet the health criteria." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Health Requirements</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Health Requirements Guide</h1>

          <p>
            Meeting Australia's health requirements is mandatory for all
            permanent residency applicants. Understanding what is required and
            preparing properly helps avoid delays in your PR application.
          </p>

          <p>
            Check your overall PR eligibility while preparing for health checks
            with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* Health Requirement Overview */}
          <h2>Health Requirement Overview</h2>

          <p>
            All applicants for Australian permanent residency must meet health
            requirements. This ensures that:
          </p>

          <ul>
            <li>You do not pose a threat to public health in Australia</li>
            <li>You are not likely to require significant healthcare resources</li>
            <li>You can contribute to the Australian community</li>
          </ul>

          <p>
            Health requirements apply to the main applicant and all family
            members included in the application, regardless of whether they
            intend to migrate.
          </p>

          {/* Required Examinations */}
          <h2>Required Medical Examinations</h2>

          <h3>Standard Tests for All Applicants</h3>
          <ul>
            <li><strong>Medical examination:</strong> Physical check by a doctor</li>
            <li><strong>Chest X-ray:</strong> For tuberculosis screening</li>
            <li><strong>HIV test:</strong> Blood test for HIV status</li>
          </ul>

          <h3>Age-Specific Additional Tests</h3>
          <ul>
            <li><strong>Applicants 15+:</strong> HIV test required</li>
            <li><strong>Applicants 75+:</strong> Additional functional assessment</li>
            <li><strong>Children:</strong> May have different requirements based on age</li>
          </ul>

          <h3>Country-Specific Requirements</h3>
          <p>
            Applicants from certain countries with higher tuberculosis rates
            may require additional TB screening regardless of age.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Health checks are just one part of PR requirements. Check your points score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Panel Physicians */}
          <h2>Using Panel Physicians</h2>

          <p>
            You must have your health examinations conducted by an approved
            panel physician or clinic. Regular doctors cannot perform these
            examinations unless specifically approved.
          </p>

          <h3>Finding a Panel Physician</h3>
          <p>
            The Department of Home Affairs maintains a list of approved panel
            physicians worldwide. You can search by country and city on their
            website.
          </p>

          <h3>What to Bring</h3>
          <ul>
            <li>Passport or other photo ID</li>
            <li>Referral letter from the Department (if provided)</li>
            <li>Glasses or contact lenses (if you wear them)</li>
            <li>List of current medications</li>
            <li>Medical records for any existing conditions</li>
          </ul>

          {/* Examination Process */}
          <h2>The Examination Process</h2>

          <h3>Step 1: Book Your Appointment</h3>
          <p>
            Contact an approved panel physician to schedule your examination.
            Some clinics require advance booking, especially in busy locations.
          </p>

          <h3>Step 2: Attend the Examination</h3>
          <p>
            The examination typically includes:
          </p>
          <ul>
            <li>Height, weight, and blood pressure measurements</li>
            <li>Vision test</li>
            <li>Physical examination by a doctor</li>
            <li>Chest X-ray</li>
            <li>Blood tests</li>
            <li>Medical history review</li>
          </ul>

          <h3>Step 3: Results Sent Directly</h3>
          <p>
            The panel physician sends your results directly to the Department
            of Home Affairs. You typically do not receive a copy unless
            specifically requested.
          </p>

          {/* Timing */}
          <h2>When to Complete Health Checks</h2>

          <h3>Option 1: After Invitation (Most Common)</h3>
          <p>
            Most applicants complete health checks after receiving their
            invitation to apply. You have 60 days to submit your visa
            application, so schedule health checks promptly.
          </p>

          <h3>Option 2: Before Invitation (My Health Declaration)</h3>
          <p>
            You can complete health checks earlier using the myHealthDeclaration
            system. This can speed up your visa processing after invitation.
            However, remember that results expire after 12 months.
          </p>

          <h3>Family Members</h3>
          <p>
            All family members included in your application must complete
            health checks, even if they are not currently in Australia or
            do not plan to migrate immediately.
          </p>

          {/* Common Issues */}
          <h2>Common Health Issues</h2>

          <h3>Tuberculosis (TB)</h3>
          <p>
            TB is taken seriously in Australia. If your chest X-ray shows
            abnormalities, you may need further testing. Previous TB history
            does not automatically disqualify you, but you may need additional
            documentation and treatment proof.
          </p>

          <h3>Chronic Conditions</h3>
          <p>
            Conditions like diabetes, hypertension, or asthma are common and
            usually manageable. The key is demonstrating that you have the
            condition under control and will not require excessive healthcare
            resources.
          </p>

          <h3>Mental Health</h3>
          <p>
            Mental health conditions are assessed case by case. Having a mental
            health condition does not automatically prevent approval. The
            assessment focuses on whether the condition poses a risk to the
            community or requires significant resources.
          </p>

          <h3>Significant Costs</h3>
          <p>
            The main concern for chronic conditions is "significant cost" to
            the Australian healthcare system. There are thresholds for what
            constitutes significant cost. If your condition is likely to cost
            less than this threshold, it usually will not be a problem.
          </p>

          {/* Costs */}
          <h2>Health Examination Costs</h2>

          <p>
            Costs vary by country and clinic. Typical ranges:
          </p>

          <ul>
            <li><strong>Medical examination:</strong> $100–$300 AUD</li>
            <li><strong>Chest X-ray:</strong> $50–$150 AUD</li>
            <li><strong>Blood tests:</strong> $50–$100 AUD</li>
            <li><strong>Total per person:</strong> $200–$550 AUD</li>
          </ul>

          <p>
            Costs are paid directly to the panel physician, not to the
            Department of Home Affairs.
          </p>

          {/* Tips */}
          <h2>Tips for Health Examinations</h2>

          <ul>
            <li><strong>Book early</strong> — appointments can fill up, especially in busy locations</li>
            <li><strong>Bring complete medical records</strong> — for any existing conditions</li>
            <li><strong>Be honest</strong> — disclose all health information truthfully</li>
            <li><strong>Continue medications</strong> — do not stop prescribed medications before the exam</li>
            <li><strong>Get good rest</strong> — before your examination day</li>
            <li><strong>Follow instructions</strong> — from the panel physician carefully</li>
          </ul>

          {/* After Examination */}
          <h2>After Your Examination</h2>

          <h3>Normal Results</h3>
          <p>
            If your results are normal, they are added to your visa file and
            processing continues. You typically will not hear specifically
            about your health results unless there is an issue.
          </p>

          <h3>Further Testing Required</h3>
          <p>
            If the panel physician identifies concerns, you may be asked for
            additional tests or specialist reports. Respond promptly to avoid
            delays.
          </p>

          <h3>Health Waiver</h3>
          <p>
            In some cases where health requirements are not met, a health
            waiver may be available. This is complex and typically requires
            legal or migration agent assistance.
          </p>

          {/* Final CTA */}
          <h2>Prepare for Your PR Application</h2>

          <p>
            Health requirements are just one part of the PR process. Calculate
            your points and understand all requirements before applying.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Check your overall PR eligibility with our calculator.
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
            This article provides general information about health requirements
            for Australian PR. Requirements change and individual circumstances
            vary. Always verify with the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>{" "}
            and approved panel physicians.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-processing-time"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">⏱️</span>
              <span className="font-medium text-gray-900">Processing Times</span>
            </Link>
            <Link
              href="/articles/australia-pr-cost-fees"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">💰</span>
              <span className="font-medium text-gray-900">Cost and Fees</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-health-requirements" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
