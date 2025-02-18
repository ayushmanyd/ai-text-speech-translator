import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="h-12 p-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#ff0080] text-white shadow hover:bg-[#ff0080]/80">
        {text}
      </button>
    </div>
  );
};

export default Button;
