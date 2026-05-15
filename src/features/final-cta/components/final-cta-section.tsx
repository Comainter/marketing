import { ArrowRightIcon } from "@/components/icons/icons";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Badge, Panel, SectionShell } from "@/components/ui/panel";

export function FinalCtaSection() {
  return (
    <SectionShell id="early-access" className="pb-24">
      <Reveal>
        <Panel className="overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge className="mb-5 border-[#E7473C]/24 bg-[#E7473C]/10 text-red-100">
                issue qualification infrastructure
              </Badge>
              <h2 className="max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
                Stop wasting engineering time on invalid issues.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Put repository-aware validation, operational memory, and maintainer workflow intelligence in front of every developer support channel.
              </p>
            </div>
            <ButtonLink href="https://app.comainter.com" className="w-full sm:w-auto">
              Get started
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>
        </Panel>
      </Reveal>
    </SectionShell>
  );
}
