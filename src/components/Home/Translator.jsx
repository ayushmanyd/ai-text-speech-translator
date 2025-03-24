"use client";

import React, { useEffect, useState } from "react";
import TranslateButton from "@/components/Button/TranslateButton";
import Dropdown from "@/components/Dropdown/Dropdown";
import TextArea from "@/components/TextArea/TextArea";
import languages from "@/components/Dropdown/Languages";
import { translate } from "@/app/actions/translate";
import AILangRecognition from "@/components/ui/AILangRecognition";
import VoiceRecorder from "@/components/Voice/VoiceRecorder";
import { CircleCheck, Copy } from "lucide-react";
import CopyButton from "@/components/Button/CopyButton";
import SaveButton from "@/components/Button/SaveButton";
import { motion } from "framer-motion";

const TranslateSection = () => {
  const [languageTo, setLanguageTo] = useState(languages[0]);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isSpeechInput, setIsSpeechInput] = useState(false);
  const [status, setStatus] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const cachedData = localStorage.getItem("translations");
    if (!cachedData) {
      localStorage.setItem("translations", JSON.stringify({}));
    }
  }, []);

  useEffect(() => {
    if (isSpeechInput && inputText.trim()) {
      handleTranslation();
    }
  }, [inputText]);

  const onSave = () => {
    setIsSaved(true);
  };

  const handleInputChange = (e) => {
    setIsSpeechInput(false);
    setInputText(e.target.value);
  };

  const handleInputSet = (event) => {
    setIsSpeechInput(true);
    setInputText(event);
  };

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  };

  const handleTranslation = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setStatus("Translating");
    const cacheKey = `${inputText}_${languageTo.langCode}`;
    const cachedTranslations =
      JSON.parse(localStorage.getItem("translations")) || {};

    if (cachedTranslations[cacheKey]) {
      // console.log("Fetching from cache:", cachedTranslations[cacheKey]);
      setTranslatedText(cachedTranslations[cacheKey]);
      setStatus("Translated");
      if (isSaved) {
        setIsSaved(false);
      }
      return;
    }

    // console.log("Calling API for:", inputText, languageTo.langCode);

    try {
      const result = await translate(inputText, languageTo.langCode);
      // console.log("Translation result:", result);
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
      localStorage.setItem("translations", JSON.stringify(cachedTranslations));
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslatedText("Error in translation.");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.main
      className="mt-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
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
            <VoiceRecorder handleSetText={handleInputSet} />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <TextArea
              disabled={false}
              value={inputText}
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
