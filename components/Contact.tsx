"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { contactLinks } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  email: <Mail size={18} />,
  linkedin: <Linkedin size={18} />,
  github: <Github size={18} />,
  whatsapp: <FaWhatsapp size={18} />,
  upwork: <Github size={18} />,
  location: <MapPin size={18} />,
};

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setSending(true);
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("✅ Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="contact"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="grad-text">
                  intelligent together.
                </span>
              </>
            }
            description="Have a project in mind, a job opportunity, or just want to discuss AI? I'd love to hear from you."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">

          {/* Contact Information */}
          <Reveal>
            <div className="bg-panel border border-edge rounded-2xl p-[1.875rem]">

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/40 text-[12.5px] text-teal font-mono mb-[1.375rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulseRing" />
                Open to freelance & full-time opportunities
              </span>

              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 py-3.5 border-b border-edgesoft last:border-none transition-transform hover:translate-x-1"
                >
                  <div className="w-[38px] h-[38px] rounded-[10px] grad-soft flex items-center justify-center text-blue shrink-0">
                    {icons[link.type]}
                  </div>

                  <div>
                    <div className="text-xs text-dim font-mono">
                      {link.label}
                    </div>

                    <div className="text-[14.5px] font-semibold">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact Form */}

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-panel border border-edge rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                <div>
                  <label
                    htmlFor="fname"
                    className="block text-xs text-dim font-mono mb-1.5"
                  >
                    Name
                  </label>

                  <input
                    id="fname"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-bgalt border border-edge rounded-lg px-3.5 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="femail"
                    className="block text-xs text-dim font-mono mb-1.5"
                  >
                    Email
                  </label>

                  <input
                    id="femail"
                    name="from_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-bgalt border border-edge rounded-lg px-3.5 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                  />
                </div>

              </div>

              <div className="mb-[1.125rem]">
                <label
                  htmlFor="fsubject"
                  className="block text-xs text-dim font-mono mb-1.5"
                >
                  Subject
                </label>

                <input
                  id="fsubject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project, Job, Collaboration..."
                  className="w-full bg-bgalt border border-edge rounded-lg px-3.5 py-3 text-sm text-ink focus:border-teal focus:outline-none"
                />
              </div>

              <div className="mb-[1.125rem]">

                <label
                  htmlFor="fmessage"
                  className="block text-xs text-dim font-mono mb-1.5"
                >
                  Message
                </label>

                <textarea
                  id="fmessage"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bgalt border border-edge rounded-lg px-3.5 py-3 text-sm text-ink resize-none focus:border-teal focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[14.5px] grad-bg text-[#04141a] shadow-glow transition-transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={16} />

                {sending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-[14px] mt-4 text-teal font-medium">
                  {status}
                </p>
              )}

              <p className="text-xs text-dim mt-4 text-center">
                Your message will be sent directly to my email. I usually reply
                within 24 hours.
              </p>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}