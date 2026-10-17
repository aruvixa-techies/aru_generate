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
  academicYearDegree: string; // e.g. "a 3rd-year student of B.Tech."
  departmentSpecialization: string; // e.g. "Computer Science and Engineering"
  collegeNameAndLocation: string; // e.g. "Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai"
  domainRole: string; // e.g. "Full Stack Development"
  startDate: string; // ISO date YYYY-MM-DD
  completionDate: string; // ISO date YYYY-MM-DD
  letterDate: string; // ISO date YYYY-MM-DD
  pronounSet: PronounSet;
  signatoryName: string; // "Ganesh Balaji S"
  signatoryRole: string; // "[Founder & Director]"
  companyName: string; // "Aruvixa tech solutions"
  companyEmail: string; // "aruvixa@aruvixa.com"
  companyWebsite: string; // "www.aruvixa.com"
  companyPhone: string; // "8122990435"
  companyAddress: string; // "Chennai, Tamil Nadu, India"
  includeSignature: boolean;
  includeSeal: boolean;
}

export interface InternshipOfferData {
  candidateName: string; // e.g. "Suraj S"
  degreeAndBranch: string; // e.g. "B.Tech CSE"
  yearOfStudy: string; // e.g. "3rd Year"
  collegeName: string; // e.g. "Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College"
  city: string; // e.g. "Chennai"
  letterDate: string; // ISO date e.g. "2026-07-17"
  salutationName: string; // e.g. "Suraj"
  department: string; // e.g. "Full Stack Development"
  focusDomain: string; // e.g. "Artificial Intelligence"
  startDate: string; // ISO date e.g. "2026-07-18"
  endDate: string; // ISO date e.g. "2026-09-30"
  mode: string; // "Online" | "Offline" | "Hybrid"
  duties: string[]; // List of primary duties
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
