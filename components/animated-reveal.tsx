"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({
  children,
  delay = 0,
  className,
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
