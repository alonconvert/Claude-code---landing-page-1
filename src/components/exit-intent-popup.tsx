"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered || dismissed) return;
      if (e.clientY <= 0) {
        triggered = true;
        setShow(true);
      }
    };

    // Wait 8s before enabling
    const t = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleCTA = () => {
    dismiss();
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9990] bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9991] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md rounded-2xl border border-border/50 p-8 overflow-hidden"
              style={{ background: "oklch(0.09 0.022 292)" }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.64 0.29 294 / 0.15) 0%, transparent 70%)",
                }}
              />

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 end-4 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative space-y-5">
                {/* Emoji */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "oklch(0.64 0.29 294 / 0.15)" }}
                >
                  ✋
                </div>

                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    רגע לפני שאתה הולך
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    בעלי עסקים שמשאירים פרטים עכשיו מקבלים אנליזה חינמית של הדף הנוכחי שלהם — מה עובד ומה פוגע בהמרות.
                  </p>
                </div>

                <div
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/30"
                  style={{ background: "oklch(0.64 0.29 294 / 0.07)" }}
                >
                  <span className="text-2xl">🎁</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">אנליזה חינמית</p>
                    <p className="text-xs text-muted-foreground">שווה 200₪ · ללא התחייבות</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Button onClick={handleCTA} className="w-full font-bold">
                    אני רוצה את האנליזה ←
                  </Button>
                  <button
                    onClick={dismiss}
                    className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors text-center"
                  >
                    לא תודה, אני אוותר
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
