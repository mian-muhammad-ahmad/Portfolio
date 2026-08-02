import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 font-mono text-[13px] text-teal mb-3.5 tracking-wide">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(28px,4vw,38px)] font-semibold leading-tight mb-3">{title}</h2>
      {description && <p className="text-muted text-base">{description}</p>}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-mono text-[12.5px] px-3.5 py-[7px] rounded-full border border-edge text-muted bg-panel2 ${className}`}
    >
      {children}
    </span>
  );
}

export function Divider() {
  return (
    <div className="max-w-content mx-auto px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-edge to-transparent" />
    </div>
  );
}
