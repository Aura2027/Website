export const siteConfig = {
  conferenceName: "International Conference on AI for Utilities, Renewables & Automation",
  acronym: "AURA",
  edition: "2027",
  fullTitle: "AURA 2027",
  tagline: "AI for Utilities, Renewables & Automation",
  dates: "28–29 May 2027",
  dateRange: {
    start: "2027-05-28",
    end: "2027-05-29",
  },
  venue: {
    hall: "Maharishi Kanad Bhawan",
    campus: "Faculty of Technology, University of Delhi",
    city: "Delhi, India",
    short: "Maharishi Kanad Bhawan, Faculty of Technology, University of Delhi",
  },
  organiser: {
    hostDepartment: "Department of Electrical Engineering",
    department: "Faculty of Technology",
    university: "University of Delhi",
  },
  publication: {
    series: "Springer Lecture Notes in Electrical Engineering (LNEE)",
    indexing: "Scopus-indexed",
    pageRange: "8–15 pages",
    format: "Springer format",
    review: "rigorous double-blind peer review",
  },
  submission: {
    // Placeholder — no external submission portal supplied yet.
    url: "#",
    label: "Submission portal to be announced",
  },
  registration: {
    // Placeholder — no external registration portal supplied yet.
    url: "#",
    label: "Registration portal to be announced",
  },
  contact: {
    email: "aura2027@fot.du.ac.in",
    people: [
      {
        name: "Prof. Anuradha Tomar",
        role: "Organizing Chair — Associate Professor & Head, Department of Electrical Engineering",
        affiliation: "Faculty of Technology, University of Delhi",
      },
      {
        name: "Dr. Deepika",
        role: "Organizing Secretary",
        affiliation: "Faculty of Technology, University of Delhi",
      },
      {
        name: "Dr. Ujjal Sur",
        role: "Organizing Secretary",
        affiliation: "Faculty of Technology, University of Delhi",
      },
    ],
    address: "Maharishi Kanad Bhawan, Faculty of Technology, University of Delhi, Delhi, India",
  },
} as const;
