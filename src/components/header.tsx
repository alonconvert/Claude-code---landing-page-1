"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "תוצאות", href: "#results" },
  { label: "עבודות", href: "#showcase" },
  { label: "עלינו", href: "#about" },
  { label: "צור קשר", href: "#lead-form" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/30"
            : "bg-transparent"
        }`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 select-none group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Icon mark */}
            <div className="relative w-7 h-7 flex-shrink-0">
              <motion.div
                className="absolute inset-0 rounded-md bg-primary blur-md"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-sm leading-none">C</span>
              </div>
            </div>

            {/* Wordmark */}
            <div className="flex items-baseline gap-0.5">
              <span className="font-black text-base text-foreground tracking-tight">
                Coverty
              </span>
              <span
                className="text-xs font-bold text-primary ms-0.5"
                style={{ letterSpacing: "0.05em" }}
              >
                AI
              </span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer font-medium"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                size="sm"
                onClick={() => handleNav("#lead-form")}
                className="font-bold text-sm px-5 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-shadow"
              >
                קבל הצעה ←
              </Button>
            </motion.div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="תפריט"
            >
              <div className="flex flex-col gap-[5px] w-5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  className="block h-[1.5px] w-5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 inset-x-4 z-40 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10 md:hidden overflow-hidden"
          >
            <nav className="p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-start px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-colors duration-150 cursor-pointer font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-border/30 mt-1 pt-3 pb-1 px-1">
                <Button className="w-full font-bold" onClick={() => handleNav("#lead-form")}>
                  קבל הצעה ←
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
