import { SectionHeading, Divider } from "./ui";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="work_timeline"
              title={
                <>
                  Where I&rsquo;ve <span className="grad-text">built and shipped.</span>
                </>
              }
              description="Roles, in chronological order, most recent first."
            />
          </Reveal>

          <div className="relative max-w-[800px] mx-auto">
            <div className="absolute left-[19px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-blue via-teal to-transparent" />

            {experience.map((item) => (
              <Reveal key={item.role} className="relative pl-14 mb-11 last:mb-0">
                <div className="absolute left-2.5 top-0.5 w-5 h-5 rounded-full bg-panel border-2 border-teal flex items-center justify-center shadow-[0_0_0_5px_rgb(var(--bg))]">
                  <span className="w-[7px] h-[7px] rounded-full bg-teal" />
                </div>
                <div className="bg-panel border border-edge rounded-2xl px-6 py-[1.375rem]">
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                    <span className="text-[17px] font-semibold font-display">{item.role}</span>
                    <span className="font-mono text-xs text-dim">{item.date}</span>
                  </div>
                  <div className="text-teal text-[13.5px] font-semibold mb-3">{item.company}</div>
                  <ul className="text-muted text-sm space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
