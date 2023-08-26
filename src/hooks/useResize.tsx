import { useEffect, useRef } from "react";

export const useResize = (
  setEditorWidth: React.Dispatch<React.SetStateAction<string>>
) => {
  const resizingRef = useRef(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
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
  }, [setEditorWidth]);

  return { editorRef, resizingRef };
};
