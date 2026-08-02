"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="w-[38px] h-[38px] rounded-full border border-edge bg-panel2 text-muted flex items-center justify-center transition-all duration-300 hover:text-teal hover:rotate-[20deg]"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
