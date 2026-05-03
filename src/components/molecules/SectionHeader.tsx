type SectionHeaderProps = {
  title: string;
  description: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-2xl space-y-3 text-center">
      <h2 className="text-3xl font-extrabold text-neutral-900">{title}</h2>
      <p className="text-sm leading-6 text-neutral-500">{description}</p>
    </header>
  );
}
