import React from 'react';
import { Download, Printer, Check, Loader2, Eye, FileText, ZoomIn, ZoomOut } from 'lucide-react';

interface PreviewToolbarProps {
  onDownloadPdf: () => void;
  onPrint: () => void;
  isDownloading: boolean;
  downloadSuccess: boolean;
  viewMode: 'generated' | 'reference';
  onToggleViewMode: (mode: 'generated' | 'reference') => void;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({
  onDownloadPdf,
  onPrint,
  isDownloading,
  downloadSuccess,
  viewMode,
  onToggleViewMode,
  zoomLevel,
  onZoomChange
}) => {
  return (
    <div className="preview-toolbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        {/* View Mode Switcher */}
        <div
          style={{
            display: 'inline-flex',
            background: 'var(--bg-surface)',
            padding: '3px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)'
          }}
        >
          <button
            type="button"
            onClick={() => onToggleViewMode('generated')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: 600,
              background: viewMode === 'generated' ? '#ffffff' : 'transparent',
              color: viewMode === 'generated' ? 'var(--primary)' : 'var(--text-muted)',
              boxShadow: viewMode === 'generated' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            <FileText size={13} />
            Live Generated Document
          </button>
          <button
            type="button"
            onClick={() => onToggleViewMode('reference')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: 600,
              background: viewMode === 'reference' ? '#ffffff' : 'transparent',
              color: viewMode === 'reference' ? 'var(--primary)' : 'var(--text-muted)',
              boxShadow: viewMode === 'reference' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            <Eye size={13} />
            Company Reference Demo
          </button>
        </div>

        {/* Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '4px 7px', fontSize: '0.75rem' }}
            onClick={() => onZoomChange(Math.max(0.5, zoomLevel - 0.1))}
            title="Zoom out"
          >
            <ZoomOut size={13} />
          </button>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '38px', textAlign: 'center' }}>
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: '4px 7px', fontSize: '0.75rem' }}
            onClick={() => onZoomChange(Math.min(1.2, zoomLevel + 0.1))}
            title="Zoom in"
          >
            <ZoomIn size={13} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrint}
          title="Print official letterhead"
        >
          <Printer size={15} />
          Print
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={onDownloadPdf}
          disabled={isDownloading}
          style={{ minWidth: '155px' }}
        >
          {isDownloading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Generating PDF...
            </>
          ) : downloadSuccess ? (
            <>
              <Check size={15} color="#34d399" />
              Downloaded!
            </>
          ) : (
            <>
              <Download size={15} />
              Download PDF
            </>
          )}
        </button>
      </div>
    </div>
  );
};
