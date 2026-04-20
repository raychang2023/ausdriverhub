import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Link from "next/link";
import { articles } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Guides | Australian Visa Resources | AussieVisa Toolkit",
  description: "Comprehensive guides and articles about Australian skilled migration, including skill assessments, points systems, and state nominations.",
};

export default function ArticlesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Articles & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical guides and resources to help you understand and navigate the Australian skilled migration process.
          </p>
        </div>

        <DisclaimerBanner />

        {/* Article List */}
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <span className="inline-flex items-center self-start px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  {article.category}
                </span>
                <time className="text-sm text-gray-400">{article.date}</time>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link href={`/articles/${article.slug}`} className="hover:text-blue-700 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center text-blue-700 font-medium hover:underline"
              >
                Read Article
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* More Coming */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-xl">
          <p className="text-gray-600">
            More articles coming soon. Have a topic suggestion?{" "}
            <Link href="/contact" className="text-blue-700 font-medium hover:underline">
              Let us know
            </Link>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Need Personalized Guidance?</h3>
          <p className="text-sm text-gray-600 mb-4">
            While these guides are helpful, every situation is unique. Consider consulting a registered migration agent for advice tailored to your circumstances.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
}
