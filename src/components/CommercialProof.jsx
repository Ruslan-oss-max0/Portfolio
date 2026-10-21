import { cvData } from "../data/cvData";
import { useInView } from "../hooks/useInView";
import "../styles/CommercialProof.css";

export const CommercialProof = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="experience" className={`experience-section fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">01. Track Record & Work</span>
          <h2 className="section-title">Commercial Experience & Production Proof</h2>
          <p className="section-desc">
            Combining rigorous frontend engineering with real-world customer interaction insights to build high-converting, resilient digital products.
          </p>
        </div>

        <div className="experience-grid">
          {/* Card 1: Freelance Front-End Developer */}
          <div className="experience-card experience-card--featured">
            <div className="experience-card__header">
              <div className="experience-card__meta">
                <span className="experience-period">{cvData.commercialExperience[0].period}</span>
                <span className="experience-type">{cvData.commercialExperience[0].type}</span>
              </div>
              <h3 className="experience-role">{cvData.commercialExperience[0].role}</h3>
            </div>

            <div className="experience-stack">
              {cvData.commercialExperience[0].stack.map((item, idx) => (
                <span key={idx} className="stack-badge">
                  {item}
                </span>
              ))}
            </div>

            <ul className="experience-points">
              {cvData.commercialExperience[0].points.map((pt, idx) => (
                <li key={idx} className="experience-point">
                  <span className="point-bullet">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="experience-callout">
              <strong className="callout-title">Production Deliverables:</strong>
              <p className="callout-text">
                Full-lifecycle delivery adhering to NDA standards, mobile-first performance budgets, and modern component prototyping workflows.
              </p>
            </div>
          </div>

          {/* Card 2: Hospitality & Customer Psychology Background */}
          <div className="experience-card">
            <div className="experience-card__header">
              <div className="experience-card__meta">
                <span className="experience-period">{cvData.commercialExperience[1].period}</span>
                <span className="experience-type">{cvData.commercialExperience[1].type}</span>
              </div>
              <h3 className="experience-role">{cvData.commercialExperience[1].role}</h3>
            </div>

            <div className="experience-stack">
              {cvData.commercialExperience[1].stack.map((item, idx) => (
                <span key={idx} className="stack-badge stack-badge--neutral">
                  {item}
                </span>
              ))}
            </div>

            <ul className="experience-points">
              {cvData.commercialExperience[1].points.map((pt, idx) => (
                <li key={idx} className="experience-point">
                  <span className="point-bullet">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="experience-callout experience-callout--accent">
              <strong className="callout-title">The Engineering Advantage:</strong>
              <p className="callout-text">
                Most developers only see user behavior through analytics. Handling hundreds of real customer reservations taught me where checkout flows fail and why UX clarity directly impacts revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
