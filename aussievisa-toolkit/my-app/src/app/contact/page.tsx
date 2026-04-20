import Layout from "@/components/Layout";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AussieVisa Toolkit",
  description: "Get in touch with AussieVisa Toolkit. Send questions, feedback, or topic suggestions.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We would love to hear from you. Please note that we cannot provide immigration advice.
          </p>
        </div>

        <DisclaimerBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                >
                  <option value="">Select a topic</option>
                  <option value="question">General Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="suggestion">Content Suggestion</option>
                  <option value="bug">Report an Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900 resize-none"
                />
              </div>
              <button
                type="button"
                className="w-full py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">
              This form is for website feedback only. We do not provide immigration advice.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@aussievisa.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-sm text-gray-600">We aim to respond within 2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Need Professional Advice?</h3>
              <p className="text-sm text-gray-700 mb-4">
                For professional immigration advice tailored to your situation, please consult a registered migration agent.
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.mara.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Search the MARA Register →
                  </a>
                </li>
                <li>
                  <a
                    href="https://immi.homeaffairs.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Department of Home Affairs →
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Frequently Asked</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• &quot;Can you help me with my visa application?&quot; — We provide information but not personal advice</li>
                <li>• &quot;Why is my points score different from yours?&quot; — Our calculator is for estimation only</li>
                <li>• &quot;Can you write articles about specific topics?&quot; — Suggestions welcome, send us a message!</li>
              </ul>
            </div>

            {/* Quick Nav */}
            <div className="flex flex-col gap-2">
              <Link href="/visas" className="text-sm text-blue-700 hover:underline">
                ← Back to Visa Types
              </Link>
              <Link href="/disclaimer" className="text-sm text-blue-700 hover:underline">
                ← Read our Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
