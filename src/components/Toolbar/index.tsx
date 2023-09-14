import React from "react"
import Download from "../Download"
import ClearText from "../ClearText"

type Props = {
 className?: string
 markdownText: string
 setMarkdownText: (text: string) => void
}

const Toolbar = ({ markdownText, className, setMarkdownText }: Props) => {
 return (
  <div className="rounded-lg p-1 flex justify-evenly">
   <Download markdownText={markdownText} />
   <ClearText setMarkdownText={setMarkdownText} />
  </div>
 )
}

export default Toolbar
