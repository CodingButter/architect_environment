import type { Metadata } from "next"
import { Space_Mono, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/contexts/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "@/styles/globals.css"
import { LightboxProvider } from "@/components/contexts/lightbox-provider"

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
  metadataBase: new URL("https://architect.codingbutter.com"),
  description:
    "Architect is a platform for building, deploying, and managing cloud-native applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative ${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide relative bg-background scroll-smooth`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem>
          <div
            className={`opacity-30 absolute w-full h-full bg-fixed bg-cover bg-ima bg-center
             [background-opacity:10] [background-image:url('/grid-background.jpg')]`}
          />
          <LightboxProvider>
            <Navbar />
            <main className="relative sm:container mx-auto w-[90vw] h-auto scroll-smooth ">
              {children}
            </main>
            <Footer />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
