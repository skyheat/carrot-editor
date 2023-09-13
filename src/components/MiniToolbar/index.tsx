import Download from "../Download";
import MaxMinButton from "../MaxMinButton";

type Props = {
  markdownText: string;
  notFullScreen: boolean;
  toggleFullScreen: () => void;
  openModal: (content: "about" | "settings") => void;
};

const MiniToolbar = ({
  markdownText,
  notFullScreen,
  toggleFullScreen,
  openModal,
}: Props) => {
  return (
    <>
      <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
        <button onClick={() => openModal("about")}>About</button>
        <Download markdownText={markdownText} />
        <button onClick={() => openModal("settings")}>Settings</button>
        <MaxMinButton
          notFullScreen={notFullScreen}
          toggleFullScreen={toggleFullScreen}
        />
      </div>
    </>
  );
};

export default MiniToolbar;
