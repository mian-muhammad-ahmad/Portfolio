"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Boxes, GitBranch, Server, Database } from "lucide-react";
import { SectionHeading, Pill, Divider } from "./ui";
import Reveal from "./Reveal";
import { skillCards, SkillCard } from "@/lib/data";

const icons: Record<SkillCard["icon"], React.ReactNode> = {
  languages: <Code2 size={20} />,
  frameworks: <Boxes size={20} />,
  training: <GitBranch size={20} />,
  mlops: <Server size={20} />,
  data: <Database size={20} />,
};

function useBarsInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, triggered };
}

export default function Skills() {
  const { ref, triggered } = useBarsInView();

  return (
    <>
      <section id="skills" className="py-24">
        <div className="max-w-content mx-auto px-6" ref={ref}>
          <Reveal>
            <SectionHeading
              eyebrow="skills_and_stack"
              title={
                <>
                  Tools I train, tune, and <span className="grad-text">ship with.</span>
                </>
              }
              description="Proficiency bars reflect hands-on production use, not just familiarity."
            />
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCards.map((card) => (
              <div
                key={card.title}
                className={`bg-panel border border-edge rounded-2xl p-[1.625rem] transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-[1.125rem]">
                  <div className="w-[38px] h-[38px] rounded-[10px] grad-soft flex items-center justify-center text-teal shrink-0">
                    {icons[card.icon]}
                  </div>
                  <h3 className="text-[16.5px] font-display font-semibold">{card.title}</h3>
                </div>

                {card.bars && (
                  <div className="space-y-3.5">
                    {card.bars.map((bar) => (
                      <div key={bar.name}>
                        <div className="flex justify-between text-[13px] mb-1.5">
                          <span className="text-ink">{bar.name}</span>
                          <span className="font-mono text-dim text-[11.5px]">{bar.pct}%</span>
                        </div>
                        <div className="h-[7px] rounded-full bg-edgesoft overflow-hidden p-px">
                          <div
                            className="bar-fill h-full rounded grad-bg"
                            style={{ width: triggered ? `${bar.pct}%` : "0%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {card.tags && (
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((t) => (
                      <Pill key={t} className="text-xs px-3 py-1.5">
                        {t}
                      </Pill>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <Divider />
    </>
  );
}
