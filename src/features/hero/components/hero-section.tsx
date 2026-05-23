"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import {
  ArrowRightIcon,
  GraphIcon,
  ShieldIcon,
} from "@/components/icons/icons";
import { ButtonLink } from "@/components/ui/button";

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
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B0F17]">
      {/* BACKGROUND */}
      <div className="hero-physics">
        <div className="hero-room" aria-hidden="true">
          <div className="infinity-grid opacity-30" />
        </div>

        {backgroundPackets.map((packet, index) => (
          <span
            key={index}
            className="signal-packet opacity-50"
            style={packet as CSSProperties}
          />
        ))}
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,71,60,0.14),transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-32 lg:px-8">
        

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 text-center"
        >
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Reduce maintainer load
            <span className="mt-3 block bg-gradient-to-r from-[#E7473C] to-[#ff9f96] bg-clip-text text-transparent">
              with repository-aware AI
            </span>
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          Automatically answer developer questions, detect recurring setup and
          configuration issues, improve issue quality, and provide AI agents
          with repository-specific engineering context before maintainers waste
          time on repetitive work.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <ButtonLink href="#early-access" className="group">
            Get started
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>

          <ButtonLink href="#workflow" variant="secondary">
            View workflow
          </ButtonLink>
        </motion.div>

  
      </div>
    </section>
  );
}