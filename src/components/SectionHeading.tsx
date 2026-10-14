import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
              light ? "text-du-gold-light" : "text-du-maroon"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-3xl font-semibold sm:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              light ? "text-white/70" : "text-ink/65"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
