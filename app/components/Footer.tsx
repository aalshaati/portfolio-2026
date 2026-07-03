import { site } from "../content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center flex-wrap gap-2 text-sm text-faint">
        <p>
          © {new Date().getFullYear()} Designed &amp; built by {site.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js</p>
      </div>
    </footer>
  );
}
