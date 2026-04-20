import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "190 Visa Requirements Australia (2026 State Nomination Guide) | AussieVisa Toolkit",
  description:
    "Complete guide to 190 visa requirements Australia. Learn about state nomination, eligibility, points, and how to apply for the Subclass 190 visa.",
};

const faqs = [
  {
    question: "Do I need to live in the nominating state permanently?",
    answer:
      "The 190 visa typically requires you to live in the nominating state for at least 2 years after the visa is granted. After this commitment period, you are free to live anywhere in Australia.",
  },
  {
    question: "How much does 190 state nomination cost?",
    answer:
      "Each state charges its own nomination fee, which can range from $200 to $500 or more. Some states also have different fees for onshore and offshore applicants. Check the specific state website for current fees.",
  },
  {
    question: "Can I choose which state nominates me?",
    answer:
      "Yes, you can apply to multiple states. However, each state decides independently whether to nominate you. You cannot force a state to nominate you — it depends on your occupation, points, and their current priorities.",
  },
  {
    question: "What happens if I don't meet the 2-year residence requirement?",
    answer:
      "While the obligation exists, enforcement can vary. However, not meeting the commitment may affect future visa applications or citizenship eligibility. It is best to plan to honour the agreement.",
  },
];

export default function Visa190RequirementsPage() {
  return (
<>
        <ArticleSEO slug="190-visa-requirements-australia" title="190 Visa Requirements Australia (2026 State Nomination Guide) | AussieVisa Toolkit" description="Complete guide to 190 visa requirements Australia. Learn about state nomination, eligibility, points, and how to apply for the Subclass 190 visa." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">190 Visa Requirements</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>190 Visa Requirements Australia</h1>

          <p>
            The Subclass 190 Skilled Nominated Visa offers permanent residency with
            the help of state sponsorship. For many applicants, the extra 5 nomination
            points make the difference between receiving an invitation and waiting
            indefinitely.
          </p>

          <p>
            Check your current score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to see how state nomination could affect your eligibility.
          </p>

          {/* What Is 190 */}
          <h2>What Is the 190 Visa?</h2>

          <p>
            The 190 visa is a permanent residency visa for skilled workers who are
            nominated by an Australian state or territory government. It is very
            similar to the 189 visa, with two key differences:
          </p>

          <ul>
            <li>You need state nomination (which adds 5 bonus points)</li>
            <li>You are expected to live in the nominating state for a period</li>
          </ul>

          <p>
            Otherwise, the 190 visa grants the same benefits as the 189: permanent
            residency, work rights anywhere in Australia, and a pathway to citizenship.
          </p>

          {/* Requirements */}
          <h2>Core 190 Visa Requirements</h2>

          <h3>1. State Nomination</h3>
          <p>
            This is what sets the 190 apart. You must receive a nomination from an
            Australian state or territory. Each state has its own occupation lists,
            eligibility criteria, and application process.
          </p>

          <h3>2. Skills Assessment</h3>
          <p>
            Like the 189 visa, you need a positive skills assessment from the relevant
            assessing authority for your occupation. Your occupation must appear on
            the nominating state&apos;s occupation list.
          </p>

          <h3>3. Minimum 65 Points</h3>
          <p>
            You need at least 65 points on the points test. With the 5-point nomination
            bonus, your effective score becomes 70+. However, many states prefer
            applicants with higher scores.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how 5 nomination points change your score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          <h3>4. English Proficiency</h3>
          <p>
            At least Competent English is required. Many states prefer Proficient or
            Superior English, as it indicates you can settle and work effectively.
          </p>

          <h3>5. Age Under 45</h3>
          <p>
            You must be under 45 at the time of invitation. The same age limit as
            the 189 visa applies.
          </p>

          <h3>6. Health and Character</h3>
          <p>
            Standard health and character requirements apply. You and any included
            family members must pass medical examinations and provide police
            clearances.
          </p>

          {/* State Nomination */}
          <h2>How State Nomination Works for 190</h2>

          <h3>Option A: State Invites You</h3>
          <p>
            Some states run their own invitation rounds. If your EOI on SkillSelect
            matches their requirements, they may send you a nomination invitation.
            No separate application is needed — your EOI serves as your application.
          </p>

          <h3>Option B: You Apply Directly to the State</h3>
          <p>
            Other states require you to submit a separate application through their
            own portal. This may involve additional questions, fees, and supporting
            documents. Each state&apos;s process is different.
          </p>

          <p>
            Read our full{" "}
            <Link href="/articles/state-nomination-australia" className="text-blue-700 hover:underline">
              state nomination guide
            </Link>{" "}
            to understand the process in detail.
          </p>

          {/* Competitive Scores */}
          <h2>What Score Do You Need for 190?</h2>

          <p>
            While the minimum is 65, competitive scores for the 190 visa vary by
            state and occupation:
          </p>

          <ul>
            <li><strong>Popular states (NSW, VIC):</strong> Often require 80–90 points</li>
            <li><strong>Moderate states (QLD, WA):</strong> Typically 70–85 points</li>
            <li><strong>Less competitive (SA, TAS):</strong> May accept 65–75 points</li>
          </ul>

          <p>
            Remember that the 5 nomination bonus is added to your base score. If your
            base score is 75, your effective total becomes 80 with nomination.
          </p>

          <p>
            Learn about{" "}
            <Link href="/articles/65-points-enough-australia-pr" className="text-blue-700 hover:underline">
              whether 65 points is enough
            </Link>{" "}
            for skilled migration.
          </p>

          {/* Application Steps */}
          <h2>190 Visa Application Steps</h2>

          <h3>Step 1: Get Skills Assessment</h3>
          <p>
            Complete your skills assessment with the relevant authority for your
            occupation.
          </p>

          <h3>Step 2: Take English Test</h3>
          <p>
            Achieve the required English score through an approved test. Higher
            scores improve both your points and your state nomination chances.
          </p>

          <h3>Step 3: Calculate Your Score</h3>
          <p>
            Use our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to determine your base score before nomination.
          </p>

          <h3>Step 4: Apply for State Nomination</h3>
          <p>
            Submit your nomination application to your target state. Follow their
            specific requirements and process.
          </p>

          <h3>Step 5: Receive Nomination</h3>
          <p>
            If approved, the state will nominate you on SkillSelect. This adds 5
            points to your EOI.
          </p>

          <h3>Step 6: Wait for Invitation and Apply</h3>
          <p>
            After nomination, wait for a visa invitation. Once received, submit your
            visa application within 60 days.
          </p>

          {/* Pros and Cons */}
          <h2>190 Visa Pros and Cons</h2>

          <h3>Advantages</h3>
          <ul>
            <li>Permanent residency immediately on grant</li>
            <li>5 extra nomination points can make the difference</li>
            <li>State lists may include occupations not on the national list</li>
            <li>Generally lower points threshold than the 189 visa</li>
          </ul>

          <h3>Considerations</h3>
          <ul>
            <li>You must live in the nominating state for typically 2 years</li>
            <li>Each state has its own application process and fees</li>
            <li>Nomination is not guaranteed</li>
            <li>Processing time includes both nomination and visa stages</li>
          </ul>

          {/* Costs */}
          <h2>190 Visa Costs</h2>

          <p>
            Beyond the standard visa application fee, you also pay:
          </p>

          <ul>
            <li>State nomination application fee (varies by state)</li>
            <li>Skills assessment fee</li>
            <li>English test fee</li>
            <li>Medical and police checks</li>
            <li>Migration agent fees (if applicable)</li>
          </ul>

          {/* Final CTA */}
          <h2>Check Your 190 Visa Eligibility</h2>

          <p>
            State nomination could be your fastest path to Australian PR. Check your
            score and start planning your state nomination strategy.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your PR points to see if the 190 visa is right for you.
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
            This article provides general information about 190 visa requirements
            Australia. State nomination criteria change frequently. Always verify
            with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            and the relevant state government website.
          </p>

          <p>
            This article does not constitute immigration advice.
          </p>

          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/190-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">190</span>
              <span className="font-medium text-gray-900">190 Visa Full Guide</span>
            </Link>
            <Link
              href="/articles/state-nomination-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🏛️</span>
              <span className="font-medium text-gray-900">State Nomination Guide</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="190-visa-requirements-australia" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
