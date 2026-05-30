"use client";

import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons/icons";
import { ButtonLink } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-white" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

      {/* Blur */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100 blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
 
 

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.7,
          }}
          className="
            mt-10
            max-w-5xl
            font-[family:var(--font-geist)]
            text-6xl
            font-semibold
            italic
            leading-[0.88]
            tracking-[-0.08em]
            text-zinc-950
            sm:text-7xl
            lg:text-[92px]
          "
        >
         Validate Before Review
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="
            mt-10
            max-w-2xl
            font-[family:var(--font-inter)]
            text-lg
            leading-8
            text-zinc-600
            sm:text-xl
          "
        >
         Comainter verifies whether issues are actionable and whether pull requests truly solve the problem while following repository standards, architecture, and project conventions.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mt-12 flex flex-col gap-3 sm:flex-row"
        >
          <ButtonLink
            href="#"
            className="group h-12 px-6 text-sm font-medium"
          >
            Get Started

            <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>

          <ButtonLink
            href="mailto:hello@comainter.com"
            variant="secondary"
            className="h-12 px-6 text-sm font-medium"
          >
            Contact
          </ButtonLink>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-8 text-sm text-zinc-500"
        >
          Code · Documentation · Pull Requests · Issues · Standards
        </motion.p>
      </div>
    </section>
  );
}