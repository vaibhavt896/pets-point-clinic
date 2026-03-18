import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} id="mainNav">
        <div className="nav__logo">
          <img src="/favicon.png" alt="Pet's Point" className="nav__logo-img" />
          <div className="nav__brand">
            <span className="nav__name">Pet's Point</span>
            <span className="nav__sub">Animal Clinic</span>
          </div>
        </div>
        <ul className="nav__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Our Doctors</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="tel:+918299386977" className="nav__emergency-pulse">
          <span className="nav__emergency-pulse-ring"></span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'4px'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> 
          Emergency
        </a>
        <button 
          className="nav__hamburger" 
          aria-label="Toggle Menu" 
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </nav>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <button className="mobile-overlay__close" onClick={toggleMobileMenu}>✕</button>
        <a href="#services" className="mobile-link" onClick={toggleMobileMenu}>Services</a>
        <a href="#about" className="mobile-link" onClick={toggleMobileMenu}>About</a>
        <a href="#team" className="mobile-link" onClick={toggleMobileMenu}>Our Doctors</a>
        <a href="#reviews" className="mobile-link" onClick={toggleMobileMenu}>Reviews</a>
        <a href="#contact" className="mobile-link" onClick={toggleMobileMenu}>Contact</a>
        <a href="tel:+918299386977" style={{ color: 'var(--accent-warm)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Emergency</a>
      </div>
    </>
  );
};

export default Navbar;
