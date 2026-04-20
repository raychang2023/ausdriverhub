import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Expression of Interest (EOI) Guide 2026 | AussieVisa Toolkit",
  description:
    "How to submit an EOI for Australia PR. Learn about SkillSelect, EOI requirements, processing, and how to improve your chances of receiving an invitation.",
};

const faqs = [
  {
    question: "What is an EOI?",
    answer:
      "An Expression of Interest (EOI) is an online form submitted through SkillSelect that indicates your interest in applying for a skilled migration visa. It includes your personal details, nominated occupation, and claimed points. You must receive an invitation based on your EOI before you can apply for a visa.",
  },
  {
    question: "How long does an EOI stay in the system?",
    answer:
      "EOIs remain in the SkillSelect pool for 2 years. If you do not receive an invitation within this period, your EOI expires and you must submit a new one. You can update your EOI at any time before receiving an invitation.",
  },
  {
    question: "Can I have multiple EOIs?",
    answer:
      "You can only have one active EOI at a time. However, you can select multiple visa types (189, 190, 491) within a single EOI. You can also update your EOI to change preferences or improve your claimed points.",
  },
  {
    question: "What happens after I submit my EOI?",
    answer:
      "After submission, your EOI enters the SkillSelect pool. During invitation rounds, the highest-scoring applicants are selected. If selected, you receive an invitation to apply for your chosen visa. You then have 60 days to submit your complete visa application.",
  },
];

