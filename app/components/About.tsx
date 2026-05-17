export default function About() {
    const stats = [
      { value: "3.4", label: "GPA at PSU" },
      { value: "2", label: "Industry Internships" },
      { value: "3", label: "Engineering Projects" },
      { value: "2027", label: "Graduation Year" },
    ];
  
    return (
      <section id="about" className="w-full bg-secondary-bg py-24 px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Section Header */}
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            About
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-sm mb-12" />
  
          {/* Dynamic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Narrative Text Column */}
            <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
              <p>
                I'm a Computer Engineering student at Portland State University with hands-on 
                industry experience at Boeing and Genentech[cite: 4, 14, 20]. I specialize in embedded systems, 
                industrial automation, and building tools that solve real engineering problems.
              </p>
              <p>
                From redesigning HMI interfaces on 737 test stands to supporting digital 
                manufacturing in cell therapy production, I bring a low-level hardware mindset 
                to every layer of the stack — from registers and PLCs to SQL dashboards and 
                Python pipelines[cite: 10, 11, 16, 17, 22].
              </p>
            </div>
  
            {/* Metrics Dashboard Grid Column */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors duration-200"
                >
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }