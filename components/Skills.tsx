import { skills } from "@/lib/data";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

export function Skills() {
  return (
    <Section id="skills" title="Core Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-muted">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-pill px-3 py-1 text-sm text-foreground"
                >
                  <TechIcon name={item} className="h-3.5 w-3.5 text-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
