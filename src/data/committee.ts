export interface Person {
  name: string;
  role?: string;
  affiliation: string;
}

export interface CommitteeGroup {
  id: string;
  title: string;
  members: Person[];
}

const FOT = "Faculty of Technology, University of Delhi";
const KIET = "KIET Group of Institutions (Deemed University), Ghaziabad";

export const committeeGroups: CommitteeGroup[] = [
  {
    id: "patron-in-chief",
    title: "Patron-in-Chief",
    members: [
      {
        name: "Prof. Yogesh Singh",
        role: "Hon'ble Vice Chancellor",
        affiliation: "University of Delhi",
      },
    ],
  },
  {
    id: "patrons",
    title: "Patrons",
    members: [
      {
        name: "Prof. Sanjeev Singh",
        role: "Dean",
        affiliation: FOT,
      },
      {
        name: "Prof. Sukumar Mishra",
        role: "Director, IIT (ISM) Dhanbad & Professor, Department of Electrical Engineering",
        affiliation: "IIT Delhi",
      },
      {
        name: "Prof. Bijaya Ketan Panigrahi",
        role: "Professor, Department of Electrical Engineering",
        affiliation: "IIT Delhi",
      },
    ],
  },
  {
    id: "co-patron",
    title: "Co-Patron",
    members: [
      { name: "Prof. Vanita Jain", affiliation: FOT },
      { name: "Prof. Prerna Gaur", affiliation: "NSUT, Delhi" },
    ],
  },
  {
    id: "organizing-chair",
    title: "Organizing Chair",
    members: [
      {
        name: "Prof. Anuradha Tomar",
        role: "Associate Professor & Head, Department of Electrical Engineering — Primary Contact",
        affiliation: FOT,
      },
      { name: "Prof. Dushyant Sharma", affiliation: "IIT (ISM) Dhanbad" },
      { name: "Prof. Manoj Debnath", affiliation: "SOA University, Bhubaneswar" },
      { name: "Prof. Sunanda Sinha", affiliation: "MNIT Jaipur" },
    ],
  },
  {
    id: "conference-secretaries",
    title: "Conference Secretaries",
    members: [
      { name: "Prof. Deepika", affiliation: FOT },
      { name: "Prof. Ujjal Sur", affiliation: FOT },
      { name: "Prof. Jyoti Yadav", affiliation: "NSUT" },
      { name: "Prof. Neeraj Gupta", affiliation: "NIT Srinagar, J&K" },
      { name: "Prof. Prashant Malik", affiliation: "NIT Allahabad" },
      { name: "Prof. Vinay Jandoun", affiliation: "MIT Manipal" },
    ],
  },
  {
    id: "program-chairs",
    title: "Program Chairs",
    members: [
      { name: "Prof. Manu Wardhan", affiliation: FOT },
      { name: "Prof. Shailendra", affiliation: "IIT Bhilai" },
      { name: "Prof. Arjun Tyagi", affiliation: FOT },
      { name: "Prof. Ranjeet Singh", affiliation: FOT },
    ],
  },
  {
    id: "publication-chair",
    title: "Publication Chair",
    members: [
      { name: "Prof. Ritu Kandari", affiliation: KIET },
      { name: "Prof. Neeraj", affiliation: KIET },
      { name: "Prof. Preeti Palwal", role: "Skill Assistant Professor", affiliation: "Shri Vishwakarma Skill University" },
      { name: "Prof. Dipayan Guha", affiliation: "MNNIT Allahabad" },
      { name: "Prof. Ajay Kumar Sahu", affiliation: FOT },
      { name: "Prof. Shubham Gupta", affiliation: FOT },
    ],
  },
  {
    id: "hospitality-chair",
    title: "Hospitality Chair",
    members: [
      { name: "Prof. Varun Saxena", affiliation: FOT },
      { name: "Prof. Jeetendra Prasad", affiliation: FOT },
      { name: "Prof. Geetanjali Bhola", affiliation: FOT },
      { name: "Prof. Shivani", affiliation: FOT },
      { name: "Prof. Ashutosh Pandey", affiliation: FOT },
      { name: "Prof. Ranjeet Singh", affiliation: FOT },
    ],
  },
  {
    id: "event-management-chair",
    title: "Event Management Chair",
    members: [
      { name: "Prof. Juhi Jain", affiliation: FOT },
      { name: "Prof. Sangeeta Yadav", affiliation: FOT },
      { name: "Prof. Jeetendra Prasad", affiliation: FOT },
      { name: "Prof. Jatin Sharma", affiliation: FOT },
      { name: "Prof. Vandana Kumari", affiliation: FOT },
    ],
  },
  {
    id: "finance-chairs",
    title: "Finance Chairs",
    members: [
      { name: "Prof. Bhawna Aggarwal", affiliation: FOT },
      { name: "Prof. Sanjeev Kumar Yadav", affiliation: FOT },
      { name: "Prof. Arjun Tyagi", affiliation: FOT },
      { name: "Prof. Khushwant Sehra", affiliation: FOT },
    ],
  },
  {
    id: "sponsorship-chair",
    title: "Sponsorship Chair",
    members: [
      { name: "Prof. Shubham Gupta", affiliation: FOT },
      { name: "Prof. Ajay Kumar Sahu", affiliation: FOT },
      { name: "Prof. Diptiranjan Samantaray", affiliation: FOT },
      { name: "Prof. Ujjal Sur", affiliation: FOT },
      { name: "Prof. Utkarsh", affiliation: FOT },
    ],
  },
  {
    id: "publicity-chairs",
    title: "Publicity Chairs",
    members: [
      { name: "Prof. Nishant Kumar", affiliation: "IIT Jodhpur" },
      { name: "Prof. Mritunjay Singh", affiliation: "IIIT Una" },
      { name: "Prof. Amit Kumar", affiliation: "Thapar University" },
      { name: "Prof. Anshul Agarwal", affiliation: "Babasaheb Bhimrao Ambedkar University (Central University), Lucknow" },
      { name: "Prof. Deepika", affiliation: FOT },
      { name: "Prof. Ujjal Sur", affiliation: FOT },
    ],
  },
  {
    id: "steering-committee",
    title: "Steering Committee",
    members: [
      { name: "Prof. A.K. Tandon", affiliation: FOT },
      { name: "Prof. Raj Senani", affiliation: FOT },
      { name: "Prof. D.R. Bhaskara", affiliation: FOT },
      { name: "Prof. G.S. Chillana", affiliation: FOT },
      { name: "Prof. P.K. Singh", affiliation: FOT },
      { name: "Prof. Y.R. Sood", affiliation: "NIT Hamirpur" },
      { name: "Prof. Vivek Srivastava", affiliation: "NIT Uttarakhand" },
      { name: "Prof. Bhim Singh", affiliation: "IIT Delhi" },
    ],
  },
  {
    id: "local-organizing-committee",
    title: "Local Organizing Committee",
    members: [
      { name: "Prof. Unmesh Shukla", affiliation: FOT },
      { name: "Prof. Bhawna Rawat", affiliation: FOT },
      { name: "Prof. Sunil Kumar Singh", affiliation: FOT },
      { name: "Prof. Rekha", affiliation: FOT },
      { name: "Prof. Ajay Kumar Gupta", affiliation: FOT },
      { name: "Prof. Sweta Rani", affiliation: FOT },
      { name: "Prof. Gurinder Singh", affiliation: FOT },
      { name: "Prof. Rahul Solanki", affiliation: FOT },
      { name: "Prof. Kajal Kumari", affiliation: FOT },
      { name: "Prof. Ahmad Khan", affiliation: FOT },
      { name: "Prof. Anuj Kumar", affiliation: FOT },
    ],
  },
];

