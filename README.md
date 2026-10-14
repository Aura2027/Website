# AURA 2027 — Conference Website (Frontend)

Frontend for **AURA 2027** — *International Conference on AI for Utilities, Renewables & Automation*, organised by the Faculty of Technology, University of Delhi.

This is a **frontend-only** site: there is no backend, database, or authentication. "Submit Paper" and "Register" buttons point to placeholder links until real submission/registration portals are supplied.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion (scroll reveals, hero entrance, mobile menu transitions)

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # type-check and build for production into dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  data/         # All conference content (tracks, dates, committee, fees, etc.)
  components/   # Reusable UI (Navbar, Footer, cards, timeline, reveal animation)
  pages/        # One file per route
  assets/       # University of Delhi logo + campus photo
```

Content lives entirely in `src/data/*.ts` — update names, dates, fees, or committee members there without touching any component code.

## Pages

- `/` — Home
- `/about` — About the conference, motivation, format, significance, host institution
- `/committee` — Patrons, organizing committee, international advisory board, technical program committee
- `/speakers` — Keynote/invited speaker info (marked "to be announced" — no speakers supplied yet)
- `/call-for-papers` — Tracks with full scope, submission guidelines, publication details
- `/important-dates` — Visual timeline of milestones
- `/registration` — Fee table and inclusions
- `/venue` — Venue details, travel/accommodation placeholders, embedded map
- `/contact` — Primary contact and organiser info

## Query Form

Every page ends with a query form (`src/components/QueryForm.tsx`) asking for name, email, and a query of up to 200 words. Because the site has no backend, submissions are relayed by [FormSubmit](https://formsubmit.co) to `siteConfig.contact.email` (aura2027@fot.du.ac.in).

**One-time setup:** the first submission sends an activation email to that inbox. Someone with access to it must click the confirmation link; queries are delivered only after that. If sending fails, the form offers a `mailto:` link instead.

## Deployment

This is a static Vite build — deploy the `dist/` folder to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **GitHub Pages**: run `npm run build`, publish `dist/`
- Any static file server (S3 + CloudFront, nginx, etc.)

## Known Placeholders / Missing Information

The following are marked "to be announced" in the UI because they were not present in the supplied conference document:

- Speaker names, photos, talk titles, and biographies
- Paper submission portal URL
- Registration portal URL
- Detailed travel directions and accommodation recommendations
- Session-by-session program schedule (only the two-day format is documented)

Update `src/data/siteConfig.ts` and the relevant page once this information is available.
