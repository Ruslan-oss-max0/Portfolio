import { cvData } from "../data/cvData";
import { useInView } from "../hooks/useInView";
import "../styles/EducationTimeline.css";

export const EducationTimeline = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className={`education-section fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">04. Foundation & Growth</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Rigorous specialized training programs and certifications completed alongside continuous self-directed algorithm and architecture studies.
          </p>
        </div>

        <div className="education-timeline">
          {cvData.education.map((item, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-node">
                <span className="node-dot"></span>
                {idx < cvData.education.length - 1 && <span className="node-line"></span>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-institution">{item.institution}</h3>
                    <p className="timeline-program">{item.program}</p>
                  </div>
                  <span className="timeline-badge">{item.credential}</span>
                </div>

                <p className="timeline-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
