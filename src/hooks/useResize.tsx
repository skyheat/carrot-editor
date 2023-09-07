import React, { useEffect, useRef } from "react";

export const useResize = (
  setEditorWidth: React.Dispatch<React.SetStateAction<string>>,
  setRenderPreview: React.Dispatch<React.SetStateAction<boolean>>
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

        const newWidthPercentage = (newWidth / parentWidth) * 100;
        setEditorWidth(`${newWidthPercentage}%`);

        if (newWidthPercentage >= 90) {
          setRenderPreview(false);
          setEditorWidth("100%");
        } else if (newWidthPercentage <= 10) {
          setRenderPreview(true);
          setEditorWidth("0%");
        } else {
          setRenderPreview(true);
        }
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
  }, [setEditorWidth, setRenderPreview]);

  return { editorRef, resizingRef };
};
