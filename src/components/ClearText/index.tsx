import { X } from "lucide-react";
import React from "react";

type Props = { setMarkdownText: (text: string) => void };

const ClearText = ({ setMarkdownText }: Props) => {
  return (
    <button onClick={() => setMarkdownText("")}>
      <X size={24} strokeWidth={1.5} color={"black"} />
    </button>
  );
};

export default ClearText;
