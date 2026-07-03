interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
        {eyebrow}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="h-px w-12 bg-accent mb-12" />
    </div>
  );
}
