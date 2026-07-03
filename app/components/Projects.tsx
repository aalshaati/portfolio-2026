import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { featuredProject, projects } from "../content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="What I've built" />

        {/* Featured: Engineering Hub */}
        <Reveal>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-10 hover:border-border-strong transition-colors duration-200">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
              {featuredProject.eyebrow}
            </div>

            <div className="flex items-baseline gap-3 flex-wrap mb-4">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {featuredProject.title}
              </h3>
              <span className="text-sm text-faint">{featuredProject.subtitle}</span>
            </div>

            <p className="text-base text-muted leading-relaxed max-w-2xl mb-6">
              {featuredProject.desc}
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 list-none mb-8 max-w-2xl">
              {featuredProject.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-muted pl-4 relative leading-relaxed"
                >
                  <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted bg-panel border border-border rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live app
                </a>
                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between h-full transition-all duration-200 hover:border-border-strong hover:-translate-y-1">
                <div>
                  <div className="h-11 w-11 rounded-lg bg-panel border border-border flex items-center justify-center mb-4">
                    <project.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-muted bg-panel border border-border rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
