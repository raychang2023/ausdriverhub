import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "189 vs 190 vs 491 Visa: Which Is Best for You in 2026? | AussieVisa Toolkit",
  description:
    "Compare Australian skilled migration visas 189, 190, and 491. Understand key differences in points, nomination, residency, and which visa suits your situation.",
};

const faqs = [
  {
    question: "Which visa has the highest invitation rate?",
    answer:
      "It varies by occupation and invitation round. The 491 often has lower score thresholds due to the 15-point nomination bonus, while the 189 tends to be more competitive. Check current SkillSelect data for your specific occupation.",
  },
  {
    question: "Can I apply for more than one visa at the same time?",
    answer:
      "Yes. You can submit a single EOI with multiple visa preferences selected (189, 190, and 491). If invited for more than one, you can choose which invitation to accept.",
  },
  {
    question: "Is the 491 pathway to PR guaranteed?",
    answer:
      "No. To transition from 491 to the 191 PR visa, you must meet all conditions including living and working in a regional area for at least 3 years and meeting minimum income requirements. These are conditions, not automatic steps.",
  },
  {
    question: "Do I need a migration agent for my visa application?",
    answer:
      "It is not mandatory. Many applicants handle the process independently. However, a registered migration agent can help with complex cases, especially involving state nomination strategies or eligibility concerns.",
  },
  {
    question: "Can I switch from a 491 to a 189 or 190 later?",
    answer:
      "Not directly. The 491 is a separate pathway. After meeting the 491 conditions, you apply for the Subclass 191 (PR), not the 189 or 190. However, you could submit a new EOI for 189 or 190 while on a 491 visa, subject to invitation availability.",
  },
  {
    question: "How do I know which states are sponsoring my occupation?",
    answer:
      "Each state publishes its own occupation list and requirements. These lists change regularly. You can check each state government website for current nomination criteria, or use our visa pages to get started.",
  },
  {
    question: "Is 65 points enough for 190 visa?",
    answer:
      "65 points meets the minimum requirement to submit an EOI, but the actual score needed for a 190 invitation varies by state and occupation. Some states may invite at 65, while others require 75 or higher. Check current state nomination criteria and invitation trends for your specific occupation.",
  },
  {
    question: "Is 491 visa easier than 189?",
    answer:
      "Generally yes, due to the 15-point nomination bonus and lower competition. However, 'easier' depends on your willingness to live in a regional area for 3+ years. The 491 is a provisional visa requiring conditions to be met before PR, while the 189 grants immediate permanent residency but typically needs higher points.",
  },
];

