export interface FeeRow {
  category: string;
  earlyBird: string;
  standard: string;
  note?: string;
}

export const feeSchedule: FeeRow[] = [
  {
    category: "Indian Authors: Research Scholars / Faculty / PhD Students / Postdocs",
    earlyBird: "₹7,000 (flat) + GST",
    standard: "₹7,000 (flat) + GST",
    note: "Uniform flat rate across all Indian author categories",
  },
  {
    category: "Attendee Registration (without paper)",
    earlyBird: "₹1,500 + GST",
    standard: "₹1,500 + GST",
  },
  {
    category: "International Authors (Academia)",
    earlyBird: "USD 120 (≈ ₹10,000) + GST",
    standard: "USD 150 (≈ ₹12,500)",
  },
  {
    category: "International Attendee (online participation)",
    earlyBird: "₹1,500 + GST",
    standard: "₹1,500 + GST",
  },
];

export const registrationDeadlines = {
  earlyBird: "15 May 2027",
  standard: "15 July 2027",
};
