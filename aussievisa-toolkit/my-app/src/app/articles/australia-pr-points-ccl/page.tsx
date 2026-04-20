import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleSEO from "@/components/ArticleSEO";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title:
    "Australia PR Points for CCL / Community Language (2026) | AussieVisa Toolkit",
  description:
    "How to get 5 bonus PR points with NAATI CCL test. Learn about the community language credential, eligible languages, preparation tips, and how it boosts your score.",
};

const faqs = [
  {
    question: "What is the NAATI CCL test?",
    answer:
      "The CCL (Credentialed Community Language) test is a language proficiency assessment by NAATI. It tests your ability to interpret dialogues between English and another language. Passing earns you 5 bonus points for your PR application.",
  },
  {
    question: "Which languages are eligible for CCL?",
    answer:
      "NAATI offers CCL tests in many languages including Mandarin, Hindi, Arabic, Vietnamese, Spanish, Persian, and more. Check the NAATI website for the full current list of available languages.",
  },
  {
    question: "Is CCL easier than PTE or IELTS?",
    answer:
      "Many candidates find CCL easier if they are fluent in both English and a community language. The test focuses on interpreting rather than writing or complex grammar. However, it requires specific preparation for the dialogue format.",
  },
  {
    question: "Can I combine CCL with other English points?",
    answer:
      "Yes. CCL points are separate from English language points. You can claim up to 20 English points (Superior English) plus 5 CCL points. They are independent categories.",
  },
];

