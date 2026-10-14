import { Link } from "react-router-dom";
import duLogo from "../assets/du-logo.png";
import { siteConfig } from "../data/siteConfig";

const columns = [
  {
    title: "Conference",
    links: [
      { label: "About", to: "/about" },
      { label: "Committee", to: "/committee" },
      { label: "Speakers", to: "/speakers" },
    ],
  },
  {
    title: "Authors",
    links: [
      { label: "Call for Papers", to: "/call-for-papers" },
      { label: "Important Dates", to: "/important-dates" },
      { label: "Registration", to: "/registration" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Venue & Travel", to: "/venue" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-du-maroon-dark text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={duLogo} alt="University of Delhi crest" className="h-12 w-12" />
              <div>
                <p className="font-display text-lg font-semibold text-white">{siteConfig.fullTitle}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-white/50">University of Delhi</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.conferenceName}, organised by the {siteConfig.organiser.department},{" "}
              {siteConfig.organiser.university}.
            </p>
            <p className="mt-4 text-sm text-white/60">
              {siteConfig.dates} &middot; {siteConfig.venue.short}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-du-gold-light">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.fullTitle}, {siteConfig.organiser.university}. All rights
            reserved.
          </p>
          <p>Faculty of Technology, University of Delhi</p>
        </div>
      </div>
    </footer>
  );
}
