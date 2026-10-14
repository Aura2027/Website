import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Timeline } from "../components/Timeline";
import { importantDates } from "../data/importantDates";

export function ImportantDates() {
  return (
    <>
      <PageHero
        eyebrow="Authors"
        title="Important Dates"
        description="Key milestones from the call for papers through to the conference itself. All dates are proposed and subject to confirmation."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Timeline milestones={importantDates} />
        </Container>
      </section>
    </>
  );
}
