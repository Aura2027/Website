import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import duGate from "../assets/du-gate.png";
import duLogo from "../assets/du-logo.png";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PersonCard } from "../components/PersonCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { TrackCard } from "../components/TrackCard";
import { announcements } from "../data/announcements";
import { committeeGroups } from "../data/committee";
import { importantDates } from "../data/importantDates";
import { legacyEditions } from "../data/legacy";
import { siteConfig } from "../data/siteConfig";
import { tracks } from "../data/tracks";

const heroDates = importantDates.filter((m) =>
  ["submission", "notification", "camera-ready", "conference"].includes(m.id),
);

const patrons = committeeGroups
  .filter((g) => ["patron-in-chief", "patrons", "co-patron"].includes(g.id))
  .flatMap((g) => g.members)
  .slice(0, 4);

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-du-maroon-dark pb-28 pt-40 sm:pb-36 sm:pt-48">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-du-maroon/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-du-gold/15 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img src={duLogo} alt="University of Delhi crest" className="h-14 w-14 sm:h-16 sm:w-16" />
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="text-sm font-medium text-white/80">{siteConfig.organiser.hostDepartment}</p>
              <p className="text-sm font-medium text-white/80">Faculty of Technology</p>
              <p className="text-sm font-medium text-white/80">University of Delhi</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-du-gold-light"
          >
            {siteConfig.dates} &middot; {siteConfig.venue.short}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-6xl"
          >
            {siteConfig.conferenceName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
          >
            <span className="font-semibold text-du-gold-light">{siteConfig.fullTitle}</span> brings together
            researchers, industry leaders, and policymakers to advance the convergence of artificial intelligence
            with energy infrastructure and industrial automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button to="/call-for-papers">Submit a Paper</Button>
            <Button to="/registration" variant="secondary">
              Register Now
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70"
          >
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This
            service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud
            services as well as for software development and support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {[
              { label: "Technical Tracks", value: "7" },
              { label: "Keynote & Invited Talks", value: "4–6" },
              { label: "Publication", value: "Springer (approval pending)" },
              { label: "Conference Days", value: "2" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/55 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">About the Conference</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                A focused platform for AI in energy &amp; automation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
                {siteConfig.acronym} is an international conference series organised by the {siteConfig.organiser.hostDepartment},{" "}
                {siteConfig.organiser.department},{" "}
                {siteConfig.organiser.university}. It is a natural evolution of the highly successful MARC conference
                series, which has delivered four Springer LNEE volumes since 2018 with a combined readership of
                thousands of researchers globally.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">
                {siteConfig.fullTitle} is a purposefully focused conference dedicated to the convergence of Artificial
                Intelligence with critical energy infrastructure and industrial automation, a domain of rapidly
                accelerating global and national importance.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-du-maroon hover:text-du-maroon-dark"
              >
                Read more about AURA 2027
                <span aria-hidden>→</span>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {legacyEditions.map((edition) => (
                  <div
                    key={edition.edition}
                    className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-du-maroon/70">
                      {edition.edition}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-ink">{edition.stat}</p>
                    <p className="mt-2 text-xs leading-relaxed text-ink/50">{edition.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Important dates strip */}
      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title="Important Dates"
            description="Key milestones on the road to AURA 2027."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroDates.map((d, idx) => (
              <Reveal key={d.id} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="font-display text-lg font-semibold text-du-maroon">{d.date}</p>
                  <p className="mt-2 text-sm text-ink/65">{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/important-dates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-du-maroon hover:text-du-maroon-dark"
            >
              View full timeline <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Tracks */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Call for Papers"
            title="Seven Focused Technical Tracks"
            description="AURA 2027 invites original research across the following themes."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, idx) => (
              <Reveal key={track.id} delay={idx * 0.05}>
                <TrackCard track={track} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Speakers teaser */}
      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Keynote & Invited Talks"
            title="Distinguished Speakers"
            description="AURA 2027 will feature keynote addresses by 4–6 eminent national and international experts, alongside invited talks from industry leaders and senior research scientists. Speaker announcements are coming soon."
            align="center"
          />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-du-gold/50 bg-white p-8 text-center">
              <p className="font-display text-xl font-medium text-ink">Speaker line-up to be announced</p>
              <p className="mt-2 text-sm text-ink/55">Check back soon, or visit the Speakers page for updates.</p>
              <Link
                to="/speakers"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-du-maroon hover:text-du-maroon-dark"
              >
                Visit Speakers page <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Organizers */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Patrons & Organizers"
            description="AURA 2027 is guided by senior academic leadership from the University of Delhi and partner institutions."
            align="center"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {patrons.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.06}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/committee"
              className="inline-flex items-center gap-2 text-sm font-semibold text-du-maroon hover:text-du-maroon-dark"
            >
              View full committee <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Announcements */}
      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="News" title="Announcements" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {announcements.map((a, idx) => (
              <Reveal key={a.id} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 transition-shadow hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-du-maroon/8 px-3 py-1 text-xs font-semibold text-du-maroon">
                      {a.category}
                    </span>
                    <span className="text-xs text-ink/45">{a.date}</span>
                  </div>
                  <p className="mt-4 font-display text-lg font-medium text-ink">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Venue teaser */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={duGate}
                  alt="University of Delhi campus gate"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Venue</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{siteConfig.venue.hall}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/65">
                Hosted at the {siteConfig.venue.campus}, in the heart of {siteConfig.venue.city}. The Faculty of
                Technology brings strong research groups in Electrical Engineering, Computer Science, and Physics,
                making it an ideal host for a conference at the intersection of AI, energy, and automation.
              </p>
              <Link
                to="/venue"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-du-maroon hover:text-du-maroon-dark"
              >
                Venue &amp; travel information <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-du-maroon-dark py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Be part of AURA 2027</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Submit your research, join the conversation, and help shape the future of AI-driven energy and
              automation systems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/call-for-papers">Submit a Paper</Button>
              <Button to="/registration" variant="secondary">
                Register Now
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
