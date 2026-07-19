import { education } from "@/lib/data";
import { Section } from "./Section";
import { Timeline } from "./Timeline";

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline
        items={education.map((e) => ({
          title: e.credential,
          subtitle: e.school,
          date: e.date,
          description: e.description,
        }))}
      />
    </Section>
  );
}
