"use client";

import React, { useEffect, useState, useRef } from "react";

export function FancyCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position storage for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices that have a precise mouse pointer
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Direct placement for zero-lag dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer, .interactive, summary, video"
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Smooth animation loop for trailing ring
    const render = () => {
      // Lerp (Linear interpolation) factor: 0.18 for smooth, snappy following
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  return (
    <div
      className={`fancy-cursor-container fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className={`fancy-cursor-dot fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isClicking
            ? "scale-50 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]"
            : isHovered
            ? "scale-150 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            : "bg-blue-600 dark:bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.6)]"
        }`}
      />

      {/* Trailing Ambient Ring */}
      <div
        ref={ringRef}
        className={`fancy-cursor-ring fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none border transition-[width,height,margin,border-color,background-color] duration-200 ease-out ${
          isClicking
            ? "w-6 h-6 -ml-3 -mt-3 border-blue-500/80 bg-blue-500/20"
            : isHovered
            ? "w-12 h-12 -ml-6 -mt-6 border-blue-500/70 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,0.25)] backdrop-blur-[1px]"
            : "border-blue-500/35 dark:border-blue-400/40 bg-transparent shadow-[0_0_12px_rgba(37,99,235,0.08)]"
        }`}
      />
    </div>
  );
}
