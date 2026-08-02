import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-9 border-t border-edgesoft">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center flex-wrap gap-3.5">
        <p className="text-dim text-[13px]">&copy; {year} Muhammad Ahmad. Built with Python-flavored curiosity.</p>
        <div className="flex gap-4">
          <a
            href="mailto:muhammad.ahmad.ai@example.com"
            aria-label="Email"
            className="text-dim transition-colors hover:text-teal"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="text-dim transition-colors hover:text-teal"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="text-dim transition-colors hover:text-teal"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
