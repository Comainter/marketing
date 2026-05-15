
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer (){
  return (
   <footer className="border-t border-white/[0.08] bg-[#0d1117]">
  <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
    <div>
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" height={150} width={450} alt="logo"/>
        </Link>
      </div>

     
    </div>

    <div>
      <h3 className="text-sm font-semibold text-white">
        Product
      </h3>

      <div className="mt-5 space-y-3 text-sm text-zinc-400">
        <Link
          href="/pricing"
          className="block transition-colors hover:text-white"
        >
          Pricing
        </Link>

        <Link
          href="/#issue-flow"
          className="block transition-colors hover:text-white"
        >
          Issue qualification
        </Link>

        <Link
          href="/#analytics"
          className="block transition-colors hover:text-white"
        >
          Workflow intelligence
        </Link>

        <Link
          href="/#early-access"
          className="block transition-colors hover:text-white"
        >
          Early access
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-white">
        Resources
      </h3>

      <div className="mt-5 space-y-3 text-sm text-zinc-400">
        <Link
          href="/docs"
          className="block transition-colors hover:text-white"
        >
          Documentation
        </Link>

        <Link
          href="/faq"
          className="block transition-colors hover:text-white"
        >
          FAQ
        </Link>

        <Link
          href="/security"
          className="block transition-colors hover:text-white"
        >
          Security
        </Link>

        <Link
          href="/privacy"
          className="block transition-colors hover:text-white"
        >
          Privacy
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold text-white">
        Contact
      </h3>

      <div className="mt-5 space-y-3 text-sm text-zinc-400">
        <Link
          href="mailto:Support@comainter.com"
          className="block transition-colors hover:text-white"
        >
          support@comainter.com
        </Link>
        <a
          href="https://x.com"
          className="block transition-colors hover:text-white"
        >
          X / Twitter
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-white/[0.06]">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        © 2026 Comainter.
      </div>

      <div className="flex items-center gap-5">
        <a
          href="/terms"
          className="transition-colors hover:text-white"
        >
          Terms
        </a>

        <a
          href="/privacy"
          className="transition-colors hover:text-white"
        >
          Privacy
        </a>

        <a
          href="/security"
          className="transition-colors hover:text-white"
        >
          Security
        </a>
      </div>
    </div>
  </div>
</footer>
  )
}
