"use client"
import Image from "./image"
import umlEncode from "../../lib/uml-encode"
import { useLightbox } from "../contexts/lightbox-provider"
const umlServer = "https://plantuml.com/plantuml/png/~1"

export interface UmlProps {
  content: string
}

export default function Uml({ content }: UmlProps) {
  const { open } = useLightbox()
  const encoded = umlEncode(content)
  const imgUrl: string = `${umlServer}${encoded}`

  return <Image onClick={() => open({ src: imgUrl, alt: "uml" })} src={imgUrl} alt="uml" />
}
