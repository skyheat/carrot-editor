import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import { useTabIndentation } from "@/hooks/useTabIndentation";
import { useResize } from "@/hooks/useResize";
import WidthControlDivider from "../WidthControlDivider";

const TextEditor = () => {
  const [editorWidth, setEditorWidth] = useState("50%");
  const { editorRef, resizingRef } = useResize(setEditorWidth);
  const {
    text: markdownText,
    setText: setMarkdownText,
    handleKeyDown,
  } = useTabIndentation();

  return (
    <div className="flex w-screen">
      <div ref={editorRef} className="relative" style={{ width: editorWidth }}>
        <textarea
          className=" flex relative outline-none text-black border-0 pl-2 h-full w-full resize-none dark:bg-blackpearl"
          placeholder="Write your markdown here..."
          onChange={(e) => setMarkdownText(e.target.value)}
          value={markdownText}
          onKeyDown={handleKeyDown}
        />
      </div>
      <WidthControlDivider
        onReset={() => setEditorWidth("50%")}
        resizingRef={resizingRef}
      />
      <div className="markdown-body overflow-y-auto pl-2 grow">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ol: ({ node, ...props }) => (
              <ol style={{ listStyle: "revert" }} {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul style={{ listStyle: "revert" }} {...props} />
            ),
          }}
        >
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default TextEditor;
