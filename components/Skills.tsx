import type { SanitySkill } from "@/lib/sanity";

const levelWidth: Record<string, string> = {
  Familiar: "w-1/3",
  Proficient: "w-2/3",
  Expert: "w-full",
};

export default function Skills({ skills }: { skills: SanitySkill[] }) {
  if (skills.length === 0) return null;

  return (
    <section id="skills" className="bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">Skills</h2>
        <div className="mt-10 space-y-5">
          {skills.map((skill) => (
            <div key={skill._id}>
              <div className="flex justify-between text-sm font-semibold text-stone-800">
                <span>{skill.name}</span>
                <span className="text-stone-500">{skill.level}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200">
                <div
                  className={`h-full rounded-full bg-[var(--color-primary)] ${levelWidth[skill.level] ?? "w-1/2"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
