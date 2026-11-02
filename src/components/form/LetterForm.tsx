import React from 'react';
import type { InternshipLetterData, ValidationErrors, Salutation, PronounSet } from '../../types/document';
import { RefreshCw, RotateCcw, Sparkles, CheckSquare, Square } from 'lucide-react';

interface LetterFormProps {
  formData: InternshipLetterData;
  onChange: <K extends keyof InternshipLetterData>(field: K, value: InternshipLetterData[K]) => void;
  onReset: () => void;
  onLoadSample: () => void;
  onGenerate: () => void;
  errors: ValidationErrors;
}

export const LetterForm: React.FC<LetterFormProps> = ({
  formData,
  onChange,
  onReset,
  onLoadSample,
  onGenerate,
  errors
}) => {
  const handleSalutationChange = (salutation: Salutation) => {
    onChange('salutation', salutation);
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
          <h2 className="panel-title">Internship Letter Parameters</h2>
          <p className="panel-subtitle">Official Aruvixa Tech Solutions letterhead configuration</p>
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

      {/* Intern Name & Prefix */}
      <div className="form-row-2">
        <div className="form-group" style={{ maxWidth: '120px' }}>
          <label className="form-label" htmlFor="salutation">
            <span>Prefix <span className="required-star">*</span></span>
          </label>
          <select
            id="salutation"
            className="form-input"
            value={formData.salutation}
            onChange={(e) => handleSalutationChange(e.target.value as Salutation)}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>

        <div className="form-group" style={{ flex: 1 }}>
          <label className="form-label" htmlFor="internName">
            <span>Intern Full Name <span className="required-star">*</span></span>
          </label>
          <input
            id="internName"
            className={`form-input ${errors.internName ? 'has-error' : ''}`}
            type="text"
            placeholder="e.g. Suraj S"
            value={formData.internName}
            onChange={(e) => onChange('internName', e.target.value)}
          />
          {errors.internName && <span className="error-text">{errors.internName}</span>}
        </div>
      </div>

      {/* Academic Details */}
      <div className="form-group">
        <label className="form-label" htmlFor="academicYearDegree">
          <span>Academic Status / Degree <span className="required-star">*</span></span>
        </label>
        <input
          id="academicYearDegree"
          className={`form-input ${errors.academicYearDegree ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. a 3rd-year student of B.Tech. or Graduate of B.Tech."
          value={formData.academicYearDegree}
          onChange={(e) => onChange('academicYearDegree', e.target.value)}
        />
        <div className="preset-chip-list">
          {[
            'a 3rd-year student of B.Tech.',
            'a Final-year student of B.Tech.',
            'a Graduate of B.Tech.',
            'Graduate',
            'B.Tech. Graduate'
          ].map((preset) => (
            <button
              key={preset}
              type="button"
              className="preset-chip"
              onClick={() => onChange('academicYearDegree', preset)}
            >
              {preset}
            </button>
          ))}
        </div>
        {errors.academicYearDegree && <span className="error-text">{errors.academicYearDegree}</span>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="departmentSpecialization">
          <span>Branch / Specialization <span className="required-star">*</span></span>
        </label>
        <input
          id="departmentSpecialization"
          className={`form-input ${errors.departmentSpecialization ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. Computer Science and Engineering"
          value={formData.departmentSpecialization}
          onChange={(e) => onChange('departmentSpecialization', e.target.value)}
        />
        {errors.departmentSpecialization && (
          <span className="error-text">{errors.departmentSpecialization}</span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="collegeNameAndLocation">
          <span>
            College / Institution & City <span className="optional-badge">Optional</span>
          </span>
        </label>
        <input
          id="collegeNameAndLocation"
          className={`form-input ${errors.collegeNameAndLocation ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. Vel Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai (or leave blank)"
          value={formData.collegeNameAndLocation}
          onChange={(e) => onChange('collegeNameAndLocation', e.target.value)}
        />
        <span className="form-field-hint">
          Suitable for both current students and graduated / passed-out interns. Leave blank if not affiliated with an institution.
        </span>
        {errors.collegeNameAndLocation && (
          <span className="error-text">{errors.collegeNameAndLocation}</span>
        )}
      </div>

      {/* Internship Role & Dates */}
      <div className="form-group">
        <label className="form-label" htmlFor="domainRole">
          <span>Internship Domain / Track <span className="required-star">*</span></span>
        </label>
        <input
          id="domainRole"
          className={`form-input ${errors.domainRole ? 'has-error' : ''}`}
          type="text"
          placeholder="e.g. Full Stack Development"
          value={formData.domainRole}
          onChange={(e) => onChange('domainRole', e.target.value)}
        />
        {errors.domainRole && <span className="error-text">{errors.domainRole}</span>}
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
            <span>Letter Issue Date <span className="required-star">*</span></span>
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

      {/* Official Signatory & Seal Settings */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="signatoryName">
            <span>Signatory Name</span>
          </label>
          <input
            id="signatoryName"
            className="form-input"
            type="text"
            value={formData.signatoryName}
            onChange={(e) => onChange('signatoryName', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signatoryRole">
            <span>Signatory Title</span>
          </label>
          <input
            id="signatoryRole"
            className="form-input"
            type="text"
            value={formData.signatoryRole}
            onChange={(e) => onChange('signatoryRole', e.target.value)}
          />
        </div>
      </div>

      {/* Security & Official Asset Inclusion Toggles */}
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
