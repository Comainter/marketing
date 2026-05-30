import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/icons";

const links = [
  ["GitHub", "#github"],
  ["Slack", "#slack"],
  ["Docs", "#docs"],
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-black">
          <span className="flex size-7 items-center justify-center rounded-md border border-black bg-black text-[11px] font-bold text-white">
            C
          </span>
          Comainter
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </div>
        <ButtonLink href="#demo" variant="secondary" className="h-9 px-3">
          See demo
          <ArrowRightIcon className="size-4" />
        </ButtonLink>
      </nav>
    </header>
  );
}
