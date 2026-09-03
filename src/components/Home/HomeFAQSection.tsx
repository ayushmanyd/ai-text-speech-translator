"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from "./animationVariants";

const faqs: FAQItem[] = [
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

export default function FAQSection(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-16 bg-black text-white rounded-xl"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          <span className="border-b-2 border-[#ff0080]">
            Frequently Asked Questions
          </span>
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-accent rounded-lg shadow-lg p-4 text-left overflow-hidden"
              variants={fadeInUp}
            >
              <button
                type="button"
                className="w-full flex justify-between items-center text-lg font-semibold text-white text-start"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <motion.span
                  className="flex-shrink-0 ml-2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                  >
                    <p className="pt-2 md:pr-4 text-gray-300 text-base overflow-hidden">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
