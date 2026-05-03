import type { Knowledge } from "@/data/resume";

export function KnowledgeCard({ title, description, icon: Icon }: Knowledge) {
  return (
    <article className="flex min-h-52 flex-col items-center justify-center rounded-md bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Icon size={54} strokeWidth={1.5} className="text-purple-800" />
      <h3 className="mt-6 text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
    </article>
  );
}
