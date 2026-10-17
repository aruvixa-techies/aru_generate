import React from 'react';
import { DOCUMENT_TYPES } from '../../config/documentRegistry';
import type { DocumentTypeOption } from '../../types/document';
import { Layers, CheckCircle2, Lock } from 'lucide-react';

interface DocumentCatalogProps {
  selectedDocId: string;
  onSelectDoc: (doc: DocumentTypeOption) => void;
}

export const DocumentCatalog: React.FC<DocumentCatalogProps> = ({
  selectedDocId,
  onSelectDoc
}) => {
  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <h2 className="catalog-title">
          <Layers size={18} color="var(--primary)" />
          HR Document Catalog
        </h2>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Select a template to configure and generate
        </span>
      </div>

      <div className="catalog-grid">
        {DOCUMENT_TYPES.map((doc) => {
          const isSelected = doc.id === selectedDocId;
          const isActive = doc.status === 'active';

          return (
            <div
              key={doc.id}
              className={`doc-card ${isSelected ? 'selected' : ''} ${!isActive ? 'disabled' : ''}`}
              onClick={() => {
                if (isActive) {
                  onSelectDoc(doc);
                }
              }}
              role="button"
              tabIndex={isActive ? 0 : -1}
              aria-disabled={!isActive}
            >
              <div className="doc-card-header">
                <span className="doc-card-title">{doc.title}</span>
                {isActive ? (
                  <CheckCircle2 size={16} color="var(--primary)" />
                ) : (
                  <Lock size={14} color="var(--text-subtle)" />
                )}
              </div>

              <p className="doc-card-desc">{doc.description}</p>

              <div className="doc-card-footer">
                <span className={`badge-tag ${isActive ? 'badge-active' : 'badge-coming-soon'}`}>
                  {doc.badge}
                </span>
                <span>{doc.estimatedTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
