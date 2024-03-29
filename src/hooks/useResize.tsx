import React, { useEffect, useRef, useState } from "react"

export const useResize = (
 setEditorWidth: React.Dispatch<React.SetStateAction<string>>,
 setRenderPreview: React.Dispatch<React.SetStateAction<boolean>>,
 setRenderWidthControl: React.Dispatch<React.SetStateAction<boolean>>
) => {
 const resizingRef = useRef(false)
 const editorRef = useRef<HTMLDivElement>(null)

 const [isFullScreen, setIsFullScreen] = useState(false)
 const [oldEditorWidth, setOldEditorWidth] = useState("50%")

 const toggleFullScreen = () => {
  console.log(isFullScreen, editorRef.current?.style.width)
  if (isFullScreen) {
   setEditorWidth(oldEditorWidth)
   setIsFullScreen(false)
   setRenderWidthControl(true)
   setRenderPreview(true)
  }
  if (!isFullScreen) {
   if (
    editorRef.current?.style.width &&
    editorRef.current?.style.width >= "95%"
   ) {
    setOldEditorWidth("50%")
    setEditorWidth("100%")
    setIsFullScreen(true)
    setRenderWidthControl(false)
    setRenderPreview(false)
   }
   setOldEditorWidth(editorRef.current?.style.width || "50%")
   setEditorWidth("100%")
   setIsFullScreen(true)
   setRenderWidthControl(false)
   setRenderPreview(false)
  }
 }
 useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
   event.preventDefault()

   if (resizingRef.current && editorRef.current) {
    const parentWidth = editorRef.current.parentElement?.offsetWidth || 0
    let newWidth =
     event.clientX - editorRef.current.getBoundingClientRect().left

    const minWidth = parentWidth * 0
    const maxWidth = parentWidth * 1

    if (newWidth < minWidth) {
     newWidth = minWidth
    } else if (newWidth > maxWidth) {
     newWidth = maxWidth
    }

    const newWidthPercentage = (newWidth / parentWidth) * 100
    setEditorWidth(`${newWidthPercentage}%`)

    if (newWidthPercentage >= 95) {
     setRenderWidthControl(false)
     setRenderPreview(false)
     setEditorWidth("100%")
     setIsFullScreen(true)
    } else if (newWidthPercentage <= 5) {
     setRenderWidthControl(true)
     setRenderPreview(true)
     setEditorWidth("0%")
     setIsFullScreen(false)
    } else {
     setRenderWidthControl(true)
     setRenderPreview(true)
     setIsFullScreen(false)
    }
   }
  }

  const handleMouseUp = () => {
   resizingRef.current = false
  }

  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("mouseup", handleMouseUp)

  return () => {
   window.removeEventListener("mousemove", handleMouseMove)
   window.removeEventListener("mouseup", handleMouseUp)
  }
 }, [setEditorWidth, setRenderPreview, setRenderWidthControl])

 return { editorRef, resizingRef, isFullScreen, toggleFullScreen }
}
