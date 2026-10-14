import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { conferenceFormat } from "../data/legacy";

const speakerCategories = [
  {
    title: "Keynote Speakers",
    description: "4–6 eminent national and international experts in AI, energy systems, and automation.",
  },
  {
    title: "Invited Speakers",
    description: "Industry leaders and senior research scientists sharing applied perspectives.",
  },
  {
    title: "Panelists",
    description: "Voices from academia, government, and industry discussing policy and ethics in AI-driven infrastructure.",
  },
];

export function Speakers() {
  return (
    <>
      <PageHero
        eyebrow="Conference"
        title="Keynote & Invited Speakers"
        description="AURA 2027 will bring together eminent voices from academia, industry, and government. Speaker announcements will be published here as they are confirmed."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {speakerCategories.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6">
                  <p className="font-display text-lg font-medium text-ink">{cat.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{cat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-dashed border-du-gold/50 bg-du-maroon/[0.03] p-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Coming Soon</p>
              <p className="mt-3 font-display text-2xl font-medium text-ink">Speaker line-up to be announced</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                Confirmed speakers, their talk titles, and biographies will be published on this page as the
                program committee finalises invitations. Please check back closer to the conference dates.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What to Expect" title="Conference Format" align="center" />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {conferenceFormat.map((item, idx) => (
              <Reveal key={item} delay={idx * 0.05}>
                <div className="flex h-full gap-3 rounded-xl border border-ink/8 bg-white p-5">
                  <span className="font-display text-lg font-semibold text-du-gold/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-ink/70">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
