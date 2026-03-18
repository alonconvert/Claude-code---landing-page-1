"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";
import { submitLead } from "@/app/actions/submit-lead";

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
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  return (
    <section id="lead-form" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            בואו <span className="text-primary">נדבר</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            השאירו פרטים ואחזור אליכם תוך שעות ספורות עם הצעה מותאמת
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="max-w-md mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">נשלח בהצלחה!</h3>
                    <p className="text-muted-foreground">
                      אחזור אליכם בהקדם
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setStatus("idle")}
                      className="mt-4"
                    >
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
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">שם מלא</Label>
                      <Input
                        id="name"
                        placeholder="ישראל ישראלי"
                        {...register("name")}
                        className="bg-background/50"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">טלפון</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0501234567"
                        dir="ltr"
                        className="text-start bg-background/50"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-destructive text-sm text-center"
                      >
                        {errorMessage}
                      </motion.p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg font-bold py-6 shadow-lg shadow-primary/25"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        "שלחו לי הצעה"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
