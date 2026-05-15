"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, GraphIcon, ShieldIcon } from "@/components/icons/icons";
import { Panel, SectionHeader, SectionShell } from "@/components/ui/panel";

const qualificationFlow = [
  {
    label: "Collect",
    detail: "Issue details, logs, versions, and environment info",
    tone: "text-white",
  },
  {
    label: "Analyze",
    detail: "Checks duplicates, setup mistakes, and known patterns",
    tone: "text-red-100",
  },
  {
    label: "Classify",
    detail: "Determines whether the report is actionable",
    tone: "text-red-100",
  },
  {
    label: "Escalate",
    detail: "Routes qualified reports with clear engineering context",
    tone: "text-white",
  },
];

export function IssueQualificationSection() {
  return (
    <SectionShell id="issue-qualification" className="pt-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Issue qualification"
          title="How Comainter qualifies reports."
          description="Each incoming report passes through collection, repository-aware analysis, classification, and escalation gates before it reaches maintainers."
          className="mx-auto text-center"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 22 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Panel className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7473C]/15 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-100">
                <GraphIcon className="size-4 text-[#E7473C]" />
                How Comainter qualifies reports
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                issue qualification flow
                <span className="size-2 rounded-full bg-[#E7473C] shadow-[0_0_18px_rgba(231,71,60,0.6)]" />
              </div>
            </div>

            <div className="terminal-grid p-4 sm:p-6">
              <div className="grid gap-3 md:grid-cols-4">
                {qualificationFlow.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="relative rounded-md border border-white/[0.08] bg-black/60 p-4"
                  >
                    {index !== qualificationFlow.length - 1 ? (
                      <ArrowRightIcon className="absolute -right-5 top-1/2 hidden size-4 -translate-y-1/2 text-zinc-700 md:block" />
                    ) : null}

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">
                        0{index + 1}
                      </span>
                      <span className="size-2 rounded-full bg-[#E7473C]/75" />
                    </div>

                    <h3 className={`mt-5 text-base font-bold ${step.tone}`}>
                      {step.label}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {step.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Panel className="border-[#E7473C]/18 bg-[#E7473C]/[0.045] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-red-100">
                    <ShieldIcon className="size-4" />
                    Duplicate or unsupported
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Comainter links existing answers, explains likely setup mistakes,
                    and asks for missing logs or reproduction steps automatically.
                  </p>
                </Panel>

                <Panel className="border-white/[0.1] bg-black/55 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <ShieldIcon className="size-4" />
                    Qualified issue
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Maintainers receive a concise report with reproduction context,
                    related issues, suspected owner, and confidence signals.
                  </p>
                </Panel>
              </div>
            </div>
          </Panel>
        </motion.div>
      </div>
    </SectionShell>
  );
}
