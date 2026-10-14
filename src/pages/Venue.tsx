import duGate from "../assets/du-gate.png";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../data/siteConfig";

export function Venue() {
  return (
    <>
      <PageHero
        eyebrow="Venue"
        title={siteConfig.venue.hall}
        description={siteConfig.venue.short}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-du-maroon/10">
                <img
                  src={duGate}
                  alt="Entrance gate, University of Delhi"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">About the Venue</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Faculty of Technology, University of Delhi</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {siteConfig.fullTitle} will be hosted at {siteConfig.venue.hall}, {siteConfig.venue.campus}. The
                Faculty of Technology is home to strong research groups in Electrical Engineering, Computer Science,
                and Physics, offering a credible and inspiring setting for an international conference on AI, energy,
                and automation.
              </p>
              <div className="mt-6 rounded-xl border border-ink/8 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-du-maroon/70">Address</p>
                <p className="mt-2 text-sm font-medium text-ink">{siteConfig.contact.address}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Getting There" title="Travel & Accommodation" align="center" />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-dashed border-du-gold/50 bg-white p-6">
                <p className="font-display text-lg font-medium text-ink">Travel Information</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Detailed travel information — including nearest airport, railway station, and local transport
                  options to the University of Delhi North Campus — will be published here closer to the conference
                  dates.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-dashed border-du-gold/50 bg-white p-6">
                <p className="font-display text-lg font-medium text-ink">Accommodation</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Recommended accommodation options near the campus will be shared with registered delegates in due
                  course.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Location" align="center" />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-ink/8">
              <iframe
                title="University of Delhi location map"
                src="https://maps.google.com/maps?q=University%20of%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[380px] w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
