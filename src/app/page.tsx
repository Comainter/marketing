"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  ChevronRight,
  GitCommit,
  GitPullRequest,
  ShieldCheck,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Search,
  AlertCircle,
  ArrowUpRight,
  Code2,
  Workflow,
  Network,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { ArrowRightIcon } from "@/components/icons/icons";

const TECH_PLATFORMS = [
  { name: "VERCEL", domain: "Deployment Runtime" },
  { name: "SUPABASE", domain: "Postgres Infrastructure" },
  { name: "CLOUDFLARE", domain: "Workers & Edge" },
  { name: "NEON", domain: "Serverless Database" },
  { name: "POSTHOG", domain: "Product Analytics" },
  { name: "TEMPORAL", domain: "Workflow Engine" },
];

const SCENARIOS = [
  {
    id: "ISS-4821",
    title: "Uncaught OAuth callback race condition in token exchange",
    severity: "CRITICAL REGRESSION",
    subsystem: "auth-gateway / v2.4",
    verdict: "ESCALATE TO MAINTAINER",
    confidence: "98.4%",
    statusBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    summary:
      "Stacktrace matches regression introduced in PR #3891 (commit 7a9b1c0). Identified duplicate report #4812 with exact symbol collision.",
    trace: [
      { step: "Environment Check", state: "Node.js v20.11 / TLS 1.3", ok: true },
      { step: "Duplicate Clustering", state: "Exact match with #4812 (99.2% cosine)", ok: true },
      { step: "AST & Symbolication", state: "Mapped to packages/auth/src/exchange.ts:42", ok: true },
      { step: "Root Cause Corroboration", state: "Unsynchronized state write across workers", ok: true },
    ],
    codeSnippet: `// packages/auth/src/exchange.ts:42
export async function exchangeCode(code: string, session: Session) {
  // CRITICAL: Mutex missing during concurrent callback exchange
  const token = await tokenProvider.issue({ code, tenant: session.tenantId });
  await sessionStore.commit(session.id, token); // <-- Race condition here
  return token;
}`,
  },
  {
    id: "ISS-4822",
    title: "TypeError: unsupported Node.js engine version (v14.18)",
    severity: "ENVIRONMENT CONFIG",
    subsystem: "cli / core",
    verdict: "DEFLECTED (AUTO-REPLIED)",
    confidence: "100.0%",
    statusBadge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    summary:
      "Automated environment validator identified end-of-life Node version. User auto-routed to migration docs. Zero engineer interruption.",
    trace: [
      { step: "Environment Check", state: "Node.js v14.18 (EoL >= v18 required)", ok: false },
      { step: "Duplicate Clustering", state: "48 historical reports with identical error", ok: true },
      { step: "Doc Citation Retrieval", state: "Linked to docs.platform.io/upgrade-node-20", ok: true },
      { step: "Automated Deflection", state: "Helpful response posted in 400ms", ok: true },
    ],
    codeSnippet: `// Auto-generated maintainer qualification reply:
Comainter detected that you are running Node.js v14.18.
The current platform requires Node.js >= 18.0.0.
Please upgrade your runtime:
  $ nvm install 20 && nvm use 20
Documentation: https://docs.platform.io/prerequisites`,
  },
  {
    id: "ISS-4823",
    title: "Connection pool exhaustion under burst webhook ingress",
    severity: "DATABASE TIMEOUT",
    subsystem: "db-pool / router",
    verdict: "CORRELATED WITH KNOWN INCIDENT",
    confidence: "96.1%",
    statusBadge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    summary:
      "Tied directly to active incident INC-902 (database maintenance window). Automatically aggregated into master incident thread.",
    trace: [
      { step: "Environment Check", state: "Docker container / k8s cluster", ok: true },
      { step: "Incident Cross-Reference", state: "Active incident INC-902 acknowledged", ok: true },
      { step: "Topology Mapping", state: "Impacted nodes: worker-pool-east-3", ok: true },
      { step: "Escalation Routing", state: "Appended to Incident Response Slack", ok: true },
    ],
    codeSnippet: `// Correlated Incident Context
Incident: INC-902 (Scheduled maintenance on primary replica)
Started: 10:30 UTC | Duration: 15 mins
Impacted Service: Postgres Connection Broker
Action: Grouping 14 matching customer reports into single incident feed`,
  },
];

const METRICS = [
  { value: "74%", label: "Support Deflection", desc: "Non-actionable reports filtered automatically" },
  { value: "3.8x", label: "Faster Triage", desc: "Qualified evidence delivered instantly" },
  { value: "0", label: "False Escalations", desc: "Zero noisy issues hitting maintainer inbox" },
  { value: "99.98%", label: "Classification SLA", desc: "Deterministic qualification pipeline" },
];

