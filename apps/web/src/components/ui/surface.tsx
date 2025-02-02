"use client"
import { useAPI } from "../context/api-provider.tsx.bak"

export default function Surface() {
  const { client } = useAPI()
  return <div className="p-8 bg-slate-600 text-3xl">{client.hello()}</div>
}
