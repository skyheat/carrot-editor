import { Expand, Shrink } from "lucide-react";
import { useState } from "react";

type Props = {
  editorWidth: string;
  setEditorWidth: (percentage: string) => void;
};

const MaxMinButton = ({ setEditorWidth, editorWidth }: Props) => {
  const [isMax, setIsMax] = useState(true);
  const [oldEditorWidth, setOldEditorWidth] = useState(editorWidth);

  return (
    <>
      {isMax ? (
        <button
          onClick={() => {
            setOldEditorWidth(editorWidth);
            setEditorWidth("100%");
          }}
        >
          <Expand size={16} onClick={() => setIsMax(!isMax)} />
        </button>
      ) : (
        <button
          onClick={() => {
            setEditorWidth(oldEditorWidth);
          }}
        >
          <Shrink size={16} onClick={() => setIsMax(!isMax)} />
        </button>
      )}
    </>
  );
};

export default MaxMinButton;
