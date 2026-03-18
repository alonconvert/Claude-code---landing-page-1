"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setPosition(pct);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              השוואה
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            className="font-black leading-tight tracking-tight text-foreground mb-16 max-w-lg"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            דף רגיל
            <br />
            <span className="text-primary">vs. דף שממיר.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            ref={containerRef}
            className="relative aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border/40 select-none cursor-col-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* BEFORE (right side) */}
            <div className="absolute inset-0" style={{ background: "oklch(0.12 0 0)" }}>
              <div className="absolute inset-0 flex flex-col p-6 gap-3">
                <div className="h-4 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/6" />
                <div className="flex-1 rounded bg-white/5 mt-2" />
                <div className="h-10 w-1/3 rounded bg-white/8" />
                <div className="text-xs text-white/20 font-mono">דף נחיתה רגיל · 4% המרה</div>
              </div>
              <div className="absolute top-3 end-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white/40">
                לפני
              </div>
            </div>

            {/* AFTER (left side — clips over before) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div
                className="absolute inset-0 flex flex-col p-6 gap-3"
                style={{
                  width: containerRef.current
                    ? containerRef.current.offsetWidth
                    : "100%",
                  background: "oklch(0.08 0.02 292)",
                }}
              >
                {/* Gradient top */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.64 0.29 294 / 0.18) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="h-4 w-3/4 rounded"
                  style={{ background: "oklch(0.64 0.29 294 / 0.4)" }}
                />
                <div className="h-3 w-1/2 rounded bg-white/15" />
                <div
                  className="flex-1 rounded mt-2"
                  style={{ background: "oklch(0.64 0.29 294 / 0.08)" }}
                />
                <div
                  className="h-10 w-1/3 rounded"
                  style={{ background: "oklch(0.64 0.29 294 / 0.6)" }}
                />
                <div className="text-xs font-mono" style={{ color: "var(--gold)" }}>
                  Coverty AI · 22% המרה
                </div>
              </div>
              <div
                className="absolute top-3 end-3 px-2.5 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "oklch(0.64 0.29 294 / 0.2)",
                  color: "oklch(0.64 0.29 294)",
                  border: "1px solid oklch(0.64 0.29 294 / 0.3)",
                }}
              >
                אחרי
              </div>
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-0.5 h-full bg-white/30" />
              <motion.div
                className="absolute w-10 h-10 rounded-full border-2 border-white/60 bg-background flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.15 }}
                style={{ cursor: "col-resize" }}
              >
                <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                </svg>
              </motion.div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground/40 mt-4">
            גרור את ה-slider לשמאל ולימין
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
