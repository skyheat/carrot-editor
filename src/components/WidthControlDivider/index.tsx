interface WidthControlDividerProps {
 onReset: () => void
 resizingRef: React.MutableRefObject<boolean>
}

const WidthControlDivider = ({
 onReset,
 resizingRef,
}: WidthControlDividerProps) => {
 return (
  <div
   onMouseDown={(e) => {
    e.preventDefault()
    resizingRef.current = true
   }}
   className="flex items-center justify-center bg-gray-300 cursor-ew-resize w-2"
  >
   <button className="z-0 text-gray-500" onClick={onReset}>
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
    >
     <rect width="6" height="14" x="4" y="5" rx="2" />
     <rect width="6" height="10" x="14" y="7" rx="2" />
     <path d="M17 22v-5" />
     <path d="M17 7V2" />
     <path d="M7 22v-3" />
     <path d="M7 5V2" />
    </svg>
   </button>
  </div>
 )
}

export default WidthControlDivider
