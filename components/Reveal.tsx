"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
  once?: boolean;
}

/**
 * Subtle scroll-in reveal. Fully disabled when the user prefers reduced motion,
 * in which case children render immediately with no transition.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const classes = ["reveal", className].filter(Boolean).join(" ");

  if (reduceMotion) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
