export interface LegacyEdition {
  edition: string;
  stat: string;
  detail: string;
}

export const legacyEditions: LegacyEdition[] = [
  {
    edition: "MARC 2018",
    stat: "504 → 113",
    detail: "504 submissions, 113 accepted and published in Springer LNEE (ISBN: 978-981-13-6771-7)",
  },
  {
    edition: "MARC 2020",
    stat: "294 → 57",
    detail: "294 submissions, 57 accepted (Springer LNEE, DOI: 10.1007/978-981-16-2354-7)",
  },
  {
    edition: "MARC 2021",
    stat: "Springer LNEE",
    detail: "Published in the Springer LNEE series",
  },
  {
    edition: "MARC 2023",
    stat: "Springer LNEE",
    detail: "Published in the Springer LNEE series (DOI: 10.1007/978-981-97-5227-0)",
  },
];

export const significancePoints: string[] = [
  "Elevate the international academic visibility of the Faculty of Technology and the University of Delhi",
  "Generate a Scopus-indexed Springer volume bearing the University's name and affiliation",
  "Attract leading researchers from 15+ countries to the University campus",
  "Create direct networking and collaborative opportunities for faculty and PhD students",
  "Strengthen ties with industry, government labs (CSIR, DRDO), and international universities",
  "Serve as evidence of research excellence in the context of NIRF rankings and NAAC accreditation",
];

export const conferenceFormat: string[] = [
  "Inaugural ceremony with dignitaries from academia, government, and industry",
  "Keynote addresses by 4–6 eminent national and international experts",
  "Invited talks from industry leaders and senior research scientists",
  "Peer-reviewed technical paper presentations",
  "Panel discussions on national policy, industry challenges, and AI ethics in critical infrastructure",
  "Pre-conference / co-located workshops and hands-on tutorials on emerging AI tools",
];
