import React from "react";
import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar/Navbar";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Text & Speech Translator",
  description:
    "AI Text & Speech Translator is a cutting-edge platform designed to effortlessly convert text and speech in multiple languages with high accuracy. Utilizing advanced artificial intelligence, our tool provides real-time translations for businesses, travelers, and individuals looking for quick and reliable language solutions. Whether you're translating text or speech, our AI-powered system ensures seamless communication across global languages, enhancing productivity and fostering international connections.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${googleSans.className} ${googleSansCode.variable} antialiased dark`}
      >
        <ClerkProvider
          appearance={{
            theme: dark,
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
