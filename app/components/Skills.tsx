export default function Skills() {
    const skillCategories = [
      {
        category: "Languages",
        skills: [
          { name: "Python", icon: "🐍" },
          { name: "C", icon: "⚙️" },
          { name: "Verilog", icon: "🔷" },
          { name: "SQL", icon: "🗄️" },
          { name: "VB.NET", icon: "📊" },
          { name: "Excel / VBA", icon: "📋" },
        ],
      },
      {
        category: "Controls & Automation",
        skills: [
          { name: "PLC (Allen-Bradley)", icon: "🏭" },
          { name: "HMI Development", icon: "🖥️" },
          { name: "Studio 5000", icon: "⚡" },
          { name: "Rockwell PharmaSuite", icon: "💊" },
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          { name: "Git", icon: "🌿" },
          { name: "Teradata", icon: "🗃️" },
          { name: "Streamlit", icon: "📈" },
          { name: "Visual Studio", icon: "🔧" },
          { name: "CATIA V5", icon: "✈️" },
          { name: "Power Query", icon: "🔄" },
        ],
      },
    ];
  
    return (
      <section id="skills" className="w-full bg-background py-24 px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Section Header */}
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            What I Work With
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-sm mb-12" />
  
          {/* Categories Stack */}
          <div className="flex flex-col gap-10">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Category Label */}
                <h3 className="text-xs font-bold tracking-wider uppercase text-muted mb-4">
                  {group.category}
                </h3>
  
                {/* Badges Flex Grid */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-card border border-border text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 select-none"
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }