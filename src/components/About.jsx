import React from 'react';
import clinicExterior from '../assets/Images/Clinic exterior.png';

/* Inline SVG icons for the three pillars */
const HeartIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const BuildingIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const ClockIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text" data-reveal>
          <span className="section-label">ABOUT THE CLINIC</span>
          <h2 className="about__headline">
            Fifteen Years of<br />
            <em>Medicine.</em>
          </h2>
          <p className="about__body">
            Pet's Point Animal Clinic has brought fifteen years of veterinary experience to every single consultation in Ratanlal Nagar.
          </p>
          <p className="about__body">
            This experience matters. The clinic is rooted in this neighborhood. The doctor is rooted in this science. Together, they mean you never have to choose between convenience and expertise.
          </p>
          <p className="about__body">
            Our approach is this: we explain everything, we rush nothing, and we are available whenever you need us. Pet owners in Kanpur have trusted us with 173 reviews and a 4.2-star rating — not because we ask them to, but because they want to.
          </p>
          <div className="about__pillars">
            <div className="about__pillar" data-reveal data-reveal-delay="100">
              <div className="about__pillar-icon about__pillar-icon--warm">
                <HeartIcon />
              </div>
              <div>
                <strong>A Doctor Who Explains</strong>
                <p>Every diagnosis is communicated in plain language. You will never leave not knowing what is happening with your pet.</p>
              </div>
            </div>
            <div className="about__pillar" data-reveal data-reveal-delay="200">
              <div className="about__pillar-icon about__pillar-icon--gold">
                <BuildingIcon />
              </div>
              <div>
                <strong>Everything, Here</strong>
                <p>Consultations, diagnostics, surgery, grooming, and pet nutrition — no referrals required, no second trips.</p>
              </div>
            </div>
            <div className="about__pillar" data-reveal data-reveal-delay="300">
              <div className="about__pillar-icon about__pillar-icon--green">
                <ClockIcon />
              </div>
              <div>
                <strong>Always Available</strong>
                <p>Emergencies don't schedule themselves. Our doctor doesn't keep office-only hours for critical cases.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about__visual" data-reveal data-reveal-delay="200">
          <div className="about__img-wrap">
            <img src={clinicExterior} alt="Pet's Point Animal Clinic exterior in Ratanlal Nagar, Kanpur" className="about__img" loading="lazy" />
            <div className="about__img-overlay"></div>
          </div>
          <div className="about__badge-float">
            <span className="about__badge-icon">⭐</span>
            <span>4.2 Rated on JustDial</span>
          </div>
          <a
            href="https://www.google.com/maps/search/Pet's+Point+Animal+Clinic+Kanpur"
            target="_blank"
            rel="noopener noreferrer"
            className="about__map-cta"
          >
            <MapPinIcon />
            <span>📍 Visit Our Clinic</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
