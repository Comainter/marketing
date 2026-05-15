import { DiscordIcon, GitHubIcon, ShieldIcon, SlackIcon } from "@/components/icons/icons";
import { Reveal } from "@/components/motion/reveal";
import { Badge, Panel, SectionHeader, SectionShell } from "@/components/ui/panel";
import { trustItems } from "@/data/marketing";

const icons = [GitHubIcon, SlackIcon, DiscordIcon, ShieldIcon];

export function TrustSection() {
  return (
    <SectionShell id="trust">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            eyebrow="Enterprise trust"
            title="Confidence-aware escalation with a complete audit trail."
            description="Integrations are treated as operational control points. Every escalation can preserve sources, confidence, validation steps, and human review decisions."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>human-in-the-loop</Badge>
            <Badge>audit history</Badge>
            <Badge>confidence routing</Badge>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {trustItems.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.05}>
                <Panel className="h-full p-5 transition duration-200 hover:border-white/15 hover:bg-white/[0.055]">
                  <Icon className="mb-8 size-5 text-[#E7473C]" />
                  <h3 className="text-base font-extrabold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
