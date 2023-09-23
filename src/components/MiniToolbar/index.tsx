import { Carrot } from "lucide-react"
import Download from "../Download"
import MaxMinButton from "../MaxMinButton"

type Props = {
 markdownText: string
 isFullScreen: boolean
 toggleFullScreen: () => void
 openModal: (content: "about" | "settings") => void
}

const MiniToolbar = ({
 markdownText,
 isFullScreen,
 toggleFullScreen,
 openModal,
}: Props) => {
 return (
  <>
   <div className=" bg-gray-200 flex flex-row space-x-2 text-xs p-1 text-gray-400">
    <Carrot size={16} />
    <p>Carrot</p>
    {/* <button onClick={() => openModal("about")}>About</button> */}
    <Download markdownText={markdownText} />
    {/* <button onClick={() => openModal("settings")}>Settings</button> */}
    <MaxMinButton
     isFullScreen={isFullScreen}
     toggleFullScreen={toggleFullScreen}
    />
   </div>
  </>
 )
}

export default MiniToolbar
