import Download from "../Download";
import MaxMinButton from "../MaxMinButton";

type Props = {
  markdownText: string;
  notFullScreen: boolean;
  toggleFullScreen: () => void;
};

const MiniToolbar = ({
  markdownText,
  notFullScreen,
  toggleFullScreen,
}: Props) => {
  return (
    <>
      <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
        <p>About</p>
        <Download markdownText={markdownText} />
        <p>Settings</p>
        <MaxMinButton
          notFullScreen={notFullScreen}
          toggleFullScreen={toggleFullScreen}
        />
      </div>
    </>
  );
};

export default MiniToolbar;
