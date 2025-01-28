import routes from "./routes"
export interface EachRoute {
  title: string
  href: string
  noLink?: true // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[]
}

export const ROUTES: EachRoute[] = routes
// export const ROUTES: EachRoute[] = [
//   {
//     title: "System Architecture",
//     href: "/system-architecture",
//     noLink: true,
//     items: [
//       { title: "Overview", href: "/overview" },
//       { title: "Core Components", href: "/core-components" },
//       { title: "Agent-Orchestrator Interaction", href: "/agent-orchestrator" },
//       { title: "Plugin Integration", href: "/plugin-integration" },
//       { title: "Task Prioritization", href: "/task-prioritization" },
//       { title: "Agent Communication", href: "/agent-communication" },
//       { title: "Error Handling", href: "/error-handling" },
//     ],
//   },
//   {
//     title: "Developing A Plugin",
//     href: "/developing-a-plugin",
//     noLink: true,
//     items: [
//       { title: "Plugin Basics", href: "/plugin-basics" },
//       { title: "Advanced Plugin Features", href: "/advanced-features" },
//     ],
//   },
//   {
//     title: "Developing An Agent",
//     href: "/developing-an-agent",
//     noLink: true,
//     items: [
//       { title: "Agent Basics", href: "/agent-basics" },
//       { title: "Advanced Agent Development", href: "/advanced-development" },
//     ],
//   },
//   {
//     title: "Quickstart Guide",
//     href: "/quickstart",
//     items: [],
//   },
//   {
//     title: "Advanced Development",
//     href: "/advanced-development",
//     items: [],
//   },
// ]

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

export const PageRoutes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat()
