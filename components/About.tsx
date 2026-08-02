import Reveal from "./Reveal";
import { SectionHeading, Pill, Divider } from "./ui";
import { aboutMetrics, aboutPills } from "@/lib/data";

export default function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="about_me"
              title={
                <>
                  Engineer by training, <span className="grad-text">problem-solver by nature.</span>
                </>
              }
              description="A quick look at how I think, what I focus on, and where I'm headed."
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <Reveal>
              <div className="bg-panel border border-edge rounded-2xl p-7">
                {aboutMetrics.map((m) => (
                  <div
                    key={m.k}
                    className="flex justify-between py-3.5 border-b border-edgesoft last:border-none"
                  >
                    <span className="text-muted text-[13.5px]">{m.k}</span>
                    <span className="font-semibold text-[13.5px] font-mono text-teal text-right">{m.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-muted leading-8">
                  I'm <strong className="text-ink">Muhammad Ahmad</strong>, a BS Artificial Intelligence student at NFC Institute of Engineering & Fertilizer Research, Faisalabad, with a strong passion for developing intelligent, data-driven solutions. My interests span Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and modern Full-Stack Web Development.
                  <br /><br />
                  I enjoy transforming ideas into practical applications by combining AI technologies with scalable software engineering. Through academic projects, internships, and continuous learning, I've gained hands-on experience building machine learning models, developing web applications, and solving real-world problems using Python, React, Next.js, TensorFlow, and related technologies.
                  <br /><br />
                  My goal is to contribute to innovative teams where I can apply my technical skills, learn from experienced professionals, and build impactful AI-powered products that create meaningful value.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {aboutPills.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
