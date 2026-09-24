import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type BrandLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function BrandLogo({ className, variant = "dark" }: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      aria-label="Comainter home"
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight transition group",
        isDark ? "text-white" : "text-black",
        className,
      )}
    >
      <span
        className={cn(
          "relative flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-lg border",
          isDark
            ? "border-white/15 bg-white/5 text-white shadow-inner"
            : "border-zinc-300 bg-zinc-900 text-white shadow-sm",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5 text-emerald-400 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight text-white flex items-center gap-1.5">
        Comainter
        <span className="hidden sm:inline-block rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-mono font-medium text-emerald-400 tracking-wider">
          INFRA
        </span>
      </span>
    </Link>
  );
}
