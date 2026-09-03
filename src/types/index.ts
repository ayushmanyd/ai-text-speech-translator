import type React from "react";

export interface Language {
  langCode: string;
  langName: string;
}

export interface TranslationRecord {
  id?: number | string;
  userId: string;
  targetLanguage: string;
  sourceText: string;
  translatedText: string;
  createdAt?: string | Date;
}

export interface TranslationGroup {
  targetlanguage: string;
  translationcount?: number | string;
  sourcetexts: string[];
  translatedtexts: string[];
}

export interface NavItem {
  name: string;
  slug: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  description: string;
}

export interface StepItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface UseCaseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type TooltipPosition = "top" | "bottom" | "left" | "right";
