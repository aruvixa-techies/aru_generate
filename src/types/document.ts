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
  candidateName: string;
  candidateAddress: string;
  city: string;
  letterDate: string;
  salutationName: string;
  designation: string;
  department: string;
  dateOfJoining: string;
  annualCtc: string;
  workLocation: string;
  probationPeriod: string;
  responsibilities: string[];
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

export interface LorData {
  candidateSalutation: Salutation;
  candidateName: string; // e.g. "Suraj S"
  candidateRole: string; // e.g. "Full Stack Engineering Intern"
  department: string; // e.g. "Software Engineering & Cloud Architecture"
  startDate: string; // ISO date e.g. "2026-07-18"
  completionDate: string; // ISO date e.g. "2026-09-20"
  letterDate: string; // ISO date e.g. "2026-10-17"
  pronounSet: PronounSet;
  keyContributions: string; // Notable technical accomplishments
  softSkills: string; // Professional qualities
  recommendationStrength: string; // e.g. "enthusiastically without reservation"
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
