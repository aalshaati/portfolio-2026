import { about } from "../content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-5">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-border-strong transition-colors duration-200"
                >
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-faint uppercase tracking-wider font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
