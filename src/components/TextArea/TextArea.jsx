"use client";

import React, { useRef, useEffect } from "react";

const TextArea = ({ value, onChange, placeHolderText, disabled }) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <main className="container flex flex-col my-2">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onInput={adjustHeight}
        rows="8"
        placeholder={placeHolderText}
        disabled={disabled}
        className="w-full h-auto focus:outline-none focus:ring-2 focus:ring-[#ff0080] focus:border-[#ff0080] bg-background text-foreground border-2 border-input rounded-md p-4 caret-white resize-none overflow-hidden"
      />
    </main>
  );
};

export default TextArea;
