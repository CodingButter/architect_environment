//import { CommandIcon } from "lucide-react"
import { SiGithub } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/theme-toggle"
import { PageRoutes, TokenPageRoutes } from "@/lib/routes-config"
import { SheetClose } from "@/components/ui/sheet"
import { buttonVariants } from "./ui/button"
import Anchor from "./anchor"
import { SheetLeftbar } from "./leftbar"
import Search from "./search"

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Token",
    href: `/docs/architect-token`,
  },
  {
    title: "Community",
    href: "https://github.com/codingbutter/architect_environment/discussions",
  },
]

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                href="https://github.com/codingbutter/architect_environment">
                <SiGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Logo() {
  return (
    <Link className="flex items-center gap-2.5" href="/">
      <Image
        alt="Architect"
        height={24}
        width={24}
        src="/logo.png"
        className="w-6 h-6 text-muted-foreground"
      />
      <h2 className="text-md font-bold font-code">Architect</h2>
    </Link>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            absolute
            activeClassName="!text-primary dark:font-medium font-semibold"
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
            key={item.title + item.href}>
            {item.title}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose asChild key={item.title + item.href}>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
