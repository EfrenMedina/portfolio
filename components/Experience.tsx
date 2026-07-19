import { experience } from "@/lib/data";
import { Section } from "./Section";
import { Timeline } from "./Timeline";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline
        items={experience.map((job) => ({
          title: job.role,
          subtitle: job.company,
          date: job.date,
          description: job.description,
        }))}
      />
    </Section>
  );
}
