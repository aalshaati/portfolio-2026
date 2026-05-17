"use client";

import { useState, useEffect } from "react";

const THEMES = [
  { id: "default",      label: "Default Space", primary: "#6c63ff" },
  { id: "cyber-cyan",   label: "Cyber Cyan",    primary: "#00d4ff" },
  { id: "matrix-green", label: "Matrix Green",  primary: "#10b981" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const { id } = THEMES[themeIndex];
    if (id === "default") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", id);
    }
  }, [themeIndex]);

  const cycleTheme = () => setThemeIndex((i) => (i + 1) % THEMES.length);
  const currentTheme = THEMES[themeIndex];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 bg-background/85 backdrop-blur-md border-b border-border">
      {/* Branding Logo */}
      <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        AA
      </div>

      {/* Desktop Links Navigation */}
      <ul className="hidden md:flex gap-8 list-none">
        {["about", "experience", "projects", "skills", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="text-sm font-medium text-muted hover:text-foreground capitalize transition-colors duration-200"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      {/* Right-side controls */}
      <div className="flex items-center gap-3">
        {/* Theme Switcher */}
        <button
          onClick={cycleTheme}
          aria-label={`Current theme: ${currentTheme.label}. Click to cycle theme.`}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted hover:text-foreground hover:border-current transition-all duration-200 cursor-pointer bg-transparent"
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300"
            style={{ backgroundColor: currentTheme.primary }}
          />
          <span className="hidden md:inline">{currentTheme.label}</span>
        </button>

        {/* Mobile Drawer Toggle Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden flex-col gap-1.5 cursor-pointer p-1 bg-transparent border-none"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground rounded-sm transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground rounded-sm transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground rounded-sm transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-background border-b border-border flex flex-col p-6 gap-5 md:hidden list-none shadow-xl">
          {["about", "experience", "projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <a 
                href={`#${section}`} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted hover:text-foreground capitalize block"
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