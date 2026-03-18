"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration: 1.5, ease: "easeOut" });
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
    <span ref={ref} className="text-5xl md:text-6xl font-black text-primary">
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  {
    target: 2,
    prefix: "x",
    suffix: "",
    label: "שיעור המרה",
    description: "פי 2 מהממוצע בשוק",
  },
  {
    target: 50,
    prefix: "",
    suffix: "%",
    label: "חיסכון בעלות ליד",
    description: "חצי מחיר לכל ליד שנכנס",
  },
  {
    target: 989,
    prefix: "₪",
    suffix: "",
    label: "מחיר דף נחיתה",
    description: "מחיר שקוף, ללא עלויות נסתרות",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            למה הלקוחות שלי <span className="text-primary">מצליחים?</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            שילוב של ניסיון שיווקי מגוגל עם עיצוב ברמה הגבוהה ביותר
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.15}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                <CardContent className="pt-8 pb-8 text-center space-y-3">
                  <AnimatedNumber
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                  <h3 className="text-xl font-bold">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
