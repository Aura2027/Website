import duGate from "../assets/du-gate.png";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { conferenceFormat, legacyEditions, significancePoints } from "../data/legacy";
import { siteConfig } from "../data/siteConfig";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`About ${siteConfig.fullTitle}`}
        description="Background, motivation, and the academic vision behind the conference."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Background & Genesis</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">A natural evolution of MARC</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              {siteConfig.acronym} (AI for Utilities, Renewables &amp; Automation) is an international conference
              series organised by the {siteConfig.organiser.department}, {siteConfig.organiser.university}. It is a
              natural evolution of the highly successful MARC (Machine Learning, Advances in Computing, Renewable
              Energy and Communication) conference series, which has delivered four Springer LNEE volumes since 2018
              with a combined readership of thousands of researchers globally.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              While MARC addressed a broad technological spectrum, {siteConfig.fullTitle} is a purposefully focused
              conference dedicated to the convergence of Artificial Intelligence with critical energy infrastructure
              and industrial automation — a domain of rapidly accelerating global and national importance.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {legacyEditions.map((e) => (
                <div key={e.edition} className="rounded-2xl border border-ink/8 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-du-maroon/70">{e.edition}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">{e.stat}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/50">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Motivation & Timeliness</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">Why AURA, why now</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              India is pursuing one of the world's most ambitious clean energy transitions: a target of 500 GW of
              renewable energy capacity by 2030, electrification of transportation, and the adoption of Industry 4.0
              / Industry 5.0 manufacturing paradigms. These transitions are impossible without intelligent,
              data-driven systems. AI and Machine Learning are already transforming how utilities forecast demand,
              how grids integrate distributed renewables, how industrial robots operate autonomously, and how
              cybersecurity threats are detected in real time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              NITI Aayog's National Strategy for Artificial Intelligence (2018) and the National Quantum Mission
              (2023) both highlight the urgency of applied AI research in infrastructure and energy.{" "}
              {siteConfig.fullTitle} is directly aligned with these national priorities and provides an academic
              platform for channeling cutting-edge research into actionable knowledge.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The {siteConfig.organiser.department}, {siteConfig.organiser.university} — with its strong research
              groups in Electrical Engineering, Computer Science, and Physics — is an ideal host. The organizing team
              brings direct experience of running Springer-published international conferences, giving{" "}
              {siteConfig.fullTitle} a credible and low-risk execution profile.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Conference Format"
            title="What to expect over two days"
            align="center"
          />
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

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Publication"
            title="Springer LNEE — Scopus Indexed"
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-ink/70">
              Accepted and presented papers ({siteConfig.publication.pageRange}, {siteConfig.publication.format})
              will be published in {siteConfig.publication.series}, which is {siteConfig.publication.indexing} and
              widely circulated in over 180 countries. All submissions will undergo {siteConfig.publication.review}.
              This maintains the unbroken Springer LNEE publication tradition associated with the MARC/AURA series,
              providing lasting international visibility to research from the {siteConfig.organiser.department},{" "}
              {siteConfig.organiser.university}.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Significance"
            title="Why it matters for the Faculty & University"
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4">
            {significancePoints.map((point, idx) => (
              <Reveal key={point} delay={idx * 0.04}>
                <div className="flex items-start gap-3 rounded-xl border border-ink/8 bg-white p-5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-du-maroon" />
                  <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Host Institution</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">University of Delhi</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {siteConfig.fullTitle} is organised by the {siteConfig.organiser.department}, one of the University
                of Delhi's premier engineering faculties, home to strong research groups spanning Electrical
                Engineering, Computer Science, and Physics. The University's century-long academic legacy provides
                an institutionally credible foundation for this new international conference series.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <img src={duGate} alt="University of Delhi campus" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
