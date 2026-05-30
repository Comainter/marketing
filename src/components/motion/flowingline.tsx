import { motion } from "motion/react";

type FlowingLineProps = {
  path: string;
  delay?: number;
};

export function FlowingLine({
  path,
  delay = 0,
}: FlowingLineProps) {
  return (
    <>
      <path
        d={path}
        fill="transparent"
        stroke="#e4e4e7"
        strokeWidth="2"
      />

      <motion.path
        d={path}
        fill="transparent"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: [0, 1],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    </>
  );
}