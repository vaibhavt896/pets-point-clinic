import React, { useState } from 'react';

/* Professional SVG icons */
const AlertIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.004 2.667A13.286 13.286 0 0 0 2.667 15.92a13.17 13.17 0 0 0 1.79 6.656L2.667 29.333l6.98-1.83A13.3 13.3 0 0 0 16.004 29.3c7.352 0 13.329-5.966 13.329-13.306S23.356 2.667 16.004 2.667Zm0 24.316a10.944 10.944 0 0 1-5.908-1.722l-.424-.252-4.396 1.153 1.174-4.293-.276-.44a10.89 10.89 0 0 1-1.685-5.836c0-6.079 4.95-11.025 11.04-11.025 6.087 0 11.037 4.946 11.037 11.025 0 6.083-4.95 11.39-11.562 11.39Z" />
    <path d="M22.784 18.95c-.37-.186-2.194-1.083-2.534-1.207-.34-.124-.587-.186-.834.186-.247.37-.958 1.207-1.174 1.455-.217.248-.433.279-.803.093-.37-.186-1.563-.576-2.977-1.837-1.1-.981-1.843-2.192-2.06-2.562-.216-.37-.023-.57.163-.754.167-.166.37-.434.556-.65.186-.217.247-.372.37-.62.124-.247.063-.464-.031-.65-.093-.186-.834-2.01-1.143-2.751-.3-.722-.606-.624-.834-.636l-.71-.012a1.362 1.362 0 0 0-.989.464c-.34.37-1.298 1.269-1.298 3.093 0 1.824 1.33 3.586 1.515 3.834.186.247 2.616 3.993 6.337 5.6.886.382 1.577.61 2.116.781.889.282 1.698.242 2.338.147.713-.106 2.194-.897 2.504-1.762.31-.866.31-1.608.217-1.763-.093-.155-.34-.248-.71-.434Z" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const emergencyFaqs = [
  "Difficulty breathing, choking, or persistent coughing",
  "Severe bleeding or deep wounds that won't stop",
  "Inability to walk, sudden collapse, or seizures",
  "Ingestion of poison, chemicals, or toxic food",
  "Not eating or drinking for over 24 hours",
  "Severe vomiting or diarrhea (especially with blood)",
];

const Emergency = () => {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <section className="emergency">
      <div className="emergency__bg-pulse"></div>
      <div className="emergency__content" data-reveal>
        <div className="emergency__icon">
          <AlertIcon />
        </div>
        <h2 className="emergency__headline">Pet Emergency?</h2>
        <p className="emergency__sub">
          Don't wait. Don't search. Reach out directly.<br />
          Our team is awake, equipped, and ready — right now.
        </p>

        <div className="emergency__ctas">
          <a href="tel:+918299386977" className="emergency__cta">
            <span className="emergency__cta-ring"></span>
            <PhoneIcon />
            Call Now — We're Open 24/7
          </a>
          <a
            href="https://wa.me/918299386977?text=EMERGENCY%20-%20My%20pet%20needs%20urgent%20help.%20Please%20respond%20immediately."
            target="_blank"
            rel="noopener noreferrer"
            className="emergency__cta emergency__cta--wa"
          >
            <WhatsAppIcon />
            WhatsApp Emergency
          </a>
        </div>

        <p className="emergency__address">
          Shop No-12, Nala Road, Near Shastri Chowk, Ratanlal Nagar, Kanpur - 208022
        </p>

        <button
          className="emergency__faq-toggle"
          onClick={() => setShowFaq(!showFaq)}
          aria-expanded={showFaq}
        >
          <span>What counts as a pet emergency?</span>
          <span className={`emergency__faq-chevron ${showFaq ? 'emergency__faq-chevron--open' : ''}`}>
            <ChevronDown />
          </span>
        </button>

        {showFaq && (
          <ul className="emergency__faq-list">
            {emergencyFaqs.map((item, i) => (
              <li key={i} className="emergency__faq-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Emergency;
