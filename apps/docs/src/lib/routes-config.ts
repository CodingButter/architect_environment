import { doc_routes } from "./routes"
export interface EachRoute {
  title: string
  href: string
  noLink?: true // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[]
}

export const ROUTES: EachRoute[] = doc_routes
interface Page {
  title: string
  href: string
}

function getRecurrsiveAllLinks(node: EachRoute): Page[] {
  const ans: Page[] = []
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href })
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` }
    ans.push(...getRecurrsiveAllLinks(temp))
  })
  return ans
}

export const PageRoutes = ROUTES.map((it: EachRoute) => getRecurrsiveAllLinks(it)).flat()
