import React from 'react';
import type { LorData, ValidationErrors, Salutation, PronounSet } from '../../types/document';
import { RefreshCw, RotateCcw, Sparkles, CheckSquare, Square } from 'lucide-react';

interface LorFormProps {
  formData: LorData;
  onChange: <K extends keyof LorData>(field: K, value: LorData[K]) => void;
  onReset: () => void;
  onLoadSample: () => void;
  onGenerate: () => void;
  errors: ValidationErrors;
}

export const LorForm: React.FC<LorFormProps> = ({
  formData,
  onChange,
  onReset,
  onLoadSample,
  onGenerate,
  errors
}) => {
  const handleSalutationChange = (salutation: Salutation) => {
    onChange('candidateSalutation', salutation);
    if (salutation === 'Ms.') {
      onChange('pronounSet', 'she/her/her');
    } else if (salutation === 'Mr.') {
      onChange('pronounSet', 'he/his/him');
    }
  };

  return (
    <div className="form-panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Recommendation Parameters</h2>
          <p className="panel-subtitle">Official Aruvixa Letter of Recommendation (LOR) configuration</p>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
            onClick={onLoadSample}
            title="Load sample recommendation data"
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
        <div className="form-group" style={{ maxWidth: '120px' }}>
          <label className="form-label" htmlFor="candidateSalutation">
            <span>Prefix <span className="required-star">*</span></span>
          </label>
          <select
            id="candidateSalutation"
            className="form-input"
            value={formData.candidateSalutation}
            onChange={(e) => handleSalutationChange(e.target.value as Salutation)}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>

        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label" htmlFor="candidateName">
            <span>Candidate Full Name <span className="required-star">*</span></span>
          </label>
          <input
            id="candidateName"
            className={`form-input ${errors.candidateName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Suraj S"
            value={formData.candidateName}
            onChange={(e) => onChange('candidateName', e.target.value)}
          />
          {errors.candidateName && <span className="error-text">{errors.candidateName}</span>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="candidateRole">
            <span>Candidate Role / Title <span className="required-star">*</span></span>
          </label>
          <input
            id="candidateRole"
            className={`form-input ${errors.candidateRole ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Full Stack Engineering Intern"
            value={formData.candidateRole}
            onChange={(e) => onChange('candidateRole', e.target.value)}
          />
          {errors.candidateRole && <span className="error-text">{errors.candidateRole}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="department">
            <span>Department / Track <span className="required-star">*</span></span>
          </label>
          <input
            id="department"
            className={`form-input ${errors.department ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Software Engineering & Cloud Architecture"
            value={formData.department}
            onChange={(e) => onChange('department', e.target.value)}
          />
          {errors.department && <span className="error-text">{errors.department}</span>}
        </div>
      </div>

      {/* Tenure Dates */}
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
          <label className="form-label" htmlFor="letterDate">
            <span>LOR Issue Date <span className="required-star">*</span></span>
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
          <label className="form-label" htmlFor="pronounSet">
            <span>Pronoun Reference</span>
          </label>
          <select
            id="pronounSet"
            className="form-input"
            value={formData.pronounSet}
            onChange={(e) => onChange('pronounSet', e.target.value as PronounSet)}
          >
            <option value="he/his/him">He / His / Him</option>
            <option value="she/her/her">She / Her / Her</option>
            <option value="they/their/them">They / Their / Them</option>
          </select>
        </div>
      </div>

      {/* Narrative Customizations */}
      <div className="form-group">
        <label className="form-label" htmlFor="keyContributions">
          <span>Technical Contributions & Performance</span>
        </label>
        <textarea
          id="keyContributions"
          className="form-input"
          rows={3}
          value={formData.keyContributions}
          onChange={(e) => onChange('keyContributions', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="softSkills">
          <span>Soft Skills & Professional Conduct</span>
        </label>
        <textarea
          id="softSkills"
          className="form-input"
          rows={2}
          value={formData.softSkills}
          onChange={(e) => onChange('softSkills', e.target.value)}
        />
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
