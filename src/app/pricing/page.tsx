import { ArrowRightIcon, ShieldIcon } from "@/components/icons/icons";
import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { pricingFaqs, pricingPlans, pricingSignals } from "@/data/marketing";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Pricing | Comainter",
  description:
    "Pricing for Comainter issue qualification intelligence and maintainer workflow automation.",
};

export default function PricingPage() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#E7473C]">
            Pricing
          </p>
          <h1 className="text-balance text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl">
            Priced by operational scale.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-400">
            Start with repository-aware issue validation, then scale into
            support intelligence, workflow routing, and ecosystem-level
            maintainer operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Panel
              key={plan.name}
              className={
                plan.highlight
                  ? "relative overflow-hidden border-[#E7473C]/35 bg-[#E7473C]/4.5 p-5"
                  : "relative overflow-hidden p-5"
              }
            >
              {plan.highlight ? (
                <div className="absolute right-4 top-4 rounded border border-[#E7473C]/25 bg-[#E7473C]/10 px-2 py-1 text-xs font-bold text-red-100">
                  most teams
                </div>
              ) : null}

              <div className="flex min-h-40 flex-col justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">{plan.name}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-zinc-500">
                      {plan.cadence}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-[#E7473C]/45 via-white/[0.08] to-transparent" />

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-zinc-300"
                  >
                    <ShieldIcon className="mt-1 size-4 shrink-0 text-[#E7473C]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <ButtonLink
                href={
                  plan.name === "Enterprise"
                    ? "mailto:early-access@comainter.com?subject=Comainter enterprise pricing"
                    : "/#early-access"
                }
                className="mt-8 w-full"
                variant={plan.highlight ? "primary" : "secondary"}
              >
                {plan.signup}
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </Panel>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.45fr]">
          <Panel className="p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#E7473C]">
              Billing model
            </p>
            <h2 className="mt-4 text-2xl font-black text-white">
              Plans scale with qualification load, not seat count.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Comainter is shared infrastructure for maintainers, support
              engineering, DevRel, and platform teams. Unlimited teammates can
              review outcomes, audit decisions, and route qualified issues.
            </p>
          </Panel>

          <Panel className="overflow-hidden">
            <div className="grid divide-y divide-white/[0.08] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {pricingSignals.map(([label, detail]) => (
                <div key={label} className="p-5">
                  <div className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#E7473C]">
                    {label}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Panel className="overflow-hidden border border-[#E7473C]/20 bg-[#E7473C]/[0.04]">
          <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#E7473C]">
                Free trial
              </p>

              <h2 className="mt-3 text-2xl font-black text-white">
                Try Comainter with your existing GitHub workflow.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                Connect your repositories, qualify incoming issues, and reduce
                repetitive maintainer interruptions before engineering gets
                involved.
              </p>
            </div>

            <div className="shrink-0">
              <ButtonLink
                href="/#early-access"
                variant="primary"
                className="min-w-52"
              >
                Start 14-day trial
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </Panel>

        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#E7473C]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-white">
              Common questions
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Comainter is designed to reduce repetitive issue qualification
              work, not replace maintainers or engineering teams.
            </p>
          </div>

          <div className="mt-10 divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#0d1117]">
            {pricingFaqs.map((faq, index) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5">
                  <span className="text-left text-sm font-medium text-white">
                    {faq.question}
                  </span>

                  <Plus className="size-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/[0.06] px-6 py-5">
                  <p className="max-w-3xl text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
