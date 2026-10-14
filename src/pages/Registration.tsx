import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { feeSchedule, registrationDeadlines } from "../data/registration";
import { siteConfig } from "../data/siteConfig";

export function Registration() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Register for AURA 2027"
        description="Registration fees are proposed and shown in Indian Rupees (₹) and US Dollars (USD), exclusive of applicable GST unless stated."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={siteConfig.registration.url} variant="secondary">
            {siteConfig.registration.label}
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Fee Structure"
            title="Registration Categories & Fees"
            description="A single, flat fee applies uniformly across all Indian author categories."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ink/8 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/8 bg-du-maroon/[0.03]">
                    <th className="px-6 py-4 font-semibold text-ink">Category</th>
                    <th className="px-6 py-4 font-semibold text-ink">
                      Early Bird
                      <span className="mt-0.5 block text-xs font-normal text-ink/50">
                        Until {registrationDeadlines.earlyBird}
                      </span>
                    </th>
                    <th className="px-6 py-4 font-semibold text-ink">
                      Standard
                      <span className="mt-0.5 block text-xs font-normal text-ink/50">
                        Until {registrationDeadlines.standard}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeSchedule.map((row) => (
                    <tr key={row.category} className="border-b border-ink/5 last:border-0">
                      <td className="px-6 py-5 align-top text-ink/80">
                        {row.category}
                        {row.note && <p className="mt-1 text-xs text-ink/45">{row.note}</p>}
                      </td>
                      <td className="px-6 py-5 align-top font-medium text-du-maroon">{row.earlyBird}</td>
                      <td className="px-6 py-5 align-top font-medium text-ink">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile-friendly card fallback for very small screens */}
          <div className="mt-6 grid gap-4 sm:hidden">
            {feeSchedule.map((row, idx) => (
              <Reveal key={row.category} delay={idx * 0.05}>
                <div className="rounded-xl border border-ink/8 bg-white p-5">
                  <p className="text-sm font-semibold text-ink">{row.category}</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-ink/45">Early Bird</p>
                      <p className="font-medium text-du-maroon">{row.earlyBird}</p>
                    </div>
                    <div>
                      <p className="text-xs text-ink/45">Standard</p>
                      <p className="font-medium text-ink">{row.standard}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-du-maroon/[0.03] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Includes" title="What Registration Includes" align="center" />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "Access to all technical sessions, keynotes, and invited talks",
              "Conference kit and delegate materials",
              "Inclusion of accepted paper in Springer LNEE proceedings (author registration)",
              "Networking opportunities with international researchers and industry leaders",
              "Access to panel discussions and pre-conference workshops",
              "Certificate of participation / presentation",
            ].map((item, idx) => (
              <Reveal key={item} delay={idx * 0.05}>
                <div className="flex h-full gap-3 rounded-xl border border-ink/8 bg-white p-5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-du-maroon" />
                  <p className="text-sm leading-relaxed text-ink/70">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Secure your place at AURA 2027</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              At least one author must register at the applicable fee for each accepted paper to be included in the
              proceedings. The registration portal will be linked here once it is live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={siteConfig.registration.url}>{siteConfig.registration.label}</Button>
              <Button to="/contact" variant="ghost">
                Contact the Organizers
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
