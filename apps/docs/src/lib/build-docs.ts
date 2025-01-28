import fs from "fs"
import path from "path"
import type { EachRoute } from "./routes-config"

const __dirname = process.cwd()
const docsPath = path.join(__dirname, "contents", "docs")
const ROUTES_JS = path.join(__dirname, "src", "lib", "routes.js")

const recursiveReadDir = (dir: string, parent?: EachRoute): EachRoute[] => {
  const files = fs.readdirSync(dir)
  return files
    .filter((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      return stat.isDirectory()
    })
    .map((file) => {
      const filePath = path.join(dir, file)
      const indexFile = path.join(filePath, "index.mdx")
      let title = file.replace(/-/g, " ")
      const titleWords = title.split(" ")
      title = titleWords.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
      const newRoute: EachRoute = {
        title,
        href: `/${file}`,
        items: [],
      }
      if (!fs.existsSync(indexFile)) newRoute.noLink = true
      newRoute.items = recursiveReadDir(filePath, newRoute)
      return newRoute
    })
}

export function buildDocs() {
  fs.writeFileSync(
    ROUTES_JS,
    `export default ${JSON.stringify(recursiveReadDir(docsPath), null, 2)}`
  )
}
