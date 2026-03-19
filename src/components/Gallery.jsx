import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { galleryImages } from '../data/galleryImages';
import { useReveal } from '../hooks/useReveal';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Display only 12 initially, or all if selected
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 12);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when open
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex < galleryImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header" data-reveal>
          <span className="section-label">MOMENTS OF CARE</span>
          <h2 className="gallery__title">
            Every Photo Is<br />
            <em style={{ color: 'var(--accent-gold)' }}>a Story of Recovery.</em>
          </h2>
          <p className="gallery__subtitle">
            These aren't stock images. These are real patients, real families, and real moments from inside our clinic. Every one of them came to us worried. Every one of them left with relief.
          </p>
        </div>

        <div className="gallery-masonry">
          {displayedImages.map((src, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Happy patient ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">Recovered & Happy</span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && galleryImages.length > 12 && (
          <div className="gallery-actions" data-reveal data-reveal-delay="200">
            <button 
              className="btn btn--ghost" 
              onClick={() => setShowAll(true)}
            >
              Discover More Stories
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <div 
        className={`lightbox-overlay ${lightboxIndex !== null ? 'is-open' : ''}`}
        onClick={closeLightbox}
      >
        {lightboxIndex !== null && (
          <>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {lightboxIndex > 0 && (
              <button className="lightbox-nav prev" onClick={showPrev} aria-label="Previous">
                <svg viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img 
                src={galleryImages[lightboxIndex]} 
                alt={`Highlight ${lightboxIndex + 1}`} 
                className="lightbox-image"
              />
            </div>

            {lightboxIndex < galleryImages.length - 1 && (
              <button className="lightbox-nav next" onClick={showNext} aria-label="Next">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
