import Layout from "@/components/Layout";
import RelatedArticles from "@/components/RelatedArticles";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

const ARTICLE_URL = "https://aussievisatoolkit.com/articles/pr-points-australia-explained";

export const metadata: Metadata = {
  title: "Australia PR Points Explained (2026 Guide + Free Calculator) | AussieVisa Toolkit",
  description:
    "Learn how Australia PR points work, how to calculate your PR score, and what score you need. Use our free PR points calculator to check your eligibility.",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Australia PR Points Explained (2026 Guide + Free Calculator)",
    description: "Learn how Australia PR points work, how to calculate your PR score, and what score you need.",
    url: ARTICLE_URL,
    siteName: "AussieVisa Toolkit",
    type: "article",
    publishedTime: "2026-04-17T00:00:00+08:00",
    modifiedTime: "2026-04-17T14:00:00+08:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia PR Points Explained (2026 Guide + Free Calculator)",
    description: "Learn how Australia PR points work, how to calculate your PR score, and what score you need.",
  },
};

function ArticleJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Australia PR Points Explained (2026 Guide + Free Calculator)",
          "description": "Learn how Australia PR points work, how to calculate your PR score, and what score you need.",
          "url": ARTICLE_URL,
          "datePublished": "2026-04-17T00:00:00+08:00",
          "dateModified": "2026-04-17T14:00:00+08:00",
          "author": { "@type": "Organization", "name": "AussieVisa Toolkit" },
          "publisher": { "@type": "Organization", "name": "AussieVisa Toolkit", "logo": { "@type": "ImageObject", "url": "https://aussievisatoolkit.com/og-image.png" } },
          "mainEntityOfPage": { "@type": "WebPage", "@id": ARTICLE_URL },
        }),
      }}
    />
  );
}

const faqs = [
  {
    question: "Is 65 points enough for Australia PR in 2026?",
    answer:
      "65 points is the minimum to submit an EOI, but it's rarely enough to receive an invitation. For the 189 visa, you typically need 85-95 points. For the 190 visa, 75-85 points is often competitive. The 491 visa may accept lower base scores (65-75) because of the 15-point regional bonus.",
  },
  {
    question: "What is the fastest way to increase PR points?",
    answer:
      "The quickest improvements are: (1) Improve English test score from Competent to Superior (+20 points), which can be done in 2-3 months, (2) Pass NAATI CCL test if you speak a community language (+5 points), (3) Get state nomination for 190 (+5) or 491 (+15 points). These can add 20-30 points within months.",
  },
  {
    question: "Can I combine overseas and Australian work experience for points?",
    answer:
      "Yes, but the combined total from both categories is capped at 20 points. You cannot claim the full 15 points for overseas experience AND the full 20 points for Australian experience. The maximum work experience points you can claim is 20 total.",
  },
  {
    question: "How long does it take to get a competitive PR score?",
    answer:
      "It depends on your starting point. Improving English is often fastest (2-3 months). Gaining work experience takes longer (1 year per 5 points). Many applicants take 6 to 24 months to reach a competitive score of 75-85 points. Use our calculator to identify your quickest path.",
  },
  {
    question: "Which visa gives the most points bonus?",
    answer:
      "The 491 Skilled Work Regional visa gives the highest bonus at +15 points for state or family sponsorship. The 190 State Nominated visa gives +5 points. The 189 Skilled Independent gives no bonus points but offers maximum flexibility with no regional requirements.",
  },
  {
    question: "Do I need a migration agent to calculate my points?",
    answer:
      "No. You can estimate your score using our free PR Points Calculator or the official Department of Home Affairs calculator. A migration agent may be helpful for complex cases, assessing authority issues, or if you're unsure about your eligibility.",
  },
  {
    question: "What happens if I claim incorrect points?",
    answer:
      "If you claim points you cannot substantiate with official evidence (certificates, test results, employment letters), your visa application may be refused. In serious cases, providing false information can result in a ban. Always only claim points you can prove.",
  },
  {
    question: "Can my partner help increase our PR points?",
    answer:
      "Yes. If your partner has a positive skills assessment in a relevant occupation AND competent English, you can claim 10 additional points. If your partner only has competent English (without a skills assessment), you can claim 5 points. Single applicants automatically get 10 points.",
  },
];

