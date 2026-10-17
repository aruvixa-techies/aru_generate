import { forwardRef } from 'react';
import type { CertificateData } from '../../types/document';
import { ShieldCheck, Award } from 'lucide-react';

interface CertificatePreviewProps {
  data: CertificateData;
}

/**
 * Format ISO date string into readable formal format (e.g., "October 17, 2026")
 */
function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        id="certificate-print-root"
        className="certificate-frame"
        style={{
          border: '12px solid #1e293b',
          outline: '3px solid #d97706',
          outlineOffset: '-7px',
          padding: '2.5rem 3rem',
          position: 'relative',
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fafbfc 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          userSelect: 'none'
        }}
      >
        {/* Subtle Guilloche Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            width: '60px',
            height: '60px',
            borderTop: '3px solid #d97706',
            borderLeft: '3px solid #d97706',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '60px',
            height: '60px',
            borderTop: '3px solid #d97706',
            borderRight: '3px solid #d97706',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '60px',
            height: '60px',
            borderBottom: '3px solid #d97706',
            borderLeft: '3px solid #d97706',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '60px',
            height: '60px',
            borderBottom: '3px solid #d97706',
            borderRight: '3px solid #d97706',
            pointerEvents: 'none'
          }}
        />

        {/* Certificate Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Award size={26} color="#d97706" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#475569'
              }}
            >
              {data.companyName || 'COMPANY NAME'}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '0.02em',
              margin: '0.1rem 0 0.2rem 0'
            }}
          >
            Certificate of Internship Completion
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: '#64748b',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            THIS CREDENTIAL IS PROUDLY CONFERRED TO
          </p>
        </div>

        {/* Recipient Full Name */}
        <div style={{ textAlign: 'center', margin: '0.75rem 0' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#1e3a8a',
              fontStyle: 'italic',
              borderBottom: '2px solid #cbd5e1',
              display: 'inline-block',
              padding: '0 2.5rem 0.4rem 2.5rem',
              minWidth: '380px'
            }}
          >
            {data.internName || 'Recipient Name'}
          </h2>
        </div>

        {/* Narrative / Citation */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.975rem',
              lineHeight: 1.65,
              color: '#334155'
            }}
          >
            for successfully completing the internship program as{' '}
            <strong style={{ color: '#0f172a' }}>{data.role || '[Intern Role]'}</strong> in the{' '}
            <strong style={{ color: '#0f172a' }}>{data.department || '[Department]'}</strong> department at{' '}
            <strong style={{ color: '#0f172a' }}>{data.companyName || '[Company Name]'}</strong>, from{' '}
            <strong style={{ color: '#0f172a' }}>{formatDate(data.startDate) || '[Start Date]'}</strong> to{' '}
            <strong style={{ color: '#0f172a' }}>{formatDate(data.completionDate) || '[Completion Date]'}</strong>.
            {data.performanceGrade && (
              <span> Evaluated with an overall rating of <strong>{data.performanceGrade}</strong>.</span>
            )}
          </p>
        </div>

        {/* Signatures & Verification Meta */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0'
          }}
        >
          {/* Issue & Verification */}
          <div style={{ textAlign: 'left', minWidth: '180px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', marginBottom: '0.3rem' }}>
              <ShieldCheck size={16} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Verified Record
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              ID: {data.certificateId || 'CERT-PENDING'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Issued: {formatDate(data.issueDate) || 'Pending'}
            </div>
          </div>

          {/* Official Seal Emblem */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                border: '2px dashed #d97706',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fffbeb',
                color: '#b45309',
                margin: '0 auto'
              }}
            >
              <Award size={24} />
              <span style={{ fontSize: '0.55rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>
                OFFICIAL SEAL
              </span>
            </div>
          </div>

          {/* Authorized Signatory */}
          <div style={{ textAlign: 'right', minWidth: '220px' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: '#1e293b',
                borderBottom: '1px solid #94a3b8',
                paddingBottom: '0.2rem',
                marginBottom: '0.3rem',
                display: 'inline-block',
                minWidth: '200px'
              }}
            >
              {data.signatoryName || 'Authorized Signatory'}
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
              {data.signatoryName || 'Authorized Signatory'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {data.signatoryRole || 'Director of Operations'}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificatePreview.displayName = 'CertificatePreview';
