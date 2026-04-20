import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "189 Visa Requirements Australia (2026 Checklist) | AussieVisa Toolkit",
  description:
    "Complete guide to 189 visa requirements Australia. Learn about points, skills assessment, English, age limits, and the application process.",
};

const faqs = [
  {
    question: "Do I need a job offer for the 189 visa?",
    answer:
      "No. The 189 visa does not require a job offer or employer sponsorship. It is designed for skilled workers who can contribute to the Australian economy independently.",
  },
  {
    question: "What is the age limit for 189 visa?",
    answer:
      "You must be under 45 years of age when you receive an invitation to apply for the 189 visa. If you turn 45 after submitting your EOI but before receiving an invitation, you become ineligible.",
  },
  {
    question: "How long is the 189 visa valid?",
    answer:
      "The 189 visa grants permanent residency immediately upon approval. There is no expiry date. You can live in Australia indefinitely and eventually apply for citizenship if you meet the requirements.",
  },
  {
    question: "Can my family join me on a 189 visa?",
    answer:
      "Yes. You can include your partner and dependent children in your 189 visa application. They will receive permanent residency at the same time as you.",
  },
];

export default function Visa189RequirementsPage() {
  return (
<>
        <ArticleSEO slug="189-visa-requirements-australia" title="189 Visa Requirements Australia (2026 Checklist) | AussieVisa Toolkit" description="Complete guide to 189 visa requirements Australia. Learn about points, skills assessment, English, age limits, and the application process." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">189 Visa Requirements</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>189 Visa Requirements Australia</h1>

          <p>
            The Subclass 189 Skilled Independent Visa is one of the most sought-after
            pathways to Australian permanent residency. Unlike other visas, it requires
            no sponsorship, no nomination, and no job offer. But meeting the 189 visa
            requirements Australia can be challenging.
          </p>

          <p>
            Before you start, check whether you have enough points using our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to see if the 189 visa is realistic for your situation.
          </p>

          {/* Overview */}
          <h2>What Is the 189 Visa?</h2>

          <p>
            The 189 visa is a permanent residency visa for skilled workers who are not
            sponsored by an employer, a state, or a family member. It is entirely based
            on your skills, qualifications, and points score.
          </p>

          <p>
            Key benefits of the 189 visa:
          </p>

          <ul>
            <li>Permanent residency from the day it is granted</li>
            <li>Live and work anywhere in Australia</li>
            <li>No sponsorship or nomination required</li>
            <li>Include your family in the application</li>
            <li>Pathway to Australian citizenship</li>
          </ul>

          {/* Basic Requirements */}
          <h2>Basic 189 Visa Requirements</h2>

          <h3>1. Occupation on the Skilled Occupation List</h3>
          <p>
            Your nominated occupation must appear on the Medium and Long-term Strategic
            Skills List (MLTSSL). This list contains occupations that Australia needs
            on a long-term basis. Not all skilled occupations are on this list.
          </p>

          <h3>2. Skills Assessment</h3>
          <p>
            You must have a positive skills assessment from the relevant assessing
            authority for your occupation. This proves that your qualifications and
            experience meet Australian standards for your profession.
          </p>

          <h3>3. Minimum 65 Points</h3>
          <p>
            You need at least 65 points on the skilled migration points test. However,
            meeting the minimum does not guarantee an invitation. Most successful 189
            applicants have 85 points or more.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Not sure if you have enough points for the 189 visa?
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Check Your PR Points →
            </Link>
          </div>

          <h3>4. Competent English</h3>
          <p>
            You must demonstrate at least Competent English. This typically means
            IELTS 6.0 in each band, or equivalent scores in PTE, TOEFL, or Cambridge
            tests. Higher English scores also give you more points.
          </p>

          <h3>5. Under 45 Years of Age</h3>
          <p>
            You must be under 45 when you receive your invitation. There is no
            flexibility on this requirement. If you are approaching 45, time is
            critical.
          </p>

          <h3>6. Health and Character Requirements</h3>
          <p>
            You and any family members included in your application must meet
            Australia&apos;s health and character standards. This includes medical
            examinations and police clearance certificates.
          </p>

          {/* Points Breakdown */}
          <h2>189 Visa Points Requirements</h2>

          <p>
            While the minimum is 65 points, the 189 visa is highly competitive.
            Here is what you need to know about the points:
          </p>

          <h3>Competitive Scores</h3>
          <p>
            Recent invitation rounds show that most 189 invitations go to applicants
            with 85+ points. Some occupations regularly require 90 or even 95 points.
          </p>

          <h3>Key Points Categories</h3>
          <p>
            For the 189 visa, focus on maximizing these categories:
          </p>

          <ul>
            <li><strong>Age:</strong> 25–32 years gives maximum 30 points</li>
            <li><strong>English:</strong> Superior English gives 20 points</li>
            <li><strong>Work experience:</strong> Up to 20 points combined</li>
            <li><strong>Education:</strong> Up to 20 points for highest qualification</li>
          </ul>

          <p>
            Learn more about{" "}
            <Link href="/articles/what-is-good-pr-score-australia" className="text-blue-700 hover:underline">
              what is a good PR score
            </Link>{" "}
            for different visa pathways.
          </p>

          {/* Application Process */}
          <h2>189 Visa Application Process</h2>

          <h3>Step 1: Skills Assessment</h3>
          <p>
            Before you can apply, you need a positive skills assessment. Contact
            the relevant assessing authority for your occupation and submit your
            qualifications and work experience for evaluation.
          </p>

          <h3>Step 2: English Test</h3>
          <p>
            Take an approved English test (IELTS, PTE, TOEFL, or Cambridge). Your
            results must be valid (usually within 3 years) when you submit your EOI.
          </p>

          <h3>Step 3: Calculate Your Points</h3>
          <p>
            Use the{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to estimate your score. Make sure you have at least 65, preferably more.
          </p>

          <h3>Step 4: Submit EOI</h3>
          <p>
            Create an account on SkillSelect and submit your Expression of Interest.
            Include your skills assessment reference and English test results. Select
            the 189 visa as your preference.
          </p>

          <h3>Step 5: Wait for Invitation</h3>
          <p>
            The government runs invitation rounds, usually monthly. If your score
            is competitive for your occupation, you will receive an invitation to
            apply for the visa.
          </p>

          <h3>Step 6: Apply for Visa</h3>
          <p>
            Once invited, you have 60 days to submit your complete visa application.
            Include all supporting documents, pay the fees, and wait for processing.
          </p>

          {/* Processing Time */}
          <h2>189 Visa Processing Time</h2>

          <p>
            Processing times for the 189 visa vary depending on your occupation,
            the completeness of your application, and current case loads. Generally:
          </p>

          <ul>
            <li>Most applications are processed within 6–12 months</li>
            <li>Complex cases may take longer</li>
            <li>Priority occupations may be processed faster</li>
          </ul>

          <p>
            You can check current processing times on the Department of Home Affairs
            website.
          </p>

          {/* Costs */}
          <h2>189 Visa Costs</h2>

          <p>
            The main visa application fee is charged per applicant. Additional costs
            include:
          </p>

          <ul>
            <li>Skills assessment fees (varies by occupation)</li>
            <li>English test fees</li>
            <li>Medical examination fees</li>
            <li>Police clearance certificates</li>
            <li>Professional fees (if using a migration agent)</li>
          </ul>

          <p>
            Check the official Department of Home Affairs website for current visa
            application charges.
          </p>

          {/* Common Mistakes */}
          <h2>Common Mistakes to Avoid</h2>

          <h3>Submitting With Too Few Points</h3>
          <p>
            Many applicants submit EOIs with 65–70 points and wait indefinitely.
            Research the typical invitation scores for your occupation before
            submitting.
          </p>

          <h3>Expiring Documents</h3>
          <p>
            Skills assessments and English tests have expiry dates. Make sure your
            documents are valid when you receive an invitation.
          </p>

          <h3>Incorrect Occupation Selection</h3>
          <p>
            Choose the occupation that most closely matches your skills assessment.
            Selecting a different occupation will result in refusal.
          </p>

          {/* Comparison */}
          <h2>189 vs 190 vs 491: Which Is Better?</h2>

          <p>
            The 189 visa offers the most freedom but is also the most competitive.
            If your score is below 85, consider whether the{" "}
            <Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">190</Link>{" "}
            or{" "}
            <Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">491</Link>{" "}
            visas might be better options.
          </p>

          <p>
            Read our detailed{" "}
            <Link href="/articles/189-vs-190-vs-491-visa-comparison" className="text-blue-700 hover:underline">
              189 vs 190 vs 491 comparison
            </Link>{" "}
            to help you decide.
          </p>

          {/* Final CTA */}
          <h2>Check If You Qualify for the 189 Visa</h2>

          <p>
            The 189 visa is an excellent pathway if you meet the requirements and
            have a competitive points score. Check your eligibility now.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points to see if the 189 visa is right for you.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Check Your PR Points Now →
            </Link>
          </div>

          {/* Disclaimer */}
          <h2>Disclaimer</h2>

          <p>
            This article provides general information about 189 visa requirements
            Australia. Visa policies, occupation lists, and processing criteria
            change regularly. Always verify current requirements with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>.
          </p>

          <p>
            This article does not constitute immigration advice. For personalised
            guidance, consider consulting a registered migration agent.
          </p>

          <DisclaimerBanner />

          {/* Related Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/189-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">189</span>
              <span className="font-medium text-gray-900">189 Visa Full Guide</span>
            </Link>
            <Link
              href="/articles/189-vs-190-vs-491-visa-comparison"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">⚖️</span>
              <span className="font-medium text-gray-900">Compare All Visas</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="189-visa-requirements-australia" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
