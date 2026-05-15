import { Reveal } from "@/components/motion/reveal";
import { ShieldIcon } from "@/components/icons/icons";
import { Panel, SectionHeader, SectionShell } from "@/components/ui/panel";
import { comparison } from "@/data/marketing";

export function ComparisonSection() {
  return (
    <SectionShell>
       
      <Reveal>
        <SectionHeader
          eyebrow="Different by design"
          title="Not another assistant sitting beside the issue queue."
          description="Comainter is a qualification layer with repository context, operational memory, runtime awareness, and maintainer workflow intelligence."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {comparison.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <Panel className={index === 1 ? "h-full border-[#E7473C]/24 bg-[#E7473C]/[0.045] p-5" : "h-full p-5"}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-white">{group.title}</h3>
                <ShieldIcon className={index === 1 ? "size-5 text-[#E7473C]" : "size-5 text-zinc-500"} />
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/[0.07] bg-black/25 px-3 py-2 text-sm text-zinc-300">
                    <span className={index === 1 ? "size-1.5 rounded-full bg-[#E7473C]" : "size-1.5 rounded-full bg-zinc-600"} />
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
