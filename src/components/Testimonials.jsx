import React from 'react';
import { reviews } from '../data/reviews';

const Testimonials = () => {
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="testimonials" id="reviews">
      <div className="testimonials__header" data-reveal>
        <span className="section-label">WHAT PET OWNERS SAY</span>
        <h2 className="testimonials__title">
          173+ Reviews.<br />
          <em style={{ color: 'var(--accent-gold)' }}>One Consistent Story.</em>
        </h2>
        <p className="testimonials__subtitle" style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Kanpur pet owners have been reviewing Pet's Point for years. Here is what they keep saying.
        </p>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {allReviews.map((review, index) => (
            <div key={index} className="review-chip">
              {review}
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials__featured" data-reveal>
        <div className="testimonials__quote-mark">"</div>
        <blockquote className="testimonials__quote">
          "Highly recommended. The staff is well-behaved and the doctors are genuinely experienced. I've never felt rushed here."
        </blockquote>
        <div className="testimonials__attribution">
          <span className="testimonials__stars">
            {[...Array(5)].map((_, i) => (
              <svg aria-hidden="true" key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-gold)" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </span>
          <span className="testimonials__source">— Verified Review · JustDial · Kanpur</span>
        </div>
      </div>
      <div className="testimonials__review-ctas" data-reveal>
        <p className="testimonials__cta-label">Had a great experience? Help other pet parents find us.</p>
        <div className="testimonials__cta-row">
          <a
            href="https://www.justdial.com/Kanpur/Pets-Point-Animal-Clinic-Nala-Road-Ratanlal-Nagar/0512PX512-X512-201005161520-K6Z4_BZDET?trkid=&term=&ncatid=10616595&area=&search=Showing%20Results%20for%20%22Pets%20Point%20Animal%20Clinic%22%20in%20Kanpur&mncatname=Pets%20Point%20Animal%20Clinic&ftterm=Pets%20Point%20Animal%20Clinic&csell=&oncatid=10616595&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail="
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost testimonials__cta-btn"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            Rate Us on JustDial
          </a>
          <a
            href="https://www.google.com/maps/search/Pet's+Point+Animal+Clinic+Kanpur"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost testimonials__cta-btn"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
