import { type ComponentProps } from "react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../ui/collapsible"
import Copy from "./copy"
import Uml from "./uml"
import Trigger from "./trigger"
import classNames from "classnames"

function PreCopy({ children, className, raw, ...rest }: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <>
      <div className="absolute top-8 right-2.5 z-10 sm:block hidden">
        <div className="flex items-center justify-center gap-2">
          <Trigger />
          <Copy content={raw!} />
        </div>
      </div>
      <div className="relative">
        <pre className={classNames(className, "py-10")} {...rest}>
          {children}
        </pre>
      </div>
    </>
  )
}
export default function Pre({ children, raw, ...rest }: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5 relative">
      {raw && raw.includes("@startuml") ? (
        <div className="relative flex flex-col">
          <Uml content={raw} />
          <Collapsible defaultOpen className="relative">
            <PreCopy raw={raw} {...rest}>
              {children}
            </PreCopy>
          </Collapsible>
        </div>
      ) : (
        <PreCopy raw={raw} {...rest}>
          {children}
        </PreCopy>
      )}
    </div>
  )
}
