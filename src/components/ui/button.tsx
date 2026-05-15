import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[#E7473C]/50 bg-[#E7473C] text-white shadow-[0_0_34px_rgba(231,71,60,0.18)] hover:border-[#E7473C] hover:bg-[#d83d33]",
  secondary:
    "border-[#E7473C]/24 bg-black/55 text-zinc-100 hover:border-[#E7473C]/55 hover:bg-[#E7473C]/[0.07] hover:text-white",
  ghost:
    "border-transparent bg-transparent text-zinc-300 hover:bg-[#E7473C]/[0.06] hover:text-white",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7473C]/70",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7473C]/70",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
