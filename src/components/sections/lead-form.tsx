"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/animated-section";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";
import { submitLead } from "@/app/actions/submit-lead";

function fireConfetti() {
  const colors = ["#7c3aed", "#a855f7", "#d4af37", "#c084fc", "#ffffff"];
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors,
    scalar: 1.2,
  });
  setTimeout(() => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.55, x: 0.3 },
      colors,
    });
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.55, x: 0.7 },
      colors,
    });
  }, 300);
}

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormValues) => {
    setStatus("loading");
    setErrorMessage("");
    const result = await submitLead(data);
    if (result.success) {
      setStatus("success");
      reset();
      fireConfetti();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  return (
    <section
      id="lead-form"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 100%, oklch(0.64 0.29 294 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 border-t border-border/40" />

      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              בואו נדבר
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — headline */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <h2
                className="font-black leading-tight tracking-tight text-foreground"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                מוכנים לדף
                <br />
                <span className="text-primary">שממיר באמת?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                השאירו שם ומספר. אחזור אליכם תוך שעות ספורות עם הצעה מותאמת
                לעסק שלכם.
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["#7c3aed", "#5b21b6", "#4c1d95"].map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background"
                      style={{ background: bg }}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-bold">+30</span> עסקים כבר עובדים איתי
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.15}>
            <div
              className="rounded-2xl border border-border/50 p-8 md:p-10"
              style={{ background: "oklch(0.09 0.022 292 / 0.8)", backdropFilter: "blur(12px)" }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-5"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.64 0.29 294 / 0.15)" }}
                      animate={{ scale: [0.8, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold">נשלח בהצלחה!</h3>
                    <p className="text-muted-foreground text-sm">אחזור אליכם בהקדם</p>
                    <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
                      שליחה נוספת
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Name field */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
                        שם מלא
                      </label>
                      <Input
                        placeholder="ישראל ישראלי"
                        {...register("name")}
                        className="h-12 bg-background/40 border-border/50 focus:border-primary/60 text-base transition-colors"
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone field */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground" style={{ letterSpacing: "0.1em" }}>
                        טלפון
                      </label>
                      <Input
                        type="tel"
                        placeholder="0501234567"
                        dir="ltr"
                        {...register("phone")}
                        className="h-12 bg-background/40 border-border/50 focus:border-primary/60 text-base text-start transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs">{errors.phone.message}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-destructive text-sm text-center"
                      >
                        {errorMessage}
                      </motion.p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow mt-2"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        "שלחו לי הצעה ←"
                      )}
                    </Button>

                    <p className="text-center text-muted-foreground/50 text-xs pt-1">
                      ללא התחייבות · חוזרים תוך 24 שעות
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
