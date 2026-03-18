"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

const steps = [
  {
    number: "01",
    title: "שיחת אפיון",
    description:
      "שיחה קצרה של 20 דקות בה אני מבין את העסק שלך, קהל היעד, המתחרים, ומה הלקוח הפוטנציאלי שלך צריך לשמוע כדי לפעול.",
    duration: "20 דקות",
  },
  {
    number: "02",
    title: "עיצוב ופיתוח",
    description:
      "בונה את הדף מאפס — עיצוב, קוד, אנימציות, ואופטימיזציה למובייל. כל אלמנט מחושב להמרה מקסימלית.",
    duration: "3–5 ימים",
  },
  {
    number: "03",
    title: "השקה ותוצאות",
    description:
      "הדף עולה לאוויר ומחובר לקמפיין. עוקבים יחד אחרי המספרים ומשפרים בזמן אמת לפי הנתונים.",
    duration: "תוצאות תוך 48ש׳",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="process" className="py-28 md:py-36 bg-card/10">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              איך זה עובד
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            className="font-black leading-tight tracking-tight text-foreground mb-20 max-w-lg"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            מרגע הפנייה
            <br />
            <span className="text-primary">עד דף חי.</span>
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="absolute start-[1.75rem] top-0 bottom-0 w-px bg-border/30 hidden md:block overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 bg-primary"
              style={{ scaleY: lineScaleY, originY: 0, height: "100%" }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 pb-16 last:pb-0">
                  {/* Step indicator */}
                  <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                    <motion.div
                      className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                      style={{
                        borderColor: "oklch(0.64 0.29 294 / 0.4)",
                        background: "var(--background)",
                      }}
                      whileInView={{
                        borderColor: "oklch(0.64 0.29 294)",
                        background: "oklch(0.64 0.29 294 / 0.1)",
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    >
                      <span className="font-black text-sm text-primary" style={{ letterSpacing: "0.04em" }}>
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="font-bold text-xl text-foreground">{step.title}</h3>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-semibold shrink-0"
                        style={{
                          background: "oklch(0.64 0.29 294 / 0.1)",
                          color: "oklch(0.64 0.29 294)",
                          border: "1px solid oklch(0.64 0.29 294 / 0.2)",
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
