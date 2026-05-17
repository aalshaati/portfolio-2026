export default function Contact() {
    return (
      <section id="contact" className="w-full bg-secondary-bg py-24 px-8 text-center">
        <div className="max-w-[560px] mx-auto flex flex-col items-center">
          {/* Section Header */}
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-sm mb-8" />
  
          {/* Call to Action Text */}
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
            I'm open to internship opportunities, research collaborations, and interesting 
            engineering conversations. My inbox is always open.
          </p>
  
          {/* Action Anchor Interfaces */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:aalshaati0@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg bg-gradient-to-r from-primary to-[#5a52e8] text-white shadow-[0_4px_20px_rgba(108,99,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(108,99,255,0.5)] transition-all duration-200"
            >
              ✉ aalshaati0@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/abdullah-alshaati-89a9a0256" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg bg-transparent border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }