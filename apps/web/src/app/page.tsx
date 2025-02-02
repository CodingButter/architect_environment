import React from "react"
import Chat from "@components/ui/chat"
function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean
  conic?: boolean
  className?: string
}): React.JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  )
}

export default function Page(): React.JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Chat />
    </main>
  )
}
