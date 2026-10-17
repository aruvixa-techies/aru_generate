import React from 'react';
import type { CertificateData, ValidationErrors } from '../../types/document';
import { RefreshCw, RotateCcw, Sparkles } from 'lucide-react';

interface CertificateFormProps {
  formData: CertificateData;
  onChange: (field: keyof CertificateData, value: string) => void;
  onReset: () => void;
  onLoadSample: () => void;
  onGenerate: () => void;
  errors: ValidationErrors;
}

export const CertificateForm: React.FC<CertificateFormProps> = ({
  formData,
  onChange,
  onReset,
  onLoadSample,
  onGenerate,
  errors
}) => {
  return (
    <div className="form-panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Internship Details</h2>
          <p className="panel-subtitle">Enter details to generate verified completion certificate</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onLoadSample}
            title="Populate test intern data"
          >
            <Sparkles size={14} color="#3b82f6" />
            Load Sample
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onReset}
            title="Reset form fields"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>

      {/* Intern Identification */}
      <div className="form-group">
        <label className="form-label" htmlFor="internName">
          <span>Intern Full Name <span className="required-star">*</span></span>
        </label>
        <input
          id="internName"
          className={`form-input ${errors.internName ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. Arun Kumar"
          value={formData.internName}
          onChange={(e) => onChange('internName', e.target.value)}
        />
        {errors.internName && <span className="error-text">{errors.internName}</span>}
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="role">
            <span>Role / Designation <span className="required-star">*</span></span>
          </label>
          <input
            id="role"
            className={`form-input ${errors.role ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Full Stack Intern"
            value={formData.role}
            onChange={(e) => onChange('role', e.target.value)}
          />
          {errors.role && <span className="error-text">{errors.role}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="department">
            <span>Department / Track <span className="required-star">*</span></span>
          </label>
          <input
            id="department"
            className={`form-input ${errors.department ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Engineering & Cloud"
            value={formData.department}
            onChange={(e) => onChange('department', e.target.value)}
          />
          {errors.department && <span className="error-text">{errors.department}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="companyName">
            <span>Issuing Company <span className="required-star">*</span></span>
          </label>
          <input
            id="companyName"
            className={`form-input ${errors.companyName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Acme Technologies Pvt. Ltd."
            value={formData.companyName}
            onChange={(e) => onChange('companyName', e.target.value)}
          />
          {errors.companyName && <span className="error-text">{errors.companyName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="certificateId">
            <span>Certificate ID <span className="required-star">*</span></span>
          </label>
          <input
            id="certificateId"
            className={`form-input ${errors.certificateId ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. CERT-2026-HR-0842"
            value={formData.certificateId}
            onChange={(e) => onChange('certificateId', e.target.value)}
          />
          {errors.certificateId && <span className="error-text">{errors.certificateId}</span>}
        </div>
      </div>

      {/* Tenure & Dates */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="startDate">
            <span>Internship Start Date <span className="required-star">*</span></span>
          </label>
          <input
            id="startDate"
            className={`form-input ${errors.startDate ? 'has-error' : ''}`}
            type="date"
            value={formData.startDate}
            onChange={(e) => onChange('startDate', e.target.value)}
          />
          {errors.startDate && <span className="error-text">{errors.startDate}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="completionDate">
            <span>Completion Date <span className="required-star">*</span></span>
          </label>
          <input
            id="completionDate"
            className={`form-input ${errors.completionDate ? 'has-error' : ''}`}
            type="date"
            value={formData.completionDate}
            onChange={(e) => onChange('completionDate', e.target.value)}
          />
          {errors.completionDate && <span className="error-text">{errors.completionDate}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="issueDate">
            <span>Certificate Issue Date <span className="required-star">*</span></span>
          </label>
          <input
            id="issueDate"
            className={`form-input ${errors.issueDate ? 'has-error' : ''}`}
            type="date"
            value={formData.issueDate}
            onChange={(e) => onChange('issueDate', e.target.value)}
          />
          {errors.issueDate && <span className="error-text">{errors.issueDate}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="performanceGrade">
            <span>Performance Grade / Rating (Optional)</span>
          </label>
          <input
            id="performanceGrade"
            className="form-input"
            type="text"
            placeholder="e.g. Outstanding (A+)"
            value={formData.performanceGrade || ''}
            onChange={(e) => onChange('performanceGrade', e.target.value)}
          />
        </div>
      </div>

      {/* Signatory Information */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="signatoryName">
            <span>Signatory Name <span className="required-star">*</span></span>
          </label>
          <input
            id="signatoryName"
            className={`form-input ${errors.signatoryName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Dr. Rajesh Vardhan"
            value={formData.signatoryName}
            onChange={(e) => onChange('signatoryName', e.target.value)}
          />
          {errors.signatoryName && <span className="error-text">{errors.signatoryName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signatoryRole">
            <span>Signatory Designation <span className="required-star">*</span></span>
          </label>
          <input
            id="signatoryRole"
            className={`form-input ${errors.signatoryRole ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Director of People Operations"
            value={formData.signatoryRole}
            onChange={(e) => onChange('signatoryRole', e.target.value)}
          />
          {errors.signatoryRole && <span className="error-text">{errors.signatoryRole}</span>}
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
          Validate & Update Certificate Preview
        </button>
      </div>
    </div>
  );
};
