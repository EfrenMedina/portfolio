export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

/** Vertical timeline with dots + connector line (Education & Experience). */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative">
      {items.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          className="relative border-l border-border pl-6 pb-8 last:border-l-transparent last:pb-0"
        >
          <span
            aria-hidden
            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-medium text-foreground">{item.title}</h3>
            <span className="shrink-0 text-sm text-muted">{item.date}</span>
          </div>
          <p className="text-sm font-medium text-muted">{item.subtitle}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
