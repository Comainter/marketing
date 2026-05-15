"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRightIcon, ShieldIcon } from "@/components/icons/icons";
import { Badge, Panel, SectionHeader, SectionShell } from "@/components/ui/panel";

const flowStages = [
  {
    title: "Issue opened",
    detail: "A developer reports a failure with partial context.",
  },
  {
    title: "Comainter qualifies",
    detail: "The report is checked against known answers, required evidence, and issue type.",
  },
  {
    title: "Outcome chosen",
    detail: "Noise is handled immediately. Real defects move forward.",
  },
];

export function WorkflowSection() {
  return (
    <SectionShell id="workflow">
      <Reveal className="mx-auto text-center">
        <SectionHeader
          eyebrow="Qualification workflow"
          title="A validation layer before engineering workflows."
          description="Comainter sits between incoming developer reports and your engineering queue. It decides whether an issue should be answered, redirected, or escalated."
          className="mx-auto"
        />
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-6xl">
        <Panel className="overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
              <ShieldIcon className="size-4 text-[#E7473C]" />
              Live issue path
            </div>
            <Badge>before maintainers</Badge>
          </div>

          <div className="terminal-grid relative p-5 sm:p-7">
            <div className="absolute left-[10%] right-[10%] top-[5.75rem] hidden h-px bg-gradient-to-r from-transparent via-[#E7473C]/35 to-transparent md:block" />
            <motion.div
              aria-hidden="true"
              className="absolute top-[5.45rem] hidden size-2.5 rounded-full bg-[#E7473C] shadow-[0_0_22px_rgba(231,71,60,0.85)] md:block"
              animate={{ left: ["11%", "49%", "88%"], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="grid gap-3 md:grid-cols-3">
              {flowStages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  className="relative rounded-md border border-white/[0.08] bg-black/35 p-4"
                  animate={{ borderColor: ["rgba(255,255,255,0.08)", "rgba(125,211,252,0.28)", "rgba(255,255,255,0.08)"] }}
                  transition={{ duration: 5.2, repeat: Infinity, delay: index * 1.7 }}
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                    {index !== flowStages.length - 1 ? (
                      <ArrowRightIcon className="hidden size-4 text-zinc-600 md:block" />
                    ) : (
                      <span className="rounded border border-[#E7473C]/25 bg-[#E7473C]/10 px-2 py-0.5 text-[11px] font-bold text-red-100">
                        routed
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-extrabold text-white">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{stage.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <motion.div
                animate={{ opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 4.8, repeat: Infinity, delay: 1 }}
                className="rounded-md border border-[#E7473C]/18 bg-[#E7473C]/[0.045] p-4"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E7473C]">
                  resolved before engineering
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-white">Reply with the fix</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Duplicates, unsupported usage, missing logs, and configuration mistakes get a direct next step.
                </p>
              </motion.div>

              <motion.div
                animate={{ opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 4.8, repeat: Infinity, delay: 2.4 }}
                className="rounded-md border border-white/[0.09] bg-black/55 p-4"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E7473C]">
                  qualified for engineering
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-white">Send a clean issue</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Real bugs arrive with reproduction context, severity, confidence, and the likely owner.
                </p>
              </motion.div>
            </div>
          </div>
        </Panel>
      </Reveal>
    </SectionShell>
  );
}
