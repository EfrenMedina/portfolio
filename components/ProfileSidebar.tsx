import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { CanadaFlag } from "./CanadaFlag";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function ProfileSidebar() {
  return (
    <aside id="about" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={160}
          height={160}
          priority
          className="h-36 w-36 rounded-full border border-border object-cover"
        />

        <div className="mt-6 flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {profile.name}
          </h1>
          <CanadaFlag className="h-5 w-5 shrink-0" />
        </div>

        <p className="mt-1 text-muted">{profile.title}</p>

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {profile.bio}
        </p>

        <dl className="mt-6 space-y-2 text-sm">
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <Mail className="h-4 w-4 text-muted" aria-hidden />
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <MapPin className="h-4 w-4 text-muted" aria-hidden />
            <span className="text-muted">{profile.location}</span>
          </div>
        </dl>

        <div className="mt-6 flex gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-pill hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-pill hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </aside>
  );
}
