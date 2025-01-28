import type { Metadata } from "next"
import { Space_Mono, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/contexts/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "@/styles/globals.css"
import Image from "next/image"

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
})

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Architect",
  metadataBase: new URL("https://ariadocs.vercel.app/"),
  description:
    "This comprehensive documentation template, crafted with Next.js and available as open-source, delivers a sleek and responsive design, tailored to meet all your project documentation requirements.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide relative`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem>
          <Image
            alt="grid background"
            src="/grid-background.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="fixed top-0 left-0 z-0 opacity-10"
          />
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
