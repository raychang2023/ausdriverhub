import { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "skill-assessment",
    title: "Complete Guide to Skills Assessment",
    excerpt: "Learn about Australian skills assessing authorities, processes, timeframes, and fees to prepare for your visa application.",
    date: "2025-01-15",
    category: "Guide",
  },
  {
    slug: "points-system-explained",
    title: "EOI Points System Explained",
    excerpt: "A comprehensive breakdown of the Australian skilled migration points system, helping you understand each scoring criterion.",
    date: "2025-01-10",
    category: "Tool",
  },
  {
    slug: "state-nominations",
    title: "State Nomination Policies Compared",
    excerpt: "Compare nomination requirements, occupation lists, and application conditions across states and territories.",
    date: "2025-01-05",
    category: "Guide",
  },
];

export const visaFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  "189": [
    { question: "Does the 189 visa require state sponsorship?", answer: "No. The 189 visa is an independent skilled migration visa that does not require state sponsorship or family sponsorship." },
    { question: "What is the typical EOI score for the 189 visa?", answer: "EOI scores are updated regularly. Please refer to the Australian Department of Home Affairs website for the latest data. Content on this site is for reference only." },
    { question: "How long does the 189 visa processing take?", answer: "Processing times vary depending on individual circumstances, typically ranging from several months to over a year. Please rely on official information." },
    { question: "Is the 189 visa permanent residency?", answer: "Yes, the 189 visa is an Australian Permanent Resident (PR) visa." },
    { question: "Can I live anywhere in Australia with a 189 visa?", answer: "Yes, 189 visa holders can live and work anywhere in Australia." },
  ],
  "190": [
    { question: "What is the difference between the 190 and 189 visas?", answer: "The main difference is that 190 requires state government sponsorship, which provides an additional 5 points, but typically requires living in the sponsoring state for a certain period." },
    { question: "How do I apply for state nomination?", answer: "Each state has its own nomination application process and requirements, which must be submitted separately to the state government." },
    { question: "How long must I commit to living in the state?", answer: "Requirements vary by state, typically requiring 2 years of residence in the sponsoring state. Please check each state's official website for specific requirements." },
    { question: "Is the 190 visa permanent residency?", answer: "Yes, the 190 visa is an Australian Permanent Resident (PR) visa." },
    { question: "Must I apply immediately after receiving state nomination?", answer: "Yes, state nominations usually have a validity period. Please submit your visa application within the specified timeframe." },
  ],
  "491": [
    { question: "Is the 491 visa permanent residency?", answer: "The 491 is a temporary visa (valid for 5 years). After meeting the conditions, you can apply for the Subclass 191 visa to obtain permanent residency." },
    { question: "What are the requirements to transition from 491 to PR?", answer: "Typically requires living and working in a regional area for 3 years and meeting minimum income requirements. Please refer to official policies for specifics." },
    { question: "Which areas are considered regional?", answer: "The definition of regional areas is broad. Most areas outside major cities like Sydney, Melbourne, and Brisbane are considered regional." },
    { question: "Does the 491 visa have income requirements?", answer: "When transitioning to PR, you must meet minimum taxable income requirements. Please refer to the latest official policy for specific amounts." },
    { question: "Can I apply for 491 through family sponsorship?", answer: "Yes, if your family member lives in a designated regional area and meets sponsorship criteria." },
  ],
};
