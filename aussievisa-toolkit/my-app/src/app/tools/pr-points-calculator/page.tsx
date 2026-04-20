"use client";

import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  allPointsRules,
  calculateTotalPoints,
  getScoreInterpretation,
  MIN_REQUIRED_POINTS,
  MAX_POINTS,
  PointsSelection,
  PointsCategory,
} from "@/data/pointsRules";

const calculatorFAQs = [
  { 
    question: "How many points do I need for Australia PR in 2026?", 
    answer: "The minimum is 65 points to submit an EOI. However, competitive scores vary: 189 visa typically needs 85-95 points, 190 state nomination needs 75-85 points, and 491 regional needs 65-75 base points (plus 15 bonus). Use this calculator to see where you stand." 
  },
  { 
    question: "Is 65 points enough for Australia PR?", 
    answer: "65 points meets the minimum to submit an EOI, but it's rarely enough to receive an invitation for popular occupations. Most successful applicants have 75+ points. Check our detailed guide on whether 65 points is enough for specific scenarios." 
  },
  { 
    question: "How can I increase my PR points fast?", 
    answer: "The fastest improvements: (1) Improve English test score from Competent to Superior (+20 points), (2) Pass NAATI CCL test if you speak a community language (+5 points), (3) Get state nomination for 190 (+5) or 491 (+15 points). These can add 20-30 points within months." 
  },
  { 
    question: "Is this PR points calculator accurate?", 
    answer: "This calculator uses official Department of Home Affairs points tables and is regularly updated. However, it's for estimation only - actual eligibility and points assessment are determined when you lodge your official application. Always verify with immi.homeaffairs.gov.au." 
  },
  { 
    question: "Which English test is best for PR points?", 
    answer: "IELTS, PTE Academic, TOEFL iBT, and Cambridge English are all accepted. Many find PTE easier for achieving higher scores. You need: Competent (IELTS 6/PTE 50) = 0 pts, Proficient (IELTS 7/PTE 65) = 10 pts, Superior (IELTS 8/PTE 79) = 20 pts." 
  },
  { 
    question: "What is the maximum PR points possible?", 
    answer: "The maximum is 150 points theoretically, but practical maximums are lower due to category caps. Most competitive applicants score 85-105 points. Age (30) + English (20) + Education (20) + Experience (20) + Partner (10) + State Nomination (15) = 115 is a strong achievable score." 
  },
];

// Official resources links
const officialResources = [
  {
    title: "Points Test Table",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table",
    description: "Official points breakdown from Department of Home Affairs"
  },
  {
    title: "SkillSelect",
    url: "https://immi.homeaffairs.gov.au/help-support/tools/our-online-services/skillselect",
    description: "Submit your EOI and check invitation rounds"
  },
  {
    title: "English Requirements",
    url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language",
    description: "Accepted tests and score equivalencies"
  },
];

// Get trend description based on score
function getTrendDescription(score: number): { level: string; message: string; color: string } {
  if (score < 65) {
    return {
      level: "low",
      message: "Below the minimum threshold. Consider ways to improve your points through English proficiency, additional qualifications, or work experience.",
      color: "text-gray-600"
    };
  }
  if (score < 75) {
    return {
      level: "moderate",
      message: "Meets minimum requirements. Invitation prospects vary by occupation and current demand. Some occupations may require higher scores.",
      color: "text-blue-600"
    };
  }
  if (score < 85) {
    return {
      level: "competitive",
      message: "Generally competitive for many occupations. Invitation likelihood depends on your specific occupation and current SkillSelect trends.",
      color: "text-green-600"
    };
  }
  return {
    level: "strong",
    message: "Strong score range. Historically competitive for most occupations, though specific outcomes depend on various factors including occupation demand.",
    color: "text-green-700"
  };
}

// Calculate completion percentage
function getCompletionStatus(selections: PointsSelection): { filled: number; total: number; percentage: number } {
  const total = allPointsRules.length;
  const filled = Object.keys(selections).length;
  return { filled, total, percentage: Math.round((filled / total) * 100) };
}

