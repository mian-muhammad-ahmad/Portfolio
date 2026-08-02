"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: "div";
};

/**
 * Wraps section content and fades/slides it in once scrolled into view.
 * Pass `stagger` for grids of cards so children animate in sequence.
 */
export default function Reveal({ children, className = "", stagger = false }: RevealProps) {
  const { ref, inView } = useInView(0.12);

  const base = stagger ? "stagger-init" : "reveal-init";
  const active = inView ? (stagger ? "stagger-in" : "reveal-in") : "";

  return (
    <div ref={ref} className={`${base} ${active} ${className}`}>
      {children}
    </div>
  );
}
