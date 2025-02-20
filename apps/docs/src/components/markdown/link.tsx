import NextLink from "next/link"
import type { ComponentProps } from "react"

export default function Link({ href, ...props }: ComponentProps<"a">) {
  if (!href) return null
  return (
    <NextLink
      href={href}
      {...props}
      rel="noopener noreferrer"
      target={href.startsWith("http") ? "_blank" : "false"}
    />
  )
}
