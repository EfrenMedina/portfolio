import type { ComponentType, CSSProperties } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiR,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAnthropic,
} from "react-icons/si";
import { Cloud, Code2, Infinity as InfinityIcon } from "lucide-react";

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

/**
 * Maps a technology label (from lib/data.ts) to its brand icon + official color.
 * `color: undefined` means the icon inherits the surrounding text color
 * (used for logos that are pure black/white, so they stay visible in both themes).
 * Brands lucide/simple-icons drop for trademark reasons (Azure, VS Code) use a
 * neutral lucide glyph tinted with the brand color.
 */
const ICONS: Record<string, { icon: IconType; color?: string }> = {
  Python: { icon: SiPython, color: "#3776AB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#663399" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  R: { icon: SiR, color: "#276DC3" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs }, // pure black logo → inherit (theme-adaptive)
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Git: { icon: SiGit, color: "#F05032" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "Claude API": { icon: SiAnthropic, color: "#D97757" },
  Azure: { icon: Cloud, color: "#0078D4" },
  "VS Code": { icon: Code2, color: "#007ACC" },
  "CI/CD": { icon: InfinityIcon }, // generic → inherit
  Tkinter: { icon: Code2 }, // generic → inherit
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { icon: Icon, color } = entry;
  return <Icon className={className} style={color ? { color } : undefined} />;
}
