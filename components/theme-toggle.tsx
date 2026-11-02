"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`theme-toggle-skeleton w-9 h-9 rounded-lg border border-border/40 bg-surface/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn relative inline-flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 border focus:outline-none cursor-pointer ${
        isDark
          ? "bg-neutral-900/80 border-neutral-700/60 text-amber-300 hover:bg-neutral-800 hover:border-neutral-600 hover:text-amber-200 shadow-[0_0_12px_rgba(252,211,77,0.15)]"
          : "bg-neutral-100/90 border-neutral-300 text-neutral-800 hover:bg-white hover:border-neutral-400 hover:text-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          size={17}
          className={`transition-all duration-300 transform absolute ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`}
        />
        {/* Moon Icon */}
        <Moon
          size={17}
          className={`transition-all duration-300 transform absolute ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-blue-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
