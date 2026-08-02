import { ArrowUpRight, Download, Mail, Activity } from "lucide-react";
import NeuralCanvas from "./NeuralCanvas";
import { heroStats } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent,rgb(var(--bg))_85%)]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[13px] text-teal mb-[1.125rem] px-3 py-1.5 border border-edge rounded-full bg-panel2">
            <span className="w-[7px] h-[7px] rounded-full bg-teal animate-pulseRing" />
            Open to freelance &amp; full-time roles
          </span>

          <h1 className="font-display text-[clamp(38px,5.4vw,60px)] font-semibold leading-[1.1] mb-4">
            Muhammad Ahmad
            <span className="block text-muted text-[0.5em] font-medium font-body mt-2.5 tracking-normal">
              AI/ML Engineer · Python Developer · Model Training Specialist
            </span>
          </h1>

          <p className="text-[clamp(16px,2vw,19px)] text-muted max-w-[520px] mb-9">
            Building <strong className="text-ink font-semibold">intelligent systems</strong> that learn, scale, and
            solve real problems — from raw data to production-ready APIs.
          </p>

          <div className="flex gap-3.5 flex-wrap mb-11">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] grad-bg text-[#04141a] shadow-glow transition-transform hover:-translate-y-1"
            >
              <ArrowUpRight size={16} />
              View Projects
            </a>
            <a
              href="/Muhammad_Ahmad_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] border border-edge bg-panel2 text-ink transition-all hover:-translate-y-1 hover:border-teal hover:text-teal"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
                href="/Muhammad_Ahmad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] grad-bg text-[#04141a] shadow-glow transition-transform hover:-translate-y-1"
              >
                <ArrowUpRight size={16} />
                View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] border border-edge bg-panel2 text-ink transition-all hover:-translate-y-1 hover:border-teal hover:text-teal"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="flex gap-8 flex-wrap">
            {heroStats.map((s) => (
              <div key={s.label} className="border-l-2 border-edge pl-3.5">
                <div className="font-display text-2xl font-bold">{s.num}</div>
                <div className="text-[12.5px] text-dim font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center order-first lg:order-none">
          <div className="relative w-[min(360px,90%)] lg:w-[360px] aspect-square rounded-[28px] bg-panel border border-edge overflow-hidden shadow-panel">
            <Image
              src="/profile.jpg"
              alt="Muhammad Ahmad"
              width={360}
              height={360}
              priority
              className="w-full h-full object-cover rounded-[28px]"
            />
            <div className="absolute -bottom-4 -left-4 bg-panel border border-edge rounded-2xl px-4 py-3 shadow-panel flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-lg grad-soft flex items-center justify-center text-teal">
                <Activity size={18} />
              </div>
              <div>
                <div className="text-xs text-dim font-mono">status</div>
                <div className="text-[13.5px] font-semibold">Training models...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim font-mono text-[11px] z-10">
        <div className="w-[22px] h-[34px] border-[1.5px] border-edge rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[3px] h-[6px] bg-teal rounded-sm animate-scrollDot" />
        </div>
        SCROLL
      </div>
    </section>
  );
}

function AvatarIllustration() {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration representing Muhammad Ahmad, AI/ML Engineer"
      className="w-full h-full block"
    >
      <defs>
        <linearGradient id="avgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4c8dff" />
          <stop offset="1" stopColor="#2fe0c4" />
        </linearGradient>
        <radialGradient id="avglow" cx="50%" cy="35%" r="65%">
          <stop offset="0" stopColor="#8b7cff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#8b7cff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="360" height="360" fill="rgb(var(--panel))" />
      <rect width="360" height="360" fill="url(#avglow)" />
      <g stroke="url(#avgrad)" strokeWidth="1.2" opacity="0.55" fill="none">
        <path d="M40 260 Q180 180 320 260" />
        <path d="M40 230 Q180 150 320 230" />
        <path d="M60 300 L300 300" />
      </g>
      <circle cx="180" cy="150" r="72" fill="url(#avgrad)" opacity="0.15" />
      <circle cx="180" cy="150" r="58" fill="none" stroke="url(#avgrad)" strokeWidth="2" />
      <circle cx="180" cy="150" r="3.5" fill="#2fe0c4" />
      <path
        d="M180 92v-14M180 208v14M122 150h-14M238 150h14M138 108l-10-10M222 108l10-10M138 192l-10 10M222 192l10 10"
        stroke="url(#avgrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill="#2fe0c4">
        <circle cx="180" cy="92" r="4" />
        <circle cx="180" cy="208" r="4" />
        <circle cx="122" cy="150" r="4" />
        <circle cx="238" cy="150" r="4" />
        <circle cx="138" cy="108" r="3" />
        <circle cx="222" cy="108" r="3" />
        <circle cx="138" cy="192" r="3" />
        <circle cx="222" cy="192" r="3" />
      </g>
      <text
        x="180"
        y="156"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="#eaeef4"
      >
        MA
      </text>
    </svg>
  );
}
