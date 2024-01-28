import React from 'react'

function CaretIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect width="24" height="24" mixBlend-mode="multiply" />
      <path d="M18 9L12 16.5L6 9H18Z" fill="#2A254B" className="fill-white" />
    </svg>
  )
}

export default CaretIcon
