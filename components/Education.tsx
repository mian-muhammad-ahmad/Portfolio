import { GraduationCap, Award } from "lucide-react";
import { SectionHeading, Divider } from "./ui";
import Reveal from "./Reveal";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <>
      <section id="education" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="education_and_certifications"
              title={
                <>
                  Foundations &amp; <span className="grad-text">continued learning.</span>
                </>
              }
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <h3 className="text-[15px] text-dim font-mono mb-[1.125rem] uppercase tracking-wide font-medium">
                Education
              </h3>
              {education.map((e) => (
                <div key={e.title} className="bg-panel border border-edge rounded-xl px-5 py-[1.125rem] mb-3.5 flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-[9px] grad-soft flex items-center justify-center text-teal shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-semibold mb-1">{e.title}</h4>
                    <div className="text-xs text-dim font-mono">{e.meta}</div>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal>
              <h3 className="text-[15px] text-dim font-mono mb-[1.125rem] uppercase tracking-wide font-medium">
                Certifications
              </h3>
              {certifications.map((c) => (
                <div key={c.title} className="bg-panel border border-edge rounded-xl px-5 py-[1.125rem] mb-3.5 flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-[9px] grad-soft flex items-center justify-center text-teal shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-semibold mb-1">{c.title}</h4>
                    <div className="text-xs text-dim font-mono">{c.meta}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
