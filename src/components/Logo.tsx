export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 7L12 12L2 7" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="font-display font-bold text-xl tracking-tight text-white">blackbox.lab</span>
    </div>
  )
}
