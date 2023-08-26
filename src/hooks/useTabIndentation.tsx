import { useState } from "react";

export const useTabIndentation = (initialValue = "") => {
  const [text, setText] = useState(initialValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const spaces = "    ";
      const newValue = text.substring(0, start) + spaces + text.substring(end);

      setText(newValue);

      e.currentTarget.selectionStart = e.currentTarget.selectionEnd =
        start + spaces.length;
    }
  };

  return { text, setText, handleKeyDown };
};
