type Props = {};

const MiniToolbar = (props: Props) => {
  return (
    <>
      <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
        <p>What is Markdown?</p>
        <p>Download</p>
      </div>
    </>
  );
};

export default MiniToolbar;
