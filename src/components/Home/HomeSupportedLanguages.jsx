"use client";

import { useState } from "react";
import languages from "../Dropdown/Languages";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SupportedLanguages() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleLanguages = isExpanded ? languages : languages.slice(0, 10);

  const handleLanguageClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-4 py-16 bg-black text-white text-center rounded-xl transition-all">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="border-b-2 border-[#ff0080]">
            Supported Languages
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 select-none">
          {visibleLanguages.map((lang) => (
            <div
              key={lang.langCode}
              onClick={handleLanguageClick}
              className="p-4 bg-accent hover:bg-black border rounded-lg shadow-lg flex items-center justify-center text-sm cursor-pointer"
            >
              {lang.langName}
            </div>
          ))}
        </div>

        {languages.length > 10 && (
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 cursor-pointer text-base text-blue-500 flex items-center justify-center"
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
          </div>
        )}
      </div>
    </section>
  );
}
