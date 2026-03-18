"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: delay + wi * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {wi < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.3em" }} />
          )}
        </span>
      ))}
    </span>
  );
}
