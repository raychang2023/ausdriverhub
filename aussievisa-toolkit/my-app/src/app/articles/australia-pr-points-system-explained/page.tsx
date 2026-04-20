import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points System Explained Simply (2026 Beginner Guide) | AussieVisa Toolkit",
  description:
    "A plain English explanation of the Australia PR points system. No jargon, no complexity — just what you need to know to get started with skilled migration.",
};

const faqs = [
  {
    question: "Is 65 points enough for Australia PR?",
    answer:
      "65 points is the minimum to submit an EOI, but it is rarely enough to receive an invitation. For the 189 visa, you typically need 80-90+ points to be competitive. For the 190 visa, 75-85 is often needed. The 491 visa may accept lower scores due to the 15 bonus points.",
  },
  {
    question: "What is the most important factor in PR points?",
    answer:
      "Age and English are the two biggest factors. Age 25-32 gives you 30 points (maximum), and Superior English adds 20 points. Together, these two categories alone can give you 50 points — nearly half of what you need for a competitive score.",
  },
  {
    question: "Can I improve my PR points after submitting EOI?",
    answer:
      "Yes. You can update your EOI at any time before receiving an invitation. Common ways to improve include retaking English tests for a higher score, gaining more work experience, completing a Professional Year, or passing the NAATI CCL test for community language points.",
  },
  {
    question: "Which visa uses the same points system?",
    answer:
      "The 189 (Skilled Independent), 190 (State Nominated), and 491 (Skilled Work Regional) visas all use the same points system. The main difference is that 190 adds 5 bonus points and 491 adds 15 bonus points for state or family nomination.",
  },
  {
    question: "How quickly can I calculate my PR points?",
    answer:
      "You can calculate your estimated PR points in under 2 minutes using our free PR Points Calculator. It handles all the rules and caps automatically, giving you an instant score breakdown across all 12 categories.",
  },
];

