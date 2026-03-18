import React, { useEffect, useRef, useState } from 'react';
import doctorImg from '../assets/Images/Hero — Doctor with pet.png';
import '../Hero.css';

// Counter Component for Stats
const Counter = ({ target, unit, label, durationMs }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targetValue = parseFloat(target);
          const isDecimal = targetValue % 1 !== 0;

          if (prefersReducedMotion) {
            el.textContent = target;
            observer.unobserve(el);
            return;
          }

          const start = performance.now();

          const update = (now) => {
            const progress = Math.min((now - start) / durationMs, 1);
            // Cubic out easing
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetValue * eased;
            el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return (
    <div className="hero-stat">
      <span className="hero-stat__number">
        <span ref={countRef}>0</span>{unit}
      </span>
      <span className="hero-stat__label">{label}</span>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Parallax Refs
  const imageRef = useRef(null);
  const ringsRef = useRef([]);
  const badgeRightRef = useRef(null);
  const badgeLeftRef = useRef(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // --- 1. TYPEWRITER EFFECT (Last word only) ---
  const typingWord = "Matters.";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < typingWord.length) {
        setCharIndex(c => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(c => c - 1);
      } else if (!isDeleting && charIndex === typingWord.length) {
        setTimeout(() => setIsDeleting(true), 3000); // 3s pause
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false); // Restart loop immediately
      }
    }, isDeleting ? 40 : 120);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingWord.length]);

  const typedText = typingWord.substring(0, charIndex);

  // --- 2. PARALLAX SYSTEM ---
  useEffect(() => {
    // Disable on touch devices or screens strictly <= 900px as per spec
    if (window.matchMedia('(hover: none)').matches || window.innerWidth <= 900) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hero = heroRef.current;
    if (!hero) return;

    // Targets
    let targetX = 0;
    let targetY = 0;
    
    // Current positions (for lerp)
    let curX = 0;
    let curY = 0;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      // Normalize mouse coordinates to -1 to +1 relative to hero center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      targetX = (e.clientX - rect.left - centerX) / centerX;
      targetY = (e.clientY - rect.top - centerY) / centerY;
    };

    const handleMouseLeave = () => {
      // Spring back to center
      targetX = 0;
      targetY = 0;
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    hero.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    let animationId;
    
    // Lerp function: current + (target - current) * alpha
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const renderLoop = () => {
      if (!heroRef.current) {
        cancelAnimationFrame(animationId);
        return;
      }
      
      // Update scroll indicator opacity (fade out completely by 100px)
      const currentScrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - currentScrollY / 100);
      setScrollOpacity(newOpacity);

      // 4% lerp smoothing per frame
      curX = lerp(curX, targetX, 0.04);
      curY = lerp(curY, targetY, 0.04);

      // Apply specific movement multipliers
      // Image: moves opposite (pulls away)
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${curX * -10}px, ${curY * -10}px)`;
      }

      // Rings: move with mouse (depth layers)
      ringsRef.current.forEach((ring, idx) => {
        if (!ring) return;
        const multiplier = (idx + 1) * 3; // 3px, 6px, 9px
        ring.style.transform = `translate(${curX * multiplier}px, ${curY * multiplier}px)`;
      });

      // Badges
      if (badgeLeftRef.current) { // Rating badge
        badgeLeftRef.current.style.transform = `translate(${curX * 8}px, ${curY * 5}px)`;
      }
      if (badgeRightRef.current) { // Available badge
        badgeRightRef.current.style.transform = `translate(${curX * -6}px, ${curY * -4}px)`;
      }

      animationId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // --- 3. PAW PARTICLES CANVAS ---
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let isVisible = true;

    // Stop animation when tab is not visible
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    class PawParticle {
      constructor(cv) {
        this.cv = cv;
        this.reset(true);
      }
      reset(randomizeY = false) {
        this.x = Math.random() * this.cv.width;
        this.y = randomizeY ? Math.random() * this.cv.height : this.cv.height + 20;
        this.size = Math.random() * 14 + 8; // 8-22px
        this.speed = Math.random() * 0.4 + 0.1;
        this.opacity = (Math.random() * 0.10 + 0.03); // 3-13%
        this.driftScale = (Math.random() - 0.5) * 0.25; // wander ±0.25px/frame
        this.offset = Math.random() * 1000;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
      }
      update() {
        this.y -= this.speed;
        this.x += Math.sin((Date.now() + this.offset) / 1000) * this.driftScale;
        this.rotation += this.rotationSpeed;
        if (this.y < -50) this.reset();
      }
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px serif`;
        // Color applied via fillStyle in animate loop to save state changes, or here:
        ctx.fillStyle = "#B8912A";
        ctx.fillText('🐾', -this.size / 2, this.size / 2);
        ctx.restore();
      }
    }

    let particles = [];
    const initParticles = () => {
      const isMobile = window.innerWidth <= 600;
      const count = isMobile ? 12 : 28;
      particles = Array.from({ length: count }, () => new PawParticle(canvas));
    };

    const resize = () => {
      // Use logical pixel scaling if needed, but standard is fine
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Entrance delay 1800ms
    let startTime = Date.now();
    
    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Only draw/update after 1800ms
        if (Date.now() - startTime > 1800) {
           particles.forEach((p) => {
            p.update();
            p.draw(ctx);
          });
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Set up the ring refs array
  const setRingRef = (index) => (el) => {
    ringsRef.current[index] = el;
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      
      {/* 6. Background Layer Stack */}
      <div className="h-layer h-layer--base"></div>
      <div className="h-layer h-layer--ambient"></div>
      <div className="h-layer h-layer--grain"></div>
      <div className="h-layer h-layer--rule"></div>
      <canvas className="h-layer h-layer--canvas" ref={canvasRef} aria-hidden="true"></canvas>

      {/* Full Bleed Visuals (Right Half of Viewport) */}
      <div className="hero__fullscreen-visuals">
        <div className="hero-visual-stack">
          {/* Concentric Rings */}
          <div className="hero-parallax-layer" ref={setRingRef(0)}><div className="hero-ring hero-ring--1"></div></div>
          <div className="hero-parallax-layer" ref={setRingRef(1)}><div className="hero-ring hero-ring--2"></div></div>
          <div className="hero-parallax-layer" ref={setRingRef(2)}><div className="hero-ring hero-ring--3"></div></div>

          {/* Doctor Image - 550ms */}
          <div className="hero-parallax-layer" ref={imageRef}>
            <div className="hero-image-wrap">
              <div className="hero-image-float">
                <img 
                  src={doctorImg} 
                  alt="Expert Veterinary Doctor" 
                  className="hero-image" 
                  loading="eager" 
                  fetchpriority="high" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__container">
        
        {/* Left Column - Copy */}
        <div className="hero__copy">
          {/* Status Badge - 250ms */}
          <div className="hero-status-badge">
            <span className="hero-status-badge__dot"></span>
            <span className="hero-status-badge__text">Open Now · 6:30 AM – 10:30 PM · 24/7 Emergency</span>
          </div>

          {/* Typewriter Headline */}
          <h1 className="hero-headline">
            <div className="hero-headline__line">Where Every</div>
            <div className="hero-headline__line">
              Paw <span className="hero-headline--gold-italic">{typedText}</span>.
              <span className="hero-cursor"></span>
            </div>
          </h1>

          {/* Subheading - 950ms */}
          <p className="hero-subhead">
            Kanpur's most trusted veterinary care — led by a doctor with 15 years of experience. When your pet needs help, we are already here.
          </p>

          {/* Stats Bar - 1100ms */}
          <div className="hero-stats-bar">
            <Counter target="4.2" unit="★" label="RATING" durationMs={1800} />
            <div className="hero-stats-bar__divider"></div>
            <Counter target="173" unit="+" label="REVIEWS" durationMs={2000} />
            <div className="hero-stats-bar__divider"></div>
            <Counter target="15" unit="yrs" label="EXPERIENCE" durationMs={1500} />
          </div>

          {/* Action Buttons - 1250ms */}
          <div className="hero-ctas">
            <a 
              href="tel:+918299386977" 
              className="hero-btn hero-btn--primary"
            >
              <span className="hero-btn__ring"></span>
              📞 Call Emergency
            </a>
            <a 
              href="https://wa.me/918299386977?text=Hi%2C%20I%27d%20like%20to%20book%20an%20clinic%20visit." 
              target="_blank" rel="noopener noreferrer" 
              className="hero-btn hero-btn--secondary"
            >
              Book Appointment →
            </a>
          </div>
        </div>

        {/* Right Column Spacer - structural balance for text */}
        <div className="hero__visual-spacer"></div>

      </div>

      {/* Scroll Indicator - 2200ms */}
      <div className="hero-scroll" style={{ opacity: scrollOpacity }}>
        <span className="hero-scroll__text">SCROLL</span>
        <div className="hero-scroll__track">
           <div className="hero-scroll__thumb"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
