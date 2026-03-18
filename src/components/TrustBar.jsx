import React from 'react';

/* Clean inline SVG icons — no external dependencies */
const StarIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GoogleIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TrustBar = () => {
  return (
    <section className="trust-bar" data-reveal>
      <div className="trust-bar__container">
        <a
          href="https://www.justdial.com/Kanpur/Pets-Point-Animal-Clinic-Nala-Road-Ratanlal-Nagar/0512PX512-X512-201005161520-K6Z4_BZDET?trkid=&term=&ncatid=10616595&area=&search=Showing%20Results%20for%20%22Pets%20Point%20Animal%20Clinic%22%20in%20Kanpur&mncatname=Pets%20Point%20Animal%20Clinic&ftterm=Pets%20Point%20Animal%20Clinic&csell=&oncatid=10616595&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail="
          target="_blank"
          rel="noopener noreferrer"
          className="trust-bar__item trust-bar__item--link"
          data-reveal
          data-reveal-delay="0"
        >
          <span className="trust-bar__icon trust-bar__icon--gold">
            <StarIcon />
          </span>
          <div>
            <span className="trust-bar__value">4.2 / 5</span>
            <span className="trust-bar__label">JustDial Rating ↗</span>
          </div>
        </a>
        <div className="trust-bar__sep"></div>
        <a
          href="https://www.google.com/maps/search/Pet's+Point+Animal+Clinic+Kanpur"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-bar__item trust-bar__item--link"
          data-reveal
          data-reveal-delay="75"
        >
          <span className="trust-bar__icon trust-bar__icon--google">
            <GoogleIcon />
          </span>
          <div>
            <span className="trust-bar__value">Google</span>
            <span className="trust-bar__label">Verified Clinic ↗</span>
          </div>
        </a>
        <div className="trust-bar__sep"></div>
        <div className="trust-bar__item" data-reveal data-reveal-delay="150">
          <span className="trust-bar__icon trust-bar__icon--green">
            <ShieldIcon />
          </span>
          <div>
            <span className="trust-bar__value">15 Years</span>
            <span className="trust-bar__label">In Healthcare</span>
          </div>
        </div>
        <div className="trust-bar__sep"></div>
        <div className="trust-bar__item" data-reveal data-reveal-delay="225">
          <span className="trust-bar__icon trust-bar__icon--warm">
            <ClockIcon />
          </span>
          <div>
            <span className="trust-bar__value">24 / 7</span>
            <span className="trust-bar__label">Emergency Care</span>
          </div>
        </div>
        <div className="trust-bar__sep"></div>
        <a
          href="https://www.google.com/maps/search/Pet's+Point+Animal+Clinic+Kanpur"
          target="_blank"
          rel="noopener noreferrer"
          className="trust-bar__item trust-bar__item--link"
          data-reveal
          data-reveal-delay="300"
        >
          <span className="trust-bar__icon trust-bar__icon--gold">
            <MapPinIcon />
          </span>
          <div>
            <span className="trust-bar__value">Kanpur</span>
            <span className="trust-bar__label">Ratanlal Nagar ↗</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default TrustBar;
