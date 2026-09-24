import type { ReactNode } from "react";
import {
  ArrowRightIcon,
  GraphIcon,
  PulseIcon,
  ShieldIcon,
  TerminalIcon,
} from "@/components/icons/icons";
import { ButtonLink } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { pricingFaqs, pricingPlans } from "@/data/marketing";

const logos = ["NOVA", "AXIS", "MONO", "TRACE", "FIELD", "NORTH"];

const features = [
  ["Qualify", "Validate every report before it reaches engineering.", ShieldIcon],
  ["Connect", "Map issues to PRs, releases, incidents, and owners.", GraphIcon],
  ["Observe", "Track support load, confidence, and routing quality.", PulseIcon],
  ["Escalate", "Send only actionable work into maintainer queues.", TerminalIcon],
];

const stats = [
  ["70%", "less repetitive qualification"],
  ["4x", "faster evidence review"],
  ["96%", "routing confidence"],
];

const testimonials = [
  [
    "Comainter made issue traffic feel measurable.",
    "Head of Developer Platform",
  ],
  [
    "The team stopped treating every report as an interruption.",
    "Support Engineering Lead",
  ],
];

export function MarketingHome() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-black text-white">
      <Hero />
      <LogoStrip />
      <ProductShowcase />
      <AlternatingSections />
      <FeatureCards />
      <DashboardPreview />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 items-center gap-y-12 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="col-span-12 lg:col-span-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Comainter
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-6xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Issue intelligence.
        </h1>
        <p className="mt-6 max-w-md text-xl leading-8 text-zinc-400">
          Qualify developer reports before they interrupt engineering.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#early-access" className="h-11 px-5">
            Request access
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href="#pricing" variant="secondary" className="h-11 px-5">
            View pricing
          </ButtonLink>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <DeviceMockup />
      </div>
    </section>
  );
}

