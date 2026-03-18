"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

const marqueeItems = [
  "דפי נחיתה", "×2 המרות", "989₪", "יוצא גוגל",
  "עלות ליד נמוכה", "עיצוב פרימיום", "תוצאות מוכחות",
  "דפי נחיתה", "×2 המרות", "989₪", "יוצא גוגל",
  "עלות ליד נמוכה", "עיצוב פרימיום", "תוצאות מוכחות",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.64 0.29 294 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.64 0.29 294 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Center radial fade over grid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, var(--background) 100%)",
        }}
      />

      {/* Main violet glow */}
      <motion.div
        className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, oklch(0.64 0.29 294 / 0.13) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary glow — offset */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          insetInlineStart: "20%",
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, oklch(0.64 0.29 294 / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 text-center">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span
              className="text-xs text-primary/80 font-semibold"
              style={{ letterSpacing: "0.12em" }}
            >
              יוצא גוגל · מומחה שיווק דיגיטלי
            </span>
          </div>
        </motion.div>

        {/* Headline — poster style */}
        <div className="space-y-2">
          <motion.h1
            className="font-black leading-[0.88] tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            הדף נחיתה שלך
          </motion.h1>

          <motion.h1
            className="font-black leading-[0.88] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 11vw, 8.5rem)",
              color: "oklch(0.97 0.004 292 / 0.3)",
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            לא ממיר?
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            className="my-7 mx-auto h-px max-w-xs"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.64 0.29 294 / 0.6), transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
          />

          <motion.h1
            className="font-black leading-[0.88] tracking-tight text-primary"
            style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            בוא נשנה את זה.
          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mt-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          דפי נחיתה מעוצבים ומוכווני המרות שמכפילים תוצאות קמפיינים ממומנים —
          ומורידים עלות הליד בחצי.
        </motion.p>

        {/* Price + CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <SmoothScrollLink
              targetId="lead-form"
              className="text-base px-8 py-5 rounded-xl font-bold shadow-xl shadow-primary/25 hover:shadow-primary/45 transition-shadow"
            >
              רוצה דף שממיר ←
            </SmoothScrollLink>
          </motion.div>

          {/* Price badge */}
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-5xl font-black"
              style={{ color: "var(--gold)" }}
            >
              989
            </span>
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--gold)" }}
            >
              ₪
            </span>
            <span className="text-sm text-muted-foreground ms-1">בלבד</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/40 overflow-hidden h-10 flex items-center bg-background/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4 text-xs text-muted-foreground/50 font-medium" style={{ letterSpacing: "0.08em" }}>
              {item}
              <span className="text-primary/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
