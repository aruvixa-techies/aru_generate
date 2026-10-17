import { forwardRef } from 'react';
import type { InternshipLetterData } from '../../types/document';
import companySeal from '../../assets/templates/company_seal_transparent.png';
import companySignature from '../../assets/templates/company_signature_transparent.png';
import aruvixaLogo from '../../assets/templates/aruvixa_logo_clean.png';

interface LetterPreviewProps {
  data: InternshipLetterData;
}

/**
 * Format ISO date string into DD.MM.YYYY e.g. "20.09.2026"
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
 * Format ISO date string into formal long format: e.g. "18 July 2026"
 */
function formatLongDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = parseInt(parts[2], 10);
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[0];
    return `${day} ${month} ${year}`;
  }
  return dateStr;
}

export const LetterPreview = forwardRef<HTMLDivElement, LetterPreviewProps>(
  ({ data }, ref) => {
    // Determine pronouns
    const isFemale = data.pronounSet === 'she/her/her';
    const pronounSubject = isFemale ? 'she' : 'he';
    const pronounPossessive = isFemale ? 'her' : 'his';
    const pronounObject = isFemale ? 'her' : 'him';

    return (
      <div
        ref={ref}
        id="official-letter-root"
        className="official-letter-frame"
        style={{
          width: '794px', // Standard A4 portrait width at 96 DPI
          minHeight: '1123px', // Standard A4 portrait height at 96 DPI
          backgroundColor: '#ffffff',
          position: 'relative',
          padding: '44px 84px 36px 84px', // 84px side padding gives exactly ~625px content width
          boxSizing: 'border-box',
          color: '#111827',
          fontFamily: "'Times New Roman', Times, 'Liberation Serif', serif",
          fontSize: '19.5px', // Refined font size matching company demo
          lineHeight: '1.72',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          userSelect: 'none'
        }}
      >
        {/* Background Watermark (subtle centered Aruvixa mark) */}
        <div
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '480px',
            height: '480px',
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
              width: '440px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Content Container (Layered above watermark) */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}>
          {/* Header: Company Logo (Top-Right) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: '36px'
            }}
          >
            <img
              src={aruvixaLogo}
              alt="Aruvixa Tech Solutions"
              style={{ height: '44px', objectFit: 'contain' }}
            />
          </div>

          {/* Letter Title Header (Centered) */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '3.5px',
                letterSpacing: '0.04em',
                margin: '0 0 6px 0',
                color: '#0f172a'
              }}
            >
              TO WHOMSOEVER IT MAY CONCERN
            </h2>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                margin: 0,
                color: '#0f172a'
              }}
            >
              INTERNSHIP COMPLETION LETTER
            </h3>
          </div>

          {/* Date Row (Right Aligned) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '68px', // Two full blank lines of spacing before Dear Sir/Madam
              fontSize: '18px',
              fontWeight: 500,
              color: '#111827'
            }}
          >
            <span>{formatDotDate(data.letterDate) || '20.09.2026'}</span>
          </div>

          {/* Salutation */}
          <div style={{ marginBottom: '24px', fontSize: '19.5px' }}>
            <p style={{ margin: 0 }}>Dear Sir/Madam,</p>
          </div>

          {/* Paragraph 1: 5 Lines (Justified) */}
          <div
            style={{
              textAlign: 'justify',
              marginBottom: '26px',
              fontSize: '19.5px',
              lineHeight: '1.72',
              letterSpacing: '0.15px'
            }}
          >
            <p style={{ margin: 0 }}>
              This is to certify that{' '}
              <strong>
                {data.salutation} {data.internName}
              </strong>{' '}
              {data.academicYearDegree} ({data.departmentSpecialization}) at{' '}
              {data.collegeNameAndLocation}, has successfully completed {pronounPossessive} internship in{' '}
              {data.domainRole} at our organization from {formatLongDate(data.startDate)} to{' '}
              {formatLongDate(data.completionDate)}.
            </p>
          </div>

          {/* Paragraph 2: 3 Lines (Justified/Left) */}
          <div
            style={{
              textAlign: 'justify',
              marginBottom: '46px',
              fontSize: '19.5px',
              lineHeight: '1.72',
              letterSpacing: '0.15px'
            }}
          >
            <p style={{ margin: 0 }}>
              During the internship period, {pronounSubject} was found to be punctual, hardworking, and dedicated
              towards {pronounPossessive} responsibilities.
            </p>
            <p style={{ margin: 0 }}>
              We wish {pronounObject} all the very best in {pronounPossessive} future endeavors.
            </p>
          </div>

          {/* Sign-Off Area (With center seal and right-side signature block) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '195px',
              marginTop: '10px'
            }}
          >
            {/* Official Company Seal (Positioned towards the center) */}
            {data.includeSeal && (
              <div
                style={{
                  position: 'absolute',
                  left: '52%',
                  transform: 'translateX(-50%)',
                  top: '42px',
                  width: '124px',
                  height: '124px',
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
                    width: '122px',
                    height: '122px',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            )}

            {/* Signature & Signatory Block (Moved a little right towards the edge) */}
            <div
              style={{
                position: 'absolute',
                right: '-35px',
                top: '0',
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 3
              }}
            >
              {/* Yours Sincerely & Company Name (Aligned leftish within this block) */}
              <div style={{ textAlign: 'left', marginBottom: '4px' }}>
                <p style={{ margin: '0 0 3px 0', fontSize: '18px' }}>Your Sincerely</p>
                <p style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
                  For {data.companyName}
                </p>
              </div>

              {/* Authorized Signature (Centered above name) */}
              <div
                style={{
                  height: '84px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '4px 0'
                }}
              >
                {data.includeSignature && (
                  <img
                    src={companySignature}
                    alt="Authorized Signature"
                    style={{
                      maxHeight: '80px',
                      maxWidth: '150px',
                      objectFit: 'contain',
                      mixBlendMode: 'multiply'
                    }}
                  />
                )}
              </div>

              {/* Signatory Name & Designation (Centered under signature) */}
              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600, fontSize: '18px' }}>
                  {data.signatoryName}
                </p>
                <p style={{ margin: 0, fontSize: '16.5px', color: '#1f2937' }}>
                  {data.signatoryRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Official Aruvixa Contact & Address Details */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {/* Blue badge for email and website */}
          <div
            style={{
              backgroundColor: '#6b9bd2',
              color: '#ffffff',
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '4px 16px',
              borderRadius: '3px 12px 12px 3px',
              fontSize: '12px',
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
              fontSize: '12px',
              color: '#374151',
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              letterSpacing: '0.01em'
            }}
          >
            {data.companyName} | {data.companyPhone} | {data.companyAddress}
          </div>

          {/* Decorative Corner Swoosh in bottom right */}
          <div
            style={{
              position: 'absolute',
              bottom: '-36px',
              right: '-84px',
              width: '320px',
              height: '90px',
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

LetterPreview.displayName = 'LetterPreview';
