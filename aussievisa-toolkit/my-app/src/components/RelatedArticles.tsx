import Link from "next/link";

interface ArticleLink {
  slug: string;
  title: string;
  emoji: string;
}

// 主题分类的文章映射
const RELATED_BY_TOPIC: Record<string, ArticleLink[]> = {
  // 分数系统相关
  "pr-points": [
    { slug: "pr-points-australia-explained", title: "Complete PR Points Guide", emoji: "📊" },
    { slug: "65-points-enough-australia-pr", title: "Is 65 Points Enough?", emoji: "❓" },
    { slug: "what-is-good-pr-score-australia", title: "What Is a Good Score?", emoji: "🎯" },
    { slug: "how-pr-points-calculated-australia", title: "How Points Are Calculated", emoji: "🧮" },
  ],
  // 英语分数相关
  "english": [
    { slug: "pte-vs-ielts-australia-pr", title: "PTE vs IELTS Comparison", emoji: "📝" },
    { slug: "australia-pr-points-english", title: "English Points Guide", emoji: "🌐" },
    { slug: "australia-pr-points-ccl", title: "CCL Community Language", emoji: "🗣️" },
  ],
  // 签证对比相关
  "visa-compare": [
    { slug: "189-vs-190-vs-491-visa-comparison", title: "189 vs 190 vs 491", emoji: "⚖️" },
    { slug: "best-visa-australia-pr", title: "Which Visa Is Best?", emoji: "🥇" },
    { slug: "state-nomination-australia", title: "State Nomination Guide", emoji: "🗺️" },
  ],
  // 189签证相关
  "visa-189": [
    { slug: "189-visa-requirements-australia", title: "189 Visa Requirements", emoji: "🇦🇺" },
    { slug: "189-vs-190-visa-difference", title: "189 vs 190 Differences", emoji: "📋" },
    { slug: "pr-points-australia-explained", title: "PR Points Explained", emoji: "📊" },
  ],
  // 190签证相关
  "visa-190": [
    { slug: "190-visa-requirements-australia", title: "190 Visa Requirements", emoji: "🏛️" },
    { slug: "state-nomination-australia", title: "State Nomination", emoji: "🗺️" },
    { slug: "189-vs-190-visa-difference", title: "189 vs 190", emoji: "⚖️" },
  ],
  // 491签证相关
  "visa-491": [
    { slug: "491-visa-requirements-australia", title: "491 Visa Requirements", emoji: "🌄" },
    { slug: "491-to-191-pr-pathway", title: "491 to 191 Pathway", emoji: "🛤️" },
    { slug: "190-vs-491-visa-difference", title: "190 vs 491", emoji: "⚖️" },
  ],
  // 职业相关
  "occupation": [
    { slug: "australia-pr-occupation-list", title: "Skilled Occupation List", emoji: "📋" },
    { slug: "australia-pr-skills-assessment", title: "Skills Assessment", emoji: "✅" },
    { slug: "australia-pr-it-professionals", title: "IT Professionals", emoji: "💻" },
    { slug: "australia-pr-nurses", title: "Nurses & Healthcare", emoji: "🏥" },
    { slug: "australia-pr-engineers", title: "Engineers", emoji: "🔧" },
  ],
  // 申请流程相关
  "process": [
    { slug: "australia-pr-eoi-guide", title: "EOI Submission Guide", emoji: "📤" },
    { slug: "australia-pr-skills-assessment", title: "Skills Assessment", emoji: "✅" },
    { slug: "australia-pr-processing-time", title: "Processing Times", emoji: "⏱️" },
    { slug: "australia-pr-timeline", title: "PR Timeline", emoji: "📅" },
  ],
  // 年龄相关
  "age": [
    { slug: "australia-pr-age-limit", title: "Age Limit & Points", emoji: "🎂" },
    { slug: "australia-pr-over-40", title: "PR Over 40", emoji: "👔" },
    { slug: "australia-pr-under-30", title: "PR Under 30", emoji: "🎓" },
    { slug: "australia-pr-points-age", title: "Age Points Detail", emoji: "📈" },
  ],
  // 常见问题
  "faq": [
    { slug: "australia-pr-common-mistakes", title: "Common Mistakes", emoji: "⚠️" },
    { slug: "australia-pr-after-rejection", title: "After Rejection", emoji: "🔄" },
    { slug: "australia-pr-checklist", title: "PR Checklist", emoji: "☑️" },
    { slug: "australia-pr-cost-fees", title: "Cost & Fees", emoji: "💰" },
  ],
};

