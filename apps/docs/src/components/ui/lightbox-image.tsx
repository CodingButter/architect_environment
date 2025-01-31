"use client"

import { useRef } from "react"
import { useLightbox } from "../contexts/lightbox-provider"
import classNames from "classnames"

export default function LightboxImage({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  className = "",
  ...props
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  [key: string]: any
}) {
  const { open } = useLightbox()
  const ref = useRef<HTMLImageElement>(null)
  if (!src) return null
  return (
    <img
      ref={ref}
      alt={alt}
      onClick={() => open({ src: ref?.current?.src || "", alt: ref?.current?.alt || "" })}
      src={src}
      className={classNames("cursor-pointer", "rounded-lg", className)}
      {...props}
    />
  )
}