export default function VisaComparisonPage() {
  return (
<>
        <ArticleSEO slug="189-vs-190-vs-491-visa-comparison" title="189 vs 190 vs 491 Visa: Which Is Best for You in 2026? | AussieVisa Toolkit" description="Compare Australian skilled migration visas 189, 190, and 491. Understand key differences in points, nomination, residency, and which visa suits your situation." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">189 vs 190 vs 491 Visa</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>189 vs 190 vs 491 Visa: Which Is Best for You in 2026?</h1>

          {/* Quick Decision Helper */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-900 mb-2">Not sure where to start?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="font-medium text-gray-900">🏆 Want max freedom?</p>
                <p className="text-gray-600">189 Independent — live anywhere, no sponsorship</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="font-medium text-gray-900">🏛️ Want permanent PR?</p>
                <p className="text-gray-600">190 State Nominated — +5 points, direct PR</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="font-medium text-gray-900">🌄 Need lower score?</p>
                <p className="text-gray-600">491 Regional — +15 points, path to PR</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link 
                href="/tools/pr-points-calculator" 
                className="inline-flex items-center px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                Check Your Score First →
              </Link>
            </div>
          </div>

          <p>
            Choosing between the 189, 190, and 491 Australian skilled migration visas is one of the most
            important decisions in your PR journey. Each pathway has different requirements, benefits, and
            trade-offs that can significantly affect your life in Australia.
          </p>

          <p>
            This guide breaks down the key differences in plain language so you can make an informed choice
            based on your situation. Your score will play a major role in which visa is realistic for you — if 
            you haven&apos;t already, <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
            calculate your PR points</Link> first.
          </p>

          {/* Quick Comparison */}
          <h2>Quick Comparison at a Glance</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold">189</th>
                  <th className="text-center p-3 font-semibold">190</th>
                  <th className="text-center p-3 font-semibold">491</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Visa Type</td><td className="text-center p-3">Permanent</td><td className="text-center p-3">Permanent</td><td className="text-center p-3">Provisional (5 years)</td></tr>
                <tr className="border-b"><td className="p-3">Nomination Required</td><td className="text-center p-3">No</td><td className="text-center p-3">Yes — State/Territory</td><td className="text-center p-3">Yes — State or Family</td></tr>
                <tr className="border-b"><td className="p-3">Points Bonus</td><td className="text-center p-3">0</td><td className="text-center p-3">+5</td><td className="text-center p-3">+15</td></tr>
                <tr className="border-b"><td className="p-3">Where You Can Live</td><td className="text-center p-3">Anywhere in Australia</td><td className="text-center p-3">Nominating state (typically 2 years)</td><td className="text-center p-3">Regional area (3+ years)</td></tr>
                <tr className="border-b"><td className="p-3">Pathway to PR</td><td className="text-center p-3">Direct PR</td><td className="text-center p-3">Direct PR</td><td className="text-center p-3">Via Subclass 191 after meeting conditions</td></tr>
                <tr><td className="p-3">Minimum Points</td><td className="text-center p-3">65</td><td className="text-center p-3">65</td><td className="text-center p-3">65</td></tr>
              </tbody>
            </table>
          </div>

          {/* 189 */}
          <h2>Subclass 189 — Skilled Independent Visa</h2>

          <p>
            The 189 visa is the most sought-after skilled migration pathway because it gives you permanent
            residency immediately without requiring any sponsorship or nomination. You are free to live and
            work anywhere in Australia from day one.
          </p>

          <h3>Who Is It For?</h3>
          <ul>
            <li>Applicants with strong PR points who do not need extra nomination points</li>
            <li>Those who want maximum flexibility about where to live</li>
            <li>People with occupations in high demand nationally</li>
          </ul>

          <h3>Key Advantages</h3>
          <ul>
            <li>No state sponsorship or family sponsorship required</li>
            <li>Direct permanent residency on grant</li>
            <li>Live, work, and study anywhere in Australia</li>
            <li>No residency obligations or commitments to a specific region</li>
          </ul>

          <h3>Things to Consider</h3>
          <ul>
            <li>Generally requires higher points scores due to competition</li>
            <li>No nomination bonus, so every point counts on your own merits</li>
            <li>Invitation thresholds can be high for popular occupations</li>
          </ul>

          <div className="text-center my-6">
            <Link
              href="/articles/189-visa-requirements-australia"
              className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Read Full 189 Visa Guide →
            </Link>
          </div>

          {/* 190 */}
          <h2>Subclass 190 — Skilled Nominated Visa</h2>

          <p>
            The 190 visa also grants permanent residency, but it requires you to be nominated by a state or
            territory government. In return for the nomination, you generally need to live in the nominating
            state for at least 2 years after the visa is granted.
          </p>

          <h3>Who Is It For?</h3>
          <ul>
            <li>Applicants who need the extra 5 nomination points to reach a competitive score</li>
            <li>People who are happy to live in a specific state</li>
            <li>Those whose occupation is in demand in a particular state</li>
          </ul>

          <h3>Key Advantages</h3>
          <ul>
            <li>Direct permanent residency (same as 189)</li>
            <li>5 extra points from state nomination can make the difference</li>
            <li>State-level occupation lists may be broader than the national list in some cases</li>
            <li>State governments may have faster processing than federal</li>
          </ul>

          <h3>Things to Consider</h3>
          <ul>
            <li>You must apply for nomination separately to each state</li>
            <li>Each state has its own criteria, fees, and processing times</li>
            <li>You are expected to live in the nominating state for a period</li>
            <li>Nomination is not guaranteed — states select candidates based on their priorities</li>
          </ul>

          <div className="text-center my-6">
            <Link
              href="/articles/190-visa-requirements-australia"
              className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Read Full 190 Visa Guide →
            </Link>
          </div>

          {/* 491 */}
          <h2>Subclass 491 — Skilled Work Regional (Provisional) Visa</h2>

          <p>
            The 491 visa is a provisional visa valid for 5 years. It requires sponsorship from a state
            government or an eligible family member living in a designated regional area. After meeting the
            visa conditions — primarily 3 years of regional residence and work — you can apply for the
            Subclass 191 to become a permanent resident.
          </p>

          <h3>Who Is It For?</h3>
          <ul>
            <li>Applicants with lower points who benefit from the 15-point bonus</li>
            <li>People willing to live in regional areas such as Adelaide, Perth, or smaller cities</li>
            <li>Those who have family members in regional areas who can sponsor them</li>
          </ul>

          <h3>Key Advantages</h3>
          <ul>
            <li>15 extra points — the biggest bonus of the three visas</li>
            <li>Often the lowest score threshold among the three pathways</li>
            <li>Regional areas can offer lower cost of living and strong job markets</li>
            <li>Some states actively encourage 491 applicants with faster nomination processes</li>
          </ul>

          <h3>Things to Consider</h3>
          <ul>
            <li>It is a provisional visa, not permanent residency on grant</li>
            <li>You must live and work in a designated regional area for at least 3 years</li>
            <li>There are minimum income requirements to transition to PR (Subclass 191)</li>
            <li>The definition of &ldquo;regional&rdquo; is broad — it includes major cities like Adelaide and Perth</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <p className="text-sm text-blue-800">
              <strong>About &ldquo;regional&rdquo; areas:</strong> The term covers a lot more than you might think.
              It includes everywhere in Australia except Sydney, Melbourne, Brisbane, the Gold Coast, and the
              surrounding regions. Adelaide, Perth, Hobart, and most of Queensland are all considered regional
              for migration purposes.
            </p>
          </div>

          <div className="text-center my-6">
            <Link
              href="/articles/491-visa-requirements-australia"
              className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Read Full 491 Visa Guide →
            </Link>
          </div>

          {/* Key Differences */}
          <h2>Key Differences in This Australia Skilled Visa Comparison</h2>

          <h3>Points and Competition</h3>
          <p>
            When weighing 189 vs 190 vs 491 visa options, the most practical difference for most applicants
            is the points bonus. The 189 gives you no bonus
            at all — your score stands on its own. The 190 adds 5 points through state nomination, and the 491
            adds 15 points. For applicants sitting just below competitive thresholds, these bonuses can be the
            deciding factor.
          </p>

          <p>
            In general, the 189 is the most competitive because it has the most applicants competing for the
            same invitations. The 491 tends to be the least competitive because the regional requirement and
            provisional status filter out some applicants.
          </p>

          <h3>Where You Can Live</h3>
          <p>
            The 189 offers complete freedom — you can move to any city, any suburb, at any time. The 190 comes
            with a commitment to live in the nominating state for typically 2 years. The 491 requires you to
            live in a designated regional area for at least 3 years before you can transition to PR.
          </p>

          <p>
            Think about your long-term plans. If you have strong reasons to be in Sydney or Melbourne, the 491
            might not be the right fit. If you are open to living in Adelaide, Perth, or other regional cities,
            the 491 pathway can be an excellent option.
          </p>

          <h3>Permanent vs Provisional</h3>
          <p>
            Both the 189 and 190 grant permanent residency immediately. The 491 is provisional — you must
            meet specific conditions over 3 years before you can apply for the 191 permanent visa.
          </p>

          <p>
            This does not mean the 491 is a bad option. It simply means there is an additional step. Many
            successful migrants have used the 491 as a stepping stone, and the regional experience can
            actually be a positive part of settling into Australian life.
          </p>

          {/* How to Decide */}
          <h2>How to Decide Which Visa to Aim For</h2>

          <p>
            There is no single &ldquo;best&rdquo; visa — the right choice depends on your personal circumstances.
            Here is a practical way to think about it:
          </p>

          <h3>Step 1: Estimate Your Points</h3>
          <p>
            Use our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to get a realistic estimate of your score. This will tell you whether you are in range for the
            more competitive 189, or whether nomination points would help.
          </p>

          <h3>Step 2: Check Your Occupation</h3>
          <p>
            Look at the national skilled occupation list and the state-level lists for your occupation. Some
            occupations are sponsored by many states, while others may only be available on specific state
            lists or the national list.
          </p>

          <h3>Step 3: Consider Your Location Preferences</h3>
          <p>
            Be honest with yourself about where you want to live. If you are open to regional areas, the 491
            gives you a significant points advantage. If you strongly prefer a major city, focus on the 189 or
            190.
          </p>

          <h3>Step 4: Think About Your Timeline</h3>
          <p>
            If you want PR as quickly as possible, the 189 or 190 is more direct. If you are patient and
            willing to invest in a regional lifestyle, the 491 can be a strategic long-term pathway.
          </p>

          <h3>Step 5: Consider a Flexible Approach</h3>
          <p>
            Many applicants submit a single EOI with all three visa types selected. This way, you keep your
            options open and accept whichever invitation comes first. You are not locked into one choice when
            you submit your EOI.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Not sure which visa suits you? Calculate your points and see how each option changes your
              score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Which Visa Should You Choose */}
          <h2>Which Visa Should You Choose?</h2>

          <p>
            Deciding between 189 vs 190 vs 491 visa options depends on your personal circumstances. This
            Australia skilled visa comparison can help you think through your priorities.
          </p>

          <h3>If You Have High PR Points</h3>
          <p>
            If your <strong>PR visa Australia options</strong> include a score above 85–90, the{" "}
            <Link href="/articles/189-visa-requirements-australia" className="text-blue-700 hover:underline">189 visa</Link> may be your best
            choice. It offers the most flexibility with no state commitment and direct permanent residency.
          </p>

          <h3>If Your Points Are Moderate</h3>
          <p>
            Scoring in the 70–80 range? The{" "}
            <Link href="/articles/190-visa-requirements-australia" className="text-blue-700 hover:underline">190 visa</Link> could be ideal.
            The extra 5 nomination points can push you into competitive territory, and you still get direct
            permanent residency.
          </p>

          <h3>If You Need More Points or Regional Lifestyle</h3>
          <p>
            If your score is below 70, or if you are open to living outside major cities, the{" "}
            <Link href="/articles/491-visa-requirements-australia" className="text-blue-700 hover:underline">491 visa</Link> offers a 15-point
            bonus. This is often the lowest threshold among the three pathways, though it requires regional
            residence and a provisional period.
          </p>

          <p>
            Still unsure? Use our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>{" "}
            to estimate your score.
          </p>

          {/* Summary */}
          <h2>Summary: Which Visa Should You Choose?</h2>

          <p>
            <strong>Choose 189 if</strong> you have a strong points score, want to live anywhere in Australia,
            and do not need sponsorship. This is the most flexible of the PR visa Australia options but also
            the most competitive.
          </p>

          <p>
            <strong>Choose 190 if</strong> you need extra nomination points and are comfortable committing to
            a specific state. It gives you the same permanent residency as the 189, with the trade-off of
            state residency requirements.
          </p>

          <p>
            <strong>Choose 491 if</strong> your points are lower, you are open to regional living, and you are
            comfortable with a two-step pathway to PR. The 15-point bonus can make a significant difference
            for applicants who would otherwise not be invited.
          </p>

          <p>
            Whatever pathway you choose, make sure to verify current requirements with the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Department of Home Affairs
            </a>
            , as policies and invitation trends can change.
          </p>

          {/* Disclaimer */}
          <DisclaimerBanner />

          {/* Visa Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <Link
              href="/articles/189-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                189
              </span>
              <span className="font-medium text-gray-900">Independent Visa</span>
            </Link>
            <Link
              href="/articles/190-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                190
              </span>
              <span className="font-medium text-gray-900">State Nominated</span>
            </Link>
            <Link
              href="/articles/491-visa-requirements-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                491
              </span>
              <span className="font-medium text-gray-900">Regional Visa</span>
            </Link>
          </div>

          {/* FAQ */}
          <RelatedArticles currentSlug="189-vs-190-vs-491-visa-comparison" />

          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
