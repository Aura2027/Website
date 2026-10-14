import { useState, type FormEvent } from "react";
import { siteConfig } from "../data/siteConfig";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const MAX_WORDS = 200;

// FormSubmit relays submissions to the inbox below. The very first submission
// triggers a one-time activation email to that inbox, which must be confirmed
// before messages start being delivered.
const ENDPOINT = `https://formsubmit.co/ajax/${siteConfig.contact.email}`;

type Status = "idle" | "sending" | "sent" | "error";

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const inputClasses =
  "mt-2 block w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-du-gold focus:outline-none focus:ring-2 focus:ring-du-gold/30";

export function QueryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const words = countWords(query);
  const overLimit = words > MAX_WORDS;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (overLimit || status === "sending") return;
    // Bots fill the hidden honeypot field; silently pretend success.
    if (honey) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          query,
          _subject: `${siteConfig.fullTitle} query from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || (data && String(data.success) !== "true")) throw new Error("Send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setQuery("");
    } catch {
      setStatus("error");
    }
  }

  const mailtoFallback = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `${siteConfig.fullTitle} query from ${name}`,
  )}&body=${encodeURIComponent(`${query}\n\n— ${name} (${email})`)}`;

  return (
    <section id="query" className="border-t border-ink/8 bg-du-maroon/[0.03] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Have a Question?"
              title="Send Us a Query"
              description="Questions about submissions, registration, or the conference? Drop us a note and the organizing team will get back to you by email."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm text-ink/60">
                Or write to us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-du-maroon hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {status === "sent" ? (
              <div
                role="status"
                className="flex h-full flex-col justify-center rounded-2xl border border-ink/8 bg-white p-8"
              >
                <p className="font-display text-xl font-medium text-ink">Thank you — your query has been sent.</p>
                <p className="mt-2 text-sm text-ink/60">We'll reply to the email address you provided.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 self-start text-sm font-semibold text-du-maroon hover:underline"
                >
                  Send another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/8 bg-white p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-ink/80">
                    Your name
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClasses}
                    />
                  </label>
                  <label className="block text-sm font-medium text-ink/80">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClasses}
                    />
                  </label>
                </div>

                <label className="mt-5 block text-sm font-medium text-ink/80">
                  Query
                  <textarea
                    name="query"
                    required
                    rows={6}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-describedby="query-word-count"
                    aria-invalid={overLimit}
                    className={`${inputClasses} resize-y ${overLimit ? "border-red-400 focus:border-red-400 focus:ring-red-200" : ""}`}
                  />
                </label>
                <p
                  id="query-word-count"
                  className={`mt-2 text-right text-xs ${overLimit ? "font-semibold text-red-600" : "text-ink/45"}`}
                >
                  {words} / {MAX_WORDS} words{overLimit && " — please shorten your query"}
                </p>

                {/* Honeypot: hidden from people, tempting to bots */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  className="hidden"
                  aria-hidden
                />

                {status === "error" && (
                  <p role="alert" className="mt-4 text-sm text-red-600">
                    Sorry, your query couldn't be sent.{" "}
                    <a href={mailtoFallback} className="font-semibold underline">
                      Email it to us instead
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={overLimit || status === "sending"}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-du-maroon px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-du-maroon-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Query"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
