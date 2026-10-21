import "../styles/ProjectCard.css";

export const ProjectCard = ({ project, onImageClick }) => {
  return (
    <article className="case-card">
      {/* Clickable Image Preview */}
      <div
        className="case-card__image-container"
        onClick={() => onImageClick(project.image)}
        title="Click to view full-resolution preview"
      >
        <img
          src={project.image}
          alt={`Preview of ${project.name}`}
          className="case-card__image"
          loading="lazy"
        />
        <div className="case-card__image-overlay">
          <span className="case-card__zoom-hint">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.33334 5.33334V9.33334M5.33334 7.33334H9.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Inspect Screenshot
          </span>
        </div>
      </div>

      {/* Content & Case Study Details */}
      <div className="case-card__body">
        {/* Unboxed Metadata Header */}
        <div className="case-card__meta">
          <span className="case-card__category">{project.category}</span>
          <span aria-hidden="true" className="case-card__sep">·</span>
          <span className="case-card__stack-summary">
            {Array.isArray(project.tech) ? project.tech.slice(0, 3).join(", ") : project.tech}
          </span>
        </div>

        <h3 className="case-card__title">{project.name}</h3>

        <p className="case-card__summary">{project.summary}</p>

        {/* Case Study Breakdown: Problem & Solution */}
        <div className="case-study-details">
          <div className="case-study-block">
            <span className="case-study-label">The Challenge</span>
            <p className="case-study-text">{project.problem}</p>
          </div>

          <div className="case-study-block">
            <span className="case-study-label">Engineering Solution</span>
            <p className="case-study-text">{project.solution}</p>
          </div>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="case-card__highlights">
            <span className="highlights-heading">Highlights:</span>
            <ul className="highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i} className="highlight-item">
                  <span className="highlight-bullet">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Badges List */}
        <div className="case-card__tags">
          {Array.isArray(project.tech)
            ? project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">
                  {t}
                </span>
              ))
            : null}
        </div>

        {/* Action Buttons: Live Demo and GitHub */}
        <div className="case-card__actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-btn--live"
          >
            <span>Live Demo</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.91666 11.0833L11.0833 2.91667M11.0833 2.91667H4.66666M11.0833 2.91667V9.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-btn--code"
          >
            <span>GitHub Code</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4.66666 4.08334L1.75 7.00001L4.66666 9.91667M9.33333 4.08334L12.25 7.00001L9.33333 9.91667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};
