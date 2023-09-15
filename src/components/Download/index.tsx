type Props = {
 markdownText: string
}

const Download = ({ markdownText }: Props) => {
 function downloadMarkdown(content: BlobPart, filename = "download.md") {
  const blob = new Blob([content], { type: "text/markdown" })

  const a = document.createElement("a")

  a.href = URL.createObjectURL(blob)
  a.download = filename

  document.body.appendChild(a)

  a.click()

  document.body.removeChild(a)
 }
 return (
  <button onClick={() => downloadMarkdown(markdownText)}>
   <p>Download</p>
  </button>
 )
}

export default Download
