import { skillGroups } from "../content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="flex flex-col gap-10">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <div className="flex flex-col">
                <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-4">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm text-muted bg-card border border-border rounded-md px-3.5 py-1.5 hover:text-foreground hover:border-border-strong transition-colors duration-200"
                    >
                      {skill}
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
