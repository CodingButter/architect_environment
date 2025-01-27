"use client"

import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { CollapsibleTrigger } from "../ui/collapsible"
export default function Trigger() {
  const [isTriggered, setIsTriggered] = useState(false)

  async function handleTrigger() {
    setIsTriggered(!isTriggered)
  }

  return (
    <CollapsibleTrigger className="border" onClick={handleTrigger} size="xs" variant="secondary">
      <Button className="border" onClick={handleTrigger} size="xs" variant="secondary">
        <ChevronDownIcon
          className={`w-3 h-3 transition-all ${isTriggered ? "rotate-180" : "rotate-0"}`}
        />
      </Button>
    </CollapsibleTrigger>
  )
}
