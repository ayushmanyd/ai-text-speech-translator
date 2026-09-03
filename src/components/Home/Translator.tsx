"use client";

import React, { useEffect, useState, useCallback } from "react";
import TranslateButton from "@/components/Button/TranslateButton";
import Dropdown from "@/components/Dropdown/Dropdown";
import TextArea from "@/components/TextArea/TextArea";
import languages from "@/components/Dropdown/Languages";
import AILangRecognition from "@/components/ui/AILangRecognition";
import VoiceRecorder from "@/components/Voice/VoiceRecorder";
import { CircleCheck } from "lucide-react";
import CopyButton from "@/components/Button/CopyButton";
import SaveButton from "@/components/Button/SaveButton";
import { motion } from "framer-motion";
import translate from "@/app/actions/gqTranslate";
import type { Language } from "@/types";
import { fadeInUp, staggerContainer, viewportOnce } from "./animationVariants";

const TranslateSection: React.FC = () => {
  const [languageTo, setLanguageTo] = useState<Language>(languages[0]);
  const [inputText, setInputText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isSpeechInput, setIsSpeechInput] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cachedData = localStorage.getItem("translations");
      if (!cachedData) {
        localStorage.setItem("translations", JSON.stringify({}));
      }
    }
  }, []);

  const handleTranslation = useCallback(async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setStatus("Translating");
    const cacheKey = `${inputText}_${languageTo.langCode}`;
    let cachedTranslations: Record<string, string> = {};

    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("translations");
        if (stored) {
          cachedTranslations = JSON.parse(stored);
        }
      } catch (e) {
        console.error("Error reading from localStorage:", e);
      }
    }

    if (cachedTranslations[cacheKey]) {
      setTranslatedText(cachedTranslations[cacheKey]);
      setStatus("Translated");
      if (isSaved) {
        setIsSaved(false);
      }
      return;
    }

    try {
      const result = await translate(inputText, languageTo.langCode);
      setTranslatedText(result);
      setStatus("Translated");
      if (isSaved) {
        setIsSaved(false);
      }

      if (
        result === "Couldn't load translations." ||
        result === "Please provide the text you want me to translate.\n"
      ) {
        return;
      }
      cachedTranslations[cacheKey] = result;
      if (typeof window !== "undefined") {
        localStorage.setItem("translations", JSON.stringify(cachedTranslations));
      }
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslatedText("Error in translation.");
    }
  }, [inputText, languageTo.langCode, isSaved]);

  useEffect(() => {
    if (isSpeechInput && inputText.trim()) {
      handleTranslation();
    }
  }, [inputText, isSpeechInput, handleTranslation]);

  const onSave = () => {
    setIsSaved(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsSpeechInput(false);
    setInputText(e.target.value);
  };

  const handleInputSet = (text: string) => {
    setIsSpeechInput(true);
    setInputText(text);
  };

  const handleResetInput = () => {
    setInputText("");
    setIsSpeechInput(false);
  };

  const handleLanguageToChange = (value: Language) => {
    setLanguageTo(value);
  };

  return (
    <motion.main
      className="mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <motion.div
        className="flex items-center justify-center"
        variants={fadeInUp}
      >
        <TranslateButton
          onClick={handleTranslation}
          className="h-20"
          text="Translate"
        />
      </motion.div>

      <motion.div
        className="sm:flex sm:flex-col gap-8 lg:flex lg:flex-row"
        variants={staggerContainer}
      >
        {/* Left Section */}
        <motion.div className="container flex flex-col mt-8" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <AILangRecognition />
          </motion.div>
          <motion.div
            className="mx-auto py-1 w-full h-auto text-foreground"
            variants={fadeInUp}
          >
            <VoiceRecorder
              handleSetText={handleInputSet}
              handleReset={handleResetInput}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <TextArea
              disabled={false}
              value={inputText}
              placeHolderText="Enter text here"
              onChange={handleInputChange}
            />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="container flex flex-col mt-8" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <Dropdown
              name="targetLanguage"
              value={languageTo}
              options={languages}
              onChange={handleLanguageToChange}
            />
          </motion.div>

          <motion.div
            className="mx-auto py-1 w-full h-auto flex items-center justify-end gap-2 text-foreground"
            variants={fadeInUp}
          >
            <div className="text-base flex items-center justify-center gap-1">
              {status}
              {status === "Translating" && (
                <img
                  src="/preloaderEllipsis.svg"
                  alt="Loading"
                  className="w-6 h-6"
                />
              )}
              {status === "Translated" && (
                <CircleCheck size={16} color="#34b233" />
              )}
            </div>
            <SaveButton
              onHandleSave={onSave}
              isSaved={isSaved}
              targetLanguage={languageTo.langCode}
              sourceText={inputText}
              translatedText={translatedText}
            />
            <CopyButton textToCopy={translatedText} />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <TextArea
              disabled={true}
              placeHolderText="Translation"
              value={translatedText}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default TranslateSection;
