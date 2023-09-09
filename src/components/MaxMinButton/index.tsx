import { Expand, Shrink } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  editorWidth: string;
  setEditorWidth: (percentage: string) => void;
  setRenderWidthControl: (boolean: boolean) => void;
};

const MaxMinButton = ({
  setRenderWidthControl,
  setEditorWidth,
  editorWidth,
}: Props) => {
  const [isFullScreen, setIsFullscreen] = useState(false);
  const [oldEditorWidth, setOldEditorWidth] = useState(editorWidth);

  useEffect(() => {
    if (editorWidth == "100%") {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  }, [editorWidth, setIsFullscreen]);

  return (
    <>
      {isFullScreen ? (
        <button
          onClick={() => {
            setEditorWidth(oldEditorWidth);
            setRenderWidthControl(true);
          }}
        >
          <Shrink size={16} onClick={() => setIsFullscreen(false)} />
        </button>
      ) : (
        <button
          onClick={() => {
            setOldEditorWidth(editorWidth);
            setEditorWidth("100%");
            setRenderWidthControl(false);
          }}
        >
          <Expand size={16} onClick={() => setIsFullscreen(true)} />
        </button>
      )}
    </>
  );
};

export default MaxMinButton;
