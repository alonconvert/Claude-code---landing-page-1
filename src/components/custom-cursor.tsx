"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 280 };
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 500 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 500 });
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const enter = () => setIsVisible(true);
    const leave = () => setIsVisible(false);
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isLink = el.closest("a, button, [role='button'], input, textarea, label");
      setIsHovering(!!isLink);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    document.documentElement.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.documentElement.style.cursor = "";
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot — fast */}
      <motion.div
        className="fixed pointer-events-none z-[99999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          background: isHovering ? "var(--gold)" : "oklch(0.64 0.29 294)",
          transition: "width 0.15s, height 0.15s, background 0.2s",
        }}
      />

      {/* Ring — slow */}
      <motion.div
        className="fixed pointer-events-none z-[99998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 44 : isClicking ? 28 : 36,
          height: isHovering ? 44 : isClicking ? 28 : 36,
          borderColor: isHovering
            ? "oklch(0.83 0.16 85 / 0.6)"
            : "oklch(0.64 0.29 294 / 0.5)",
          background: isHovering ? "oklch(0.83 0.16 85 / 0.06)" : "transparent",
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
}
