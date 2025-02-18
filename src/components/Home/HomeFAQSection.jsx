"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this translation 100% accurate?",
    answer:
      "While our AI-powered translator provides high accuracy, no translation system is perfect. Context and nuances may affect translation quality.",
  },
  {
    question: "Does it support offline translation?",
    answer:
      "Currently, our translation service requires an internet connection to process and deliver translations accurately.",
  },
  {
    question: "What languages are available?",
    answer:
      "We support a wide range of languages, including Hindi, English, Spanish, French, Punjabi, and many more.",
  },
  {
    question: "How is my data handled?",
    answer:
      "We prioritize user privacy. Your translation data is not stored or shared with third parties. All processing happens securely in real-time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-white rounded-xl">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="border-b-2 border-[#ff0080]">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-accent rounded-lg shadow-lg p-4 text-left animateRight"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-white text-start"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="my-2 md:pr-4 text-gray-300 text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
