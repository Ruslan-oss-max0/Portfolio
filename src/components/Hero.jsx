import { cvData } from "../data/cvData";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Typographic Narrative */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge__dot"></span>
            <span className="hero-badge__text">Open to Full-Time Remote Opportunities</span>
          </div>

          <h1 className="hero-headline">
            Junior Front-End Developer
          </h1>

          <p className="hero-subhead">
            Hi, I'm <strong className="hero-name-highlight">{cvData.name}</strong>. I specialize in building robust, responsive web interfaces with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>modern JavaScript</strong>.
          </p>

          <p className="hero-description">
            I have shipped 2 commercial freelance web projects under NDA and am currently modernizing a live fitness web platform. My prior experience in hotel reservation systems provides a rare advantage: direct understanding of real booking flows, checkout friction, and conversion-focused UX.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn--primary">
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2.33334V11.6667M7 11.6667L11.6667 7.00001M7 11.6667L2.33334 7.00001" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={cvData.cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.91666 11.0833H11.0833M7 2.91666V8.75M7 8.75L4.66666 6.41666M7 8.75L9.33333 6.41666" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Quick Contact Chips */}
          <div className="hero-quick-links">
            <span className="quick-links-label">Connect:</span>
            <a href={cvData.telegramUrl} target="_blank" rel="noopener noreferrer" className="quick-chip">
              Telegram: {cvData.telegram}
            </a>
            <a href={`mailto:${cvData.email}`} className="quick-chip">
              Email
            </a>
            <a href={cvData.githubUrl} target="_blank" rel="noopener noreferrer" className="quick-chip">
              GitHub
            </a>
            <a href={cvData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="quick-chip">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Developer Snapshot Card */}
        <div className="hero-card">
          <div className="hero-card__header">
            <div className="hero-card__title-row">
              <span className="hero-card__tag">Engineering Profile</span>
              <span className="hero-card__indicator">Verified Skills</span>
            </div>
            <h3 className="hero-card__name">{cvData.name}</h3>
            <p className="hero-card__subtitle">{cvData.roleSpecialization}</p>
          </div>

          <div className="hero-card__body">
            <div className="hero-card__item">
              <span className="hero-card__label">Primary Focus</span>
              <span className="hero-card__val">React Hooks · TypeScript · Component Architecture</span>
            </div>

            <div className="hero-card__item">
              <span className="hero-card__label">Location / Availability</span>
              <span className="hero-card__val">Kyiv, Ukraine · Open to Full Remote</span>
            </div>

            <div className="hero-card__item">
              <span className="hero-card__label">Languages</span>
              <span className="hero-card__val">English (B2+ Upper-Int) · Ukrainian (Native)</span>
            </div>

            <div className="hero-card__item">
              <span className="hero-card__label">Key Disciplines</span>
              <span className="hero-card__val">BEM · Flexbox/Grid · DOM API · AI Tooling</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-card__metrics">
            <div className="metric-box">
              <span className="metric-box__num">2</span>
              <span className="metric-box__label">Commercial NDA Sites</span>
            </div>
            <div className="metric-box">
              <span className="metric-box__num">6+</span>
              <span className="metric-box__label">Web Projects</span>
            </div>
            <div className="metric-box">
              <span className="metric-box__num">B2B</span>
              <span className="metric-box__label">User Psychology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
