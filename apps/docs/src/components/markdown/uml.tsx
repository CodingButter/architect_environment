import Image from "./image"
import umlEncode from "../../lib/uml-encode"
const umlServer = "https://plantuml.com/plantuml/png/~1"

export interface UmlProps {
  content: string
}

export default async function Uml({ content }: UmlProps) {
  const encoded = umlEncode(content)
  const imgUrl: string = `${umlServer}${encoded}`

  console.log(imgUrl)
  return <Image src={imgUrl} alt="uml" />
}
