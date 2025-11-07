import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-bold tracking-wide hover:opacity-60 transition-opacity"
        >
          KKM
        </a>

        <nav className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kirankumarkm08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kirankumar-km/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
        </div>
      </div>
    </header>
  );
}
