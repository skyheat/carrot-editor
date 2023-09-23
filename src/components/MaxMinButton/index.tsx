import { Expand, Shrink } from "lucide-react"

type Props = {
 isFullScreen: boolean
 toggleFullScreen: () => void
}

const MaxMinButton = ({ isFullScreen, toggleFullScreen }: Props) => {
 return (
  <>
   {isFullScreen ? (
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
