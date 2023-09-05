import { Dispatch, SetStateAction } from "react";
import Download from "../Download";

type Props = {
  markdownText: string;
  setEditorWidth: (percentage: string) => void;
};

const MiniToolbar = ({ markdownText, setEditorWidth }: Props) => {
  return (
    <>
      <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
        <p>About</p>
        <Download markdownText={markdownText} />
        <p>Settings</p>
        <button onClick={() => setEditorWidth("100%")}> Fullscreen </button>
      </div>
    </>
  );
};

export default MiniToolbar;
