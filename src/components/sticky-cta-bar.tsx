"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StickyCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 inset-x-0 z-40 md:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="mx-4 mb-4 p-4 rounded-2xl border border-border/50 backdrop-blur-xl flex items-center justify-between gap-4 shadow-2xl shadow-primary/20"
            style={{ background: "oklch(0.09 0.022 292 / 0.95)" }}
          >
            <div>
              <p className="text-sm font-bold text-foreground">דף נחיתה שממיר</p>
              <p className="text-xs text-muted-foreground">
                <span style={{ color: "var(--gold)" }} className="font-bold">989₪</span> · ללא התחייבות
              </p>
            </div>
            <Button onClick={handleClick} className="shrink-0 font-bold shadow-lg shadow-primary/25">
              קבל הצעה ←
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
