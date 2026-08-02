import { ExternalLink, Github } from "lucide-react";
import { SectionHeading, Divider } from "./ui";
import Reveal from "./Reveal";
import { projects, Project } from "@/lib/data";

const accentClasses: Record<string, string> = {
  teal: "text-teal border-teal/35 bg-teal/10",
  blue: "text-blue border-blue/35 bg-blue/10",
  violet: "text-violet border-violet/35 bg-violet/10",
};

function ProjectThumb({ project }: { project: Project }) {
  return (
    <div
      className={`h-[150px] flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
    >
      <svg viewBox="0 0 200 90" className="w-[75%]" xmlns="http://www.w3.org/2000/svg">
        <polyline
          points="0,70 20,55 40,60 60,30 80,40 100,15 120,25 140,10 160,20 180,5 200,18"
          fill="none"
          stroke="#2fe0c4"
          strokeWidth="2.5"
        />
        <polyline
          points="0,80 20,78 40,74 60,68 80,62 100,58 120,50 140,46 160,40 180,36 200,30"
          fill="none"
          stroke="#4c8dff"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="featured_projects"
              title={
                <>
                  Selected work, <span className="grad-text">end to end.</span>
                </>
              }
              description="Each project spans the full pipeline — data, training, evaluation, and deployment."
            />
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-panel border border-edge rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-panel"
              >
                <ProjectThumb project={project} />
                <div className="p-[1.375rem] flex flex-col flex-1">
                  <h3 className="text-[17px] font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted text-[13.8px] mb-4 flex-1">{project.description}</p>

                  <div className="flex gap-2.5 flex-wrap mb-4">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className={`font-mono text-[11px] border px-2.5 py-1 rounded-md ${accentClasses[project.accent]}`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-dim border border-edge px-2.5 py-1 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3.5 border-t border-edgesoft pt-4 mt-auto">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-muted transition-colors hover:text-teal"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-muted transition-colors hover:text-teal"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
      <Divider />
    </>
  );
}
