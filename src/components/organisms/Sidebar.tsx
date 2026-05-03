import Image from "next/image";
import { CheckSquare } from "lucide-react";
import { resume } from "@/data/resume";
import { ProgressBar } from "../atoms/ProgressBar";

export function Sidebar() {
  const { person, contact, languages, programming, extras } = resume;

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:overflow-y-auto bg-white px-8 py-9 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="relative size-32 overflow-hidden rounded-full bg-neutral-100">
          <Image src={person.profileImage} alt={person.name} fill className="object-cover" sizes="128px" priority />
        </div>
        <h1 className="mt-5 text-lg font-bold text-neutral-900">{person.name}</h1>
        <p className="mt-2 text-sm text-neutral-500">{person.title}</p>
      </div>

      <div className="my-8 h-px bg-neutral-100" />

      <section className="space-y-3">
        {contact.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-neutral-900">
              <Icon size={15} className="text-purple-800" />
              {label}
            </span>
            <span className="max-w-36 text-right text-neutral-500">{value}</span>
          </div>
        ))}
      </section>

      {/* The same progress atom is reused for languages and programming levels. */}
      <SidebarGroup title="Idiomas">
        {languages.map((item) => (
          <ProgressBar key={item.name} {...item} />
        ))}
      </SidebarGroup>

      <SidebarGroup title="Lenguajes de programación">
        {programming.map((item) => (
          <ProgressBar key={item.name} {...item} />
        ))}
      </SidebarGroup>

      <SidebarGroup title="Habilidades extra">
        <ul className="space-y-2 text-sm text-neutral-500">
          {extras.map((skill) => (
            <li key={skill} className="flex items-center gap-3">
              <CheckSquare size={15} className="text-purple-800" />
              {skill}
            </li>
          ))}
        </ul>
      </SidebarGroup>
    </aside>
  );
}

function SidebarGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-neutral-100 pt-7">
      <h2 className="mb-4 text-lg font-bold text-neutral-900">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
