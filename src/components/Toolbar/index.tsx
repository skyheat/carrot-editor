import React from "react";
import Download from "../Download";

type Props = {
  className?: string;
  markdownText: string;
};

const Toolbar = ({ markdownText, className }: Props) => {
  return (
    <div className="border-2 rounded-lg p-1 bg-gray-300">
      <Download markdownText={markdownText} />
    </div>
  );
};

export default Toolbar;
