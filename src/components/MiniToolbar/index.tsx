import { Dispatch, SetStateAction } from "react";
import Download from "../Download";
import MaxMinButton from "../MaxMinButton";

type Props = {
  markdownText: string;
  setEditorWidth: (percentage: string) => void;
  editorWidth: string;
};

const MiniToolbar = ({ markdownText, setEditorWidth, editorWidth }: Props) => {
  return (
    <>
      <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
        <p>About</p>
        <Download markdownText={markdownText} />
        <p>Settings</p>
        <MaxMinButton
          setEditorWidth={setEditorWidth}
          editorWidth={editorWidth}
        />
      </div>
    </>
  );
};

export default MiniToolbar;
