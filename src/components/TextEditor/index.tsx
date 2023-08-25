import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const TextEditor = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [editorWidth, setEditorWidth] = useState("50%"); // Default width: 50%

  const resizingRef = useRef(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (resizingRef.current && editorRef.current) {
        const newWidth =
          event.clientX - editorRef.current.getBoundingClientRect().left;
        setEditorWidth(`${newWidth}px`);
      }
    };

    const handleMouseUp = () => {
      resizingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex w-screen">
      <div ref={editorRef} className="relative" style={{ width: editorWidth }}>
        <textarea
          className=" flex relative outline-none text-black border-0 pl-2 h-full w-full resize-none"
          placeholder="Write your markdown here..."
          onChange={(e) => setMarkdownText(e.target.value)}
        />
      </div>
      <div
        onMouseDown={() => (resizingRef.current = true)}
        className="flex items-center justify-center bg-gray-300 cursor-ew-resize w-2 h-[desiredHeightHere]"
      >
        <button className="z-0" onClick={() => setEditorWidth("50%")}>
          reset
        </button>
      </div>
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
