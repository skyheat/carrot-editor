import React from "react";

type Props = {
  markdownText: string;
};

const Download = ({ markdownText }: Props) => {
  function downloadMarkdown(content: BlobPart, filename = "download.md") {
    const blob = new Blob([content], { type: "text/markdown" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = filename;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  }
  return (
    <button onClick={() => downloadMarkdown(markdownText)}>
      <p>Download</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        //class="lucide lucide-file-down"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    </button>
  );
};

export default Download;