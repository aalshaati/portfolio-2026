import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { site } from "../content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-xl mx-auto px-6 flex flex-col items-center text-center">
        <SectionHeading eyebrow="Contact" title="Get in touch" centered />

        <Reveal>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
            I&apos;m open to internship opportunities, research collaborations, and
            interesting engineering conversations. My inbox is always open.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-background hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              {site.email}
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
        </Reveal>
      </div>
    </section>
  );
}
