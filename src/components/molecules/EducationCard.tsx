import type { Education } from "@/data/resume";

export function EducationCard({ institution, period, role, title, description }: Education) {
  return (
    <article className="grid gap-6 border-b border-neutral-100 py-8 last:border-b-0 md:grid-cols-[0.9fr_1.4fr]">
      <div>
        <h3 className="text-lg font-bold text-neutral-900">{institution}</h3>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-sm text-neutral-600">{role}</span>
          <span className="rounded-sm bg-gradient-to-r from-purple-900 to-violet-700 px-2 py-1 text-xs font-semibold text-white">{period}</span>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-neutral-900">{title}</h4>
        <p className="mt-4 text-sm leading-7 text-neutral-500">{description}</p>
      </div>
    </article>
  );
}
