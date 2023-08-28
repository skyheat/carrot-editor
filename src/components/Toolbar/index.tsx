import React from "react";
import Download from "../Download";
import ClearText from "../ClearText";

type Props = {
  className?: string;
  markdownText: string;
  setMarkdownText: (text: string) => void;
};

const Toolbar = ({ markdownText, className, setMarkdownText }: Props) => {
  return (
    <div className="border-2 rounded-lg p-1 bg-gray-300 flex justify-evenly">
      <Download markdownText={markdownText} />
      <ClearText setMarkdownText={setMarkdownText} />
    </div>
  );
};

export default Toolbar;
