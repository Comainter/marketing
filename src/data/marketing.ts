export const pipelineSteps = [
  { label: "Issue intake", status: "received", signal: "GitHub #4821" },
  { label: "Duplicate detection", status: "matched", signal: "92% similar to #4318" },
  { label: "Environment validation", status: "flagged", signal: "Node 18, SDK 5.1" },
  { label: "Stacktrace analysis", status: "parsed", signal: "AuthProvider.init" },
  { label: "Historical matching", status: "linked", signal: "PR #2190 fixed edge case" },
  { label: "Qualification", status: "qualified", signal: "Actionable regression" },
  { label: "Engineering escalation", status: "ready", signal: "Owner: Runtime" },
];

export const issueFeed = [
  {
    id: "ISS-4821",
    title: "OAuth callback fails after 5.4 migration",
    state: "Qualified",
    confidence: "96%",
    subsystem: "auth/runtime",
  },
  {
    id: "ISS-4819",
    title: "Webhook delivery timeout on local tunnel",
    state: "Unsupported usage",
    confidence: "89%",
    subsystem: "webhooks",
  },
  {
    id: "ISS-4817",
    title: "Type error in beta SDK generated client",
    state: "Duplicate",
    confidence: "94%",
    subsystem: "sdk/types",
  },
  {
    id: "ISS-4814",
    title: "Cache invalidation misses nested route",
    state: "Needs maintainer",
    confidence: "91%",
    subsystem: "routing/cache",
  },
];

export const problemMetrics = [
  ["70%", "of support load is repetitive qualification work"],
  ["41%", "of issues are duplicates, configuration mistakes, or unsupported usage"],
  ["18h", "median wait before maintainers get enough reproduction context"],
  ["3.6x", "more noise from AI-generated issue reports"],
];

export const repositoryNodes = [
  ["core/runtime", "auth/session", "sdk/js", "docs/migration"],
  ["api/webhooks", "cache/router", "cli/env", "examples"],
  ["issues", "pull requests", "releases", "incidents"],
];

export const comparison = [
  {
    title: "Generic AI assistants",
    items: [
      "Semantic retrieval only",
      "No operational memory",
      "No issue validation",
      "Shallow repository understanding",
    ],
  },
  {
    title: "Comainter",
    items: [
      "Repository-aware reasoning",
      "Issue qualification gates",
      "Operational memory",
      "Runtime and context awareness",
      "Maintainer workflow intelligence",
    ],
  },
];

export const trustItems = [
  ["GitHub integration", "Read issues, link PRs, draft qualified escalation reports."],
  ["Slack integration", "Route confidence-aware summaries into support engineering channels."],
  ["Discord integration", "Deflect community noise with validated fixes and known incidents."],
  ["Audit history", "Preserve every inference, source, confidence score, and human override."],
];

export const pricingPlans = [
  {
    name: "OSS",
    price: "Free",
    cadence: "for public repositories",
    description: "For open source maintainers qualifying public issue traffic before it reaches the core team.",
    highlight: false,
    signup:"Get Started",
    features: [
      "Unlimited public repos",
      "Community usage limits",
      "Basic issue qualification",
      "Duplicate detection",
      "Repo-aware answers",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    cadence: "per month",
    description: "For teams running private repositories and higher-volume maintainer automation.",
    highlight: true,
     signup:"Start 14-day trial",
    features: [
      "Unlimited repos",
      "Unlimited teammates",
      "Private repos",
      "Higher issue qualification throughput",
      "GitHub + Linear integrations",
      "Analytics",
      "Priority automation",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "for infrastructure teams",
    description: "For organizations that need dedicated deployment, advanced controls, and deeper workflow verification.",
    highlight: false,
    signup:"Contact Sales",
    features: [
      "Dedicated infrastructure",
      "Self-hosting",
      "SLA",
      "Audit logs",
      "Advanced workflows",
      "Runtime verification roadmap",
    ],
  },
];

export const pricingSignals = [
  ["Qualification volume", "Counted when Comainter completes an issue validation decision."],
  ["Repositories", "Production repositories connected for issue intelligence and historical matching."],
  ["Operational history", "Retention window for qualification decisions, linked evidence, and audit context."],
];

export const pricingFaqs = [
  {
    question: "Does Comainter replace maintainers?",
    answer:
      "No. Comainter reduces repetitive qualification work so maintainers can focus on real engineering decisions and debugging.",
  },
  {
    question: "Does it auto-close issues?",
    answer:
      "No. Maintainers stay in control. Comainter flags duplicates, setup mistakes, and missing context before issues reach engineering teams.",
  },
  {
    question: "How does issue qualification work?",
    answer:
      "Comainter analyzes issue details, repository history, documentation, related discussions, versions, logs, and reproduction context before routing the report.",
  },
  {
    question: "What repositories does it work best with?",
    answer:
      "Comainter is designed for active open-source and enterprise OSS repositories with growing issue traffic, support load, and community contributions.",
  },
  {
    question: "Why not just use GitHub issue templates?",
    answer:
      "Issue templates collect static fields. Comainter actively analyzes reports, requests missing evidence, detects duplicates, and explains likely setup or environment mistakes.",
  },
  {
    question: "Can maintainers review decisions?",
    answer:
      "Yes. Maintainers can review qualification results, routing decisions, linked evidence, and confidence signals before taking action.",
  },
  {
    question: "Does it support public and private repos?",
    answer:
      "Yes. Public repositories are supported in the OSS plan, while Pro and Enterprise plans support private repositories and organization workflows.",
  },
  {
    question: "How is Comainter different from PR review bots?",
    answer:
      "PR review bots analyze code after changes are submitted. Comainter focuses earlier in the workflow by qualifying issues, reducing support noise, and protecting maintainer attention before engineering gets interrupted.",
  },
];