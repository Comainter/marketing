import { Reveal } from "@/components/motion/reveal";
import { PulseIcon, TerminalIcon } from "@/components/icons/icons";
import { Panel, SectionHeader, SectionShell } from "@/components/ui/panel";
import { problemMetrics } from "@/data/marketing";

const pains = [
  "Setup confusion",
  "Missing repro details",
  "Unsupported configurations",
  "Basic usage questions",
  "Version mismatch issues",
];

export function ProblemSection() {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Support load"
            title="Maintainers are spending engineering cycles on issue qualification."
            description="The costly part is not reading issues. It is proving whether each report is a real defect, a duplicate, an unsupported usage pattern, or missing enough runtime evidence to act on."
          />
        
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {problemMetrics.map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <Panel className="h-full p-5 transition duration-200 hover:border-white/15 hover:bg-white/[0.055]">
                <PulseIcon className="mb-8 size-5 text-[#E7473C]" />
                <div className="font-mono text-4xl font-extrabold tracking-tight text-white">{value}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{label}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
