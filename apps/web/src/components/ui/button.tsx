"use client"
import * as React from "react"
export interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export default function Button(props: ButtonProps): React.JSX.Element {
  const { children, onClick } = props
  return (
    <button
      onClick={onClick}
      className="bg-blueish-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}
