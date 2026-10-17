import { forwardRef } from 'react';
import type { JobOfferData } from '../../types/document';
import companySeal from '../../assets/templates/company_seal_transparent.png';
import companySignature from '../../assets/templates/company_signature_transparent.png';
import aruvixaLogo from '../../assets/templates/aruvixa_logo_clean.png';

interface JobOfferPreviewProps {
  data: JobOfferData;
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
 * Format ISO date string into formal Month Day, Year e.g. "November 02, 2026"
 */
function formatMonthDayYear(dateStr: string): string {
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
    return `${month} ${day < 10 ? '0' + day : day}, ${year}`;
  }
  return dateStr;
}

export const JobOfferPreview = forwardRef<HTMLDivElement, JobOfferPreviewProps>(
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
          padding: '38px 80px 30px 80px',
          boxSizing: 'border-box',
          color: '#111827',
          fontFamily: "'Times New Roman', Times, 'Liberation Serif', serif",
          fontSize: '15.5px', // Sized to fit employment terms and responsibilities on 1 page
          lineHeight: '1.52',
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
              marginBottom: '22px'
            }}
          >
            <img
              src={aruvixaLogo}
              alt="Aruvixa Tech Solutions"
              style={{ height: '42px', objectFit: 'contain' }}
            />
          </div>

          {/* Title Area */}
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
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
              Sub: Employment Offer Letter
            </h3>
          </div>

          {/* Recipient Address (Left) & Date (Right) Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '18px'
            }}
          >
            {/* Left: To Address */}
            <div style={{ lineHeight: '1.45' }}>
              <p style={{ margin: '0 0 3px 0', fontWeight: 700 }}>To,</p>
              <div style={{ paddingLeft: '16px' }}>
                <p style={{ margin: '0 0 2px 0' }}>{data.candidateName},</p>
                <p style={{ margin: '0 0 2px 0' }}>{data.candidateAddress},</p>
                <p style={{ margin: 0 }}>{data.city}</p>
              </div>
            </div>

            {/* Right: Date */}
            <div style={{ fontSize: '15.5px', fontWeight: 500, color: '#111827' }}>
              <span>{formatDotDate(data.letterDate) || '17.10.2026'}</span>
            </div>
          </div>

          {/* Salutation */}
          <div style={{ marginBottom: '10px' }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Dear {data.salutationName},</p>
          </div>

          {/* Formal Offer Opening */}
          <div style={{ textAlign: 'justify', marginBottom: '12px' }}>
            <p style={{ margin: 0 }}>
              We are pleased to extend an offer of full-time employment to you for the position of{' '}
              <strong>{data.designation}</strong> at Aruvixa Tech Solutions in the {data.department} department.
              Following your interview performance and technical evaluations, we believe your skills and expertise will be
              a valuable asset to our organization.
            </p>
          </div>

          {/* Employment Details Block */}
          <div style={{ marginBottom: '12px' }}>
            <p
              style={{
                margin: '0 0 4px 0',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '2.5px'
              }}
            >
              Employment Details:
            </p>
            <div style={{ lineHeight: '1.48' }}>
              <p style={{ margin: '0 0 2px 0' }}>
                Designation: <strong>{data.designation}</strong>
              </p>
              <p style={{ margin: '0 0 2px 0' }}>Department: {data.department}</p>
              <p style={{ margin: '0 0 2px 0' }}>
                Date of Joining: <strong>{formatMonthDayYear(data.dateOfJoining)}</strong>
              </p>
              <p style={{ margin: '0 0 2px 0' }}>
                Annual Compensation (CTC): <strong>{data.annualCtc}</strong>
              </p>
              <p style={{ margin: '0 0 2px 0' }}>Work Location: {data.workLocation}</p>
              <p style={{ margin: 0 }}>Probation Period: {data.probationPeriod}</p>
            </div>
          </div>

          {/* Primary Duties & Responsibilities */}
          <div style={{ marginBottom: '12px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: 700 }}>
              Your primary duties and responsibilities in this role will include:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {data.responsibilities.map((resp, idx) => (
                <li key={idx} style={{ textAlign: 'justify' }}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms, Code of Conduct & Closing */}
          <div style={{ textAlign: 'justify', marginBottom: '14px' }}>
            <p style={{ margin: 0 }}>
              Please review this offer letter and sign as an endorsement of acceptance. As an employee, you agree to comply
              with all company regulations, confidentiality agreements, and code of conduct. We are enthusiastic about your
              future with Aruvixa Tech Solutions and look forward to welcoming you to our team.
            </p>
          </div>

          {/* Sign-Off Area */}
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

JobOfferPreview.displayName = 'JobOfferPreview';
