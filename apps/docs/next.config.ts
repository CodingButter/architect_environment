/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import { createDocs } from "./src/lib/build-docs"
import routes from "./src/lib/routes"

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "next-mdx-remote"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https" as const, hostname: "*.freepik.com/**" },
      { protocol: "https" as const, hostname: "*.imgur.com/**" },
      { protocol: "https" as const, hostname: "*.discordapp.com/**" },
      {
        protocol: "https" as const,
        hostname: "plantuml.com/**",
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default () => {
  //createDocs(routes)
  return withMDX(nextConfig)
}
