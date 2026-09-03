import React from "react";
import { Languages } from "lucide-react";

interface TranslateButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={onClick}
        className="h-12 px-4 py-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none bg-transparent border-4 border-[#ff0080] text-white shadow hover:bg-[#ff0080] duration-300"
      >
        <Languages size={24} /> {text}
      </button>
    </div>
  );
};

export default TranslateButton;
