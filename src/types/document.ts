export type DocumentStatus = 'active' | 'coming-soon';

export interface DocumentTypeOption {
  id: string;
  title: string;
  category: 'Certificates' | 'Letters' | 'Recruitment';
  description: string;
  badge: string;
  status: DocumentStatus;
  estimatedTime: string;
}

export type Salutation = 'Mr.' | 'Ms.' | 'Mx.';
export type PronounSet = 'he/his/him' | 'she/her/her' | 'they/their/them';

export interface InternshipLetterData {
  salutation: Salutation;
  internName: string;
  academicYearDegree: string;
  departmentSpecialization: string;
  collegeNameAndLocation: string;
  domainRole: string;
  startDate: string;
  completionDate: string;
  letterDate: string;
  pronounSet: PronounSet;
  signatoryName: string;
  signatoryRole: string;
  companyName: string;
  companyEmail: string;
  companyWebsite: string;
  companyPhone: string;
  companyAddress: string;
  includeSignature: boolean;
  includeSeal: boolean;
}

export interface InternshipOfferData {
  candidateName: string;
  degreeAndBranch: string;
  yearOfStudy: string;
  collegeName: string;
  city: string;
  letterDate: string;
  salutationName: string;
  department: string;
  focusDomain: string;
  startDate: string;
  endDate: string;
  mode: string;
  duties: string[];
  companyName: string;
  companyEmail: string;
  companyWebsite: string;
  companyPhone: string;
  companyAddress: string;
  signatoryName: string;
  signatoryRole: string;
  includeSignature: boolean;
  includeSeal: boolean;
}

export interface JobOfferData {
  candidateName: string; // e.g. "Suraj S"
  candidateAddress: string; // e.g. "Plot No. 14, 2nd Main Road, Anna Nagar"
  city: string; // e.g. "Chennai, Tamil Nadu - 600040"
  letterDate: string; // ISO date e.g. "2026-10-17"
  salutationName: string; // e.g. "Suraj"
  designation: string; // e.g. "Associate Software Engineer"
  department: string; // e.g. "Full Stack Development & Cloud Architecture"
  dateOfJoining: string; // ISO date e.g. "2026-11-01"
  annualCtc: string; // e.g. "INR 6,50,000 per annum"
  workLocation: string; // e.g. "Chennai, Tamil Nadu (Hybrid)"
  probationPeriod: string; // e.g. "3 Months from Date of Joining"
  responsibilities: string[]; // 4 bullet points
  companyName: string; // "Aruvixa tech solutions"
  companyEmail: string; // "aruvixa@aruvixa.com"
  companyWebsite: string; // "www.aruvixa.com"
  companyPhone: string; // "8122990435"
  companyAddress: string; // "Chennai, Tamil Nadu, India"
  signatoryName: string; // "Ganesh Balaji S"
  signatoryRole: string; // "[Founder & Director]"
  includeSignature: boolean;
  includeSeal: boolean;
}

export interface CertificateData {
  internName: string;
  role: string;
  department: string;
  companyName: string;
  startDate: string;
  completionDate: string;
  issueDate: string;
  certificateId: string;
  signatoryName: string;
  signatoryRole: string;
  performanceGrade?: string;
}

export interface ValidationErrors {
  [key: string]: string;
}
