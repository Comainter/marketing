"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons/icons";
import { ButtonLink } from "@/components/ui/button";

const productSummary = [
  "Finds duplicate issues and repeated setup failures before maintainers waste review time.",
  "Detects possible version, dependency, or environment mismatch automatically.",
  "Requests missing logs, repro steps, and diagnostics before humans get involved.",
  "Routes high-signal issues to the correct maintainer with relevant repository context.",
];

const backgroundPackets = [
  {
    top: "12%",
    left: "8%",
    "--end-x": "26rem",
    "--end-y": "10rem",
    "--mid-x": "12rem",
    "--mid-y": "3rem",
    "--duration": "9s",
    "--delay": "-1s",
  },
  {
    top: "24%",
    left: "82%",
    "--end-x": "-24rem",
    "--end-y": "14rem",
    "--mid-x": "-10rem",
    "--mid-y": "4rem",
    "--duration": "11s",
    "--delay": "-5s",
  },
  {
    top: "58%",
    left: "6%",
    "--end-x": "22rem",
    "--end-y": "-8rem",
    "--mid-x": "10rem",
    "--mid-y": "2rem",
    "--duration": "10s",
    "--delay": "-2s",
  },
  {
    top: "70%",
    left: "90%",
    "--end-x": "-28rem",
    "--end-y": "-12rem",
    "--mid-x": "-12rem",
    "--mid-y": "-4rem",
    "--duration": "12s",
    "--delay": "-7s",
  },
];

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="hero-physics">
        <div className="hero-room" aria-hidden="true">
          <div className="infinity-grid" />
        </div>

        {backgroundPackets.map((packet, index) => (
          <span
            key={index}
            className="signal-packet"
            style={packet as CSSProperties}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-32 lg:px-8">
    

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl text-center"
        >
          <h1 className="text-balance text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Protect maintainers
            <span className="block text-[#E7473C]">
              Attention 
            </span>
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          Comainter helps open-source teams scale by resolving repetitive developer questions, detecting common configuration errors, validating issue quality, and ensuring maintainers focus only on real engineering problems.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink href="#early-access">
            Get started
            <ArrowRightIcon className="size-4" />
          </ButtonLink>

          <ButtonLink href="#workflow" variant="secondary">
            View Workflow
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}