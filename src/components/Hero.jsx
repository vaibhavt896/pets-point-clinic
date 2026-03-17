import React, { useEffect, useRef } from 'react';
import doctorImg from '../assets/Images/Hero — Doctor with pet.png';

const Counter = ({ target, unit, label }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const el = countRef.current;
          const targetValue = parseFloat(target);
          const isDecimal = targetValue % 1 !== 0;
          const duration = 2000;
          const start = performance.now();

          const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetValue * eased;
            el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="hero__stat">
      <span className="hero__stat-number" ref={countRef}>0</span>
      <span className="hero__stat-unit">{unit}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
};

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    class PawParticle {
      constructor(cv) {
        this.cv = cv;
        this.reset();
      }
      reset() {
        this.x = Math.random() * this.cv.width;
        this.y = Math.random() * this.cv.height + this.cv.height;
        this.size = Math.random() * 18 + 8;
        this.speed = Math.random() * 0.4 + 0.1;
        this.opacity = Math.random() * 0.12 + 0.03;
        this.drift = (Math.random() - 0.5) * 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
      }
      update() {
        this.y -= this.speed;
        this.x += this.drift;
        this.rotation += this.rotationSpeed;
        if (this.y < -50) this.reset();
      }
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px serif`;
        ctx.fillText('🐾', -this.size / 2, this.size / 2);
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 25 }, () => new PawParticle(canvas));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas className="hero__particles" ref={canvasRef}></canvas>
      <div className="hero__gradient"></div>
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <span>Open Now · 24/7 Emergency Care</span>
        </div>
        <h1 className="hero__headline">
          <span className="hero__line hero__line--1">Where Every</span>
          <span className="hero__line hero__line--2">Paw Matters</span>
        </h1>
        <p className="hero__sub">
          Your pet's health, our lifetime promise. 15 years of compassionate
          veterinary care, right here in Kanpur — open 24 hours, every day.
        </p>
        <div className="hero__stats">
          <Counter target="4.2" unit="★" label="Rating" />
          <div className="hero__stat-divider"></div>
          <Counter target="173" unit="+" label="Reviews" />
          <div className="hero__stat-divider"></div>
          <Counter target="15" unit="yrs" label="Experience" />
        </div>
        <div className="hero__actions">
          <a href="tel:+918299386977" className="btn btn--primary btn--emergency">
            <span className="btn__pulse"></span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Call Emergency
          </a>
          <a
            href="https://wa.me/918299386977?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Pet%27s%20Point%20Animal%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--book"
          >
            📅 Book Appointment
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__paw-ring hero__paw-ring--1"></div>
        <div className="hero__paw-ring hero__paw-ring--2"></div>
        <div className="hero__paw-ring hero__paw-ring--3"></div>
        <img src={doctorImg} alt="Doctor with pet" className="hero__image" />
      </div>
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
