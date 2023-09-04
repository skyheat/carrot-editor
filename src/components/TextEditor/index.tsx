import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";
import { useTabIndentation } from "@/hooks/useTabIndentation";
import { useResize } from "@/hooks/useResize";
import WidthControlDivider from "../WidthControlDivider";
import Toolbar from "../Toolbar";
import MiniToolbar from "../MiniToolbar";

const TextEditor = () => {
  const [editorWidth, setEditorWidth] = useState("50%");
  const [renderPreview, setRenderPreview] = useState(true);
  const { editorRef, resizingRef } = useResize(
    setEditorWidth,
    setRenderPreview
  );
  const {
    text: markdownText,
    setText: setMarkdownText,
    handleKeyDown,
  } = useTabIndentation();

  return (
    <>
      <div
        ref={editorRef}
        className="relative overflow-hidden"
        style={{ width: editorWidth, minWidth: editorWidth }}
      >
        <textarea
          className="flex relative outline-none text-black border-0 pl-2 pt-6 h-full w-full resize-none mb-10"
          placeholder="Write your markdown here..."
          onChange={(e) => setMarkdownText(e.target.value)}
          value={markdownText}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute top-0 right-1 transform flex flex-grow">
          <MiniToolbar />
        </div>
      </div>
      <WidthControlDivider
        onReset={() => setEditorWidth("50%")}
        resizingRef={resizingRef}
      />
      {renderPreview && (
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
      )}
    </>
  );
};

export default TextEditor;
