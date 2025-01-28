import Link from "next/link"
import { CommandIcon, TriangleIcon } from "lucide-react"
import { buttonVariants } from "./ui/button"

export function Footer() {
  return (
    <footer className="border-t w-full h-16 relative z-50">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Built by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/codingbutter">
              codingbutter
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/codingbutter/architect_environment">
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  )
}

export function FooterButtons() {
  return (
    <>
      <Link
        className={buttonVariants({ variant: "outline", size: "sm" })}
        href="https://github.com/codingbutter/architect_environment">
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        View Source
      </Link>
    </>
  )
}