export const internationalAdvisoryBoard: Person[] = [
  { name: "Prof. Mohan Kolhe", affiliation: "University of Agder, Norway" },
  { name: "Prof. Sanjeevikumar Padmanaban", affiliation: "Aarhus University, Denmark" },
  { name: "Prof. Arkady Zaslavsky", role: "Senior Principal Research Scientist", affiliation: "CSIRO, Australia" },
  { name: "Prof. Maria Ganzha", affiliation: "Warsaw University of Technology, Poland" },
  { name: "Prof. Harish Sarma Krishnamoorthy", affiliation: "University of Houston, USA" },
  { name: "Prof. Subham Sahoo", affiliation: "Aalborg University, Denmark" },
  { name: "Prof. Jerry Gao", affiliation: "San Jose State University, USA" },
  { name: "Prof. Sartaj Sahni", affiliation: "University of Florida, USA" },
  { name: "Prof. Sunil Kumar", affiliation: "San Diego State University, USA" },
  { name: "Prof. Marcin Paprzycki", affiliation: "Polish Academy of Sciences, Poland" },
  { name: "Prof. Jafar Alzubi", affiliation: "Al-Balqa Applied University, Jordan" },
  { name: "Prof. David Asirvatham", affiliation: "Taylor's University, Malaysia" },
  { name: "Prof. Mamoun Alazab", affiliation: "Charles Darwin University, Australia" },
  { name: "Prof. Babar Muhammad", affiliation: "DNV Digital Grid Operations, Netherlands" },
];

