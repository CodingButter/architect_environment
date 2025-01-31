import fs from "fs"
import path from "path"
import type { EachRoute } from "./routes-config"

const __dirname = process.cwd()
const docsPath = path.join(__dirname, "contents", "docs")

export const createDocs = (routes: EachRoute[], baseHref: string = "") => {
  routes.forEach((route) => {
    const { title, href, items } = route
    const dirPath = path.join(docsPath, baseHref, href)
    const filePath = path.join(dirPath, "index.mdx")
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
      fs.writeFileSync(filePath, `---\ntitle: ${title}\n---\n`)
    }

    if (items) {
      createDocs(items, href)
    }
  })
}
