"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRightIcon, PulseIcon, ShieldIcon, TerminalIcon } from "@/components/icons/icons";
import { Badge, Panel, SectionHeader, SectionShell } from "@/components/ui/panel";

const supportCases = [
  {
    label: "answered before engineering",
    title: "Configuration mistake",
    state: "resolved",
    question:
      "The webhook signature check fails after deploy. Same payload works locally. Is this a bug?",
    code: `const raw = await req.json()
verifySignature(raw, header)`,
    answer:
      "Comainter identifies the implementation issue: the request body is parsed before signature verification. Use the raw request body, then parse JSON after verification.",
    result: "Reply with implementation fix",
    tone: "border-[#E7473C]/22 bg-[#E7473C]/[0.055] text-red-100",
  },
  {
    label: "matched to existing issue",
    title: "Duplicate report",
    state: "duplicate",
    question:
      "SDK 5.4 throws a type error when generated clients include optional nested arrays.",
    code: `client.users.create({
  metadata: { tags: [] }
})`,
    answer:
      "Comainter matches this to issue #4817 and PR #2190 with 94% confidence. The fix shipped in 5.4.2, with a documented workaround for 5.4.1.",
    result: "Link existing fix and close duplicate",
    tone: "border-[#E7473C]/22 bg-[#E7473C]/[0.055] text-red-100",
  },
  {
    label: "qualified for maintainers",
    title: "Real regression",
    state: "escalated",
    question:
      "OAuth callback intermittently returns 500 only after migrating from 5.3.8 to 5.4.1.",
    code: `await auth.exchangeCode({
  redirectUri,
  code
})`,
    answer:
      "Comainter qualifies this as actionable. It includes version delta, reproduction notes, stacktrace frame, suspected auth/session owner, and severity.",
    result: "Create structured engineering issue",
    tone: "border-white/[0.12] bg-black/60 text-white",
  },
];

export function MaintainerIntelligenceSection() {
  return (
    <SectionShell id="analytics">
      <Reveal className="mx-auto text-center">
        <SectionHeader
          eyebrow="Answered before engineering"
          title="Comainter responds before maintainers get pulled in."
          description="Show the user what happened to their report: a fix they can apply, an existing issue they should follow, or a qualified engineering escalation."
          className="mx-auto"
        />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-[19rem_1fr]">
        <Reveal>
          <Panel className="sticky top-20 p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
              <PulseIcon className="size-4 text-[#E7473C]" />
              Issue path
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              One incoming issue can become three different outcomes. The important part is that
              engineering only sees the last one.
            </p>
            <div className="mt-5 space-y-2">
              {["Fix suggested", "Duplicate linked", "Bug escalated"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-sm text-zinc-300">
                  <span className="size-1.5 rounded-full bg-[#E7473C]/80" />
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>

        <div className="space-y-5">
          {supportCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.985, opacity: 0.72 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Panel className="overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                      <TerminalIcon className="size-4 text-[#E7473C]" />
                      {item.title}
                    </div>
                    <Badge className={item.tone}>{item.state}</Badge>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
                    <div className="border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r">
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-500">
                        user issue
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{item.question}</p>
                      <pre className="mt-4 overflow-x-auto rounded-md border border-white/[0.07] bg-black/45 p-3 font-mono text-xs leading-5 text-zinc-400">
                        {item.code}
                      </pre>
                    </div>

                    <div className="p-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-500">
                        Comainter response
                      </p>
                      <motion.div
                        className="mt-3 rounded-md border border-white/[0.08] bg-white/[0.035] p-4"
                        whileInView={{ borderColor: ["rgba(255,255,255,0.08)", "rgba(125,211,252,0.28)", "rgba(255,255,255,0.08)"] }}
                        transition={{ duration: 1.8, repeat: 1 }}
                      >
                        <div className="flex items-start gap-3">
                          <ShieldIcon className="mt-0.5 size-4 shrink-0 text-[#E7473C]" />
                          <p className="text-sm leading-6 text-zinc-300">{item.answer}</p>
                        </div>
                      </motion.div>

                      <div className="mt-4 flex items-center gap-3 rounded-md border border-white/[0.07] bg-black/30 px-3 py-2">
                        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
                          outcome
                        </span>
                        <ArrowRightIcon className="size-4 text-zinc-600" />
                        <span className="text-sm font-medium text-white">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </Panel>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
