import React, { useState } from "react"

type Props = { setMarkdownText: (text: string) => void }

const ClearText = ({ setMarkdownText }: Props) => {
 const [deleteConfShow, setDeleteConfShow] = useState(false)

 return (
  <div>
   {deleteConfShow ? (
    <>
     Confirm Delete?
     <div className="flex flex-row justify-around">
      <button onClick={() => setMarkdownText("")}>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        //class="lucide lucide-check-circle-2"
       >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
       </svg>
      </button>
      <button onClick={() => setDeleteConfShow(false)}>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        //class="lucide lucide-x-circle"
       >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
       </svg>
      </button>
     </div>
    </>
   ) : (
    <button onClick={() => setDeleteConfShow(true)}>
     <p>Delete</p>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      //class="lucide lucide-x-circle"
     >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
     </svg>
    </button>
   )}
  </div>
 )
}

export default ClearText
