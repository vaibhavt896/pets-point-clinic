import React from 'react';
import { services } from '../data/services';

/* ── Professional SVG Icon Set ─────────────────────────────── */
const icons = {
  stethoscope: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.65l-.6 3.5a3 3 0 0 0 3 3.5h1.6a3 3 0 0 0 3-3.5l-.6-3.5" />
      <path d="M6 2v2" />
      <path d="M10 2v2" />
      <path d="M8 9.65v3.35a4 4 0 0 0 4 4h1a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2.5a3.5 3.5 0 0 1-7 0" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  ambulance: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10H6" />
      <path d="M8 8v4" />
      <path d="M1 16V8a2 2 0 0 1 2-2h11v11H3a2 2 0 0 1-2-2z" />
      <path d="M14 6h3l4 4v6h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  syringe: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3a2.1 2.1 0 0 1-2.97 0l-1.03-1.03a2.1 2.1 0 0 1 0-2.97L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  ),
  microscope: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  ),
  scalpel: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.11 19.89l1.42-1.42" />
      <path d="M20.07 3.93a2 2 0 0 0-2.83 0L6.34 14.83a2 2 0 0 0 0 2.84l.71.71a2 2 0 0 0 2.84 0L20.07 6.76a2 2 0 0 0 0-2.83z" />
      <path d="m3.7 20.3 1.8-1.8" />
      <path d="M2 22l2.12-2.12" />
    </svg>
  ),
  tooth: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5.5C12 3.01 9.99 1 7.5 1S3 3.01 3 5.5c0 3.52 2.67 5.32 3.66 8.15.38 1.1.63 2.32.85 3.58.38 2.2 2 3.77 4.49 3.77s4.11-1.57 4.49-3.77c.22-1.26.47-2.48.85-3.58C18.33 10.82 21 9.02 21 5.5 21 3.01 18.99 1 16.5 1S12 3.01 12 5.5z" />
    </svg>
  ),
  skin: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
    </svg>
  ),
  scissors: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  bowl: (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M4 12c0 4.42 3.58 8 8 8s8-3.58 8-8" />
      <path d="M12 4c-1 0-2.5.5-2.5 2S11 8 12 8s2.5-.5 2.5-2S13 4 12 4z" />
      <path d="M7.5 5C7 5 6 5.5 6 7s1 2 1.5 2" />
      <path d="M16.5 5c.5 0 1.5.5 1.5 2s-1 2-1.5 2" />
    </svg>
  ),
};

const ServiceCard = ({ iconId, title, desc, tag, price, featured, accent, index }) => {
  const bookingUrl = `https://wa.me/918299386977?text=${encodeURIComponent(
    `Hi, I'd like to book an appointment for ${title} at Pet's Point Animal Clinic.`
  )}`;

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="service-card"
      data-accent={accent || 'gold'}
      data-featured={featured ? 'true' : undefined}
      data-reveal
      data-reveal-delay={index * 60}
    >
      <div className="service-card__glow"></div>
      <div className="service-card__icon-wrap">
        {icons[iconId] || <span>{iconId}</span>}
      </div>
      <div className="service-card__tag">{tag}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <div className="service-card__cta">
        Book Now <span className="service-card__arrow">→</span>
      </div>
    </a>
  );
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__header" data-reveal>
        <span className="section-label">WHAT WE OFFER</span>
        <h2 className="services__title">
          Everything Your Pet Needs.<br />
          <em style={{ color: 'var(--accent-gold)' }}>All in One Place.</em>
        </h2>
        <p className="services__subtitle">
          From a first vaccination to a midnight emergency — every service your pet could ever need is here, under one roof, in the heart of Ratanlal Nagar.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
