/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this one file to update the whole site.
 *  Items marked `TODO` are placeholders: replace with your info.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Efren Medina Arias",
  title: "Software Developer",
  // Short bio shown under your name in the sidebar.
  bio: "Building thoughtful, performant software. Passionate about clean architecture and great user experiences.", // TODO: make this yours
  email: "efren.medinaarias@gmail.com",
  location: "Canada", // TODO: e.g. "Toronto, Canada"
  photo: "/profile.webp",
  socials: {
    github: "https://github.com/EfrenMedina", // TODO: confirm your GitHub URL
    linkedin: "https://linkedin.com/in/your-handle", // TODO: your LinkedIn URL
  },
};

/** Grouped skill pills (like the template's "Core Skills"). */
export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind"] },
  { category: "Backend", items: ["FastAPI", "Spring Boot", "Node.js"] },
  { category: "Tools", items: ["Git", "Docker"] }, // TODO: adjust to your real stack
];

export const education: {
  school: string;
  credential: string;
  date: string;
  description: string;
}[] = [
  {
    school: "Your University", // TODO
    credential: "Your Degree / Program", // TODO
    date: "Sep 2022 – Present", // TODO
    description: "Relevant coursework, honors, or focus areas.", // TODO
  },
];

export const experience: {
  role: string;
  company: string;
  date: string;
  description: string;
}[] = [
  {
    role: "Job Title", // TODO
    company: "Company Name", // TODO
    date: "Sep 2024 – Present", // TODO
    description: "What you did and the impact you made.", // TODO
  },
  {
    role: "Job Title", // TODO
    company: "Company Name", // TODO
    date: "Jan 2023 – Aug 2023", // TODO
    description: "What you did and the impact you made.", // TODO
  },
];

export const projects: {
  tag: string;
  name: string;
  description: string;
  tech: string[];
  href: string;
}[] = [
  {
    tag: "Web",
    name: "Project Name", // TODO
    description:
      "A short description of what this project does and the technologies used to build it.", // TODO
    tech: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/EfrenMedina", // TODO: repo or live URL
  },
  {
    tag: "CLI Tool",
    name: "Project Name", // TODO
    description:
      "A short description of what this project does and the technologies used to build it.", // TODO
    tech: ["Python", "SQLite"],
    href: "https://github.com/EfrenMedina", // TODO
  },
  {
    tag: "Data",
    name: "Project Name", // TODO
    description:
      "A short description of what this project does and the technologies used to build it.", // TODO
    tech: ["Python", "FastAPI"],
    href: "https://github.com/EfrenMedina", // TODO
  },
];

/** Anchor sections used by the nav (order matters for scroll links). */
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];
