import type { SkillLevel } from "@/data/resume";

export function ProgressBar({ name, level }: SkillLevel) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full border border-purple-200 bg-white">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-900 to-violet-600"
          style={{ width: `${level}%` }}
          aria-label={`${name}: ${level}%`}
        />
      </div>
    </div>
  );
}
