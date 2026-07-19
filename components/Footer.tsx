import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="text-2xl font-bold leading-tight tracking-tight text-foreground">
            {profile.name.split(" ")[0]}
            <br />
            {profile.name.split(" ").slice(1).join(" ")}.
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-sm font-medium text-foreground">Explore</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Let&apos;s Connect</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}.</span>
          <span>Built with Next.js &amp; Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
