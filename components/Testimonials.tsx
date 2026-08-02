"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, Divider } from "./ui";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <>
      <section id="testimonials" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              center
              eyebrow="testimonials"
              title={
                <>
                  What people <span className="grad-text">say about working with me.</span>
                </>
              }
            />
          </Reveal>

          <Reveal className="relative max-w-[720px] mx-auto">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-14 w-10 h-10 rounded-full bg-panel2 border border-edge items-center justify-center text-muted transition-colors hover:text-teal hover:border-teal"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="bg-panel border border-edge rounded-2xl p-10 text-center">
              <p className="text-lg leading-relaxed mb-6">
                <span className="text-teal text-[1.3em] align-top">&ldquo;</span>
                {testimonials[index].quote}
                <span className="text-teal text-[1.3em] align-bottom">&rdquo;</span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full grad-bg flex items-center justify-center font-display font-bold text-[#04141a] text-sm shrink-0">
                  {testimonials[index].initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{testimonials[index].name}</div>
                  <div className="text-xs text-dim">{testimonials[index].role}</div>
                </div>
              </div>
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-14 w-10 h-10 rounded-full bg-panel2 border border-edge items-center justify-center text-muted transition-colors hover:text-teal hover:border-teal"
            >
              <ChevronRight size={17} />
            </button>

            <div className="flex justify-center gap-2 mt-[1.375rem]">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-teal scale-125" : "bg-edge"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Divider />
    </>
  );
}
