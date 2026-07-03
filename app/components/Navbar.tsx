"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../content";

const THEMES = [
  { id: "terracotta", label: "Terracotta", swatch: "#9a4b24" },
  { id: "olive", label: "Olive", swatch: "#5a6636" },
  { id: "clay", label: "Clay", swatch: "#8a6a2f" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

// The pre-hydration script in layout.tsx applies the saved theme to <html>
// before React runs, so on the client we can read it as the initial state.
function getInitialTheme(): ThemeId {
  if (typeof document === "undefined") return "terracotta";
  const applied = document.documentElement.dataset.theme;
  return applied === "olive" || applied === "clay" ? applied : "terracotta";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>(getInitialTheme);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const cycleTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === theme);
    const next = THEMES[(currentIndex + 1) % THEMES.length];
    setTheme(next.id);
    if (next.id === "terracotta") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = next.id;
    }
    try {
      localStorage.setItem("accent", next.id);
    } catch {}
  };

  const currentTheme = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="font-mono text-base font-semibold text-accent">
          AA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-sm capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? "text-foreground border-b border-accent pb-0.5"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={cycleTheme}
            aria-label={`Current theme: ${currentTheme.label}. Click to cycle theme.`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted hover:text-foreground hover:border-border-strong transition-all duration-200 cursor-pointer bg-transparent"
          >
            <span
              suppressHydrationWarning
              className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300"
              style={{ backgroundColor: currentTheme.swatch }}
            />
            <span suppressHydrationWarning className="hidden md:inline">
              {currentTheme.label}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden cursor-pointer p-1 bg-transparent border-none text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border flex flex-col p-6 gap-5 md:hidden list-none shadow-lg">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-foreground capitalize block"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
