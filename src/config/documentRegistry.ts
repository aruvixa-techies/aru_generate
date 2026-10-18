import type {
  DocumentTypeOption,
  InternshipLetterData,
  InternshipOfferData,
  JobOfferData,
  LorData
} from '../types/document';

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
    id: 'job-offer',
    title: 'Job Offer Letter',
    category: 'Recruitment',
    description: 'Official full-time employment agreement detailing designation, CTC breakdown, joining date, and policies.',
    badge: 'Active Template',
    status: 'active',
    estimatedTime: '< 1 min'
  },
  {
    id: 'internship-recommendation',
    title: 'Letter of Recommendation (LOR)',
    category: 'Letters',
    description: 'Comprehensive performance endorsement documenting key deliverables, leadership, and professional strengths.',
    badge: 'Active Template',
    status: 'active',
    estimatedTime: '< 1 min'
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

export const OFFICIAL_JOB_OFFER_DATA: JobOfferData = {
  candidateName: 'Suraj S',
  candidateAddress: 'Plot No. 14, 2nd Main Road, Anna Nagar',
  city: 'Chennai, Tamil Nadu - 600040',
  letterDate: '2026-10-17',
  salutationName: 'Suraj',
  designation: 'Associate Software Engineer',
  department: 'Full Stack Engineering & Cloud Architecture',
  dateOfJoining: '2026-11-02',
  annualCtc: 'INR 6,50,000 per annum',
  workLocation: 'Chennai, Tamil Nadu (Hybrid)',
  probationPeriod: '3 Months from Date of Joining',
  responsibilities: [
    'Architecting, building, and deploying scalable web applications and RESTful backend APIs.',
    'Collaborating with UI/UX engineers and product stakeholders to ship reliable client features.',
    'Participating in architectural design reviews, system benchmarking, and sprint milestones.',
    'Upholding code quality, continuous integration pipelines, and strict cybersecurity guidelines.'
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

export const OFFICIAL_LOR_DATA: LorData = {
  candidateSalutation: 'Mr.',
  candidateName: 'Suraj S',
  candidateRole: 'Full Stack Engineering Intern',
  department: 'Software Engineering & Cloud Architecture',
  startDate: '2026-07-18',
  completionDate: '2026-09-20',
  letterDate: '2026-10-17',
  pronounSet: 'he/his/him',
  keyContributions:
    'Suraj exhibited a thorough understanding of full-stack system architecture, modern web frameworks, and RESTful API integrations. He was instrumental in developing responsive web interfaces, optimizing backend data pipelines, and consistently authoring clean, well-documented, and robust production code.',
  softSkills:
    'Beyond technical excellence, Suraj demonstrated admirable professionalism, intellectual curiosity, and proactive ownership of sprint milestones with minimal supervision.',
  recommendationStrength: 'enthusiastically and without reservation',
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
