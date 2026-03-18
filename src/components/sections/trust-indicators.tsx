"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  gold = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  gold?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration: 1.8, ease: "easeOut" });
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <span
      ref={ref}
      className="block font-black leading-none tracking-tighter"
      style={{
        fontSize: "clamp(3.5rem, 8vw, 7rem)",
        color: gold ? "var(--gold)" : "var(--foreground)",
      }}
    >
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  {
    target: 2,
    prefix: "×",
    suffix: "",
    label: "שיעור המרה",
    sub: "לעומת הממוצע בשוק",
    gold: false,
  },
  {
    target: 50,
    prefix: "",
    suffix: "%",
    label: "חיסכון בעלות ליד",
    sub: "בכל ליד לעומת הממוצע",
    gold: false,
  },
  {
    target: 989,
    prefix: "₪",
    suffix: "",
    label: "מחיר שקוף",
    sub: "ללא עלויות נסתרות",
    gold: true,
  },
];

export function TrustIndicators() {
  return (
    <section className="py-0">
      {/* Top border line */}
      <div className="border-t border-border/40" />

      <div className="container mx-auto px-6">
        {/* Section label */}
        <AnimatedSection>
          <div className="pt-20 pb-12 flex items-center gap-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              תוצאות מוכחות
            </span>
          </div>
        </AnimatedSection>

        {/* Stats grid — editorial horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.12}>
              <div
                className={`py-10 ${
                  index < stats.length - 1
                    ? "md:border-e border-border/30 md:pe-12 md:me-0"
                    : ""
                } ${index > 0 ? "md:ps-12" : ""}`}
              >
                {/* Number */}
                <AnimatedNumber
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  gold={stat.gold}
                />

                {/* Thin line below number */}
                <motion.div
                  className="my-5 h-px w-12"
                  style={{ background: stat.gold ? "var(--gold)" : "var(--primary)" }}
                  initial={{ scaleX: 0, originX: 1 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
                />

                {/* Label */}
                <p className="text-foreground font-bold text-lg">{stat.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="border-b border-border/40" />
    </section>
  );
}
