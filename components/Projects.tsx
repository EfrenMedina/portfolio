import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { TechIcon } from "./TechIcon";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <a
            key={`${project.name}-${i}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              {project.tag}
            </span>
            <h3 className="mt-2 flex items-center gap-1 font-semibold text-foreground">
              {project.name}
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1 rounded-md border border-border bg-pill px-2 py-0.5 text-xs text-muted"
                >
                  <TechIcon name={t} className="h-3 w-3" />
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
