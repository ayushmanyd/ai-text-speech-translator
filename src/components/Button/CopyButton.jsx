import React, { useState } from "react";
import { Copy } from "lucide-react";
import ToolTip from "../ui/ToolTip";

const CopyButton = ({ textToCopy }) => {
  const [copyText, setCopyText] = useState("Copy");

  const handleOnClick = () => {
    if (textToCopy) {
      // Copy text to clipboard
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopyText("Copied!");
          setTimeout(() => setCopyText("Copy"), 1500); // Reset text after 1.5 seconds
        })
        .catch((error) => console.error("Failed to copy text: ", error));
    }
  };

  return (
    <div>
      <ToolTip content={copyText} position="top">
        <button
          onClick={handleOnClick}
          className="p-1 bg-transparent text-white rounded-sm border-2 border-muted hover:border-[#ff0080]"
        >
          <Copy size={16} />
        </button>
      </ToolTip>
    </div>
  );
};

export default CopyButton;
