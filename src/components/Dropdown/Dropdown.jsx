"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Check, ChevronDown, Globe } from "lucide-react";

const Dropdown = ({ name, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language) => {
    onChange(language);
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredLanguages = options.filter((lang) =>
    lang.langName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative inline-block w-full xl:w-3/5" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-base bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
        >
          <span className="flex items-center">
            <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
            {value.langName}
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>

        {isOpen && (
          <div className="absolute z-20 w-full mt-1 bg-popover text-popover-foreground rounded-md shadow-md">
            <div className="p-1 border border-border rounded-md">
              <div className="flex items-center px-3 py-2 border-b border-border">
                <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                <input
                  type="text"
                  className="w-full bg-transparent text-base placeholder:text-muted-foreground focus:outline-none"
                  placeholder="Search language..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ul className="py-1 overflow-auto max-h-60" role="listbox">
                {filteredLanguages.length === 0 ? (
                  <li className="px-2 py-1.5 text-base text-muted-foreground">
                    No language found.
                  </li>
                ) : (
                  filteredLanguages.map((language) => (
                    <li
                      key={language.langCode}
                      className="flex items-center px-2 py-1.5 text-base cursor-pointer hover:bg-accent hover:text-accent-foreground"
                      onClick={() => handleLanguageChange(language)}
                    >
                      <span className="flex items-center w-full">
                        <span className="w-6 flex items-center justify-center">
                          {value.langCode === language.langCode && (
                            <Check className="h-4 w-4 text-foreground" />
                          )}
                        </span>
                        <span className="ml-1">{language.langName}</span>
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="my-4 text-base">
          <span className="text-muted-foreground">Selected language: </span>
          <strong>{value.langName}</strong>
        </div>
      </div>
    </main>
  );
};

export default Dropdown;
