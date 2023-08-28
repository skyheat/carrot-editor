import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";
import { useTabIndentation } from "@/hooks/useTabIndentation";
import { useResize } from "@/hooks/useResize";
import WidthControlDivider from "../WidthControlDivider";
import Toolbar from "../Toolbar";

const TextEditor = () => {
  const [editorWidth, setEditorWidth] = useState("50%");
  const { editorRef, resizingRef } = useResize(setEditorWidth);
  const {
    text: markdownText,
    setText: setMarkdownText,
    handleKeyDown,
  } = useTabIndentation();

  return (
    <>
      <div
        ref={editorRef}
        className="relative"
        style={{ width: editorWidth, minWidth: editorWidth }}
      >
        <textarea
          className="flex relative outline-none text-black border-0 pl-2 h-full w-full resize-none mb-10"
          placeholder="Write your markdown here..."
          onChange={(e) => setMarkdownText(e.target.value)}
          value={markdownText}
          onKeyDown={handleKeyDown}
        />
        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-1/2">
          <Toolbar
            markdownText={markdownText}
            setMarkdownText={setMarkdownText}
          />
        </div> */}
      </div>
      <WidthControlDivider
        onReset={() => setEditorWidth("50%")}
        resizingRef={resizingRef}
      />
      <div
        className="markdown-body overflow-y-auto pl-2"
        style={{ width: `calc(100% - ${editorWidth})` }}
      >
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
    </>
  );
};

export default TextEditor;
