"use client";

import React, { useState } from "react";
import languages from "../Dropdown/Languages";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Language } from "@/types";
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from "./animationVariants";

export default function SupportedLanguages(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const visibleLanguages: Language[] = isExpanded ? languages : languages.slice(0, 10);

  const handleLanguageClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      className="my-4 py-16 bg-black text-white text-center rounded-xl"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          <span className="border-b-2 border-[#ff0080]">
            Supported Languages
          </span>
        </motion.h2>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 select-none"
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <AnimatePresence initial={false}>
            {visibleLanguages.map((lang) => (
              <motion.div
                key={lang.langCode}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                onClick={handleLanguageClick}
                className="p-4 bg-accent hover:bg-black border rounded-lg shadow-lg flex items-center justify-center text-sm cursor-pointer transition-colors duration-300"
              >
                {lang.langName}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {languages.length > 10 && (
          <motion.div
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-4 cursor-pointer text-base text-blue-500 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown className="mr-2" />
                <span>Show more</span>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
