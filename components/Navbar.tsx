"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, sectionIds } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center bg-bg/80 backdrop-blur-lg backdrop-saturate-150 border-b border-edgesoft transition-colors">
      <div className="w-full max-w-content mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg flex items-center gap-2.5">
          <span className="w-[9px] h-[9px] rounded-full grad-bg shadow-[0_0_12px_rgb(var(--teal))]" />
          Muhammad&nbsp;Ahmad
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-0.5">
          {nav.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm px-3.5 py-2 rounded-full transition-colors ${
                  isActive ? "text-ink bg-panel2" : "text-muted hover:text-ink hover:bg-panel2"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-3.5 right-3.5 bottom-[3px] h-[2px] rounded grad-bg" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex text-[13.5px] font-semibold px-[18px] py-[9px] rounded-full grad-bg text-[#04141a] shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden w-[38px] h-[38px] rounded-lg border border-edge bg-panel2 flex items-center justify-center text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-[72px] left-0 right-0 bg-panel border-b border-edge px-6 pb-5 pt-3 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block py-3 text-[15px] text-muted border-b border-edgesoft last:border-none"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
