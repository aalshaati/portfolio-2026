export default function Experience() {
    const jobs = [
      {
        role: "Automation Systems Intern",
        company: "Genentech",
        location: "Hillsboro, OR",
        date: "Mar – Sep 2026",
        bullets: [
          "Supported automation systems and digital manufacturing within cell therapy production in a regulated environment",
          "Contributed to MES (Rockwell PharmaSuite) and real-time process monitoring",
          "Built data pipelines and Streamlit tools to improve process visibility and data digitization",
        ],
      },
      {
        role: "Production Engineering Intern",
        company: "Boeing",
        location: "Portland, OR",
        date: "June – Dec 2025",
        bullets: [
          "Redesigned HMI interface for a 737 torque break test stand with real-time status and cancel-test feature, saving hours of operator time annually",
          "Analyzed PLC ladder logic and tag structures; used PLC trending to validate system behavior and improve maintenance traceability",
          "Built SQL (Teradata) and Power Query dashboards tracking ~400 time-sensitive manufacturing parts, reducing scrap risk",
          "Developed Excel/VBA tools to replace manual data entry and enable automated lifecycle tracking of induction hardened components",
        ],
      },
      {
        role: "MECOP Student Ambassador",
        company: "Portland State University",
        location: "Portland, OR",
        date: "Mar 2026 – Present",
        bullets: [
          "Represent the MECOP program through student engagement, networking events, and industry outreach",
          "Mentor peers through the internship search and professional development process",
        ],
      },
    ];
  
    return (
      <section id="experience" className="w-full bg-background py-24 px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Section Header */}
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Where I've Worked
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-sm mb-12" />
  
          {/* Experience Timeline Grid Stack */}
          <div className="flex flex-col gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-card border border-border rounded-xl p-8 transition-all duration-200 hover:border-primary/40 hover:translate-x-1 group"
              >
                {/* Left Color Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-accent" />
  
                {/* Card Meta Headers */}
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {job.role}
                  </h3>
                  <span className="text-xs font-medium text-muted bg-panel-bg px-3 py-1 rounded-full">
                    {job.date}
                  </span>
                </div>
  
                {/* Company Info */}
                <div className="text-sm text-primary font-semibold mb-4">
                  {job.company} · <span className="text-muted font-normal">{job.location}</span>
                </div>
  
                {/* Experience Bullet Entries */}
                <ul className="space-y-3 list-none">
                  {job.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted pl-5 relative leading-relaxed"
                    >
                      <span className="absolute left-0 text-primary">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }