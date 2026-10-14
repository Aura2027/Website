import { useState } from "react";
import type { Track } from "../data/tracks";

export function TrackCard({ track, detailed = false }: { track: Track; detailed?: boolean }) {
  const [open, setOpen] = useState(detailed);

  return (
    <div className="group rounded-2xl border border-ink/8 bg-white p-6 transition-all duration-300 hover:border-du-gold/50 hover:shadow-xl hover:shadow-du-maroon/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-3xl font-semibold text-du-gold/70">
            {String(track.number).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium text-ink">{track.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{track.summary}</p>
        </div>
      </div>

      {detailed ? (
        <ul className="mt-5 space-y-2 border-t border-ink/8 pt-4">
          {track.scope.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-du-maroon" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 text-sm font-semibold text-du-maroon transition-colors hover:text-du-maroon-dark"
        >
          {open ? "Hide scope" : "View scope"} <span aria-hidden>{open ? "−" : "+"}</span>
        </button>
      )}

      {!detailed && open && (
        <ul className="mt-4 space-y-2 border-t border-ink/8 pt-4">
          {track.scope.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-du-maroon" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
