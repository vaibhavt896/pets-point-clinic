import React, { useState } from 'react';

/* Inline SVG Icons */
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const WhatsAppSmall = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.004 2.667A13.286 13.286 0 0 0 2.667 15.92a13.17 13.17 0 0 0 1.79 6.656L2.667 29.333l6.98-1.83A13.3 13.3 0 0 0 16.004 29.3c7.352 0 13.329-5.966 13.329-13.306S23.356 2.667 16.004 2.667Zm0 24.316a10.944 10.944 0 0 1-5.908-1.722l-.424-.252-4.396 1.153 1.174-4.293-.276-.44a10.89 10.89 0 0 1-1.685-5.836c0-6.079 4.95-11.025 11.04-11.025 6.087 0 11.037 4.946 11.037 11.025 0 6.083-4.95 11.39-11.562 11.39Z" />
    <path d="M22.784 18.95c-.37-.186-2.194-1.083-2.534-1.207-.34-.124-.587-.186-.834.186-.247.37-.958 1.207-1.174 1.455-.217.248-.433.279-.803.093-.37-.186-1.563-.576-2.977-1.837-1.1-.981-1.843-2.192-2.06-2.562-.216-.37-.023-.57.163-.754.167-.166.37-.434.556-.65.186-.217.247-.372.37-.62.124-.247.063-.464-.031-.65-.093-.186-.834-2.01-1.143-2.751-.3-.722-.606-.624-.834-.636l-.71-.012a1.362 1.362 0 0 0-.989.464c-.34.37-1.298 1.269-1.298 3.093 0 1.824 1.33 3.586 1.515 3.834.186.247 2.616 3.993 6.337 5.6.886.382 1.577.61 2.116.781.889.282 1.698.242 2.338.147.713-.106 2.194-.897 2.504-1.762.31-.866.31-1.608.217-1.763-.093-.155-.34-.248-.71-.434Z" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* vCard download */
const handleSaveContact = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Pet's Point Animal Clinic
ORG:Pet's Point Animal Clinic
TEL;TYPE=WORK,VOICE:+918299386977
ADR;TYPE=WORK:;;Shop No-12, Nala Road, Near Shastri Chowk;Kanpur;UP;208022;India
URL:https://wa.me/918299386977
NOTE:24/7 Veterinary Clinic — Ratanlal Nagar, Kanpur
END:VCARD`;
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Pets_Point_Animal_Clinic.vcf";
  a.click();
  URL.revokeObjectURL(url);
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', pet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Appointment Inquiry%0A%0AName: ${form.name}%0APhone: ${form.phone}%0APet: ${form.pet}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918299386977?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__grid">
        {/* Left Column: Info + Form */}
        <div className="contact__info" data-reveal>
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__heading">Visit or Reach Out</h2>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-icon contact__detail-icon--gold"><MapPinIcon /></span>
              <div>
                <strong>Address</strong>
                <p>Shop No-12, Nala Road, Near Shastri Chowk,<br />Ratanlal Nagar, Kanpur - 208022, UP</p>
              </div>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon contact__detail-icon--green"><ClockIcon /></span>
              <div>
                <strong>Hours</strong>
                <p>Mon – Sun: Open 24 Hours<br />Emergency: Always Available</p>
              </div>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon contact__detail-icon--warm"><PhoneIcon /></span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+918299386977">+91 82993-86977</a>
              </div>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon contact__detail-icon--wagreen"><WhatsAppSmall /></span>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/918299386977" target="_blank" rel="noopener noreferrer">Message Us on WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="contact__actions">
            <a
              href="https://www.google.com/maps/search/Pet's+Point+Animal+Clinic+Ratanlal+Nagar+Kanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost contact__directions"
            >
              Get Directions →
            </a>
            <button className="btn btn--ghost contact__save" onClick={handleSaveContact}>
              <DownloadIcon /> Save Contact
            </button>
          </div>

          {/* Quick Inquiry Form */}
          <div className="contact__form-wrap">
            <h3 className="contact__form-title">Quick Appointment Inquiry</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Pet Type (e.g. Dog, Cat)"
                value={form.pet}
                onChange={(e) => setForm({ ...form, pet: e.target.value })}
              />
              <textarea
                placeholder="Brief description (optional)"
                rows="2"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
              <button type="submit" className="btn btn--primary contact__submit">
                <SendIcon /> {sent ? 'Sent via WhatsApp!' : 'Send via WhatsApp'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="contact__map" data-reveal data-reveal-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5!2d80.3489!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37f0c9c6b56d%3A0x2c99!2sRatan+Lal+Nagar%2C+Kanpur%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pet's Point Animal Clinic — Ratanlal Nagar, Kanpur"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
