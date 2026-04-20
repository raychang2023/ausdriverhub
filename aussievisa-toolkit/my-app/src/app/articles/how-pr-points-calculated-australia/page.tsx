import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "How PR Points Are Calculated in Australia (2026 Breakdown) | AussieVisa Toolkit",
  description:
    "Understand exactly how Australia PR points are calculated across age, English, work experience, education, and more. Includes a simple breakdown.",
};

const faqs = [
  {
    question: "Does the order of point categories matter?",
    answer:
      "No. All categories are scored independently and added together. There is no weighting or priority — each category simply contributes its own points to your total.",
  },
  {
    question: "Can I claim points from multiple categories at once?",
    answer:
      "Yes. You can claim points from as many categories as you qualify for, with one exception: overseas and Australian work experience are combined and capped at 20 points total.",
  },
  {
    question: "How do I know if my points claim is valid?",
    answer:
      "The Department of Home Affairs assesses your claims when you submit your visa application. You must provide evidence such as test scores, qualifications, and employment references for each category.",
  },
  {
    question: "Can I recalculate after receiving an invitation?",
    answer:
      "Your points are locked in at the time you receive your invitation. You cannot add points after the invitation date. Any improvements must be reflected in your EOI before the invitation round.",
  },
];

export default function HowPointsCalculatedPage() {
  return (
<>
        <ArticleSEO slug="how-pr-points-calculated-australia" title="How PR Points Are Calculated in Australia (2026 Breakdown) | AussieVisa Toolkit" description="Understand exactly how Australia PR points are calculated across age, English, work experience, education, and more. Includes a simple breakdown." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">How Points Are Calculated</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>How PR Points Are Calculated in Australia</h1>

          <p>
            Understanding how your PR points are calculated is essential before you start the
            skilled migration process. The calculation is straightforward once you know the
            rules, but there are a few details that can catch people off guard.
          </p>

          <p>
            You can check your own calculation using our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to see your estimated score.
          </p>

          {/* The Formula */}
          <h2>The PR Points Calculation Formula</h2>

          <p>
            The calculation is essentially a simple addition. You earn points from up to 12
            categories, and your total is the sum of all categories you qualify for:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
            <p className="text-center text-gray-700 font-medium">
              Total Score = Age + English + Overseas Work + Australian Work + Education +
              Specialist Education + Australian Study + Regional Study + Professional Year +
              Community Language + Partner Skills + Nomination
            </p>
          </div>

          <p>
            There is one important cap: your overseas and Australian work experience are
            combined, and the total cannot exceed 20 points.
          </p>

          {/* Detailed Breakdown */}
          <h2>Points Calculation by Category</h2>

          <h3>Age (Up to 30 points)</h3>
          <p>
            Points are awarded based on your age at the time of invitation. The 25–32 age
            bracket receives the maximum 30 points. Points decrease gradually for older
            applicants. If you are 45 or older, you are not eligible.
          </p>

          <h3>English Language (Up to 20 points)</h3>
          <p>
            English proficiency is assessed through recognised tests. Competent English
            (e.g., IELTS 6.0 each band) gives 0 points. Proficient (IELTS 7.0) gives 10
            points. Superior (IELTS 8.0) gives 20 points. This category alone can make
            a significant difference in your total.
          </p>

          <h3>Work Experience (Up to 20 points combined)</h3>
          <p>
            Both overseas and Australian skilled employment are scored separately but are
            subject to a combined cap of 20 points. Each uses different time brackets.
            You cannot simply add the maximum from both categories.
          </p>

          <h3>Education (Up to 20 points)</h3>
          <p>
            Your highest completed qualification determines your education points. A PhD
            gives 20 points, a Bachelor&apos;s or Master&apos;s gives 15, and a Diploma or
            Trade gives 10. Points are awarded for the highest qualification only.
          </p>

          <h3>Bonus Categories (Up to 25 points)</h3>
          <p>
            Several smaller categories can each add 5 points: Australian study, regional
            study, professional year, and community language (NAATI). There is also a
            specialist education category worth up to 10 points for STEM research degrees
            from Australian institutions.
          </p>

          <h3>Partner and Nomination (Up to 25 points)</h3>
          <p>
            Partner skills can add up to 10 points. State nomination adds either 5 points
            (190 visa) or 15 points (491 visa).
          </p>

          {/* Maximum Score */}
          <h2>What Is the Maximum PR Points Score?</h2>

          <p>
            The theoretical maximum PR points Australia score is 150 points when combining
            all categories. However, this is extremely rare because of the work experience
            cap. In practice, most applicants score between 65 and 100 points.
          </p>

          <p>
            A score of 85+ is generally considered very competitive. You can check what
            qualifies as a{" "}
            <Link href="/articles/what-is-good-pr-score-australia" className="text-blue-700 hover:underline">
              good PR score Australia
            </Link>{" "}
            on our detailed guide.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              Want to see how your points add up? Try our calculator.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Work Experience Cap */}
          <h2>Understanding the Work Experience Cap</h2>

          <p>
            The work experience cap is one of the most commonly misunderstood aspects of
            the PR points calculation. Here is how it works:
          </p>

          <p>
            Suppose you have 8 years of overseas experience (15 points) and 5 years of
            Australian experience (15 points). Your combined total would be 30 points.
            However, the cap limits you to 20 points total, so you lose 10 points.
          </p>

          <p>
            This means it is important to plan strategically. If you already have
            significant overseas experience, gaining Australian experience may not add as
            many points as you expect.
          </p>

          {/* Important Rules */}
          <h2>Important Calculation Rules</h2>

          <h3>Highest Qualification Only</h3>
          <p>
            You cannot stack education points. If you have both a Diploma (10 points) and
            a Master&apos;s degree (15 points), you only receive 15 points for the
            Master&apos;s.
          </p>

          <h3>Points Must Be Current</h3>
          <p>
            Work experience must be within the last 10 years. English test results must
            be from within the last 3 years. Expired evidence means no points.
          </p>

          <h3>Partner Points Are Separate</h3>
          <p>
            Your partner&apos;s points are added to your total, not claimed separately. If
            your partner does not meet any criteria, you simply get 0 points for the
            partner category.
          </p>

          <h3>Nomination Points Are Additive</h3>
          <p>
            State nomination points are added on top of your base score. A 190 nomination
            adds 5 points, and a 491 nomination adds 15 points to whatever you already
            have.
          </p>

          {/* Scenarios */}
          <h2>Calculation Scenarios</h2>

          <h3>Scenario 1: Young Graduate</h3>
          <p>
            Age 26 (30) + Superior English (20) + Bachelor&apos;s degree (15) + Australian
            study (5) + single (10) = <strong>80 points</strong>. This is a competitive
            score, especially for state nomination.
          </p>

          <h3>Scenario 2: Experienced Professional</h3>
          <p>
            Age 35 (25) + Proficient English (10) + 5 years overseas work (10) + 3 years
            Australian work (10) + Master&apos;s (15) + partner with English (5) ={" "}
            <strong>75 points</strong>. Note that work experience is capped at 20 combined.
          </p>

          <h3>Scenario 3: State Nominated Applicant</h3>
          <p>
            Age 30 (30) + Proficient English (10) + 3 years overseas work (5) + 2 years
            Australian work (5) + Bachelor&apos;s (15) + professional year (5) + 190
            nomination (5) = <strong>75 points</strong>.
          </p>

          {/* CTA */}
          <h2>Calculate Your Own PR Points</h2>

          <p>
            Now that you understand how the calculation works, try it yourself. Our
            calculator walks you through each category and applies the rules automatically.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              See your estimated score in under 2 minutes.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Launch PR Points Calculator →
            </Link>
          </div>

          {/* Disclaimer */}
          <h2>Disclaimer</h2>

          <p>
            This article explains the PR points calculation method based on publicly
            available information. The Department of Home Affairs determines your actual
            points when you apply. Policies may change at any time.
          </p>

          <p>
            For official information, visit the{" "}
            <a
              href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              official points table
            </a>.
          </p>

          <DisclaimerBanner />

          {/* Related */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/pr-points-australia-explained"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📋</span>
              <span className="font-medium text-gray-900">PR Points Explained</span>
            </Link>
            <Link
              href="/articles/65-points-enough-australia-pr"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📊</span>
              <span className="font-medium text-gray-900">Is 65 Points Enough?</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="how-pr-points-calculated-australia" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
