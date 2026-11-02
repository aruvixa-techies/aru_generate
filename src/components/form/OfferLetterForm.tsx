import React from 'react';
import type { InternshipOfferData, ValidationErrors } from '../../types/document';
import { RefreshCw, RotateCcw, Sparkles, CheckSquare, Square } from 'lucide-react';

interface OfferLetterFormProps {
  formData: InternshipOfferData;
  onChange: <K extends keyof InternshipOfferData>(field: K, value: InternshipOfferData[K]) => void;
  onReset: () => void;
  onLoadSample: () => void;
  onGenerate: () => void;
  errors: ValidationErrors;
}

export const OfferLetterForm: React.FC<OfferLetterFormProps> = ({
  formData,
  onChange,
  onReset,
  onLoadSample,
  onGenerate,
  errors
}) => {
  const handleNameChange = (val: string) => {
    onChange('candidateName', val);
    // Auto-populate salutation firstName if blank or matching prev
    const firstName = val.trim().split(' ')[0] || val;
    onChange('salutationName', firstName);
  };

  const handleDutiesChange = (index: number, val: string) => {
    const updated = [...formData.duties];
    updated[index] = val;
    onChange('duties', updated);
  };

  return (
    <div className="form-panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Internship Offer Letter Parameters</h2>
          <p className="panel-subtitle">Official Aruvixa acceptance offer configuration</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onLoadSample}
            title="Load demo data from original template"
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

      {/* College & Academic Details */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="degreeAndBranch">
            <span>Degree & Branch <span className="required-star">*</span></span>
          </label>
          <input
            id="degreeAndBranch"
            className={`form-input ${errors.degreeAndBranch ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. B.Tech CSE"
            value={formData.degreeAndBranch}
            onChange={(e) => onChange('degreeAndBranch', e.target.value)}
          />
          {errors.degreeAndBranch && <span className="error-text">{errors.degreeAndBranch}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="yearOfStudy">
            <span>
              Year of Study / Status <span className="optional-badge">Optional</span>
            </span>
          </label>
          <input
            id="yearOfStudy"
            className={`form-input ${errors.yearOfStudy ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. 3rd Year, Final Year, or Graduate"
            value={formData.yearOfStudy}
            onChange={(e) => onChange('yearOfStudy', e.target.value)}
          />
          <div className="preset-chip-list">
            {['3rd Year', 'Final Year', 'Graduate', 'Passed Out'].map((preset) => (
              <button
                key={preset}
                type="button"
                className="preset-chip"
                onClick={() => onChange('yearOfStudy', preset)}
              >
                {preset}
              </button>
            ))}
          </div>
          {errors.yearOfStudy && <span className="error-text">{errors.yearOfStudy}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="collegeName">
            <span>
              College / Institution Name <span className="optional-badge">Optional</span>
            </span>
          </label>
          <input
            id="collegeName"
            className={`form-input ${errors.collegeName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College (or leave blank)"
            value={formData.collegeName}
            onChange={(e) => onChange('collegeName', e.target.value)}
          />
          <span className="form-field-hint">
            Optional for interns who have already graduated or passed out.
          </span>
          {errors.collegeName && <span className="error-text">{errors.collegeName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="city">
            <span>City <span className="required-star">*</span></span>
          </label>
          <input
            id="city"
            className={`form-input ${errors.city ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Chennai"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
          />
          {errors.city && <span className="error-text">{errors.city}</span>}
        </div>
      </div>

      {/* Role, Department & Dates */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="department">
            <span>Department <span className="required-star">*</span></span>
          </label>
          <input
            id="department"
            className={`form-input ${errors.department ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Full Stack Development"
            value={formData.department}
            onChange={(e) => onChange('department', e.target.value)}
          />
          {errors.department && <span className="error-text">{errors.department}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="focusDomain">
            <span>Focus Area / Domain <span className="required-star">*</span></span>
          </label>
          <input
            id="focusDomain"
            className={`form-input ${errors.focusDomain ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Artificial Intelligence"
            value={formData.focusDomain}
            onChange={(e) => onChange('focusDomain', e.target.value)}
          />
          {errors.focusDomain && <span className="error-text">{errors.focusDomain}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="startDate">
            <span>Start Date <span className="required-star">*</span></span>
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
          <label className="form-label" htmlFor="endDate">
            <span>End Date <span className="required-star">*</span></span>
          </label>
          <input
            id="endDate"
            className={`form-input ${errors.endDate ? 'has-error' : ''}`}
            type="date"
            value={formData.endDate}
            onChange={(e) => onChange('endDate', e.target.value)}
          />
          {errors.endDate && <span className="error-text">{errors.endDate}</span>}
        </div>
      </div>

      <div className="form-row-2">
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

        <div className="form-group">
          <label className="form-label" htmlFor="mode">
            <span>Internship Mode</span>
          </label>
          <select
            id="mode"
            className="form-input"
            value={formData.mode}
            onChange={(e) => onChange('mode', e.target.value)}
          >
            <option value="Online">Online</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Primary Duties */}
      <div className="form-group">
        <label className="form-label">
          <span>Primary Duties & Assignments (4 key responsibilities)</span>
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {formData.duties.map((duty, idx) => (
            <input
              key={idx}
              className="form-input"
              type="text"
              value={duty}
              onChange={(e) => handleDutiesChange(idx, e.target.value)}
              placeholder={`Duty ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Official Company Credentials Toggles */}
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
