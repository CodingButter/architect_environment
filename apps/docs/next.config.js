/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
