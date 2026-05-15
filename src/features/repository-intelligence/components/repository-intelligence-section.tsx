import { Reveal } from "@/components/motion/reveal";
import { GraphIcon, TerminalIcon } from "@/components/icons/icons";
import { Badge, Panel, SectionHeader, SectionShell } from "@/components/ui/panel";
import { repositoryNodes } from "@/data/marketing";

export function RepositoryIntelligenceSection() {
  return (
    <SectionShell id="repository">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Repository intelligence"
            title="Understands the graph behind every issue."
            description="Comainter models issue, PR, file, release, subsystem, and runtime relationships so qualification is grounded in operational history, not shallow retrieval."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Repository graph understanding",
              "Issue to PR to file relationships",
              "Subsystem detection",
              "Runtime awareness",
              "Historical fix memory",
              "Migration/version context",
            ].map((item) => (
              <Panel key={item} className="p-3 text-sm text-zinc-300">
                {item}
              </Panel>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Panel className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <GraphIcon className="size-4 text-[#E7473C]" />
                Repository topology
              </div>
              <Badge>context graph</Badge>
            </div>
            <div className="terminal-grid grid gap-4 p-5">
              {repositoryNodes.map((row, rowIndex) => (
                <div key={rowIndex} className="grid gap-3 sm:grid-cols-4">
                  {row.map((node, index) => (
                    <div
                      key={node}
                      className="relative rounded-md border border-white/[0.08] bg-black/35 p-3 text-sm text-zinc-300"
                    >
                      <span className="absolute -left-1.5 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#E7473C]/75" />
                      <span className="font-mono text-[11px] text-zinc-600">
                        n{rowIndex + 1}.{index + 1}
                      </span>
                      <div className="mt-2">{node}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid border-t border-white/[0.08] md:grid-cols-3">
              {[
                ["matching confidence", "94%"],
                ["related PRs", "12"],
                ["suspected files", "7"],
              ].map(([label, value]) => (
                <div key={label} className="border-white/[0.08] p-4 md:border-r md:last:border-r-0">
                  <div className="font-mono text-2xl font-extrabold text-white">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="mt-4 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
              <TerminalIcon className="size-4 text-[#E7473C]" />
              code intelligence
            </div>
            <pre className="mt-4 overflow-hidden font-mono text-xs leading-6 text-zinc-400">
              {`match.issue -> PR#2190 -> files/auth/session.ts
release.delta -> v5.3.8..v5.4.1
owner.route -> platform-runtime
qualification -> actionable regression`}
            </pre>
          </Panel>
        </Reveal>
      </div>
    </SectionShell>
  );
}
