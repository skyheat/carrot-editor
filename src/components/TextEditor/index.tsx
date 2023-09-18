import { useResize } from "@/hooks/useResize"
import WidthControlDivider from "../WidthControlDivider"
import { useTabIndentation } from "@/hooks/useTabIndentation"
import "github-markdown-css/github-markdown-light.css"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import About from "../About"
import MiniToolbar from "../MiniToolbar"
import Modal from "../Modal"
import Settings from "../Settings"

const TextEditor = () => {
 const [editorWidth, setEditorWidth] = useState("50%")
 const [renderPreview, setRenderPreview] = useState(true)
 const [renderWidthControl, setRenderWidthControl] = useState(true)
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [modalContent, setModalContent] = useState<"about" | "settings" | null>(
  null
 )

 const { editorRef, resizingRef, notFullScreen, toggleFullScreen } = useResize(
  setEditorWidth,
  setRenderPreview,
  setRenderWidthControl
 )
 const {
  text: markdownText,
  setText: setMarkdownText,
  handleKeyDown,
 } = useTabIndentation()

 const openModal = (content: "about" | "settings") => {
  setIsModalOpen(true)
  setModalContent(content)
 }

 const closeModal = () => {
  setIsModalOpen(false)
  setModalContent(null)
 }

 const renderModalContent = () => {
  switch (modalContent) {
   case "about":
    return <About />
   case "settings":
    return <Settings />
   default:
    return null
  }
 }

 return (
  <>
   <div
    ref={editorRef}
    className="relative overflow-hidden h-full"
    style={{
     width: editorWidth,
     minWidth: editorWidth,
    }}
   >
    <textarea
     className={`flex relative outline-none text-black border-0 px-6 pt-6 h-full mx-auto resize-none mb-10 ${
      editorWidth == "100%" ? "w-1/2 drop-shadow-2xl mt-4" : "w-full"
     }`}
     placeholder="Write your markdown here..."
     onChange={(e) => setMarkdownText(e.target.value)}
     value={markdownText}
     onKeyDown={handleKeyDown}
    />
    <div className="absolute top-0 right-0 transform flex flex-grow">
     <MiniToolbar
      markdownText={markdownText}
      notFullScreen={notFullScreen}
      toggleFullScreen={toggleFullScreen}
      openModal={openModal}
     />
    </div>
    {isModalOpen && <Modal onClose={closeModal}>{renderModalContent()}</Modal>}
   </div>
   {renderWidthControl && (
    <WidthControlDivider
     onReset={() => {
      setEditorWidth("50%"), setRenderPreview(true)
     }}
     resizingRef={resizingRef}
    />
   )}

   {renderPreview && (
    <div
     className="markdown-body overflow-y-auto px-6 pt-6"
     style={{ width: `calc(100% - ${editorWidth})` }}
    >
     <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
       ol: ({ ...props }) => <ol style={{ listStyle: "revert" }} {...props} />,
       ul: ({ ...props }) => <ul style={{ listStyle: "revert" }} {...props} />,
      }}
     >
      {markdownText}
     </ReactMarkdown>
    </div>
   )}
  </>
 )
}

export default TextEditor
