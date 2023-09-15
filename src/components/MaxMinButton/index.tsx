import { Expand, Shrink } from "lucide-react"

type Props = {
 notFullScreen: boolean
 toggleFullScreen: () => void
}

const MaxMinButton = ({ notFullScreen, toggleFullScreen }: Props) => {
 return (
  <>
   {notFullScreen ? (
    <button onClick={toggleFullScreen}>
     <Shrink size={16} />
    </button>
   ) : (
    <button onClick={toggleFullScreen}>
     <Expand size={16} />
    </button>
   )}
  </>
 )
}

export default MaxMinButton
