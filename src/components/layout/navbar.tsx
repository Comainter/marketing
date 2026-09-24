"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons/icons";
import { BrandLogo } from "@/components/brand-logo";

const links = [
  ["Product", "#product"],
  ["Pipeline", "#pipeline"],
  ["Architecture", "#architecture"],
  ["Metrics", "#metrics"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 pointer-events-none sm:top-5 sm:px-6">
      <nav className="pointer-events-auto relative flex w-full max-w-5xl items-center justify-between rounded-full border border-white/15 bg-neutral-950/65 px-4 py-2.5 backdrop-blur-2xl shadow-2xl shadow-black/90 ring-1 ring-white/5 transition-all duration-300">
        <BrandLogo variant="dark" />

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="#pricing"
            className="hidden text-xs font-medium text-zinc-400 transition hover:text-white sm:block px-2.5 py-1"
          >
            Sign in
          </Link>
          <a
            href="#early-access"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 active:scale-95"
          >
            Request Access
            <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 md:hidden hover:text-white"
          >
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/15 bg-neutral-950/95 p-4 backdrop-blur-2xl shadow-2xl md:hidden">
            <div className="flex flex-col gap-2">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#early-access"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-white py-2 text-xs font-semibold text-black"
                >
                  Request Access
                  <ArrowRightIcon className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
