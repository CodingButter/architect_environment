import { type EachRoute } from "./routes-config"
export default [
  {
    title: "Introduction",
    href: "/introduction",
    items: [
      { title: "Getting Started", href: "/getting-started" },
      { title: "Core Concepts", href: "/core-concepts" },
      { title: "Next Steps", href: "/next-steps" },
    ],
  },
  {
    title: "System Architecture",
    href: "/system-architecture",
    items: [
      { title: "Orchestrator", href: "/orchestrator" },
      { title: "Agents", href: "/agents" },
      { title: "Plugins", href: "/plugins" },
    ],
    noLink: true,
  },
  {
    title: "Task Management",
    href: "/task-management",
    items: [{ title: "Prioritization and Flow", href: "/prioritization-and-flow" }],
    noLink: true,
  },
  {
    title: "Plugin Integration",
    href: "/plugin-integration",
    items: [
      { title: "Shared Plugins", href: "/shared-plugins" },
      { title: "Agent-Specific Plugins", href: "/agent-specific-plugins" },
      { title: "Developing Custom Plugins", href: "/developing-custom-plugins" },
    ],
    noLink: true,
  },
  {
    title: "Advanced Topics",
    href: "/advanced-topics",
    items: [
      { title: "Customizing Agents", href: "/customizing-agents" },
      { title: "Extending Functionality", href: "/extending-functionality" },
    ],
    noLink: true,
  },
  {
    title: "Installation and Setup",
    href: "/installation-and-setup",
    items: [
      { title: "Prerequisites", href: "/prerequisites" },
      { title: "Environment Setup", href: "/environment-setup" },
      { title: "Dependencies Installation", href: "/dependencies-installation" },
    ],
    noLink: true,
  },
  {
    title: "Configuration Options",
    href: "/configuration-options",
    items: [
      { title: "Orchestrator Configuration", href: "/orchestrator-configuration" },
      { title: "Agent-Specific Settings", href: "/agent-specific-settings" },
      { title: "Plugin Configuration Parameters", href: "/plugin-configuration-parameters" },
    ],
    noLink: true,
  },
  {
    title: "Security Considerations",
    href: "/security-considerations",
    items: [
      { title: "Authentication Methods", href: "/authentication-methods" },
      { title: "Access Control Mechanisms", href: "/access-control-mechanisms" },
      { title: "Data Protection Practices", href: "/data-protection-practices" },
    ],
    noLink: true,
  },
  {
    title: "Performance Tuning",
    href: "/performance-tuning",
    items: [
      { title: "Optimizing Resource Usage", href: "/optimizing-resource-usage" },
      { title: "Scaling Agents and Plugins", href: "/scaling-agents-and-plugins" },
      { title: "Benchmarking and Profiling", href: "/benchmarking-and-profiling" },
    ],
    noLink: true,
  },
  {
    title: "Integration with External Systems",
    href: "/integration-with-external-systems",
    items: [
      { title: "API Integration Guide", href: "/api-integration-guide" },
      { title: "Webhook Configuration", href: "/webhook-configuration" },
      { title: "Third-Party Service Setup", href: "/third-party-service-setup" },
    ],
    noLink: true,
  },
  {
    title: "Migration and Updates",
    href: "/migration-and-updates",
    items: [
      { title: "Upgrading from Previous Versions", href: "/upgrading-from-previous-versions" },
      { title: "Migration Strategies", href: "/migration-strategies" },
    ],
    noLink: true,
  },
  {
    title: "Case Studies/Examples",
    href: "/case-studies-examples",
    items: [
      {
        title: "Implementing Architect in Different Scenarios",
        href: "/implementing-architect-in-different-scenarios",
      },
      { title: "Real-World Use Cases", href: "/real-world-use-cases" },
    ],
    noLink: true,
  },
  {
    title: "Contributing and Development Guide",
    href: "/contributing-and-development-guide",
    items: [
      { title: "How to Contribute", href: "/how-to-contribute" },
      {
        title: "Coding Standards and Best Practices",
        href: "/coding-standards-and-best-practices",
      },
    ],
    noLink: true,
  },
  {
    title: "FAQ",
    href: "/faq",
    items: [
      { title: "General Questions", href: "/general-questions" },
      { title: "Troubleshooting Common Issues", href: "/troubleshooting-common-issues" },
    ],
    noLink: true,
  },
] as EachRoute[]
