import type { Milestone } from "../data/importantDates";
import { Reveal } from "./Reveal";

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const today = new Date();

  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-du-maroon via-du-gold to-du-maroon/20 sm:left-1/2 sm:-translate-x-1/2" />

      <ol className="space-y-6 sm:space-y-10">
        {milestones.map((m, idx) => {
          const isPast = new Date(m.sortDate) < today;
          const alignRight = idx % 2 === 1;

          return (
            <li key={m.id} className="relative">
              <Reveal delay={idx * 0.05}>
                <div className="sm:grid sm:grid-cols-2 sm:gap-10">
                  <span
                    className={`absolute left-[9px] top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 ${
                      isPast ? "border-du-maroon bg-du-maroon" : "border-du-gold bg-white"
                    } sm:left-1/2 sm:-translate-x-1/2`}
                  />

                  {!alignRight ? (
                    <>
                      <div className="pl-10 sm:pl-0 sm:pr-2 sm:text-right">
                        <MilestoneCard milestone={m} isPast={isPast} align="right" />
                      </div>
                      <div className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block" />
                      <div className="pl-10 sm:pl-2">
                        <MilestoneCard milestone={m} isPast={isPast} align="left" />
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function MilestoneCard({
  milestone,
  isPast,
  align,
}: {
  milestone: Milestone;
  isPast: boolean;
  align: "left" | "right";
}) {
  return (
    <div
      className={`inline-block w-full rounded-2xl border p-5 text-left transition-shadow hover:shadow-lg sm:max-w-sm ${
        isPast ? "border-ink/8 bg-white/60" : "border-du-gold/40 bg-white shadow-md shadow-du-gold/10"
      } ${align === "right" ? "sm:ml-auto" : "sm:mr-auto"}`}
    >
      <p className="text-sm font-semibold text-du-maroon">{milestone.date}</p>
      <p className="mt-1 font-display text-lg font-medium text-ink">{milestone.label}</p>
      {milestone.note && <p className="mt-1 text-sm text-ink/55">{milestone.note}</p>}
      {milestone.link && (
        <a
          href={milestone.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-du-maroon underline underline-offset-2 hover:text-du-maroon-dark"
        >
          {milestone.link.label} →
        </a>
      )}
    </div>
  );
}
