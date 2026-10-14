import type { Person } from "../data/committee";

export function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-ink/8 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-du-gold/40 hover:shadow-lg hover:shadow-du-maroon/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-du-maroon/8 font-display text-sm font-semibold text-du-maroon">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="font-display text-base font-medium text-ink">{person.name}</p>
        {person.role && <p className="mt-0.5 text-sm text-du-maroon/90">{person.role}</p>}
        {person.affiliation && <p className="mt-0.5 text-sm text-ink/55">{person.affiliation}</p>}
      </div>
    </div>
  );
}
