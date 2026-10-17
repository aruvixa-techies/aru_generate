import { forwardRef } from 'react';
import type { InternshipOfferData } from '../../types/document';
import companySeal from '../../assets/templates/company_seal_transparent.png';
import companySignature from '../../assets/templates/company_signature_transparent.png';
import aruvixaLogo from '../../assets/templates/aruvixa_logo_clean.png';

interface OfferLetterPreviewProps {
  data: InternshipOfferData;
}

/**
 * Format ISO date string into DD.MM.YYYY e.g. "17.07.2026"
 */
function formatDotDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }
  return dateStr;
}

/**
 * Format ISO date string into formal Month Day, Year e.g. "July 18, 2026"
 */
function formatMonthDayYear(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[parseInt(parts[1], 10) - 1];
    const day = parseInt(parts[2], 10);
    const year = parts[0];
    return `${month} ${day}, ${year}`;
  }
  return dateStr;
}

export const OfferLetterPreview = forwardRef<HTMLDivElement, OfferLetterPreviewProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        id="official-letter-root"
        className="official-letter-frame"
        style={{
          width: '794px', // A4 Portrait width at standard 96dpi
          minHeight: '1123px', // A4 Portrait height at 96dpi
          backgroundColor: '#ffffff',
          position: 'relative',
          padding: '40px 80px 32px 80px',
          boxSizing: 'border-box',
          color: '#111827',
          fontFamily: "'Times New Roman', Times, 'Liberation Serif', serif",
          fontSize: '16.5px', // Sized to fit full offer letter text and duties on 1 A4 page
          lineHeight: '1.58',
          letterSpacing: '0.15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          userSelect: 'none'
        }}
      >
        {/* Background Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '460px',
            height: '460px',
            pointerEvents: 'none',
            opacity: 0.042,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={aruvixaLogo}
            alt=""
            style={{
              width: '420px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>
          {/* Header Row: Company Logo (Top-Right) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: '26px'
            }}
          >
            <img
              src={aruvixaLogo}
              alt="Aruvixa Tech Solutions"
              style={{ height: '42px', objectFit: 'contain' }}
            />
          </div>

          {/* Title Area */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h2
              style={{
                fontSize: '17px',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                letterSpacing: '0.04em',
                margin: '0 0 5px 0',
                color: '#0f172a'
              }}
            >
              TO WHOMSOEVER IT MAY CONCERN
            </h2>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.02em',
                margin: 0,
                color: '#0f172a'
              }}
            >
              Sub: Letter of Internship Acceptance
            </h3>
          </div>

          {/* Recipient Address (Left) & Date (Right) Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}
          >
            {/* Left: To Address */}
            <div style={{ lineHeight: '1.45' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 700 }}>To,</p>
              <div style={{ paddingLeft: '16px' }}>
                <p style={{ margin: '0 0 2px 0' }}>{data.candidateName},</p>
                <p style={{ margin: '0 0 2px 0' }}>{data.degreeAndBranch},</p>
                <p style={{ margin: '0 0 2px 0' }}>{data.yearOfStudy},</p>
                <p style={{ margin: '0 0 2px 0' }}>{data.collegeName},</p>
                <p style={{ margin: 0 }}>{data.city}</p>
              </div>
            </div>

            {/* Right: Date */}
            <div style={{ fontSize: '16.5px', fontWeight: 500, color: '#111827' }}>
              <span>{formatDotDate(data.letterDate) || '17.07.2026'}</span>
            </div>
          </div>

          {/* Salutation */}
          <div style={{ marginBottom: '12px' }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Dear {data.salutationName}</p>
          </div>

          {/* Introductory Paragraph */}
          <div style={{ textAlign: 'justify', marginBottom: '14px' }}>
            <p style={{ margin: 0 }}>
              We are pleased to extend an offer to you for an internship position at Aruvixa Tech Solutions in the{' '}
              {data.department} department, focusing on {data.focusDomain}.
            </p>
          </div>

          {/* Internship Details Block */}
          <div style={{ marginBottom: '14px' }}>
            <p
              style={{
                margin: '0 0 6px 0',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '2.5px'
              }}
            >
              Internship Details:
            </p>
            <div style={{ lineHeight: '1.5' }}>
              <p style={{ margin: '0 0 2px 0' }}>
                Start Date: {formatMonthDayYear(data.startDate)}
              </p>
              <p style={{ margin: '0 0 2px 0' }}>
                End Date: {formatMonthDayYear(data.endDate)}
              </p>
              <p style={{ margin: 0 }}>Mode: {data.mode}</p>
            </div>
          </div>

          {/* Duties & Assignments */}
          <div style={{ marginBottom: '14px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: 700 }}>
              Your primary duties and assignments for this role will include:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {data.duties.map((duty, idx) => (
                <li key={idx} style={{ textAlign: 'justify' }}>
                  {duty}
                </li>
              ))}
            </ul>
          </div>

          {/* Confidentiality & Closing Paragraph */}
          <div style={{ textAlign: 'justify', marginBottom: '16px' }}>
            <p style={{ margin: 0 }}>
              Please be advised that all information, data, source code, documents, and materials accessed during your
              internship must be treated as strictly confidential. Unauthorized disclosure or use of such information is
              not permitted and may lead to termination of the internship. We are confident that this internship will be a
              valuable learning experience and look forward to your contributions to our team.
            </p>
          </div>

          {/* Sign-Off Block */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '165px',
              marginTop: '4px'
            }}
          >
            {/* Official Company Seal (Positioned towards the center) */}
            {data.includeSeal && (
              <div
                style={{
                  position: 'absolute',
                  left: '52%',
                  transform: 'translateX(-50%)',
                  top: '32px',
                  width: '115px',
                  height: '115px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <img
                  src={companySeal}
                  alt="Company Seal"
                  style={{
                    width: '112px',
                    height: '112px',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            )}

            {/* Signature & Signatory Block */}
            <div
              style={{
                position: 'absolute',
                right: '-35px',
                top: '0',
                width: '235px',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 3
              }}
            >
              {/* Yours Sincerely & Company Name */}
              <div style={{ textAlign: 'left', marginBottom: '4px' }}>
                <p style={{ margin: '0 0 3px 0', fontSize: '16.5px' }}>Your Sincerely</p>
                <p style={{ margin: 0, fontSize: '16.5px', fontWeight: 600 }}>
                  For {data.companyName}
                </p>
              </div>

              {/* Authorized Signature */}
              <div
                style={{
                  height: '74px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '2px 0'
                }}
              >
                {data.includeSignature && (
                  <img
                    src={companySignature}
                    alt="Authorized Signature"
                    style={{
                      maxHeight: '70px',
                      maxWidth: '140px',
                      objectFit: 'contain',
                      mixBlendMode: 'multiply'
                    }}
                  />
                )}
              </div>

              {/* Signatory Name & Designation */}
              <div style={{ textAlign: 'center', marginTop: '2px' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600, fontSize: '16.5px' }}>
                  {data.signatoryName}
                </p>
                <p style={{ margin: 0, fontSize: '15px', color: '#1f2937' }}>
                  {data.signatoryRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          {/* Blue badge */}
          <div
            style={{
              backgroundColor: '#6b9bd2',
              color: '#ffffff',
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '4px 16px',
              borderRadius: '3px 12px 12px 3px',
              fontSize: '11.5px',
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              letterSpacing: '0.02em',
              fontWeight: 500
            }}
          >
            {data.companyEmail}| {data.companyWebsite}
          </div>

          {/* Address & Phone */}
          <div
            style={{
              fontSize: '11.5px',
              color: '#374151',
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              letterSpacing: '0.01em'
            }}
          >
            {data.companyName} | {data.companyPhone} | {data.companyAddress}
          </div>

          {/* Decorative Corner Swoosh */}
          <div
            style={{
              position: 'absolute',
              bottom: '-32px',
              right: '-80px',
              width: '300px',
              height: '80px',
              background: 'radial-gradient(circle at 100% 100%, #dbeafe 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: -1
            }}
          />
        </div>
      </div>
    );
  }
);

OfferLetterPreview.displayName = 'OfferLetterPreview';
