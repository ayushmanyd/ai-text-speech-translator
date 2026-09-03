"use client";

import React, { useState } from "react";
import { Save } from "lucide-react";
import saveTranslations from "@/app/actions/saveTranslations";
import ToolTip from "../ui/ToolTip";

interface SaveButtonProps {
  targetLanguage: string;
  sourceText: string;
  translatedText: string;
  onHandleSave: () => void;
  isSaved: boolean;
}

export default function SaveButton({
  targetLanguage,
  sourceText,
  translatedText,
  onHandleSave,
  isSaved,
}: SaveButtonProps) {
  const buttonClass = isSaved ? "text-green-600 " : "";
  const [saveText, setSaveText] = useState<string>("Save");
  const isDisabled = !sourceText.trim() || !translatedText.trim() || isSaved;

  const handleSaveClick = async () => {
    if (isDisabled) return;
    if (isSaved) return;

    await saveTranslations(targetLanguage, sourceText, translatedText);
    setSaveText("Saved");
    onHandleSave();
  };

  return (
    <main>
      <ToolTip content={saveText} position="top">
        <button
          type="button"
          disabled={isDisabled}
          onClick={handleSaveClick}
          className="p-1 bg-transparent text-white rounded-sm border-2 border-muted hover:border-[#ff0080]"
        >
          <Save className={buttonClass} size={16} strokeWidth={3} />
        </button>
      </ToolTip>
    </main>
  );
}