export default function CalculatorPage() {
  const [selections, setSelections] = useState<PointsSelection>({});
  const [showDetails, setShowDetails] = useState(false);

  const result = useMemo(() => {
    return calculateTotalPoints(selections);
  }, [selections]);

  const totalPoints = result.total;
  const warnings = result.warnings;
  const interpretation = useMemo(() => {
    return getScoreInterpretation(totalPoints);
  }, [totalPoints]);
  
  const trend = useMemo(() => {
    return getTrendDescription(totalPoints);
  }, [totalPoints]);

  const completion = useMemo(() => {
    return getCompletionStatus(selections);
  }, [selections]);

  const handleSelect = (categoryId: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const handleReset = () => {
    setSelections({});
    setShowDetails(false);
  };

  const isComplete = completion.percentage === 100;

  return (
    <Layout>
      {/* Schema.org SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Australia PR Points Calculator",
            "applicationCategory": "UtilitiesApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AUD" },
            "description": "Free Australia PR points calculator for skilled migration visas 189, 190, and 491. Calculate your EOI score based on official Department of Home Affairs criteria.",
            "operatingSystem": "Web",
            "url": "https://aussievisatoolkit.com/tools/pr-points-calculator",
            "publisher": { "@type": "Organization", "name": "AussieVisa Toolkit" }
          }),
        }}
      />

      {/* Top Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-lg shrink-0">⚠️</span>
            <p className="text-sm text-amber-800">
              <strong>This calculator is for reference only.</strong> It is not an official government tool. 
              Points calculations and eligibility are determined by the Australian Department of Home Affairs. 
              Visa policies change frequently. Always verify with{" "}
              <a
                href="https://immi.homeaffairs.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-amber-900"
              >
                official sources
              </a>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header - Value Proposition */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Australia PR Points Calculator 2026
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find out if you qualify for Australian permanent residency in 2 minutes. 
            Calculate your score for skilled visas 189, 190, and 491 — free, instant, no signup required.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> 12 categories covered
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Updated for 2026
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Based on official rules
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Calculator Form */}
          <div className="lg:col-span-7 space-y-4">
            {/* Progress Indicator */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Completion</span>
                <span className="text-sm text-gray-500">{completion.filled} of {completion.total} categories</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${completion.percentage}%` }}
                />
              </div>
            </div>

            {/* Category Cards */}
            {allPointsRules.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                selectedValue={selections[category.id]}
                onSelect={(value) => handleSelect(category.id, value)}
              />
            ))}

            {/* Mobile Results Button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => {
                  document.getElementById('mobile-results')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-800 transition-colors shadow-sm"
              >
                View Results ({totalPoints} points)
              </button>
            </div>

            {/* Reset Button */}
            {completion.filled > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 bg-white text-gray-600 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Reset Calculator
              </button>
            )}
          </div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-5">
            <div id="mobile-results" className="lg:sticky lg:top-24 space-y-4">
              {/* Main Results Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">📊</span>
                  <h2 className="text-lg font-semibold text-gray-900">Points Estimate</h2>
                </div>

                {/* Score Display */}
                <div className={`text-center py-6 sm:py-8 rounded-xl mb-4 ${
                  totalPoints >= MIN_REQUIRED_POINTS 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-gray-50 border border-gray-200"
                }`}>
                  <p className="text-sm text-gray-500 mb-1">Estimated Total</p>
                  <p className={`text-5xl sm:text-6xl font-bold ${
                    totalPoints >= MIN_REQUIRED_POINTS ? "text-green-600" : "text-gray-700"
                  }`}>
                    {totalPoints}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Minimum required: {MIN_REQUIRED_POINTS} points
                  </p>
                </div>

                {/* Completion Status */}
                {!isComplete && (
                  <div className="p-3 bg-blue-50 rounded-lg mb-4">
                    <p className="text-sm text-blue-700 text-center">
                      Complete all {completion.total} categories to see full assessment
                    </p>
                  </div>
                )}

                {/* Trend Analysis */}
                {isComplete && (
                  <div className="p-4 bg-gray-50 rounded-xl mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Score Assessment</p>
                    <p className={`text-sm ${trend.color} leading-relaxed`}>
                      {trend.message}
                    </p>
                  </div>
                )}

                {/* Warnings */}
                {warnings.length > 0 && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
                    <p className="text-sm font-medium text-amber-800 mb-1">⚠️ Important Notes</p>
                    <ul className="text-sm text-amber-700 space-y-1">
                      {warnings.map((warning, idx) => (
                        <li key={idx}>• {warning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="p-4 bg-gray-100 rounded-xl">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Important:</strong> Based on general migration points rules as of 2025. 
                    This estimate does not guarantee eligibility or invitation. 
                    Individual circumstances may affect your actual points.
                  </p>
                </div>
              </div>

              {/* Official Resources Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔗</span>
                  <h3 className="font-semibold text-blue-900">Official Resources</h3>
                </div>
                <p className="text-sm text-blue-700 mb-4">
                  For current, accurate information, please refer to:
                </p>
                <div className="space-y-3">
                  {officialResources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-blue-800 group-hover:text-blue-900 text-sm">
                            {resource.title}
                          </p>
                          <p className="text-xs text-blue-600 mt-0.5">
                            {resource.description}
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Options Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Which Visa Is Right for You?
          </h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto text-sm">
            Your points score determines which visa pathways are realistic. Compare your options and find your best route to Australian PR.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <VisaOptionCard
              code="189"
              name="Skilled Independent"
              description="No state sponsorship needed"
              points={0}
              href="/articles/189-visa-requirements-australia"
            />
            <VisaOptionCard
              code="190"
              name="State Nominated"
              description="+5 points bonus"
              points={5}
              href="/articles/190-visa-requirements-australia"
            />
            <VisaOptionCard
              code="491"
              name="Regional (Provisional)"
              description="+15 points bonus"
              points={15}
              href="/articles/491-visa-requirements-australia"
            />
          </div>
          <div className="text-center mt-6">
            <Link 
              href="/articles/189-vs-190-vs-491-visa-comparison" 
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
            >
              See full 189 vs 190 vs 491 comparison
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <FAQSection title="Common Questions" faqs={calculatorFAQs} />
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-xl shrink-0">⚠️</span>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                This calculator provides general estimates only and is not affiliated with the Australian Government. 
                The Department of Home Affairs determines actual points and eligibility. 
                Visa policies, points systems, and occupation lists change frequently. 
                For current, accurate information, visit the{" "}
                <a
                  href="https://immi.homeaffairs.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  Department of Home Affairs website
                </a>{" "}
                or consult a registered migration agent for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Category Card Component
function CategoryCard({
  category,
  selectedValue,
  onSelect,
}: {
  category: PointsCategory;
  selectedValue?: string;
  onSelect: (value: string) => void;
}) {
  const isCompleted = !!selectedValue;

  return (
    <div className={`bg-white border rounded-xl p-4 sm:p-5 transition-all ${
      isCompleted ? "border-blue-300 shadow-sm" : "border-gray-200"
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{category.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{category.description}</p>
        </div>
        {isCompleted && (
          <span className="shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
            ✓
          </span>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2">
        {category.options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`w-full flex items-center justify-between p-3 sm:p-3.5 border rounded-lg text-left transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className={`text-sm ${isSelected ? "text-blue-900 font-medium" : "text-gray-700"}`}>
                {option.label}
              </span>
              <span className={`text-sm font-semibold shrink-0 ml-2 ${
                option.points > 0 ? (isSelected ? "text-blue-700" : "text-gray-500") : "text-gray-400"
              }`}>
                {option.points > 0 ? `+${option.points}` : "0"} pts
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Visa Option Card Component
function VisaOptionCard({
  code,
  name,
  description,
  points,
  href,
}: {
  code: string;
  name: string;
  description: string;
  points: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
    >
      <span className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold text-lg shrink-0 group-hover:bg-blue-200 transition-colors">
        {code}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm sm:text-base">{name}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {points > 0 && (
        <span className="text-sm font-medium text-green-600 shrink-0">
          +{points} pts
        </span>
      )}
    </Link>
  );
}
