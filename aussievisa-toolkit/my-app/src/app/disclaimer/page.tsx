import Layout from "@/components/Layout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | AussieVisa Toolkit",
  description: "Legal disclaimer and terms of use for AussieVisa Toolkit website.",
};

export default function DisclaimerPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Disclaimer & Terms of Use</h1>

        <div className="prose prose-blue max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <span>⚠️</span> Important Notice
            </h2>
            <p className="text-amber-800">
              Please read this disclaimer carefully before using this website. By accessing and using this website, you acknowledge and agree to the terms outlined below.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Not Immigration Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content provided on this website is for <strong>general informational purposes only</strong> and does not constitute legal, financial, or professional immigration advice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              AussieVisa Toolkit is <strong>not</strong> a registered migration agent and is not affiliated with the Australian government. We do not provide immigration advice and are not qualified to do so.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For personalized immigration advice, you should consult a registered migration agent or the Department of Home Affairs directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Accuracy of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we make every effort to ensure the information on this website is accurate and up-to-date, Australian immigration policies and visa requirements change frequently. The information provided may become outdated or incorrect without notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Always verify</strong> information with official sources, including the{" "}
              <a
                href="https://immi.homeaffairs.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Department of Home Affairs website
              </a>{" "}
              or a registered migration agent before making any decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Points Calculator</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our PR Points Calculator is provided as an estimation tool only. The calculated points are not official and should not be relied upon for making immigration decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The actual points you receive may differ based on how the Department of Home Affairs assesses your specific circumstances. Policy changes, interpretation of criteria, and individual assessment can all affect your final score.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Guarantee of Outcomes</h2>
            <p className="text-gray-700 leading-relaxed">
              Using the information or tools on this website does not guarantee any outcome related to visa applications, points calculations, or immigration success. Your eligibility and success depend on many factors beyond our control, including policy changes and individual circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to external websites, including official government resources. We do not control or endorse the content of these external websites and are not responsible for their accuracy or availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, AussieVisa Toolkit and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information contained herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this disclaimer or the content on this website, please{" "}
              <Link href="/contact" className="text-blue-700 underline">
                contact us
              </Link>.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Last updated: April 2025
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://immi.homeaffairs.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-gray-900">Department of Home Affairs</p>
            <p className="text-sm text-gray-500 mt-1">Official Australian immigration website →</p>
          </a>
          <a
            href="https://www.mara.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-gray-900">MARA Register</p>
            <p className="text-sm text-gray-500 mt-1">Find registered migration agents →</p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