export default function PointsSystemSimplyPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-system-explained" title="Australia PR Points System Explained Simply (2026 Beginner Guide) | AussieVisa Toolkit" description="A plain English explanation of the Australia PR points system. No jargon, no complexity — just what you need to know to get started with skilled migration." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">Points System Explained</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points System Explained Simply</h1>

          <p>
            If you are new to Australian skilled migration, the points system can feel
            overwhelming. There are 12 categories, specific rules, caps, and exceptions.
            This guide explains everything in plain English — no jargon, no confusion.
          </p>

          <p>
            Want to know where you stand?{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              Use our free PR Points Calculator
            </Link>{" "}
            to estimate your score in under 2 minutes — no sign-up required.
          </p>

          {/* The Big Picture */}
          <h2>The Big Picture: How the System Works</h2>

          <p>
            Australia uses a points-based system to select skilled migrants. Think of it
            like a ranking system. The more points you have, the higher you rank, and the
            more likely you are to be invited to apply for a visa.
          </p>

          <p>
            You earn points for things like your age, English ability, education, and work
            experience. You need at least 65 points to enter the system, but higher scores
            are needed to actually get invited.
          </p>

          <p>
            There are three main visas that use this system:
          </p>

          <ul>
            <li>
              <strong>189:</strong> Independent — no sponsorship required.{" "}
              <Link href="/articles/189-visa-requirements-australia" className="text-blue-700 hover:underline">Learn more</Link>
            </li>
            <li>
              <strong>190:</strong> State nominated — adds 5 bonus points.{" "}
              <Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">Learn more</Link>
            </li>
            <li>
              <strong>491:</strong> Regional — adds 15 bonus points.{" "}
              <Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">Learn more</Link>
            </li>
          </ul>

          {/* The 12 Categories */}
          <h2>The 12 Scoring Categories — Simplified</h2>

          <h3>1. Age (Up to 30 points)</h3>
          <p>
            Your age matters. Being 25–32 gives you the maximum 30 points. Younger
            applicants (18–24) get 25, and older applicants get fewer. If you are 45 or
            older, you cannot apply.
          </p>

          <h3>2. English (Up to 20 points)</h3>
          <p>
            Better English means more points. Basic English gives 0 points, moderate
            gives 10, and strong gives 20. This is usually the easiest category to
            improve.
          </p>

          <h3>3. Overseas Work Experience (Up to 15 points)</h3>
          <p>
            Work done outside Australia in your field counts. More experience means more
            points, up to 15.
          </p>

          <h3>4. Australian Work Experience (Up to 20 points)</h3>
          <p>
            Work done inside Australia in your field also counts. You can earn up to 20
            points here, but see the cap below.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <p className="text-sm text-blue-800">
              <strong>Important cap:</strong> Categories 3 and 4 are combined. Your overseas
              and Australian work experience points together cannot exceed 20 total.
            </p>
          </div>

          <h3>5. Education (Up to 20 points)</h3>
          <p>
            Higher qualifications mean more points. A PhD gives 20, a university degree
            gives 15, and a diploma or trade gives 10.
          </p>

          <h3>6. Specialist Education (Up to 10 points)</h3>
          <p>
            If you completed a research degree in science, technology, engineering, or
            maths (STEM) at an Australian university, you get up to 10 extra points.
          </p>

          <h3>7. Australian Study (5 points)</h3>
          <p>
            If you completed at least 2 years of study in Australia, you get 5 points.
          </p>

          <h3>8. Regional Study (5 points)</h3>
          <p>
            If you completed that 2 years of study while living in a regional area, you
            get an additional 5 points.
          </p>

          <h3>9. Professional Year (5 points)</h3>
          <p>
            A structured work training program for accounting, IT, or engineering
            graduates. Completing it adds 5 points.
          </p>

          <h3>10. Community Language (5 points)</h3>
          <p>
            If you are certified as a community language interpreter or translator
            (through NAATI), you get 5 points.
          </p>

          <h3>11. Partner Skills (Up to 10 points)</h3>
          <p>
            Your partner&apos;s English skills and qualifications can add points. Being
            single also counts for 10 points.
          </p>

          <h3>12. Nomination (5 or 15 points)</h3>
          <p>
            State nomination for a 190 visa adds 5 points. State or family nomination
            for a 491 visa adds 15 points.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              With 12 categories and various caps, manual calculation gets complicated. Let our tool do the work.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Score Instantly →
            </Link>
          </div>

          {/* Things That Don't Count */}
          <h2>What Does NOT Count for Points</h2>

          <p>
            It is equally important to know what does not earn you points:
          </p>

          <ul>
            <li>Your salary or income level</li>
            <li>Property or assets in Australia</li>
            <li>Number of visits to Australia</li>
            <li>Volunteer work (unless it meets skilled employment criteria)</li>
            <li>Online courses or short courses (unless they lead to a recognised qualification)</li>
          </ul>

          {/* Simple Scenarios */}
          <h2>Simple Examples</h2>

          <h3>Strong Applicant (95 points)</h3>
          <p>
            Age 28 (30) + Superior English (20) + 5 years Australian work (15) + PhD
            (20) + Australian study (5) + professional year (5) ={" "}
            <strong>95 points</strong>. Very competitive.
          </p>

          <h3>Average Applicant (75 points)</h3>
          <p>
            Age 30 (30) + Proficient English (10) + 3 years overseas work (5) + 2 years
            Australian work (5) + Bachelor&apos;s (15) + single (10) ={" "}
            <strong>75 points</strong>. Competitive for many pathways.
          </p>

          <h3>Starting Out (60 points)</h3>
          <p>
            Age 24 (25) + Competent English (0) + 1 year overseas work (0) + Bachelor&apos;s
            (15) + Australian study (5) + single (10) + regional study (5) ={" "}
            <strong>60 points</strong>. Below the 65 minimum — needs improvement.
          </p>

          {/* How to Get Started */}
          <h2>How to Get Started</h2>

          <h3>Step 1: Calculate Your Score</h3>
          <p>
            Use our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to estimate your points across all 12 categories.
          </p>

          <h3>Step 2: Compare Visa Options</h3>
          <p>
            Check whether the{" "}
            <Link href="/articles/189-vs-190-vs-491-visa-comparison" className="text-blue-700 hover:underline">
              189, 190, or 491 visa
            </Link>{" "}
            suits your situation best.
          </p>

          <h3>Step 3: Improve Where You Can</h3>
          <p>
            Focus on the areas where you can gain points most easily. For most people,
            that means improving English.
          </p>

          <h3>Step 4: Submit Your EOI</h3>
          <p>
            Once you reach 65+ points, submit your Expression of Interest through
            SkillSelect and wait for an invitation.
          </p>

          {/* CTA */}
          <h2>Check Your Score Now</h2>

          <p>
            The points system does not have to be complicated. Our calculator handles
            the rules and caps automatically so you can focus on planning your next steps.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Ready to see your score? Check where you stand before planning your next move.
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
            This article is a simplified explanation of the Australia PR points system
            for general understanding. It does not cover every rule or exception. Always
            verify with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>{" "}
            for official and current information.
          </p>

          <DisclaimerBanner />

          {/* Related */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/how-pr-points-calculated-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🧮</span>
              <span className="font-medium text-gray-900">How Points Are Calculated</span>
            </Link>
            <Link
              href="/articles/189-vs-190-vs-491-visa-comparison"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">⚖️</span>
              <span className="font-medium text-gray-900">189 vs 190 vs 491</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-system-explained" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
