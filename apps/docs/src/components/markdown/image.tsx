import type { ComponentProps } from "react"
import NextImage from "next/image"

type Height = ComponentProps<typeof NextImage>["height"]
type Width = ComponentProps<typeof NextImage>["width"]

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null
  return (
    <NextImage
      alt={alt}
      height={height as Height}
      quality={40}
      src={src}
      width={width as Width}
      {...props}
    />
  )
}