// 文章到主题的映射
const TOPIC_MAP: Record<string, string[]> = {
  // 分数相关文章
  "pr-points-australia-explained": ["pr-points", "visa-compare"],
  "australia-pr-points-system-explained": ["pr-points", "visa-compare"],
  "how-pr-points-calculated-australia": ["pr-points"],
  "65-points-enough-australia-pr": ["pr-points", "visa-compare"],
  "what-is-good-pr-score-australia": ["pr-points", "visa-compare"],
  "pr-points-calculator-guide": ["pr-points"],
  
  // 英语相关
  "pte-vs-ielts-australia-pr": ["english", "pr-points"],
  "australia-pr-points-english": ["english", "pr-points"],
  "australia-pr-points-ccl": ["english", "pr-points"],
  
  // 签证对比
  "189-vs-190-vs-491-visa-comparison": ["visa-compare"],
  "best-visa-australia-pr": ["visa-compare"],
  "189-vs-190-visa-difference": ["visa-compare", "visa-189", "visa-190"],
  "190-vs-491-visa-difference": ["visa-compare", "visa-190", "visa-491"],
  
  // 189相关
  "189-visa-requirements-australia": ["visa-189", "visa-compare"],
  
  // 190相关
  "190-visa-requirements-australia": ["visa-190", "visa-compare"],
  "state-nomination-australia": ["visa-190", "visa-491"],
  
  // 491相关
  "491-visa-requirements-australia": ["visa-491", "visa-compare"],
  "491-to-191-pr-pathway": ["visa-491"],
  
  // 职业相关
  "australia-pr-occupation-list": ["occupation"],
  "australia-pr-skills-assessment": ["occupation", "process"],
  "australia-pr-it-professionals": ["occupation"],
  "australia-pr-nurses": ["occupation"],
  "australia-pr-engineers": ["occupation"],
  "australia-pr-accountants": ["occupation"],
  "australia-pr-trades": ["occupation"],
  
  // 流程相关
  "australia-pr-eoi-guide": ["process"],
  "australia-pr-processing-time": ["process"],
  "australia-pr-timeline": ["process"],
  "australia-pr-document-checklist": ["process"],
  "australia-pr-checklist": ["process"],
  
  // 年龄相关
  "australia-pr-age-limit": ["age"],
  "australia-pr-over-40": ["age"],
  "australia-pr-under-30": ["age"],
  "australia-pr-points-age": ["age", "pr-points"],
  
  // FAQ
  "australia-pr-common-mistakes": ["faq", "process"],
  "australia-pr-after-rejection": ["faq"],
  "australia-pr-health-requirements": ["faq", "process"],
  "australia-pr-character-requirements": ["faq", "process"],
  "australia-pr-changes-2026": ["faq"],
  
  // 其他
  "australia-pr-cost-fees": ["faq", "process"],
  "australia-pr-invitation-rounds": ["process", "pr-points"],
  "australia-skilled-migration-points-test": ["pr-points"],
  "partner-visa-vs-skilled-visa": ["visa-compare", "faq"],
};

// 为每篇文章生成推荐（包含calculator）
export function getRelatedArticles(currentSlug: string): ArticleLink[] {
  const topics = TOPIC_MAP[currentSlug] || ["pr-points"];
  const related = new Set<string>();
  const result: ArticleLink[] = [];
  
  // 从主题中收集相关文章
  for (const topic of topics) {
    const articles = RELATED_BY_TOPIC[topic] || [];
    for (const article of articles) {
      if (article.slug !== currentSlug && !related.has(article.slug)) {
        related.add(article.slug);
        result.push(article);
      }
    }
  }
  
  // 确保包含 PR Points Calculator（放在最前）
  const withCalculator = [
    { slug: "/tools/pr-points-calculator", title: "PR Points Calculator", emoji: "🧮" },
    ...result,
  ];
  
  // 去重并限制数量（3-5篇）
  return withCalculator.slice(0, 5);
}

interface RelatedArticlesProps {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const articles = getRelatedArticles(currentSlug);
  
  if (articles.length === 0) return null;
  
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.slug}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl group-hover:bg-blue-200 transition-colors">
              {article.emoji}
            </span>
            <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
              {article.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
