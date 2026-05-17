export default function Projects() {
    const projects = [
      {
        icon: "🧠",
        title: "Cache Simulator with MESI Protocol",
        desc: "Designed a 4-way set associative cache simulator with LRU replacement and full MESI cache coherence modeling. Built a simulation driver to process memory traces and compute performance metrics including hit rate and miss counts.",
        tags: ["C", "Git", "Systems", "Cache Design"],
      },
      {
        icon: "⚙️",
        title: "Assembly System — BeagleBone Black",
        desc: "Built a low-level I2C driver in ARMv7-A assembly to control stepper motors via PCA9685. Configured AM335x registers for PWM output and validated timing signals using an oscilloscope.",
        tags: ["ARMv7-A", "Assembly", "I2C", "Embedded"],
      },
      {
        icon: "🐧",
        title: "Embedded Systems — Linux/Unix",
        desc: "Developed Unix system programs using fork(), execvp(), waitpid(), and signals for process control. Automated builds with Makefiles and debugged complex process handling in a Linux environment.",
        tags: ["C", "Linux", "Unix", "Makefile"],
      },
    ];
  
    return (
      <section id="projects" className="w-full bg-secondary-bg py-24 px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Section Header */}
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            What I've Built
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-sm mb-12" />
  
          {/* Projects Responsive Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <div>
                  {/* Project Identity Row */}
                  <div className="text-3xl mb-4">{project.icon}</div>
                  <h3 className="text-base font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
  
                {/* Technology Stack Tags Array */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }