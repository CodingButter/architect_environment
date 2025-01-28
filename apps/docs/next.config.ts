/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import { buildDocs } from "./src/lib/build-docs"

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "next-mdx-remote"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https" as const, hostname: "*.freepik.com/**" },
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
  buildDocs()
  return withMDX(nextConfig)
}
