import React from 'react';
import { Award, ShieldCheck, FileCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <div className="brand-icon">
          <FileCheck size={20} />
        </div>
        <div>
          <h1 className="brand-title">AutoHR Document System</h1>
          <p className="brand-subtitle">Company Document & Certificate Generator</p>
        </div>
      </div>

      <div className="nav-meta">
        <span className="badge-tag badge-active">
          <Award size={13} />
          Milestone 1: Internship Certificates
        </span>
        <span className="badge-tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#94a3b8' }}>
          <ShieldCheck size={13} />
          Internal Portal
        </span>
      </div>
    </header>
  );
};
