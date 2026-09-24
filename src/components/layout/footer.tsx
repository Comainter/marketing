import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <BrandLogo variant="dark" />
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            Issue intelligence for modern developer ecosystems.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-3 lg:text-right">
          <Link href="/#features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="/#pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <a
            href="mailto:early-access@comainter.com"
            className="transition hover:text-white"
          >
            Contact
          </a>
          <p className="text-zinc-600 sm:col-span-3">
            Copyright 2026 Comainter.
          </p>
        </div>
      </div>
    </footer>
  );
}