export default function EOIGuidePage() {
  return (
<>
        <ArticleSEO slug="australia-pr-eoi-guide" title="Australia PR Expression of Interest (EOI) Guide 2026 | AussieVisa Toolkit" description="How to submit an EOI for Australia PR. Learn about SkillSelect, EOI requirements, processing, and how to improve your chances of receiving an invitation." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">EOI Guide</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Expression of Interest (EOI) Guide</h1>

          <p>
            The Expression of Interest (EOI) is your entry ticket to Australia's
            skilled migration system. Through SkillSelect, you enter a competitive
            pool where your points score determines whether you receive an
            invitation to apply for permanent residency.
          </p>

          <p>
            Before submitting your EOI, calculate your points with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to ensure you have a competitive score.
          </p>

          {/* What Is EOI */}
          <h2>What Is an EOI?</h2>

          <p>
            An Expression of Interest is not a visa application. It is a
            declaration that you want to be considered for a skilled migration
            visa. You provide information about:
          </p>

          <ul>
            <li>Your personal details (age, English ability, etc.)</li>
            <li>Your nominated occupation</li>
            <li>Your claimed points score</li>
            <li>Your preferred visa types (189, 190, 491)</li>
          </ul>

          <p>
            The government uses this information to rank you against other
            applicants and select those with the highest scores during
            invitation rounds.
          </p>

          {/* Before Submitting */}
          <h2>Before You Submit an EOI</h2>

          <h3>1. Complete Your Skills Assessment</h3>
          <p>
            You cannot submit a valid EOI without a positive skills assessment.
            Your assessing authority must have confirmed your qualifications
            and experience meet Australian standards.
          </p>

          <h3>2. Take Your English Test</h3>
          <p>
            You need valid English test results (IELTS, PTE, etc.) to claim
            points. The results must be less than 3 years old when you receive
            your invitation.
          </p>

          <h3>3. Calculate Your Points Accurately</h3>
          <p>
            Be honest and accurate in your points calculation. Overclaiming
            leads to refusal if invited. Underclaiming means you might not
            receive an invitation when you should.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Get an accurate points calculation before submitting your EOI.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Submitting EOI */}
          <h2>How to Submit Your EOI</h2>

          <h3>Step 1: Create a SkillSelect Account</h3>
          <p>
            Visit the{" "}
            <a
              href="https://skillselect.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              SkillSelect website
            </a>{" "}
            and create an account. You will need a valid email address.
          </p>

          <h3>Step 2: Complete the EOI Form</h3>
          <p>
            Fill in all required sections:
          </p>
          <ul>
            <li>Personal information</li>
            <li>Nominated occupation and ANZSCO code</li>
            <li>Skills assessment details</li>
            <li>English test results</li>
            <li>Work experience</li>
            <li>Education qualifications</li>
            <li>Partner details (if applicable)</li>
            <li>Preferred visa types</li>
          </ul>

          <h3>Step 3: Review and Submit</h3>
          <p>
            Double-check all information for accuracy. Once submitted, your
            EOI enters the pool immediately.
          </p>

          <h3>Step 4: Receive Your EOI Reference</h3>
          <p>
            You will receive a reference number. Keep this safe — you will need
            it to update your EOI or track your status.
          </p>

          {/* Managing EOI */}
          <h2>Managing Your EOI</h2>

          <h3>Updating Your EOI</h3>
          <p>
            You can update your EOI anytime before receiving an invitation:
          </p>
          <ul>
            <li>Improved English scores</li>
            <li>Additional work experience</li>
            <li>New qualifications</li>
            <li>Changes to partner circumstances</li>
            <li>Updated contact details</li>
          </ul>
          <p>
            Updates are important because your points score at the time of
            invitation determines your eligibility.
          </p>

          <h3>EOI Expiry</h3>
          <p>
            EOIs expire after 2 years if you do not receive an invitation.
            You will receive a reminder before expiry. If your EOI expires,
            you must submit a new one.
          </p>

          <h3>Withdrawing Your EOI</h3>
          <p>
            You can withdraw your EOI at any time. This might be necessary if
            your circumstances change significantly or you decide not to pursue
            migration.
          </p>

          {/* Selection Process */}
          <h2>How EOIs Are Selected</h2>

          <h3>Invitation Rounds</h3>
          <p>
            The Department of Home Affairs conducts invitation rounds, typically
            monthly. During each round, they select EOIs with the highest scores.
          </p>

          <h3>Ranking Factors</h3>
          <p>
            EOIs are ranked by:
          </p>
          <ul>
            <li>Points score (highest first)</li>
            <li>Occupation ceilings (some occupations have limits)</li>
            <li>Date of effect (older EOIs may be prioritised at the same score)</li>
          </ul>

          <h3>Occupation Ceilings</h3>
          <p>
            Each occupation has an annual limit on invitations. Once the ceiling
            is reached, no more invitations are issued for that occupation until
            the next program year.
          </p>

          <p>
            Learn more about{" "}
            <Link href="/articles/australia-pr-invitation-rounds" className="text-blue-700 hover:underline">
              invitation rounds
            </Link>.
          </p>

          {/* After Invitation */}
          <h2>After Receiving an Invitation</h2>

          <h3>60-Day Deadline</h3>
          <p>
            You have exactly 60 days from the date of invitation to submit your
            visa application. This deadline is strict and cannot be extended.
          </p>

          <h3>What You Need</h3>
          <p>
            Prepare these documents before your invitation arrives:
          </p>
          <ul>
            <li>Valid skills assessment</li>
            <li>Current English test results</li>
            <li>Employment references and evidence</li>
            <li>Educational certificates</li>
            <li>Identity documents</li>
            <li>Health examination results</li>
            <li>Police clearance certificates</li>
          </ul>

          <h3>If You Miss the Deadline</h3>
          <p>
            If you do not apply within 60 days, your invitation expires. You
            return to the pool, but there is no guarantee you will receive
            another invitation. Avoid this by being prepared.
          </p>

          {/* Common Mistakes */}
          <h2>Common EOI Mistakes</h2>

          <h3>Overclaiming Points</h3>
          <p>
            Claiming points you cannot prove leads to visa refusal. Only claim
            points you have valid evidence for.
          </p>

          <h3>Expired Documents</h3>
          <p>
            Skills assessments and English tests expire. Monitor expiry dates
            and update your EOI with current documents.
          </p>

          <h3>Incorrect Occupation Code</h3>
          <p>
            Your nominated occupation must match your skills assessment exactly.
            Using the wrong ANZSCO code causes problems.
          </p>

          <h3>Not Updating Changes</h3>
          <p>
            If your score improves (better English, more experience), update
            your EOI immediately. Higher scores get selected first.
          </p>

          <h3>Ignoring State Nomination</h3>
          <p>
            Many applicants only select the 189 visa. Including 190 and 491
            options significantly increases your chances of receiving an
            invitation.
          </p>

          {/* Tips */}
          <h2>Tips for EOI Success</h2>

          <ul>
            <li><strong>Submit early</strong> — EOIs are ranked by date at the same score</li>
            <li><strong>Select all visa options</strong> — 189, 190, and 491 if eligible</li>
            <li><strong>Update regularly</strong> — as your circumstances improve</li>
            <li><strong>Be accurate</strong> — honesty is essential</li>
            <li><strong>Prepare documents</strong> — have everything ready before invitation</li>
            <li><strong>Monitor expiry dates</strong> — keep documents current</li>
          </ul>

          {/* Final CTA */}
          <h2>Start Your EOI Journey</h2>

          <p>
            Your EOI is the gateway to Australian permanent residency. Calculate
            your points, prepare your documents, and submit your EOI to enter
            the skilled migration pool.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points to ensure you are ready for EOI submission.
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
            This article provides general information about EOIs for Australian
            skilled migration. Requirements and processes change. Always verify
            with the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-invitation-rounds"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🎯</span>
              <span className="font-medium text-gray-900">Invitation Rounds</span>
            </Link>
            <Link
              href="/articles/australia-pr-skills-assessment"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span>
              <span className="font-medium text-gray-900">Skills Assessment</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-eoi-guide" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
