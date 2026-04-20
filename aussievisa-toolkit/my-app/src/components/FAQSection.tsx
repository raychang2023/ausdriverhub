import { FAQ } from "@/data/types";

export default function FAQSection({ 
  title = "Frequently Asked Questions", 
  faqs 
}: { 
  title?: string;
  faqs: FAQ[];
}) {
  return (
    <section className="mt-10 pt-8 border-t border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-gray-50 rounded-lg [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition-colors hover:text-blue-700">
              <span className="font-medium">{faq.question}</span>
              <span className="text-gray-500 transition group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