const PRICING_TIERS = [
  {
    name: "Open Source",
    price: "$0",
    period: "forever",
    description: "For public repositories, community maintainers, and developer ecosystem libraries.",
    features: [
      "Up to 3 public repositories",
      "Automated duplicate detection",
      "Environment & config verification",
      "GitHub Issues & Discussions integration",
      "Community support",
    ],
    cta: "Connect Public Repo",
    highlight: false,
  },
  {
    name: "Platform Team",
    price: "$49",
    period: "per seat / mo",
    description: "For developer platforms, API companies, and high-velocity support engineering teams.",
    features: [
      "Unlimited repositories & monorepos",
      "Deep AST & stacktrace symbolication",
      "PR, commit & release correlation",
      "Linear, Jira, Slack & PagerDuty sync",
      "Maintainer workload analytics",
      "Priority webhook dispatch",
    ],
    cta: "Start 14-Day Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual billing",
    description: "For enterprise infrastructure companies with stringent compliance and isolation demands.",
    features: [
      "VPC & self-hosted agent deployment",
      "Zero data retention guarantee",
      "Custom AST models & internal docs indexing",
      "SAML SSO & audit event streaming",
      "Dedicated solutions engineer & 99.99% SLA",
      "Custom support SLAs",
    ],
    cta: "Talk to Solutions Team",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How does Comainter differ from generic AI issue bots?",
    a: "Generic bots write shallow summary comments or hallucinate answers without understanding your repo. Comainter is deterministic infrastructure software: it parses stacktraces against your actual Git commits, validates runtime environments, runs similarity search against closed incident history, and only escalates verified bugs with reproduction steps.",
  },
  {
    q: "Does Comainter train models on our proprietary codebase?",
    a: "Never. Your source code and issues are indexed in an isolated tenant environment with strict cryptographic isolation. We do not use your proprietary repositories or bug reports to train public models.",
  },
  {
    q: "What issue trackers and developer tools are supported?",
    a: "Comainter integrates directly with GitHub Issues, GitLab, Jira, Linear, Slack, Discord developer forums, and Discourse. It operates non-intrusively through webhooks and API tokens.",
  },
  {
    q: "Can Comainter automatically close unsupported config reports?",
    a: "Yes. You have full policy control. You can set Comainter to autonomously reply with exact documentation citations for known unsupported environments, or stage deflection replies for human one-click sign-off.",
  },
  {
    q: "How is repository context and history indexed?",
    a: "Comainter indexes your AST, commit history, releases, and dependency lockfiles. When a report arrives, it correlates the stacktrace against historical changes to determine the exact PR that introduced the behavior.",
  },
];

