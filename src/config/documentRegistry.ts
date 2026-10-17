import type { DocumentTypeOption, InternshipLetterData, InternshipOfferData } from '../types/document';

export const DOCUMENT_TYPES: DocumentTypeOption[] = [
  {
    id: 'internship-letter',
    title: 'Internship Completion Letter',
    category: 'Certificates',
    description: 'Official Aruvixa Tech Solutions completion letter with company seal, founder signature, and verified institutional details.',
    badge: 'Active Template',
    status: 'active',
    estimatedTime: '< 1 min'
  },
  {
    id: 'internship-offer',
    title: 'Internship Offer Letter',
    category: 'Letters',
    description: 'Official Aruvixa acceptance offer detailing domain, tenure, online/offline mode, duties, and NDA terms.',
    badge: 'Active Template',
    status: 'active',
    estimatedTime: '< 1 min'
  },
  {
    id: 'internship-recommendation',
    title: 'Letter of Recommendation (LOR)',
    category: 'Letters',
    description: 'Comprehensive performance endorsement documenting key deliverables and professional strengths.',
    badge: 'Coming Soon',
    status: 'coming-soon',
    estimatedTime: 'Planned'
  },
  {
    id: 'job-offer',
    title: 'Job Offer Letter',
    category: 'Recruitment',
    description: 'Comprehensive full-time employment agreement with CTC breakdown and company policies.',
    badge: 'Coming Soon',
    status: 'coming-soon',
    estimatedTime: 'Planned'
  },
  {
    id: 'interview-call',
    title: 'Interview Call Letter',
    category: 'Recruitment',
    description: 'Official interview invite with round details, evaluation panel, and reporting instructions.',
    badge: 'Coming Soon',
    status: 'coming-soon',
    estimatedTime: 'Planned'
  }
];

export const OFFICIAL_COMPANY_TEMPLATE_DATA: InternshipLetterData = {
  salutation: 'Mr.',
  internName: 'Suraj S',
  academicYearDegree: 'a 3rd-year student of B.Tech.',
  departmentSpecialization: 'Computer Science and Engineering',
  collegeNameAndLocation: 'Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai',
  domainRole: 'Full Stack Development',
  startDate: '2026-07-18',
  completionDate: '2026-09-20',
  letterDate: '2026-09-20',
  pronounSet: 'he/his/him',
  signatoryName: 'Ganesh Balaji S',
  signatoryRole: '[Founder & Director]',
  companyName: 'Aruvixa tech solutions',
  companyEmail: 'aruvixa@aruvixa.com',
  companyWebsite: 'www.aruvixa.com',
  companyPhone: '8122990435',
  companyAddress: 'Chennai, Tamil Nadu, India',
  includeSignature: true,
  includeSeal: true
};

export const OFFICIAL_OFFER_LETTER_DATA: InternshipOfferData = {
  candidateName: 'Suraj S',
  degreeAndBranch: 'B.Tech CSE',
  yearOfStudy: '3rd Year',
  collegeName: 'Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College',
  city: 'Chennai',
  letterDate: '2026-07-17',
  salutationName: 'Suraj',
  department: 'Full Stack Development',
  focusDomain: 'Artificial Intelligence',
  startDate: '2026-07-18',
  endDate: '2026-09-30',
  mode: 'Online',
  duties: [
    'Assisting in data collection, preprocessing, and analysis.',
    'Developing machine learning models and evaluating their performance.',
    'Collaborating with the software development team to integrate data-driven solutions.',
    'Generating reports and visualizations to support decision-making.'
  ],
  companyName: 'Aruvixa tech solutions',
  companyEmail: 'aruvixa@aruvixa.com',
  companyWebsite: 'www.aruvixa.com',
  companyPhone: '8122990435',
  companyAddress: 'Chennai, Tamil Nadu, India',
  signatoryName: 'Ganesh Balaji S',
  signatoryRole: '[Founder & Director]',
  includeSignature: true,
  includeSeal: true
};
