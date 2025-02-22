import path from "node:path"
import { promises as fs } from "node:fs"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrism from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeCodeTitles from "rehype-code-titles"
import { visit } from "unist-util-visit"
import matter from "gray-matter"

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Pre from "@/components/markdown/pre"
import Note from "@/components/markdown/note"
import { Stepper, StepperItem } from "@/components/markdown/stepper"
import Image from "@/components/markdown/image"
import Link from "@/components/markdown/link"
import Outlet from "@/components/markdown/outlet"
import { PageRoutes, ROUTES } from "./routes-config"

// add custom components
const components = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  img: Image,
  a: Link,
  Outlet,
}
const __dirname = process.cwd()
// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  })
}

// logic for docs

export interface BaseMdxFrontmatter {
  title: string
  description: string
}

export async function getDocsForSlug(slug: string) {
  try {
    const contentPath = getDocsContentPath(slug)
    const rawMdx = await fs.readFile(contentPath, "utf-8")
    return parseMdx<BaseMdxFrontmatter>(rawMdx)
  } catch (err) {
    console.log(err)
  }
}

export async function getDocsTocs(slug: string) {
  const contentPath = getDocsContentPath(slug)
  const rawMdx = await fs.readFile(contentPath, "utf-8")
  // captures between ## - #### can modify accordingly
  const headingsRegex = /^(#{2,4})\s(.+)$/gm
  let match
  const extractedHeadings = []
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length
    const headingText = match[2].trim()
    const slug = sluggify(headingText)
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    })
  }
  return extractedHeadings
}

export function getPreviousNext(path: string) {
  const index = PageRoutes.findIndex(({ href }) => href == `/${path}`)
  return {
    prev: PageRoutes[index - 1],
    next: PageRoutes[index + 1],
  }
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-")
  return slug.replace(/[^a-z0-9-]/g, "")
}

function getDocsContentPath(slug: string) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}/index.mdx`)
}

function justGetFrontmatterFromMD<Frontmatter>(rawMd: string): Frontmatter {
  return matter(rawMd).data as Frontmatter
}

export async function getAllChilds(pathString: string) {
  const items = pathString.split("/").filter((it) => it != "")
  let PageRoutesCopy = ROUTES

  let prevHref = ""
  for (const it of items) {
    const found = PageRoutesCopy.find((innerIt) => innerIt.href == `/${it}`)
    if (!found) break
    prevHref += found.href
    PageRoutesCopy = found.items ?? []
  }
  if (!prevHref) return []

  return Promise.all(
    PageRoutesCopy.map(async (it) => {
      const totalPath = path.join(__dirname, "/contents/docs/", prevHref, it.href, "index.mdx")
      const raw = await fs.readFile(totalPath, "utf-8")
      return {
        ...justGetFrontmatterFromMD<BaseMdxFrontmatter>(raw),
        href: `/docs${prevHref}${it.href}`,
      }
    })
  )
}

// for copying the code in pre
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children
      if (codeEl.tagName !== "code") return
      node.raw = codeEl.children?.[0].value
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties.raw = node.raw
    }
  })
}

export interface Author {
  avatar?: string
  handle: string
  username: string
  handleUrl: string
}

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string
  authors: Author[]
  cover: string
}

export async function getAllBlogStaticPaths() {
  try {
    const blogFolder = path.join(__dirname, "/contents/blogs/")
    const res = await fs.readdir(blogFolder)
    return res.map((file) => file.split(".")[0])
  } catch (err) {
    console.log(err)
  }
}
export async function getAllBlogs() {
  const blogFolder = path.join(__dirname, "/contents/blogs/")
  const files = await fs.readdir(blogFolder)
  const uncheckedRes = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return undefined
      const filepath = path.join(__dirname, `/contents/blogs/${file}`)
      const rawMdx = await fs.readFile(filepath, "utf-8")
      return {
        ...justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx),
        slug: file.split(".")[0],
      }
    })
  )
  return uncheckedRes.filter((it) => Boolean(it)) as (BlogMdxFrontmatter & {
    slug: string
  })[]
}

export async function getBlogForSlug(slug: string) {
  const blogFile = path.join(__dirname, "/contents/blogs/", `${slug}.mdx`)
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8")
    return parseMdx<BlogMdxFrontmatter>(rawMdx)
  } catch {
    return undefined
  }
}
