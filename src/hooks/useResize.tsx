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
        const parentWidth = editorRef.current.parentElement?.offsetWidth || 0;
        let newWidth =
          event.clientX - editorRef.current.getBoundingClientRect().left;

        const minWidth = parentWidth * 0;
        const maxWidth = parentWidth * 1;

        if (newWidth < minWidth) {
          newWidth = minWidth;
        } else if (newWidth > maxWidth) {
          newWidth = maxWidth;
        }

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
