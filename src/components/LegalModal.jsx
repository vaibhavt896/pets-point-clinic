import React, { useEffect } from 'react';

const LegalModal = ({ isOpen, onClose, data }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className="legal-modal__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="legal-modal__close" onClick={onClose} aria-label="Close">✕</button>
        <div className="legal-modal__header">
          <h2>{data.title}</h2>
          <p>Last Updated: {data.lastUpdated}</p>
        </div>
        <div className="legal-modal__body">
          {data.sections.map((sec, i) => (
            <div key={i} className="legal-modal__section">
              <h3>{sec.heading}</h3>
              <p>{sec.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
