import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="For queries regarding submissions, registration, or general information about AURA 2027, please reach out to the organizing team."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink/8 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Contacts</p>
                <ol className="mt-4 space-y-6">
                  {siteConfig.contact.people.map((person) => (
                    <li key={person.name}>
                      <p className="font-display text-xl font-medium text-ink">{person.name}</p>
                      <p className="mt-1 text-sm text-ink/60">{person.role}</p>
                      <p className="mt-1 text-sm text-ink/60">{person.affiliation}</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1 inline-block text-sm font-medium text-du-maroon hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 border-t border-ink/8 pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Address</p>
                    <p className="mt-1 text-sm font-medium text-ink/70">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-ink/8 bg-du-maroon/[0.03] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-du-maroon">Organised By</p>
                <p className="mt-4 font-display text-xl font-medium text-ink">
                  {siteConfig.organiser.department}
                </p>
                <p className="mt-1 text-sm text-ink/60">{siteConfig.organiser.university}</p>
                <p className="mt-6 text-sm leading-relaxed text-ink/60">
                  Send your query using the form below, or write to us directly at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-du-maroon hover:underline">
                    {siteConfig.contact.email}
                  </a>
                  . You can also refer to the{" "}
                  <Link to="/committee" className="font-medium text-du-maroon hover:underline">
                    committee page
                  </Link>{" "}
                  for the relevant chair for your query.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
