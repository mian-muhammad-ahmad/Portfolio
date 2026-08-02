"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const NODE_COUNT = 46;

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let frame = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = canvas!.width = parent.offsetWidth;
      height = canvas!.height = parent.offsetHeight;
    }

    function initNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function cssVar(name: string) {
      return getComputedStyle(document.body).getPropertyValue(name).trim();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const lineColor = `rgb(${cssVar("--border") || "32 42 56"})`;
      const dotColor = `rgb(${cssVar("--teal") || "47 224 196"})`;
      const maxDist = Math.min(180, width * 0.16);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduceMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = (1 - dist / maxDist) * 0.5;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.55;
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      if (!reduceMotion) {
        frame = requestAnimationFrame(draw);
      }
    }

    resize();
    initNodes();
    draw();

    const onResize = () => {
      resize();
      initNodes();
      if (reduceMotion) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="w-full h-full block opacity-75" />;
}
