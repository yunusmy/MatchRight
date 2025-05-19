"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "How does MatchRight calculate the match score?",
    answer:
      "MatchRight uses AI to analyze your resume and compare it with the job description, focusing on keyword overlap, skill relevance, and experience alignment.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is encrypted and securely stored. We never share your information with third parties.",
  },
  {
    question: "Can I use MatchRight for multiple job applications?",
    answer:
      "Absolutely. You can match your resume with as many job descriptions as you want and track each individually.",
  },
  {
    question: "How accurate are the AI suggestions?",
    answer:
      "We use Google’s Gemini AI to provide contextual, role-specific suggestions with high accuracy, and we're constantly improving.",
  },
  {
    question: "Is MatchRight free to use?",
    answer:
      "Yes, core features are free. Premium features like advanced analytics and saved history may require a subscription.",
  },
  {
    question: "How do I implement the suggestions?",
    answer:
      "You can copy the suggestions into your resume editor or use our built-in editor to make updates directly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20" id="faq">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <Image
            src="/download.jpg"
            alt="People discussing resume strategies"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* Right - FAQ content */}
        <div>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about MatchRight.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 cursor-pointer hover:shadow transition"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
