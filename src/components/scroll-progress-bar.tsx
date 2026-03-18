"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(to right, oklch(0.64 0.29 294), oklch(0.83 0.16 85))",
      }}
    />
  );
}
