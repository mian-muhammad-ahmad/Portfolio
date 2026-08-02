import { Cpu, MessageSquareCode, Database, Workflow, Server, ShieldCheck } from "lucide-react";
import { SectionHeading, Divider } from "./ui";
import Reveal from "./Reveal";
import { services, Service } from "@/lib/data";

const icons: Record<Service["icon"], React.ReactNode> = {
  model: <Cpu size={23} />,
  chatbot: <MessageSquareCode size={23} />,
  pipeline: <Database size={23} />,
  automation: <Workflow size={23} />,
  deploy: <Server size={23} />,
  audit: <ShieldCheck size={23} />,
};

export default function Services() {
  return (
    <>
      <section id="services" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="services"
              title={
                <>
                  How I can <span className="grad-text">help your team.</span>
                </>
              }
              description="Available for freelance engagements and full-time roles alike."
            />
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-panel border border-edge rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40"
              >
                <div className="w-[46px] h-[46px] rounded-xl grad-soft flex items-center justify-center text-blue mb-[1.125rem]">
                  {icons[service.icon]}
                </div>
                <h3 className="text-[16.5px] font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted text-[13.8px]">{service.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <Divider />
    </>
  );
}
