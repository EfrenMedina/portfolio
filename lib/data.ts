/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this one file to update the whole site.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Efren Medina Arias",
  title: "Software Engineer",
  bio: "Computer Science student at the University of Toronto who loves architecting software that solves meaningful problems and makes an impact.",
  email: "efren.medinaarias@mail.utoronto.ca",
  location: "Toronto, Ontario",
  photo: "/profile.webp",
  socials: {
    github: "https://github.com/EfrenMedina",
    linkedin: "https://linkedin.com/in/efrenmedinaa",
  },
};

/** Grouped skill pills (like the template's "Core Skills"). */
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "PostgreSQL", "R"],
  },
  { category: "Frameworks", items: ["React", "Next.js", "FastAPI", "Tailwind"] },
  { category: "Tools", items: ["Git", "Docker", "Azure", "CI/CD", "VS Code"] },
];

export const education: {
  school: string;
  credential: string;
  date: string;
  description: string;
}[] = [
  {
    school: "University of Toronto",
    credential: "B.S. in Computer Science",
    date: "2025 – 2029",
    description: "GPA: 4.00 / 4.00",
  },
];

export const experience: {
  role: string;
  company: string;
  date: string;
  description: string | string[];
}[] = [
  {
    role: "Software Engineering Intern",
    company: "Invictus Accounting Group — Vancouver, BC",
    date: "May 2026 – Aug 2026",
    description: [
      "Engineered a Microsoft Word plugin end-to-end in Next.js, Tailwind, and Office.js with a Next.js BFF over a FastAPI backend, containerized with Docker and deployed on Azure to serve 50+ accountants.",
      "Built REST APIs in Python/FastAPI and authored PostgreSQL queries and schema migrations across a multi-service Azure platform.",
      "Turned financial-reporting and Transformer-based document pipelines into production features alongside domain experts and ML engineers.",
      "Contributed to code reviews, Agile sprint planning, and daily syncs while writing tests, fixing bugs, and improving CI/CD pipelines.",
    ],
  },
  {
    role: "Recreational Program Instructor",
    company: "City of Port Alberni, BC",
    date: "Mar 2025 – Aug 2025",
    description:
      "Led recreational programs, camps, and community events for 500+ participants across diverse age groups, and coordinated youth sports and logistics for large-scale events.",
  },
  {
    role: "Recreational Program Assistant",
    company: "City of Port Alberni, BC",
    date: "Sep 2023 – Mar 2025",
    description:
      "Supported program delivery, participant engagement, and event setup across community recreation activities.",
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
    tag: "AI / Web",
    name: "AI-Powered Syllabus-to-Calendar Tool",
    description:
      "Parses a university syllabus PDF and automatically extracts every deadline and event into a structured calendar, saving students manual entry. Full stack in React and FastAPI, connecting a pdfplumber pipeline to the Anthropic Claude API.",
    tech: ["React", "FastAPI", "Python", "Claude API"],
    href: "https://github.com/EfrenMedina", // TODO: link the specific repo
  },
  {
    tag: "Tool",
    name: "UofT Course Navigator",
    description:
      "Scraped 5,000+ UofT courses, modelled prerequisite logic as custom tree structures, and built a directed course graph with a Tkinter GUI so students can explore course eligibility.",
    tech: ["Python", "Tkinter"],
    href: "https://github.com/EfrenMedina", // TODO: link the specific repo
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
