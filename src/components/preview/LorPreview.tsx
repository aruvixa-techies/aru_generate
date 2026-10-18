import { forwardRef } from 'react';
import type { LorData } from '../../types/document';
import companySeal from '../../assets/templates/company_seal_transparent.png';
import companySignature from '../../assets/templates/company_signature_transparent.png';
import aruvixaLogo from '../../assets/templates/aruvixa_logo_clean.png';

interface LorPreviewProps {
  data: LorData;
}

/**
 * Format ISO date string into DD.MM.YYYY e.g. "17.10.2026"
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
 * Format ISO date string into formal Month Day, Year e.g. "18 July 2026"
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

export const LorPreview = forwardRef<HTMLDivElement, LorPreviewProps>(
  ({ data }, ref) => {
    // Determine pronouns
    const isFemale = data.pronounSet === 'she/her/her';
    const pronounSubject = isFemale ? 'she' : 'he';
    const pronounSubjectCap = isFemale ? 'She' : 'He';
    const pronounPossessive = isFemale ? 'her' : 'his';
    const pronounObject = isFemale ? 'her' : 'him';

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
          fontSize: '15.5px', // Balanced sizing to fit full 4-paragraph recommendation on 1 page
          lineHeight: '1.55',
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
              Sub: Letter of Recommendation
            </h3>
          </div>

          {/* Date Row (Right Aligned) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '54px', // Two blank lines before salutation
              fontSize: '16px',
              fontWeight: 500,
              color: '#111827'
            }}
          >
            <span>{formatDotDate(data.letterDate) || '17.10.2026'}</span>
          </div>

          {/* Salutation */}
          <div style={{ marginBottom: '14px', fontSize: '16px' }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Dear Admissions Committee / Hiring Team,</p>
          </div>

          {/* Paragraph 1: Context & Tenure */}
          <div style={{ textAlign: 'justify', marginBottom: '13px' }}>
            <p style={{ margin: 0 }}>
              It gives me immense pleasure to write this letter of recommendation for{' '}
              <strong>
                {data.candidateSalutation} {data.candidateName}
              </strong>
              , who successfully completed {pronounPossessive} internship as a{' '}
              <strong>{data.candidateRole}</strong> in the {data.department} department at {data.companyName} from{' '}
              {formatLongDate(data.startDate)} to {formatLongDate(data.completionDate)}. During {pronounPossessive}{' '}
              tenure, {pronounSubject} contributed directly to core technical initiatives and proved to be an
              exceptionally talented and dedicated professional.
            </p>
          </div>

          {/* Paragraph 2: Technical Contributions */}
          <div style={{ textAlign: 'justify', marginBottom: '13px' }}>
            <p style={{ margin: 0 }}>{data.keyContributions}</p>
          </div>

          {/* Paragraph 3: Soft Skills & Team Dynamics */}
          <div style={{ textAlign: 'justify', marginBottom: '13px' }}>
            <p style={{ margin: 0 }}>
              {data.softSkills} {pronounSubjectCap} communicated complex architectural concepts with clarity,
              collaborated seamlessly with engineering peers, and approached challenging assignments with an admirable
              solution-oriented mindset.
            </p>
          </div>

          {/* Paragraph 4: Concluding Recommendation */}
          <div style={{ textAlign: 'justify', marginBottom: '18px' }}>
            <p style={{ margin: 0 }}>
              I have the highest confidence that {data.candidateName} has the intellect, technical discipline, and
              character to excel in demanding technical environments as well as advanced academic programs. I recommend{' '}
              {pronounObject} {data.recommendationStrength} and wish {pronounObject} all the very best in{' '}
              {pronounPossessive} future endeavors.
            </p>
          </div>

          {/* Sign-Off Block */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '160px',
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
                  top: '28px',
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
              <div style={{ textAlign: 'left', marginBottom: '3px' }}>
                <p style={{ margin: '0 0 2px 0', fontSize: '15.5px' }}>Your Sincerely</p>
                <p style={{ margin: 0, fontSize: '15.5px', fontWeight: 600 }}>
                  For {data.companyName}
                </p>
              </div>

              {/* Authorized Signature */}
              <div
                style={{
                  height: '72px',
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
                      maxHeight: '68px',
                      maxWidth: '140px',
                      objectFit: 'contain',
                      mixBlendMode: 'multiply'
                    }}
                  />
                )}
              </div>

              {/* Signatory Name & Designation */}
              <div style={{ textAlign: 'center', marginTop: '2px' }}>
                <p style={{ margin: '0 0 2px 0', fontWeight: 600, fontSize: '15.5px' }}>
                  {data.signatoryName}
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#1f2937' }}>
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
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          {/* Blue badge */}
          <div
            style={{
              backgroundColor: '#6b9bd2',
              color: '#ffffff',
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '3px 14px',
              borderRadius: '3px 12px 12px 3px',
              fontSize: '11px',
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
              fontSize: '11px',
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
              bottom: '-30px',
              right: '-80px',
              width: '300px',
              height: '75px',
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

LorPreview.displayName = 'LorPreview';
