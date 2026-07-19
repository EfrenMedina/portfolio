import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Two-column: profile sidebar + main content */}
      <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        <ProfileSidebar />

        <div className="flex flex-col gap-14">
          <Education />
          <Skills />
          <Experience />
        </div>
      </div>

      {/* Full-width projects below the grid */}
      <div className="mt-16">
        <Projects />
      </div>
    </div>
  );
}
