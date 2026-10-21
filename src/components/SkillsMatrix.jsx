import { useState } from "react";
import { cvData } from "../data/cvData";
import { useInView } from "../hooks/useInView";
import "../styles/SkillsMatrix.css";

export const SkillsMatrix = () => {
  const [ref, isVisible] = useInView();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...cvData.skillsMatrix.map((item) => item.category)
  ];

  const filteredCategories =
    activeCategory === "all"
      ? cvData.skillsMatrix
      : cvData.skillsMatrix.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className={`skills-section fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header skills-header">
          <div>
            <span className="section-kicker">03. Technical Capabilities</span>
            <h2 className="section-title">Interactive Skills Matrix</h2>
            <p className="section-desc">
              Structured across core languages, component frameworks, responsive layout architectures, developer tooling, and modern AI engineering workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="skills-filter-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skills-pill-btn ${activeCategory === cat ? "skills-pill-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all" ? "All Domains" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group, idx) => (
            <div key={idx} className="skill-domain-card">
              <div className="skill-domain-header">
                <span className="skill-domain-indicator">0{idx + 1}</span>
                <h3 className="skill-domain-title">{group.category}</h3>
              </div>

              <div className="skill-chips-container">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <span className="skill-item__bullet">✦</span>
                    <span className="skill-item__name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Communication Banner */}
        <div className="skills-lang-banner">
          <div className="lang-banner-col">
            <span className="lang-banner-label">Spoken Languages & Communication</span>
            <div className="lang-items">
              {cvData.languagesSpoken.map((lang, lIdx) => (
                <div key={lIdx} className="lang-item">
                  <strong className="lang-name">{lang.language}:</strong>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lang-banner-col">
            <span className="lang-banner-label">Ongoing Practice & Algorithms</span>
            <div className="practice-items">
              {cvData.ongoingPractice.map((p, pIdx) => (
                <div key={pIdx} className="practice-item">
                  <span className="practice-platform">{p.platform}</span>
                  <span className="practice-focus">· {p.focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
