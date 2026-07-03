import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { site } from "../content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[calc(100svh)] flex items-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Soft accent wash that follows the active theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 30% 35%, color-mix(in oklab, var(--color-accent) 8%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
              {site.role}
            </div>

            <h1 className="font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-foreground mb-6">
              {site.name}
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-8">
              {site.tagline}
            </p>

            {/* Current status */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 mb-10">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted">{site.status}</span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-background hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-border-strong text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