export const technicalProgramCommittee: Person[] = [
  { name: "Prof. Manoj Saxena", affiliation: "Deen Dayal Upadhyaya College, University of Delhi" },
  { name: "Prof. Harish Kumar", affiliation: "NIT Delhi" },
  { name: "Prof. Tarikul Islam", affiliation: "Jamia Millia Islamia" },
  { name: "Prof. Vinod Kumar Yadav", affiliation: "DTU Delhi" },
  { name: "Prof. Sandeep Kaur", affiliation: "PEC Chandigarh" },
  { name: "Prof. Anmol Saxena", affiliation: "NIT Delhi" },
  { name: "Prof. Nitish Katal", affiliation: "VIT Chennai" },
  { name: "Prof. Naveen Agarwal", affiliation: "UIET, Panjab University, Chandigarh" },
  { name: "Prof. Arun Rathore", affiliation: "NIT Jalandhar" },
  { name: "Prof. Nikhilesh Singh", affiliation: "NIT Delhi" },
  { name: "Prof. Satish Sharma", affiliation: "MNIT Jaipur" },
  { name: "Prof. Prashant Kumar Tiwari", affiliation: "NIT Allahabad" },
  { name: "Prof. Manisha Singh", affiliation: "NSUT" },
  { name: "Prof. Satakshi", affiliation: "DTU Delhi" },
  { name: "Prof. Anshul Varshney", affiliation: "CSIR-NPL, New Delhi" },
  { name: "Prof. Subho Paul", affiliation: "IIT BHU" },
  { name: "Prof. Rintu Khanna", affiliation: "PEC Chandigarh" },
  { name: "Prof. Rishi Kant", affiliation: "IIT Delhi" },
  { name: "Prof. Ajishek Raj", affiliation: "NIT Patna" },
  { name: "Prof. Tapan Trivedi", affiliation: "Marwadi University" },
  { name: "Prof. Pankaj Kumar", affiliation: "PDEU, Gujarat" },
  { name: "Prof. Vikas Kumar", affiliation: "NIT Kurukshetra" },
  { name: "Prof. Ankita Arora", affiliation: "DTU Delhi" },
  { name: "Prof. Ravita Lamba", affiliation: "IIT Roorkee" },
  { name: "Prof. Nidhi Jain", affiliation: "IIT Delhi" },
  { name: "Prof. Amol Singh", affiliation: "University of Delhi" },
  { name: "Prof. Bhavnesh Jaint", affiliation: "DTU" },
  { name: "Prof. Samir Gokarn", affiliation: "NSUT Delhi" },
  { name: "Prof. Adil Sarwar", affiliation: "Aligarh Muslim University" },
  { name: "Prof. Alok Agarwal", affiliation: "NSUT" },
  { name: "Prof. Anmol Ratna Saxena", affiliation: "NIT Delhi" },
  { name: "Prof. Manoj Badoni", affiliation: "Thapar University" },
  { name: "Prof. Ankit Kumar Singh", affiliation: "NSUT" },
  { name: "Prof. Rashmi Agarwal", affiliation: "YMCA Faridabad" },
  { name: "Prof. Gunjan Varshney", affiliation: "JSS University" },
  { name: "Prof. Manpreet Kaur", affiliation: "Manav Rachna University" },
  { name: "Prof. Arun Kumar Singh", affiliation: "PEC Chandigarh" },
  { name: "Prof. Ujjwal Kumar Kalla", affiliation: "NIT Delhi" },
];
