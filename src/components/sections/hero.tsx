"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      {/* Floating orbs — more intense */}
      <motion.div
        className="absolute top-1/4 start-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            יוצא גוגל | מומחה שיווק דיגיטלי
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          הקמפיין שלך לא ממיר?
          <br />
          <motion.span
            className="text-primary inline-block"
            animate={{
              textShadow: [
                "0 0 20px oklch(0.65 0.25 300 / 0.3)",
                "0 0 40px oklch(0.65 0.25 300 / 0.6)",
                "0 0 20px oklch(0.65 0.25 300 / 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            בוא נשנה את זה.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          דפי נחיתה מעוצבים ומוכווני המרות שמכפילים את התוצאות של הקמפיינים
          הממומנים שלך — ומורידים את עלות הליד בחצי.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <SmoothScrollLink
              targetId="lead-form"
              className="text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            >
              רוצה דף שממיר ←
            </SmoothScrollLink>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-3xl font-black text-foreground">989₪</span>
            <span className="text-sm">בלבד</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
