import { jobs } from "../content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative">
          {/* Continuous timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          {jobs.map((job, index) => (
            <Reveal key={job.company + job.role} delay={index * 80}>
              <div className={`relative pl-10 ${index === jobs.length - 1 ? "" : "pb-14"}`}>
                {/* Timeline dot — filled for current roles */}
                <div
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent ${
                    job.current ? "bg-accent" : "bg-background"
                  }`}
                />

                <div className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-lg font-medium text-foreground">{job.role}</h3>
                  <span className="font-mono text-xs text-faint">{job.date}</span>
                </div>

                <div className="text-sm mb-4">
                  <span className="text-accent font-medium">{job.company}</span>
                  <span className="text-faint"> · {job.location}</span>
                </div>

                <ul className="space-y-2.5 list-none">
                  {job.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted pl-5 relative leading-relaxed"
                    >
                      <span className="absolute left-0 text-accent">–</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
