import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { PersonCard } from "../components/PersonCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { committeeGroups, internationalAdvisoryBoard, technicalProgramCommittee } from "../data/committee";

export function Committee() {
  return (
    <>
      <PageHero
        eyebrow="Conference"
        title="Committee"
        description="AURA 2027 is led by senior academic and industry leadership from the University of Delhi and partner institutions worldwide."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-16">
            {committeeGroups.map((group) => (
              <div key={group.id}>
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold text-ink">{group.title}</h2>
                  <div className="mt-2 h-1 w-14 rounded-full bg-du-gold" />
                </Reveal>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((m, idx) => (
                    <Reveal key={m.name} delay={idx * 0.04}>
                      <PersonCard person={m} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Global Reach"
            title="International Advisory Board"
            description="Distinguished academics and researchers from institutions across the globe advising the conference."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internationalAdvisoryBoard.map((m, idx) => (
              <Reveal key={m.name} delay={(idx % 6) * 0.04}>
                <PersonCard person={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Peer Review"
            title="Technical Program Committee"
            description="Selected members responsible for the double-blind peer review process."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalProgramCommittee.map((m, idx) => (
              <Reveal key={m.name} delay={(idx % 6) * 0.04}>
                <PersonCard person={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
