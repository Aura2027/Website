export interface Milestone {
  id: string;
  label: string;
  date: string;
  sortDate: string;
  note?: string;
}

export const importantDates: Milestone[] = [
  {
    id: "cfp",
    label: "Call for Papers Opens",
    date: "To Be Announced",
    sortDate: "2026-01-01",
  },
  {
    id: "submission",
    label: "Paper Submission Deadline",
    date: "30 November 2026",
    sortDate: "2026-11-30",
  },
  {
    id: "notification",
    label: "Notification of Acceptance",
    date: "25 December 2026",
    sortDate: "2026-12-25",
  },
  {
    id: "camera-ready",
    label: "Camera-Ready Paper Submission",
    date: "25 January 2027",
    sortDate: "2027-01-25",
  },
  {
    id: "early-registration",
    label: "Early-Bird Registration Deadline",
    date: "15 February 2027",
    sortDate: "2027-02-15",
  },
  {
    id: "standard-registration",
    label: "Standard Registration Deadline",
    date: "15 April 2027",
    sortDate: "2027-04-15",
  },
  {
    id: "conference",
    label: "AURA 2027 Conference",
    date: "30–31 July 2027",
    sortDate: "2027-07-30",
    note: "Maharishi Kanad Bhawan, Faculty of Technology, University of Delhi",
  },
];
