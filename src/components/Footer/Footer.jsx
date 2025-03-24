"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import navMenu from "../Navbar/NavMenu";

const footerMenu = [
  { name: "Privacy Policy", slug: "/privacy-policy" },
  // { name: "Demo", slug: "/" },
  { name: "Terms of Service", slug: "/terms-of-service" },
  { name: "Contact Us", slug: "/contact" },
];

export default function Footer() {
  return (
    <section>
      <footer className="text-white py-8 bg-[#131316]/80 backdrop-blur-sm">
        <div className="h-16 max-w-7xl mx-auto flex items-center justify-center md:justify-between px-4 pb-8 sm:px-6 lg:px-8 border-b">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                className="pointer-events-none"
                src="/Images/AI-text-translator-white.svg"
                alt="AI Text & Speech Translator logo"
                width={160}
                height={54}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navMenu.map((link) => (
              <Link
                key={link.name}
                href={link.slug}
                className="text-base font-medium text-gray-400 hover:text-white border-b-2 border-transparent hover:border-b-2 hover:border-[#ff0080] transition-colors duration-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="my-8 max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navMenu.map((link) => (
                <li key={link.name}>
                  <Link href={link.slug}>
                    <span className="text-base font-medium text-gray-400 hover:text-white border-b-2 border-transparent hover:border-b-2 hover:border-[#ff0080] transition-colors duration-100">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="/" className="hover:text-gray-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="/" className="hover:text-gray-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="/" className="hover:text-gray-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="/" className="hover:text-gray-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Copyright & Legal Policies */}
          <div className="flex flex-col text-center md:text-end">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerMenu.map((footerMenu) => (
                <li key={footerMenu.name}>
                  <Link
                    href={footerMenu.slug}
                    className="text-base font-medium text-gray-400 hover:text-white"
                  >
                    <span className="border-b-2 border-transparent hover:border-b-2 hover:border-[#ff0080] transition-colors duration-100">
                      {footerMenu.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-accent/80 backdrop-blur-sm] p-6 text-center text-muted-foreground text-base">
        © {new Date().getFullYear()}{" "}
        <a href="/" className="font-semibold">
          <span className="hover:text-white hover:border-b-2 hover:border-[#ff0080]">
            AI Text & Speech Translator.
          </span>
        </a>{" "}
        All rights reserved.
      </div>
    </section>
  );
}
