export default function SectionHeader({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted/70">
        <span className="h-px w-8 bg-card-border" />
        {label}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {action}
      </div>
    </div>
  );
}
