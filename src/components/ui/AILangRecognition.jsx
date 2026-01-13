import React from "react";
import { CircleCheck, ScanText, ToggleRight } from "lucide-react";
import ToolTip from "./ToolTip";

const AILangRecognition = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative inline-block w-full xl:w-3/5">
        <button className="flex items-center justify-between w-full px-3 py-2 text-base bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1">
          <span className="flex items-center">
            <ScanText className="w-4 h-4 mr-2 text-muted-foreground" />
            AI-Powered Language Detection
          </span>
          <ToolTip content="ON: AI Detection" position="bottom">
            <ToggleRight color="#24a0ed" />
          </ToolTip>
        </button>
      </div>
      <div className="my-4 text-base flex gap-1">
        <span className="text-muted-foreground">Language Recognition:</span>
        <CircleCheck color="#34b233" />
      </div>
    </main>
  );
};

export default AILangRecognition;