export default function PRPointsPage() {
  return (
    <>
      <ArticleJsonLd />
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">PR Points Explained</span>
        </nav>

        {/* Article */}
        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points Explained (2026 Guide + Free Calculator)</h1>

          {/* Quick Value Proposition */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="text-lg text-gray-800 mb-2">
              <strong>How many points do you need for Australian PR?</strong> It depends on your visa pathway:
            </p>
            <ul className="text-gray-700 space-y-1 mb-3">
              <li>• <strong>189 Independent:</strong> 85-95 points typically competitive</li>
              <li>• <strong>190 State Nominated:</strong> 75-85 points often sufficient</li>
              <li>• <strong>491 Regional:</strong> 65-75 base points (plus 15 bonus)</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/tools/pr-points-calculator" 
                className="inline-flex items-center px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
              >
                Calculate Your Score Now →
              </Link>
              <Link 
                href="/articles/65-points-enough-australia-pr" 
                className="inline-flex items-center px-4 py-2 bg-white text-blue-700 font-medium rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
              >
                Is 65 Points Enough?
              </Link>
            </div>
          </div>

          <p>
            Australia&apos;s skilled migration system uses a points test to rank applicants. This guide breaks down all 12 categories, shows you exactly how points are calculated, and helps you identify the fastest ways to boost your score.
          </p>

          {/* Quick Navigation */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
            <p className="font-semibold text-gray-900 mb-3">In this guide:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <a href="#how-it-works" className="text-blue-700 hover:underline">→ How the points system works</a>
              <a href="#categories" className="text-blue-700 hover:underline">→ The 12 points categories</a>
              <a href="#scores" className="text-blue-700 hover:underline">→ What score you need</a>
              <a href="#scenarios" className="text-blue-700 hover:underline">→ Real score scenarios</a>
              <a href="#improve" className="text-blue-700 hover:underline">→ How to increase points</a>
              <a href="#calculator" className="text-blue-700 hover:underline">→ Try the calculator</a>
            </div>
          </div>

          {/* What Are PR Points */}
          <h2>What Are PR Points in Australia</h2>

          <p>
            Australia PR points are a scoring system used to rank skilled migration applicants. When you want to
            apply for a skilled visa — such as the 189, 190, or 491 — you need to meet certain criteria, and each
            criterion is worth a set number of points.
          </p>

          <p>
            The higher your total score, the more competitive your application becomes in the government&apos;s
            invitation rounds. Understanding Australia PR points is essential for anyone considering skilled
            migration, as it helps you identify which areas to improve before submitting your application.
          </p>

          <p>
            You can explore the different visa types that use the points system on our{" "}
            <Link href="/articles/189-vs-190-vs-491-visa-comparison" className="text-blue-700 hover:underline font-medium">189 vs 190 vs 491 visa comparison page</Link>.
          </p>

          {/* How the System Works */}
          <h2 id="how-it-works">How the PR Points System Works</h2>

          <p>The process works in three main steps:</p>

          <h3>Step 1: Calculate Your Points</h3>
          <p>
            Go through each of the 12 categories and determine how many points you qualify for. Some categories
            are straightforward (like age), while others may require proof (like work experience or qualifications).
          </p>

          <h3>Step 2: Submit Your Expression of Interest (EOI)</h3>
          <p>
            Once you have an idea of your score, you submit an EOI through SkillSelect — the Australian
            government&apos;s online system. Your EOI includes your points claim and other personal details.
          </p>

          <h3>Step 3: Wait for an Invitation</h3>
          <p>
            The government runs regular invitation rounds. They invite applicants with the highest scores first,
            sorted by occupation. If your score is competitive for your occupation, you may receive an invitation
            to apply for a visa.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> The PR points system Australia uses is subject to change. Always check the
              official Department of Home Affairs website for the most current rules.
            </p>
          </div>

          {/* Points Breakdown */}
          <h2 id="categories">Australia PR Points Breakdown</h2>

          <p>There are 12 categories in the points test. Here is a complete breakdown:</p>

          {/* Age */}
          <h3>1. Age (Up to 30 points)</h3>
          <p>Your age at the time of invitation determines your points:</p>
          <ul>
            <li><strong>18–24 years:</strong> 25 points</li>
            <li><strong>25–32 years:</strong> 30 points (highest)</li>
            <li><strong>33–39 years:</strong> 25 points</li>
            <li><strong>40–44 years:</strong> 15 points</li>
            <li><strong>45+ years:</strong> Ineligible — you cannot apply for skilled migration</li>
          </ul>

          {/* English */}
          <h3>2. English Language (Up to 20 points)</h3>
          <p>English proficiency is one of the most important factors:</p>
          <ul>
            <li><strong>Competent</strong> (e.g., IELTS 6 each band): 0 points</li>
            <li><strong>Proficient</strong> (e.g., IELTS 7 each band): 10 points</li>
            <li><strong>Superior</strong> (e.g., IELTS 8 each band): 20 points</li>
          </ul>
          <p>
            Accepted tests include IELTS, PTE Academic, TOEFL iBT, and Cambridge English. Note that PTE scoring
            thresholds changed in August 2025 — check the current requirements before booking a test.
          </p>

          {/* Overseas Work Experience */}
          <h3>3. Overseas Work Experience (Up to 15 points)</h3>
          <p>Skilled employment outside Australia in your nominated occupation:</p>
          <ul>
            <li><strong>Less than 3 years:</strong> 0 points</li>
            <li><strong>At least 3 but less than 5 years:</strong> 5 points</li>
            <li><strong>At least 5 but less than 8 years:</strong> 10 points</li>
            <li><strong>At least 8 years:</strong> 15 points</li>
          </ul>

          {/* Australian Work Experience */}
          <h3>4. Australian Work Experience (Up to 20 points)</h3>
          <p>Skilled employment in Australia in your nominated occupation:</p>
          <ul>
            <li><strong>Less than 1 year:</strong> 0 points</li>
            <li><strong>At least 1 but less than 3 years:</strong> 5 points</li>
            <li><strong>At least 3 but less than 5 years:</strong> 10 points</li>
            <li><strong>At least 5 but less than 8 years:</strong> 15 points</li>
            <li><strong>At least 8 years:</strong> 20 points</li>
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> The combined total from overseas and Australian work experience is
              capped at <strong>20 points</strong>. You cannot claim the maximum for both categories.
            </p>
          </div>

          {/* Education */}
          <h3>5. Educational Qualifications (Up to 20 points)</h3>
          <p>Your highest completed qualification:</p>
          <ul>
            <li><strong>Doctorate (PhD):</strong> 20 points</li>
            <li><strong>Bachelor&apos;s or Master&apos;s degree:</strong> 15 points</li>
            <li><strong>Australian Diploma or Trade qualification:</strong> 10 points</li>
            <li><strong>Other recognised qualification:</strong> 10 points</li>
          </ul>

          {/* Specialist Education */}
          <h3>6. Specialist Education Qualification (Up to 10 points)</h3>
          <p>
            If you hold a Masters by research or Doctorate in a STEM or ICT field from an Australian
            institution, with at least 2 years of study, you may be eligible for 10 additional points.
          </p>

          {/* Australian Study */}
          <h3>7. Australian Study Requirement (5 points)</h3>
          <p>
            If you have completed at least 2 academic years (92 weeks) of study in Australia, you can claim
            5 points.
          </p>

          {/* Regional Study */}
          <h3>8. Regional Study (5 points)</h3>
          <p>
            If you met the Australian study requirement while living and studying in a designated regional
            area, you may claim an additional 5 points. Distance education does not count.
          </p>

          {/* Professional Year */}
          <h3>9. Professional Year (5 points)</h3>
          <p>
            A professional year is a structured program available for Accounting, ICT, and Engineering graduates.
            It must be at least 12 months and completed in Australia.
          </p>

          {/* Community Language */}
          <h3>10. Community Language (5 points)</h3>
          <p>
            If you hold NAATI accreditation at the required level (paraprofessional or above), or a community
            language credential, you can claim 5 points.
          </p>

          {/* Partner Skills */}
          <h3>11. Partner Skills (Up to 10 points)</h3>
          <p>Your partner&apos;s situation affects your score:</p>
          <ul>
            <li><strong>Partner has skills assessment + competent English:</strong> 10 points</li>
            <li><strong>Partner has competent English only:</strong> 5 points</li>
            <li><strong>Single or partner is Australian citizen/PR:</strong> 10 points</li>
            <li><strong>Partner does not meet any criteria:</strong> 0 points</li>
          </ul>

          {/* State Nomination */}
          <h3>12. State Nomination (5 or 15 points)</h3>
          <p>If you are applying for a nominated visa, you receive bonus points:</p>
          <ul>
            <li><strong>190 visa (state nomination):</strong> +5 points</li>
            <li><strong>491 visa (regional nomination or family sponsorship):</strong> +15 points</li>
          </ul>

          {/* Real Scenarios */}
          <h2 id="scenarios">Real PR Score Scenarios</h2>

          <p>
            To help you understand how points add up in practice, here are three realistic scenarios based on common applicant profiles:
          </p>

          <h3>Scenario 1: Recent IT Graduate in Australia (75 points)</h3>
          <ul>
            <li>Age 26: 30 points</li>
            <li>Proficient English: 10 points</li>
            <li>Bachelor&apos;s degree: 15 points</li>
            <li>2 years Australian study: 5 points</li>
            <li>Single applicant: 10 points</li>
            <li>Professional Year completed: 5 points</li>
            <li><strong>Total: 75 points</strong> — Competitive for 190 state nomination, borderline for 189 depending on occupation.</li>
          </ul>

          <h3>Scenario 2: Experienced Accountant Overseas (85 points)</h3>
          <ul>
            <li>Age 30: 30 points</li>
            <li>Superior English: 20 points</li>
            <li>6 years overseas experience: 10 points</li>
            <li>Master&apos;s degree: 15 points</li>
            <li>Partner with competent English: 5 points</li>
            <li>State nomination (190): 5 points</li>
            <li><strong>Total: 85 points</strong> — Strong for most occupations and pathways.</li>
          </ul>

          <h3>Scenario 3: Registered Nurse with Australian Experience (95 points)</h3>
          <ul>
            <li>Age 28: 30 points</li>
            <li>Superior English: 20 points</li>
            <li>3 years Australian nursing: 10 points</li>
            <li>Bachelor&apos;s degree: 15 points</li>
            <li>Australian study: 5 points</li>
            <li>Single applicant: 10 points</li>
            <li>Regional study: 5 points</li>
            <li><strong>Total: 95 points</strong> — Highly competitive for any pathway.</li>
          </ul>

          <p>
            Use our calculator to see how your specific situation compares to these scenarios.
          </p>

          {/* Mid-article CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Want to see your exact PR score based on your profile? See which scenario matches your situation.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your Score Now →
            </Link>
          </div>

          {/* Good PR Score */}
          <h2 id="scores">What Is a Good PR Score in Australia</h2>

          <p>
            The minimum score to submit an EOI is 65 points. However, meeting this minimum does not guarantee
            you will receive an invitation. Your PR score Australia will determine how competitive you are
            relative to other applicants in the same occupation.
          </p>

          <h3>Score Ranges</h3>
          <ul>
            <li><strong>65–74 points:</strong> Meets the minimum, but invitation chances vary by occupation. Low-demand occupations may invite at 65, but popular ones rarely do.</li>
            <li><strong>75–84 points:</strong> Generally competitive for many occupations, especially with state nomination. Read our detailed breakdown of <Link href="/articles/what-is-good-pr-score-australia" className="text-blue-700 hover:underline">what counts as a good PR score</Link>.</li>
            <li><strong>85–94 points:</strong> Strong score across most visa pathways and occupations.</li>
            <li><strong>95+ points:</strong> Highly competitive for any pathway, though outcomes always depend on occupation demand in each invitation round.</li>
          </ul>

          <h3>Score Requirements by Visa</h3>
          <ul>
            <li><strong>189 (Independent):</strong> Typically requires higher scores (80-90+ for popular occupations) due to no sponsorship requirement. <Link href="/articles/189-visa-requirements-australia" className="text-blue-700 hover:underline">See full 189 requirements</Link>.</li>
            <li><strong>190 (State Nominated):</strong> State nomination adds 5 points, making it more accessible. <Link href="/articles/state-nomination-australia" className="text-blue-700 hover:underline">Learn about state nomination</Link>.</li>
            <li><strong>491 (Regional):</strong> Regional nomination adds 15 points, often the lowest threshold. <Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">See 491 requirements</Link>.</li>
          </ul>

          <p>
            These are general observations based on recent trends. Actual invitation scores change with each
            round and vary significantly by occupation. Check our <Link href="/articles/australia-pr-invitation-rounds" className="text-blue-700 hover:underline">invitation rounds guide</Link> for the latest data.
          </p>

          {/* Minimum Requirement */}
          <h2>Minimum PR Points Requirement</h2>

          <p>
            To submit an EOI through SkillSelect, you need a minimum of <strong>65 Australia PR points</strong>.
            This is the baseline set by the Department of Home Affairs.
          </p>

          <p>
            However, the score required to actually receive an invitation is often higher — sometimes well above
            65 for popular occupations. Each invitation round has different cut-off scores depending on demand.
          </p>

          <p>
            The government also sets occupation ceilings, which limit how many people can be invited in each
            occupation per year. Some occupations fill up quickly, while others may invite applicants with
            lower scores.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
            <p className="text-sm text-amber-800">
              <strong>Remember:</strong> Invitation trends change regularly. The score that was enough last year
              may not be enough this year. Always review the latest{" "}
              <a
                href="https://immi.homeaffairs.gov.au/help-support/tools/our-online-services/skillselect"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-amber-900 font-medium"
              >
                SkillSelect invitation rounds
              </a>{" "}
              on the official website.
            </p>
          </div>

          {/* How to Increase */}
          <h2 id="improve">How to Increase Your PR Points</h2>

          <h3>Quick Improvements</h3>
          <ul>
            <li>
              <strong>Improve your English score.</strong> Upgrading from Competent to Proficient adds 10
              points. Going from Proficient to Superior adds another 10. This is often the fastest way to
              boost your PR score Australia.
            </li>
            <li>
              <strong>NAATI accreditation.</strong> If you speak a community language, consider getting NAATI
              certified for 5 extra points.
            </li>
            <li>
              <strong>Professional Year.</strong> If you work in Accounting, ICT, or Engineering, completing a
              Professional Year adds 5 points.
            </li>
          </ul>

          <h3>Medium-Term Improvements</h3>
          <ul>
            <li>
              <strong>Gain Australian work experience.</strong> Each additional year of skilled work in
              Australia can add up to 5 points.
            </li>
            <li>
              <strong>Complete additional qualifications.</strong> Upgrading from a Diploma to a Bachelor&apos;s
              degree, for example, can increase your education points.
            </li>
          </ul>

          <h3>Strategic Considerations</h3>
          <ul>
            <li>
              <strong>State nomination.</strong> Applying for a 190 or 491 visa through state nomination gives
              you bonus points that may make the difference.
            </li>
            <li>
              <strong>Partner skills.</strong> If your partner can obtain a skills assessment and demonstrate
              competent English, that is worth 10 points.
            </li>
          </ul>

          <h3>What NOT to Do</h3>
          <ul>
            <li>Do not claim points for experience or qualifications you cannot prove</li>
            <li>
              Remember that overseas and Australian work experience are capped at a combined 20 points —
              claiming the maximum in both is not possible
            </li>
            <li>Do not assume your score will be enough based on old invitation data</li>
          </ul>

          {/* Calculator CTA */}
          <h2 id="calculator">Try the PR Points Calculator</h2>

          <p>
            Our free calculator covers all 12 categories of the Australia PR points system. Simply select your
            options, and it will estimate your total score instantly.
          </p>

          <p>
            The calculator is designed to give you a general indication of where you stand. It is not an
            official tool, and actual points assessments are conducted by the Department of Home Affairs when
            you apply.
          </p>

          <div className="text-center my-6">
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Launch PR Points Calculator →
            </Link>
          </div>

          {/* Disclaimers */}
          <h2>Important Disclaimers</h2>

          <p>
            This guide provides general information only. The PR points system Australia uses is subject to
            change without notice. Visa policies, occupation lists, and points allocations can all be updated
            by the government.
          </p>

          <p>Always verify with the official sources:</p>
          <ul>
            <li>
              <a
                href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table"
                target="_blank"
                rel="noopener noreferrer"
              >
                Department of Home Affairs — Points Table
              </a>
            </li>
            <li>
              <a
                href="https://immi.homeaffairs.gov.au/help-support/tools/our-online-services/skillselect"
                target="_blank"
                rel="noopener noreferrer"
              >
                SkillSelect
              </a>
            </li>
          </ul>

          <p>For personalised advice, consider consulting a registered migration agent.</p>

          {/* End CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Knowing your score is the first step toward Australian PR. Use our free calculator to see your breakdown and identify the quickest ways to improve.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Check Your PR Score Now →
            </Link>
          </div>

          {/* Visa Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <Link
              href="/articles/189-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">189</span>
              <span className="font-medium text-gray-900">Independent Visa</span>
            </Link>
            <Link
              href="/articles/190-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">190</span>
              <span className="font-medium text-gray-900">State Nominated</span>
            </Link>
            <Link
              href="/articles/491-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">491</span>
              <span className="font-medium text-gray-900">Regional Visa</span>
            </Link>
          </div>

          {/* FAQ */}
          <RelatedArticles currentSlug="pr-points-australia-explained" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
      </Layout>
    </>
  );
}
