"use client"
import { useAPI } from "@components/context/api-provider"
import Button from "./button"
import { useState } from "react"

export default function Chat(): React.JSX.Element {
  const archAgent = useAPI()
  const [userMessage, setUserMessage] = useState("")

  const sendMessage = async (): Promise<void> => {
    const message = userMessage
    const response = await archAgent.sendMessage(
      message,
      (response: string) => {
        console.log(response)
      },
      () => {
        console.log("end")
      }
    )
  }
  return (
    <div className="bg-slate-500 flex flex-col items-center justify-center">
      <input type="text" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  )
}
