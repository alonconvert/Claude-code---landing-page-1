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
                <svg width="16" height="16" viewBox="0 0 200 200" fill="none">
                  <g transform="translate(0, 200) scale(0.015625, -0.015625)" fill="white" stroke="none">
                    <path d="M2615 9908 c-34 -37 -36 -41 -21 -61 9 -12 47 -67 84 -122 37 -55 80 -117 95 -136 15 -20 27 -41 27 -46 0 -6 7 -16 16 -24 8 -7 36 -44 62 -82 89 -134 97 -145 134 -198 21 -30 58 -83 83 -119 42 -61 66 -95 150 -215 53 -75 106 -152 145 -210 19 -29 52 -77 73 -106 177 -250 228 -323 308 -439 21 -30 52 -73 68 -95 17 -22 43 -58 58 -80 15 -22 45 -63 65 -91 21 -28 38 -55 38 -61 0 -5 9 -18 21 -29 12 -10 28 -32 37 -49 8 -16 28 -46 44 -65 28 -35 90 -121 158 -219 19 -28 60 -85 91 -128 30 -43 88 -125 127 -183 106 -154 255 -368 296 -425 93 -128 112 -156 129 -182 9 -15 37 -55 61 -88 53 -72 191 -270 226 -324 14 -22 55 -79 92 -128 37 -48 84 -112 105 -141 21 -29 47 -65 59 -80 66 -85 134 -197 140 -229 9 -50 -12 -204 -47 -342 -16 -63 -36 -147 -45 -188 -8 -40 -24 -100 -34 -134 -11 -33 -25 -91 -31 -127 -6 -37 -24 -116 -40 -177 -15 -60 -40 -159 -54 -220 -14 -60 -34 -146 -45 -190 -11 -44 -36 -147 -55 -230 -93 -407 -119 -517 -140 -595 -13 -47 -29 -114 -35 -150 -6 -36 -26 -121 -44 -190 -44 -164 -83 -321 -111 -446 -12 -56 -31 -132 -43 -170 -11 -38 -27 -105 -36 -149 -8 -44 -27 -118 -42 -165 -14 -47 -35 -123 -45 -170 -10 -47 -21 -94 -24 -105 -10 -37 9 -51 41 -30 26 17 184 154 246 214 108 104 179 167 243 216 46 35 205 164 221 179 7 6 36 29 65 51 135 103 127 60 139 662 6 279 13 518 15 529 5 25 76 96 114 116 14 7 28 16 31 19 3 4 31 23 64 44 32 20 68 45 80 55 29 26 144 108 251 180 28 19 52 37 55 40 3 3 79 57 169 120 90 63 184 130 210 148 25 17 69 48 96 67 187 130 251 176 261 184 6 5 58 41 115 81 172 118 202 139 259 181 30 21 73 51 95 66 22 15 50 36 63 47 12 11 37 29 56 40 63 40 299 205 411 288 17 13 57 42 90 66 82 60 110 97 124 163 7 31 21 80 32 109 11 29 29 90 39 134 11 45 33 121 50 169 16 49 30 97 30 108 0 10 13 60 29 111 17 51 38 127 47 168 9 41 25 94 35 117 10 23 25 78 34 120 9 43 25 105 37 137 11 33 33 105 49 160 50 182 79 280 104 356 13 41 31 102 38 135 8 33 28 103 45 155 17 52 36 113 41 135 11 42 62 92 186 180 31 22 76 56 100 75 24 19 72 56 107 81 81 59 209 155 262 197 101 79 247 176 316 208 30 14 80 38 110 54 30 15 66 31 80 35 14 4 50 19 80 33 30 13 100 45 155 69 55 25 137 63 182 84 45 21 85 39 90 39 4 0 40 15 78 34 150 75 212 103 268 120 66 21 63 15 37 66 -15 29 -27 40 -43 40 -39 0 -181 -28 -227 -45 -25 -9 -90 -25 -145 -35 -55 -10 -149 -29 -210 -44 -155 -37 -424 -94 -530 -112 -92 -16 -155 -16 -710 2 -254 9 -240 16 -545 -281 -85 -83 -179 -174 -208 -201 -30 -27 -103 -97 -163 -155 -337 -328 -391 -372 -520 -419 -46 -17 -109 -41 -139 -52 -104 -40 -188 -32 -306 28 -212 109 -334 173 -447 235 -260 140 -624 327 -1362 699 -572 287 -924 467 -940 480 -14 11 -332 178 -755 396 -14 7 -45 22 -70 33 -25 11 -61 29 -80 40 -19 11 -80 41 -135 66 -55 25 -111 53 -125 61 -14 8 -45 24 -70 34 -25 11 -56 27 -70 35 -14 9 -61 34 -105 57 -44 22 -116 59 -160 82 -44 22 -101 50 -127 63 l-47 21 -36 -40z"/>
                  </g>
                </svg>
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
