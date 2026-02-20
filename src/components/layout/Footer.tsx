import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} 김완기. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wankiKim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:jerry10247@gmail.com"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