function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] rounded-[2rem] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-white/5">
      <div className="rounded-[1.5rem] border border-white/10 bg-black p-4">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/80" />
            <span className="size-2 rounded-full bg-white/40" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            live run
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Panel className="p-4">
            <p className="font-mono text-xs text-zinc-500">ISS-4821</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">
              OAuth callback fails.
            </h2>
            <div className="mt-8 space-y-3">
              {["Duplicate scan", "Runtime check", "Owner route"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-t border-white/10 pt-3 text-sm"
                >
                  <span className="text-zinc-400">{item}</span>
                  <span className="font-mono text-white">pass</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="grid content-between p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                decision
              </p>
              <p className="mt-4 text-4xl font-black">96%</p>
            </div>
            <div className="mt-16 rounded-xl border border-white/10 bg-white p-4 text-black">
              <p className="text-sm font-black">Qualified</p>
              <p className="mt-1 text-xs text-zinc-600">Route to runtime.</p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function LogoStrip() {
  return (
    <section className="border-y border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-16 items-center justify-center font-mono text-sm font-semibold tracking-[0.24em] text-zinc-500"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section id="features" className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-28 sm:px-6 lg:px-8">
      <div className="col-span-12 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Product
        </p>
        <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
          Everything together.
        </h2>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <LargeScreenshot />
      </div>
    </section>
  );
}

function LargeScreenshot() {
  return (
    <Panel className="overflow-hidden p-4">
      <div className="grid min-h-[520px] gap-4 lg:grid-cols-[220px_1fr]">
        <aside className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:block">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Repos</p>
          <div className="mt-8 space-y-3">
            {["runtime", "sdk-js", "docs", "webhooks"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </aside>
        <div className="grid content-between rounded-xl border border-white/10 bg-black p-5">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-zinc-500">Qualification</p>
              <h3 className="mt-3 text-4xl font-black tracking-tight">
                Stay focused.
              </h3>
            </div>
            <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-zinc-300">
              18 open
            </span>
          </div>
          <div className="mt-10 grid gap-3">
            {["Regression", "Duplicate", "Known incident", "Missing context"].map((row, index) => (
              <div
                key={row}
                className="grid grid-cols-[1fr_auto] rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="font-semibold">{row}</span>
                <span className="font-mono text-zinc-500">{90 - index * 7}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

function AlternatingSections() {
  return (
    <section className="mx-auto grid max-w-7xl gap-20 px-4 py-20 sm:px-6 lg:px-8">
      <SplitSection
        eyebrow="Qualification"
        title="Build faster."
        text="Route only real engineering work."
        visual={<StackedCards />}
      />
      <SplitSection
        reverse
        eyebrow="Repository memory"
        title="Designed to scale."
        text="Connect issues to releases, incidents, and owners."
        visual={<GraphMockup />}
      />
    </section>
  );
}

function SplitSection({
  eyebrow,
  title,
  text,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-12 items-center gap-8">
      <div className={`col-span-12 ${reverse ? "lg:order-2" : ""} lg:col-span-5`}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-sm text-lg text-zinc-400">{text}</p>
      </div>
      <div className="col-span-12 lg:col-span-7">{visual}</div>
    </div>
  );
}

function StackedCards() {
  const cards = [
    ["Unsupported usage", "top-0 translate-x-0", "w-[54%]"],
    ["Duplicate issue", "top-[86px] translate-x-7", "w-[70%]"],
    ["Actionable regression", "top-[172px] translate-x-14", "w-[86%]"],
  ];

  return (
    <div className="relative min-h-[420px]">
      {cards.map(([title, position, width], index) => (
        <Panel
          key={title}
          className={`absolute left-0 right-0 p-5 ${position}`}
        >
          <p className="font-mono text-xs text-zinc-500">0{index + 1}</p>
          <h3 className="mt-5 text-3xl font-black">{title}</h3>
          <div className="mt-8 h-2 rounded-full bg-white/10">
            <div className={`h-2 rounded-full bg-white ${width}`} />
          </div>
        </Panel>
      ))}
    </div>
  );
}

function GraphMockup() {
  const nodes = [
    ["issue", "left-[12%] top-[14%]"],
    ["pr", "left-[42%] top-[24%]"],
    ["release", "left-[72%] top-[14%]"],
    ["incident", "left-[12%] top-[56%]"],
    ["owner", "left-[42%] top-[66%]"],
  ];

  return (
    <Panel className="relative min-h-[460px] overflow-hidden p-6">
      {nodes.map(([node, position]) => (
        <div
          key={node}
          className={`absolute flex size-28 items-center justify-center rounded-full border border-white/15 bg-black text-sm font-bold uppercase tracking-[0.14em] text-zinc-300 ${position}`}
        >
          {node}
        </div>
      ))}
      <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-white p-5 text-black">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">
          context graph
        </p>
        <p className="mt-3 text-2xl font-black">One workspace.</p>
      </div>
    </Panel>
  );
}

function FeatureCards() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map(([title, text, Icon]) => (
          <Panel key={title as string} className="p-6">
            <Icon className="size-6 text-white" />
            <h3 className="mt-12 text-2xl font-black">{title as string}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{text as string}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-5xl font-black tracking-tight sm:text-6xl">
          Simple. Powerful.
        </h2>
        <p className="max-w-sm text-lg text-zinc-400">A command center for maintainer operations.</p>
      </div>
      <LargeScreenshot />
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
      {stats.map(([value, label]) => (
        <div key={label} className="py-12 md:px-10">
          <p className="text-6xl font-black tracking-tight">{value}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-500">{label}</p>
        </div>
      ))}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
      {testimonials.map(([quote, role]) => (
        <Panel key={quote} className="p-8">
          <p className="text-3xl font-black leading-tight tracking-tight">
            "{quote}"
          </p>
          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-zinc-500">{role}</p>
        </Panel>
      ))}
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Pricing
        </p>
        <h2 className="mt-5 text-5xl font-black tracking-tight">Start small.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Panel key={plan.name} className="grid min-h-[420px] content-between p-6">
            <div>
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className="mt-6 text-5xl font-black tracking-tight">{plan.price}</p>
              <p className="mt-2 text-sm text-zinc-500">{plan.cadence}</p>
            </div>
            <div className="mt-10">
              <p className="mb-5 text-sm text-zinc-400">{plan.description}</p>
              <ButtonLink href="#early-access" variant="secondary" className="w-full">
                {plan.signup}
              </ButtonLink>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-black tracking-tight">FAQ.</h2>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {pricingFaqs.slice(0, 5).map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="cursor-pointer list-none text-lg font-bold">
              {item.question}
            </summary>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="early-access" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-black sm:p-12 lg:p-16">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
          Comainter
        </p>
        <h2 className="mt-6 max-w-3xl text-6xl font-black leading-none tracking-tight sm:text-7xl">
          Made for modern teams.
        </h2>
        <div className="mt-10">
          <ButtonLink
            href="mailto:early-access@comainter.com?subject=Comainter early access"
            className="border-black bg-black text-white hover:border-zinc-800 hover:bg-zinc-800"
          >
            Contact the team
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
