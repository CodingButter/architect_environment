import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { PageRoutes } from "@/lib/routes-config"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
        href="https://github.com/codingbutter/architect_environment"
        target="_blank">
        Follow Architect on GitHub <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        Build and Evolve AI Agents with Architect.
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        Architect provides a powerful framework to design, deploy, and scale AI agents, tools, and
        workflows. Effortlessly integrate dynamic capabilities and stay ahead with self-sustaining
        innovation.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          className={buttonVariants({ className: "px-6", size: "lg" })}
          href={`/docs${PageRoutes[0].href}`}>
          Get Started
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
          href="/blog">
          Explore Blog
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"npx create-architect <project-directory>"}
      </span>
    </div>
  )
}
