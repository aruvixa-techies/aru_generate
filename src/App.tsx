import React, { useState, useRef } from 'react';
import { Navbar } from './components/layout/Navbar';
import { DocumentCatalog } from './components/dashboard/DocumentCatalog';
import { LetterForm } from './components/form/LetterForm';
import { LetterPreview } from './components/preview/LetterPreview';
import { OfferLetterForm } from './components/form/OfferLetterForm';
import { OfferLetterPreview } from './components/preview/OfferLetterPreview';
import { PreviewToolbar } from './components/preview/PreviewToolbar';
import type { InternshipLetterData, InternshipOfferData, DocumentTypeOption, ValidationErrors } from './types/document';
import { OFFICIAL_COMPANY_TEMPLATE_DATA, OFFICIAL_OFFER_LETTER_DATA } from './config/documentRegistry';
import { exportElementToPdf, sanitizeFileName } from './utils/pdfExport';
import demoCompletionLetter from './assets/templates/demo_internship_letter.png';
import demoOfferLetter from './assets/templates/demo_internship_offer_letter.png';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>('internship-offer');
  
  // State for Internship Completion Letter
  const [completionData, setCompletionData] = useState<InternshipLetterData>(OFFICIAL_COMPANY_TEMPLATE_DATA);
  const [completionErrors, setCompletionErrors] = useState<ValidationErrors>({});

  // State for Internship Offer Letter
  const [offerData, setOfferData] = useState<InternshipOfferData>(OFFICIAL_OFFER_LETTER_DATA);
  const [offerErrors, setOfferErrors] = useState<ValidationErrors>({});

  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'generated' | 'reference'>('generated');
  const [zoomLevel, setZoomLevel] = useState<number>(0.85);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const previewRef = useRef<HTMLDivElement>(null);

  // Completion letter field updater
  const handleCompletionFieldChange = <K extends keyof InternshipLetterData>(
    field: K,
    value: InternshipLetterData[K]
  ) => {
    setCompletionData((prev) => ({
      ...prev,
      [field]: value
    }));

    if (completionErrors[field]) {
      setCompletionErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  // Offer letter field updater
  const handleOfferFieldChange = <K extends keyof InternshipOfferData>(
    field: K,
    value: InternshipOfferData[K]
  ) => {
    setOfferData((prev) => ({
      ...prev,
      [field]: value
    }));

    if (offerErrors[field]) {
      setOfferErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validateCompletion = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!completionData.internName.trim()) newErrors.internName = "Intern's full name is required";
    if (!completionData.academicYearDegree.trim()) newErrors.academicYearDegree = 'Student year & degree is required';
    if (!completionData.departmentSpecialization.trim()) newErrors.departmentSpecialization = 'Branch is required';
    if (!completionData.collegeNameAndLocation.trim()) newErrors.collegeNameAndLocation = 'College name is required';
    if (!completionData.domainRole.trim()) newErrors.domainRole = 'Domain is required';
    if (!completionData.startDate) newErrors.startDate = 'Start date is required';
    if (!completionData.completionDate) newErrors.completionDate = 'Completion date is required';
    if (!completionData.letterDate) newErrors.letterDate = 'Letter date is required';

    setCompletionErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOffer = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!offerData.candidateName.trim()) newErrors.candidateName = 'Candidate full name is required';
    if (!offerData.degreeAndBranch.trim()) newErrors.degreeAndBranch = 'Degree & branch is required';
    if (!offerData.yearOfStudy.trim()) newErrors.yearOfStudy = 'Year of study is required';
    if (!offerData.collegeName.trim()) newErrors.collegeName = 'College name is required';
    if (!offerData.city.trim()) newErrors.city = 'City is required';
    if (!offerData.department.trim()) newErrors.department = 'Department is required';
    if (!offerData.focusDomain.trim()) newErrors.focusDomain = 'Focus domain is required';
    if (!offerData.startDate) newErrors.startDate = 'Start date is required';
    if (!offerData.endDate) newErrors.endDate = 'End date is required';
    if (!offerData.letterDate) newErrors.letterDate = 'Offer date is required';

    setOfferErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = () => {
    const isOffer = selectedDocId === 'internship-offer';
    const isValid = isOffer ? validateOffer() : validateCompletion();

    if (isValid) {
      setViewMode('generated');
      setNotification({
        type: 'success',
        message: `${isOffer ? 'Internship Offer Letter' : 'Internship Completion Letter'} synchronized successfully.`
      });
      setTimeout(() => setNotification(null), 3500);
    } else {
      setNotification({
        type: 'error',
        message: 'Please resolve the highlighted field errors before generating.'
      });
      setTimeout(() => setNotification(null), 4000);
    }
  };

  const handleReset = () => {
    if (selectedDocId === 'internship-offer') {
      setOfferData({
        candidateName: '',
        degreeAndBranch: '',
        yearOfStudy: '',
        collegeName: '',
        city: 'Chennai',
        letterDate: new Date().toISOString().split('T')[0],
        salutationName: '',
        department: '',
        focusDomain: '',
        startDate: '',
        endDate: '',
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
      });
      setOfferErrors({});
    } else {
      setCompletionData({
        salutation: 'Mr.',
        internName: '',
        academicYearDegree: '',
        departmentSpecialization: '',
        collegeNameAndLocation: '',
        domainRole: '',
        startDate: '',
        completionDate: '',
        letterDate: new Date().toISOString().split('T')[0],
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
      });
      setCompletionErrors({});
    }
    setNotification(null);
  };

  const handleLoadSample = () => {
    if (selectedDocId === 'internship-offer') {
      setOfferData(OFFICIAL_OFFER_LETTER_DATA);
      setOfferErrors({});
      setNotification({
        type: 'success',
        message: 'Aruvixa Internship Offer Letter demo data loaded.'
      });
    } else {
      setCompletionData(OFFICIAL_COMPANY_TEMPLATE_DATA);
      setCompletionErrors({});
      setNotification({
        type: 'success',
        message: 'Aruvixa Completion Letter demo data loaded.'
      });
    }
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDownloadPdf = async () => {
    const isOffer = selectedDocId === 'internship-offer';
    const isValid = isOffer ? validateOffer() : validateCompletion();

    if (!isValid) {
      setNotification({
        type: 'error',
        message: 'Cannot download: please correct form validation errors first.'
      });
      return;
    }

    if (!previewRef.current) {
      setNotification({
        type: 'error',
        message: 'Preview container not found.'
      });
      return;
    }

    if (viewMode !== 'generated') {
      setViewMode('generated');
    }

    try {
      setIsDownloading(true);
      const prefix = isOffer ? 'Internship_Offer_Letter' : 'Internship_Completion_Letter';
      const targetName = isOffer ? offerData.candidateName : completionData.internName;
      const filename = sanitizeFileName(targetName, prefix);
      
      await exportElementToPdf(previewRef.current, filename, 'portrait');
      setDownloadSuccess(true);
      setNotification({
        type: 'success',
        message: `Successfully downloaded ${filename}`
      });
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3500);
    } catch (err) {
      console.error('PDF export failed:', err);
      setNotification({
        type: 'error',
        message: 'Failed to generate PDF document. Please try again.'
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    const isOffer = selectedDocId === 'internship-offer';
    const isValid = isOffer ? validateOffer() : validateCompletion();

    if (isValid) {
      setViewMode('generated');
      setTimeout(() => {
        window.print();
      }, 100);
    } else {
      setNotification({
        type: 'error',
        message: 'Please complete required fields before printing.'
      });
    }
  };

  const handleSelectDoc = (doc: DocumentTypeOption) => {
    setSelectedDocId(doc.id);
  };

  const isOfferDoc = selectedDocId === 'internship-offer';
  const activeDemoImage = isOfferDoc ? demoOfferLetter : demoCompletionLetter;

  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        {/* Document Switcher / Catalog */}
        <DocumentCatalog
          selectedDocId={selectedDocId}
          onSelectDoc={handleSelectDoc}
        />

        {/* Template Ingestion Status Notification */}
        <div className="template-notice-box">
          <ShieldCheck size={20} color="#15803d" style={{ flexShrink: 0 }} />
          <div>
            <strong>Active Document Template:</strong> Generating{' '}
            <strong>{isOfferDoc ? 'Internship Offer Letter' : 'Internship Completion Letter'}</strong> using the official{' '}
            <strong>Aruvixa Tech Solutions</strong> letterhead with verified seal and Director's signature.
          </div>
        </div>

        {/* Global Alert Notification */}
        {notification && (
          <div
            style={{
              padding: '0.85rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              backgroundColor: notification.type === 'success' ? 'var(--success-light)' : 'var(--danger-light)',
              color: notification.type === 'success' ? 'var(--success)' : 'var(--danger)',
              border: `1px solid ${notification.type === 'success' ? '#a7f3d0' : 'var(--danger-border)'}`
            }}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 size={18} />
            ) : (
              <AlertCircle size={18} />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        {/* Split View: Form and Preview */}
        <section className="workspace-grid" style={{ gridTemplateColumns: '440px 1fr' }}>
          {/* Left Column: Form according to selected document */}
          {isOfferDoc ? (
            <OfferLetterForm
              formData={offerData}
              onChange={handleOfferFieldChange}
              onReset={handleReset}
              onLoadSample={handleLoadSample}
              onGenerate={handleGenerate}
              errors={offerErrors}
            />
          ) : (
            <LetterForm
              formData={completionData}
              onChange={handleCompletionFieldChange}
              onReset={handleReset}
              onLoadSample={handleLoadSample}
              onGenerate={handleGenerate}
              errors={completionErrors}
            />
          )}

          {/* Right Column: Live Document Preview & Toolbar */}
          <div className="preview-panel">
            <PreviewToolbar
              onDownloadPdf={handleDownloadPdf}
              onPrint={handlePrint}
              isDownloading={isDownloading}
              downloadSuccess={downloadSuccess}
              viewMode={viewMode}
              onToggleViewMode={setViewMode}
              zoomLevel={zoomLevel}
              onZoomChange={setZoomLevel}
            />

            <div
              className="preview-viewport"
              style={{
                minHeight: '750px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '2rem 1rem',
                overflowX: 'auto'
              }}
            >
              {viewMode === 'generated' ? (
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'top center',
                    transition: 'transform 0.15s ease'
                  }}
                >
                  {isOfferDoc ? (
                    <OfferLetterPreview
                      ref={previewRef}
                      data={offerData}
                    />
                  ) : (
                    <LetterPreview
                      ref={previewRef}
                      data={completionData}
                    />
                  )}
                </div>
              ) : (
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'top center',
                    background: '#ffffff',
                    padding: '8px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                  }}
                >
                  <img
                    src={activeDemoImage}
                    alt="Company Official Reference Demo"
                    style={{
                      width: '794px',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
