import React from 'react';
import type { JobOfferData, ValidationErrors } from '../../types/document';
import { RefreshCw, RotateCcw, Sparkles, CheckSquare, Square } from 'lucide-react';

interface JobOfferFormProps {
  formData: JobOfferData;
  onChange: <K extends keyof JobOfferData>(field: K, value: JobOfferData[K]) => void;
  onReset: () => void;
  onLoadSample: () => void;
  onGenerate: () => void;
  errors: ValidationErrors;
}

export const JobOfferForm: React.FC<JobOfferFormProps> = ({
  formData,
  onChange,
  onReset,
  onLoadSample,
  onGenerate,
  errors
}) => {
  const handleNameChange = (val: string) => {
    onChange('candidateName', val);
    const firstName = val.trim().split(' ')[0] || val;
    onChange('salutationName', firstName);
  };

  const handleRespChange = (index: number, val: string) => {
    const updated = [...formData.responsibilities];
    updated[index] = val;
    onChange('responsibilities', updated);
  };

  return (
    <div className="form-panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Job Offer Parameters</h2>
          <p className="panel-subtitle">Official Aruvixa employment agreement configuration</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onLoadSample}
            title="Load sample full-time job offer data"
          >
            <Sparkles size={14} color="#3b82f6" />
            Company Demo
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onReset}
            title="Reset to blank form"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>

      {/* Candidate Identification */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="candidateName">
            <span>Candidate Full Name <span className="required-star">*</span></span>
          </label>
          <input
            id="candidateName"
            className={`form-input ${errors.candidateName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Suraj S"
            value={formData.candidateName}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          {errors.candidateName && <span className="error-text">{errors.candidateName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="salutationName">
            <span>Salutation Name (Dear ...) <span className="required-star">*</span></span>
          </label>
          <input
            id="salutationName"
            className="form-input"
            type="text"
            placeholder="e.g. Suraj"
            value={formData.salutationName}
            onChange={(e) => onChange('salutationName', e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="candidateAddress">
          <span>Address Line <span className="required-star">*</span></span>
        </label>
        <input
          id="candidateAddress"
          className={`form-input ${errors.candidateAddress ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. Plot No. 14, 2nd Main Road, Anna Nagar"
          value={formData.candidateAddress}
          onChange={(e) => onChange('candidateAddress', e.target.value)}
        />
        {errors.candidateAddress && <span className="error-text">{errors.candidateAddress}</span>}
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="city">
            <span>City & Pincode <span className="required-star">*</span></span>
          </label>
          <input
            id="city"
            className={`form-input ${errors.city ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Chennai, Tamil Nadu - 600040"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
          />
          {errors.city && <span className="error-text">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="letterDate">
            <span>Offer Issue Date <span className="required-star">*</span></span>
          </label>
          <input
            id="letterDate"
            className={`form-input ${errors.letterDate ? 'has-error' : ''}`}
            type="date"
            value={formData.letterDate}
            onChange={(e) => onChange('letterDate', e.target.value)}
          />
          {errors.letterDate && <span className="error-text">{errors.letterDate}</span>}
        </div>
      </div>

      {/* Designation & Department */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="designation">
            <span>Job Designation <span className="required-star">*</span></span>
          </label>
          <input
            id="designation"
            className={`form-input ${errors.designation ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Associate Software Engineer"
            value={formData.designation}
            onChange={(e) => onChange('designation', e.target.value)}
          />
          {errors.designation && <span className="error-text">{errors.designation}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="department">
            <span>Department <span className="required-star">*</span></span>
          </label>
          <input
            id="department"
            className={`form-input ${errors.department ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Full Stack Engineering & Cloud Architecture"
            value={formData.department}
            onChange={(e) => onChange('department', e.target.value)}
          />
          {errors.department && <span className="error-text">{errors.department}</span>}
        </div>
      </div>

      {/* Compensation & Joining Terms */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="annualCtc">
            <span>Annual CTC / Compensation <span className="required-star">*</span></span>
          </label>
          <input
            id="annualCtc"
            className={`form-input ${errors.annualCtc ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. INR 6,50,000 per annum"
            value={formData.annualCtc}
            onChange={(e) => onChange('annualCtc', e.target.value)}
          />
          {errors.annualCtc && <span className="error-text">{errors.annualCtc}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dateOfJoining">
            <span>Date of Joining <span className="required-star">*</span></span>
          </label>
          <input
            id="dateOfJoining"
            className={`form-input ${errors.dateOfJoining ? 'has-error' : ''}`}
            type="date"
            value={formData.dateOfJoining}
            onChange={(e) => onChange('dateOfJoining', e.target.value)}
          />
          {errors.dateOfJoining && <span className="error-text">{errors.dateOfJoining}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="workLocation">
            <span>Work Location</span>
          </label>
          <input
            id="workLocation"
            className="form-input"
            type="text"
            placeholder="e.g. Chennai, Tamil Nadu (Hybrid)"
            value={formData.workLocation}
            onChange={(e) => onChange('workLocation', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="probationPeriod">
            <span>Probation Period</span>
          </label>
          <input
            id="probationPeriod"
            className="form-input"
            type="text"
            placeholder="e.g. 3 Months from Date of Joining"
            value={formData.probationPeriod}
            onChange={(e) => onChange('probationPeriod', e.target.value)}
          />
        </div>
      </div>

      {/* Responsibilities */}
      <div className="form-group">
        <label className="form-label">
          <span>Key Responsibilities & Deliverables (4 points)</span>
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {formData.responsibilities.map((resp, idx) => (
            <input
              key={idx}
              className="form-input"
              type="text"
              value={resp}
              onChange={(e) => handleRespChange(idx, e.target.value)}
              placeholder={`Responsibility ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Official Credentials */}
      <div
        style={{
          background: '#f8fafc',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem'
        }}
      >
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155' }}>
          Official Company Credentials
        </div>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.825rem',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <button
              type="button"
              style={{ display: 'flex', color: formData.includeSeal ? 'var(--primary)' : 'var(--text-subtle)' }}
              onClick={() => onChange('includeSeal', !formData.includeSeal)}
            >
              {formData.includeSeal ? <CheckSquare size={18} /> : <Square size={18} />}
            </button>
            <span>Official Company Seal</span>
          </label>

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.825rem',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <button
              type="button"
              style={{ display: 'flex', color: formData.includeSignature ? 'var(--primary)' : 'var(--text-subtle)' }}
              onClick={() => onChange('includeSignature', !formData.includeSignature)}
            >
              {formData.includeSignature ? <CheckSquare size={18} /> : <Square size={18} />}
            </button>
            <span>Director's Signature</span>
          </label>
        </div>
      </div>

      <div className="actions-row">
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={onGenerate}
        >
          <RefreshCw size={16} />
          Validate & Synchronize Preview
        </button>
      </div>
    </div>
  );
};
