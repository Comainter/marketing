import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/[0.08] bg-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-[#E7473C]/20 bg-[#E7473C]/[0.055] px-2.5 py-1 text-xs font-bold text-red-100",
        className,
      )}
      {...props}
    />
  );
}

export function SectionShell({
  className,
  children,
  id,
}: HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#E7473C]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-zinc-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}