export default function MarketingPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [copiedCli, setCopiedCli] = useState(false);
  const scenario = SCENARIOS[activeScenario];

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -s https://api.comainter.com/v1/health");
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Sleek Floating Glass Navbar with Rounded Borders */}
      <Navbar />

      {/* Background Grids & Technical Ambient Lighting */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Operational Engine Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>PRODUCTION ENGINE • QUALIFYING 40,000+ DEVELOPER ISSUES</span>
          </div>

          {/* Infrastructure Headline */}
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]">
            Issue qualification
            <span className="block text-zinc-400">infrastructure.</span>
          </h1>

          {/* Operational Subtitle */}
          <p className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl font-normal leading-relaxed">
            Comainter parses stacktraces, detects duplicates, verifies runtime environments,
            and isolates root causes before developer reports interrupt engineering teams.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10 active:scale-95"
            >
              Request Access
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/30"
            >
              Explore Qualification Flow
            </a>
          </div>

          {/* Quick CLI Inspection */}
          <div className="mt-8 flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950/80 px-4 py-1.5 font-mono text-xs text-zinc-400 backdrop-blur-md">
            <span className="text-emerald-400">$</span>
            <span>curl -s https://api.comainter.com/v1/health</span>
            <button
              onClick={handleCopy}
              className="ml-2 text-zinc-500 hover:text-white transition"
              title="Copy to clipboard"
            >
              {copiedCli ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
            </button>
          </div>

          {/* ========================================================================= */}
          {/* HERO PRODUCT SCREENSHOT (Generated High-Fidelity Infrastructure UI)     */}
          {/* ========================================================================= */}
          <div className="relative mt-16 w-full max-w-6xl">
            {/* Subtle Neon Underglow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-xl opacity-60" />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl shadow-black/80">
              {/* Window Header */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 bg-zinc-950/90 px-4 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 hidden sm:inline-block font-mono text-xs text-zinc-400">
                    comainter-operational-console // cluster:us-east-1
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    QUALIFICATION ENGINE ONLINE
                  </span>
                  <span className="font-mono text-xs text-zinc-500">Latency: 11ms</span>
                </div>
              </div>

              {/* Main Preview Image */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <Image
                  src="/images/dashboard-preview.jpg"
                  alt="Comainter Operational Infrastructure Dashboard"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>

              {/* Interactive Dashboard Status Footer */}
              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-neutral-950/90 p-4 text-left font-mono text-xs sm:grid-cols-4">
                <div className="p-2">
                  <span className="text-zinc-500 block">PIPELINE THROUGHPUT</span>
                  <span className="text-sm font-semibold text-white">1,420 issues / hr</span>
                </div>
                <div className="p-2">
                  <span className="text-zinc-500 block">AVG QUALIFICATION TIME</span>
                  <span className="text-sm font-semibold text-emerald-400">420 ms / report</span>
                </div>
                <div className="p-2">
                  <span className="text-zinc-500 block">DEFLECTION ACCURACY</span>
                  <span className="text-sm font-semibold text-white">99.8% precision</span>
                </div>
                <div className="p-2">
                  <span className="text-zinc-500 block">CODE OWNER ROUTING</span>
                  <span className="text-sm font-semibold text-cyan-400">Automated via AST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ENTERPRISE & ECOSYSTEM STRIP                                          */}
      {/* ========================================================================= */}
      <section className="border-y border-white/10 bg-zinc-950/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
            ENGINEERED FOR MODERN DEVELOPER PLATFORMS & HIGH-VOLUME OSS REPOSITORIES
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TECH_PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center transition hover:border-white/15"
              >
                <span className="font-mono text-sm font-bold tracking-wider text-zinc-300">
                  {platform.name}
                </span>
                <span className="text-[10px] text-zinc-500 mt-0.5">{platform.domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DEEP QUALIFICATION PIPELINE (With Pipeline Screenshot)               */}
      {/* ========================================================================= */}
      <section id="pipeline" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-400">
            <Layers className="size-3.5 text-emerald-400" />
            <span>DETERMINISTIC VERIFICATION STACK</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-white">
            How Comainter qualifies issues before engineering triage.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Most developer issues are incomplete, duplicates, or unsupported configs.
            Comainter runs a 4-tier pipeline to isolate real defects from ecosystem noise.
          </p>
        </div>

        {/* Pipeline Visual Container */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Visual Screenshot of Pipeline Flow */}
            <div className="relative lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/10 min-h-[380px] lg:min-h-[500px] bg-black">
              <Image
                src="/images/pipeline-preview.jpg"
                alt="Automated Issue Qualification Flow & Stacktrace Diagnostics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Structured Pipeline Steps */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-zinc-950/80">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-xs font-semibold text-emerald-400">
                    01
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Environment & Syntax Validation</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Validates Node, Python, or Go version, lockfiles, flags, and configuration schemas before parsing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-xs font-semibold text-emerald-400">
                    02
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Vector Similarity & Deduplication</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Computes semantic cosine similarity over open and closed issues, identifying duplicates in under 50ms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-xs font-semibold text-emerald-400">
                    03
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Deep AST & Stacktrace Symbolication</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Maps minified stacktraces to repository source files, recent PR diffs, and pinpointed line ranges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-xs font-semibold text-emerald-400">
                    04
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Confidence-Scored Triage & Deflection</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Issues with &lt;80% actionability are deflected with reproduction guidance. Verified bugs route directly to code owners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400">DEFLECTION METRIC</span>
                  <span className="text-zinc-400">74% average reduction</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full bg-emerald-400 w-[74%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE LIVE TELEMETRY CONSOLE                                     */}
      {/* ========================================================================= */}
      <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-400">
              <Terminal className="size-3.5 text-cyan-400" />
              <span>LIVE TRIAGE SIMULATOR</span>
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Inspect live qualification in action.
            </h2>
            <p className="mt-2 text-zinc-400 max-w-xl">
              Select an incoming issue report to inspect how Comainter parses, verifies, and executes qualification decisions in real time.
            </p>
          </div>

          {/* Scenario Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(idx)}
                className={`rounded-full px-4 py-2 text-xs font-mono transition-all ${
                  activeScenario === idx
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {s.id}: {s.severity}
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulator Viewport */}
        <div className="grid lg:grid-cols-12 gap-6 rounded-2xl border border-white/15 bg-neutral-950 p-6 sm:p-8 shadow-2xl">
          {/* Left Panel: Report Overview & Trace Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-500">{scenario.id}</span>
                <span className="font-mono text-xs text-zinc-600">•</span>
                <span className="font-mono text-xs text-zinc-400">{scenario.subsystem}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                {scenario.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {scenario.summary}
              </p>
            </div>

            {/* Verdict Card */}
            <div className="rounded-xl border border-white/10 bg-black/60 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400">QUALIFICATION VERDICT</span>
                <span className="font-mono text-xs font-bold text-white">
                  Score: {scenario.confidence}
                </span>
              </div>
              <div className="mt-2">
                <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-mono font-bold ${scenario.statusBadge}`}>
                  {scenario.verdict}
                </span>
              </div>
            </div>

            {/* Pipeline Trace Progression */}
            <div className="space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Pipeline Execution Steps:
              </p>
              {scenario.trace.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs font-mono"
                >
                  <span className="text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className={`size-3.5 ${item.ok ? "text-emerald-400" : "text-amber-400"}`} />
                    {item.step}
                  </span>
                  <span className="text-zinc-300 font-semibold">{item.state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Code & Stacktrace Inspection */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-white/10 bg-black p-5 font-mono">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Code2 className="size-4 text-emerald-400" />
                <span>Source Analysis & Generated Response</span>
              </div>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                SYNTACTIC AST
              </span>
            </div>

            <pre className="my-4 overflow-x-auto text-xs text-zinc-300 leading-relaxed">
              <code>{scenario.codeSnippet}</code>
            </pre>

            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-zinc-500">
              <span>Automatic routing target: @auth-maintainers</span>
              <span className="text-emerald-400">Deflected non-actionable cycles: 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SIX CORE INFRASTRUCTURE PILLARS                                       */}
      {/* ========================================================================= */}
      <section id="product" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            SYSTEM CAPABILITIES
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-white">
            Built for platform engineers, not generic triage.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Comainter operates deep within your repository topology to convert ambiguous bug reports into verified, actionable engineering tickets.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-emerald-400">
              <Activity className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Stacktrace Symbolication</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Reverses minified client and server stacktraces directly back to repository Git commits, branch heads, and exact function definitions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-400">
              <Network className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Repository Topology Graphs</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Maps multi-package monorepos and microservice boundaries to know exactly which subsystem owns an error before alerting maintainers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-amber-400">
              <Search className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Semantic Deduplication</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Aggregates burst reports during outages or breaking releases into master issues, eliminating redundant comments and multiple PRs.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-emerald-400">
              <Workflow className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Environment Reproduction Check</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Identifies invalid CLI flags, unpinned dependency conflicts, and unsupported runtime versions automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-indigo-400">
              <GitPullRequest className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">PR & Release Correlation</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Determines whether an reported bug is already addressed in an unreleased pull request or scheduled for the next tag.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-md transition hover:border-white/20">
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-rose-400">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Zero Model Training Guarantee</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Proprietary ASTs and issue history remain private to your enterprise tenant. Comainter never trains shared models on your code.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OPERATIONAL METRICS                                                    */}
      {/* ========================================================================= */}
      <section id="metrics" className="border-y border-white/10 bg-zinc-950/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="border-l border-white/10 pl-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {m.value}
                </div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {m.label}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PRICING                                                                */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            INFRASTRUCTURE PRICING
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-white">
            Transparent plans for ecosystems of any scale.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Free forever for open source repositories. Scalable pricing for engineering platforms.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-xl transition-all ${
                tier.highlight
                  ? "border-2 border-emerald-500/50 bg-neutral-950 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/20"
                  : "border border-white/10 bg-zinc-950/60 hover:border-white/20"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-emerald-500/40 bg-emerald-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {tier.period ? ` / ${tier.period}` : ""}
                  </span>
                </div>
                <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
                  {tier.description}
                </p>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <Check className="size-4 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#early-access"
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold transition-all ${
                    tier.highlight
                      ? "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/10"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                  <ChevronRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ                                                                    */}
      {/* ========================================================================= */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            OPERATIONAL ARCHITECTURE
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="text-base font-semibold text-white">{faq.q}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA                                                              */}
      {/* ========================================================================= */}
      <section id="early-access" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-14 lg:p-20 text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
              EARLY ACCESS PROGRAM
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Stop treating every bug report as an interruption.
            </h2>
            <p className="mt-6 text-base text-zinc-400 sm:text-lg">
              Equip your repository with issue qualification intelligence today. Join top platform engineering teams.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Early access request submitted.");
              }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full rounded-full border border-white/20 bg-black/80 px-4 py-3 text-sm text-white placeholder-zinc-500 backdrop-blur-md focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Request Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. INFRASTRUCTURE FOOTER                                                */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-black py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">Comainter</span>
            <span>•</span>
            <span>Developer Support Infrastructure</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#pipeline" className="hover:text-white transition">Pipeline</a>
            <a href="#architecture" className="hover:text-white transition">Architecture</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">Documentation</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-zinc-400">All systems operational (99.99%)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
