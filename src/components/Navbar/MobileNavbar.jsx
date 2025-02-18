"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Search, Github, Languages } from "lucide-react";
import Image from "next/image";
import NavMenu from "./NavMenu";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <button className="md:hidden" onClick={toggleMenu}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleMenu}
        >
          <div
            className="absolute right-0 top-0 h-screen w-screen bg-black shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col h-full">
              <div className="h-16 flex items-center justify-between px-4 backdrop-blur-sm border-b border-slate-600 bg-[#131316]/80">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  <Image
                    className=""
                    src="/Images/AI-text-translator-white.svg"
                    alt="AI Text & Speech Translator logo"
                    width={160}
                    height={54}
                    priority
                  />
                </Link>
                <button onClick={toggleMenu} className="p-1">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="flex-grow overflow-y-auto rounded-2xl">
                <div className="p-5">
                  {NavMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.slug}
                      className="flex items-center justify-between py-2 px-2 text-lg font-medium"
                      onClick={toggleMenu}
                    >
                      {item.name}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                  <div className="mx-2 my-5 p-4 border-2 border-[#ff0080] rounded-xl">
                    <Link
                      href="translations"
                      onClick={toggleMenu}
                      className="text-xl font-medium text-white flex items-center justify-center gap-2"
                    >
                      Translations
                      <Languages size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
