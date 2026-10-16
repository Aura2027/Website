import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { TrackCard } from "../components/TrackCard";
import { importantDates } from "../data/importantDates";
import { siteConfig } from "../data/siteConfig";
import { tracks } from "../data/tracks";

const cfpDates = importantDates.filter((m) =>
  ["submission", "notification", "camera-ready"].includes(m.id),
);

export function CallForPapers() {
  return (
    <>
      <PageHero
        eyebrow="Authors"
        title="Call for Papers"
        description="AURA 2027 invites original, unpublished research contributions across seven focused technical tracks at the intersection of AI, energy, and automation."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={siteConfig.submission.url} variant="secondary">
            {siteConfig.submission.label}
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Overview</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Seven focused technical tracks</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              {siteConfig.fullTitle} will cover seven focused technical tracks spanning AI in smart utilities,
              renewable energy systems, industrial automation and robotics, IoT and edge AI, data science and
              optimization, cybersecurity and ethics, and emerging AI applications.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Tracks & Detailed Scope" title="Themes of Technical Sessions" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {tracks.map((track, idx) => (
              <Reveal key={track.id} delay={(idx % 4) * 0.06}>
                <TrackCard track={track} detailed />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Submission Guidelines" title="Paper Guidelines & Publication" />
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Paper Length", value: siteConfig.publication.pageRange },
                { label: "Format", value: siteConfig.publication.format },
                { label: "Review Process", value: "Rigorous double-blind peer review" },
                { label: "Publication", value: siteConfig.publication.series },
                { label: "Indexing", value: siteConfig.publication.indexing },
                { label: "Submission Portal", value: siteConfig.submission.label },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-ink/8 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-du-maroon/70">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-ink">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-ink/75">
              The accepted and presented paper will be published in LNEE springer
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Key Deadlines" title="Submission Timeline" align="center" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
            {cfpDates.map((d, idx) => (
              <Reveal key={d.id} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 text-center">
                  <p className="font-display text-lg font-semibold text-du-maroon">{d.date}</p>
                  <p className="mt-2 text-sm text-ink/65">{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Ready to submit your research?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              Contribute to a Scopus-indexed Springer LNEE volume and join a growing international community
              working on AI for energy and automation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={siteConfig.submission.url}>{siteConfig.submission.label}</Button>
              <Button to="/important-dates" variant="ghost">
                View Important Dates
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
