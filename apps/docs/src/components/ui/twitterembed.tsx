import { Tweet } from "react-tweet"

export interface TwitterEmbedProps {
  id: string
}

const TwitterEmbed = ({ id }: TwitterEmbedProps) => {
  return (
    <div className="dark flex justify-center p-12 align-center">
      <Tweet id={id} />
    </div>
  )
}

export default TwitterEmbed
