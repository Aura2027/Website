export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export const announcements: Announcement[] = [
  {
    id: "cfp-open",
    title: "Call for Papers is now open",
    date: "Ongoing",
    category: "Call for Papers",
    description:
      "AURA 2027 invites original, unpublished research across seven technical tracks spanning AI for utilities, renewable energy, industrial automation, and more.",
  },
  {
    id: "submission-deadline",
    title: "Paper submission deadline announced",
    date: "20 February 2027",
    category: "Deadline",
    description:
      "Authors are invited to submit full papers (8–15 pages, Springer format) for double-blind peer review ahead of the submission deadline.",
  },
  {
    id: "publication-partner",
    title: "Proceedings to be published with Springer LNEE",
    date: "Publication",
    category: "Publication",
    description:
      "Accepted and presented papers will be published in Springer Lecture Notes in Electrical Engineering (LNEE), continuing the Scopus-indexed publication tradition of the MARC/AURA series.",
  },
];
