"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const clicking = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    // Inject style to hide native cursor everywhere
    const style = document.createElement("style");
    style.id = "hide-cursor";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      const el = e.target as HTMLElement;
      hovering.current = !!el.closest(
        "a, button, [role='button'], input, textarea, label, [data-magnetic]"
      );
    };

    const onDown = () => { clicking.current = true; };
    const onUp = () => { clicking.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Animation loop — no React re-renders, pure DOM updates
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Dot follows fast
      dotPos.current.x = lerp(dotPos.current.x, pos.current.x, 0.35);
      dotPos.current.y = lerp(dotPos.current.y, pos.current.y, 0.35);

      // Ring follows slower
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);

      if (dotRef.current) {
        const size = clicking.current ? 6 : 8;
        const color = hovering.current ? "var(--gold)" : "oklch(0.64 0.29 294)";
        dotRef.current.style.transform = `translate(${dotPos.current.x - size / 2}px, ${dotPos.current.y - size / 2}px)`;
        dotRef.current.style.width = `${size}px`;
        dotRef.current.style.height = `${size}px`;
        dotRef.current.style.background = color;
      }

      if (ringRef.current) {
        const size = hovering.current ? 48 : clicking.current ? 28 : 36;
        const borderColor = hovering.current
          ? "oklch(0.83 0.16 85 / 0.6)"
          : "oklch(0.64 0.29 294 / 0.5)";
        const bg = hovering.current ? "oklch(0.83 0.16 85 / 0.06)" : "transparent";
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = borderColor;
        ringRef.current.style.background = bg;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      style.remove();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "oklch(0.64 0.29 294)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.15s, height 0.15s, background 0.2s",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid oklch(0.64 0.29 294 / 0.5)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