export default function CCLPointsPage() {
  return (
<>
        <ArticleSEO slug="australia-pr-points-ccl" title="Australia PR Points for CCL / Community Language (2026) | AussieVisa Toolkit" description="How to get 5 bonus PR points with NAATI CCL test. Learn about the community language credential, eligible languages, preparation tips, and how it boosts your score." />
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-900">CCL Points</span>
        </nav>

        <article className="prose prose-gray max-w-none">
          <h1>Australia PR Points for Community Language (CCL)</h1>

          <p>
            The NAATI CCL test offers a straightforward way to earn 5 extra
            points for your Australia PR application. If you speak a community
            language fluently alongside English, this could be the easiest
            points you ever earn.
          </p>

          <p>
            See how CCL points affect your total score with our{" "}
            <Link href="/tools/pr-points-calculator" className="text-blue-700 hover:underline font-medium">
              PR Points Calculator
            </Link>.
          </p>

          {/* What Is CCL */}
          <h2>What Is the CCL Test?</h2>

          <p>
            CCL stands for Credentialed Community Language. It is a test
            administered by NAATI (the National Accreditation Authority for
            Translators and Interpreters) that assesses your ability to
            interpret dialogues between English and another language.
          </p>

          <h3>How the Test Works</h3>
          <p>
            The test consists of two dialogues. Each dialogue is set in a
            real-world situation (like a hospital visit or a government office
            appointment). You listen to sentences in one language and interpret
            them into the other language.
          </p>

          <h3>Key Facts</h3>
          <ul>
            <li>Two dialogues of approximately 300 words each</li>
            <li>Each dialogue takes about 10 minutes to complete</li>
            <li>Total test time: approximately 30 minutes</li>
            <li>Available in many languages</li>
            <li>Test fee: approximately $800 AUD</li>
          </ul>

          <p>
            Passing the CCL test awards you a credential that adds 5 bonus
            points to your PR points test.
          </p>

          {/* Points Value */}
          <h2>How Many Points Does CCL Give?</h2>

          <p>
            Passing the CCL test gives you <strong>5 bonus points</strong>.
            These are separate from your English language points.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Points Source</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">English (Superior)</td><td className="text-center p-3">20</td></tr>
                <tr className="border-b"><td className="p-3">English (Proficient)</td><td className="text-center p-3">10</td></tr>
                <tr className="border-b"><td className="p-3">English (Competent)</td><td className="text-center p-3">0</td></tr>
                <tr className="border-b"><td className="p-3 font-semibold">CCL (Community Language)</td><td className="text-center p-3 font-bold text-blue-700">+5 bonus</td></tr>
                <tr><td className="p-3"><strong>Maximum combined</strong></td><td className="text-center p-3 font-bold">25</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            While 5 points may seem small, it can be the difference between
            receiving an invitation and waiting indefinitely.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 text-center">
            <p className="text-gray-700 mb-3">
              See how 5 CCL points change your total PR score.
            </p>
            <Link
              href="/tools/pr-points-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Calculate Your PR Points →
            </Link>
          </div>

          {/* Eligible Languages */}
          <h2>Eligible Languages for CCL</h2>

          <p>
            NAATI offers CCL tests in many community languages. Popular
            languages include:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
            {["Mandarin", "Hindi", "Arabic", "Vietnamese", "Spanish", "Persian", "Urdu", "Punjabi", "Nepali", "Tagalog", "Korean", "Turkish"].map(lang => (
              <div key={lang} className="bg-gray-50 rounded px-3 py-2 text-sm">{lang}</div>
            ))}
          </div>

          <p>
            This is not a complete list. Check the{" "}
            <a
              href="https://www.naati.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              NAATI website
            </a>{" "}
            for all currently available languages.
          </p>

          {/* Who Should Take CCL */}
          <h2>Who Should Take the CCL Test?</h2>

          <h3>CCL Is Ideal For:</h3>
          <ul>
            <li>Applicants who speak a community language fluently</li>
            <li>Those needing 5 more points to reach a competitive score</li>
            <li>People who have been using their community language professionally</li>
            <li>Bilingual individuals who grew up speaking two languages</li>
          </ul>

          <h3>CCL May Not Be Worth It If:</h3>
          <ul>
            <li>You already have 90+ points (5 more is unnecessary)</li>
            <li>Your community language ability is basic or conversational only</li>
            <li>You could earn 10 points more easily through improving English</li>
            <li>Your preferred language is not available for testing</li>
          </ul>

          {/* Preparation */}
          <h2>How to Prepare for CCL</h2>

          <h3>Understand the Test Format</h3>
          <p>
            Familiarise yourself with the dialogue format. You will interpret
            sentence by sentence, switching between English and your community
            language. Practice with sample dialogues.
          </p>

          <h3>Practice Active Listening</h3>
          <p>
            The test requires you to listen carefully and interpret accurately.
            Practice with audio materials, news broadcasts, and conversation
            recordings in both languages.
          </p>

          <h3>Build Your Vocabulary</h3>
          <p>
            Dialogues cover everyday topics like healthcare, education, legal
            matters, and government services. Learn relevant vocabulary in both
            languages.
          </p>

          <h3>Take a Preparation Course</h3>
          <p>
            Many training providers offer CCL preparation courses. These courses
            provide practice materials, mock tests, and feedback. The investment
            is often worthwhile given the 5-point reward.
          </p>

          <h3>Do Mock Tests</h3>
          <p>
            Practice under timed conditions. Record yourself and review your
            accuracy. Focus on meaning rather than word-for-word translation.
          </p>

          {/* CCL vs Other Options */}
          <h2>CCL vs Other Ways to Gain Points</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-3 font-semibold">Option</th>
                  <th className="text-center p-3 font-semibold">Points</th>
                  <th className="text-center p-3 font-semibold">Difficulty</th>
                  <th className="text-center p-3 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">CCL</td><td className="text-center p-3">5</td><td className="text-center p-3">Moderate</td><td className="text-center p-3">4–8 weeks prep</td></tr>
                <tr className="border-b"><td className="p-3">English (Comp → Prof)</td><td className="text-center p-3">10</td><td className="text-center p-3">High</td><td className="text-center p-3">2–6 months</td></tr>
                <tr className="border-b"><td className="p-3">English (Prof → Super)</td><td className="text-center p-3">10</td><td className="text-center p-3">High</td><td className="text-center p-3">2–6 months</td></tr>
                <tr><td className="p-3">State nomination</td><td className="text-center p-3">5–15</td><td className="text-center p-3">Moderate</td><td className="text-center p-3">1–3 months</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            CCL is often the fastest and easiest way to gain 5 points, especially
            for bilingual applicants.
          </p>

          {/* Test Day */}
          <h2>Test Day Tips</h2>

          <ul>
            <li><strong>Arrive early</strong> to the test centre or log in early for online tests</li>
            <li><strong>Listen carefully</strong> to each sentence before interpreting</li>
            <li><strong>Focus on meaning</strong>, not literal word-for-word translation</li>
            <li><strong>Speak clearly</strong> and at a natural pace</li>
            <li><strong>Do not panic</strong> if you miss a word — continue with the overall meaning</li>
            <li><strong>Manage your time</strong> — both dialogues must be completed</li>
          </ul>

          {/* Retaking */}
          <h2>What If You Do Not Pass?</h2>

          <p>
            You can retake the CCL test. There is no limit on attempts, but
            you must pay the test fee each time. Before retaking:
          </p>

          <ul>
            <li>Identify where you went wrong</li>
            <li>Focus preparation on weak areas</li>
            <li>Consider a preparation course if you self-studied initially</li>
            <li>Allow enough time between attempts to improve</li>
          </ul>

          {/* Final CTA */}
          <h2>Add 5 Points to Your PR Score</h2>

          <p>
            If you speak a community language, CCL is one of the easiest ways
            to boost your PR points. Calculate your current score and see
            whether 5 extra points would make you competitive.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-8 text-center">
            <p className="text-gray-700 mb-3">
              Calculate your total PR points and see where CCL fits in.
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
            This article provides general information about CCL points for
            Australian skilled migration. Test requirements and fees change
            over time. Always verify with{" "}
            <a href="https://www.naati.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">NAATI</a>{" "}
            and the{" "}
            <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Department of Home Affairs</a>.
          </p>
          <DisclaimerBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Link
              href="/articles/australia-pr-points-english"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">🌐</span>
              <span className="font-medium text-gray-900">English Points</span>
            </Link>
            <Link
              href="/articles/how-pr-points-calculated-australia"
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">📊</span>
              <span className="font-medium text-gray-900">How Points Calculated</span>
            </Link>
          </div>

          <RelatedArticles currentSlug="australia-pr-points-ccl" />


          <FAQSection faqs={faqs} />
        </article>
      </div>
    </Layout>
      </>
    );
}
