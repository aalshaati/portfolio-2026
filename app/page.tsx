import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-accent">
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Structural Content Sections */}
      <main className="relative flex flex-col items-center justify-between">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Global Application Footer */}
      <footer className="w-full text-center py-8 border-t border-border text-muted text-sm bg-secondary-bg/50">
        <p>© {new Date().getFullYear()} Designed & built by Abdullah Alshaati</p>
      </footer>
    </div>
  );
}