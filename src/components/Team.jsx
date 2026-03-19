import React from 'react';
import { team } from '../data/team';

const TeamCard = ({ name, role, speciality, image, emoji, years, quote, index }) => (
  <div className="team-card" data-reveal data-reveal-delay={index * 100}>
    <div className="team-card__inner">
      <div className="team-card__front">
        <div className="team-card__visual">
          {image ? (
            <div className="team-card__image-container">
              <img src={image} alt={name} className="team-card__image" />
            </div>
          ) : (
            <div className="team-card__emoji">{emoji}</div>
          )}
        </div>
        <div className="team-card__name">{name}</div>
        <div className="team-card__role">{role}</div>
        <div className="team-card__years">{years}</div>
        <div className="team-card__hint">Hover to learn more</div>
      </div>
      <div className="team-card__back">
        <div className="team-card__speciality">{speciality}</div>
        <div className="team-card__quote">"{quote}"</div>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team__header" data-reveal>
        <span className="section-label">Our Doctors</span>
        <h2 className="team__title">
          Meet the Hearts<br />
          <em style={{ color: 'var(--accent-gold)' }}>Behind the Healing</em>
        </h2>
        <p className="team__subtitle">
          Experienced, empathetic, and always available — our veterinary team is Kanpur's most trusted.
        </p>
      </div>
      <div className="team__grid">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
