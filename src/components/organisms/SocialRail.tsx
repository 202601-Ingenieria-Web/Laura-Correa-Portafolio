import { resume } from "@/data/resume";

export function SocialRail() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-24 bg-white px-5 py-9 shadow-sm">
      <h2 className="mb-5 text-center text-lg font-bold text-neutral-900">Links</h2>
      <nav className="flex justify-center gap-3 lg:flex-col" aria-label="Redes sociales">
        {resume.socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-purple-900 to-violet-700 text-white transition hover:-translate-y-1 hover:from-purple-950 hover:to-violet-800"
            aria-label={label}
            title={label}
          >
            <Icon size={21} />
          </a>
        ))}
      </nav>
    </aside>
  );
}
