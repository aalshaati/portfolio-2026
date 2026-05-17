export default function Hero() {
    return (
      <section 
        id="hero" 
        className="min-h-screen w-full flex items-center justify-center text-center px-8 pt-24 pb-16 relative overflow-hidden"
      >
        {/* Radiant Spotlight Glow Blur Effect */}
        <div 
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)]" 
        />
  
        <div className="relative z-10 max-w-[700px] flex flex-col items-center">
          {/* Academic Meta Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/15 border border-primary/30 text-primary">
            Computer Engineering · PSU · 2027
          </div>
  
          {/* Name Title with Metallic Gradient Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-5 bg-gradient-to-r from-white via-white to-[#b0aed0] bg-clip-text text-transparent">
            Abdullah Alshaati
          </h1>
  
          {/* Strategic Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-[520px] mb-10 leading-relaxed">
            Building at the intersection of embedded systems, automation, and software.
          </p>
  
          {/* Action Call-to-Response Interface Panels */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:aalshaati0@gmail.com" 
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm rounded-lg bg-gradient-to-r from-primary to-[#5a52e8] text-white shadow-[0_4px_20px_rgba(108,99,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(108,99,255,0.5)] transition-all duration-200"
            >
              ✉ Email Me
            </a>
            <a 
              href="https://linkedin.com/in/abdullah-alshaati-89a9a0256" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm rounded-lg bg-transparent border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }