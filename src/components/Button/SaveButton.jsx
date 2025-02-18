"use client";

import { Save } from "lucide-react";
import saveTranslations from "@/app/actions/saveTranslations";
import ToolTip from "../ui/ToolTip";
import { useState } from "react";

export default function SaveButton({
  targetLanguage,
  sourceText,
  translatedText,
  onHandleSave,
  isSaved,
}) {
  const buttonClass = isSaved ? "text-green-600 " : "";
  const [saveText, setSaveText] = useState("Save");
  // Check if either sourceText or translatedText is empty
  const isDisabled = !sourceText.trim() || !translatedText.trim() || isSaved;

  const handleSaveClick = async () => {
    if (isDisabled) return;

    // Prevent saving if already saved
    if (isSaved) return;

    // Perform save action
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
