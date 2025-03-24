import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Text & Speech Translator",
  description:
    "AI Text & Speech Translator is a cutting-edge platform designed to effortlessly convert text and speech in multiple languages with high accuracy. Utilizing advanced artificial intelligence, our tool provides real-time translations for businesses, travelers, and individuals looking for quick and reliable language solutions. Whether you're translating text or speech, our AI-powered system ensures seamless communication across global languages, enhancing productivity and fostering international connections.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
