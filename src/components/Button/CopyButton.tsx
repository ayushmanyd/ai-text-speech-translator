import React, { useState } from "react";
import { Copy } from "lucide-react";
import ToolTip from "../ui/ToolTip";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copyText, setCopyText] = useState<string>("Copy");

  const handleOnClick = () => {
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopyText("Copied!");
          setTimeout(() => setCopyText("Copy"), 1500);
        })
        .catch((error) => console.error("Failed to copy text: ", error));
    }
  };

  return (
    <div>
      <ToolTip content={copyText} position="top">
        <button
          type="button"
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
