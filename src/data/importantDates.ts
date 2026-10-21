import { siteConfig } from "./siteConfig";

export interface Milestone {
  id: string;
  label: string;
  date: string;
  sortDate: string;
  note?: string;
  link?: { label: string; href: string };
}

export const importantDates: Milestone[] = [
  {
    id: "cfp",
    label: "Call for Papers Open for Submission",
    date: "Open Now",
    sortDate: "2026-01-01",
    link: { label: siteConfig.submission.label, href: siteConfig.submission.url },
  },
  {
    id: "submission",
    label: "Paper Submission Deadline",
    date: "31 January 2027",
    sortDate: "2027-01-31",
  },
  {
    id: "notification",
    label: "Notification of Acceptance",
    date: "15 April 2027",
    sortDate: "2027-04-15",
  },
  {
    id: "camera-ready",
    label: "Camera-Ready Paper Submission",
    date: "15 May 2027",
    sortDate: "2027-05-15",
  },
  {
    id: "early-registration",
    label: "Early-Bird Registration Deadline",
    date: "15 May 2027",
    sortDate: "2027-05-15",
  },
  {
    id: "standard-registration",
    label: "Standard Registration Deadline",
    date: "15 July 2027",
    sortDate: "2027-07-15",
  },
  {
    id: "conference",
    label: "AURA 2027 Conference",
    date: "30–31 July 2027",
    sortDate: "2027-07-30",
    note: "Maharishi Kanad Bhawan, Faculty of Technology, University of Delhi",
  },
];
